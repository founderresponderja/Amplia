
import React from 'react';
import { ExternalLink, Check, Share2 } from 'lucide-react';
import { Button } from './Button';
import { ScrollReveal } from './ScrollReveal';

export const Services = ({ content }: { content: any }) => {
  const renderLogo = (id: string) => {
    const logos: any = {
      opsflow: <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-white font-bold">OF</div>,
      lia: <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-400 to-fuchsia-500 flex items-center justify-center text-white font-bold">LIA</div>,
      responderja: <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-400 to-indigo-600 flex items-center justify-center text-white font-bold">RJ</div>
    };
    return logos[id];
  };

  const formatFeatureText = (text: string) => {
    // Regex to bold numbers (e.g., "50", "1")
    const parts = text.split(/(\d+)/);
    return parts.map((part, i) => 
      /\d+/.test(part) ? <strong key={i} className="font-bold text-white">{part}</strong> : part
    );
  };

  const getThemeColors = (theme: string) => {
    switch(theme) {
      case 'blue': return 'text-blue-400';
      case 'cyan': return 'text-cyan-400';
      case 'violet': return 'text-violet-400';
      default: return 'text-amplia-green';
    }
  };

  return (
    <section id="services" className="py-24 bg-gray-50 dark:bg-transparent transition-colors">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-amplia-green font-bold uppercase tracking-[0.2em] text-xs mb-4">{content.sectionTitle}</h2>
          <h3 className="text-5xl font-max dark:text-white transition-colors">{content.mainTitle}</h3>
        </div>

        <div className="space-y-12">
          {content.portfolios.map((p: any) => (
            <ScrollReveal key={p.id}>
              <div className="group bg-white dark:bg-[#1a1c20] rounded-[40px] overflow-hidden shadow-2xl flex flex-col lg:flex-row border border-gray-100 dark:border-white/5 hover:border-amplia-green/30 transition-all duration-500">
                <div className="lg:w-3/5 p-10 lg:p-16 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-8">
                    {renderLogo(p.id)}
                    <h4 className="text-3xl font-max dark:text-white">{p.appName}</h4>
                  </div>
                  <p className="text-lg text-gray-500 dark:text-gray-400 mb-10 leading-relaxed whitespace-pre-line font-normal">{p.appDescription}</p>
                  <div className="flex gap-4">
                    <Button className="flex items-center gap-2">{p.buttonText} <ExternalLink size={18} /></Button>
                    <button className="p-3 rounded-full bg-gray-100 dark:bg-neutral-800 text-gray-500 hover:text-amplia-green transition-colors"><Share2 size={20} /></button>
                  </div>
                </div>

                <div className="lg:w-2/5 bg-gray-50 dark:bg-[#0c0d10] p-10 lg:p-16 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-gray-100 dark:border-white/5 transition-colors">
                  <div className="bg-[#0f1115] p-10 rounded-3xl shadow-2xl text-left border border-white/5 relative overflow-hidden">
                    <h4 className="text-2xl font-max font-bold text-white mb-6 tracking-tight">{p.pricingTitle}</h4>
                    
                    <div className="flex items-baseline gap-1 mb-10">
                      <span className="text-5xl font-max font-bold text-white tracking-tight">{p.pricingPrice}</span>
                      <span className="text-gray-400 text-sm font-medium">{p.pricingPeriod}</span>
                    </div>

                    <ul className="space-y-5">
                      {[p.pricingFeature1, p.pricingFeature2, p.pricingFeature3, p.pricingFeature4].filter(Boolean).map((f, i) => (
                        <li key={i} className="flex items-start gap-3 text-[15px] text-gray-300">
                          <Check size={18} className={`${getThemeColors(p.theme)} mt-1 flex-shrink-0`} /> 
                          <span className="leading-snug">{formatFeatureText(f)}</span>
                        </li>
                      ))}
                    </ul>
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
