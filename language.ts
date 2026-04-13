import { canPersistFunctionalPreferences } from './cookiePreference';

export type AppLanguage = 'pt' | 'en' | 'es';

export const LANGUAGE_STORAGE_KEY = 'amplia-language';

export function detectAppLanguage(): AppLanguage {
  try {
    const saved = localStorage.getItem(LANGUAGE_STORAGE_KEY);
    if (saved === 'pt' || saved === 'en' || saved === 'es') return saved;
  } catch {
    // ignore
  }

  const browserLang = navigator.language.split('-')[0];
  if (browserLang === 'en') return 'en';
  if (browserLang === 'es') return 'es';
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
  try {
    const saved = localStorage.getItem(LANGUAGE_STORAGE_KEY);
    if (saved === 'pt' || saved === 'en' || saved === 'es') return saved;
  } catch {
    // ignore
  }
  return detectAppLanguage();
}
