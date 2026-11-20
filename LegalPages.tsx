import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Sun, Moon } from 'lucide-react';
import { Logo } from './components/Logo';
import { Footer } from './components/Footer';
import { canPersistFunctionalPreferences } from './cookiePreference';
import { detectAppLanguage, persistAppLanguage, readAppLanguage } from './language';
import { legalTranslations } from './legalTranslations';
import { Language } from './types';

type LegalPageKey = 'privacy' | 'terms' | 'cookies';

type LegalLayoutProps = {
  pageKey: LegalPageKey;
};

function LegalLayout({ pageKey }: LegalLayoutProps) {
  const [lang, setLang] = useState<Language>(() => detectAppLanguage());
  const [theme, setTheme] = useState<'light' | 'dark'>(() =>
    typeof document === 'undefined' || document.documentElement.classList.contains('dark') ? 'dark' : 'light'
  );
  const t = legalTranslations[lang][pageKey];

  useEffect(() => {
    persistAppLanguage(lang);
    document.title = `${t.title} | Amplia Solutions`;
    window.scrollTo(0, 0);
  }, [lang, t.title]);

  useEffect(() => {
    const syncFromConsent = () => {
      setLang(readAppLanguage());
      setTheme(document.documentElement.classList.contains('dark') ? 'dark' : 'light');
    };
    window.addEventListener('amplia-cookie-consent-updated', syncFromConsent);
    return () => window.removeEventListener('amplia-cookie-consent-updated', syncFromConsent);
  }, []);

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    document.documentElement.classList.toggle('dark', next === 'dark');
    if (canPersistFunctionalPreferences()) {
      localStorage.setItem('theme', next);
    }
    window.dispatchEvent(new CustomEvent('amplia-theme-change', { detail: next }));
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0a0b0e] text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <header className="border-b border-gray-200 dark:border-white/10 bg-white/95 dark:bg-[#0f1115]/90 backdrop-blur-md transition-colors duration-300">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-5">
          <Link to="/" className="inline-flex items-center" aria-label="Amplia - home">
            <Logo className="h-9 md:h-10 cursor-pointer" />
          </Link>
          <div className="flex items-center gap-4">
            <div className="hidden items-center gap-1 rounded-full border border-gray-200 dark:border-white/10 bg-gray-100 dark:bg-white/5 p-1 sm:flex">
              {(['pt', 'en', 'es'] as Language[]).map((option) => (
                <button
                  key={option}
                  onClick={() => setLang(option)}
                  className={`rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider ${
                    lang === option ? 'bg-[#6BBF3E] text-white' : 'text-gray-500 dark:text-gray-300 hover:text-[#6BBF3E]'
                  }`}
                  aria-label={`${legalTranslations[lang].languageLabel}: ${option}`}
                >
                  {option}
                </button>
              ))}
            </div>
            <button
              onClick={toggleTheme}
              className="p-2 text-amplia-dark dark:text-white hover:bg-gray-100 dark:hover:bg-white/5 rounded-full transition-all"
              aria-label="Alterar tema"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <Link to="/" className="text-sm font-bold text-[#6BBF3E] hover:underline">
              {legalTranslations[lang].back}
            </Link>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-4 py-12 md:py-16">
        <h1 className="mb-8 text-3xl font-max font-bold text-[#6BBF3E] md:text-4xl">{t.title}</h1>
        <div className="space-y-8 rounded-3xl border border-gray-200 dark:border-white/10 bg-white dark:bg-[#12141a] p-8 leading-relaxed text-gray-700 dark:text-gray-300 transition-colors duration-300">
          {t.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">{section.heading}</h2>
              {section.paragraphs?.map((paragraph) => (
                <p key={paragraph} className="mb-2">
                  {paragraph}
                </p>
              ))}
              {section.bullets && (
                <ul className="list-disc space-y-1 pl-6">
                  {section.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              )}
              {section.link && (
                <a
                  href={section.link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#6BBF3E] hover:underline"
                >
                  {section.link.label}
                </a>
              )}
            </section>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export function PrivacyPage() {
  return <LegalLayout pageKey="privacy" />;
}

export function TermsPage() {
  return <LegalLayout pageKey="terms" />;
}

export function CookiesPage() {
  return <LegalLayout pageKey="cookies" />;
}
