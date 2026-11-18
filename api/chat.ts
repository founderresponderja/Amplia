import { GoogleGenAI, ThinkingLevel, Type } from '@google/genai';
import { checkRateLimit, getClientIp, parseJsonBodyWithLimit } from './lib/request-security.js';
import { sendChatbotLogEmail } from './lib/resend-mail.js';

type ChatBody = {
  message?: string;
  lang?: 'pt' | 'en' | 'es';
};

const CHAT_BODY_LIMIT_BYTES = 8 * 1024;
const CHAT_RATE_LIMIT_WINDOW_MS = 60 * 1000;
const CHAT_RATE_LIMIT_MAX_REQUESTS = 10;

// Frankfurt (EU) by default. Do not use europe-west2: it is London, outside the EU.
const DEFAULT_VERTEX_LOCATION = 'europe-west3';
const DEFAULT_GEMINI_MODEL = 'gemini-3.5-flash';
// The SDK does not build the correct host for the EU multi-region location.
const VERTEX_EU_BASE_URL = 'https://aiplatform.eu.rep.googleapis.com/';
const AI_REQUEST_TIMEOUT_MS = 20 * 1000;
// Gemini 3 thinking counts as output tokens, so leave room for the visible reply.
const AI_MAX_OUTPUT_TOKENS = 1024;
const AI_ERROR_LOG_MAX_LENGTH = 300;

type VertexServiceAccount = {
  project_id: string;
  client_email: string;
  private_key: string;
};

const LANGUAGE_MAP: Record<string, string> = {
  pt: 'Portuguese',
  en: 'English',
  es: 'Spanish',
};

/** Normalise host for comparison (www vs apex, case). */
function canonicalHost(host: string): string {
  return host.split(':')[0].toLowerCase().replace(/^www\./, '');
}

/** Allow same site when Origin and Host differ only by www (common on Vercel). */
function isAllowedOrigin(origin: string, hostHeader: string, forwardedHost?: string): boolean {
  if (!origin) return true;
  try {
    const originHost = new URL(origin).host;
    const effective =
      (forwardedHost || '').split(',')[0].trim() ||
      (hostHeader || '').split(',')[0].trim();
    if (!effective) return true;
    const a = canonicalHost(originHost);
    const b = canonicalHost(effective);
    return a === b;
  } catch {
    return false;
  }
}

function sanitizeInput(value: string): string {
  return value.replace(/[\u0000-\u001F\u007F]/g, '').trim().slice(0, 1000);
}

function isValidLang(value: unknown): value is 'pt' | 'en' | 'es' {
  return typeof value === 'string' && Object.hasOwn(LANGUAGE_MAP, value);
}

function buildPreview(value: string, max: number): string {
  return value.slice(0, max);
}

