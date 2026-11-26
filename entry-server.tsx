// Gera o HTML de cada página durante a compilação (páginas pré-geradas).
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { AppRoutes } from './App';
import { translations } from './translations';
import { legalTranslations } from './legalTranslations';

export interface PrerenderRoute {
  path: string;
  file: string;
  title: string;
  description: string;
}

const home = translations.pt.seo;
const legal = legalTranslations.pt;
const legalDescription = 'Informação legal da Amplia Solutions.';

export const routes: PrerenderRoute[] = [
  { path: '/', file: 'index.html', title: home.title, description: home.description },
  { path: '/privacidade', file: 'privacidade.html', title: `${legal.privacy.title} | Amplia Solutions`, description: legalDescription },
  { path: '/termos', file: 'termos.html', title: `${legal.terms.title} | Amplia Solutions`, description: legalDescription },
  { path: '/cookies', file: 'cookies.html', title: `${legal.cookies.title} | Amplia Solutions`, description: legalDescription },
  { path: '/produtos/responder-ja', file: 'produtos/responder-ja.html', title: 'Responder Já — Respostas às avaliações com IA | Amplia Solutions', description: 'Responda às avaliações do Google, Booking e TripAdvisor com IA, no tom do seu negócio, e acompanhe a reputação num só painel.' },
  { path: '/produtos/lia', file: 'produtos/lia.html', title: 'Lia — Agente de Carreira com IA | Amplia Solutions', description: 'O seu agente de carreira com IA: adapta o CV a cada vaga, encontra ofertas compatíveis e prepara-o para as entrevistas.' },
  { path: '/produtos/amplia-home-studio', file: 'produtos/amplia-home-studio.html', title: 'Home Studio | Amplia Solutions', description: 'Indique as medidas ou carregue uma foto da divisão e receba o ambiente, a planta 2D e a lista de produtos com preços.' },
  { path: '/produtos/subly', file: 'produtos/subly.html', title: 'Subly | Amplia Solutions', description: 'Todas as subscrições pagas e newsletters, encontradas nos extratos e na caixa de correio. Em breve.' },
];

export function render(url: string): string {
  return renderToString(
    <StaticRouter location={url}>
      <AppRoutes />
    </StaticRouter>
  );
}
