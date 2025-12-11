import React from 'react';
import { Monitor, Server, ShieldCheck, Code, Smartphone, Database, ExternalLink, Box, Zap } from 'lucide-react';
import { Button } from './Button';

interface ServicesProps {
  content: any; // Using any for flexibility with the dynamic context structure
}

export const Services: React.FC<ServicesProps> = ({ content }) => {
  const t = content;

  const icons = [
    <Monitor className="w-8 h-8" />,
    <Code className="w-8 h-8" />,
    <ShieldCheck className="w-8 h-8" />,
    <Server className="w-8 h-8" />,
    <Smartphone className="w-8 h-8" />,
    <Database className="w-8 h-8" />
  ];

  return (
    <section id="services" className="py-24 bg-white dark:bg-neutral-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-amplia-green font-normal tracking-widest uppercase text-sm mb-2">{t.sectionTitle}</h2>
          <h3 className="text-4xl md:text-5xl font-max font-normal text-amplia-dark dark:text-white mb-4">
            {t.mainTitle}
          </h3>
          <p className="max-w-2xl mx-auto text-amplia-gray dark:text-gray-400 text-lg font-normal">
            {t.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {t.items.map((service: any, index: number) => (
            <div 
              key={index}
              className="group p-8 bg-amplia-light dark:bg-neutral-800/50 rounded-2xl hover:bg-white dark:hover:bg-neutral-800 hover:shadow-xl transition-all duration-300 border border-transparent hover:border-amplia-green/20 dark:border-white/5 dark:hover:border-amplia-green/20"
            >
              <div className="w-14 h-14 bg-white dark:bg-neutral-700 rounded-xl flex items-center justify-center mb-6 text-amplia-green shadow-sm group-hover:bg-amplia-green group-hover:text-white transition-colors duration-300">
                {icons[index]}
              </div>
              <h4 className="text-xl font-normal text-amplia-dark dark:text-white mb-3 font-max">{service.title}</h4>
              <p className="text-amplia-gray dark:text-gray-400 leading-relaxed font-normal">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Portfolio Subsection */}
        {t.portfolio && (
          <div className="relative mt-24">
            <div className="absolute inset-0 bg-gradient-to-r from-amplia-green/5 to-transparent rounded-3xl -z-10"></div>
            <div className="bg-white dark:bg-neutral-800 border border-gray-100 dark:border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
              
              {/* Content Side */}
              <div className="p-8 md:p-12 flex-1 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 mb-4">
                   <span className="w-2 h-2 rounded-full bg-amplia-green animate-pulse"></span>
                   <span className="text-amplia-green font-bold text-xs uppercase tracking-widest">{t.portfolio.title}</span>
                </div>
                <h3 className="text-3xl font-max font-normal text-amplia-dark dark:text-white mb-4">
                  {t.portfolio.appName}
                </h3>
                <p className="text-lg text-gray-500 dark:text-gray-400 font-normal mb-8 leading-relaxed">
                  {t.portfolio.appDescription}
                </p>
                <div>
                  <a 
                    href={t.portfolio.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Button className="flex items-center gap-2">
                      {t.portfolio.buttonText} <ExternalLink size={18} />
                    </Button>
                  </a>
                </div>
              </div>

              {/* Visual/Logo Side */}
              <div className="bg-gray-50 dark:bg-neutral-900 md:w-1/3 border-t md:border-t-0 md:border-l border-gray-100 dark:border-white/5 flex items-center justify-center p-12 relative overflow-hidden group">
                 {/* Decorative background effects */}
                 <div className="absolute top-0 right-0 w-32 h-32 bg-amplia-green/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
                 <div className="absolute bottom-0 left-0 w-32 h-32 bg-amplia-green/10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>

                 {/* App Logo Representation */}
                 <div className="relative z-10 w-32 h-32 bg-gradient-to-br from-white to-gray-100 dark:from-neutral-800 dark:to-neutral-900 rounded-2xl shadow-lg flex items-center justify-center transform group-hover:scale-105 transition-transform duration-500 border border-gray-200 dark:border-neutral-700">
                    <div className="absolute inset-0 bg-gradient-to-br from-amplia-green to-[#6a9e00] opacity-10 rounded-2xl"></div>
                    {/* The Triangle Logo inside the App Icon */}
                    <div className="w-16 h-16 relative">
                       <svg viewBox="0 0 100 60" className="w-full h-full drop-shadow-md" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 50 L35 15 L50 30 L15 60 Z" fill="#8cc63f" />
                        <path d="M35 15 L55 0 L70 30 L50 30 Z" fill="#7ab800" /> 
                        <path d="M50 30 L70 30 L60 50 Z" fill="#6a9e00" opacity="0.8" />
                      </svg>
                    </div>
                 </div>
              </div>

            </div>
          </div>
        )}
      </div>
    </section>
  );
};