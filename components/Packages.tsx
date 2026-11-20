import React from 'react';
import { Check } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import { Button } from './Button';

export const Packages = ({ content, onCta }: { content: any; onCta: () => void }) => {
  return (
    <section id="pacotes" className="py-24 bg-gray-50 dark:bg-neutral-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4">
        <ScrollReveal>
          <div className="mb-16">
            <h2 className="text-amplia-green font-bold uppercase tracking-[0.2em] text-xs mb-4">{content.sectionTitle}</h2>
            <h3 className="text-4xl md:text-5xl font-max text-gray-900 dark:text-white">{content.mainTitle}</h3>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {content.items.map((item: any, i: number) => (
            <ScrollReveal key={item.name} delay={i * 0.05}>
              <div
                className={`relative h-full flex flex-col p-8 rounded-[32px] border transition-all bg-white dark:bg-neutral-900 ${
                  item.popular
                    ? 'border-amplia-green shadow-xl shadow-amplia-green/10'
                    : 'border-gray-100 dark:border-white/5 hover:border-amplia-green/30'
                }`}
              >
                {item.popular && (
                  <span className="absolute -top-3 left-8 px-3 py-1 rounded-full bg-amplia-green text-white text-[11px] font-bold uppercase tracking-widest">
                    {content.popular}
                  </span>
                )}
                <h4 className="text-2xl font-max text-gray-900 dark:text-white mb-2">{item.name}</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">{item.duration}</p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8 flex-1">
                  <Check size={16} className="inline mr-2 text-amplia-green align-[-2px]" />
                  {item.description}
                </p>
                <div className="mb-6">
                  <span className="text-4xl font-max text-gray-900 dark:text-white">{item.price}</span>
                  {item.priceNote && <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">{item.priceNote}</span>}
                </div>
                <Button variant={item.popular ? 'primary' : 'outline'} className="w-full !px-4" onClick={onCta}>
                  {content.cta}
                </Button>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <p className="mt-10 text-sm text-gray-500 dark:text-gray-400">{content.note}</p>
      </div>
    </section>
  );
};
