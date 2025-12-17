
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, Loader2 } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';
import { Language } from '../types';

export const AIChatBot = ({ t, lang }: { t: any; lang: Language }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'bot' | 'user'; text: string }[]>([
    { role: 'bot', text: t.welcome }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim() || isTyping) return;
    
    const userMsg = input.trim();
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setInput('');
    setIsTyping(true);

    try {
      const apiKey = process.env.API_KEY;
      if (!apiKey) throw new Error("API Key missing");

      const ai = new GoogleGenAI({ apiKey });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMsg,
        config: {
          systemInstruction: `You are the Amplia Solutions virtual assistant. 
          Respond in ${lang === 'pt' ? 'Portuguese' : lang === 'es' ? 'Spanish' : 'English'}.
          Company details: IT Consultancy based in Lisbon. Services: AI, Cloud, Software Engineering.
          Products: OpsFlow (DevOps), Responder Já (Reviews), LIA (Career).
          Style: Professional, concise, tech-forward. Identify as AI.`,
        },
      });
      
      const botResponse = response.text || t.error;
      setMessages(prev => [...prev, { role: 'bot', text: botResponse }]);
    } catch (err) {
      console.error("AI Error:", err);
      setMessages(prev => [...prev, { role: 'bot', text: t.error }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      {!isOpen ? (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-amplia-green text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform animate-bounce-slow"
          aria-label="Open Chat"
        >
          <MessageSquare size={24} />
        </button>
      ) : (
        <div className="bg-white dark:bg-[#1a1c20] w-[320px] sm:w-[380px] h-[500px] rounded-[2rem] shadow-2xl flex flex-col overflow-hidden border border-gray-200 dark:border-white/5 animate-fade-in-up">
          <div className="bg-amplia-green p-5 flex justify-between items-center text-white">
            <div className="flex items-center gap-3">
              <Bot size={20} />
              <span className="font-max font-bold text-sm">Amplia AI</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-black/10 p-1 rounded-lg"><X size={20} /></button>
          </div>
          
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-5 space-y-4 bg-gray-50 dark:bg-black/20">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 rounded-2xl text-xs leading-relaxed ${
                  m.role === 'user' 
                    ? 'bg-amplia-green text-white rounded-tr-none shadow-lg shadow-amplia-green/10' 
                    : 'bg-white dark:bg-[#2a2c31] text-gray-700 dark:text-gray-200 border border-gray-100 dark:border-white/5 rounded-tl-none'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-200 dark:bg-[#2a2c31] p-3 rounded-2xl animate-pulse">
                  <Loader2 className="animate-spin text-gray-400" size={16} />
                </div>
              </div>
            )}
          </div>

          <div className="p-4 bg-white dark:bg-[#1a1c20] border-t border-gray-100 dark:border-white/5 flex gap-2">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder={t.placeholder}
              className="flex-1 bg-gray-50 dark:bg-black/40 border-none rounded-xl px-4 text-xs dark:text-white focus:ring-1 focus:ring-amplia-green outline-none"
            />
            <button 
              onClick={handleSend}
              disabled={isTyping}
              className="bg-amplia-green text-white p-3 rounded-xl hover:opacity-90 transition-all disabled:opacity-50"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
