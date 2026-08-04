import { assertSameOrigin } from './lib/origin.js';
import { checkRateLimit, getClientIp, parseJsonBodyWithLimit } from './lib/request-security.js';
import { sendContactEmail } from './lib/resend-mail.js';

const CONTACT_BODY_LIMIT_BYTES = 12 * 1024;
const CONTACT_RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;
const CONTACT_RATE_LIMIT_MAX_REQUESTS = 5;

function sanitizeText(value: string, max: number) {
  return value.replace(/[\u0000-\u001F\u007F]/g, '').trim().slice(0, max);
}

function normalizeEmail(value: string): string {
  return sanitizeText(value, 160).toLowerCase();
}

function isValidName(value: string): boolean {
  return /^[\p{L}0-9 .,'-]{2,120}$/u.test(value);
}

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value) && value.length <= 160;
}

export default async function handler(req: { method?: string; body?: unknown; headers?: any }, res: any) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  if (!assertSameOrigin(req)) {
    console.warn('[api/contact] Forbidden origin');
    res.status(403).json({ error: 'Forbidden origin' });
    return;
  }

  const rate = checkRateLimit({
    key: `contact:${getClientIp(req)}`,
    limit: CONTACT_RATE_LIMIT_MAX_REQUESTS,
    windowMs: CONTACT_RATE_LIMIT_WINDOW_MS,
  });
  if (!rate.allowed) {
    res.setHeader('Retry-After', String(rate.retryAfterSec));
    res.status(429).json({ error: 'Too many requests' });
    return;
  }

  const parsedBody = parseJsonBodyWithLimit(req.body, CONTACT_BODY_LIMIT_BYTES);
  if (!parsedBody.ok) {
    if (parsedBody.code === 'body_too_large') {
      res.status(413).json({ error: 'Payload too large' });
      return;
    }
    res.status(400).json({ error: 'Invalid JSON payload' });
    return;
  }

  const body = parsedBody.body;
  const name = sanitizeText(String(body.name || ''), 120);
  const company = sanitizeText(String(body.company || ''), 120);
  const email = normalizeEmail(String(body.email || ''));
  const message = sanitizeText(String(body.message || ''), 3000);

  if (!isValidName(name) || !isValidEmail(email) || message.length < 5 || message.length > 3000) {
    console.warn('[api/contact] Invalid payload');
    res.status(400).json({ error: 'Invalid payload' });
    return;
  }

  const result = await sendContactEmail({ name, company, email, message });
  if (!result.ok) {
    console.error('[api/contact] Email provider request failed');
    res.status(500).json({
      success: false,
      error: 'Email service unavailable',
    });
    return;
  }

  return res.status(200).json({ success: true });
}

