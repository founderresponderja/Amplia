
import React, { useState, useEffect } from 'react';
import { Sun, Moon, ShieldCheck, X, Lock } from 'lucide-react';
import { Logo } from './components/Logo';
import { Button } from './components/Button';
import { Services } from './components/Services';
import { Contact } from './components/Contact';
import { AIChatBot } from './components/AIChatBot';
import { AdminPanel } from './components/AdminPanel';
import { useContent } from './contexts/ContentContext';
import { ScrollReveal } from './components/ScrollReveal';
import { Language } from './types';

const LegalModal = ({ title, content, onClose }: { title: string; content: string; onClose: () => void }) => (
  <div className="fixed inset-0 z-[150] flex items-center justify-center p-4 bg-black/60 backdrop-blur-md">
    <div className="bg-white dark:bg-amplia-dark w-full max-w-2xl rounded-[2rem] shadow-2xl border border-white/10 overflow-hidden animate-fade-in-up">
      <div className="p-6 border-b border-gray-100 dark:border-white/5 flex justify-between items-center bg-gray-50 dark:bg-black/20">
        <h3 className="text-xl font-max font-bold dark:text-white">{title}</h3>
        <button onClick={onClose} className="p-2 hover:bg-black/5 dark:hover:bg-white/5 rounded-full dark:text-white">
          <X size={20} />
        </button>
      </div>
      <div className="p-8 max-h-[60vh] overflow-y-auto">
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm whitespace-pre-line">
          {content}
        </p>
      </div>
      <div className="p-6 flex justify-end">
        <Button onClick={onClose} className="!py-2 !px-8">Fechar</Button>
      </div>
    </div>
  </div>
);

