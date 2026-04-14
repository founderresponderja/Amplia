
import React from 'react';
import { ExternalLink, Check, Rocket } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from './Button';
import { ScrollReveal } from './ScrollReveal';

export const Services = ({ content }: { content: any }) => {
  const navigate = useNavigate();
  const renderLogo = (id: string) => {
    const logos: any = {
      opsflow: (
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#52b6ff] to-[#a46eff] flex items-center justify-center text-white shadow-lg">
          <Rocket size={24} fill="currentColor" fillOpacity={0.2} />
        </div>
      ),
      lia: (
        <div className="w-12 h-12 flex items-center justify-center">
          <svg viewBox="0 0 100 100" className="w-10 h-10 drop-shadow-md">
             <path d="M50 5 L95 90 L5 90 Z" fill="#8cc63f" />
          </svg>
        </div>
      ),
      responderja: (
        <div className="w-12 h-12 flex items-center justify-center">
          <svg viewBox="0 0 100 100" className="w-10 h-10 drop-shadow-md" fill="none">
             <circle cx="50" cy="48" r="32" stroke="#38bdf8" strokeWidth="8" />
             <path d="M30 72 L20 84 L28 78" stroke="#38bdf8" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      ),
      homestudio: (
        <div className="w-12 h-12 flex items-center justify-center">
          <svg viewBox="0 0 100 100" className="w-10 h-10 drop-shadow-lg">
             <path d="M50 5 L89 27.5 L89 72.5 L50 95 L11 72.5 L11 27.5 Z" fill="none" stroke="#22d3ee" strokeWidth="2" opacity="0.2" />
             <path d="M50 50 L50 5 M50 50 L11 72.5 M50 50 L89 72.5" fill="none" stroke="#22d3ee" strokeWidth="6" strokeLinecap="round" />
          </svg>
        </div>
      )
    };
    return logos[id] || <div className="w-12 h-12 rounded-xl bg-gray-200" />;
  };

  const formatFeatureText = (text: string) => {
    if (!text) return "";
    // Regex to bold numbers (e.g., "50", "1")
    const parts = text.split(/(\d+)/);
    return parts.map((part, i) => 
      /\d+/.test(part) ? <strong key={i} className="font-bold text-gray-900 dark:text-white">{part}</strong> : part
    );
  };

  const getThemeColors = (theme: string) => {
    switch(theme) {
      case 'blue': return 'text-blue-500 dark:text-blue-400';
      case 'cyan': return 'text-cyan-500 dark:text-cyan-400';
      case 'violet': return 'text-violet-500 dark:text-violet-400';
      case 'green': return 'text-amplia-green';
      default: return 'text-amplia-green';
    }
  };

  const openPrimary = (p: any) => {
    if (p.url.startsWith('/')) navigate(p.url);
    else window.open(p.url, '_blank', 'noopener,noreferrer');
  };

  const plans = (p: any) => (Array.isArray(p.pricingPlans) ? p.pricingPlans : []);

  return (
    <section id="services" className="py-24 bg-white dark:bg-transparent transition-colors">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-amplia-green font-bold uppercase tracking-[0.2em] text-xs mb-4">{content.sectionTitle}</h2>
          <h3 className="text-5xl font-max text-gray-900 dark:text-white transition-colors">{content.mainTitle}</h3>
        </div>

        <div className="space-y-12">
          {content.portfolios.map((p: any) => (
            <ScrollReveal key={p.id}>
              <div className="group bg-white dark:bg-[#1a1c20] rounded-[40px] overflow-hidden shadow-xl hover:shadow-2xl flex flex-col lg:flex-row border border-gray-100 dark:border-white/5 hover:border-amplia-green/30 transition-all duration-500">
                <div className="lg:w-3/5 p-10 lg:p-16 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-8">
                    {renderLogo(p.id)}
                    <h4 className="text-3xl font-max text-gray-900 dark:text-white">
                      {p.appName}
                    </h4>
                  </div>
                  <p className="text-lg text-gray-600 dark:text-gray-400 mb-10 leading-relaxed whitespace-pre-line font-normal">{p.appDescription}</p>
                  <div className="flex gap-4">
                    <Button 
                      className="flex items-center gap-2"
                      onClick={() => openPrimary(p)}
                    >
                      {p.buttonText} <ExternalLink size={18} />
                    </Button>
                  </div>
                </div>

                <div className="lg:w-2/5 bg-gray-50 dark:bg-[#0c0d10] p-10 lg:p-16 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-gray-100 dark:border-white/5 transition-colors">
                  <div className="bg-white dark:bg-[#0f1115] p-10 rounded-3xl shadow-lg dark:shadow-2xl text-left border border-gray-100 dark:border-white/5 relative overflow-hidden">
                    {plans(p).length > 0 ? (
                      <div className="space-y-4">
                        <h4 className="text-2xl font-max font-bold text-gray-900 dark:text-white tracking-tight">
                          {p.pricingTitle}
                        </h4>
                        {plans(p).map((plan: any, idx: number) => (
                          <div
                            key={`${plan.name}-${idx}`}
                            className="rounded-2xl border border-gray-100 bg-gray-50/70 p-4 dark:border-white/10 dark:bg-white/5"
                          >
                            <div className="flex items-baseline justify-between gap-2">
                              <p className="text-sm font-bold text-gray-900 dark:text-white">{plan.name}</p>
                              <p className="text-sm font-semibold text-gray-600 dark:text-gray-300">
                                {plan.price}
                                {plan.period ? <span className="ml-1 text-xs font-medium">{plan.period}</span> : null}
                              </p>
                            </div>
                            <ul className="mt-3 space-y-2">
                              {(plan.features || []).map((f: string, i: number) => (
                                <li key={i} className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-300">
                                  <Check size={14} className={`${getThemeColors(p.theme)} mt-0.5 flex-shrink-0`} />
                                  <span className="leading-snug">{formatFeatureText(f)}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <>
                        <h4 className="text-2xl font-max font-bold text-gray-900 dark:text-white mb-6 tracking-tight">{p.pricingTitle}</h4>
                        <div className="flex items-baseline gap-1 mb-10">
                          <span className="text-5xl font-max font-bold text-gray-900 dark:text-white tracking-tight">{p.pricingPrice}</span>
                          <span className="text-gray-500 dark:text-gray-400 text-sm font-medium">{p.pricingPeriod}</span>
                        </div>
                        <ul className="space-y-5">
                          {[p.pricingFeature1, p.pricingFeature2, p.pricingFeature3, p.pricingFeature4].filter(Boolean).map((f, i) => (
                            <li key={i} className="flex items-start gap-3 text-[15px] text-gray-600 dark:text-gray-300">
                              <Check size={18} className={`${getThemeColors(p.theme)} mt-1 flex-shrink-0`} />
                              <span className="leading-snug">{formatFeatureText(f)}</span>
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
