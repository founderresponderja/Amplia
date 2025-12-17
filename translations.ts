
export const translations = {
  pt: {
    nav: { home: 'Início', about: 'Sobre', services: 'Serviços', contact: 'Contacto', button: 'Fale Connosco' },
    hero: {
      badge: 'Inovação Sem Limites',
      titleLine1: 'Amplie o seu',
      titleLine2: 'Potencial Digital',
      description: 'Consultoria tecnológica de elite. Transformamos desafios complexos em produtos de software inteligentes e escaláveis através de IA e Engenharia de ponta.',
      ctaPrimary: 'Começar Agora',
      ctaSecondary: 'Nossos Serviços',
      features: ['Suporte 24/7', 'Equipa Sénior', 'IA Nativa']
    },
    services: {
      sectionTitle: 'O Que Fazemos',
      mainTitle: 'Soluções Inteligentes',
      description: 'Produtos proprietários e serviços de engenharia desenhados para a nova era digital.',
      portfolios: [
        {
          id: 'opsflow',
          theme: 'cyan',
          title: 'Infraestrutura Inteligente',
          appName: 'OpsFlow',
          appDescription: 'O futuro do desenvolvimento de aplicações é inteligente. O OpsFlow utiliza inteligência artificial avançada para gerar Dockerfiles, CI/CD e configurações de cloud em segundos. Otimize o seu fluxo de trabalho hoje.',
          buttonText: 'Aceder ao Painel',
          url: 'https://opsflow.amplia.pt',
          pricingTitle: 'BASIC AI',
          pricingPrice: '€9.99',
          pricingPeriod: '/mês',
          pricingFeature1: '10 Deployments /mês',
          pricingFeature2: 'Suporte prioritário por email',
          pricingFeature3: 'Scan de segurança standard',
          pricingFeature4: 'Automação CI/CD completa'
        },
        {
          id: 'responderja',
          theme: 'blue',
          title: 'Reputação Digital',
          appName: 'Responder Já',
          appDescription: 'Domine a sua reputação online e conquiste mais clientes. A única plataforma de IA que responde automaticamente a avaliações no Google, Booking e TripAdvisor. Melhore o seu SEO local e poupe tempo precioso.',
          buttonText: 'Experimentar Agora',
          url: 'https://responder.amplia.pt',
          pricingTitle: 'Starter',
          pricingPrice: '€19.99',
          pricingPeriod: '/mês',
          pricingFeature1: '50 respostas inteligentes por IA',
          pricingFeature2: 'Acesso para 1 utilizador',
          pricingFeature3: 'Dashboard de SEO e Analytics',
          pricingFeature4: 'Integração multicanal'
        },
        {
          id: 'lia',
          theme: 'violet',
          title: 'Carreira e Talento',
          appName: 'LIA',
          appDescription: 'Linked Intelligence Agent. O seu assistente pessoal de carreira que utiliza IA para otimizar perfis e encontrar oportunidades ideais de forma proativa e estratégica.',
          buttonText: 'Conhecer LIA',
          url: 'https://lia.amplia.pt',
          pricingTitle: 'Pro',
          pricingPrice: '€14.99',
          pricingPeriod: '/mês',
          pricingFeature1: 'Criação ilimitada de CVs por IA',
          pricingFeature2: 'Piloto automático de pesquisa',
          pricingFeature3: 'Simulador de entrevistas',
          pricingFeature4: 'Análise de perfil LinkedIn'
        }
      ]
    },
    contact: {
      sectionTitle: 'Contacto',
      mainTitlePrefix: 'Vamos ',
      mainTitleHighlight: 'Ampliar',
      mainTitleSuffix: ' o seu Negócio',
      description: 'Pronto para elevar a sua tecnologia ao próximo nível? A nossa equipa de especialistas está preparada para o ajudar.',
      formTitle: 'Envie-nos uma Mensagem',
      labels: {
        name: 'Nome completo',
        company: 'Empresa (Opcional)',
        email: 'Email profissional',
        message: 'Como podemos ajudar?',
        privacy: 'Li e concordo com a Política de Privacidade e o tratamento dos meus dados para efeitos de resposta a este contacto.'
      },
      placeholders: {
        name: 'O seu nome',
        company: 'A sua empresa',
        email: 'exemplo@empresa.com',
        message: 'Descreva o seu projeto ou desafio...'
      },
      button: {
        idle: 'Enviar Mensagem',
        submitting: 'A enviar...',
        success: 'Mensagem Enviada!',
        error: 'Erro no envio'
      }
    },
    legal: {
      privacy: 'Privacidade',
      terms: 'Termos e Condições',
      cookies: 'Cookies',
      companyInfo: 'Amplia Solutions, Lda. | NIPC: 512345678 | Sede: Lisboa, Portugal',
      cookieTitle: 'Consentimento de Cookies',
      cookieText: 'Utilizamos cookies técnicos necessários para o funcionamento do site e cookies analíticos para melhorar a sua experiência. Pode gerir as suas preferências abaixo.',
      accept: 'Aceitar todos',
      decline: 'Apenas necessários',
      privacyPolicyTitle: 'Política de Proteção de Dados',
      privacyPolicyText: 'A Amplia Solutions, Lda. compromete-se a proteger a privacidade dos seus utilizadores de acordo com o RGPD.\n\n1. Responsável pelo Tratamento: Amplia Solutions, Lda.\n2. Finalidade: Gestão exclusiva do pedido de contacto.\n3. Destinatários: Processamento por parceiros tecnológicos certificados.\n4. Direitos: Acesso, retificação ou eliminação via ampliasolutions.pt@gmail.com.',
      termsTitle: 'Termos de Utilização',
      termsText: 'A utilização deste website rege-se pelos presentes Termos. Todo o conteúdo, marcas e software proprietário são propriedade exclusiva da Amplia Solutions, Lda.',
      hashtags: '#InteligenciaArtificial #EngenhariaDeSoftware #IA #ConsultoriaTecnologica #DevOpsAI #AmpliaSolutions #InovaçãoDigital'
    },
    aiBot: {
      welcome: 'Olá! Sou o assistente virtual da Amplia. Como posso ajudar com os nossos serviços de IA e engenharia?',
      placeholder: 'Faça uma pergunta...',
      error: 'Ocorreu um erro técnico. Por favor, tente novamente.'
    }
  },
  en: {
    nav: { home: 'Home', about: 'About', services: 'Services', contact: 'Contact', button: 'Get in Touch' },
    hero: {
      badge: 'Unbounded Innovation',
      titleLine1: 'Amplify your',
      titleLine2: 'Digital Potential',
      description: 'Elite technology consultancy. We transform complex challenges into intelligent, scalable software products through cutting-edge AI and engineering.',
      ctaPrimary: 'Get Started',
      ctaSecondary: 'Our Services',
      features: ['24/7 Support', 'Senior Engineering', 'Native AI']
    },
    services: {
      sectionTitle: 'What We Do',
      mainTitle: 'Intelligent Solutions',
      description: 'Proprietary products and professional engineering services designed for the new digital era.',
      portfolios: [
        {
          id: 'opsflow',
          theme: 'cyan',
          title: 'Smart Infrastructure',
          appName: 'OpsFlow',
          appDescription: 'The future of development is automated. OpsFlow leverages advanced AI to generate Dockerfiles, CI/CD pipelines, and cloud configurations in seconds. Streamline your workflow today.',
          buttonText: 'Access Dashboard',
          url: 'https://opsflow.amplia.pt',
          pricingTitle: 'BASIC AI',
          pricingPrice: '€9.99',
          pricingPeriod: '/mo',
          pricingFeature1: '10 Deployments per month',
          pricingFeature2: 'Priority email support',
          pricingFeature3: 'Standard security scans',
          pricingFeature4: 'Full CI/CD automation'
        },
        {
          id: 'responderja',
          theme: 'blue',
          title: 'Digital Reputation',
          appName: 'Responder Já',
          appDescription: 'Master your online reputation and scale your business. The only AI-driven platform that automatically handles reviews on Google, Booking, and TripAdvisor. Boost your local SEO.',
          buttonText: 'Try for Free',
          url: 'https://responder.amplia.pt',
          pricingTitle: 'Starter',
          pricingPrice: '€19.99',
          pricingPeriod: '/mo',
          pricingFeature1: '50 smart AI responses',
          pricingFeature2: 'Single user access',
          pricingFeature3: 'SEO & Analytics dashboard',
          pricingFeature4: 'Multi-platform integration'
        },
        {
          id: 'lia',
          theme: 'violet',
          title: 'Career & Talent',
          appName: 'LIA',
          appDescription: 'Linked Intelligence Agent. Your personal AI-powered career assistant that optimizes professional profiles and proactively identifies top-tier opportunities.',
          buttonText: 'Meet LIA',
          url: 'https://lia.amplia.pt',
          pricingTitle: 'Pro',
          pricingPrice: '€14.99',
          pricingPeriod: '/mo',
          pricingFeature1: 'Unlimited AI CV generation',
          pricingFeature2: 'Job search autopilot',
          pricingFeature3: 'AI-simulated interviews',
          pricingFeature4: 'LinkedIn profile analysis'
        }
      ]
    },
    contact: {
      sectionTitle: 'Contact',
      mainTitlePrefix: 'Let\'s ',
      mainTitleHighlight: 'Amplify',
      mainTitleSuffix: ' your Business',
      description: 'Ready to elevate your technology? Our team of experts is ready to help you scale.',
      formTitle: 'Send us a Message',
      labels: {
        name: 'Full name',
        company: 'Company (Optional)',
        email: 'Business email',
        message: 'How can we help?',
        privacy: 'I have read and agree to the Privacy Policy and the processing of my data for communication purposes.'
      },
      placeholders: {
        name: 'Your name',
        company: 'Your company',
        email: 'example@company.com',
        message: 'Describe your project or challenge...'
      },
      button: {
        idle: 'Send Message',
        submitting: 'Sending...',
        success: 'Message Sent!',
        error: 'Error sending'
      }
    },
    legal: {
      privacy: 'Privacy Policy',
      terms: 'Terms of Use',
      cookies: 'Cookies',
      companyInfo: 'Amplia Solutions, Lda. | Tax ID: 512345678 | Lisbon, Portugal',
      cookieTitle: 'Cookie Consent',
      cookieText: 'We use strictly necessary and analytical cookies to improve your experience. Manage your preferences below.',
      accept: 'Accept all',
      decline: 'Strictly necessary',
      privacyPolicyTitle: 'Data Protection Policy',
      privacyPolicyText: 'Amplia Solutions, Lda. is committed to protecting user privacy under GDPR standards.\n\n1. Controller: Amplia Solutions, Lda.\n2. Purpose: Handling contact requests.\n3. Data Sharing: Certified tech partners only.\n4. Rights: Access, rectification, or deletion via ampliasolutions.pt@gmail.com.',
      termsTitle: 'Terms of Use',
      termsText: 'Use of this website is governed by these Terms. All proprietary content and software are the exclusive property of Amplia Solutions, Lda.',
      hashtags: '#ArtificialIntelligence #SoftwareEngineering #AI #TechConsultancy #DevOpsAI #AmpliaSolutions #DigitalInnovation'
    },
    aiBot: {
      welcome: 'Hello! I am Amplia\'s virtual assistant. How can I help you with our AI and engineering services?',
      placeholder: 'Ask a question...',
      error: 'A technical error occurred. Please try again.'
    }
  },
  es: {
    nav: { home: 'Inicio', about: 'Nosotros', services: 'Servicios', contact: 'Contacto', button: 'Contáctanos' },
    hero: {
      badge: 'Innovación Sin Límites',
      titleLine1: 'Amplíe su',
      titleLine2: 'Potencial Digital',
      description: 'Consultoría tecnológica de élite. Transformamos desafíos complejos en productos de software inteligentes y escalables mediante IA e ingeniería de vanguardia.',
      ctaPrimary: 'Empezar Ahora',
      ctaSecondary: 'Ver Servicios',
      features: ['Soporte 24/7', 'Equipo Senior', 'IA Nativa']
    },
    services: {
      sectionTitle: 'Qué Hacemos',
      mainTitle: 'Soluciones Inteligentes',
      description: 'Productos propios y servicios de ingeniería diseñados para la nueva era digital.',
      portfolios: [
        {
          id: 'opsflow',
          theme: 'cyan',
          title: 'Infraestructura Inteligente',
          appName: 'OpsFlow',
          appDescription: 'El futuro del desarrollo es inteligente. OpsFlow utiliza inteligencia artificial avanzada para generar Dockerfiles, CI/CD y configuraciones de nube en segundos. Optimice su flujo de trabajo.',
          buttonText: 'Ir al Panel',
          url: 'https://opsflow.amplia.pt',
          pricingTitle: 'BASIC AI',
          pricingPrice: '€9.99',
          pricingPeriod: '/mes',
          pricingFeature1: '10 Despliegues al mes',
          pricingFeature2: 'Soporte prioritario por email',
          pricingFeature3: 'Escaneo de seguridad estándar',
          pricingFeature4: 'Automatización CI/CD completa'
        },
        {
          id: 'responderja',
          theme: 'blue',
          title: 'Reputación Digital',
          appName: 'Responder Já',
          appDescription: 'Domine su reputación online y atraiga más clientes. La única plataforma de IA que responde automáticamente a reseñas en Google, Booking y TripAdvisor. Mejore su SEO local.',
          buttonText: 'Probar Ahora',
          url: 'https://responder.amplia.pt',
          pricingTitle: 'Starter',
          pricingPrice: '€19.99',
          pricingPeriod: '/mes',
          pricingFeature1: '50 respuestas inteligentes por IA',
          pricingFeature2: 'Acceso para un usuario',
          pricingFeature3: 'Panel de SEO y Analítica',
          pricingFeature4: 'Integración multiplataforma'
        },
        {
          id: 'lia',
          theme: 'violet',
          title: 'Carrera y Talento',
          appName: 'LIA',
          appDescription: 'Linked Intelligence Agent. Su asistente personal de carrera impulsado por IA para optimizar perfiles profesionales y encontrar oportunidades de forma proactiva.',
          buttonText: 'Conocer a LIA',
          url: 'https://lia.amplia.pt',
          pricingTitle: 'Pro',
          pricingPrice: '€14.99',
          pricingPeriod: '/mes',
          pricingFeature1: 'CVs ilimitados por IA',
          pricingFeature2: 'Piloto automático de búsqueda',
          pricingFeature3: 'Simulador de entrevistas',
          pricingFeature4: 'Análisis de perfil LinkedIn'
        }
      ]
    },
    contact: {
      sectionTitle: 'Contacto',
      mainTitlePrefix: 'Vamos a ',
      mainTitleHighlight: 'Ampliar',
      mainTitleSuffix: ' su Negocio',
      description: '¿Listo para elevar su tecnología al siguiente nivel? Nuestro equipo de expertos está a su disposición.',
      formTitle: 'Envíenos un Mensaje',
      labels: {
        name: 'Nombre completo',
        company: 'Empresa (Opcional)',
        email: 'Email profesional',
        message: '¿Cómo podemos ayudarle?',
        privacy: 'He leído y acepto la Política de Privacidad y el tratamiento de mis datos para responder a mi solicitud.'
      },
      placeholders: {
        name: 'Su nombre',
        company: 'Su empresa',
        email: 'ejemplo@empresa.com',
        message: 'Describa su proyecto o desafío...'
      },
      button: {
        idle: 'Enviar Mensaje',
        submitting: 'Enviando...',
        success: '¡Mensaje Enviado!',
        error: 'Error en el envío'
      }
    },
    legal: {
      privacy: 'Privacidad',
      terms: 'Términos y Condiciones',
      cookies: 'Cookies',
      companyInfo: 'Amplia Solutions, Lda. | NIF: 512345678 | Sede: Lisboa, Portugal',
      cookieTitle: 'Consentimiento de Cookies',
      cookieText: 'Utilizamos cookies técnicas necesarias y analíticas para mejorar su experiencia. Puede gestionar sus preferencias abajo.',
      accept: 'Aceptar todo',
      decline: 'Solo necesarias',
      privacyPolicyTitle: 'Política de Protección de Datos',
      privacyPolicyText: 'Amplia Solutions, Lda. se compromete a proteger la privacidad según el RGPD.\n\n1. Responsable: Amplia Solutions, Lda.\n2. Finalidad: Gestión de solicitudes de contacto.\n3. Destinatarios: Socios tecnológicos certificados.\n4. Derechos: Acceso, rectificación o supresión vía ampliasolutions.pt@gmail.com.',
      termsTitle: 'Términos de Uso',
      termsText: 'El uso de este sitio web se rige por estos Términos. Todo el contenido y software son propiedad exclusiva de Amplia Solutions, Lda.',
      hashtags: '#InteligenciaArtificial #IngenieriaDeSoftware #IA #ConsultoriaTecnologica #DevOpsAI #AmpliaSolutions #InnovacionDigital'
    },
    aiBot: {
      welcome: '¡Hola! Soy el asistente virtual de Amplia. ¿En qué posso ayudarle con nuestros servicios de IA e ingeniería?',
      placeholder: 'Haga una pregunta...',
      error: 'Ocurrió un error técnico. Inténtelo de nuevo.'
    }
  }
};
