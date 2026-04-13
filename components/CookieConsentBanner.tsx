import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const STORAGE_KEY = 'cookie-preference';

export function CookieConsentBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const pref = localStorage.getItem(STORAGE_KEY);
    if (!pref) setVisible(true);
  }, []);

  const setPreference = (value: 'all' | 'essential') => {
    localStorage.setItem(STORAGE_KEY, value);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 left-6 right-6 z-[120] md:left-auto md:right-6 md:w-[460px]">
      <div className="rounded-3xl border border-amplia-green/30 bg-[#0f1115]/95 p-5 shadow-2xl backdrop-blur-md">
        <p className="text-sm text-gray-200">
          Utilizamos cookies para melhorar a experiência e garantir o funcionamento do site.
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-2">
          <button
            onClick={() => setPreference('all')}
            className="rounded-xl bg-[#6BBF3E] px-4 py-2 text-xs font-bold text-white hover:bg-[#5aad35]"
          >
            Aceitar todos
          </button>
          <button
            onClick={() => setPreference('essential')}
            className="rounded-xl border border-white/20 px-4 py-2 text-xs font-bold text-gray-200 hover:border-[#6BBF3E] hover:text-[#6BBF3E]"
          >
            Só essenciais
          </button>
          <Link to="/cookies" className="ml-auto text-xs font-bold text-[#6BBF3E] hover:underline">
            Ver politica de cookies
          </Link>
        </div>
      </div>
    </div>
  );
}
