
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const FAQ = ({ content }: { content: any }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-gray-50 dark:bg-amplia-dark transition-colors">
      <div className="max-w-4xl mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-amplia-green font-bold uppercase tracking-[0.2em] text-xs mb-4">{content.sectionTitle}</h2>
            <h3 className="text-5xl font-max text-gray-900 dark:text-white">{content.mainTitle}</h3>
          </div>
        </ScrollReveal>

        <div className="space-y-4">
          {content.questions.map((faq: any, i: number) => (
            <ScrollReveal key={i} delay={i * 0.05}>
              <div className="bg-white dark:bg-neutral-900 rounded-3xl border border-gray-100 dark:border-white/5 overflow-hidden">
                <button 
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 dark:hover:bg-white/5 transition-colors group"
                >
                  <span className={`font-max font-bold text-lg transition-colors pr-8 ${openIndex === i ? 'text-amplia-green' : 'text-gray-900 dark:text-white'}`}>
                    {faq.q}
                  </span>
                  <div className={`transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`}>
                    <ChevronDown className={openIndex === i ? 'text-amplia-green' : 'text-gray-400'} />
                  </div>
                </button>
                
                <div 
                  className={`grid transition-all duration-300 ease-in-out ${
                    openIndex === i ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="p-6 pt-0 text-gray-600 dark:text-gray-400 leading-relaxed">
                      {faq.a}
                    </div>
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
