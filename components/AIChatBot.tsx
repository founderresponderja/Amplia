
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, User, Loader2 } from 'lucide-react';
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
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;
    const userMsg = input;
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setInput('');
    setIsTyping(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMsg,
        config: {
          systemInstruction: `You are the official assistant for Amplia Solutions, an IT consultancy.
          Language of response MUST BE: ${lang === 'pt' ? 'Portuguese' : lang === 'es' ? 'Spanish' : 'English'}.
          Expertise: IT Consulting, Web Dev, Cybersecurity, Cloud, Apps, and Data Analytics.
          Products: 
          1. OpsFlow: AI for DevOps (Docker, CI/CD). Price: €9.99/mo.
          2. Responder Já: Automatic review responses (Google/Booking). Price: €19.99/mo.
          3. LIA: AI career assistant.
          Be professional, friendly, and concise. Always identify as an AI.`,
        },
      });
      
      setMessages(prev => [...prev, { role: 'bot', text: response.text || t.error }]);
    } catch (err) {
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
          className="bg-amplia-green text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform active:scale-95 flex items-center justify-center animate-bounce-slow"
        >
          <MessageSquare size={24} />
        </button>
      ) : (
        <div className="bg-white dark:bg-[#1a1c20] w-[320px] sm:w-[380px] h-[480px] rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-gray-200 dark:border-white/10 animate-fade-in-up">
          <div className="bg-amplia-green p-4 flex justify-between items-center text-white">
            <div className="flex items-center gap-2">
              <Bot size={20} />
              <span className="font-bold text-sm">Amplia AI Assist</span>
            </div>
            <button onClick={() => setIsOpen(false)}><X size={20} /></button>
          </div>
          
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 dark:bg-transparent">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed ${
                  m.role === 'user' 
                    ? 'bg-amplia-green text-white rounded-tr-none shadow-md' 
                    : 'bg-white dark:bg-neutral-800 text-gray-800 dark:text-gray-200 shadow-sm border border-gray-100 dark:border-white/5 rounded-tl-none'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-200 dark:bg-neutral-800 p-3 rounded-2xl animate-pulse">
                  <Loader2 className="animate-spin text-gray-400" size={16} />
                </div>
              </div>
            )}
          </div>

          <div className="p-4 border-t border-gray-100 dark:border-white/10 flex gap-2 bg-white dark:bg-neutral-900">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder={t.placeholder}
              className="flex-1 bg-gray-100 dark:bg-neutral-800 border-none rounded-full px-4 text-xs focus:ring-2 focus:ring-amplia-green outline-none dark:text-white"
            />
            <button 
              onClick={handleSend}
              className="bg-amplia-green text-white p-2 rounded-full hover:bg-opacity-90 transition-colors shadow-sm"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
