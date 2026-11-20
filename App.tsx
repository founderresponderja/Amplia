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
        path="/produtos/lia"
        element={
          <ProductComingSoonPage
            title="Lia — Agente de Carreira com IA"
            description="Otimize o seu CV com IA, encontre vagas compatíveis com o seu perfil e prepare-se para entrevistas. O seu agente pessoal de carreira."
            imageUrl={PRODUCT_SCREENSHOTS.lia}
            imageAlt="Pré-visualização do projeto Lia no GitHub"
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
            title="Amplia Home Studio"
            description="Carregue uma foto do seu espaço e receba, em segundos, um projeto de decoração completo com lista de materiais e estimativa de custos."
            imageUrl={PRODUCT_SCREENSHOTS.homestudio}
            imageAlt="Pré-visualização do Amplia Home Studio no GitHub"
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
        path="/produtos/opsflow"
        element={
          <ProductComingSoonPage
            title="OpsFlow AI"
            description="Gere ficheiros de configuração, pipelines de integração contínua e configurações cloud com IA. Do código à produção em minutos."
            imageUrl={PRODUCT_SCREENSHOTS.opsflow}
            imageAlt="Pré-visualização do OpsFlow no GitHub"
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
            description="Gestor de subscrições e despesas recorrentes. Em breve."
            imageUrl={PRODUCT_SCREENSHOTS.subly}
            imageAlt="Pré-visualização do Subly"
            waitlistKey="subly"
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