function App() {
  const { content } = useContent();
  const [lang, setLang] = useState<Language>('pt');
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const [showCookieBanner, setShowCookieBanner] = useState(false);
  const [legalModal, setLegalModal] = useState<'privacy' | 'terms' | null>(null);
  const [isAdminPanelOpen, setIsAdminPanelOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    if (!localStorage.getItem('cookies-accepted')) {
      setTimeout(() => setShowCookieBanner(true), 2000);
    }
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const t = content[lang] || content['pt'];

  const toggleTheme = () => {
    const next = theme === 'light' ? 'dark' : 'light';
    setTheme(next);
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', next);
  };

  if (!t) return <div className="h-screen bg-amplia-dark flex items-center justify-center text-amplia-green">Loading...</div>;

  return (
    <div className="min-h-screen bg-white dark:bg-amplia-dark transition-colors duration-500">
      <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/90 dark:bg-amplia-dark/90 backdrop-blur-xl py-3 shadow-sm' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <Logo className="h-8 md:h-10" />
          
          <div className="flex items-center gap-4 md:gap-8">
            <div className="flex items-center bg-gray-100 dark:bg-white/5 rounded-full p-1 border border-gray-200 dark:border-white/10">
              {(['pt', 'en', 'es'] as Language[]).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`px-3 py-1 rounded-full text-[10px] md:text-xs font-bold transition-all uppercase ${
                    lang === l ? 'bg-amplia-green text-white shadow-md' : 'text-gray-500 hover:text-amplia-green'
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>
            
            <button onClick={toggleTheme} className="p-2 text-amplia-dark dark:text-white hover:bg-gray-100 dark:hover:bg-white/5 rounded-full transition-all">
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <Button className="hidden lg:block !px-6 !py-2 !text-xs font-bold uppercase tracking-widest" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              {t.nav.button}
            </Button>
          </div>
        </div>
      </nav>

      <section className="pt-48 pb-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amplia-green/5 blur-[150px] rounded-full -z-10"></div>
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <div className="space-y-8">
              <span className="px-4 py-2 bg-amplia-green/10 text-amplia-green rounded-full text-[10px] font-bold uppercase tracking-[0.2em]">{t.hero.badge}</span>
              <h1 className="text-5xl md:text-7xl font-max leading-[1.1] dark:text-white tracking-tight">
                {t.hero.titleLine1} <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amplia-green to-emerald-400 font-bold">{t.hero.titleLine2}</span>
              </h1>
              <p className="text-lg text-gray-500 dark:text-gray-400 max-w-xl leading-relaxed">
                {t.hero.description}
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button className="px-10 py-4 shadow-xl shadow-amplia-green/20 font-bold" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>{t.hero.ctaPrimary}</Button>
              </div>
            </div>
          </ScrollReveal>
          
          <div className="relative hidden lg:block">
            <div className="relative z-10 p-2 bg-white dark:bg-neutral-800 rounded-[3rem] shadow-2xl border border-gray-100 dark:border-white/5">
              <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1000&q=80" className="rounded-[2.5rem] w-full h-[500px] object-cover" alt="IT Consulting" />
            </div>
          </div>
        </div>
      </section>

      <Services content={t.services} />
      <Contact content={t.contact} />
      
      <footer className="py-12 border-t border-gray-100 dark:border-white/5 bg-gray-50 dark:bg-black/10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Logo className="h-6" />
                <button onClick={() => setIsAdminPanelOpen(true)} className="p-1.5 text-gray-300 dark:text-gray-700 hover:text-amplia-green transition-colors">
                  <Lock size={12} />
                </button>
              </div>
              <p className="text-[10px] text-gray-400 uppercase tracking-widest">{t.legal.companyInfo}</p>
              <p className="text-[9px] text-amplia-green/40 tracking-wider">{t.legal.hashtags}</p>
            </div>
            <div className="flex gap-8 text-[10px] font-bold uppercase tracking-widest">
              <button onClick={() => setLegalModal('privacy')} className="text-gray-500 hover:text-amplia-green transition-colors">{t.legal.privacy}</button>
              <button onClick={() => setLegalModal('terms')} className="text-gray-500 hover:text-amplia-green transition-colors">{t.legal.terms}</button>
            </div>
          </div>
          <div className="text-center pt-8 border-t border-gray-200 dark:border-white/5 text-[10px] text-gray-400 uppercase tracking-widest">
            &copy; {new Date().getFullYear()} Amplia Solutions. All rights reserved.
          </div>
        </div>
      </footer>

      {showCookieBanner && (
        <div className="fixed bottom-6 right-6 left-6 md:left-auto md:w-[400px] z-[120] animate-fade-in-up">
          <div className="glass dark:bg-amplia-dark/95 p-6 rounded-[2rem] shadow-2xl flex flex-col gap-4 border border-amplia-green/20">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-amplia-green/20 text-amplia-green rounded-2xl"><ShieldCheck size={20} /></div>
              <div>
                <h4 className="font-max font-bold dark:text-white text-sm mb-1">{t.legal.cookieTitle}</h4>
                <p className="text-[11px] text-gray-500 dark:text-gray-400 font-normal">{t.legal.cookieText}</p>
              </div>
            </div>
            <div className="flex gap-2">
              <Button className="flex-1 !py-2 !text-[10px] !rounded-xl" onClick={() => { localStorage.setItem('cookies-accepted', 'true'); setShowCookieBanner(false); }}>{t.legal.accept}</Button>
              <button className="flex-1 text-[10px] font-bold text-gray-400 hover:text-amplia-green transition-colors" onClick={() => setShowCookieBanner(false)}>{t.legal.decline}</button>
            </div>
          </div>
        </div>
      )}

      {legalModal === 'privacy' && <LegalModal title={t.legal.privacyPolicyTitle} content={t.legal.privacyPolicyText} onClose={() => setLegalModal(null)} />}
      {legalModal === 'terms' && <LegalModal title={t.legal.termsTitle} content={t.legal.termsText} onClose={() => setLegalModal(null)} />}

      <AdminPanel currentLang={lang} isOpen={isAdminPanelOpen} setIsOpen={setIsAdminPanelOpen} />
      <AIChatBot t={t.aiBot} lang={lang} />
    </div>
  );
}

export default App;
