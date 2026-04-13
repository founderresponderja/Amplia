/** Parse JSON body from Vercel Node handlers (object, string, or Buffer). */

export function parseJsonBody(raw: unknown): Record<string, unknown> {
  if (raw == null) return {};
  if (typeof Buffer !== 'undefined' && Buffer.isBuffer(raw)) {
    try {
      return JSON.parse(raw.toString('utf8')) as Record<string, unknown>;
    } catch {
      return {};
    }
  }
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
