
import React from 'react';
import { Shield, Target, Cpu, Award, HelpCircle } from 'lucide-react';
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
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-3 gap-8 mb-24">
          {content.uniquePoints.map((point: any, i: number) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="p-10 bg-gray-50 dark:bg-neutral-900 rounded-[40px] border border-gray-100 dark:border-white/5 hover:border-amplia-green/30 transition-all group">
                <div className="w-14 h-14 bg-white dark:bg-black rounded-2xl flex items-center justify-center text-amplia-green mb-6 shadow-sm group-hover:scale-110 transition-transform">
                  {i === 0 ? <Cpu size={28} /> : i === 1 ? <Shield size={28} /> : <Target size={28} />}
                </div>
                <h4 className="text-2xl font-max font-bold text-gray-900 dark:text-white mb-4">{point.title}</h4>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{point.text}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center bg-amplia-green/5 dark:bg-amplia-green/10 p-10 md:p-20 rounded-[50px] border border-amplia-green/10">
          <ScrollReveal>
            <div className="space-y-6">
              <div className="flex items-center gap-3 text-amplia-green">
                <Award size={24} />
                <h4 className="text-2xl font-max font-bold">{content.credentialsTitle}</h4>
              </div>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                {content.credentialsText}
              </p>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2}>
            <div className="space-y-6 bg-white dark:bg-black/40 p-10 rounded-[40px] shadow-xl">
              <div className="flex items-center gap-3 text-amber-500">
                <HelpCircle size={24} />
                <h4 className="text-2xl font-max font-bold">{content.misinformationTitle}</h4>
              </div>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed italic">
                {content.misinformationText}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
