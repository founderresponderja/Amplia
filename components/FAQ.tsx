
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const FAQ = ({ content }: { content: any }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toSegments = (text: string) =>
    text.split(/(\*\*[^*]+\*\*)/g).filter(Boolean).map((segment, idx) => {
      if (segment.startsWith('**') && segment.endsWith('**')) {
        return (
          <strong key={idx} className="font-bold text-gray-900 dark:text-white">
            {segment.slice(2, -2)}
          </strong>
        );
      }
      return <React.Fragment key={idx}>{segment}</React.Fragment>;
    });

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
          {content.questions.map((faq: any, i: number) => {
            const previousBlock = i > 0 ? content.questions[i - 1]?.block : null;
            const showBlockHeader = !!faq.block && faq.block !== previousBlock;
            return (
              <ScrollReveal key={i} delay={i * 0.05}>
                <>
                  {showBlockHeader && (
                    <div className="pt-4">
                      <div className="mb-3 h-px w-full bg-gradient-to-r from-transparent via-gray-300 to-transparent dark:via-white/20" />
                      <p className="text-center text-[11px] font-bold uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400">
                        {faq.block}
                      </p>
                    </div>
                  )}
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
                      {toSegments(faq.a)}
                    </div>
                  </div>
                </div>
              </div>
                </>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
