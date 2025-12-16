import React, { useState, useRef, useEffect } from 'react';
import { Monitor, Server, ShieldCheck, Code, Smartphone, Database, ExternalLink, Check, Share2, Linkedin, Twitter, X, Copy, CheckCheck } from 'lucide-react';
import { Button } from './Button';
import { ScrollReveal } from './ScrollReveal';

interface ServicesProps {
  content: any; // Using any for flexibility with the dynamic context structure
}

// Custom Logo Components
const OpsFlowLogo = () => (
  <svg viewBox="0 0 64 64" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="64" height="64" rx="16" fill="url(#gradOps)" />
    <path d="M16 32C16 23.1634 23.1634 16 32 16C40.8366 16 48 23.1634 48 32" stroke="white" strokeWidth="4" strokeLinecap="round" />
    <path d="M48 32C48 40.8366 40.8366 48 32 48C23.1634 48 16 40.8366 16 32" stroke="white" strokeWidth="4" strokeLinecap="round" strokeOpacity="0.5" />
    <circle cx="32" cy="32" r="6" fill="white" />
    <circle cx="48" cy="32" r="3" fill="white" />
    <circle cx="16" cy="32" r="3" fill="white" />
    <defs>
      <linearGradient id="gradOps" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
        <stop stopColor="#06b6d4" /> {/* Cyan 500 */}
        <stop offset="1" stopColor="#10b981" /> {/* Emerald 500 */}
      </linearGradient>
    </defs>
  </svg>
);

const LiaLogo = () => (
  <svg viewBox="0 0 64 64" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="64" height="64" rx="16" fill="url(#gradLia)" />
    <path d="M32 12L36 24L48 28L36 32L32 44L28 32L16 28L28 24L32 12Z" fill="white" />
    <path d="M48 40L50 46L56 48L50 50L48 56L46 50L40 48L46 46L48 40Z" fill="white" fillOpacity="0.7" />
    <defs>
      <linearGradient id="gradLia" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
        <stop stopColor="#8b5cf6" /> {/* Violet 500 */}
        <stop offset="1" stopColor="#d946ef" /> {/* Fuchsia 500 */}
      </linearGradient>
    </defs>
  </svg>
);

const ResponderLogo = () => (
  <svg viewBox="0 0 64 64" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="64" height="64" rx="16" fill="url(#gradResp)" />
    <path d="M14 32L28 46L50 18" stroke="white" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M48 48L38 38" stroke="white" strokeWidth="4" strokeLinecap="round" strokeOpacity="0.5" />
    <defs>
      <linearGradient id="gradResp" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
        <stop stopColor="#f59e0b" /> {/* Amber 500 */}
        <stop offset="1" stopColor="#f97316" /> {/* Orange 500 */}
      </linearGradient>
    </defs>
  </svg>
);

