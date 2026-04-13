import { assertSameOrigin } from './lib/origin';
import { parseJsonBody } from './lib/parse-body';
import { sendChatbotLogEmail } from './lib/resend-mail';

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
  const userMessage = sanitizeText(String(body.userMessage || ''), 4000);
  const assistantReply = sanitizeText(String(body.assistantReply || ''), 12000);

  if (!userMessage || !assistantReply) {
    res.status(400).json({ error: 'Invalid payload' });
    return;
  }

  const result = await sendChatbotLogEmail({ userMessage, assistantReply });
  if (!result.ok) {
    res.status(500).json({ error: result.error });
    return;
  }

  res.status(200).json({ success: true });
}
