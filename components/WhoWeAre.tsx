import React, { useState } from 'react';

type Props = {
  content: {
    sectionTitle: string;
    nameLabel: string;
    roleLabel: string;
    roleValue: string;
    description: string;
  };
};

export const WhoWeAre: React.FC<Props> = ({ content }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <section id="who-we-are" className="py-24 bg-[#0f1115] text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-amplia-green font-bold uppercase tracking-[0.2em] text-xs mb-4">
            {content.sectionTitle}
          </h2>
        </div>

        <div className="max-w-3xl mx-auto rounded-[32px] border border-white/10 bg-[#12141a] p-10 shadow-2xl flex flex-col md:flex-row items-center gap-8">
          <div className="w-40 h-40 rounded-full bg-[#0b0c10] border-2 border-[#6BBF3E] flex items-center justify-center overflow-hidden">
            {!imageError ? (
              <img
                src="/founder.png"
                alt="Luís Pedrosa Pereira"
                className="w-full h-full object-cover"
                onError={() => setImageError(true)}
              />
            ) : (
              <span className="text-4xl font-bold text-[#6BBF3E]">LP</span>
            )}
          </div>

          <div className="text-center md:text-left space-y-3">
            <h3 className="text-3xl font-max text-white">Luís Pedrosa Pereira</h3>
            <p className="text-sm uppercase tracking-wider text-[#6BBF3E] font-bold">
              {content.nameLabel}
            </p>
            <p className="text-gray-300">
              <span className="font-bold text-white">{content.roleLabel}: </span>
              {content.roleValue}
            </p>
            <p className="text-gray-400 leading-relaxed">{content.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
