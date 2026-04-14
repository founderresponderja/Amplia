import { GoogleGenAI, Type } from '@google/genai';
import { parseJsonBody } from './lib/parse-body.js';
import { sendChatbotLogEmail } from './lib/resend-mail.js';

type ChatBody = {
  message?: string;
  lang?: 'pt' | 'en' | 'es';
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

function parseBody(raw: unknown): ChatBody {
  return parseJsonBody(raw) as ChatBody;
}

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const apiKey =
    process.env.GEMINI_API_KEY ||
    process.env.GOOGLE_GENERATIVE_AI_API_KEY ||
    process.env.GOOGLE_AI_API_KEY;
  if (!apiKey) {
    console.error('[api/chat] Missing GEMINI_API_KEY (or GOOGLE_GENERATIVE_AI_API_KEY)');
    res.status(500).json({ error: 'Server is not configured' });
    return;
  }

  const body = parseBody(req.body);
  const origin = String(req.headers?.origin || '');
  const host = String(req.headers?.host || '');
  const forwardedHost = String(req.headers?.['x-forwarded-host'] || '');
  if (origin && (host || forwardedHost) && !isAllowedOrigin(origin, host, forwardedHost)) {
    console.error('[api/chat] Forbidden origin', { origin, host });
    res.status(403).json({ error: 'Forbidden origin' });
    return;
  }

  const lang = body.lang && LANGUAGE_MAP[body.lang] ? body.lang : 'pt';
  const message = typeof body.message === 'string' ? sanitizeInput(body.message) : '';

  if (!message) {
    res.status(400).json({ error: 'Message is required' });
    return;
  }

  try {
    const ai = new GoogleGenAI({ apiKey });
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: message,
      config: {
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

    void sendChatbotLogEmail({
      userMessage: message,
      assistantReply: replyText,
    }).catch((mailErr) => console.error('[api/chat] chatbot email log failed', mailErr));

    res.status(200).json({
      text: replyText,
      options: Array.isArray(parsed.options) ? parsed.options.slice(0, 3) : [],
    });
  } catch (err) {
    console.error('[api/chat] Gemini error', err);
    res.status(502).json({ error: 'AI service unavailable' });
  }
}

