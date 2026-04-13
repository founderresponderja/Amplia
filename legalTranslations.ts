import { AppLanguage } from './language';

type Section = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
  link?: { label: string; href: string };
};

type LegalContent = {
  back: string;
  languageLabel: string;
  privacy: { title: string; sections: Section[] };
  terms: { title: string; sections: Section[] };
  cookies: { title: string; sections: Section[] };
  cookieBanner: {
    text: string;
    acceptAll: string;
    essentialOnly: string;
    configure: string;
    savePreferences: string;
    modalTitle: string;
    essentialLabel: string;
    essentialDesc: string;
    functionalLabel: string;
    functionalDesc: string;
    analyticsLabel: string;
    analyticsDesc: string;
    alwaysOn: string;
    linkLabel: string;
  };
};

export const legalTranslations: Record<AppLanguage, LegalContent> = {
  pt: {
    back: '<- Voltar',
    languageLabel: 'Idioma',
    privacy: {
      title: 'Politica de Privacidade',
      sections: [
        {
          heading: '1. Identidade e contactos do responsavel pelo tratamento',
          paragraphs: [
            'A entidade responsavel pelo tratamento dos dados pessoais e a Amplia Solutions, com sede em Agualva-Cacem, Portugal.',
            'Contacto para assuntos de privacidade: ampliasolutions.pt@gmail.com.',
          ],
        },
        {
          heading: '2. Dados pessoais recolhidos',
          bullets: [
            'Dados de identificacao e contacto: nome e email.',
            'Conteudo de mensagens enviadas atraves do formulario de contacto.',
            'Dados tecnicos e de uso do website (ex.: logs tecnicos, preferencia de idioma e cookies).',
          ],
        },
        {
          heading: '3. Finalidades e base legal do tratamento',
          bullets: [
            'Resposta a pedidos de contacto e informacao comercial (diligencias pre-contratuais e interesse legitimo).',
            'Prestacao, manutencao e melhoria dos servicos e produtos digitais (execucao contratual e interesse legitimo).',
            'Cumprimento de obrigacoes legais e fiscais (obrigacao juridica).',
            'Comunicacoes de marketing apenas quando exista consentimento valido (consentimento).',
          ],
        },
        {
          heading: '4. Prazo de conservacao',
          paragraphs: [
            'Os dados sao conservados apenas pelo periodo necessario as finalidades que justificaram a recolha, incluindo prazos legais de arquivo e defesa de direitos. Quando o tratamento se baseia em consentimento, os dados sao conservados ate retirada desse consentimento.',
          ],
        },
        {
          heading: '5. Direitos do titular dos dados',
          bullets: [
            'Direito de acesso aos dados pessoais.',
            'Direito de rectificacao de dados inexatos ou incompletos.',
            'Direito ao apagamento (quando legalmente aplicavel).',
            'Direito a limitacao do tratamento.',
            'Direito a portabilidade dos dados.',
            'Direito de oposicao ao tratamento.',
          ],
          paragraphs: ['Pode exercer os seus direitos atraves do email ampliasolutions.pt@gmail.com.'],
        },
        {
          heading: '6. Transferencias internacionais de dados',
          paragraphs: [
            'Sempre que exista transferencia internacional de dados para fora do Espaco Economico Europeu, a Amplia adota salvaguardas adequadas, incluindo Clausulas Contratuais-Tipo aprovadas pela Comissao Europeia e outras medidas legalmente exigidas.',
          ],
        },
        {
          heading: '7. Uso de cookies',
          paragraphs: [
            'Utilizamos cookies essenciais e, mediante consentimento, cookies funcionais e analiticos para melhorar a experiencia de utilizacao. Consulte os detalhes em /cookies.',
          ],
        },
        {
          heading: '8. Autoridade de controlo',
          paragraphs: ['Tem o direito de apresentar reclamacao junto da CNPD - Comissao Nacional de Protecao de Dados.'],
          link: { label: 'www.cnpd.pt', href: 'https://www.cnpd.pt' },
        },
        {
          heading: '9. Operacoes de recolha efetivamente realizadas nesta aplicacao',
          bullets: [
            'Formulario de contacto: nome, empresa (opcional), email e mensagem.',
            'Formulario "Avisa-me quando lancar": email e produto de interesse.',
            'Chatbot: mensagem do utilizador e resposta da IA (registo tecnico e envio por email operacional).',
          ],
        },
        {
          heading: '10. Subprocessadores e terceiros',
          bullets: [
            'Resend: envio de emails transacionais e notificacoes.',
            'Google Gemini API: geracao de respostas de IA no chatbot.',
            'Vercel: alojamento e execucao de funcoes serverless.',
            'Stripe: processamento de pagamentos (quando aplicavel).',
            'Clerk: autenticacao para produtos especificos fora deste website institucional (ex.: Responder Ja).',
          ],
        },
        {
          heading: '11. Menores',
          paragraphs: [
            'Os servicos nao sao dirigidos a menores de 16 anos. Se tiver conhecimento de recolha de dados de menor sem autorizacao valida, contacte-nos para eliminacao imediata.',
          ],
        },
        {
          heading: '12. Exercicios de direitos e apagamento',
          paragraphs: [
            'Pedidos de acesso, apagamento, oposicao e portabilidade podem ser enviados para ampliasolutions.pt@gmail.com. Responderemos dentro dos prazos legais aplicaveis.',
          ],
        },
      ],
    },
    terms: {
      title: 'Termos e Condicoes',
      sections: [
        {
          heading: '1. Identificacao da empresa',
          paragraphs: [
            'A Amplia Solutions e uma empresa sediada em Agualva-Cacem, Portugal, com contacto eletrónico em ampliasolutions.pt@gmail.com.',
          ],
        },
        {
          heading: '2. Descricao dos servicos',
          bullets: [
            'Responder Ja - plataforma de IA para resposta a avaliacoes online.',
            'Lia - agente de carreira com IA.',
            'Amplia Home Studio - redesenho de espacos com IA.',
            'OpsFlow - geracao inteligente de configuracoes DevOps e cloud.',
          ],
        },
        {
          heading: '3. Condicoes de uso e subscricao',
          paragraphs: [
            'O utilizador compromete-se a usar os servicos de forma licita, sem violar direitos de terceiros nem regras de seguranca. A subscricao pode incluir renovacao automatica, limites de uso e condicoes especificas por plano.',
          ],
        },
        {
          heading: '4. Precos e pagamentos',
          paragraphs: [
            'Os precos aplicaveis sao apresentados no momento da contratacao. Os pagamentos sao processados por prestadores terceiros, incluindo Stripe, estando sujeitos aos respetivos termos e politicas.',
          ],
        },
        {
          heading: '5. Cancelamento e reembolso',
          paragraphs: [
            'Nos termos da legislacao da Uniao Europeia, consumidores podem beneficiar do direito de arrependimento de 14 dias quando aplicavel. Podem existir excecoes para servicos digitais iniciados com consentimento expresso do utilizador.',
          ],
        },
        {
          heading: '6. Limitacao de responsabilidade',
          paragraphs: [
            'A Amplia nao responde por danos indiretos, lucros cessantes ou indisponibilidade de servicos de terceiros, salvo nos limites imperativos da lei e em casos de dolo ou culpa grave.',
          ],
        },
        {
          heading: '7. Lei aplicavel',
          paragraphs: ['Estes termos regem-se pela lei portuguesa.'],
        },
        {
          heading: '8. Resolucao de litigios',
          paragraphs: ['Em caso de litigio de consumo, pode recorrer ao Centro de Arbitragem de Conflitos de Consumo de Lisboa.'],
          link: { label: 'www.centroarbitragemlisboa.pt', href: 'https://www.centroarbitragemlisboa.pt' },
        },
        {
          heading: '9. Pagamentos e dados de cartao',
          paragraphs: [
            'Os pagamentos sao processados pelo Stripe. A Amplia nao armazena numeros completos de cartao nem codigos de seguranca dos utilizadores.',
          ],
        },
      ],
    },
    cookies: {
      title: 'Política de Cookies',
      sections: [
        {
          heading: '1. Cookies essenciais',
          paragraphs: [
            'São necessários ao funcionamento técnico e seguro do website (por exemplo, encaminhamento de pedidos, equilíbrio de carga e preferência de consentimento). Não podem ser desativados na nossa configuração sem afetar o funcionamento do site.',
          ],
        },
        {
          heading: '2. Cookies funcionais',
          paragraphs: [
            'Permitem memorizar escolhas que melhoram a experiência, como o idioma da interface (PT/EN/ES) e o tema visual (claro ou escuro). Só são utilizados se aceitar esta categoria ou se aceitar todas as opções.',
          ],
        },
        {
          heading: '3. Cookies analíticos',
          paragraphs: [
            'Ajudam a compreender de forma agregada como o site é utilizado (por exemplo, páginas vistas e desempenho), através do Vercel Analytics. Só são carregados com o seu consentimento.',
          ],
        },
        {
          heading: '4. Duração dos cookies',
          paragraphs: [
            'Podem existir cookies de sessão (expiram ao fechar o browser) e cookies persistentes (mantidos por um período definido ou até eliminação manual).',
          ],
        },
        {
          heading: '5. Como gerir ou desativar cookies',
          paragraphs: [
            'Pode gerir cookies no banner deste site ou nas definições do seu browser (Chrome, Firefox, Safari, Edge). A desativação de cookies não essenciais pode limitar certas funcionalidades.',
          ],
        },
        {
          heading: '6. Conformidade legal',
          paragraphs: [
            'A utilização de cookies segue a Diretiva ePrivacy e o RGPD/GDPR, incluindo a recolha de consentimento para categorias não essenciais.',
          ],
        },
        {
          heading: '7. LocalStorage e preferências guardadas',
          bullets: [
            'cookie-preference: JSON com as categorias aceites (funcionais e analíticos).',
            'amplia-language: preferência de idioma (apenas se aceitar cookies funcionais).',
            'theme: modo claro ou escuro (apenas se aceitar cookies funcionais).',
            'waitlist-*: pode guardar localmente o email submetido para evitar duplicações no dispositivo.',
          ],
          paragraphs: [
            'O banner surge na primeira visita quando ainda não existe uma preferência guardada. Pode alterar as suas escolhas a qualquer momento através do botão «Configurar» no banner (quando visível) ou limpando os dados do site no browser.',
          ],
        },
      ],
    },
    cookieBanner: {
      text: 'Utilizamos cookies para melhorar a sua experiência e garantir o funcionamento do website. Pode escolher quais categorias aceita.',
      acceptAll: 'Aceitar todos',
      essentialOnly: 'Só essenciais',
      configure: 'Configurar',
      savePreferences: 'Guardar preferências',
      modalTitle: 'Configuração de cookies',
      essentialLabel: 'Cookies essenciais',
      essentialDesc: 'Necessários ao funcionamento técnico do site e à sua escolha de consentimento.',
      functionalLabel: 'Cookies funcionais',
      functionalDesc: 'Idioma da interface e tema visual (claro/escuro).',
      analyticsLabel: 'Cookies analíticos',
      analyticsDesc: 'Estatísticas agregadas de utilização através do Vercel Analytics.',
      alwaysOn: 'Sempre ativos',
      linkLabel: 'Política de cookies',
    },
  },
  en: {
    back: '<- Back',
    languageLabel: 'Language',
    privacy: {
      title: 'Privacy Policy',
      sections: [
        {
          heading: '1. Controller identity and contacts',
          paragraphs: [
            'The data controller is Amplia Solutions, based in Agualva-Cacem, Portugal.',
            'Privacy contact: ampliasolutions.pt@gmail.com.',
          ],
        },
        {
          heading: '2. Personal data collected',
          bullets: [
            'Identity and contact data: name and email.',
            'Message content submitted through the contact form.',
            'Website usage and technical data (e.g., technical logs, language preference, and cookies).',
          ],
        },
        {
          heading: '3. Purposes and legal basis',
          bullets: [
            'Replying to contact and commercial requests (pre-contractual steps and legitimate interest).',
            'Providing, maintaining, and improving digital services and products (contract performance and legitimate interest).',
            'Compliance with legal and tax obligations (legal obligation).',
            'Marketing communications only where valid consent exists (consent).',
          ],
        },
        {
          heading: '4. Data retention period',
          paragraphs: [
            'Data is stored only for as long as necessary for the purposes described above, including legal retention periods and rights defense. Where processing relies on consent, data is stored until consent is withdrawn.',
          ],
        },
        {
          heading: '5. Data subject rights',
          bullets: [
            'Right of access.',
            'Right to rectification.',
            'Right to erasure (where applicable).',
            'Right to restriction of processing.',
            'Right to data portability.',
            'Right to object.',
          ],
          paragraphs: ['You may exercise these rights by emailing ampliasolutions.pt@gmail.com.'],
        },
        {
          heading: '6. International transfers',
          paragraphs: [
            'If personal data is transferred outside the EEA, Amplia applies appropriate safeguards, including EU Standard Contractual Clauses and other legally required mechanisms.',
          ],
        },
        {
          heading: '7. Cookies',
          paragraphs: [
            'We use essential cookies and, with consent, functional and analytics cookies. See details at /cookies.',
          ],
        },
        {
          heading: '8. Supervisory authority',
          paragraphs: ['You may lodge a complaint with CNPD - Portuguese Data Protection Authority.'],
          link: { label: 'www.cnpd.pt', href: 'https://www.cnpd.pt' },
        },
        {
          heading: '9. Data collection operations currently performed in this app',
          bullets: [
            'Contact form: name, company (optional), email, and message.',
            '"Notify me at launch" form: email and selected product.',
            'Chatbot: user message and AI reply (technical logging and operational email notification).',
          ],
        },
        {
          heading: '10. Third-party processors',
          bullets: [
            'Resend: transactional and notification email delivery.',
            'Google Gemini API: AI response generation for chatbot.',
            'Vercel: hosting and serverless functions runtime.',
            'Stripe: payment processing (where applicable).',
            'Clerk: authentication provider for specific products outside this institutional website (e.g., Responder Ja).',
          ],
        },
        {
          heading: '11. Minors',
          paragraphs: [
            'Services are not intended for users under 16 years old. If you believe a minor provided data without valid authorization, contact us for immediate deletion.',
          ],
        },
        {
          heading: '12. Rights requests and erasure',
          paragraphs: [
            'Requests for access, erasure, objection, and portability can be sent to ampliasolutions.pt@gmail.com. We will respond within applicable legal deadlines.',
          ],
        },
      ],
    },
    terms: {
      title: 'Terms and Conditions',
      sections: [
        {
          heading: '1. Company identification',
          paragraphs: [
            'Amplia Solutions is based in Agualva-Cacem, Portugal, and can be contacted at ampliasolutions.pt@gmail.com.',
          ],
        },
        {
          heading: '2. Services description',
          bullets: [
            'Responder Ja - AI platform for online review responses.',
            'Lia - AI career agent.',
            'Amplia Home Studio - AI-powered interior redesign.',
            'OpsFlow - intelligent DevOps and cloud configuration generation.',
          ],
        },
        {
          heading: '3. Use and subscription conditions',
          paragraphs: [
            'Users must use services lawfully and without harming third-party rights or security. Subscriptions may include auto-renewal, usage limits, and plan-specific conditions.',
          ],
        },
        {
          heading: '4. Prices and payments',
          paragraphs: [
            'Applicable prices are displayed at checkout. Payments are processed by third-party providers, including Stripe, under their own terms and policies.',
          ],
        },
        {
          heading: '5. Cancellation and refunds',
          paragraphs: [
            'Under EU legislation, consumers may have a 14-day withdrawal right where applicable. Legal exceptions may apply to digital services started with explicit user consent.',
          ],
        },
        {
          heading: '6. Limitation of liability',
          paragraphs: [
            'Amplia is not liable for indirect damages, lost profits, or third-party service downtime, except where mandatory law applies or in cases of wilful misconduct or gross negligence.',
          ],
        },
        {
          heading: '7. Governing law',
          paragraphs: ['These terms are governed by Portuguese law.'],
        },
        {
          heading: '8. Dispute resolution',
          paragraphs: ['For consumer disputes, you may use the Lisbon Consumer Arbitration Centre.'],
          link: { label: 'www.centroarbitragemlisboa.pt', href: 'https://www.centroarbitragemlisboa.pt' },
        },
        {
          heading: '9. Payments and card data',
          paragraphs: [
            'Payments are processed by Stripe. Amplia does not store full card numbers or card security codes.',
          ],
        },
      ],
    },
    cookies: {
      title: 'Cookie Policy',
      sections: [
        {
          heading: '1. Essential cookies',
          paragraphs: [
            'These are required for the technical and secure operation of the website (for example, request routing, load balancing, and storing your consent choice). They cannot be turned off in our configuration without affecting how the site works.',
          ],
        },
        {
          heading: '2. Functional cookies',
          paragraphs: [
            'They remember choices that improve your experience, such as interface language (PT/EN/ES) and visual theme (light or dark). They are only used if you accept this category or accept all options.',
          ],
        },
        {
          heading: '3. Analytics cookies',
          paragraphs: [
            'They help us understand in aggregate how the site is used (for example, pages viewed and performance) via Vercel Analytics. They are only loaded with your consent.',
          ],
        },
        {
          heading: '4. Cookie duration',
          paragraphs: [
            'Cookies may be session-based (deleted when the browser closes) or persistent (kept for a defined period or until manually deleted).',
          ],
        },
        {
          heading: '5. Managing or disabling cookies',
          paragraphs: [
            'You can manage cookies using the banner on this site or in your browser settings (Chrome, Firefox, Safari, Edge). Disabling non-essential cookies may reduce some site functionality.',
          ],
        },
        {
          heading: '6. Legal compliance',
          paragraphs: [
            'Cookie usage complies with the ePrivacy Directive and GDPR, including consent collection for non-essential categories.',
          ],
        },
        {
          heading: '7. LocalStorage and stored preferences',
          bullets: [
            'cookie-preference: JSON storing accepted categories (functional and analytics).',
            'amplia-language: language preference (only if you accept functional cookies).',
            'theme: light or dark mode (only if you accept functional cookies).',
            'waitlist-*: may locally store submitted waitlist email to avoid duplicates on your device.',
          ],
          paragraphs: [
            'The banner appears on the first visit when no preference is stored yet. You can change your choices at any time using the "Configure" button on the banner (when visible) or by clearing site data in your browser.',
          ],
        },
      ],
    },
    cookieBanner: {
      text: 'We use cookies to improve your experience and ensure the website works correctly. You can choose which categories to allow.',
      acceptAll: 'Accept all',
      essentialOnly: 'Essential only',
      configure: 'Configure',
      savePreferences: 'Save preferences',
      modalTitle: 'Cookie settings',
      essentialLabel: 'Essential cookies',
      essentialDesc: 'Required for technical operation and storing your consent choice.',
      functionalLabel: 'Functional cookies',
      functionalDesc: 'Interface language and light/dark theme.',
      analyticsLabel: 'Analytics cookies',
      analyticsDesc: 'Aggregated usage statistics via Vercel Analytics.',
      alwaysOn: 'Always on',
      linkLabel: 'Cookie policy',
    },
  },
  es: {
    back: '<- Volver',
    languageLabel: 'Idioma',
    privacy: {
      title: 'Politica de Privacidad',
      sections: [
        {
          heading: '1. Identidad y contacto del responsable del tratamiento',
          paragraphs: [
            'El responsable del tratamiento es Amplia Solutions, con sede en Agualva-Cacem, Portugal.',
            'Contacto de privacidad: ampliasolutions.pt@gmail.com.',
          ],
        },
        {
          heading: '2. Datos personales recogidos',
          bullets: [
            'Datos de identificacion y contacto: nombre y correo electronico.',
            'Contenido de mensajes enviados mediante el formulario de contacto.',
            'Datos tecnicos y de uso del sitio (por ejemplo, logs tecnicos, preferencia de idioma y cookies).',
          ],
        },
        {
          heading: '3. Finalidad y base legal del tratamiento',
          bullets: [
            'Responder solicitudes de contacto e informacion comercial (diligencias precontractuales e interes legitimo).',
            'Prestar, mantener y mejorar servicios y productos digitales (ejecucion contractual e interes legitimo).',
            'Cumplir obligaciones legales y fiscales (obligacion legal).',
            'Comunicaciones comerciales solo con consentimiento valido (consentimiento).',
          ],
        },
        {
          heading: '4. Plazo de conservacion',
          paragraphs: [
            'Los datos se conservan solo durante el tiempo necesario para las finalidades indicadas, incluyendo plazos legales de archivo y defensa de derechos. Cuando el tratamiento se base en consentimiento, se conservaran hasta su retirada.',
          ],
        },
        {
          heading: '5. Derechos del titular',
          bullets: [
            'Derecho de acceso.',
            'Derecho de rectificacion.',
            'Derecho de supresion (cuando proceda).',
            'Derecho a la limitacion del tratamiento.',
            'Derecho a la portabilidad de los datos.',
            'Derecho de oposicion.',
          ],
          paragraphs: ['Puede ejercer sus derechos por correo: ampliasolutions.pt@gmail.com.'],
        },
        {
          heading: '6. Transferencias internacionales',
          paragraphs: [
            'Si existen transferencias fuera del EEE, Amplia aplicara garantias adecuadas, incluidas Clausulas Contractuales Tipo de la Comision Europea y otros mecanismos exigidos por la ley.',
          ],
        },
        {
          heading: '7. Uso de cookies',
          paragraphs: [
            'Utilizamos cookies esenciales y, con consentimiento, cookies funcionales y analiticas. Consulte detalles en /cookies.',
          ],
        },
        {
          heading: '8. Autoridad de control',
          paragraphs: ['Puede presentar una reclamacion ante la CNPD - autoridad portuguesa de proteccion de datos.'],
          link: { label: 'www.cnpd.pt', href: 'https://www.cnpd.pt' },
        },
        {
          heading: '9. Operaciones de recogida realizadas actualmente en esta aplicacion',
          bullets: [
            'Formulario de contacto: nombre, empresa (opcional), email y mensaje.',
            'Formulario "Avisame cuando se lance": email y producto seleccionado.',
            'Chatbot: mensaje del usuario y respuesta de IA (registro tecnico y envio operativo por email).',
          ],
        },
        {
          heading: '10. Subencargados y terceros',
          bullets: [
            'Resend: envio de emails transaccionales y notificaciones.',
            'Google Gemini API: generacion de respuestas de IA en el chatbot.',
            'Vercel: alojamiento y ejecucion de funciones serverless.',
            'Stripe: procesamiento de pagos (cuando corresponda).',
            'Clerk: autenticacion para productos especificos fuera de este sitio institucional (por ejemplo, Responder Ja).',
          ],
        },
        {
          heading: '11. Menores',
          paragraphs: [
            'Los servicios no estan dirigidos a menores de 16 anos. Si detecta que un menor facilito datos sin autorizacion valida, contacte para eliminacion inmediata.',
          ],
        },
        {
          heading: '12. Solicitudes de derechos y supresion',
          paragraphs: [
            'Las solicitudes de acceso, supresion, oposicion y portabilidad pueden enviarse a ampliasolutions.pt@gmail.com. Responderemos dentro de los plazos legales aplicables.',
          ],
        },
      ],
    },
    terms: {
      title: 'Terminos y Condiciones',
      sections: [
        {
          heading: '1. Identificacion de la empresa',
          paragraphs: [
            'Amplia Solutions tiene sede en Agualva-Cacem, Portugal, y contacto en ampliasolutions.pt@gmail.com.',
          ],
        },
        {
          heading: '2. Descripcion de servicios',
          bullets: [
            'Responder Ja - plataforma de IA para respuestas a resenas online.',
            'Lia - agente de carrera profesional con IA.',
            'Amplia Home Studio - rediseño de espacios con IA.',
            'OpsFlow - generacion inteligente de configuraciones DevOps y cloud.',
          ],
        },
        {
          heading: '3. Condiciones de uso y suscripcion',
          paragraphs: [
            'El usuario se compromete a utilizar los servicios de forma licita, sin vulnerar derechos de terceros ni reglas de seguridad. La suscripcion puede incluir renovacion automatica, limites de uso y condiciones por plan.',
          ],
        },
        {
          heading: '4. Precios y pagos',
          paragraphs: [
            'Los precios aplicables se muestran en el momento de contratacion. Los pagos son procesados por terceros, incluido Stripe, bajo sus propios terminos y politicas.',
          ],
        },
        {
          heading: '5. Cancelacion y reembolso',
          paragraphs: [
            'Segun la normativa de la UE, los consumidores pueden disponer de un derecho de desistimiento de 14 dias cuando sea aplicable. Pueden existir excepciones legales para servicios digitales iniciados con consentimiento expreso.',
          ],
        },
        {
          heading: '6. Limitacion de responsabilidad',
          paragraphs: [
            'Amplia no responde por danos indirectos, lucro cesante o indisponibilidad de servicios de terceros, salvo en los limites imperativos de la ley y en casos de dolo o negligencia grave.',
          ],
        },
        {
          heading: '7. Ley aplicable',
          paragraphs: ['Estos terminos se rigen por la ley portuguesa.'],
        },
        {
          heading: '8. Resolucion de conflictos',
          paragraphs: ['En caso de conflicto de consumo, puede acudir al Centro de Arbitraje de Consumo de Lisboa.'],
          link: { label: 'www.centroarbitragemlisboa.pt', href: 'https://www.centroarbitragemlisboa.pt' },
        },
        {
          heading: '9. Pagos y datos de tarjeta',
          paragraphs: [
            'Los pagos se procesan mediante Stripe. Amplia no almacena numeros completos de tarjeta ni codigos de seguridad.',
          ],
        },
      ],
    },
    cookies: {
      title: 'Política de Cookies',
      sections: [
        {
          heading: '1. Cookies esenciales',
          paragraphs: [
            'Son necesarias para el funcionamiento técnico y seguro del sitio web (por ejemplo, enrutamiento de solicitudes, equilibrio de carga y preferencia de consentimiento). No pueden desactivarse en nuestra configuración sin afectar al funcionamiento del sitio.',
          ],
        },
        {
          heading: '2. Cookies funcionales',
          paragraphs: [
            'Permiten recordar elecciones que mejoran la experiencia, como el idioma de la interfaz (PT/EN/ES) y el tema visual (claro u oscuro). Solo se utilizan si acepta esta categoría o si acepta todas las opciones.',
          ],
        },
        {
          heading: '3. Cookies analíticas',
          paragraphs: [
            'Ayudan a comprender de forma agregada cómo se utiliza el sitio (por ejemplo, páginas vistas y rendimiento), mediante Vercel Analytics. Solo se cargan con su consentimiento.',
          ],
        },
        {
          heading: '4. Duración de las cookies',
          paragraphs: [
            'Pueden existir cookies de sesión (se eliminan al cerrar el navegador) y cookies persistentes (se conservan durante un período definido o hasta su eliminación manual).',
          ],
        },
        {
          heading: '5. Cómo gestionar o desactivar cookies',
          paragraphs: [
            'Puede gestionar las cookies en el banner de este sitio o en la configuración del navegador (Chrome, Firefox, Safari, Edge). Desactivar cookies no esenciales puede limitar ciertas funcionalidades.',
          ],
        },
        {
          heading: '6. Cumplimiento legal',
          paragraphs: [
            'El uso de cookies cumple la Directiva ePrivacy y el RGPD/GDPR, incluida la obtención de consentimiento para categorías no esenciales.',
          ],
        },
        {
          heading: '7. LocalStorage y preferencias guardadas',
          bullets: [
            'cookie-preference: JSON con las categorías aceptadas (funcionales y analíticas).',
            'amplia-language: preferencia de idioma (solo si acepta cookies funcionales).',
            'theme: modo claro u oscuro (solo si acepta cookies funcionales).',
            'waitlist-*: puede guardar localmente el correo enviado para evitar duplicados en el dispositivo.',
          ],
          paragraphs: [
            'El banner aparece en la primera visita cuando aún no hay una preferencia guardada. Puede cambiar sus elecciones en cualquier momento con el botón «Configurar» del banner (cuando esté visible) o borrando los datos del sitio en el navegador.',
          ],
        },
      ],
    },
    cookieBanner: {
      text: 'Utilizamos cookies para mejorar su experiencia y garantizar el funcionamiento del sitio web. Puede elegir qué categorías acepta.',
      acceptAll: 'Aceptar todas',
      essentialOnly: 'Solo esenciales',
      configure: 'Configurar',
      savePreferences: 'Guardar preferencias',
      modalTitle: 'Configuración de cookies',
      essentialLabel: 'Cookies esenciales',
      essentialDesc: 'Necesarias para el funcionamiento técnico del sitio y para guardar su elección de consentimiento.',
      functionalLabel: 'Cookies funcionales',
      functionalDesc: 'Idioma de la interfaz y tema visual (claro/oscuro).',
      analyticsLabel: 'Cookies analíticas',
      analyticsDesc: 'Estadísticas agregadas de uso mediante Vercel Analytics.',
      alwaysOn: 'Siempre activas',
      linkLabel: 'Política de cookies',
    },
  },
};
