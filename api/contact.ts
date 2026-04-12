import { assertSameOrigin } from './lib/origin';
import { sendContactEmail } from './lib/resend-mail';

function parseBody(raw: unknown): Record<string, unknown> {
  if (raw == null) return {};
  if (typeof raw === 'string') {
    try {
      return JSON.parse(raw) as Record<string, unknown>;
    } catch {
      return {};
    }
  }
  if (typeof raw === 'object') return raw as Record<string, unknown>;
  return {};
}

function sanitizeText(value: string, max: number) {
  return value.replace(/[\u0000-\u001F\u007F]/g, '').trim().slice(0, max);
}

export default async function handler(req: { method?: string; body?: unknown; headers?: any }, res: any) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  if (!assertSameOrigin(req)) {
    res.status(403).json({ error: 'Forbidden origin' });
    return;
  }

  const body = parseBody(req.body);
  const name = sanitizeText(String(body.name || ''), 120);
  const company = sanitizeText(String(body.company || ''), 120);
  const email = sanitizeText(String(body.email || ''), 160);
  const message = sanitizeText(String(body.message || ''), 3000);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (name.length < 2 || message.length < 10 || !emailRegex.test(email)) {
    res.status(400).json({ error: 'Invalid payload' });
    return;
  }

  const result = await sendContactEmail({ name, company, email, message });
  if (!result.ok) {
    res.status(500).json({ error: result.error });
    return;
  }

  res.status(200).json({ success: true });
}
