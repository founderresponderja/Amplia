import React from 'react';
import { Monitor, Server, ShieldCheck, Code, Smartphone, Database } from 'lucide-react';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  {
    id: '1',
    title: 'Consultoria IT',
    description: 'Análise estratégica da sua infraestrutura tecnológica para otimizar processos e reduzir custos operacionais.',
    icon: <Monitor className="w-8 h-8" />
  },
  {
    id: '2',
    title: 'Desenvolvimento Web',
    description: 'Websites e aplicações web escaláveis, desenvolvidas com as tecnologias mais recentes do mercado.',
    icon: <Code className="w-8 h-8" />
  },
  {
    id: '3',
    title: 'Cibersegurança',
    description: 'Proteção avançada para os seus dados. Auditorias de segurança e implementação de protocolos defensivos.',
    icon: <ShieldCheck className="w-8 h-8" />
  },
  {
    id: '4',
    title: 'Cloud Solutions',
    description: 'Migração e gestão de servidores na nuvem (AWS, Azure, Google Cloud) para maior flexibilidade.',
    icon: <Server className="w-8 h-8" />
  },
  {
    id: '5',
    title: 'Mobile Apps',
    description: 'Desenvolvimento de aplicações nativas e híbridas para iOS e Android focadas na experiência do utilizador.',
    icon: <Smartphone className="w-8 h-8" />
  },
  {
    id: '6',
    title: 'Data Analytics',
    description: 'Transforme dados brutos em insights valiosos para a tomada de decisão com os nossos dashboards inteligentes.',
    icon: <Database className="w-8 h-8" />
  }
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white dark:bg-neutral-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-amplia-green font-normal tracking-widest uppercase text-sm mb-2">O Que Fazemos</h2>
          <h3 className="text-4xl md:text-5xl font-max font-normal text-amplia-dark dark:text-white mb-4">
            Soluções Tecnológicas<br/>Integradas
          </h3>
          <p className="max-w-2xl mx-auto text-amplia-gray dark:text-gray-400 text-lg font-normal">
            Ajudamos a sua empresa a navegar na era digital com soluções personalizadas e inovadoras.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id}
              className="group p-8 bg-amplia-light dark:bg-neutral-800/50 rounded-2xl hover:bg-white dark:hover:bg-neutral-800 hover:shadow-xl transition-all duration-300 border border-transparent hover:border-amplia-green/20 dark:border-white/5 dark:hover:border-amplia-green/20"
            >
              <div className="w-14 h-14 bg-white dark:bg-neutral-700 rounded-xl flex items-center justify-center mb-6 text-amplia-green shadow-sm group-hover:bg-amplia-green group-hover:text-white transition-colors duration-300">
                {service.icon}
              </div>
              <h4 className="text-xl font-normal text-amplia-dark dark:text-white mb-3 font-max">{service.title}</h4>
              <p className="text-amplia-gray dark:text-gray-400 leading-relaxed font-normal">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};