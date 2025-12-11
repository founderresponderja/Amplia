import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from './Button';
import { FormStatus } from '../types';

interface ContactProps {
  content: any;
}

export const Contact: React.FC<ContactProps> = ({ content }) => {
  const [status, setStatus] = useState<FormStatus>(FormStatus.IDLE);
  const t = content;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(FormStatus.SUBMITTING);
    // Simulate API call
    setTimeout(() => {
      setStatus(FormStatus.SUCCESS);
      setTimeout(() => setStatus(FormStatus.IDLE), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-amplia-dark text-white relative overflow-hidden">
      {/* Decorative background circle */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amplia-green opacity-10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-amplia-green font-normal tracking-widest uppercase text-sm mb-2">{t.sectionTitle}</h2>
            <h3 className="text-4xl md:text-5xl font-max font-normal mb-8">
              {t.mainTitlePrefix} <span className="text-amplia-green">{t.mainTitleHighlight}</span>{t.mainTitleSuffix}
            </h3>
            <p className="text-gray-400 text-lg mb-12 font-normal">
              {t.description}
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/5 rounded-lg text-amplia-green">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-normal font-max text-lg">Lisboa, Portugal</h4>
                  <p className="text-gray-400 font-normal">Av. da Liberdade, 100 - 2º Esq</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/5 rounded-lg text-amplia-green">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-normal font-max text-lg">Email</h4>
                  <p className="text-gray-400 font-normal">ola@amplia.pt</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/5 rounded-lg text-amplia-green">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-normal font-max text-lg">Telefone</h4>
                  <p className="text-gray-400 font-normal">+351 210 000 000</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white dark:bg-neutral-800 rounded-3xl p-8 lg:p-10 text-amplia-dark dark:text-white shadow-2xl transition-colors duration-300">
            <h4 className="text-2xl font-normal font-max mb-6">{t.formTitle}</h4>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-normal text-gray-600 dark:text-gray-300">{t.labels.name}</label>
                  <input 
                    type="text" 
                    required
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-neutral-900 border border-gray-200 dark:border-neutral-700 text-amplia-dark dark:text-white focus:border-amplia-green focus:ring-2 focus:ring-amplia-green/20 outline-none transition-all font-normal"
                    placeholder={t.placeholders.name}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-normal text-gray-600 dark:text-gray-300">{t.labels.company}</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-neutral-900 border border-gray-200 dark:border-neutral-700 text-amplia-dark dark:text-white focus:border-amplia-green focus:ring-2 focus:ring-amplia-green/20 outline-none transition-all font-normal"
                    placeholder={t.placeholders.company}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-normal text-gray-600 dark:text-gray-300">{t.labels.email}</label>
                <input 
                  type="email" 
                  required
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-neutral-900 border border-gray-200 dark:border-neutral-700 text-amplia-dark dark:text-white focus:border-amplia-green focus:ring-2 focus:ring-amplia-green/20 outline-none transition-all font-normal"
                  placeholder={t.placeholders.email}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-normal text-gray-600 dark:text-gray-300">{t.labels.message}</label>
                <textarea 
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-neutral-900 border border-gray-200 dark:border-neutral-700 text-amplia-dark dark:text-white focus:border-amplia-green focus:ring-2 focus:ring-amplia-green/20 outline-none transition-all resize-none font-normal"
                  placeholder={t.placeholders.message}
                ></textarea>
              </div>

              <Button 
                type="submit" 
                disabled={status === FormStatus.SUBMITTING}
                className="w-full flex items-center justify-center gap-2"
              >
                {status === FormStatus.SUBMITTING ? t.button.submitting : status === FormStatus.SUCCESS ? t.button.success : (
                  <>
                    {t.button.idle} <Send size={18} />
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};