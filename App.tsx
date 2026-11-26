import React, { useEffect, useState } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { analyticsCookiesAllowed } from './cookiePreference';
import { HomePage } from './HomePage';
import { ProductComingSoonPage } from './components/ProductComingSoonPage';
import { CookieConsentBanner } from './components/CookieConsentBanner';
import { CookiesPage, PrivacyPage, TermsPage } from './LegalPages';
import { PRODUCT_SCREENSHOTS } from './productPages';

function VercelAnalyticsIfConsented() {
  const [on, setOn] = useState(() => analyticsCookiesAllowed());
  useEffect(() => {
    const sync = () => setOn(analyticsCookiesAllowed());
    window.addEventListener('amplia-cookie-consent-updated', sync);
    return () => window.removeEventListener('amplia-cookie-consent-updated', sync);
  }, []);
  return on ? <Analytics /> : null;
}

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/privacidade" element={<PrivacyPage />} />
      <Route path="/termos" element={<TermsPage />} />
      <Route path="/cookies" element={<CookiesPage />} />
      <Route
        path="/produtos/responder-ja"
        element={
          <ProductComingSoonPage
            title="Responder Já"
            description="Respostas às avaliações do Google, Booking e TripAdvisor com IA, no tom de voz do seu negócio."
            imageUrl={PRODUCT_SCREENSHOTS.responderja}
            imageAlt="Ecrã do Responder Já com uma avaliação e a resposta sugerida pela IA"
            waitlistKey="responderja"
            liveUrl="https://www.responderja.pt"
            pricingPlans={[]}
          />
        }
      />
      <Route
        path="/produtos/lia"
        element={
          <ProductComingSoonPage
            title="Lia — Agente de Carreira com IA"
            description="O seu agente de carreira com IA: adapta o CV a cada vaga, encontra ofertas compatíveis e prepara-o para as entrevistas."
            imageUrl={PRODUCT_SCREENSHOTS.lia}
            imageAlt="Ecrã da Lia com a pontuação do CV e as sugestões de melhoria"
            waitlistKey="lia"
            pricingPlans={[
              { name: 'Lançamento', price: 'Em breve', features: ['Lista de espera disponível'] },
            ]}
          />
        }
      />
      <Route
        path="/produtos/amplia-home-studio"
        element={
          <ProductComingSoonPage
            title="Home Studio"
            description="Indique as medidas ou carregue uma foto da divisão e receba o ambiente, a planta 2D e a lista de produtos com preços."
            imageUrl={PRODUCT_SCREENSHOTS.homestudio}
            imageAlt="Ecrã do Home Studio com o ambiente gerado e a lista de produtos com preços"
            waitlistKey="homestudio"
            pricingPlans={[
              { name: 'Lançamento', price: 'Em breve', features: ['Lista de espera disponível'] },
            ]}
          />
        }
      />
      <Route
        path="/produtos/zarpa"
        element={
          <ProductComingSoonPage
            title="Zarpa"
            description="Ligue o repositório e receba o Dockerfile, a pipeline de CI/CD e a infraestrutura na cloud, com o custo mensal estimado."
            imageUrl={PRODUCT_SCREENSHOTS.opsflow}
            imageAlt="Ecrã da Zarpa com o repositório ligado e os ficheiros de deploy gerados"
            waitlistKey="opsflow"
            pricingPlans={[
              { name: 'Lançamento', price: 'Em breve', features: ['Lista de espera disponível'] },
            ]}
          />
        }
      />
      <Route
        path="/produtos/subly"
        element={
          <ProductComingSoonPage
            title="Subly"
            description="Todas as subscrições e despesas recorrentes num só sítio, com aviso antes de cada renovação. Em breve."
            imageUrl={PRODUCT_SCREENSHOTS.subly}
            imageAlt="Ecrã do Subly com o total do mês e as próximas cobranças"
            waitlistKey="subly"
            pricingPlans={[
              { name: 'Lançamento', price: 'Em breve', features: ['Lista de espera disponível'] },
            ]}
          />
        }
      />
      <Route
        path="/produtos/ressoa"
        element={
          <ProductComingSoonPage
            title="Ressoa"
            description="Escreva uma ideia e receba as publicações para LinkedIn, Instagram, Facebook, X e TikTok, adaptadas a cada rede e traduzidas. Em breve."
            imageUrl={PRODUCT_SCREENSHOTS.social}
            imageAlt="Ecrã da Ressoa com uma ideia transformada em publicações para cada rede"
            waitlistKey="social"
            pricingPlans={[
              { name: 'Lançamento', price: 'Em breve', features: ['Lista de espera disponível'] },
            ]}
          />
        }
      />
    </Routes>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
      <CookieConsentBanner />
      <VercelAnalyticsIfConsented />
    </BrowserRouter>
  );
}

export default App;
