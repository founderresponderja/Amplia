type ParsedBodyResult =
  | { ok: true; body: Record<string, unknown> }
  | { ok: false; code: 'invalid_json' | 'body_too_large' };

type RateLimitOptions = {
  key: string;
  limit: number;
  windowMs: number;
};

type RateLimitResult = {
  allowed: boolean;
  retryAfterSec: number;
  remaining: number;
};

type RateLimitEntry = {
  count: number;
  resetAt: number;
};

const RATE_LIMIT_STORE_KEY = '__ampliaRateLimitStore';

function ensureObject(value: unknown): Record<string, unknown> {
  return value && typeof value === 'object' ? (value as Record<string, unknown>) : {};
}

function estimateObjectBytes(value: unknown): number {
  try {
    return Buffer.byteLength(JSON.stringify(value), 'utf8');
  } catch {
    return Number.MAX_SAFE_INTEGER;
  }
}

export function parseJsonBodyWithLimit(raw: unknown, maxBytes: number): ParsedBodyResult {
  if (raw == null) return { ok: true, body: {} };

  if (typeof Buffer !== 'undefined' && Buffer.isBuffer(raw)) {
    if (raw.byteLength > maxBytes) return { ok: false, code: 'body_too_large' };
    try {
      return { ok: true, body: ensureObject(JSON.parse(raw.toString('utf8'))) };
    } catch {
      return { ok: false, code: 'invalid_json' };
    }
  }

  if (typeof raw === 'string') {
    if (Buffer.byteLength(raw, 'utf8') > maxBytes) return { ok: false, code: 'body_too_large' };
    try {
      return { ok: true, body: ensureObject(JSON.parse(raw)) };
    } catch {
      return { ok: false, code: 'invalid_json' };
    }
  }

  if (typeof raw === 'object') {
    if (estimateObjectBytes(raw) > maxBytes) return { ok: false, code: 'body_too_large' };
    return { ok: true, body: ensureObject(raw) };
  }

  return { ok: true, body: {} };
}

function getStore(): Map<string, RateLimitEntry> {
  const globalScope = globalThis as typeof globalThis & {
    [RATE_LIMIT_STORE_KEY]?: Map<string, RateLimitEntry>;
  };
  if (!globalScope[RATE_LIMIT_STORE_KEY]) {
    globalScope[RATE_LIMIT_STORE_KEY] = new Map<string, RateLimitEntry>();
  }
  return globalScope[RATE_LIMIT_STORE_KEY] as Map<string, RateLimitEntry>;
}

export function getClientIp(req: { headers?: Record<string, string | string[] | undefined> }): string {
  const headers = req.headers || {};
  const xff = headers['x-forwarded-for'];
  const forwarded = Array.isArray(xff) ? xff[0] : xff;
  const firstForwarded = (forwarded || '').split(',')[0].trim();
  const realIp = Array.isArray(headers['x-real-ip']) ? headers['x-real-ip'][0] : headers['x-real-ip'];
  const cfIp = Array.isArray(headers['cf-connecting-ip'])
    ? headers['cf-connecting-ip'][0]
    : headers['cf-connecting-ip'];

  const ip = (firstForwarded || String(realIp || '') || String(cfIp || '')).trim();
  if (!ip) return 'unknown';

  return ip.replace(/[^0-9a-fA-F:.,]/g, '').slice(0, 64) || 'unknown';
}

export function checkRateLimit(options: RateLimitOptions): RateLimitResult {
  const { key, limit, windowMs } = options;
  const now = Date.now();
  const store = getStore();
  const current = store.get(key);

  if (!current || current.resetAt <= now) {
    store.set(key, { count: 1, resetAt: now + windowMs });
    return { allowed: true, retryAfterSec: 0, remaining: Math.max(0, limit - 1) };
  }

  if (current.count >= limit) {
    const retryMs = Math.max(0, current.resetAt - now);
    return {
      allowed: false,
      retryAfterSec: Math.max(1, Math.ceil(retryMs / 1000)),
      remaining: 0,
    };
  }

  current.count += 1;
  store.set(key, current);

  if (store.size > 5000) {
    for (const [entryKey, entry] of store.entries()) {
      if (entry.resetAt <= now) store.delete(entryKey);
    }
  }

  return {
    allowed: true,
    retryAfterSec: 0,
    remaining: Math.max(0, limit - current.count),
  };
}