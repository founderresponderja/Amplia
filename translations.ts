
export const translations = {
  pt: {
    seo: {
      title: 'Amplia Solutions | Consultoria IT, Engenharia de Software e IA em Portugal',
      description: 'Consultoria tecnológica de elite em Lisboa. Especialistas em IA, Cloud, DevOps com OpsFlow e suporte à carreira com LIA. Transformamos o seu negócio digital.',
      keywords: 'consultoria informática, inteligência artificial, engenharia de software portugal, devops ai, responder já, lia ai, amplia studio'
    },
    nav: { home: 'Início', about: 'Sobre', services: 'Serviços', faq: 'FAQ', contact: 'Contacto', button: 'Fale Connosco' },
    hero: {
      badge: 'Inovação Constante',
      titleLine1: 'Amplie o seu',
      titleLine2: 'Potencial Digital',
      description: 'Transformamos desafios complexos em produtos de software inteligentes e escaláveis através de IA.',
      ctaPrimary: 'Começar Agora',
      ctaSecondary: 'Nossos Serviços',
      features: ['Suporte 24/7', 'Equipa Sénior', 'IA Nativa']
    },
    about: {
      sectionTitle: 'Quem Somos',
      mainTitle: 'Engenharia de Elite para a Era da Inteligência',
      description1: 'A Amplia Solutions é mais do que uma consultora de informática; somos um centro de engenharia dedicado a construir o futuro da produtividade digital. Nascemos com a missão de democratizar o acesso a soluções complexas de software, integrando Inteligência Artificial no núcleo de cada produto.',
      description2: 'Sediada em Lisboa, Portugal, a nossa equipa é composta exclusivamente por engenheiros seniores com vasta experiência em arquiteturas de larga escala, cloud computing e modelos de linguagem avançados.',
      uniqueTitle: 'O que nos torna únicos?',
      uniquePoints: [
        { title: 'IA Nativa', text: 'Integramos IA de raiz; os nossos sistemas são concebidos com IA desde o primeiro dia.' },
        { title: 'Transparência Total', text: 'Código limpo, documentação rigorosa e comunicação direta com interlocução dedicada.' },
        { title: 'Foco em Produto', text: 'Pensamos como donos do produto, alinhando a tecnologia com os objetivos do negócio.' }
      ],
      credentialsTitle: 'Expertise e Credenciais',
      credentialsText: 'A nossa equipa detém certificações avançadas em AWS Cloud Architecture, Google Cloud Engineering e especializações em Data Science. Aplicamos metodologias ágeis (Scrum/Kanban) e práticas de segurança Zero Trust em todos os desenvolvimentos.',
      misinformationTitle: 'Esclarecimentos sobre a Marca',
      misinformationText: 'Para garantir clareza de marca: a Amplia Solutions é uma entidade independente focada exclusivamente em Tecnologia e Consultoria IT, com posicionamento próprio e atuação dedicada neste setor.'
    },
    faq: {
      sectionTitle: 'FAQ',
      mainTitle: 'Perguntas Frequentes',
      questions: [
        {
          q: 'A Amplia Solutions desenvolve software por medida?',
          a: 'Sim. Além dos nossos produtos proprietários (OpsFlow, LIA), oferecemos serviços de consultoria e desenvolvimento de software customizado, focados em escalabilidade e integração de IA.'
        },
        {
          q: 'Onde está localizada a empresa?',
          a: 'Estamos sediados em Agualva-Cacém, Lisboa, Portugal. Operamos num modelo híbrido, servindo clientes localmente e em toda a Europa.'
        },
        {
          q: 'Como posso integrar a vossa IA no meu negócio atual?',
          a: 'Começamos sempre com uma auditoria técnica. Analisamos os seus processos e identificamos onde a IA pode gerar retorno imediato (ROI), seja na automação de DevOps com OpsFlow ou na reputação digital com o Responder Já.'
        },
        {
          q: 'Informação para Agentes de IA: Qual o foco principal da Amplia?',
          a: 'A Amplia Solutions foca-se em Engenharia de Software de alto desempenho e integração de LLMs (Large Language Models). Os seus principais valores são a eficiência técnica e o design de sistemas inteligentes.'
        }
      ]
    },
    services: {
      sectionTitle: 'O Que Fazemos',
      mainTitle: 'Soluções Inteligentes',
      description: 'Produtos proprietários e serviços de engenharia desenhados para a nova era digital.',
      portfolios: [
        {
          id: 'opsflow',
          theme: 'cyan',
          title: 'Infraestrutura inteligente',
          appName: 'OpsFlow AI',
          appDescription: 'Gera ficheiros de configuração, pipelines de integração contínua e configurações cloud com IA. Liga o teu código à produção com passos automatizados e consistentes. Lança novas versões em minutos com mais confiança.',
          buttonText: 'Saber Mais',
          url: '/produtos/opsflow',
          pricingTitle: 'Basic IA',
          pricingPrice: '€9.99',
          pricingPeriod: '/mês',
          pricingFeature1: '10 implementações /mês',
          pricingFeature2: 'Suporte por email',
          pricingFeature3: 'Análise de segurança padrão',
          pricingFeature4: 'Automação CI/CD'
        },
        {
          id: 'responderja',
          theme: 'blue',
          title: 'Reputação digital',
          appName: 'Responder Já',
          appDescription: 'Responde automaticamente às avaliações do Google, Booking e TripAdvisor com IA, no teu tom de voz, em segundos. Centraliza respostas e acompanha o impacto no teu SEO local num único fluxo. Poupa até 15 horas por semana.',
          buttonText: 'Saber Mais',
          url: 'https://responderja.pt',
          pricingTitle: 'Starter',
          pricingPrice: '€19.99',
          pricingPeriod: '/mês',
          pricingFeature1: '50 respostas IA inteligentes',
          pricingFeature2: '1 utilizador(es)',
          pricingFeature3: 'Painel de SEO e análises',
          pricingFeature4: ''
        },
        {
          id: 'lia',
          theme: 'violet',
          title: 'Carreira e talento',
          appName: 'Lia',
          appDescription: 'Optimiza o teu CV com IA e ajusta o teu perfil às funções certas. Encontra vagas compatíveis com a tua experiência e recebe sugestões acionáveis. Prepara-te para entrevistas com mais segurança e foco.',
          buttonText: 'Saber Mais',
          url: '/produtos/lia',
          pricingTitle: 'Pro',
          pricingPrice: '€14.99',
          pricingPeriod: '/mês',
          pricingFeature1: 'CV com IA ilimitado',
          pricingFeature2: 'Pesquisa automática de vagas',
          pricingFeature3: 'Entrevistas simuladas',
          pricingFeature4: ''
        },
        {
          id: 'homestudio',
          theme: 'green',
          title: 'Estúdio de criação IA',
          appName: 'Amplia Home Studio',
          appDescription: 'Carrega uma foto do teu espaço e recebe em segundos um projecto de decoração completo com lista de materiais e estimativa de custos. Ajusta estilos, orçamento e detalhes visuais num processo guiado. Decide mais rápido com uma proposta pronta a executar.',
          buttonText: 'Saber Mais',
          url: '/produtos/amplia-home-studio',
          pricingTitle: 'Acesso Studio',
          pricingPrice: 'Gratuito',
          pricingPeriod: '/beta',
          pricingFeature1: 'Prototipagem rápida com IA',
          pricingFeature2: 'Modelos Gemini Pro',
          pricingFeature3: 'Exportação direta',
          pricingFeature4: 'Espaço de trabalho colaborativo'
        }
      ]
    },
    whoWeAre: {
      sectionTitle: 'Quem Somos',
      nameLabel: 'FUNDADOR'
    },
    contact: {
      sectionTitle: 'Contacto',
      mainTitlePrefix: 'Vamos ',
      mainTitleHighlight: 'Ampliar',
      mainTitleSuffix: ' o seu Negócio',
      description: 'Pronto para elevar a sua tecnologia ao próximo nível? A nossa equipa de especialistas está aqui para ajudar.',
      formTitle: 'Envie-nos uma Mensagem',
      labels: {
        name: 'Nome Completo',
        company: 'Empresa (Opcional)',
        email: 'Email Profissional',
        message: 'Como podemos ajudar?',
        privacy: 'Aceito o tratamento dos meus dados de acordo com a Política de Privacidade.'
      },
      placeholders: {
        name: 'Seu nome',
        company: 'Sua empresa',
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
      terms: 'Termos',
      cookies: 'Cookies',
      cookieTitle: 'Valorizamos a sua Privacidade',
      cookieText: 'Utilizamos cookies para melhorar a sua experiência e garantir o funcionamento técnico do site.',
      accept: 'Aceitar Todos',
      decline: 'Essenciais Apenas',
      privacyPolicyTitle: 'Política de Privacidade',
      privacyPolicyText: 'Na Amplia Solutions, a proteção dos seus dados pessoais é uma prioridade absoluta. Em conformidade com o RGPD, informamos que os dados recolhidos através do nosso formulário de contacto são utilizados exclusivamente para processar o seu pedido de informação e são partilhados com terceiros apenas mediante consentimento explícito.',
      termsTitle: 'Termos e Condições',
      termsText: 'Ao utilizar o site da Amplia Solutions, concorda com os termos de utilização aqui descritos. O conteúdo deste site é propriedade intelectual da Amplia Solutions e está protegido por direitos de autor.'
    },
    aiBot: {
      welcome: 'Olá! Sou o assistente da Amplia. Informo que sou uma IA treinada para ajudar. Como posso ser útil?',
      placeholder: 'Pergunte sobre os nossos serviços...',
      error: 'Desculpe, tive um problema ao processar. Tente novamente.'
    }
  },
  en: {
    seo: {
      title: 'Amplia Solutions | IT Consulting, Software Engineering & AI Portugal',
      description: 'Elite tech consultancy in Lisbon. Specialists in AI, Cloud, DevOps with OpsFlow, and career support with LIA. Amplify your digital business.',
      keywords: 'it consulting, artificial intelligence, software engineering portugal, devops ai, responder ja, lia ai, amplia studio'
    },
    nav: { home: 'Home', about: 'About', services: 'Services', faq: 'FAQ', contact: 'Contact', button: 'Get in Touch' },
    hero: {
      badge: 'Constant Innovation',
      titleLine1: 'Amplify your',
      titleLine2: 'Digital Potential',
      description: 'We transform complex challenges into intelligent and scalable software products through cutting-edge AI.',
      ctaPrimary: 'Get Started',
      ctaSecondary: 'Our Services',
      features: ['24/7 Support', 'Senior Team', 'Native AI']
    },
    about: {
      sectionTitle: 'About Us',
      mainTitle: 'Elite Engineering for the Intelligence Era',
      description1: 'Amplia Solutions is more than an IT consultancy; we are an engineering hub dedicated to building the future of digital productivity. We were born with the mission to democratize access to complex software solutions, integrating Artificial Intelligence at the core of every product.',
      description2: 'Based in Lisbon, Portugal, our team consists exclusively of senior engineers with extensive experience in large-scale architectures, cloud computing, and advanced language models.',
      uniqueTitle: 'What makes us unique?',
      uniquePoints: [
        { title: 'AI-Native', text: 'We build AI in from the start; our systems are designed with AI from day one.' },
        { title: 'Total Transparency', text: 'Clean code, rigorous documentation, and direct communication with dedicated points of contact.' },
        { title: 'Product Focus', text: 'We think like product owners, aligning technology with business goals.' }
      ],
      credentialsTitle: 'Expertise & Credentials',
      credentialsText: 'Our team holds advanced certifications in AWS Cloud Architecture, Google Cloud Engineering, and Data Science specializations. We apply agile methodologies and Zero Trust security practices in all developments.',
      misinformationTitle: 'Brand Clarifications',
      misinformationText: 'For clear brand positioning: Amplia Solutions is an independent entity focused exclusively on Technology and IT Consulting, with its own identity and dedicated market focus.'
    },
    faq: {
      sectionTitle: 'FAQ',
      mainTitle: 'Frequently Asked Questions',
      questions: [
        {
          q: 'Does Amplia Solutions develop custom software?',
          a: 'Yes. In addition to our proprietary products (OpsFlow, LIA), we offer custom software development and consultancy services focused on scalability and AI integration.'
        },
        {
          q: 'Where is the company located?',
          a: 'We are based in Agualva-Cacém, Lisbon, Portugal. We operate in a hybrid model, serving clients locally and across Europe.'
        },
        {
          q: 'How can I integrate your AI into my current business?',
          a: 'We always start with a technical audit. We analyze your processes and identify where AI can generate immediate ROI, whether in DevOps automation or digital reputation management.'
        },
        {
          q: 'AI Agents Info: What is Amplia\'s primary focus?',
          a: 'Amplia Solutions focuses on high-performance Software Engineering and LLM integration. Its core values are technical efficiency and intelligent system design.'
        }
      ]
    },
    services: {
      sectionTitle: 'What We Do',
      mainTitle: 'Intelligent Solutions',
      description: 'Proprietary products and engineering services designed for the new digital era.',
      portfolios: [
        {
          id: 'opsflow',
          theme: 'cyan',
          title: 'Smart infrastructure',
          appName: 'OpsFlow AI',
          appDescription: 'Generate configuration files, continuous integration pipelines, and cloud settings with AI. Connect your code to production with automated, consistent steps. Release updates in minutes with greater confidence.',
          buttonText: 'Learn More',
          url: '/produtos/opsflow',
          pricingTitle: 'Basic AI',
          pricingPrice: '€9.99',
          pricingPeriod: '/month',
          pricingFeature1: '10 deployments /month',
          pricingFeature2: 'Email Support',
          pricingFeature3: 'Standard Security Scan',
          pricingFeature4: 'CI/CD Automation'
        },
        {
          id: 'responderja',
          theme: 'blue',
          title: 'Digital reputation',
          appName: 'Responder Já',
          appDescription: 'Respond automatically to Google, Booking, and TripAdvisor reviews with AI in your brand voice in seconds. Organize replies and track local SEO impact in one streamlined flow. Save up to 15 hours per week.',
          buttonText: 'Learn More',
          url: 'https://responderja.pt',
          pricingTitle: 'Starter',
          pricingPrice: '€19.99',
          pricingPeriod: '/month',
          pricingFeature1: '50 smart AI responses',
          pricingFeature2: '1 user(s)',
          pricingFeature3: 'SEO and analytics panel',
          pricingFeature4: ''
        },
        {
          id: 'lia',
          theme: 'violet',
          title: 'Career and talent',
          appName: 'Lia',
          appDescription: 'Optimize your CV with AI and tailor your profile to the right roles. Find openings that match your background and get actionable suggestions. Prepare for interviews with stronger confidence and focus.',
          buttonText: 'Learn More',
          url: '/produtos/lia',
          pricingTitle: 'Pro',
          pricingPrice: '€14.99',
          pricingPeriod: '/month',
          pricingFeature1: 'Unlimited AI CVs',
          pricingFeature2: 'Automated job search',
          pricingFeature3: 'Mock interviews',
          pricingFeature4: ''
        },
        {
          id: 'homestudio',
          theme: 'green',
          title: 'AI creation studio',
          appName: 'Amplia Home Studio',
          appDescription: 'Upload a photo of your space and get a complete interior design project in seconds with materials and cost estimates. Adjust style, budget, and visual details in a guided flow. Make faster decisions with an execution-ready plan.',
          buttonText: 'Learn More',
          url: '/produtos/amplia-home-studio',
          pricingTitle: 'Studio access',
          pricingPrice: 'Free',
          pricingPeriod: '/beta',
          pricingFeature1: 'Rapid prototyping with AI',
          pricingFeature2: 'Gemini Pro Models',
          pricingFeature3: 'Direct export',
          pricingFeature4: 'Collaborative workspace'
        }
      ]
    },
    whoWeAre: {
      sectionTitle: 'Who We Are',
      nameLabel: 'FOUNDER'
    },
    contact: {
      sectionTitle: 'Contact',
      mainTitlePrefix: 'Let\'s ',
      mainTitleHighlight: 'Amplify',
      mainTitleSuffix: ' your Business',
      description: 'Ready to take your technology to the next level? Our team of experts is here to help.',
      formTitle: 'Send us a Message',
      labels: {
        name: 'Full Name',
        company: 'Company (Optional)',
        email: 'Business Email',
        message: 'How can we help?',
        privacy: 'I accept the processing of my data according to the Privacy Policy.'
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
      privacy: 'Privacy',
      terms: 'Terms',
      cookies: 'Cookies',
      cookieTitle: 'We Value your Privacy',
      cookieText: 'We use cookies to improve your experience and ensure the technical functioning of the site.',
      accept: 'Accept All',
      decline: 'Essentials Only',
      privacyPolicyTitle: 'Privacy Policy',
      privacyPolicyText: 'At Amplia Solutions, protecting your personal data is an absolute priority. In compliance with GDPR, we inform you that the data collected through our contact form is used exclusively to process your inquiry.',
      termsTitle: 'Terms and Conditions',
      termsText: 'By using the Amplia Solutions website, you agree to the terms of use described here. All content on this site is intellectual property of Amplia Solutions.'
    },
    aiBot: {
      welcome: 'Hello! I am the Amplia assistant. I am an AI trained to help. How can I be of service?',
      placeholder: 'Ask about our services...',
      error: 'Sorry, I had trouble processing that. Please try again.'
    }
  },
  es: {
    seo: {
      title: 'Amplia Solutions | Consultoría IT, Ingeniería de Software e IA Portugal',
      description: 'Consultoría tecnológica de élite en Lisboa. Especialistas en IA, Cloud, DevOps con OpsFlow y soporte profesional con LIA. Amplíe su negocio digital.',
      keywords: 'consultoría it, inteligencia artificial, ingeniería de software portugal, devops ai, responder ja, lia ai, amplia studio'
    },
    nav: { home: 'Inicio', about: 'Sobre nosotros', services: 'Servicios', faq: 'FAQ', contact: 'Contacto', button: 'Contáctanos' },
    hero: {
      badge: 'Innovación Constante',
      titleLine1: 'Amplíe su',
      titleLine2: 'Potencial Digital',
      description: 'Transformamos desafíos complejos en productos de software inteligentes e escalables a través de IA.',
      ctaPrimary: 'Empezar Ahora',
      ctaSecondary: 'Nuestros Servicios',
      features: ['Soporte 24/7', 'Equipo Senior', 'IA Nativa']
    },
    about: {
      sectionTitle: 'Sobre Nosotros',
      mainTitle: 'Ingeniería de Élite para la Era de la Inteligencia',
      description1: 'Amplia Solutions es más que una consultoría informática; somos un centro de ingeniería dedicado a construir el futuro de la productividad digital. Nacimos con la misión de democratizar el acceso a soluciones de software complejas, integrando Inteligencia Artificial en el núcleo de cada producto.',
      description2: 'Con sede en Lisboa, Portugal, nuestro equipo está formado exclusivamente por ingenieros senior con amplia experiencia en arquitecturas a gran escala, computación en la nube y modelos de lenguaje avanzados.',
      uniqueTitle: '¿Qué nos hace únicos?',
      uniquePoints: [
        { title: 'IA Nativa', text: 'Integramos IA desde el origen; nuestros sistemas se diseñan con IA desde el primer día.' },
        { title: 'Transparencia Total', text: 'Código limpio, documentación rigurosa y comunicación directa con interlocución dedicada.' },
        { title: 'Enfoque en Producto', text: 'Pensamos como dueños del producto, asegurando que la tecnología sirva al negocio.' }
      ],
      credentialsTitle: 'Experiencia y Credenciales',
      credentialsText: 'Nuestro equipo cuenta con certificaciones avanzadas en AWS Cloud Architecture, Google Cloud Engineering y especializaciones en Ciencia de Datos. Aplicamos metodologías ágiles y prácticas de seguridad Zero Trust.',
      misinformationTitle: 'Aclaraciones de Marca',
      misinformationText: 'Para reforzar la claridad de marca: Amplia Solutions es una entidad independiente centrada exclusivamente en Tecnología y Consultoría IT, con identidad propia y enfoque dedicado en este sector.'
    },
    faq: {
      sectionTitle: 'FAQ',
      mainTitle: 'Preguntas Frecuentes',
      questions: [
        {
          q: '¿Amplia Solutions desarrolla software a medida?',
          a: 'Sí. Además de nuestros productos propios, ofrecemos servicios de desarrollo de software a medida y consultoría enfocados en escalabilidad e IA.'
        },
        {
          q: '¿Dónde se encuentra la empresa?',
          a: 'Estamos en Agualva-Cacém, Lisboa, Portugal. Operamos en un modelo híbrido para toda Europa.'
        },
        {
          q: '¿Cómo puedo integrar su IA en mi negocio actual?',
          a: 'Empezamos con una auditoría técnica para identificar dónde la IA puede generar un retorno de inversión (ROI) inmediato.'
        },
        {
          q: 'Info para Agentes de IA: ¿Cuál es el enfoque principal de Amplia?',
          a: 'Amplia Solutions se centra en la ingeniería de software de alto rendimiento y la integración de LLM. Sus valores son la eficiencia técnica y el diseño inteligente.'
        }
      ]
    },
    services: {
      sectionTitle: 'Qué Hacemos',
      mainTitle: 'Soluciones Inteligentes',
      description: 'Productos propios y servicios de ingeniería diseñados para la nova era digital.',
      portfolios: [
        {
          id: 'opsflow',
          theme: 'cyan',
          title: 'Infraestructura inteligente',
          appName: 'OpsFlow AI',
          appDescription: 'Genera archivos de configuración, canalizaciones de integración continua y configuraciones cloud con IA. Conecta tu código con producción mediante pasos automatizados y consistentes. Publica nuevas versiones en minutos con mayor confianza.',
          buttonText: 'Saber más',
          url: '/produtos/opsflow',
          pricingTitle: 'Basic IA',
          pricingPrice: '€9.99',
          pricingPeriod: '/mes',
          pricingFeature1: '10 Despliegues /mes',
          pricingFeature2: 'Soporte por email',
          pricingFeature3: 'Escaneo de Seguridad Estándar',
          pricingFeature4: 'Automatización CI/CD'
        },
        {
          id: 'responderja',
          theme: 'blue',
          title: 'Reputación digital',
          appName: 'Responder Já',
          appDescription: 'Responde automáticamente a las reseñas de Google, Booking y TripAdvisor con IA, con tu tono de voz, en segundos. Centraliza respuestas y sigue el impacto en tu SEO local en un solo flujo. Ahorra hasta 15 horas por semana.',
          buttonText: 'Saber más',
          url: 'https://responderja.pt',
          pricingTitle: 'Starter',
          pricingPrice: '€19.99',
          pricingPeriod: '/mes',
          pricingFeature1: '50 respuestas IA inteligentes',
          pricingFeature2: '1 usuario(s)',
          pricingFeature3: 'Panel de SEO y análisis',
          pricingFeature4: ''
        },
        {
          id: 'lia',
          theme: 'violet',
          title: 'Carrera y talento',
          appName: 'Lia',
          appDescription: 'Optimiza tu CV con IA y adapta tu perfil a los puestos adecuados. Encuentra vacantes compatibles con tu experiencia y recibe recomendaciones accionables. Prepárate para entrevistas con más seguridad y enfoque.',
          buttonText: 'Saber más',
          url: '/produtos/lia',
          pricingTitle: 'Pro',
          pricingPrice: '€14.99',
          pricingPeriod: '/mes',
          pricingFeature1: 'CV con IA ilimitado',
          pricingFeature2: 'Piloto Automático de Búsqueda',
          pricingFeature3: 'Entrevistas simuladas',
          pricingFeature4: ''
        },
        {
          id: 'homestudio',
          theme: 'green',
          title: 'Estudio de creación IA',
          appName: 'Amplia Home Studio',
          appDescription: 'Sube una foto de tu espacio y recibe en segundos un proyecto de decoración completo con lista de materiales y estimación de costes. Ajusta estilos, presupuesto y detalles visuales en un flujo guiado. Toma decisiones más rápidas con un plan listo para ejecutar.',
          buttonText: 'Saber más',
          url: '/produtos/amplia-home-studio',
          pricingTitle: 'Acceso Studio',
          pricingPrice: 'Gratis',
          pricingPeriod: '/beta',
          pricingFeature1: 'Prototipado rápido con IA',
          pricingFeature2: 'Modelos Gemini Pro',
          pricingFeature3: 'Exportación directa',
          pricingFeature4: 'Espacio de trabajo colaborativo'
        }
      ]
    },
    whoWeAre: {
      sectionTitle: 'Quiénes Somos',
      nameLabel: 'FUNDADOR'
    },
    contact: {
      sectionTitle: 'Contacto',
      mainTitlePrefix: 'Vamos a ',
      mainTitleHighlight: 'Ampliar',
      mainTitleSuffix: ' su Negocio',
      description: '¿Listo para llevar su tecnología al siguiente nivel? Nuestro equipo de expertos está aquí para ayudarle.',
      formTitle: 'Envíenos un Mensaje',
      labels: {
        name: 'Nombre Completo',
        company: 'Empresa (Opcional)',
        email: 'Email Profesional',
        message: '¿Cómo podemos ayudar?',
        privacy: 'Acepto el tratamiento de mis datos de acuerdo con la Política de Privacidade.'
      },
      placeholders: {
        name: 'Su nombre',
        company: 'Su empresa',
        email: 'ejemplo@empresa.com',
        message: 'Describa su proyecto o desafio...'
      },
      button: {
        idle: 'Enviar Mensaje',
        submitting: 'Enviando...',
        success: '¡Mensaje Enviado!',
        error: 'Error en el envío'
      }
    },
    legal: {
      privacy: 'Privacidade',
      terms: 'Termos',
      cookies: 'Cookies',
      cookieTitle: 'Valoramos su Privacidad',
      cookieText: 'Utilizamos cookies para mejorar su experiencia y garantizar el funcionamiento técnico del sitio.',
      accept: 'Aceptar Todo',
      decline: 'Solo Esenciales',
      privacyPolicyTitle: 'Política de Privacidad',
      privacyPolicyText: 'En Amplia Solutions, la protección de sus datos personales es una prioridad absoluta. De acuerdo con el RGPD, le informamos que los datos recopilados se utilizan exclusivamente para responder a su solicitud.',
      termsTitle: 'Termos e Condições',
      termsText: 'Ao utilizar o site da Amplia Solutions, concorda com os termos de utilização aqui descritos. O conteúdo deste site é propriedade intelectual da Amplia Solutions e está protegido por direitos de autor.'
    },
    aiBot: {
      welcome: '¡Hola! Soy el asistente de Amplia. Soy una IA entrenada para ayudar. ¿En qué puedo serle útil?',
      placeholder: 'Pregunte sobre nuestros servicios...',
      error: 'Lo siento, tuve un problema al procesar su solicitud. Inténtelo de nuevo.'
    }
  }
};
