import React from 'react';
import { Analytics } from '@vercel/analytics/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './HomePage';
import { ProductComingSoonPage } from './components/ProductComingSoonPage';
import { CookieConsentBanner } from './components/CookieConsentBanner';
import { CookiesPage, PrivacyPage, TermsPage } from './LegalPages';
import { PRODUCT_SCREENSHOTS } from './productPages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacidade" element={<PrivacyPage />} />
        <Route path="/termos" element={<TermsPage />} />
        <Route path="/cookies" element={<CookiesPage />} />
        <Route
          path="/produtos/lia"
          element={
            <ProductComingSoonPage
              title="Lia — Agente de Carreira com IA"
              description="Da otimização de CV à procura de emprego automática. A Lia é o teu agente pessoal de carreira."
              imageUrl={PRODUCT_SCREENSHOTS.lia}
              imageAlt="Pré-visualização do projeto Lia no GitHub"
              waitlistKey="lia"
            />
          }
        />
        <Route
          path="/produtos/amplia-home-studio"
          element={
            <ProductComingSoonPage
              title="Amplia Home Studio"
              description="Carrega uma foto e deixa a nossa IA redesenhar o teu espaço. Do diagnóstico visual à lista de compras em segundos."
              imageUrl={PRODUCT_SCREENSHOTS.homestudio}
              imageAlt="Pré-visualização do Amplia Home Studio no GitHub"
              waitlistKey="homestudio"
            />
          }
        />
        <Route
          path="/produtos/opsflow"
          element={
            <ProductComingSoonPage
              title="OpsFlow AI"
              description="Gera Dockerfiles, CI/CD e cloud configs com IA. O futuro do desenvolvimento de aplicações é inteligente."
              imageUrl={PRODUCT_SCREENSHOTS.opsflow}
              imageAlt="Pré-visualização do OpsFlow no GitHub"
              waitlistKey="opsflow"
            />
          }
        />
      </Routes>
      <CookieConsentBanner />
      <Analytics />
    </BrowserRouter>
  );
}

export default App;
