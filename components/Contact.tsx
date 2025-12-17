
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, AlertCircle, CheckCircle } from 'lucide-react';
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
    if (status === FormStatus.SUBMITTING) return;

    const formData = new FormData(e.currentTarget);
    const honeypot = formData.get('website_url');

    if (honeypot) {
      setStatus(FormStatus.SUCCESS);
      return;
    }

    setStatus(FormStatus.SUBMITTING);
    
    const payload = {
      name: formData.get('name'),
      company: formData.get('company'),
      email: formData.get('email'),
      message: formData.get('message'),
      _subject: `Contacto Amplia: ${formData.get('name')}`,
      _captcha: "false"
    };

    try {
      const response = await fetch("https://formsubmit.co/ajax/ampliasolutions.pt@gmail.com", {
        method: "POST",
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        setStatus(FormStatus.SUCCESS);
        (e.target as HTMLFormElement).reset();
        setTimeout(() => setStatus(FormStatus.IDLE), 6000);
      } else {
        throw new Error();
      }
    } catch (error) {
      setStatus(FormStatus.ERROR);
      setTimeout(() => setStatus(FormStatus.IDLE), 4000);
    }
  };

  return (
    <section id="contact" className="py-24 bg-amplia-dark text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-amplia-green opacity-5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <div>
            <h2 className="text-amplia-green font-bold tracking-[0.2em] uppercase text-xs mb-4">{t.sectionTitle}</h2>
            <h3 className="text-4xl md:text-5xl font-max mb-8">
              {t.mainTitlePrefix} <span className="text-amplia-green">{t.mainTitleHighlight}</span>{t.mainTitleSuffix}
            </h3>
            <p className="text-gray-400 text-lg mb-12 leading-relaxed">
              {t.description}
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/5 rounded-2xl text-amplia-green border border-white/5"><MapPin size={24} /></div>
                <div>
                  <h4 className="font-max font-bold text-lg">Lisboa, Portugal</h4>
                  <p className="text-gray-400 text-sm">Impasse da Sagrada Família, N.º 10, 2735-374</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/5 rounded-2xl text-amplia-green border border-white/5"><Mail size={24} /></div>
                <div>
                  <h4 className="font-max font-bold text-lg">Email</h4>
                  <p className="text-gray-400 text-sm">ampliasolutions.pt@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/5 rounded-2xl text-amplia-green border border-white/5"><Phone size={24} /></div>
                <div>
                  <h4 className="font-max font-bold text-lg">Telefone</h4>
                  <p className="text-gray-400 text-sm">(+351) 91 346 67 49</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-[#1a1c20] rounded-[2.5rem] p-8 lg:p-12 shadow-2xl border border-gray-100 dark:border-white/5">
            <h4 className="text-2xl font-max font-bold mb-8 dark:text-white">{t.formTitle}</h4>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="hp-field"><input type="text" name="website_url" tabIndex={-1} /></div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{t.labels.name}</label>
                  <input type="text" name="name" required placeholder={t.placeholders.name} className="w-full px-5 py-4 rounded-2xl bg-gray-50 dark:bg-black/20 border border-gray-100 dark:border-white/5 dark:text-white focus:ring-2 focus:ring-amplia-green/20 outline-none transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{t.labels.company}</label>
                  <input type="text" name="company" placeholder={t.placeholders.company} className="w-full px-5 py-4 rounded-2xl bg-gray-50 dark:bg-black/20 border border-gray-100 dark:border-white/5 dark:text-white focus:ring-2 focus:ring-amplia-green/20 outline-none transition-all" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{t.labels.email}</label>
                <input type="email" name="email" required placeholder={t.placeholders.email} className="w-full px-5 py-4 rounded-2xl bg-gray-50 dark:bg-black/20 border border-gray-100 dark:border-white/5 dark:text-white focus:ring-2 focus:ring-amplia-green/20 outline-none transition-all" />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{t.labels.message}</label>
                <textarea name="message" required rows={4} placeholder={t.placeholders.message} className="w-full px-5 py-4 rounded-2xl bg-gray-50 dark:bg-black/20 border border-gray-100 dark:border-white/5 dark:text-white focus:ring-2 focus:ring-amplia-green/20 outline-none transition-all resize-none"></textarea>
              </div>

              <div className="flex items-start gap-3">
                <input type="checkbox" id="privacy_consent" required className="mt-1 w-4 h-4 rounded border-gray-300 text-amplia-green focus:ring-amplia-green" />
                <label htmlFor="privacy_consent" className="text-[10px] text-gray-400 leading-tight cursor-pointer uppercase font-bold tracking-tight">
                  {t.labels.privacy}
                </label>
              </div>

              <Button 
                type="submit" 
                disabled={status === FormStatus.SUBMITTING}
                className={`w-full py-4 flex items-center justify-center gap-3 font-bold transition-all ${
                  status === FormStatus.SUCCESS ? 'bg-emerald-500 hover:bg-emerald-600' : 
                  status === FormStatus.ERROR ? 'bg-red-500 hover:bg-red-600' : ''
                }`}
              >
                {status === FormStatus.SUBMITTING ? <Loader size={20} className="animate-spin" /> : 
                 status === FormStatus.SUCCESS ? <><CheckCircle size={20} /> {t.button.success}</> : 
                 status === FormStatus.ERROR ? <><AlertCircle size={20} /> {t.button.error}</> : 
                 <>{t.button.idle} <Send size={18} /></>}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Loader = ({ size, className }: { size: number, className: string }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg>
);
