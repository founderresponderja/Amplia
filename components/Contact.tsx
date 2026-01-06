
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, AlertCircle } from 'lucide-react';
import { Button } from './Button';
import { FormStatus } from '../types';

interface ContactProps {
  content: any;
}

export const Contact: React.FC<ContactProps> = ({ content }) => {
  const [status, setStatus] = useState<FormStatus>(FormStatus.IDLE);
  const t = content;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus(FormStatus.SUBMITTING);
    
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("https://formsubmit.co/ajax/ampliasolutions.pt@gmail.com", {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          ...data,
          _subject: `Novo contacto via Site - ${data.name} (${data.company || 'Particular'})`,
          _captcha: "false"
        })
      });

      if (response.ok) {
        setStatus(FormStatus.SUCCESS);
        (e.target as HTMLFormElement).reset();
        setTimeout(() => setStatus(FormStatus.IDLE), 5000);
      } else {
        setStatus(FormStatus.ERROR);
        setTimeout(() => setStatus(FormStatus.IDLE), 5000);
      }
    } catch (error) {
      setStatus(FormStatus.ERROR);
      setTimeout(() => setStatus(FormStatus.IDLE), 5000);
    }
  };

  return (
    <section id="contact" className="py-24 bg-gray-50 dark:bg-amplia-dark text-gray-900 dark:text-white relative overflow-hidden transition-colors duration-300">
      <div className="absolute top-0 right-0 w-96 h-96 bg-amplia-green opacity-5 dark:opacity-10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <div>
            <h2 className="text-amplia-green font-normal tracking-widest uppercase text-sm mb-2">{t.sectionTitle}</h2>
            <h3 className="text-4xl md:text-5xl font-max font-normal mb-8">
              {t.mainTitlePrefix} <span className="text-amplia-green">{t.mainTitleHighlight}</span>{t.mainTitleSuffix}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-lg mb-12 font-normal leading-relaxed">
              {t.description}
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white dark:bg-white/5 shadow-md dark:shadow-none rounded-xl text-amplia-green">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-normal font-max text-lg text-gray-900 dark:text-white">Lisboa, Portugal</h4>
                  <p className="text-gray-600 dark:text-gray-400 font-normal">Impasse da Sagrada Família, N.º 10 R/C Esq.º, 2735 - 374 Agualva - Cacém</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white dark:bg-white/5 shadow-md dark:shadow-none rounded-xl text-amplia-green">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-normal font-max text-lg text-gray-900 dark:text-white">Email</h4>
                  <p className="text-gray-600 dark:text-gray-400 font-normal">ampliasolutions.pt@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-white dark:bg-white/5 shadow-md dark:shadow-none rounded-xl text-amplia-green">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-normal font-max text-lg text-gray-900 dark:text-white">Telefone</h4>
                  <p className="text-gray-600 dark:text-gray-400 font-normal">(+351) 91 346 67 49</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-neutral-800 rounded-[40px] p-8 lg:p-12 text-gray-900 dark:text-white shadow-2xl border border-gray-100 dark:border-white/5 transition-all duration-300">
            <h4 className="text-2xl font-normal font-max mb-8">{t.formTitle}</h4>
            <form onSubmit={handleSubmit} className="space-y-6">
              <input type="hidden" name="_template" value="table" />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-500 dark:text-gray-300 ml-1">{t.labels.name}</label>
                  <input 
                    type="text" 
                    name="name"
                    required
                    className="w-full px-5 py-4 rounded-2xl bg-gray-50 dark:bg-neutral-900 border border-gray-200 dark:border-neutral-700 text-gray-900 dark:text-white focus:border-amplia-green focus:ring-4 focus:ring-amplia-green/10 outline-none transition-all font-normal"
                    placeholder={t.placeholders.name}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-500 dark:text-gray-300 ml-1">{t.labels.company}</label>
                  <input 
                    type="text" 
                    name="company"
                    className="w-full px-5 py-4 rounded-2xl bg-gray-50 dark:bg-neutral-900 border border-gray-200 dark:border-neutral-700 text-gray-900 dark:text-white focus:border-amplia-green focus:ring-4 focus:ring-amplia-green/10 outline-none transition-all font-normal"
                    placeholder={t.placeholders.company}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-500 dark:text-gray-300 ml-1">{t.labels.email}</label>
                <input 
                  type="email" 
                  name="email"
                  required
                  className="w-full px-5 py-4 rounded-2xl bg-gray-50 dark:bg-neutral-900 border border-gray-200 dark:border-neutral-700 text-gray-900 dark:text-white focus:border-amplia-green focus:ring-4 focus:ring-amplia-green/10 outline-none transition-all font-normal"
                  placeholder={t.placeholders.email}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-500 dark:text-gray-300 ml-1">{t.labels.message}</label>
                <textarea 
                  name="message"
                  required
                  rows={4}
                  className="w-full px-5 py-4 rounded-2xl bg-gray-50 dark:bg-neutral-900 border border-gray-200 dark:border-neutral-700 text-gray-900 dark:text-white focus:border-amplia-green focus:ring-4 focus:ring-amplia-green/10 outline-none transition-all resize-none font-normal"
                  placeholder={t.placeholders.message}
                ></textarea>
              </div>

              {/* RGPD Consent Checkbox */}
              <div className="flex items-start gap-3 py-2">
                <input 
                  type="checkbox" 
                  id="privacy_consent" 
                  required 
                  className="mt-1 w-4 h-4 rounded border-gray-300 text-amplia-green focus:ring-amplia-green"
                />
                <label htmlFor="privacy_consent" className="text-xs text-gray-500 dark:text-gray-400 leading-tight cursor-pointer font-medium">
                  {t.labels.privacy}
                </label>
              </div>

              <Button 
                type="submit" 
                disabled={status === FormStatus.SUBMITTING}
                className={`w-full !py-4 flex items-center justify-center gap-2 text-lg font-bold shadow-xl shadow-amplia-green/20 ${status === FormStatus.ERROR ? 'bg-red-500 hover:bg-red-600' : ''}`}
              >
                {status === FormStatus.SUBMITTING ? t.button.submitting : 
                 status === FormStatus.SUCCESS ? t.button.success : 
                 status === FormStatus.ERROR ? (
                   <>
                     {t.button.error || 'Error'} <AlertCircle size={18} />
                   </>
                 ) : (
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
