import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Moon, Sun } from 'lucide-react';
import { Logo } from './Logo';
import { Button } from './Button';
import { Footer } from './Footer';
import type { ProductWaitlistKey } from '../productPages';
import { canPersistFunctionalPreferences } from '../cookiePreference';
import { detectAppLanguage, persistAppLanguage, readAppLanguage } from '../language';
import { translations } from '../translations';
import { Language } from '../types';

const ACCENT = '#6BBF3E';

type Props = {
  title?: string;
  description?: string;
  imageUrl: string;
  imageAlt: string;
  waitlistKey: ProductWaitlistKey;
  titleByLang?: Record<Language, string>;
  pricingPlans?: Array<{
    name: string;
    price: string;
    period?: string;
    features: string[];
  }>;
};

export const ProductComingSoonPage: React.FC<Props> = ({
  title,
  description,
  imageUrl,
  imageAlt,
  waitlistKey,
  titleByLang,
  pricingPlans = [],
}) => {
  const [lang, setLang] = useState<Language>(() => detectAppLanguage());
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof document === 'undefined') return 'dark';
    try {
      const stored = localStorage.getItem('amplia-theme-v2');
      if (stored === 'dark' || stored === 'light') return stored;
    } catch {
      // ignore
    }
    return document.documentElement.classList.contains('dark') ? 'dark' : 'light';
  });
  const [email, setEmail] = useState('');
  const [consent, setConsent] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const t = translations[lang];
  const locale = {
    badge: lang === 'pt' ? 'Em breve' : lang === 'en' ? 'Coming soon' : 'Próximamente',
    back: lang === 'pt' ? '← Voltar' : lang === 'en' ? '← Back' : '← Volver',
    plans: lang === 'pt' ? 'Planos e preços' : lang === 'en' ? 'Plans and pricing' : 'Planes y precios',
    notify: lang === 'pt' ? 'Avisem-me quando lançar' : lang === 'en' ? 'Notify me at launch' : 'Avísame cuando se lance',
    thanks: lang === 'pt' ? 'Obrigado! Vamos avisá-lo quando estiver disponível.' : lang === 'en' ? "Thanks! We'll let you know when it becomes available." : 'Gracias. Te avisaremos cuando esté disponible.',
    emailLabel: 'Email',
    emailPlaceholder: lang === 'pt' ? 'nome@email.com' : lang === 'en' ? 'name@email.com' : 'nombre@email.com',
    consentBefore:
      lang === 'pt'
        ? 'Aceito o tratamento do meu email para notificações de lançamento, conforme a '
        : lang === 'en'
        ? 'I agree to the processing of my email for launch notifications, according to the '
        : 'Acepto el tratamiento de mi email para notificaciones de lanzamiento, según la ',
    privacy: lang === 'pt' ? 'Política de Privacidade' : lang === 'en' ? 'Privacy Policy' : 'Política de Privacidad',
    submitting: lang === 'pt' ? 'A enviar…' : lang === 'en' ? 'Sending…' : 'Enviando…',
    subscribe: lang === 'pt' ? 'Subscrever' : lang === 'en' ? 'Subscribe' : 'Suscribirme',
    consentError:
      lang === 'pt'
        ? 'Confirme o seu consentimento e valide o email.'
        : lang === 'en'
        ? 'Please confirm your consent and validate your email.'
        : 'Confirma tu consentimiento y valida tu email.',
    localError:
      lang === 'pt'
        ? 'Publica o site ou usa um servidor local (HTTP) para enviar o email.'
        : lang === 'en'
        ? 'Publish the site or use a local server (HTTP) to send the email.'
        : 'Publica el sitio o usa un servidor local (HTTP) para enviar el email.',
    saveError:
      lang === 'pt'
        ? 'Não foi possível guardar o pedido.'
        : lang === 'en'
        ? 'Could not save your request.'
        : 'No fue posible guardar tu solicitud.',
    sendError: lang === 'pt' ? 'Erro ao enviar.' : lang === 'en' ? 'Error sending.' : 'Error al enviar.',
  };
  const localizedPortfolio = useMemo(
    () => t.services.portfolios.find((p: any) => p.id === waitlistKey),
    [t.services.portfolios, waitlistKey]
  );
  const effectiveTitle =
    (titleByLang && titleByLang[lang]) || localizedPortfolio?.appName || title || 'Amplia Product';
  const effectiveDescription = localizedPortfolio?.appDescription || description || '';
  const effectivePlans = localizedPortfolio?.pricingPlans || pricingPlans;

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `${effectiveTitle} | Amplia Solutions`;
    document.documentElement.lang = lang;
  }, [effectiveTitle, lang]);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  useEffect(() => {
    persistAppLanguage(lang);
  }, [lang]);

  useEffect(() => {
    const sync = () => {
      setLang(readAppLanguage());
      setTheme(document.documentElement.classList.contains('dark') ? 'dark' : 'light');
    };
    window.addEventListener('amplia-cookie-consent-updated', sync);
    window.addEventListener('amplia-language-change', sync as EventListener);
    window.addEventListener('amplia-theme-change', sync as EventListener);
    return () => {
      window.removeEventListener('amplia-cookie-consent-updated', sync);
      window.removeEventListener('amplia-language-change', sync as EventListener);
      window.removeEventListener('amplia-theme-change', sync as EventListener);
    };
  }, []);

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    document.documentElement.classList.toggle('dark', next === 'dark');
    if (canPersistFunctionalPreferences()) {
      localStorage.setItem('amplia-theme-v2', next);
    }
    window.dispatchEvent(new CustomEvent('amplia-theme-change', { detail: next }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = email.trim();
    if (!trimmed || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed) || !consent) {
      setSubmitError(locale.consentError);
      return;
    }

    if (window.location.protocol === 'file:') {
      setSubmitError(locale.localError);
      return;
    }

    setSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch('/api/notify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          email: trimmed,
          productKey: waitlistKey,
          productName: title,
        }),
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok) {
        throw new Error(typeof data.error === 'string' ? data.error : locale.saveError);
      }

      try {
        const key = `waitlist-${waitlistKey}`;
        const prev = localStorage.getItem(key);
        const list = prev ? JSON.parse(prev) : [];
        if (Array.isArray(list) && !list.includes(trimmed)) list.push(trimmed);
        localStorage.setItem(key, JSON.stringify(Array.isArray(list) ? list : [trimmed]));
      } catch {
        localStorage.setItem(`waitlist-${waitlistKey}-last`, trimmed);
      }

      setSubmitError(null);
      setSubmitted(true);
      setEmail('');
    } catch (err: unknown) {
      setSubmitError(err instanceof Error ? err.message : locale.sendError);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0a0b0e] text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <div
        className="pointer-events-none fixed inset-0 -z-10 opacity-[0.12]"
        style={{
          background: `radial-gradient(ellipse 80% 60% at 50% 0%, ${ACCENT}, transparent 70%)`,
        }}
      />

      <header className="border-b border-gray-200 dark:border-white/10 bg-white/95 dark:bg-[#0f1115]/90 backdrop-blur-md transition-colors duration-300">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-5">
          <Link to="/" className="inline-flex items-center" aria-label="Amplia — início">
            <Logo className="h-9 md:h-10 cursor-pointer" />
          </Link>
          <div className="flex items-center gap-3">
            <div className="hidden items-center gap-1 rounded-full border border-gray-200 dark:border-white/10 bg-gray-100 dark:bg-white/5 p-1 sm:flex">
              {(['pt', 'en', 'es'] as Language[]).map((option) => (
                <button
                  key={option}
                  onClick={() => setLang(option)}
                  className={`rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider ${
                    lang === option ? 'bg-[#6BBF3E] text-white' : 'text-gray-500 dark:text-gray-300 hover:text-[#6BBF3E]'
                  }`}
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
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <span
              className="rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest"
              style={{ backgroundColor: '#facc15', color: '#1a1a1a' }}
            >
              {locale.badge}
            </span>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 py-12 md:py-16">
        <Link
          to="/"
          className="mb-10 inline-flex items-center text-sm font-semibold transition-colors hover:opacity-90"
          style={{ color: ACCENT }}
        >
          {locale.back}
        </Link>

        <div className="overflow-hidden rounded-[32px] border border-gray-200 dark:border-white/10 bg-white dark:bg-[#12141a] shadow-2xl">
          <img
            src={imageUrl}
            alt={imageAlt}
            className="h-auto w-full rounded-[32px] object-cover object-top"
            loading="eager"
            decoding="async"
          />
        </div>

        <h1 className="mt-10 text-3xl font-max font-bold tracking-tight md:text-4xl" style={{ color: ACCENT }}>
          {effectiveTitle}
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-gray-600 dark:text-gray-400">{effectiveDescription}</p>

        {effectivePlans.length > 0 && (
          <section className="mt-10 rounded-[28px] border border-gray-200 dark:border-white/10 bg-white/80 dark:bg-[#12141a]/80 p-8 md:p-10 transition-colors duration-300">
            <h2 className="mb-6 text-lg font-max font-bold" style={{ color: ACCENT }}>
              {locale.plans}
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              {effectivePlans.map((plan: any) => (
                <div key={plan.name} className="rounded-2xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-[#0c0d10] p-5 transition-colors duration-300">
                  <div className="flex items-baseline justify-between gap-2">
                    <p className="text-sm font-bold text-gray-900 dark:text-white">{plan.name}</p>
                    <p className="text-sm font-semibold text-gray-600 dark:text-gray-300">
                      {plan.price}
                      {plan.period ? <span className="ml-1 text-xs text-gray-500">{plan.period}</span> : null}
                    </p>
                  </div>
                  <ul className="mt-3 space-y-1.5 text-xs text-gray-600 dark:text-gray-400">
                    {plan.features.map((f) => (
                      <li key={f}>• {f}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        )}

        <section className="mt-12 rounded-[28px] border border-gray-200 dark:border-white/10 bg-white/80 dark:bg-[#12141a]/80 p-8 md:p-10 transition-colors duration-300">
          <h2 className="mb-6 text-lg font-max font-bold" style={{ color: ACCENT }}>
            {locale.notify}
          </h2>
          {submitted ? (
            <p className="text-gray-700 dark:text-gray-300">{locale.thanks}</p>
          ) : (
            <>
              <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:flex-row sm:items-end">
                <div className="flex-1">
                  <label htmlFor="waitlist-email" className="mb-2 block text-sm text-gray-500 dark:text-gray-400">
                    {locale.emailLabel}
                  </label>
                  <input
                    id="waitlist-email"
                    type="email"
                    name="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={locale.emailPlaceholder}
                    className="w-full rounded-2xl border border-gray-200 dark:border-white/15 bg-white dark:bg-[#0c0d10] px-5 py-3.5 text-gray-900 dark:text-gray-100 placeholder:text-gray-500 dark:placeholder:text-gray-600 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#6BBF3E]"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={submitting}
                  className="!rounded-2xl !border-0 !bg-[#6BBF3E] !px-8 hover:!bg-[#5aad35] focus:!ring-[#6BBF3E] sm:mb-0 disabled:opacity-60"
                >
                  {submitting ? locale.submitting : locale.subscribe}
                </Button>
              </form>
              <label className="mt-4 flex items-start gap-2 text-xs text-gray-600 dark:text-gray-400">
                <input
                  type="checkbox"
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  className="mt-0.5 accent-[#6BBF3E]"
                  required
                />
                <span>
                  {locale.consentBefore}
                  <Link to="/privacidade" className="text-[#6BBF3E] hover:underline">
                    {locale.privacy}
                  </Link>
                  .
                </span>
              </label>
            </>
          )}
          {submitError && (
            <p className="mt-4 text-sm text-rose-400" role="alert">
              {submitError}
            </p>
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
};
