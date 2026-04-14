
import React from 'react';
import { Shield, Target, Cpu } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const About = ({ content }: { content: any }) => {
  return (
    <section id="about" className="py-24 bg-white dark:bg-black transition-colors relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-gray-50 dark:from-white/5 to-transparent pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <ScrollReveal>
          <div className="mb-20">
            <h2 className="text-amplia-green font-bold uppercase tracking-[0.2em] text-xs mb-4">{content.sectionTitle}</h2>
            <h3 className="text-5xl font-max text-gray-900 dark:text-white mb-8">{content.mainTitle}</h3>
            <div className="grid md:grid-cols-2 gap-12">
              <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
                {content.description1}
              </p>
              <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
                {content.description2}
              </p>
            </div>
            {content.description3 && (
              <p className="mt-8 text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-4xl">
                {content.description3}
              </p>
            )}
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-3 gap-8">
          {content.uniquePoints.map((point: any, i: number) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="p-10 bg-gray-50 dark:bg-neutral-900 rounded-[40px] border border-gray-100 dark:border-white/5 hover:border-amplia-green/30 transition-all group h-full">
                <div className="w-14 h-14 bg-white dark:bg-black rounded-2xl flex items-center justify-center text-amplia-green mb-6 shadow-sm group-hover:scale-110 transition-transform">
                  {i === 0 ? <Cpu size={28} /> : i === 1 ? <Shield size={28} /> : <Target size={28} />}
                </div>
                <h4 className="text-2xl font-max font-bold text-gray-900 dark:text-white mb-4">{point.title}</h4>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{point.text}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
