
import React, { useState } from 'react';
import { X, RotateCcw, ChevronDown, ChevronRight, Lock, LogOut, Loader2 } from 'lucide-react';
import { useContent } from '../contexts/ContentContext';
import { Language } from '../types';

interface AdminPanelProps {
  currentLang: Language;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export const AdminPanel: React.FC<AdminPanelProps> = ({ currentLang, isOpen, setIsOpen }) => {
  const { content, updateContent, resetContent, logout, isAdmin, login } = useContent();
  const [pass, setPass] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    const success = await login(pass);
    if (!success) setError(true);
    setLoading(false);
    setPass('');
  };

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  if (!isOpen) return null;

  // Login View
  if (!isAdmin) {
    return (
      <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
        <div className="bg-white dark:bg-neutral-900 w-full max-w-md rounded-3xl p-8 shadow-2xl border border-white/10 animate-fade-in-up">
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-amplia-green/20 text-amplia-green rounded-2xl">
                <Lock size={24} />
              </div>
              <h2 className="text-2xl font-max font-bold dark:text-white">Admin Vault</h2>
            </div>
            <button onClick={() => setIsOpen(false)} className="p-2 text-gray-500 hover:bg-gray-100 dark:hover:bg-white/5 rounded-full">
              <X size={20} />
            </button>
          </div>
          
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-500 uppercase tracking-widest">Password de Desencriptação</label>
              <input 
                type="password" 
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                required
                autoFocus
                className="w-full px-5 py-4 rounded-2xl bg-gray-50 dark:bg-black/40 border border-gray-200 dark:border-white/10 text-xl tracking-widest focus:ring-2 focus:ring-amplia-green outline-none dark:text-white"
              />
              {error && <p className="text-red-500 text-xs font-bold animate-pulse">Chave incorreta ou erro de integridade.</p>}
            </div>
            <button 
              type="submit"
              disabled={loading}
              className="w-full py-4 bg-amplia-green text-white rounded-2xl font-bold text-lg shadow-xl shadow-amplia-green/20 hover:scale-[1.02] transition-all flex items-center justify-center gap-3"
            >
              {loading ? <Loader2 className="animate-spin" /> : 'Abrir Cofre'}
            </button>
            <p className="text-[10px] text-gray-400 text-center font-normal">
              A password é utilizada para derivar a chave AES-256 local. A Amplia não armazena a sua chave.
            </p>
          </form>
        </div>
      </div>
    );
  }

  // Editor View
  const currentContent = content[currentLang];

  const renderInput = (section: string, key: string, value: any, label: string, index?: number, parentKey?: string) => {
    if (typeof value === 'string') {
      const isLongText = value.length > 50;
      return (
        <div className="mb-4" key={`${section}-${parentKey || ''}-${key}-${index ?? ''}`}>
          <label className="block text-[10px] font-bold text-gray-500 uppercase mb-1">{label}</label>
          {isLongText ? (
            <textarea
              value={value}
              onChange={(e) => updateContent(currentLang, section, key, e.target.value, index, parentKey)}
              className="w-full p-3 text-sm border border-gray-200 rounded-xl bg-gray-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-white focus:ring-1 focus:ring-amplia-green outline-none"
              rows={3}
            />
          ) : (
            <input
              type="text"
              value={value}
              onChange={(e) => updateContent(currentLang, section, key, e.target.value, index, parentKey)}
              className="w-full p-3 text-sm border border-gray-200 rounded-xl bg-gray-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-white focus:ring-1 focus:ring-amplia-green outline-none"
            />
          )}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="fixed top-0 right-0 h-full w-full md:w-96 bg-white dark:bg-neutral-900 shadow-2xl z-[200] flex flex-col border-l border-gray-200 dark:border-white/10">
      <div className="p-6 border-b border-gray-200 dark:border-white/10 flex justify-between items-center bg-amplia-green text-white">
        <div className="flex items-center gap-2">
          <Lock size={18} />
          <h2 className="font-max font-bold">Secure Editor</h2>
        </div>
        <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 p-2 rounded-full"><X size={20} /></button>
      </div>

      <div className="p-4 bg-gray-50 dark:bg-black/40 flex gap-2">
        <button onClick={resetContent} className="flex-1 py-2 text-[10px] font-bold uppercase bg-red-500/10 text-red-500 rounded-lg hover:bg-red-500/20 transition-colors">
          Reset All
        </button>
        <button onClick={logout} className="flex-1 py-2 text-[10px] font-bold uppercase bg-gray-500/10 text-gray-500 rounded-lg hover:bg-gray-500/20 transition-colors">
          Lock Session
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {Object.entries(currentContent).map(([sectionKey, sectionData]) => (
          <div key={sectionKey} className="border border-gray-100 dark:border-white/5 rounded-2xl overflow-hidden">
            <button 
              onClick={() => toggleSection(sectionKey)}
              className="w-full flex justify-between items-center p-4 bg-gray-50/50 dark:bg-neutral-800/50 hover:bg-gray-100 transition-colors"
            >
              <span className="font-bold uppercase text-[10px] text-gray-500 tracking-widest">{sectionKey}</span>
              {expandedSections[sectionKey] ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
            </button>
            
            {expandedSections[sectionKey] && (
              <div className="p-4 bg-white dark:bg-black/10">
                {Object.entries(sectionData as any).map(([key, value]) => {
                  if (Array.isArray(value)) {
                    return (
                      <div key={key} className="space-y-4">
                        <label className="block text-[10px] font-bold text-amplia-green uppercase mb-2">List: {key}</label>
                        {value.map((item: any, idx: number) => (
                          <div key={idx} className="pl-4 border-l border-gray-200 dark:border-white/10">
                            {typeof item === 'string' 
                              ? renderInput(sectionKey, key, item, `Item ${idx + 1}`, idx)
                              : Object.keys(item).map(k => renderInput(sectionKey, k, item[k], k, idx, key))
                            }
                          </div>
                        ))}
                      </div>
                    );
                  }
                  return renderInput(sectionKey, key, value, key);
                })}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
