import { canPersistFunctionalPreferences } from './cookiePreference';

export type AppLanguage = 'pt' | 'en' | 'es';

export const LANGUAGE_STORAGE_KEY = 'amplia-lang-v2';

export function detectAppLanguage(): AppLanguage {
  if (typeof window === 'undefined') return 'pt';
  try {
    const saved = localStorage.getItem(LANGUAGE_STORAGE_KEY);
    if (saved === 'pt' || saved === 'en' || saved === 'es') return saved;
  } catch {
    // ignore
  }

  // Português por omissão; o visitante muda no seletor de língua.
  return 'pt';
}

export function persistAppLanguage(lang: AppLanguage) {
  if (canPersistFunctionalPreferences()) {
    try {
      localStorage.setItem(LANGUAGE_STORAGE_KEY, lang);
    } catch {
      // ignore
    }
  }
  window.dispatchEvent(new CustomEvent('amplia-language-change', { detail: lang }));
}

export function readAppLanguage(): AppLanguage {
  if (typeof window === 'undefined') return 'pt';
  try {
    const saved = localStorage.getItem(LANGUAGE_STORAGE_KEY);
    if (saved === 'pt' || saved === 'en' || saved === 'es') return saved;
  } catch {
    // ignore
  }
  return detectAppLanguage();
}
