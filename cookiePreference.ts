export const COOKIE_PREFERENCE_KEY = 'cookie-preference';

export type CookiePreferenceV2 = {
  v: 2;
  functional: boolean;
  analytics: boolean;
  /** ISO 8601 timestamp for when consent was last set/updated. Legacy v2 records may not have it. */
  timestamp?: string;
};

function isIso8601(value: unknown): value is string {
  return (
    typeof value === 'string' &&
    /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d{3})?Z$/.test(value)
  );
}

export function readCookiePreference(): CookiePreferenceV2 | null {
  try {
    const raw = localStorage.getItem(COOKIE_PREFERENCE_KEY);
    if (!raw) return null;
    if (raw === 'all') return { v: 2, functional: true, analytics: true };
    if (raw === 'essential') return { v: 2, functional: false, analytics: false };
    const parsed = JSON.parse(raw) as Partial<CookiePreferenceV2>;
    if (
      parsed &&
      typeof parsed.functional === 'boolean' &&
      typeof parsed.analytics === 'boolean'
    ) {
      return {
        v: 2,
        functional: parsed.functional,
        analytics: parsed.analytics,
        timestamp: isIso8601(parsed.timestamp) ? parsed.timestamp : undefined,
      };
    }
  } catch {
    // ignore
  }
  return null;
}

export function saveCookiePreference(pref: { functional: boolean; analytics: boolean }) {
  const full: CookiePreferenceV2 = { v: 2, ...pref, timestamp: new Date().toISOString() };
  localStorage.setItem(COOKIE_PREFERENCE_KEY, JSON.stringify(full));
  if (!pref.functional) {
    try {
      localStorage.removeItem('amplia-language');
      localStorage.removeItem('theme');
    } catch {
      // ignore
    }
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.documentElement.classList.toggle('dark', systemDark);
  }
  window.dispatchEvent(new CustomEvent('amplia-cookie-consent-updated'));
  window.dispatchEvent(new CustomEvent('amplia-language-change'));
}

/** Before explicit choice, allow storing preferences; after "essential only", block functional storage. */
export function canPersistFunctionalPreferences(): boolean {
  const p = readCookiePreference();
  if (!p) return true;
  return p.functional;
}

export function analyticsCookiesAllowed(): boolean {
  const p = readCookiePreference();
  return !!p?.analytics;
}
