
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
                  className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 dark:hover:bg-white/5 transition-colors"
                >
                  <span className="font-max font-bold text-lg text-gray-900 dark:text-white pr-8">{faq.q}</span>
                  {openIndex === i ? <ChevronUp className="text-amplia-green" /> : <ChevronDown className="text-gray-400" />}
                </button>
                {openIndex === i && (
                  <div className="p-6 pt-0 text-gray-600 dark:text-gray-400 leading-relaxed animate-fade-in-up">
                    {faq.a}
                  </div>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
