import React from 'react';
import { ScrollReveal } from './ScrollReveal';

export const HowWeWork = ({ content }: { content: any }) => {
  return (
    <section id="como-trabalhamos" className="py-24 bg-white dark:bg-black transition-colors">
      <div className="max-w-7xl mx-auto px-4">
        <ScrollReveal>
          <div className="mb-16">
            <h2 className="text-amplia-green font-bold uppercase tracking-[0.2em] text-xs mb-4">{content.sectionTitle}</h2>
            <h3 className="text-4xl md:text-5xl font-max text-gray-900 dark:text-white">{content.mainTitle}</h3>
          </div>
        </ScrollReveal>
        <ol className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {content.steps.map((step: any, i: number) => (
            <ScrollReveal key={step.title} delay={i * 0.1}>
              <li className="h-full p-8 rounded-[32px] bg-gray-50 dark:bg-neutral-900 border border-gray-100 dark:border-white/5">
                <span className="block text-5xl font-max text-amplia-green mb-6">{i + 1}</span>
                <h4 className="text-xl font-max text-gray-900 dark:text-white mb-3">{step.title}</h4>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{step.text}</p>
              </li>
            </ScrollReveal>
          ))}
        </ol>
      </div>
    </section>
  );
};