function parseVertexServiceAccount(raw: string | undefined): VertexServiceAccount | null {
  if (!raw) return null;
  try {
    const trimmed = raw.trim();
    const json = trimmed.startsWith('{') ? trimmed : Buffer.from(trimmed, 'base64').toString('utf8');
    const parsed = JSON.parse(json) as Partial<VertexServiceAccount>;
    if (!parsed.project_id || !parsed.client_email || !parsed.private_key) return null;
    return {
      project_id: parsed.project_id,
      client_email: parsed.client_email,
      private_key: parsed.private_key.replace(/\\n/g, '\n'),
    };
  } catch {
    return null;
  }
}

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const serviceAccount = parseVertexServiceAccount(process.env.GOOGLE_SERVICE_ACCOUNT_JSON);
  if (!serviceAccount) {
    console.error('[api/chat] Missing or invalid Vertex AI service account');
    res.status(500).json({ error: 'Server is not configured' });
    return;
  }

  const parsedBody = parseJsonBodyWithLimit(req.body, CHAT_BODY_LIMIT_BYTES);
  if (!parsedBody.ok) {
    if (parsedBody.code === 'body_too_large') {
      res.status(413).json({ error: 'Payload too large' });
      return;
    }
    res.status(400).json({ error: 'Invalid JSON payload' });
    return;
  }

  const body = parsedBody.body as ChatBody;
  const origin = String(req.headers?.origin || '');
  const host = String(req.headers?.host || '');
  const forwardedHost = String(req.headers?.['x-forwarded-host'] || '');
  if (origin && (host || forwardedHost) && !isAllowedOrigin(origin, host, forwardedHost)) {
    console.warn('[api/chat] Forbidden origin');
    res.status(403).json({ error: 'Forbidden origin' });
    return;
  }

  const clientIp = getClientIp(req);
  const limit = checkRateLimit({
    key: `chat:${clientIp}`,
    limit: CHAT_RATE_LIMIT_MAX_REQUESTS,
    windowMs: CHAT_RATE_LIMIT_WINDOW_MS,
  });
  if (!limit.allowed) {
    res.setHeader('Retry-After', String(limit.retryAfterSec));
    res.status(429).json({ error: 'Too many requests' });
    return;
  }

  const lang = isValidLang(body.lang) ? body.lang : 'pt';
  const message = typeof body.message === 'string' ? sanitizeInput(body.message) : '';

  if (!message || message.length < 2) {
    res.status(400).json({ error: 'Message is required' });
    return;
  }

  try {
    const location = process.env.GOOGLE_CLOUD_LOCATION || DEFAULT_VERTEX_LOCATION;
    const ai = new GoogleGenAI({
      vertexai: true,
      project: process.env.GOOGLE_CLOUD_PROJECT || serviceAccount.project_id,
      location,
      httpOptions: {
        timeout: AI_REQUEST_TIMEOUT_MS,
        ...(location === 'eu' ? { baseUrl: VERTEX_EU_BASE_URL } : {}),
      },
      googleAuthOptions: {
        credentials: {
          client_email: serviceAccount.client_email,
          private_key: serviceAccount.private_key,
        },
      },
    });
    const response = await ai.models.generateContent({
      model: process.env.GEMINI_MODEL || DEFAULT_GEMINI_MODEL,
      contents: message,
      config: {
        maxOutputTokens: AI_MAX_OUTPUT_TOKENS,
        thinkingConfig: { thinkingLevel: ThinkingLevel.LOW },
        responseMimeType: 'application/json',
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            text: { type: Type.STRING },
            options: { type: Type.ARRAY, items: { type: Type.STRING } },
          },
          required: ['text'],
        },
        systemInstruction: `És a Amplia, a assistente virtual da Amplia Solutions. És simpática, empática e directa. Falas em português europeu de forma natural e acessível, como uma pessoa real — não como um robot.

O teu objectivo principal é ajudar quem visita o site a perceber como a Amplia Solutions pode resolver os seus problemas. Começa sempre por perceber o que a pessoa precisa antes de sugerir soluções.

Regras de comportamento:
- Responde de forma simples e humana. Só entras em detalhes técnicos se a pessoa perguntar explicitamente.
- Nunca uses jargão desnecessário.
- Sê empática — se alguém está frustrado ou com dúvidas, reconhece isso antes de responder.
- Nunca inventes funcionalidades ou estatísticas.
- Se não souberes a resposta, diz honestamente e sugere que contactem através do formulário.

O que a Amplia Solutions faz:
A Amplia Solutions é uma empresa portuguesa da Grande Lisboa que desenvolve software à medida com IA para empresas e particulares. O nosso negócio principal é criar aplicações personalizadas para resolver problemas específicos de cada cliente.

Para além do desenvolvimento à medida, temos quatro produtos próprios disponíveis:

1. Responder Já (responderja.pt) — responde automaticamente a avaliações no Google, Booking e TripAdvisor com IA, no tom de voz do negócio. Para restaurantes, hotéis e negócios locais.

2. Lia — agente de carreira com IA que optimiza CVs, encontra vagas compatíveis e prepara para entrevistas. Para quem procura emprego ou quer evoluir profissionalmente.

3. Amplia Home Studio — transforma fotografias de espaços em projectos de decoração completos com lista de materiais e estimativa de custos. Para particulares e profissionais de decoração.

4. OpsFlow — gera automaticamente ficheiros de configuração, pipelines de integração contínua e configurações cloud. Para developers e equipas técnicas.

Quando alguém perguntar sobre desenvolvimento à medida:
Explica que é o nosso serviço principal. Pergunta o que precisam de construir e recolhe informação básica (tipo de app, problema que resolve, prazo, orçamento aproximado). Encaminha sempre para o formulário de contacto para uma conversa mais detalhada.

Quando alguém perguntar sobre os produtos:
Apresenta o produto mais relevante para o problema da pessoa. Menciona o período de teste gratuito. Encaminha para o site do produto quando aplicável.`,
      },
    });

    const rawText = response.text ?? '';
    let parsed: { text?: string; options?: string[] } = {};
    try {
      parsed = JSON.parse(rawText || '{}');
    } catch {
      parsed = { text: rawText || 'Ocorreu um erro ao gerar resposta.', options: [] };
    }

    const replyText =
      typeof parsed.text === 'string' ? parsed.text : 'Ocorreu um erro ao gerar resposta.';

    // Avoid storing full conversation content in logs/email by default.
    void sendChatbotLogEmail({
      userMessage: `[len:${message.length}] ${buildPreview(message, 240)}`,
      assistantReply: `[len:${replyText.length}] ${buildPreview(replyText, 240)}`,
    }).catch(() => console.error('[api/chat] chatbot email log failed'));

    res.status(200).json({
      text: replyText,
      options: Array.isArray(parsed.options) ? parsed.options.slice(0, 3) : [],
    });
  } catch (err) {
    // Log the provider's status and error only: never the visitor's conversation.
    const providerError = (typeof err === 'object' && err !== null ? err : {}) as {
      status?: unknown;
      message?: unknown;
    };
    const status = String(providerError.status ?? 'unknown');
    const detail = String(providerError.message ?? 'unknown error')
      .replace(/\s+/g, ' ')
      .slice(0, AI_ERROR_LOG_MAX_LENGTH);
    console.error(`[api/chat] AI provider request failed (status: ${status}): ${detail}`);
    res.status(502).json({ error: 'AI service unavailable' });
  }
}

