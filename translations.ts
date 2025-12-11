import { Language } from './types';

export const translations = {
  pt: {
    nav: {
      home: 'Home',
      about: 'Sobre',
      services: 'Serviços',
      contact: 'Fale Connosco',
      button: 'Fale Connosco'
    },
    hero: {
      badge: 'Inovação Constante',
      titleLine1: 'Amplie o seu',
      titleLine2: 'Potencial Digital',
      description: 'Transformamos desafios complexos em soluções de software simples e eficazes. A sua parceira tecnológica para o futuro.',
      ctaPrimary: 'Começar Agora',
      ctaSecondary: 'Nossos Serviços',
      features: ['Suporte 24/7', 'Equipa Senior', 'Tecnologia de Ponta'],
      imageLabel1: 'Mais de 10 anos',
      imageLabel2: 'de excelência no mercado',
      floatLabel1: '+200 Projetos',
      floatLabel2: 'Entregues com sucesso'
    },
    about: {
      title: 'Porquê a Amplia?',
      card1: {
        title: 'Visão Estratégica',
        description: 'Não escrevemos apenas código. Entendemos o seu negócio para criar soluções que geram valor real.'
      },
      card2: {
        title: 'Agilidade Total',
        description: 'Metodologias ágeis que garantem entregas rápidas, transparentes e adaptáveis às mudanças.'
      },
      card3: {
        title: 'Tecnologia Humana',
        description: 'Acreditamos que a tecnologia deve servir as pessoas. O nosso suporte é próximo e personalizado.'
      }
    },
    services: {
      sectionTitle: 'O Que Fazemos',
      mainTitle: 'Soluções Tecnológicas Integradas',
      description: 'Ajudamos a sua empresa a navegar na era digital com soluções personalizadas e inovadoras.',
      items: [
        {
          title: 'Consultoria IT',
          description: 'Análise estratégica da sua infraestrutura tecnológica para otimizar processos e reduzir custos operacionais.'
        },
        {
          title: 'Desenvolvimento Web',
          description: 'Websites e aplicações web escaláveis, desenvolvidas com as tecnologias mais recentes do mercado.'
        },
        {
          title: 'Cibersegurança',
          description: 'Proteção avançada para os seus dados. Auditorias de segurança e implementação de protocolos defensivos.'
        },
        {
          title: 'Cloud Solutions',
          description: 'Migração e gestão de servidores na nuvem (AWS, Azure, Google Cloud) para maior flexibilidade.'
        },
        {
          title: 'Mobile Apps',
          description: 'Desenvolvimento de aplicações nativas e híbridas para iOS e Android focadas na experiência do utilizador.'
        },
        {
          title: 'Data Analytics',
          description: 'Transforme dados brutos em insights valiosos para a tomada de decisão com os nossos dashboards inteligentes.'
        }
      ],
      portfolios: [
        {
          title: 'Produto em Destaque',
          appName: 'Amplia OpsFlow',
          appDescription: 'A plataforma definitiva para orquestração de operações de TI. Automatize fluxos de trabalho, centralize logs e antecipe falhas de infraestrutura com o poder dos nossos agentes de IA generativa. Recupere o controlo do seu tempo.',
          buttonText: 'Começar Trial Gratuito',
          url: 'https://aistudio.google.com/apps/drive/1bnpe99ukN_v4LSqdZJS-pF3NqROlVKQQ',
          pricingTitle: 'Plano Professional',
          pricingPrice: '49€',
          pricingPeriod: '/mês',
          pricingFeature1: 'Monitorização de Logs Ilimitada',
          pricingFeature2: 'Até 5 Agentes de IA Ativos',
          pricingFeature3: 'Integração Slack, Teams e Jira',
          pricingFeature4: 'Suporte Técnico Prioritário'
        },
        {
          title: 'Novo Lançamento',
          appName: 'LIA',
          appDescription: 'Potencie a sua carreira com IA. Da otimização de CV à procura de emprego automática. A Lia é o seu agente pessoal de carreira.',
          buttonText: 'Conhecer a LIA',
          url: 'https://aistudio.google.com/apps/drive/17l0GsjgJok3QxowWjRx5v28FNmwgw5et',
          pricingTitle: 'Plano Business',
          pricingPrice: '39€',
          pricingPeriod: '/mês',
          pricingFeature1: 'Otimização de CV com IA',
          pricingFeature2: 'Candidaturas Automáticas',
          pricingFeature3: 'Simulação de Entrevistas',
          pricingFeature4: 'Análise de Mercado em Tempo Real'
        }
      ]
    },
    contact: {
      sectionTitle: 'Contacte-nos',
      mainTitlePrefix: 'Vamos ampliar o seu',
      mainTitleHighlight: 'sucesso',
      mainTitleSuffix: '?',
      description: 'Estamos prontos para analisar o seu desafio tecnológico. Agende uma reunião gratuita com os nossos especialistas.',
      formTitle: 'Envie uma mensagem',
      labels: {
        name: 'Nome',
        company: 'Empresa',
        email: 'Email',
        message: 'Mensagem'
      },
      placeholders: {
        name: 'Seu nome',
        company: 'Sua empresa',
        email: 'seu@email.com',
        message: 'Como podemos ajudar?'
      },
      button: {
        idle: 'Enviar Mensagem',
        submitting: 'A enviar...',
        success: 'Mensagem Enviada!'
      }
    },
    footer: {
      rights: 'Todos os direitos reservados.',
      privacy: 'Privacidade',
      terms: 'Termos'
    }
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      contact: 'Contact Us',
      button: 'Contact Us'
    },
    hero: {
      badge: 'Constant Innovation',
      titleLine1: 'Amplify your',
      titleLine2: 'Digital Potential',
      description: 'We transform complex challenges into simple and effective software solutions. Your tech partner for the future.',
      ctaPrimary: 'Start Now',
      ctaSecondary: 'Our Services',
      features: ['24/7 Support', 'Senior Team', 'Cutting-edge Tech'],
      imageLabel1: 'Over 10 years',
      imageLabel2: 'of excellence',
      floatLabel1: '+200 Projects',
      floatLabel2: 'Successfully delivered'
    },
    about: {
      title: 'Why Amplia?',
      card1: {
        title: 'Strategic Vision',
        description: 'We don\'t just write code. We understand your business to create solutions that generate real value.'
      },
      card2: {
        title: 'Total Agility',
        description: 'Agile methodologies that ensure fast, transparent deliveries adaptable to change.'
      },
      card3: {
        title: 'Human Technology',
        description: 'We believe technology should serve people. Our support is close and personalized.'
      }
    },
    services: {
      sectionTitle: 'What We Do',
      mainTitle: 'Integrated Tech Solutions',
      description: 'Helping your company navigate the digital age with custom innovative solutions.',
      items: [
        {
          title: 'IT Consulting',
          description: 'Strategic analysis of your IT infrastructure to optimize processes and reduce operational costs.'
        },
        {
          title: 'Web Development',
          description: 'Scalable websites and web apps developed with the latest market technologies.'
        },
        {
          title: 'Cybersecurity',
          description: 'Advanced protection for your data. Security audits and defensive protocol implementation.'
        },
        {
          title: 'Cloud Solutions',
          description: 'Migration and management of cloud servers (AWS, Azure, Google Cloud) for greater flexibility.'
        },
        {
          title: 'Mobile Apps',
          description: 'Native and hybrid app development for iOS and Android focused on user experience.'
        },
        {
          title: 'Data Analytics',
          description: 'Transform raw data into valuable insights for decision making with our intelligent dashboards.'
        }
      ],
      portfolios: [
        {
          title: 'Featured Product',
          appName: 'Amplia OpsFlow',
          appDescription: 'The definitive platform for IT operations orchestration. Automate workflows, centralize logs, and anticipate infrastructure failures with the power of our generative AI agents. Take back control of your time.',
          buttonText: 'Start Free Trial',
          url: 'https://aistudio.google.com/apps/drive/1bnpe99ukN_v4LSqdZJS-pF3NqROlVKQQ',
          pricingTitle: 'Professional Plan',
          pricingPrice: '49€',
          pricingPeriod: '/month',
          pricingFeature1: 'Unlimited Log Monitoring',
          pricingFeature2: 'Up to 5 Active AI Agents',
          pricingFeature3: 'Slack, Teams & Jira Integration',
          pricingFeature4: 'Priority Technical Support'
        },
        {
          title: 'New Launch',
          appName: 'LIA',
          appDescription: 'Boost your career with AI. From CV optimization to automated job search. Lia is your personal career agent.',
          buttonText: 'Meet LIA',
          url: 'https://aistudio.google.com/apps/drive/17l0GsjgJok3QxowWjRx5v28FNmwgw5et',
          pricingTitle: 'Business Plan',
          pricingPrice: '39€',
          pricingPeriod: '/month',
          pricingFeature1: 'AI CV Optimization',
          pricingFeature2: 'Automated Applications',
          pricingFeature3: 'Interview Simulation',
          pricingFeature4: 'Real-time Market Analysis'
        }
      ]
    },
    contact: {
      sectionTitle: 'Contact Us',
      mainTitlePrefix: 'Let\'s amplify your',
      mainTitleHighlight: 'success',
      mainTitleSuffix: '?',
      description: 'We are ready to analyze your tech challenge. Schedule a free meeting with our experts.',
      formTitle: 'Send a message',
      labels: {
        name: 'Name',
        company: 'Company',
        email: 'Email',
        message: 'Message'
      },
      placeholders: {
        name: 'Your name',
        company: 'Your company',
        email: 'your@email.com',
        message: 'How can we help?'
      },
      button: {
        idle: 'Send Message',
        submitting: 'Sending...',
        success: 'Message Sent!'
      }
    },
    footer: {
      rights: 'All rights reserved.',
      privacy: 'Privacy',
      terms: 'Terms'
    }
  },
  es: {
    nav: {
      home: 'Inicio',
      about: 'Sobre',
      services: 'Servicios',
      contact: 'Contáctanos',
      button: 'Contáctanos'
    },
    hero: {
      badge: 'Innovación Constante',
      titleLine1: 'Amplía tu',
      titleLine2: 'Potencial Digital',
      description: 'Transformamos desafíos complejos en soluciones de software simples y eficaces. Tu socio tecnológico para el futuro.',
      ctaPrimary: 'Comenzar Ahora',
      ctaSecondary: 'Nuestros Servicios',
      features: ['Soporte 24/7', 'Equipo Senior', 'Tecnología Punta'],
      imageLabel1: 'Más de 10 años',
      imageLabel2: 'de excelencia',
      floatLabel1: '+200 Proyectos',
      floatLabel2: 'Entregados con éxito'
    },
    about: {
      title: '¿Por qué Amplia?',
      card1: {
        title: 'Visión Estratégica',
        description: 'No solo escribimos código. Entendemos tu negocio para crear soluciones que generan valor real.'
      },
      card2: {
        title: 'Agilidad Total',
        description: 'Metodologías ágiles que garantizan entregas rápidas, transparentes y adaptables a los cambios.'
      },
      card3: {
        title: 'Tecnología Humana',
        description: 'Creemos que la tecnología debe servir a las personas. Nuestro soporte es cercano y personalizado.'
      }
    },
    services: {
      sectionTitle: 'Qué Hacemos',
      mainTitle: 'Soluciones Tecnológicas Integradas',
      description: 'Ayudamos a tu empresa a navegar en la era digital con soluciones personalizadas e innovadoras.',
      items: [
        {
          title: 'Consultoría TI',
          description: 'Análisis estratégico de tu infraestructura tecnológica para optimizar procesos y reducir costes operativos.'
        },
        {
          title: 'Desarrollo Web',
          description: 'Sitios y aplicaciones web escalables, desarrolladas con las tecnologías más recientes del mercado.'
        },
        {
          title: 'Ciberseguridad',
          description: 'Protección avanzada para tus datos. Auditorías de seguridad e implementación de protocolos defensivos.'
        },
        {
          title: 'Soluciones Cloud',
          description: 'Migración y gestión de servidores en la nube (AWS, Azure, Google Cloud) para mayor flexibilidad.'
        },
        {
          title: 'Apps Móviles',
          description: 'Desarrollo de aplicaciones nativas e híbridas para iOS y Android enfocadas en la experiencia del usuario.'
        },
        {
          title: 'Analítica de Datos',
          description: 'Transforma datos brutos en insights valiosos para la toma de decisiones con nuestros dashboards inteligentes.'
        }
      ],
      portfolios: [
        {
          title: 'Producto Destacado',
          appName: 'Amplia OpsFlow',
          appDescription: 'La plataforma definitiva para la orquestación de operaciones de TI. Automatice flujos de trabajo, centralice registros y anticipe fallos de infraestructura con el poder de nuestros agentes de IA generativa.',
          buttonText: 'Comenzar Prueba Gratuita',
          url: 'https://aistudio.google.com/apps/drive/1bnpe99ukN_v4LSqdZJS-pF3NqROlVKQQ',
          pricingTitle: 'Plan Profesional',
          pricingPrice: '49€',
          pricingPeriod: '/mes',
          pricingFeature1: 'Monitorización de Logs Ilimitada',
          pricingFeature2: 'Hasta 5 Agentes de IA Activos',
          pricingFeature3: 'Integración Slack, Teams y Jira',
          pricingFeature4: 'Soporte Técnico Prioritário'
        },
        {
          title: 'Nuevo Lanzamiento',
          appName: 'LIA',
          appDescription: 'Potencia tu carrera con IA. Desde la optimización del CV hasta la búsqueda automática de empleo. Lia es tu agente personal de carrera.',
          buttonText: 'Conocer a LIA',
          url: 'https://aistudio.google.com/apps/drive/17l0GsjgJok3QxowWjRx5v28FNmwgw5et',
          pricingTitle: 'Plan Business',
          pricingPrice: '39€',
          pricingPeriod: '/mes',
          pricingFeature1: 'Optimización de CV con IA',
          pricingFeature2: 'Candidaturas Automáticas',
          pricingFeature3: 'Simulación de Entrevistas',
          pricingFeature4: 'Análisis de Mercado en Tiempo Real'
        }
      ]
    },
    contact: {
      sectionTitle: 'Contáctanos',
      mainTitlePrefix: '¿Vamos a ampliar tu',
      mainTitleHighlight: 'éxito',
      mainTitleSuffix: '?',
      description: 'Estamos listos para analizar tu desafío tecnológico. Agenda una reunión gratuita con nuestros expertos.',
      formTitle: 'Envía un mensaje',
      labels: {
        name: 'Nombre',
        company: 'Empresa',
        email: 'Email',
        message: 'Mensaje'
      },
      placeholders: {
        name: 'Tu nombre',
        company: 'Tu empresa',
        email: 'tu@email.com',
        message: '¿Cómo podemos ayudar?'
      },
      button: {
        idle: 'Enviar Mensaje',
        submitting: 'Enviando...',
        success: '¡Mensaje Enviado!'
      }
    },
    footer: {
      rights: 'Todos los derechos reservados.',
      privacy: 'Privacidad',
      terms: 'Términos'
    }
  }
};