export const Services: React.FC<ServicesProps> = ({ content }) => {
  const [activeShareItem, setActiveShareItem] = useState<any | null>(null);
  const [copied, setCopied] = useState(false);
  const urlInputRef = useRef<HTMLInputElement>(null);
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
    setCopied(false);
  };

  const closeShare = () => {
    setActiveShareItem(null);
    setCopied(false);
  };

  useEffect(() => {
    if (activeShareItem && urlInputRef.current) {
      const timer = setTimeout(() => {
        urlInputRef.current?.select();
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [activeShareItem]);

  const handleCopy = (url: string) => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    if (urlInputRef.current) {
      urlInputRef.current.select();
    }
    setTimeout(() => setCopied(false), 2000);
  };

  const renderLogo = (id: string) => {
    switch (id) {
      case 'opsflow': return <OpsFlowLogo />;
      case 'lia': return <LiaLogo />;
      case 'responderja': return <ResponderLogo />;
      default: return <div className="w-full h-full bg-gray-200 rounded-xl" />;
    }
  };

  const getThemeStyles = (theme: string) => {
    switch (theme) {
      case 'cyan':
        return {
          bg: 'from-cyan-500/10 to-transparent',
          text: 'text-cyan-600',
          dot: 'bg-cyan-500',
          btn: '!bg-cyan-600 hover:!bg-cyan-700',
          checkBg: 'bg-cyan-500/10',
          checkText: 'text-cyan-600',
          border: 'group-hover:border-cyan-500/20'
        };
      case 'violet':
        return {
          bg: 'from-violet-500/10 to-transparent',
          text: 'text-violet-600',
          dot: 'bg-violet-500',
          btn: '!bg-violet-600 hover:!bg-violet-700',
          checkBg: 'bg-violet-500/10',
          checkText: 'text-violet-600',
          border: 'group-hover:border-violet-500/20'
        };
      case 'amber':
        return {
          bg: 'from-amber-500/10 to-transparent',
          text: 'text-amber-600',
          dot: 'bg-amber-500',
          btn: '!bg-amber-600 hover:!bg-amber-700',
          checkBg: 'bg-amber-500/10',
          checkText: 'text-amber-600',
          border: 'group-hover:border-amber-500/20'
        };
      default:
        return {
          bg: 'from-amplia-green/10 to-transparent',
          text: 'text-amplia-green',
          dot: 'bg-amplia-green',
          btn: '',
          checkBg: 'bg-amplia-green/10',
          checkText: 'text-amplia-green',
          border: 'group-hover:border-amplia-green/20'
        };
    }
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
            {t.portfolios.map((portfolio: any, index: number) => {
              const theme = getThemeStyles(portfolio.theme || 'green');
              
              return (
                <ScrollReveal key={index} delay={0.2}>
                  <div className="relative group">
                    {/* Background gradient dynamically based on theme */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${theme.bg} rounded-3xl -z-10 transition-colors duration-300`}></div>
                    
                    <div className={`bg-white dark:bg-neutral-800 border border-gray-100 dark:border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row transition-all duration-300 ${theme.border}`}>
                      
                      {/* Content Side */}
                      <div className="p-8 md:p-12 lg:w-3/5 flex flex-col justify-center relative">
                        {/* Decorative Logo Background Opacity */}
                        <div className="absolute right-0 bottom-0 w-64 h-64 opacity-[0.03] pointer-events-none transform translate-x-1/4 translate-y-1/4">
                           {renderLogo(portfolio.id)}
                        </div>

                        <div className="inline-flex items-center gap-2 mb-6">
                          <span className={`w-2 h-2 rounded-full ${theme.dot} animate-pulse`}></span>
                          <span className={`${theme.text} font-bold text-xs uppercase tracking-widest`}>{portfolio.title}</span>
                        </div>
                        
                        <div className="flex items-center gap-4 mb-6">
                           <div className="w-16 h-16 rounded-2xl shadow-lg flex-shrink-0">
                              {renderLogo(portfolio.id)}
                           </div>
                           <h3 className="text-3xl md:text-4xl font-max font-normal text-amplia-dark dark:text-white">
                             {portfolio.appName}
                           </h3>
                        </div>

                        <p className="text-lg text-gray-500 dark:text-gray-400 font-normal mb-8 leading-relaxed max-w-xl">
                          {portfolio.appDescription}
                        </p>
                        
                        <div className="flex flex-wrap items-center gap-4 z-10">
                          <a 
                            href={portfolio.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                          >
                            <Button className={`flex items-center gap-2 ${theme.btn} shadow-lg shadow-gray-200 dark:shadow-none`}>
                              {portfolio.buttonText} <ExternalLink size={18} />
                            </Button>
                          </a>
                          
                          {/* SHARE BUTTON - ENABLED FOR LIA AND OPSFLOW */}
                          {(portfolio.id === 'lia' || portfolio.id === 'opsflow') && (
                            <button 
                              onClick={() => handleShare(portfolio)}
                              className="flex items-center gap-2 px-5 py-3 rounded-full bg-gray-100 dark:bg-neutral-700 text-amplia-dark dark:text-white hover:bg-gray-200 dark:hover:bg-neutral-600 transition-colors font-medium"
                              aria-label={t.share?.button || 'Partilhar'}
                            >
                              <Share2 size={18} />
                              <span>{t.share?.button || 'Partilhar'}</span>
                            </button>
                          )}
                        </div>
                      </div>

                      {/* Pricing Side */}
                      <div className="lg:w-2/5 bg-gray-50 dark:bg-neutral-900/50 border-t lg:border-t-0 lg:border-l border-gray-100 dark:border-white/5 p-8 md:p-12 flex flex-col justify-center">
                        <div className="bg-white dark:bg-neutral-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-white/5 relative overflow-hidden">
                            {/* Top colored line */}
                            <div className={`absolute top-0 left-0 w-full h-1 ${theme.dot}`}></div>
                            
                            <h4 className="text-xs font-bold uppercase text-gray-400 mb-2">{portfolio.pricingTitle}</h4>
                            <div className="flex items-baseline gap-1 mb-8">
                              <span className="text-5xl font-max font-normal text-amplia-dark dark:text-white tracking-tight">{portfolio.pricingPrice}</span>
                              <span className="text-gray-500 text-sm font-medium">{portfolio.pricingPeriod}</span>
                            </div>
                            <ul className="space-y-4 mb-0">
                              {[portfolio.pricingFeature1, portfolio.pricingFeature2, portfolio.pricingFeature3, portfolio.pricingFeature4].map((feature: string, idx: number) => (
                                <li key={idx} className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-300">
                                  <div className={`w-5 h-5 rounded-full ${theme.checkBg} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                                    <Check size={12} className={theme.checkText} />
                                  </div>
                                  <span className="leading-tight">{feature}</span>
                                </li>
                              ))}
                            </ul>
                        </div>
                      </div>

                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
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
              
              <div className="flex items-center gap-3 mb-4">
                 <div className="w-10 h-10 rounded-lg shadow-sm overflow-hidden">
                   {renderLogo(activeShareItem.id)}
                 </div>
                 <h3 className="text-xl font-max font-normal text-amplia-dark dark:text-white">
                  {t.share?.modalTitle || 'Partilhar'}
                </h3>
              </div>
              
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
                {t.share?.subtitle || 'Mostre ao mundo o'} <span className="font-bold">{activeShareItem.appName}</span>
              </p>

              <div className="space-y-4">
                {/* Link Input Section */}
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase mb-2">{t.share?.linkLabel || 'Link'}</label>
                  <input
                    ref={urlInputRef}
                    type="text"
                    readOnly
                    value={activeShareItem.url}
                    onClick={(e) => e.currentTarget.select()}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-neutral-900 border border-gray-200 dark:border-neutral-700 text-gray-600 dark:text-gray-300 text-sm focus:border-amplia-green focus:ring-1 focus:ring-amplia-green outline-none transition-all font-mono"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <a 
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(activeShareItem.url)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full p-3 bg-[#0077b5] text-white rounded-xl hover:bg-[#006396] transition-colors font-medium text-sm"
                  >
                    <Linkedin size={18} />
                    {t.share?.linkedin || 'LinkedIn'}
                  </a>
                  
                  <a 
                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(activeShareItem.url)}&text=${encodeURIComponent(`Descubra o ${activeShareItem.appName} da Amplia Solutions!`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full p-3 bg-black dark:bg-white dark:text-black text-white rounded-xl hover:opacity-80 transition-opacity font-medium text-sm"
                  >
                    <Twitter size={18} />
                    {t.share?.twitter || 'X / Twitter'}
                  </a>
                </div>

                <button 
                  onClick={() => handleCopy(activeShareItem.url)}
                  className={`flex items-center justify-center gap-3 w-full p-3 rounded-xl transition-all duration-300 font-medium ${
                    copied 
                      ? 'bg-amplia-green text-white ring-4 ring-amplia-green/20 scale-[1.02]' 
                      : 'bg-gray-100 dark:bg-neutral-700 text-amplia-dark dark:text-white hover:bg-gray-200 dark:hover:bg-neutral-600'
                  }`}
                >
                  {copied ? <CheckCheck size={20} /> : <Copy size={20} />}
                  {copied ? (t.share?.copied || 'Copiado!') : (t.share?.copy || 'Copiar Link')}
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};