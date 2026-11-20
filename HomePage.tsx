
import React, { lazy, Suspense, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Sun, Moon, X, Linkedin, Instagram, Menu } from 'lucide-react';
import { Logo } from './components/Logo';
import { Button } from './components/Button';
import { Services } from './components/Services';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { About } from './components/About';
import { FAQ } from './components/FAQ';
import { WhoWeAre } from './components/WhoWeAre';
import { Packages } from './components/Packages';
import { HowWeWork } from './components/HowWeWork';
import { translations } from './translations';
import { ScrollReveal } from './components/ScrollReveal';
import { Language } from './types';
import { canPersistFunctionalPreferences } from './cookiePreference';
import { detectAppLanguage, persistAppLanguage, readAppLanguage } from './language';

const AIChatBot = lazy(() =>
  import('./components/AIChatBot').then((mod) => ({ default: mod.AIChatBot }))
);

export function HomePage() {
  const [lang, setLang] = useState<Language>(() => detectAppLanguage());
  
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const t = translations[lang];
  const [reduceMotion, setReduceMotion] = useState(false);
  useEffect(() => {
    try {
      const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
      setReduceMotion(mq.matches);
      const onChange = (e: MediaQueryListEvent) => setReduceMotion(e.matches);
      mq.addEventListener?.('change', onChange);
      return () => mq.removeEventListener?.('change', onChange);
    } catch {
      return undefined;
    }
  }, []);

  useEffect(() => {
    persistAppLanguage(lang);
  }, [lang]);

  useEffect(() => {
    // @ts-ignore
    const seo = t.seo;
    if (seo) {
      document.title = seo.title;
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) metaDescription.setAttribute('content', seo.description);
      const metaKeywords = document.querySelector('meta[name="keywords"]');
      if (metaKeywords) metaKeywords.setAttribute('content', seo.keywords);
      document.documentElement.lang = lang;
    }
  }, [lang, t]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const syncFromConsent = () => {
      setLang(readAppLanguage());
      setTheme(document.documentElement.classList.contains('dark') ? 'dark' : 'light');
    };
    window.addEventListener('amplia-cookie-consent-updated', syncFromConsent);
    return () => window.removeEventListener('amplia-cookie-consent-updated', syncFromConsent);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark');
    if (canPersistFunctionalPreferences()) {
      localStorage.setItem('amplia-theme-v2', newTheme);
    }
    window.dispatchEvent(new CustomEvent('amplia-theme-change', { detail: newTheme }));
  };

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen transition-colors duration-300">
      <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled || isMobileMenuOpen ? 'bg-white/95 dark:bg-amplia-dark/95 backdrop-blur-xl py-3 border-b border-gray-100 dark:border-white/5 shadow-sm' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-12">
            <Logo className="h-8 md:h-10 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
            
            <div className="hidden lg:flex items-center gap-8">
              <button onClick={() => scrollTo('pacotes')} className="text-sm font-bold uppercase tracking-widest text-gray-500 hover:text-amplia-green transition-colors">{t.nav.packages}</button>
              <button onClick={() => scrollTo('about')} className="text-sm font-bold uppercase tracking-widest text-gray-500 hover:text-amplia-green transition-colors">{t.nav.about}</button>
              <button onClick={() => scrollTo('services')} className="text-sm font-bold uppercase tracking-widest text-gray-500 hover:text-amplia-green transition-colors">{t.nav.services}</button>
              <button onClick={() => scrollTo('faq')} className="text-sm font-bold uppercase tracking-widest text-gray-500 hover:text-amplia-green transition-colors">{t.nav.faq}</button>
              <button onClick={() => scrollTo('contact')} className="text-sm font-bold uppercase tracking-widest text-gray-500 hover:text-amplia-green transition-colors">{t.nav.contact}</button>
            </div>
          </div>
          
          <div className="flex items-center gap-2 md:gap-8">
            <div className="hidden sm:flex items-center bg-gray-100 dark:bg-white/5 rounded-full p-1 border border-gray-200 dark:border-white/10">
              {(['pt', 'en', 'es'] as Language[]).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`px-3 py-1 rounded-full text-[10px] md:text-xs font-bold transition-all uppercase tracking-tighter ${
                    lang === l 
                      ? 'bg-amplia-green text-white shadow-md' 
                      : 'text-gray-500 hover:text-amplia-green'
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>
            
            <button 
              onClick={toggleTheme} 
              className="p-2 text-amplia-dark dark:text-white hover:bg-gray-100 dark:hover:bg-white/5 rounded-full transition-all"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <Button 
              className="hidden lg:block !px-6 !py-2 !text-[14px] font-semibold tracking-tight"
              onClick={() => scrollTo('contact')}
            >
              {t.nav.button}
            </Button>

            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-gray-600 dark:text-white hover:bg-gray-100 dark:hover:bg-white/5 rounded-xl transition-all"
              aria-label="Menu"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        <div className={`lg:hidden fixed inset-x-0 top-[100%] h-screen bg-white dark:bg-amplia-dark transition-all duration-500 ease-in-out ${isMobileMenuOpen ? 'translate-y-0 opacity-100 visible' : 'translate-y-10 opacity-0 invisible'}`}>
          <div className="flex flex-col p-8 space-y-6">
            <div className="flex justify-center gap-4 mb-8 sm:hidden">
              {(['pt', 'en', 'es'] as Language[]).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`px-4 py-2 rounded-2xl text-xs font-bold transition-all uppercase border ${
                    lang === l 
                      ? 'bg-amplia-green text-white border-amplia-green' 
                      : 'text-gray-500 border-gray-200 dark:border-white/10'
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>
            
            <button onClick={() => scrollTo('pacotes')} className="text-3xl font-max font-bold dark:text-white text-left border-b border-gray-100 dark:border-white/5 pb-4">{t.nav.packages}</button>
            <button onClick={() => scrollTo('about')} className="text-3xl font-max font-bold dark:text-white text-left border-b border-gray-100 dark:border-white/5 pb-4">{t.nav.about}</button>
            <button onClick={() => scrollTo('services')} className="text-3xl font-max font-bold dark:text-white text-left border-b border-gray-100 dark:border-white/5 pb-4">{t.nav.services}</button>
            <button onClick={() => scrollTo('faq')} className="text-3xl font-max font-bold dark:text-white text-left border-b border-gray-100 dark:border-white/5 pb-4">{t.nav.faq}</button>
            <button onClick={() => scrollTo('contact')} className="text-3xl font-max font-bold dark:text-white text-left border-b border-gray-100 dark:border-white/5 pb-4">{t.nav.contact}</button>
            
            <Button 
              className="w-full !py-6 !text-lg font-bold mt-8"
              onClick={() => scrollTo('contact')}
            >
              {t.nav.button}
            </Button>

            <div className="flex justify-center gap-8 pt-12 text-gray-400">
               <a href="https://www.linkedin.com/company/ampliasolutions" target="_blank" rel="noopener noreferrer" className="hover:text-amplia-green transition-colors"><Linkedin size={24} /></a>
               <a href="https://www.instagram.com/ampliasolutions/" target="_blank" rel="noopener noreferrer" className="hover:text-amplia-green transition-colors"><Instagram size={24} /></a>
            </div>
          </div>
        </div>
      </nav>

      <section className="pt-48 pb-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amplia-green/5 blur-[120px] rounded-full -z-10"></div>
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <div className="space-y-8">
              <span className="px-4 py-2 bg-amplia-green/10 text-amplia-green rounded-full text-[11px] font-bold uppercase tracking-[0.2em]">{t.hero.badge}</span>
              <h1 className="text-5xl md:text-7xl font-max leading-[1.1] dark:text-white tracking-tight">
                {t.hero.titleLine1} <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amplia-green to-emerald-400 font-bold">{t.hero.titleLine2}</span>
              </h1>
              <p className="text-xl text-gray-500 dark:text-gray-400 max-w-xl leading-relaxed">
                {t.hero.description}
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button className="px-10 py-4 shadow-xl shadow-amplia-green/20 font-bold text-lg" onClick={() => scrollTo('contact')}>{t.hero.ctaPrimary}</Button>
                <Button variant="outline" className="px-10 py-4 font-bold text-lg" onClick={() => scrollTo('pacotes')}>{t.hero.ctaSecondary}</Button>
              </div>
              <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-500 dark:text-gray-400">
                {t.hero.features.map((f: string) => (
                  <li key={f} className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-amplia-green" />{f}</li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
          
          <div className="relative hidden lg:block animate-fade-in-up">
            <div className="relative z-10 p-4 bg-white dark:bg-neutral-800 rounded-[50px] shadow-2xl border border-gray-100 dark:border-white/5">
              {reduceMotion ? (
                <img
                  src="/brand/amplia-hero-poster.jpg"
                  alt={t.hero.videoLabel}
                  className="rounded-[40px] w-full h-[500px] object-cover bg-[#1B1A1C]"
                />
              ) : (
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  poster="/brand/amplia-hero-poster.jpg"
                  aria-label={t.hero.videoLabel}
                  className="rounded-[40px] w-full h-[500px] object-cover bg-[#1B1A1C]"
                >
                  <source src="/brand/amplia-hero.webm" type="video/webm" />
                  <source src="/brand/amplia-hero.mp4" type="video/mp4" />
                </video>
              )}
            </div>
          </div>
        </div>
      </section>

      <Packages content={t.packages} onCta={() => scrollTo('contact')} />
      <HowWeWork content={t.howWeWork} />
      <Services content={t.services} />
      <About content={t.about} />
      <FAQ content={t.faq} />
      <WhoWeAre content={t.whoWeAre} />
      <Contact content={t.contact} />
      
      <Footer />

      <Suspense fallback={null}>
        <AIChatBot t={t.aiBot} lang={lang} />
      </Suspense>
    </div>
  );
}
