# Amplia Solutions

Site institucional da Amplia Solutions, desenvolvido com React + Vite + TypeScript, com formulário de contacto e chatbot com integração Google Gemini via funções serverless.

## Stack técnica

- React 19
- Vite
- TypeScript
- Tailwind CSS (build local com PostCSS)
- react-router-dom
- Vercel Functions para endpoints em `/api`

## Estrutura principal

- `api/` — funções serverless (chatbot, contacto, notificações) e utilitários de backend.
- `components/` — componentes React da interface (home, secções, chatbot, consentimento de cookies, etc.).
- `contexts/` — contextos React partilhados pela aplicação.
- `public/` — assets estáticos públicos (imagens, fontes, `robots.txt`, `sitemap.xml`).

## Como correr localmente

Pré-requisitos:

- Node.js 18+
- npm

1. Instalar dependências:

```bash
npm install
```

2. Criar ficheiro de ambiente local a partir do exemplo:

```bash
cp .env.example .env.local
```

3. Configurar variáveis necessárias (sem usar valores reais no repositório):

- `GOOGLE_SERVICE_ACCOUNT_JSON` (obrigatória para `/api/chat`: chave JSON de uma conta de serviço Google Cloud com a função Vertex AI User)
- `RESEND_API_KEY` (obrigatória para envio de email em `/api/contact`)
- `CONTACT_EMAIL` (destinatário dos contactos)

Variáveis opcionais suportadas:

- `RESEND_FROM`
- `VITE_CONTACT_ENDPOINT`

4. Arrancar ambiente de desenvolvimento:

```bash
npm run dev
```

## Build e preview de produção

Gerar build:

```bash
npm run build
```

Executar preview local do build:

```bash
npm run preview
```

## Deploy

O projeto está preparado para Vercel (configuração em `vercel.json`).
Quando o repositório está ligado ao Vercel, cada push para `main` desencadeia deploy automático.

## Segurança e privacidade

- Endpoints serverless com validação/sanitização de input, limites de tamanho do body e rate limiting básico por IP.
- Headers de segurança (incluindo CSP, HSTS e Permissions-Policy) configurados em `vercel.json`.
- Páginas legais disponíveis nas rotas:
	- `/privacidade`
	- `/cookies`
	- `/termos`

## Licença / propriedade

Este repositório está marcado como privado (`"private": true` em `package.json`) e não inclui uma licença pública explícita.
