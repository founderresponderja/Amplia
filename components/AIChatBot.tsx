
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, Sparkles } from 'lucide-react';
import { Language } from '../types';

interface Message {
  role: 'bot' | 'user';
  text: string;
  options?: string[];
}

export const AIChatBot = ({ t, lang }: { t: any; lang: Language }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { 
      role: 'bot', 
      text: t.welcome,
      options: ['Quero uma app à medida', 'Conhecer os produtos', 'Falar com a equipa']
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [messages, isTyping]);

  const handleSend = async (customMsg?: string) => {
    const userMsg = customMsg || input;
    if (!userMsg.trim()) return;

    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setInput('');
    setIsTyping(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMsg, lang }),
      });

      if (!response.ok) {
        throw new Error('AI endpoint error');
      }

      const data = await response.json();
      setMessages(prev => [...prev, {
        role: 'bot',
        text: typeof data.text === 'string' ? data.text : t.error,
        options: Array.isArray(data.options) ? data.options : [],
      }]);
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
          className="bg-amplia-green text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all active:scale-95 flex items-center justify-center animate-bounce-slow"
        >
          <MessageSquare size={26} />
        </button>
      ) : (
        <div className="bg-white dark:bg-[#121418] w-[350px] sm:w-[420px] h-[550px] rounded-[32px] shadow-2xl flex flex-col overflow-hidden border border-gray-200 dark:border-white/10 animate-fade-in-up">
          {/* Header */}
          <div className="bg-gradient-to-r from-amplia-green to-emerald-500 p-5 flex justify-between items-center text-white">
            <div className="flex items-center gap-3">
              <div className="bg-white/20 p-2 rounded-xl">
                <Bot size={22} />
              </div>
              <div>
                <p className="font-bold text-sm leading-none">Amplia</p>
                <p className="text-[10px] opacity-80 tracking-wide mt-1">Assistente da Amplia Solutions</p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="p-2 hover:bg-white/10 rounded-full transition-colors"
            >
              <X size={20} />
            </button>
          </div>
          
          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 bg-gray-50/50 dark:bg-transparent">
            {messages.map((m, i) => (
              <div key={i} className={`flex flex-col ${m.role === 'user' ? 'items-end' : 'items-start'}`}>
                <div className={`max-w-[85%] p-4 rounded-3xl text-sm leading-relaxed ${
                  m.role === 'user' 
                    ? 'bg-amplia-green text-white rounded-tr-none shadow-lg' 
                    : 'bg-white dark:bg-neutral-800 text-gray-800 dark:text-gray-200 shadow-sm border border-gray-100 dark:border-white/5 rounded-tl-none'
                }`}>
                  {m.text}
                </div>
                
                {/* AI Options / Buttons */}
                {m.role === 'bot' && m.options && m.options.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-3 ml-2">
                    {m.options.map((opt, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleSend(opt)}
                        className="text-xs px-4 py-2 bg-white dark:bg-neutral-800 border border-gray-200 dark:border-white/10 text-amplia-green font-bold rounded-full hover:bg-amplia-green hover:text-white transition-all shadow-sm hover:shadow-md transform hover:-translate-y-0.5 active:translate-y-0"
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start items-center gap-2">
                <div className="bg-gray-200 dark:bg-neutral-800 p-4 rounded-3xl rounded-tl-none animate-pulse flex gap-1">
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-4 bg-white dark:bg-neutral-900 border-t border-gray-100 dark:border-white/10">
            <div className="flex items-center gap-2 bg-gray-100 dark:bg-neutral-800 rounded-2xl px-4 py-2 border border-transparent focus-within:border-amplia-green/30 transition-all">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder={t.placeholder}
                className="flex-1 bg-transparent border-none text-sm py-2 focus:ring-0 outline-none dark:text-white font-normal"
              />
              <button 
                onClick={() => handleSend()}
                disabled={isTyping || !input.trim()}
                className="text-amplia-green disabled:text-gray-400 p-2 hover:scale-110 transition-transform active:scale-95"
              >
                <Send size={20} />
              </button>
            </div>
            <div className="flex items-center justify-center gap-1 mt-3 opacity-30">
              <Sparkles size={10} className="text-amplia-green" />
              <p className="text-[9px] font-bold uppercase tracking-widest text-gray-500">Powered by Amplia Core AI</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
