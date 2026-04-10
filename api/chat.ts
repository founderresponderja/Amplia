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

function sanitizeInput(value: string): string {
  return value.replace(/[\u0000-\u001F\u007F]/g, '').trim().slice(0, 1000);
}

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    res.status(500).json({ error: 'Server is not configured' });
    return;
  }

  const body = (req.body || {}) as ChatBody;
  const origin = String(req.headers?.origin || '');
  const host = String(req.headers?.host || '');
  if (origin && host) {
    try {
      const originHost = new URL(origin).host;
      if (originHost !== host) {
        res.status(403).json({ error: 'Forbidden origin' });
        return;
      }
    } catch {
      res.status(403).json({ error: 'Invalid origin header' });
      return;
    }
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
        systemInstruction: `You are the Expert Sales & Tech Lead at Amplia Solutions (Lisbon).
Language: Respond ONLY in ${LANGUAGE_MAP[lang]}.
- Keep answers concise, practical, and business-oriented.
- Always return 2-3 "options" for next actions when possible.`,
      },
    });

    let parsed: { text?: string; options?: string[] } = {};
    try {
      parsed = JSON.parse(response.text || '{}');
    } catch {
      parsed = { text: response.text || 'Ocorreu um erro ao gerar resposta.', options: [] };
    }

    res.status(200).json({
      text: typeof parsed.text === 'string' ? parsed.text : 'Ocorreu um erro ao gerar resposta.',
      options: Array.isArray(parsed.options) ? parsed.options.slice(0, 3) : [],
    });
  } catch {
    res.status(502).json({ error: 'AI service unavailable' });
  }
}
