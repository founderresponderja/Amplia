import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import { detectAppLanguage, readAppLanguage } from '../language';
import { readCookiePreference, saveCookiePreference } from '../cookiePreference';
import { legalTranslations } from '../legalTranslations';
import { Language } from '../types';

export function CookieConsentBanner() {
  const [visible, setVisible] = useState(() => {
    try {
      return readCookiePreference() === null;
    } catch {
      return true;
    }
  });
  const [modalOpen, setModalOpen] = useState(false);
  const [draftFunctional, setDraftFunctional] = useState(false);
  const [draftAnalytics, setDraftAnalytics] = useState(false);
  const [lang, setLang] = useState<Language>(() => detectAppLanguage());

  useEffect(() => {
    const syncLang = () => setLang(readAppLanguage());
    window.addEventListener('amplia-language-change', syncLang as EventListener);
    return () => window.removeEventListener('amplia-language-change', syncLang as EventListener);
  }, []);

  useEffect(() => {
    if (modalOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [modalOpen]);

  const openModal = () => {
    const p = readCookiePreference();
    setDraftFunctional(p?.functional ?? false);
    setDraftAnalytics(p?.analytics ?? false);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  const hideBanner = () => {
    setVisible(false);
    setModalOpen(false);
  };

  const acceptAll = () => {
    saveCookiePreference({ functional: true, analytics: true });
    hideBanner();
  };

  const essentialOnly = () => {
    saveCookiePreference({ functional: false, analytics: false });
    hideBanner();
  };

  const saveModalPreferences = () => {
    saveCookiePreference({ functional: draftFunctional, analytics: draftAnalytics });
    hideBanner();
  };

  const acceptAllInModal = () => {
    saveCookiePreference({ functional: true, analytics: true });
    hideBanner();
  };

  if (!visible) return null;

  const t = legalTranslations[lang].cookieBanner;

  const modal = modalOpen
    ? createPortal(
        <div
          className="fixed inset-0 z-[130] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
          role="presentation"
          onClick={(e) => e.target === e.currentTarget && closeModal()}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="cookie-modal-title"
            className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-3xl border border-[#6BBF3E]/35 bg-[#0f1115] p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 id="cookie-modal-title" className="text-lg font-bold text-[#6BBF3E]">
              {t.modalTitle}
            </h2>

            <div className="mt-5 space-y-5">
              <div className="flex items-start justify-between gap-4 rounded-2xl border border-white/10 bg-black/20 p-4">
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-bold text-white">{t.essentialLabel}</p>
                  <p className="mt-1 text-xs text-gray-400">{t.essentialDesc}</p>
                  <p className="mt-2 text-[10px] font-bold uppercase tracking-wider text-[#6BBF3E]">
                    {t.alwaysOn}
                  </p>
                </div>
                <button
                  type="button"
                  disabled
                  aria-disabled="true"
                  className="relative h-7 w-12 shrink-0 cursor-not-allowed rounded-full bg-[#6BBF3E]/40"
                  aria-label={t.essentialLabel}
                >
                  <span className="absolute right-1 top-1 h-5 w-5 rounded-full bg-white shadow" />
                </button>
              </div>

              <div className="flex items-start justify-between gap-4 rounded-2xl border border-white/10 bg-black/20 p-4">
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-bold text-white">{t.functionalLabel}</p>
                  <p className="mt-1 text-xs text-gray-400">{t.functionalDesc}</p>
                </div>
                <button
                  type="button"
                  role="switch"
                  aria-checked={draftFunctional}
                  onClick={() => setDraftFunctional((v) => !v)}
                  className={`relative h-7 w-12 shrink-0 rounded-full transition-colors ${
                    draftFunctional ? 'bg-[#6BBF3E]' : 'bg-white/20'
                  }`}
                  aria-label={t.functionalLabel}
                >
                  <span
                    className={`absolute top-1 h-5 w-5 rounded-full bg-white shadow transition-transform ${
                      draftFunctional ? 'right-1' : 'left-1'
                    }`}
                  />
                </button>
              </div>

              <div className="flex items-start justify-between gap-4 rounded-2xl border border-white/10 bg-black/20 p-4">
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-bold text-white">{t.analyticsLabel}</p>
                  <p className="mt-1 text-xs text-gray-400">{t.analyticsDesc}</p>
                </div>
                <button
                  type="button"
                  role="switch"
                  aria-checked={draftAnalytics}
                  onClick={() => setDraftAnalytics((v) => !v)}
                  className={`relative h-7 w-12 shrink-0 rounded-full transition-colors ${
                    draftAnalytics ? 'bg-[#6BBF3E]' : 'bg-white/20'
                  }`}
                  aria-label={t.analyticsLabel}
                >
                  <span
                    className={`absolute top-1 h-5 w-5 rounded-full bg-white shadow transition-transform ${
                      draftAnalytics ? 'right-1' : 'left-1'
                    }`}
                  />
                </button>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap justify-end gap-2">
              <button
                type="button"
                onClick={saveModalPreferences}
                className="rounded-xl border border-[#6BBF3E]/50 px-4 py-2.5 text-xs font-bold text-[#6BBF3E] hover:bg-[#6BBF3E]/10"
              >
                {t.savePreferences}
              </button>
              <button
                type="button"
                onClick={acceptAllInModal}
                className="rounded-xl bg-[#6BBF3E] px-4 py-2.5 text-xs font-bold text-white hover:bg-[#5aad35]"
              >
                {t.acceptAll}
              </button>
            </div>

            <div className="mt-4 border-t border-white/10 pt-4 text-center">
              <Link to="/cookies" className="text-xs font-bold text-gray-400 hover:text-[#6BBF3E] hover:underline">
                {t.linkLabel}
              </Link>
            </div>
          </div>
        </div>,
        document.body
      )
    : null;

  return (
    <>
      <div className="fixed bottom-6 left-6 right-6 z-[120] md:left-auto md:right-6 md:w-[460px]">
        <div className="rounded-3xl border border-[#6BBF3E]/30 bg-[#0f1115]/95 p-5 shadow-2xl backdrop-blur-md">
          <p className="text-sm text-gray-200">
            {t.textBeforePrivacyLink}
            <Link
              to="/privacidade"
              className="font-bold text-[#6BBF3E] hover:underline focus:outline-none focus:ring-2 focus:ring-[#6BBF3E]/50 rounded"
            >
              {t.privacyPolicyLinkLabel}
            </Link>
            {t.textAfterPrivacyLink}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={acceptAll}
              className="rounded-xl bg-[#6BBF3E] px-4 py-2 text-xs font-bold text-white hover:bg-[#5aad35]"
            >
              {t.acceptAll}
            </button>
            <button
              type="button"
              onClick={essentialOnly}
              className="rounded-xl border border-white/20 px-4 py-2 text-xs font-bold text-gray-200 hover:border-[#6BBF3E] hover:text-[#6BBF3E]"
            >
              {t.essentialOnly}
            </button>
            <button
              type="button"
              onClick={openModal}
              className="rounded-xl border border-[#6BBF3E]/50 px-4 py-2 text-xs font-bold text-[#6BBF3E] hover:bg-[#6BBF3E]/10"
            >
              {t.configure}
            </button>
          </div>
          <div className="mt-3 text-right">
            <Link to="/cookies" className="text-[11px] font-bold text-gray-500 hover:text-[#6BBF3E] hover:underline">
              {t.linkLabel}
            </Link>
          </div>
        </div>
      </div>
      {modal}
    </>
  );
}
