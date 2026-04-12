import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';
import { Button } from './Button';
import type { ProductWaitlistKey } from '../productPages';

const ACCENT = '#6BBF3E';

type Props = {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  waitlistKey: ProductWaitlistKey;
};

export const ProductComingSoonPage: React.FC<Props> = ({
  title,
  description,
  imageUrl,
  imageAlt,
  waitlistKey,
}) => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `${title} | Amplia Solutions`;
  }, [title]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = email.trim();
    if (!trimmed || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) return;
    try {
      const key = `waitlist-${waitlistKey}`;
      const prev = localStorage.getItem(key);
      const list = prev ? JSON.parse(prev) : [];
      if (Array.isArray(list) && !list.includes(trimmed)) list.push(trimmed);
      localStorage.setItem(key, JSON.stringify(Array.isArray(list) ? list : [trimmed]));
    } catch {
      localStorage.setItem(`waitlist-${waitlistKey}-last`, trimmed);
    }
    setSubmitted(true);
    setEmail('');
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
            Em Breve
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

        <section className="mt-12 rounded-[28px] border border-white/10 bg-[#12141a]/80 p-8 md:p-10">
          <h2 className="mb-6 text-lg font-max font-bold" style={{ color: ACCENT }}>
            Avisa-me quando lançar
          </h2>
          {submitted ? (
            <p className="text-gray-300">Obrigado! Vamos avisar-te quando estiver disponível.</p>
          ) : (
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
                className="!rounded-2xl !border-0 !bg-[#6BBF3E] !px-8 hover:!bg-[#5aad35] focus:!ring-[#6BBF3E] sm:mb-0"
              >
                Subscrever
              </Button>
            </form>
          )}
        </section>
      </main>
    </div>
  );
};
