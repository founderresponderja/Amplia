import React, { useState } from 'react';

type Props = {
  content: {
    sectionTitle: string;
    nameLabel: string;
    quote?: string;
  };
};

export const WhoWeAre: React.FC<Props> = ({ content }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <section id="who-we-are" className="py-24 bg-gray-50 dark:bg-[#0f1115] text-gray-900 dark:text-white transition-colors duration-300 border-t border-gray-200/70 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-amplia-green font-bold uppercase tracking-[0.2em] text-xs mb-4">
            {content.sectionTitle}
          </h2>
        </div>

        <div className="max-w-3xl mx-auto rounded-[32px] border border-gray-200 dark:border-white/10 bg-white dark:bg-[#12141a] p-10 shadow-2xl flex flex-col md:flex-row items-center gap-8 transition-colors duration-300">
          <div className="w-40 h-40 aspect-square rounded-full bg-gray-100 dark:bg-[#0b0c10] border-2 border-[#6BBF3E] flex items-center justify-center overflow-hidden">
            {!imageError ? (
              <img
                src="/founder.png"
                alt="Luís Pedrosa Pereira"
                className="w-full h-full object-cover rounded-full"
                onError={() => setImageError(true)}
              />
            ) : (
              <span className="text-4xl font-bold text-[#6BBF3E]">LP</span>
            )}
          </div>

          <div className="text-center md:text-left space-y-3">
            <h3 className="text-3xl font-max text-gray-900 dark:text-white">Luís Pedrosa Pereira</h3>
            <p className="text-sm uppercase tracking-wider text-[#6BBF3E] font-bold">
              {content.nameLabel}
            </p>
            {content.quote && (
              <p className="mt-4 text-base leading-relaxed text-gray-600 dark:text-gray-300 italic">
                {content.quote}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
