import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Linkedin } from 'lucide-react';
import { Logo } from './Logo';
import { detectAppLanguage, readAppLanguage } from '../language';
import { translations } from '../translations';
import { Language } from '../types';

export function Footer() {
  const [lang, setLang] = useState<Language>(() => detectAppLanguage());
  const t = translations[lang];

  useEffect(() => {
    const syncLang = () => setLang(readAppLanguage());
    window.addEventListener('amplia-language-change', syncLang as EventListener);
    return () => window.removeEventListener('amplia-language-change', syncLang as EventListener);
  }, []);

  return (
    <footer className="py-16 border-t border-gray-100 dark:border-white/5 text-center transition-colors bg-white dark:bg-transparent">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8 text-gray-400 text-sm">
        <div className="flex flex-col items-center md:items-start gap-4">
          <Logo className="h-6 opacity-40 hover:opacity-100 transition-all cursor-pointer" showText={true} />
          <div className="flex gap-5">
            <a
              href="https://www.linkedin.com/company/ampliasolutions"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amplia-green transition-all transform hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://www.instagram.com/ampliasolutions"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amplia-green transition-all transform hover:scale-110"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center gap-2">
          <p className="max-w-xs md:max-w-none font-medium opacity-60 transition-opacity hover:opacity-100">
            &copy; {new Date().getFullYear()} Amplia Solutions. Engineering the Intelligence Era.
          </p>
        </div>

        <div className="flex gap-8 font-bold text-xs uppercase tracking-widest">
          <Link to="/privacidade" className="hover:text-amplia-green transition-colors">
            {t.legal.privacy}
          </Link>
          <Link to="/termos" className="hover:text-amplia-green transition-colors">
            {t.legal.terms}
          </Link>
        </div>
      </div>
    </footer>
  );
}
