import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Logo } from './components/Logo';
import { detectAppLanguage, persistAppLanguage } from './language';
import { legalTranslations } from './legalTranslations';
import { Language } from './types';

type LegalPageKey = 'privacy' | 'terms' | 'cookies';

type LegalLayoutProps = {
  pageKey: LegalPageKey;
};

function LegalLayout({ pageKey }: LegalLayoutProps) {
  const [lang, setLang] = useState<Language>(() => detectAppLanguage());
  const t = legalTranslations[lang][pageKey];

  useEffect(() => {
    persistAppLanguage(lang);
    document.title = `${t.title} | Amplia Solutions`;
    window.scrollTo(0, 0);
  }, [lang, t.title]);

  return (
    <div className="min-h-screen bg-[#0a0b0e] text-gray-100">
      <header className="border-b border-white/10 bg-[#0f1115]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-5">
          <Link to="/" className="inline-flex items-center" aria-label="Amplia - home">
            <Logo className="h-9 md:h-10 cursor-pointer" />
          </Link>
          <div className="flex items-center gap-4">
            <div className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1 sm:flex">
              {(['pt', 'en', 'es'] as Language[]).map((option) => (
                <button
                  key={option}
                  onClick={() => setLang(option)}
                  className={`rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider ${
                    lang === option ? 'bg-[#6BBF3E] text-white' : 'text-gray-300 hover:text-[#6BBF3E]'
                  }`}
                  aria-label={`${legalTranslations[lang].languageLabel}: ${option}`}
                >
                  {option}
                </button>
              ))}
            </div>
            <Link to="/" className="text-sm font-bold text-[#6BBF3E] hover:underline">
              {legalTranslations[lang].back}
            </Link>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-4 py-12 md:py-16">
        <h1 className="mb-8 text-3xl font-max font-bold text-[#6BBF3E] md:text-4xl">{t.title}</h1>
        <div className="space-y-8 rounded-3xl border border-white/10 bg-[#12141a] p-8 leading-relaxed text-gray-300">
          {t.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="mb-2 text-xl font-bold text-white">{section.heading}</h2>
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
