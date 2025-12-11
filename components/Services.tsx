import React, { useState } from 'react';
import { Monitor, Server, ShieldCheck, Code, Smartphone, Database, ExternalLink, Check, Share2, Linkedin, Twitter, X } from 'lucide-react';
import { Button } from './Button';
import { ScrollReveal } from './ScrollReveal';

interface ServicesProps {
  content: any; // Using any for flexibility with the dynamic context structure
}

export const Services: React.FC<ServicesProps> = ({ content }) => {
  const [activeShareItem, setActiveShareItem] = useState<any | null>(null);
  const t = content;

  const icons = [
    <Monitor className="w-8 h-8" />,
    <Code className="w-8 h-8" />,
    <ShieldCheck className="w-8 h-8" />,
    <Server className="w-8 h-8" />,
    <Smartphone className="w-8 h-8" />,
    <Database className="w-8 h-8" />
  ];

  const handleShare = (portfolio: any) => {
    setActiveShareItem(portfolio);
  };

  const closeShare = () => {
    setActiveShareItem(null);
  };

  return (
    <section id="services" className="py-24 bg-white dark:bg-neutral-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-amplia-green font-normal tracking-widest uppercase text-sm mb-2">{t.sectionTitle}</h2>
            <h3 className="text-4xl md:text-5xl font-max font-normal text-amplia-dark dark:text-white mb-4">
              {t.mainTitle}
            </h3>
            <p className="max-w-2xl mx-auto text-amplia-gray dark:text-gray-400 text-lg font-normal">
              {t.description}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {t.items.map((service: any, index: number) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <div 
                className="group h-full p-8 bg-amplia-light dark:bg-neutral-800/50 rounded-2xl hover:bg-white dark:hover:bg-neutral-800 hover:shadow-xl transition-all duration-300 border border-transparent hover:border-amplia-green/20 dark:border-white/5 dark:hover:border-amplia-green/20"
              >
                <div className="w-14 h-14 bg-white dark:bg-neutral-700 rounded-xl flex items-center justify-center mb-6 text-amplia-green shadow-sm group-hover:bg-amplia-green group-hover:text-white transition-colors duration-300">
                  {icons[index]}
                </div>
                <h4 className="text-xl font-normal text-amplia-dark dark:text-white mb-3 font-max">{service.title}</h4>
                <p className="text-amplia-gray dark:text-gray-400 leading-relaxed font-normal">
                  {service.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Portfolios Subsection */}
        {t.portfolios && t.portfolios.length > 0 && (
          <div className="space-y-16 mt-24">
            {t.portfolios.map((portfolio: any, index: number) => (
              <ScrollReveal key={index} delay={0.2}>
                <div className="relative">
                  {/* Background gradient only for the first item or alternate if needed */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${index % 2 === 0 ? 'from-amplia-green/5' : 'from-blue-500/5'} to-transparent rounded-3xl -z-10`}></div>
                  <div className="bg-white dark:bg-neutral-800 border border-gray-100 dark:border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row">
                    
                    {/* Content Side */}
                    <div className="p-8 md:p-12 lg:w-3/5 flex flex-col justify-center">
                      <div className="inline-flex items-center gap-2 mb-4">
                        <span className={`w-2 h-2 rounded-full ${index % 2 === 0 ? 'bg-amplia-green' : 'bg-blue-500'} animate-pulse`}></span>
                        <span className={`${index % 2 === 0 ? 'text-amplia-green' : 'text-blue-500'} font-bold text-xs uppercase tracking-widest`}>{portfolio.title}</span>
                      </div>
                      <h3 className="text-3xl font-max font-normal text-amplia-dark dark:text-white mb-4">
                        {portfolio.appName}
                      </h3>
                      <p className="text-lg text-gray-500 dark:text-gray-400 font-normal mb-8 leading-relaxed">
                        {portfolio.appDescription}
                      </p>
                      <div className="flex flex-wrap items-center gap-4">
                        <a 
                          href={portfolio.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          <Button className={`flex items-center gap-2 ${index % 2 !== 0 ? '!bg-blue-600 hover:!bg-blue-700' : ''}`}>
                            {portfolio.buttonText} <ExternalLink size={18} />
                          </Button>
                        </a>
                        <button 
                          onClick={() => handleShare(portfolio)}
                          className="p-3 rounded-full bg-gray-100 dark:bg-neutral-700 text-amplia-dark dark:text-white hover:bg-gray-200 dark:hover:bg-neutral-600 transition-colors"
                          aria-label="Partilhar"
                        >
                          <Share2 size={20} />
                        </button>
                      </div>
                    </div>

                    {/* Pricing Side */}
                    <div className="lg:w-2/5 bg-gray-50 dark:bg-neutral-900/50 border-t lg:border-t-0 lg:border-l border-gray-100 dark:border-white/5 p-8 md:p-12 flex flex-col justify-center">
                      <div className="bg-white dark:bg-neutral-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-white/5">
                          <h4 className="text-sm font-bold uppercase text-gray-400 mb-2">{portfolio.pricingTitle}</h4>
                          <div className="flex items-baseline gap-1 mb-6">
                            <span className="text-4xl font-max font-normal text-amplia-dark dark:text-white">{portfolio.pricingPrice}</span>
                            <span className="text-gray-500 text-sm">{portfolio.pricingPeriod}</span>
                          </div>
                          <ul className="space-y-3 mb-0">
                            {[portfolio.pricingFeature1, portfolio.pricingFeature2, portfolio.pricingFeature3, portfolio.pricingFeature4].map((feature: string, idx: number) => (
                              <li key={idx} className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300">
                                <div className={`w-5 h-5 rounded-full ${index % 2 === 0 ? 'bg-amplia-green/10' : 'bg-blue-500/10'} flex items-center justify-center flex-shrink-0`}>
                                  <Check size={12} className={index % 2 === 0 ? 'text-amplia-green' : 'text-blue-500'} />
                                </div>
                                {feature}
                              </li>
                            ))}
                          </ul>
                      </div>
                    </div>

                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        )}

        {/* Share Modal */}
        {activeShareItem && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={closeShare}></div>
            <div className="bg-white dark:bg-neutral-800 rounded-2xl p-6 md:p-8 w-full max-w-sm relative z-10 shadow-2xl animate-fade-in-up">
              <button 
                onClick={closeShare}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
              
              <h3 className="text-xl font-max font-normal text-amplia-dark dark:text-white mb-2">
                Partilhar
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
                Mostre ao mundo o <span className="font-bold">{activeShareItem.appName}</span>
              </p>

              <div className="space-y-3">
                <a 
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(activeShareItem.url)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full p-3 bg-[#0077b5] text-white rounded-xl hover:bg-[#006396] transition-colors font-medium"
                >
                  <Linkedin size={20} />
                  Partilhar no LinkedIn
                </a>
                
                <a 
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(activeShareItem.url)}&text=${encodeURIComponent(`Check out ${activeShareItem.appName} by Amplia Solutions!`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full p-3 bg-black dark:bg-white dark:text-black text-white rounded-xl hover:opacity-80 transition-opacity font-medium"
                >
                  <Twitter size={20} />
                  Partilhar no X
                </a>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};