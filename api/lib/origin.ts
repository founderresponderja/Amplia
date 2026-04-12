/** Same-origin check as api/chat.ts (Vercel www vs apex). */

export function canonicalHost(host: string): string {
  return host.split(':')[0].toLowerCase().replace(/^www\./, '');
}

export function isAllowedOrigin(origin: string, hostHeader: string, forwardedHost?: string): boolean {
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

export function assertSameOrigin(req: {
  headers?: { origin?: string; host?: string; 'x-forwarded-host'?: string };
}): boolean {
  const origin = String(req.headers?.origin || '');
  const host = String(req.headers?.host || '');
  const forwardedHost = String(req.headers?.['x-forwarded-host'] || '');
  if (origin && (host || forwardedHost) && !isAllowedOrigin(origin, host, forwardedHost)) {
    return false;
  }
  return true;
}
