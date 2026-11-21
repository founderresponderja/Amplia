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
  { path: '/produtos/zarpa', file: 'produtos/zarpa.html', title: 'Zarpa | Amplia Solutions', description: 'Ligue o repositório e a Zarpa gera o Dockerfile, a pipeline de CI/CD e a infraestrutura na cloud, com o custo estimado.' },
  { path: '/produtos/ressoa', file: 'produtos/ressoa.html', title: 'Ressoa | Amplia Solutions', description: 'Publicações para LinkedIn, Instagram, Facebook, X e TikTok a partir de uma só ideia, com IA. Em breve.' },
  { path: '/produtos/subly', file: 'produtos/subly.html', title: 'Subly | Amplia Solutions', description: 'Gestor de subscrições e despesas recorrentes. Em breve.' },
];

export function render(url: string): string {
  return renderToString(
    <StaticRouter location={url}>
      <AppRoutes />
    </StaticRouter>
  );
}
