import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';
import { Button } from './Button';
import { Footer } from './Footer';
import type { ProductWaitlistKey } from '../productPages';

const ACCENT = '#6BBF3E';

type Props = {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  waitlistKey: ProductWaitlistKey;
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
  pricingPlans = [],
}) => {
  const [email, setEmail] = useState('');
  const [consent, setConsent] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `${title} | Amplia Solutions`;
  }, [title]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = email.trim();
    if (!trimmed || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed) || !consent) {
      setSubmitError('Confirma o teu consentimento e valida o email.');
      return;
    }

    if (window.location.protocol === 'file:') {
      setSubmitError('Publica o site ou usa um servidor local (HTTP) para enviar o email.');
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
        throw new Error(typeof data.error === 'string' ? data.error : 'Não foi possível guardar o pedido.');
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
      setSubmitError(err instanceof Error ? err.message : 'Erro ao enviar.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="dark min-h-screen bg-[#0a0b0e] text-gray-100">
      <div
        className="pointer-events-none fixed inset-0 -z-10 opacity-[0.12]"
        style={{
          background: `radial-gradient(ellipse 80% 60% at 50% 0%, ${ACCENT}, transparent 70%)`,
        }}
      />

      <header className="border-b border-white/10 bg-[#0f1115]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-5">
          <Link to="/" className="inline-flex items-center" aria-label="Amplia — início">
            <Logo className="h-9 md:h-10 cursor-pointer" />
          </Link>
          <span
            className="rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest"
            style={{ backgroundColor: '#facc15', color: '#1a1a1a' }}
          >
            Em breve
          </span>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 py-12 md:py-16">
        <Link
          to="/"
          className="mb-10 inline-flex items-center text-sm font-semibold transition-colors hover:opacity-90"
          style={{ color: ACCENT }}
        >
          ← Voltar
        </Link>

        <div className="overflow-hidden rounded-[32px] border border-white/10 bg-[#12141a] shadow-2xl">
          <img
            src={imageUrl}
            alt={imageAlt}
            className="h-auto w-full object-cover object-top"
            loading="eager"
            decoding="async"
          />
        </div>

        <h1 className="mt-10 text-3xl font-max font-bold tracking-tight md:text-4xl" style={{ color: ACCENT }}>
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-gray-400">{description}</p>

        {pricingPlans.length > 0 && (
          <section className="mt-10 rounded-[28px] border border-white/10 bg-[#12141a]/80 p-8 md:p-10">
            <h2 className="mb-6 text-lg font-max font-bold" style={{ color: ACCENT }}>
              Planos e preços
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              {pricingPlans.map((plan) => (
                <div key={plan.name} className="rounded-2xl border border-white/10 bg-[#0c0d10] p-5">
                  <div className="flex items-baseline justify-between gap-2">
                    <p className="text-sm font-bold text-white">{plan.name}</p>
                    <p className="text-sm font-semibold text-gray-300">
                      {plan.price}
                      {plan.period ? <span className="ml-1 text-xs text-gray-500">{plan.period}</span> : null}
                    </p>
                  </div>
                  <ul className="mt-3 space-y-1.5 text-xs text-gray-400">
                    {plan.features.map((f) => (
                      <li key={f}>• {f}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        )}

        <section className="mt-12 rounded-[28px] border border-white/10 bg-[#12141a]/80 p-8 md:p-10">
          <h2 className="mb-6 text-lg font-max font-bold" style={{ color: ACCENT }}>
            Avisa-me quando lançar
          </h2>
          {submitted ? (
            <p className="text-gray-300">Obrigado! Vamos avisar-te quando estiver disponível.</p>
          ) : (
            <>
              <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:flex-row sm:items-end">
                <div className="flex-1">
                  <label htmlFor="waitlist-email" className="mb-2 block text-sm text-gray-500">
                    Email
                  </label>
                  <input
                    id="waitlist-email"
                    type="email"
                    name="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="nome@email.com"
                    className="w-full rounded-2xl border border-white/15 bg-[#0c0d10] px-5 py-3.5 text-gray-100 placeholder:text-gray-600 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#6BBF3E]"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={submitting}
                  className="!rounded-2xl !border-0 !bg-[#6BBF3E] !px-8 hover:!bg-[#5aad35] focus:!ring-[#6BBF3E] sm:mb-0 disabled:opacity-60"
                >
                  {submitting ? 'A enviar…' : 'Subscrever'}
                </Button>
              </form>
              <label className="mt-4 flex items-start gap-2 text-xs text-gray-400">
                <input
                  type="checkbox"
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  className="mt-0.5 accent-[#6BBF3E]"
                  required
                />
                <span>
                  Aceito o tratamento do meu email para notificações de lançamento, conforme a{' '}
                  <Link to="/privacidade" className="text-[#6BBF3E] hover:underline">
                    Política de Privacidade
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
