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
              { name: 'Plano Gratuito', price: '0€', features: ['Período de teste com funcionalidades essenciais'] },
              { name: 'Plano Inicial', price: '9,99€', period: '/mês', features: ['Funcionalidades base de carreira assistida por IA'] },
              { name: 'Plano Profissional', price: '24,99€', period: '/mês', features: ['Mais popular', 'Preparação avançada para entrevistas'] },
              { name: 'Plano Agência', price: '49,99€', period: '/mês', features: ['Gestão de múltiplos perfis e equipas'] },
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
              { name: 'Plano Gratuito', price: '0€', features: ['1 espaço por mês', '3 estilos de decoração', 'Lista de materiais básica', 'Sem compra online', 'Com marca de água nos resultados'] },
              { name: 'Compra única 1 espaço', price: '4,99€', features: ['Lista de compras completa', 'Compra online integrada (em breve)'] },
              { name: 'Compra única 3 espaços', price: '11,99€', features: ['Lista de compras completa', 'Compra online integrada (em breve)'] },
              { name: 'Compra única 10 espaços', price: '29,99€', features: ['Lista de compras completa', 'Compra online integrada (em breve)'] },
              { name: 'Plano Profissional', price: '29,99€', period: '/mês', features: ['Projectos ilimitados', 'Remodelações simples', 'Comparação de preços', 'Exportação PDF'] },
              { name: 'Plano Agência', price: '79,99€', period: '/mês', features: ['Tudo do Profissional', 'Gestão de múltiplos clientes', 'Relatórios com marca própria'] },
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
              { name: 'Plano Gratuito', price: '0€', features: ['5 configurações/mês', 'Dockerfile e docker-compose'] },
              { name: 'Plano Inicial', price: '14,99€', period: '/mês', features: ['50 configurações/mês', 'CI/CD', 'GitHub Actions', 'AWS/GCP/Azure'] },
              { name: 'Plano Profissional', price: '39,99€', period: '/mês', features: ['Ilimitado', 'Kubernetes', 'Terraform', 'Integração Git'] },
              { name: 'Plano Agência', price: '99,99€', period: '/mês', features: ['Até 10 utilizadores', 'Pipelines personalizados', 'SLA', 'Gestor dedicado'] },
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
