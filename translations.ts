import { Language } from './types';

// YouTube Configuration for ID: VebmwNqWrIw
const YOUTUBE_VIDEO_ID = "VebmwNqWrIw";
const VIDEO_URL = `https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&mute=1&controls=0&loop=1&playlist=${YOUTUBE_VIDEO_ID}&rel=0&modestbranding=1&playsinline=1&iv_load_policy=3&disablekb=1`;

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
      features: ['Suporte 24/7', 'Equipa Sénior', 'Tecnologia de Ponta'],
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
    videoSection: {
      title: 'Tecnologia em Ação',
      subtitle: 'Acelere o seu negócio com IA',
      description: 'Veja como criamos soluções à medida com rapidez e eficiência imbatíveis.',
      videoUrl: VIDEO_URL
    },
    services: {
      sectionTitle: 'O Que Fazemos',
      mainTitle: 'Soluções Tecnológicas Integradas',
      description: 'Ajudamos a sua empresa a navegar na era digital com soluções personalizadas e inovadoras.',
      share: {
        button: 'Partilhar',
        modalTitle: 'Partilhar Projeto',
        subtitle: 'Mostre ao mundo o',
        linkLabel: 'Link do Projeto',
        copy: 'Copiar Link',
        copied: 'Copiado!',
        linkedin: 'LinkedIn',
        twitter: 'X / Twitter'
      },
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
          id: 'opsflow',
          theme: 'cyan',
          title: 'Infraestrutura Inteligente',
          appName: 'Amplia OpsFlow',
          appDescription: 'A plataforma definitiva para equipas de DevOps. O OpsFlow utiliza agentes de IA para monitorizar logs em tempo real, prever falhas de sistema antes de acontecerem e orquestrar a resolução de incidentes automáticamente.',
          buttonText: 'Aceder ao Painel',
          url: 'https://aistudio.google.com/apps/drive/1bnpe99ukN_v4LSqdZJS-pF3NqROlVKQQ',
          pricingTitle: 'Plano Enterprise',
          pricingPrice: '99€',
          pricingPeriod: '/mês',
          pricingFeature1: 'Monitorização Preditiva de Logs',
          pricingFeature2: 'Automação de Resolução de Incidentes',
          pricingFeature3: 'Dashboards de Grafana Integrados',
          pricingFeature4: 'SLA de 99.9% e Suporte Dedicado'
        },
        {
          id: 'lia',
          theme: 'violet',
          title: 'Carreira & Talento',
          appName: 'LIA',
          appDescription: 'A LIA (Linked Intelligence Agent) é a sua assistente de carreira pessoal. Analisa o mercado de trabalho, otimiza o seu CV para passar nos filtros ATS e simula entrevistas técnicas personalizadas para a sua área.',
          buttonText: 'Conhecer a LIA',
          url: 'https://aistudio.google.com/apps/drive/17l0GsjgJok3QxowWjRx5v28FNmwgw5et',
          pricingTitle: 'Plano Career Pro',
          pricingPrice: '19€',
          pricingPeriod: '/mês',
          pricingFeature1: 'Otimização Ilimitada de CVs',
          pricingFeature2: 'Coach de Entrevista via Voz',
          pricingFeature3: 'Matching Automático de Vagas',
          pricingFeature4: 'Análise de Perfil LinkedIn'
        },
        {
          id: 'responderja',
          theme: 'amber',
          title: 'Produtividade Máxima',
          appName: 'Responder Já',
          appDescription: 'Transforme o caos do email em produtividade. O Responder Já classifica automaticamente a sua caixa de entrada e gera rascunhos de resposta contextuais com um clique, aprendendo o seu tom de voz ao longo do tempo.',
          buttonText: 'Experimentar Agora',
          url: 'https://aistudio.google.com/apps/drive/1T0zXP1vERy45urOT0b4uTxpsaRxa79sW',
          pricingTitle: 'Plano Team Growth',
          pricingPrice: '29€',
          pricingPeriod: '/utilizador',
          pricingFeature1: 'Triagem Automática (Inbox Zero)',
          pricingFeature2: 'Respostas em 1-Clique (PT/EN/ES)',
          pricingFeature3: 'Integração CRM (Salesforce/Hubspot)',
          pricingFeature4: 'Tom de Voz Personalizado da Marca'
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
      features: ['24/7 Support', 'Senior Experts', 'Cutting-edge Tech'],
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
        title: 'Human-Centric Tech',
        description: 'We believe technology should serve people. Our support is close, personal, and human.'
      }
    },
    videoSection: {
      title: 'Technology in Action',
      subtitle: 'Accelerate your business with AI',
      description: 'See how we create custom solutions with unbeatable speed and efficiency.',
      videoUrl: VIDEO_URL
    },
    services: {
      sectionTitle: 'What We Do',
      mainTitle: 'Integrated Tech Solutions',
      description: 'Helping your company navigate the digital age with custom innovative solutions.',
      share: {
        button: 'Share',
        modalTitle: 'Share Project',
        subtitle: 'Show the world',
        linkLabel: 'Project Link',
        copy: 'Copy Link',
        copied: 'Copied!',
        linkedin: 'LinkedIn',
        twitter: 'X / Twitter'
      },
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
          id: 'opsflow',
          theme: 'cyan',
          title: 'Smart Infrastructure',
          appName: 'Amplia OpsFlow',
          appDescription: 'The definitive platform for DevOps teams. OpsFlow uses AI agents to monitor logs in real-time, predict system failures before they occur, and automatically orchestrate incident resolution.',
          buttonText: 'Access Dashboard',
          url: 'https://aistudio.google.com/apps/drive/1bnpe99ukN_v4LSqdZJS-pF3NqROlVKQQ',
          pricingTitle: 'Enterprise Plan',
          pricingPrice: '99€',
          pricingPeriod: '/month',
          pricingFeature1: 'Predictive Log Monitoring',
          pricingFeature2: 'Automated Incident Resolution',
          pricingFeature3: 'Integrated Grafana Dashboards',
          pricingFeature4: '99.9% SLA & Dedicated Support'
        },
        {
          id: 'lia',
          theme: 'violet',
          title: 'Career & Talent',
          appName: 'LIA',
          appDescription: 'LIA (Linked Intelligence Agent) is your personal career assistant. It analyzes the job market, optimizes your CV to pass ATS filters, and simulates technical interviews tailored to your field.',
          buttonText: 'Meet LIA',
          url: 'https://aistudio.google.com/apps/drive/17l0GsjgJok3QxowWjRx5v28FNmwgw5et',
          pricingTitle: 'Career Pro Plan',
          pricingPrice: '19€',
          pricingPeriod: '/month',
          pricingFeature1: 'Unlimited CV Optimization',
          pricingFeature2: 'Voice Interview Coach',
          pricingFeature3: 'Automated Job Matching',
          pricingFeature4: 'LinkedIn Profile Analysis'
        },
        {
          id: 'responderja',
          theme: 'amber',
          title: 'Peak Productivity',
          appName: 'Responder Já',
          appDescription: 'Turn email chaos into productivity. Responder Já automatically sorts your inbox and generates contextual draft responses with one click, learning your tone of voice over time.',
          buttonText: 'Try Now',
          url: 'https://aistudio.google.com/apps/drive/1T0zXP1vERy45urOT0b4uTxpsaRxa79sW',
          pricingTitle: 'Team Growth Plan',
          pricingPrice: '29€',
          pricingPeriod: '/user',
          pricingFeature1: 'Auto-Triage (Inbox Zero)',
          pricingFeature2: '1-Click Responses (PT/EN/ES)',
          pricingFeature3: 'CRM Integration (Salesforce/Hubspot)',
          pricingFeature4: 'Custom Brand Voice'
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
        message: 'Mensaje'
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
      about: 'Nosotros',
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
      features: ['Soporte 24/7', 'Equipo Sénior', 'Tecnología de Punta'],
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
        title: 'Agilidade Total',
        description: 'Metodologías ágiles que garantizan entregas rápidas, transparentes y adaptables a los cambios.'
      },
      card3: {
        title: 'Tecnología Humana',
        description: 'Creemos que la tecnología debe servir a las personas. Nuestro soporte es cercano y personalizado.'
      }
    },
    videoSection: {
      title: 'Tecnología en Acción',
      subtitle: 'Acelera tu negocio con IA',
      description: 'Mira cómo creamos soluciones a medida con rapidez y eficiencia imbatibles.',
      videoUrl: VIDEO_URL
    },
    services: {
      sectionTitle: 'Qué Hacemos',
      mainTitle: 'Soluciones Tecnológicas Integradas',
      description: 'Ayudamos a tu empresa a navegar en la era digital con soluciones personalizadas e innovadoras.',
      share: {
        button: 'Compartir',
        modalTitle: 'Compartir Proyecto',
        subtitle: 'Muestra al mundo',
        linkLabel: 'Enlace del Proyecto',
        copy: 'Copiar Enlace',
        copied: '¡Copiado!',
        linkedin: 'LinkedIn',
        twitter: 'X / Twitter'
      },
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
          id: 'opsflow',
          theme: 'cyan',
          title: 'Infraestrutura Inteligente',
          appName: 'Amplia OpsFlow',
          appDescription: 'La plataforma definitiva para equipos DevOps. OpsFlow usa agentes de IA para monitorear logs en tiempo real, predecir fallos antes de que ocurran y orquestar la resolución de incidentes automáticamente.',
          buttonText: 'Acceder al Panel',
          url: 'https://aistudio.google.com/apps/drive/1bnpe99ukN_v4LSqdZJS-pF3NqROlVKQQ',
          pricingTitle: 'Plan Enterprise',
          pricingPrice: '99€',
          pricingPeriod: '/mes',
          pricingFeature1: 'Monitoreo Predictivo de Logs',
          pricingFeature2: 'Automatización de Incidentes',
          pricingFeature3: 'Dashboards de Grafana Integrados',
          pricingFeature4: 'SLA de 99.9% y Soporte Dedicado'
        },
        {
          id: 'lia',
          theme: 'violet',
          title: 'Carrera y Talento',
          appName: 'LIA',
          appDescription: 'LIA (Linked Intelligence Agent) es tu asistente de carrera personal. Analiza el mercado laboral, optimiza tu CV para pasar filtros ATS y simula entrevistas técnicas personalizadas.',
          buttonText: 'Conocer a LIA',
          url: 'https://aistudio.google.com/apps/drive/17l0GsjgJok3QxowWjRx5v28FNmwgw5et',
          pricingTitle: 'Plan Career Pro',
          pricingPrice: '19€',
          pricingPeriod: '/mes',
          pricingFeature1: 'Optimización Ilimitada de CVs',
          pricingFeature2: 'Coach de Entrevista por Voz',
          pricingFeature3: 'Matching Automático de Empleos',
          pricingFeature4: 'Análisis de Perfil LinkedIn'
        },
        {
          id: 'responderja',
          theme: 'amber',
          title: 'Productividad Máxima',
          appName: 'Responder Já',
          appDescription: 'Transforma el caos del email en productividad. Responder Já clasifica automáticamente tu bandeja de entrada y genera borradores de respuesta contextuales con un clic, aprendiendo tu tono de voz.',
          buttonText: 'Probar Ahora',
          url: 'https://aistudio.google.com/apps/drive/1T0zXP1vERy45urOT0b4uTxpsaRxa79sW',
          pricingTitle: 'Plan Team Growth',
          pricingPrice: '29€',
          pricingPeriod: '/usuario',
          pricingFeature1: 'Clasificación Automática',
          pricingFeature2: 'Respuestas en 1-Clic (PT/EN/ES)',
          pricingFeature3: 'Integración CRM (Salesforce/Hubspot)',
          pricingFeature4: 'Tono de Voz Personalizado'
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