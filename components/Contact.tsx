
import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, AlertCircle, CheckCircle2, Globe } from 'lucide-react';
import { Button } from './Button';
import { FormStatus } from '../types';

interface ContactProps {
  content: any;
}

export const Contact: React.FC<ContactProps> = ({ content }) => {
  const [status, setStatus] = useState<FormStatus>(FormStatus.IDLE);
  const [isLocalFile, setIsLocalFile] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const t = content;

  useEffect(() => {
    // Detect if the app is being run from a local file, which blocks FormSubmit AJAX
    if (window.location.protocol === 'file:') {
      setIsLocalFile(true);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage(null);

    if (isLocalFile) {
      setStatus(FormStatus.ERROR);
      setErrorMessage("O envio de mensagens requer um servidor web (http/https). Não funciona ao abrir o ficheiro diretamente.");
      return;
    }

    setStatus(FormStatus.SUBMITTING);
    
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    const payload: any = {
      ...data,
      _subject: `Novo contacto via Site - ${data.name}`,
      _replyto: data.email,
      _template: "table",
      _captcha: "false"
    };

    if (data._honey) {
      payload._honey = data._honey;
    }

    try {
      const response = await fetch("https://formsubmit.co/ajax/ampliasolutions.pt@gmail.com", {
        method: "POST",
        mode: "cors",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      const responseData = await response.json().catch(() => ({}));

      if (!response.ok) {
        // Handle specific FormSubmit error about web servers
        if (response.status === 403 || (responseData.message && responseData.message.includes("web server"))) {
          throw new Error("O serviço de email exige um servidor web ativo (HTTP/HTTPS).");
        }
        throw new Error(responseData.message || "Erro na comunicação com o servidor.");
      }
      
      const isSuccess = responseData.success === true || responseData.success === "true";

      if (isSuccess) {
        setStatus(FormStatus.SUCCESS);
        (e.target as HTMLFormElement).reset();
        setTimeout(() => setStatus(FormStatus.IDLE), 5000);
      } else {
        throw new Error(responseData.message || "Falha na submissão.");
      }
    } catch (error: any) {
      console.error("Submission error:", error);
      setStatus(FormStatus.ERROR);
      setErrorMessage(error.message || "Ocorreu um erro ao enviar a mensagem.");
      // We don't reset IDLE immediately so the user can read the error
      setTimeout(() => {
        setStatus(FormStatus.IDLE);
        setErrorMessage(null);
      }, 8000);
    }
  };

  return (
    <section id="contact" className="py-24 bg-gray-50 dark:bg-amplia-dark text-gray-900 dark:text-white relative overflow-hidden transition-colors duration-300">
      <div className="absolute top-0 right-0 w-96 h-96 bg-amplia-green opacity-5 dark:opacity-10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {isLocalFile && (
          <div className="mb-8 p-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-2xl flex items-center gap-3 text-amber-700 dark:text-amber-300 animate-in fade-in slide-in-from-top-4 duration-500">
            <Globe className="flex-shrink-0" size={20} />
            <p className="text-sm font-medium">
              <strong>Nota:</strong> O formulário está desativado porque o site foi aberto como um ficheiro local. Utilize um servidor (ex: Live Server) para testar o envio.
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <div>
            <h2 className="text-amplia-green font-bold tracking-widest uppercase text-xs mb-2">{t.sectionTitle}</h2>
            <h3 className="text-4xl md:text-5xl font-max font-bold mb-8">
              {t.mainTitlePrefix} <span className="text-amplia-green">{t.mainTitleHighlight}</span>{t.mainTitleSuffix}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-lg mb-12 font-normal leading-relaxed">
              {t.description}
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-white dark:bg-white/5 shadow-md dark:shadow-none rounded-xl text-amplia-green transition-transform group-hover:scale-110">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold font-max text-lg text-gray-900 dark:text-white">Lisboa, Portugal</h4>
                  <p className="text-gray-600 dark:text-gray-400 font-normal">Impasse da Sagrada Família, N.º 10 R/C Esq.º, 2735 - 374 Agualva - Cacém</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-white dark:bg-white/5 shadow-md dark:shadow-none rounded-xl text-amplia-green transition-transform group-hover:scale-110">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold font-max text-lg text-gray-900 dark:text-white">Email Direto</h4>
                  <p className="text-gray-600 dark:text-gray-400 font-normal">ampliasolutions.pt@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-white dark:bg-white/5 shadow-md dark:shadow-none rounded-xl text-amplia-green transition-transform group-hover:scale-110">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold font-max text-lg text-gray-900 dark:text-white">Contacto Telefónico</h4>
                  <p className="text-gray-600 dark:text-gray-400 font-normal">(+351) 91 346 67 49</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-neutral-800 rounded-[40px] p-8 lg:p-12 text-gray-900 dark:text-white shadow-2xl border border-gray-100 dark:border-white/5 transition-all duration-300">
            <h4 className="text-2xl font-bold font-max mb-8">{t.formTitle}</h4>
            <form onSubmit={handleSubmit} className="space-y-6">
              <input type="text" name="_honey" style={{ display: 'none' }} />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase ml-1 tracking-wider">{t.labels.name}</label>
                  <input 
                    type="text" 
                    name="name"
                    required
                    className="w-full px-5 py-4 rounded-2xl bg-gray-50 dark:bg-neutral-900 border border-gray-200 dark:border-neutral-700 text-gray-900 dark:text-white focus:border-amplia-green focus:ring-4 focus:ring-amplia-green/10 outline-none transition-all font-normal"
                    placeholder={t.placeholders.name}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase ml-1 tracking-wider">{t.labels.company}</label>
                  <input 
                    type="text" 
                    name="company"
                    className="w-full px-5 py-4 rounded-2xl bg-gray-50 dark:bg-neutral-900 border border-gray-200 dark:border-neutral-700 text-gray-900 dark:text-white focus:border-amplia-green focus:ring-4 focus:ring-amplia-green/10 outline-none transition-all font-normal"
                    placeholder={t.placeholders.company}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase ml-1 tracking-wider">{t.labels.email}</label>
                <input 
                  type="email" 
                  name="email"
                  required
                  className="w-full px-5 py-4 rounded-2xl bg-gray-50 dark:bg-neutral-900 border border-gray-200 dark:border-neutral-700 text-gray-900 dark:text-white focus:border-amplia-green focus:ring-4 focus:ring-amplia-green/10 outline-none transition-all font-normal"
                  placeholder={t.placeholders.email}
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase ml-1 tracking-wider">{t.labels.message}</label>
                <textarea 
                  name="message"
                  required
                  rows={4}
                  className="w-full px-5 py-4 rounded-2xl bg-gray-50 dark:bg-neutral-900 border border-gray-200 dark:border-neutral-700 text-gray-900 dark:text-white focus:border-amplia-green focus:ring-4 focus:ring-amplia-green/10 outline-none transition-all resize-none font-normal"
                  placeholder={t.placeholders.message}
                ></textarea>
              </div>

              <div className="flex items-start gap-3 py-2">
                <div className="flex items-center h-5">
                  <input 
                    type="checkbox" 
                    id="privacy_consent" 
                    required 
                    className="w-4 h-4 rounded border-gray-300 text-amplia-green focus:ring-amplia-green accent-amplia-green cursor-pointer"
                  />
                </div>
                <label htmlFor="privacy_consent" className="text-xs text-gray-500 dark:text-gray-400 leading-tight cursor-pointer font-medium">
                  {t.labels.privacy}
                </label>
              </div>

              <div className="space-y-4">
                <Button 
                  type="submit" 
                  disabled={status === FormStatus.SUBMITTING || isLocalFile}
                  className={`w-full !py-4 flex items-center justify-center gap-3 text-lg font-bold shadow-xl transition-all ${
                    status === FormStatus.SUCCESS ? 'bg-emerald-500 hover:bg-emerald-600 shadow-emerald-500/20' : 
                    status === FormStatus.ERROR ? 'bg-rose-500 hover:bg-rose-600 shadow-rose-500/20' : 
                    isLocalFile ? 'bg-gray-400 cursor-not-allowed grayscale' : 'shadow-amplia-green/20'
                  }`}
                >
                  {status === FormStatus.SUBMITTING ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      {t.button.submitting}
                    </>
                  ) : status === FormStatus.SUCCESS ? (
                    <>
                      {t.button.success} <CheckCircle2 size={22} />
                    </>
                  ) : status === FormStatus.ERROR ? (
                    <>
                      {t.button.error} <AlertCircle size={22} />
                    </>
                  ) : (
                    <>
                      {t.button.idle} <Send size={20} />
                    </>
                  )}
                </Button>

                {errorMessage && (
                  <div className="flex items-center gap-2 text-rose-500 dark:text-rose-400 text-xs font-bold justify-center bg-rose-50 dark:bg-rose-900/20 p-3 rounded-xl animate-in fade-in duration-300">
                    <AlertCircle size={14} />
                    <span>{errorMessage}</span>
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
