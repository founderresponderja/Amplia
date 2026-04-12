import { Resend } from 'resend';

const FROM = 'noreply@ampliasolutions.pt';

function getTo(): string {
  return process.env.CONTACT_EMAIL?.trim() || 'ampliasolutions.pt@gmail.com';
}

function getClient(): Resend | null {
  const key = process.env.RESEND_API_KEY?.trim();
  if (!key) return null;
  return new Resend(key);
}

export async function sendContactEmail(payload: {
  name: string;
  company: string;
  email: string;
  message: string;
}): Promise<{ ok: true } | { ok: false; error: string }> {
  const resend = getClient();
  if (!resend) {
    console.error('[resend-mail] Missing RESEND_API_KEY');
    return { ok: false, error: 'Email service not configured' };
  }

  const when = new Date().toLocaleString('pt-PT', { timeZone: 'Europe/Lisbon' });
  const subject = `Nova mensagem de contacto — ${payload.name}`;
  const text = [
    `Nome: ${payload.name}`,
    `Empresa: ${payload.company || '—'}`,
    `Email: ${payload.email}`,
    `Data/hora: ${when}`,
    '',
    'Mensagem:',
    payload.message,
  ].join('\n');

  const sent = await resend.emails.send({
    from: FROM,
    to: getTo(),
    replyTo: payload.email,
    subject,
    text,
  });

  if (sent.error) {
    console.error('[resend-mail] contact', sent.error);
    return { ok: false, error: 'Failed to send email' };
  }
  return { ok: true };
}

export async function sendProductNotifyEmail(payload: {
  subscriberEmail: string;
  productName: string;
  productKey: string;
}): Promise<{ ok: true } | { ok: false; error: string }> {
  const resend = getClient();
  if (!resend) {
    console.error('[resend-mail] Missing RESEND_API_KEY');
    return { ok: false, error: 'Email service not configured' };
  }

  const when = new Date().toLocaleString('pt-PT', { timeZone: 'Europe/Lisbon' });
  const subject = `Novo interesse em ${payload.productName}`;
  const text = [
    `Email do utilizador: ${payload.subscriberEmail}`,
    `Produto: ${payload.productName}`,
    `Chave interna: ${payload.productKey}`,
    `Data/hora: ${when}`,
  ].join('\n');

  const sent = await resend.emails.send({
    from: FROM,
    to: getTo(),
    replyTo: payload.subscriberEmail,
    subject,
    text,
  });

  if (sent.error) {
    console.error('[resend-mail] notify', sent.error);
    return { ok: false, error: 'Failed to send email' };
  }
  return { ok: true };
}

export async function sendChatbotLogEmail(payload: {
  userMessage: string;
  assistantReply: string;
}): Promise<{ ok: true } | { ok: false; error: string }> {
  const resend = getClient();
  if (!resend) {
    console.error('[resend-mail] Missing RESEND_API_KEY');
    return { ok: false, error: 'Email service not configured' };
  }

  const when = new Date().toLocaleString('pt-PT', { timeZone: 'Europe/Lisbon' });
  const subject = 'Nova conversa no chatbot';
  const text = [
    `Data/hora: ${when}`,
    '',
    'Mensagem do utilizador:',
    payload.userMessage,
    '',
    'Resposta da IA:',
    payload.assistantReply,
  ].join('\n');

  const sent = await resend.emails.send({
    from: FROM,
    to: getTo(),
    subject,
    text,
  });

  if (sent.error) {
    console.error('[resend-mail] chatbot-log', sent.error);
    return { ok: false, error: 'Failed to send email' };
  }
  return { ok: true };
}
