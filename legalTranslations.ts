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
      ],
    },
    cookies: {
      title: 'Politica de Cookies',
      sections: [
        {
          heading: '1. Tipos de cookies utilizados',
          bullets: [
            'Essenciais: necessarios ao funcionamento tecnico do website.',
            'Funcionais: memorizam preferencias (ex.: idioma e experiencia de navegacao).',
            'Analiticos: medem utilizacao e performance para melhoria continua.',
          ],
        },
        {
          heading: '2. Finalidade de cada categoria',
          paragraphs: [
            'Cookies essenciais permitem funcionalidades basicas. Cookies funcionais personalizam a experiencia. Cookies analiticos ajudam a compreender a utilizacao do site e otimizar conteudos e desempenho.',
          ],
        },
        {
          heading: '3. Duracao dos cookies',
          paragraphs: [
            'Podem existir cookies de sessao (expiram ao fechar o browser) e cookies persistentes (mantidos por periodo definido ou ate eliminacao manual).',
          ],
        },
        {
          heading: '4. Como gerir ou desativar cookies',
          paragraphs: [
            'Pode gerir cookies nas definicoes do seu browser (Chrome, Firefox, Safari, Edge). A desativacao de cookies nao essenciais pode limitar certas funcionalidades.',
          ],
        },
        {
          heading: '5. Conformidade legal',
          paragraphs: [
            'A utilizacao de cookies segue a ePrivacy Directive e o RGPD/GDPR, incluindo recolha de consentimento para categorias nao essenciais.',
          ],
        },
      ],
    },
    cookieBanner: {
      text: 'Utilizamos cookies para melhorar a experiencia e garantir o funcionamento do website.',
      acceptAll: 'Aceitar todos',
      essentialOnly: 'So essenciais',
      linkLabel: 'Ler politica de cookies',
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
      ],
    },
    cookies: {
      title: 'Cookie Policy',
      sections: [
        {
          heading: '1. Types of cookies used',
          bullets: [
            'Essential: required for core website functionality.',
            'Functional: remember user preferences (e.g., language and browsing experience).',
            'Analytics: measure usage and performance for continuous improvement.',
          ],
        },
        {
          heading: '2. Purpose of each category',
          paragraphs: [
            'Essential cookies enable basic features. Functional cookies personalize your experience. Analytics cookies help us understand usage and improve content and performance.',
          ],
        },
        {
          heading: '3. Cookie duration',
          paragraphs: [
            'Cookies may be session-based (deleted when the browser closes) or persistent (kept for a defined period or until manually deleted).',
          ],
        },
        {
          heading: '4. Managing or disabling cookies',
          paragraphs: [
            'You can manage cookies in your browser settings (Chrome, Firefox, Safari, Edge). Disabling non-essential cookies may reduce some site functionality.',
          ],
        },
        {
          heading: '5. Legal compliance',
          paragraphs: [
            'Cookie usage complies with the ePrivacy Directive and GDPR, including consent collection for non-essential categories.',
          ],
        },
      ],
    },
    cookieBanner: {
      text: 'We use cookies to improve your experience and ensure website functionality.',
      acceptAll: 'Accept all',
      essentialOnly: 'Essential only',
      linkLabel: 'Read cookie policy',
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
      ],
    },
    cookies: {
      title: 'Politica de Cookies',
      sections: [
        {
          heading: '1. Tipos de cookies utilizados',
          bullets: [
            'Esenciales: necesarias para el funcionamiento tecnico del sitio.',
            'Funcionales: recuerdan preferencias (por ejemplo, idioma y experiencia de navegacion).',
            'Analiticas: miden uso y rendimiento para mejora continua.',
          ],
        },
        {
          heading: '2. Finalidad de cada categoria',
          paragraphs: [
            'Las cookies esenciales permiten funciones basicas. Las funcionales personalizan la experiencia. Las analiticas ayudan a entender el uso del sitio y mejorar contenido y rendimiento.',
          ],
        },
        {
          heading: '3. Duracion de las cookies',
          paragraphs: [
            'Pueden existir cookies de sesion (se eliminan al cerrar el navegador) y cookies persistentes (se conservan durante un periodo definido o hasta su eliminacion manual).',
          ],
        },
        {
          heading: '4. Como gestionar o desactivar cookies',
          paragraphs: [
            'Puede gestionar cookies en la configuracion del navegador (Chrome, Firefox, Safari, Edge). Desactivar cookies no esenciales puede limitar ciertas funcionalidades.',
          ],
        },
        {
          heading: '5. Cumplimiento legal',
          paragraphs: [
            'El uso de cookies cumple la ePrivacy Directive y el RGPD/GDPR, incluyendo obtencion de consentimiento para categorias no esenciales.',
          ],
        },
      ],
    },
    cookieBanner: {
      text: 'Utilizamos cookies para mejorar su experiencia y garantizar el funcionamiento del sitio web.',
      acceptAll: 'Aceptar todas',
      essentialOnly: 'Solo esenciales',
      linkLabel: 'Leer politica de cookies',
    },
  },
};
