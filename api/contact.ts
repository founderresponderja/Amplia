import { assertSameOrigin } from './lib/origin';
import { parseJsonBody } from './lib/parse-body';
import { sendContactEmail } from './lib/resend-mail';

function sanitizeText(value: string, max: number) {
  return value.replace(/[\u0000-\u001F\u007F]/g, '').trim().slice(0, max);
}

export default async function handler(req: { method?: string; body?: unknown; headers?: any }, res: any) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed', message: 'Method not allowed' });
    return;
  }

  if (!assertSameOrigin(req)) {
    console.error('[api/contact] forbidden origin', {
      origin: req.headers?.origin,
      host: req.headers?.host,
      xfh: req.headers?.['x-forwarded-host'],
    });
    res.status(403).json({ error: 'Forbidden origin', message: 'Forbidden origin' });
    return;
  }

  const body = parseJsonBody(req.body);
  const name = sanitizeText(String(body.name || ''), 120);
  const company = sanitizeText(String(body.company || ''), 120);
  const email = sanitizeText(String(body.email || ''), 160);
  const message = sanitizeText(String(body.message || ''), 3000);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (name.length < 2 || message.length < 10 || !emailRegex.test(email)) {
    console.error('[api/contact] invalid payload', {
      hasName: name.length >= 2,
      msgLen: message.length,
      emailOk: emailRegex.test(email),
      bodyKeys: Object.keys(body),
    });
    res.status(400).json({
      error: 'Invalid payload',
      message: 'Invalid payload',
    });
    return;
  }

  const result = await sendContactEmail({ name, company, email, message });
  if (!result.ok) {
    res.status(500).json({
      success: false,
      error: result.error,
      message: result.error,
    });
    return;
  }

  res.status(200).json({ success: true });
}
