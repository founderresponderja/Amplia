
import React, { lazy, Suspense, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Sun, Moon, X, Linkedin, Instagram, Github, Menu } from 'lucide-react';
import { Logo } from './components/Logo';
import { Button } from './components/Button';
import { Services } from './components/Services';
import { Contact } from './components/Contact';
import { About } from './components/About';
import { FAQ } from './components/FAQ';
import { translations } from './translations';
import { ScrollReveal } from './components/ScrollReveal';
import { Language } from './types';

const AIChatBot = lazy(() =>
  import('./components/AIChatBot').then((mod) => ({ default: mod.AIChatBot }))
);

export function HomePage() {
  const [lang, setLang] = useState<Language>(() => {
    const browserLang = navigator.language.split('-')[0];
    if (browserLang === 'en') return 'en';
    if (browserLang === 'es') return 'es';
    return 'pt';
  });
  
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const t = translations[lang];

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

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', newTheme);
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
               <a href="https://www.linkedin.com/in/amplia-solutions/" target="_blank" rel="noopener noreferrer" className="hover:text-amplia-green transition-colors"><Linkedin size={24} /></a>
               <a href="https://www.instagram.com/ampliasolutions/" target="_blank" rel="noopener noreferrer" className="hover:text-amplia-green transition-colors"><Instagram size={24} /></a>
               <a href="https://github.com/amplia-solutions" target="_blank" rel="noopener noreferrer" className="hover:text-amplia-green transition-colors"><Github size={24} /></a>
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
              <h1 className="text-5xl md:text-8xl font-max leading-[1.1] dark:text-white tracking-tight">
                {t.hero.titleLine1} <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amplia-green to-emerald-400 font-bold">{t.hero.titleLine2}</span>
              </h1>
              <p className="text-xl text-gray-500 dark:text-gray-400 max-w-xl leading-relaxed">
                {t.hero.description}
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button className="px-10 py-4 shadow-xl shadow-amplia-green/20 font-bold text-lg" onClick={() => scrollTo('about')}>{t.hero.ctaPrimary}</Button>
              </div>
            </div>
          </ScrollReveal>
          
          <div className="relative hidden lg:block animate-fade-in-up">
            <div className="relative z-10 p-4 bg-white dark:bg-neutral-800 rounded-[50px] shadow-2xl border border-gray-100 dark:border-white/5">
              <img 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1000&q=80" 
                className="rounded-[40px] w-full h-[500px] object-cover" 
                alt="Amplia Solutions"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </section>

      <About content={t.about} />
      <Services content={t.services} />
      <FAQ content={t.faq} />
      <Contact content={t.contact} />
      
      <footer className="py-16 border-t border-gray-100 dark:border-white/5 text-center transition-colors">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8 text-gray-400 text-sm">
          <div className="flex flex-col items-center md:items-start gap-4">
            <Logo className="h-6 opacity-40 hover:opacity-100 transition-all cursor-pointer" showText={true} />
            <div className="flex gap-5">
              <a href="https://www.linkedin.com/company/ampliasolutions" target="_blank" rel="noopener noreferrer" className="hover:text-amplia-green transition-all transform hover:scale-110" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="https://www.instagram.com/ampliasolutions" target="_blank" rel="noopener noreferrer" className="hover:text-amplia-green transition-all transform hover:scale-110" aria-label="Instagram">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div className="flex flex-col items-center gap-2">
            <p className="max-w-xs md:max-w-none font-medium opacity-60 transition-opacity hover:opacity-100">
              &copy; {new Date().getFullYear()} Amplia Solutions. Engineering the Intelligence Era.
            </p>
            <p className="text-[10px] opacity-40 uppercase tracking-widest font-bold">
              AGUALVA-CACÉM, Portugal • (+351) 91 346 67 49
            </p>
          </div>
          
          <div className="flex gap-8 font-bold text-xs uppercase tracking-widest">
            <Link to="/privacidade" className="hover:text-amplia-green transition-colors">{t.legal.privacy}</Link>
            <Link to="/termos" className="hover:text-amplia-green transition-colors">{t.legal.terms}</Link>
          </div>
        </div>
      </footer>

      <Suspense fallback={null}>
        <AIChatBot t={t.aiBot} lang={lang} />
      </Suspense>
    </div>
  );
}
