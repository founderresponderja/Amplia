import { GoogleGenAI, Type } from '@google/genai';

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
  if (raw == null) return {};
  if (typeof raw === 'string') {
    try {
      return JSON.parse(raw) as ChatBody;
    } catch {
      return {};
    }
  }
  if (typeof raw === 'object') return raw as ChatBody;
  return {};
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
      model: 'gemini-2.0-flash',
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
        systemInstruction: `You are the Expert Sales & Tech Lead at Amplia Solutions (Lisbon).
Language: Respond ONLY in ${LANGUAGE_MAP[lang]}.
- Keep answers concise, practical, and business-oriented.
- Always return 2-3 "options" for next actions when possible.`,
      },
    });

    const rawText = response.text ?? '';
    let parsed: { text?: string; options?: string[] } = {};
    try {
      parsed = JSON.parse(rawText || '{}');
    } catch {
      parsed = { text: rawText || 'Ocorreu um erro ao gerar resposta.', options: [] };
    }

    res.status(200).json({
      text: typeof parsed.text === 'string' ? parsed.text : 'Ocorreu um erro ao gerar resposta.',
      options: Array.isArray(parsed.options) ? parsed.options.slice(0, 3) : [],
    });
  } catch (err) {
    console.error('[api/chat] Gemini error', err);
    res.status(502).json({ error: 'AI service unavailable' });
  }
}
