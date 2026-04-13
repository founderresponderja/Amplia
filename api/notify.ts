import { assertSameOrigin } from './lib/origin';
import { parseJsonBody } from './lib/parse-body';
import { sendProductNotifyEmail } from './lib/resend-mail';

const ALLOWED_KEYS = new Set(['lia', 'homestudio', 'opsflow']);

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

  const body = parseJsonBody(req.body);
  const subscriberEmail = sanitizeText(String(body.email || ''), 160);
  const productKey = sanitizeText(String(body.productKey || body.product || ''), 64);
  const productName = sanitizeText(String(body.productName || ''), 160);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(subscriberEmail) || !productName || !ALLOWED_KEYS.has(productKey)) {
    res.status(400).json({ error: 'Invalid payload' });
    return;
  }

  const result = await sendProductNotifyEmail({
    subscriberEmail,
    productName,
    productKey,
  });
  if (!result.ok) {
    res.status(500).json({ error: result.error });
    return;
  }

  res.status(200).json({ success: true });
}
