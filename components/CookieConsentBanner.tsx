import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { detectAppLanguage, readAppLanguage } from '../language';
import { legalTranslations } from '../legalTranslations';
import { Language } from '../types';

const STORAGE_KEY = 'cookie-preference';

export function CookieConsentBanner() {
  const [visible, setVisible] = useState(false);
  const [lang, setLang] = useState<Language>(() => detectAppLanguage());

  useEffect(() => {
    const pref = localStorage.getItem(STORAGE_KEY);
    if (!pref) setVisible(true);

    const syncLang = () => setLang(readAppLanguage());
    window.addEventListener('amplia-language-change', syncLang as EventListener);
    return () => window.removeEventListener('amplia-language-change', syncLang as EventListener);
  }, []);

  const setPreference = (value: 'all' | 'essential') => {
    localStorage.setItem(STORAGE_KEY, value);
    setVisible(false);
  };

  if (!visible) return null;

  const t = legalTranslations[lang].cookieBanner;

  return (
    <div className="fixed bottom-6 left-6 right-6 z-[120] md:left-auto md:right-6 md:w-[460px]">
      <div className="rounded-3xl border border-amplia-green/30 bg-[#0f1115]/95 p-5 shadow-2xl backdrop-blur-md">
        <p className="text-sm text-gray-200">{t.text}</p>
        <div className="mt-4 flex flex-wrap items-center gap-2">
          <button
            onClick={() => setPreference('all')}
            className="rounded-xl bg-[#6BBF3E] px-4 py-2 text-xs font-bold text-white hover:bg-[#5aad35]"
          >
            {t.acceptAll}
          </button>
          <button
            onClick={() => setPreference('essential')}
            className="rounded-xl border border-white/20 px-4 py-2 text-xs font-bold text-gray-200 hover:border-[#6BBF3E] hover:text-[#6BBF3E]"
          >
            {t.essentialOnly}
          </button>
          <Link to="/cookies" className="ml-auto text-xs font-bold text-[#6BBF3E] hover:underline">
            {t.linkLabel}
          </Link>
        </div>
      </div>
    </div>
  );
}
