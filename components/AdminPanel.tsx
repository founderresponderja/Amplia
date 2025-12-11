import React, { useState } from 'react';
import { X, Save, RotateCcw, ChevronDown, ChevronRight, Lock, LogOut } from 'lucide-react';
import { useContent } from '../contexts/ContentContext';
import { Language } from '../types';
import { Button } from './Button';

interface AdminPanelProps {
  currentLang: Language;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export const AdminPanel: React.FC<AdminPanelProps> = ({ currentLang, isOpen, setIsOpen }) => {
  const { content, updateContent, resetContent, logout } = useContent();
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    'nav': false,
    'hero': true,
    'about': false,
    'services': false,
    'contact': false,
    'footer': false
  });

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  if (!isOpen) return null;

  const currentContent = content[currentLang];

  const renderInput = (section: string, key: string, value: any, label: string, index?: number) => {
    if (typeof value === 'string') {
      const isLongText = value.length > 50;
      return (
        <div className="mb-4" key={`${section}-${key}-${index ?? ''}`}>
          <label className="block text-xs font-bold text-gray-500 uppercase mb-1">
            {label}
          </label>
          {isLongText ? (
            <textarea
              value={value}
              onChange={(e) => updateContent(currentLang, section, key, e.target.value, index)}
              className="w-full p-2 text-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-amplia-green focus:border-transparent outline-none bg-gray-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-white"
              rows={3}
            />
          ) : (
            <input
              type="text"
              value={value}
              onChange={(e) => updateContent(currentLang, section, key, e.target.value, index)}
              className="w-full p-2 text-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-amplia-green focus:border-transparent outline-none bg-gray-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-white"
            />
          )}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="fixed top-0 right-0 h-full w-full md:w-96 bg-white dark:bg-neutral-900 shadow-2xl z-[60] overflow-hidden flex flex-col border-l border-gray-200 dark:border-white/10">
      {/* Header */}
      <div className="p-4 border-b border-gray-200 dark:border-white/10 flex justify-between items-center bg-amplia-green text-white">
        <div className="flex items-center gap-2">
          <Lock size={16} />
          <h2 className="font-max font-bold text-lg">Editor de Conteúdo</h2>
        </div>
        <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 p-1 rounded-full transition-colors">
          <X size={20} />
        </button>
      </div>

      {/* Toolbar */}
      <div className="p-4 bg-gray-50 dark:bg-black/20 border-b border-gray-200 dark:border-white/10 flex gap-2">
        <button 
          onClick={resetContent}
          className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-red-50 text-red-600 hover:bg-red-100 rounded-lg text-xs font-bold uppercase transition-colors"
        >
          <RotateCcw size={14} /> Reset
        </button>
        <button 
          onClick={logout}
          className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-gray-200 text-gray-700 hover:bg-gray-300 rounded-lg text-xs font-bold uppercase transition-colors"
        >
          <LogOut size={14} /> Sair
        </button>
      </div>

      {/* Content Form */}
      <div className="flex-1 overflow-y-auto p-4 space-y-2">
        <div className="mb-4 p-3 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-lg text-sm">
          A editar: <span className="font-bold uppercase">{currentLang}</span>. As alterações são guardadas automaticamente.
        </div>

        {Object.entries(currentContent).map(([sectionKey, sectionData]) => (
          <div key={sectionKey} className="border border-gray-200 dark:border-white/10 rounded-lg overflow-hidden">
            <button 
              onClick={() => toggleSection(sectionKey)}
              className="w-full flex justify-between items-center p-3 bg-gray-50 dark:bg-neutral-800 hover:bg-gray-100 dark:hover:bg-neutral-700 transition-colors text-left"
            >
              <span className="font-bold uppercase text-xs text-gray-600 dark:text-gray-300">{sectionKey}</span>
              {expandedSections[sectionKey] ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
            </button>
            
            {expandedSections[sectionKey] && (
              <div className="p-4 bg-white dark:bg-neutral-900/50">
                {Object.entries(sectionData as any).map(([key, value]) => {
                  // Handle Arrays (like features)
                  if (Array.isArray(value)) {
                    // Check if it's an array of strings or objects
                    if (typeof value[0] === 'string') {
                      return (
                        <div key={key} className="mb-4 border-l-2 border-amplia-green pl-3">
                          <label className="block text-xs font-bold text-gray-500 uppercase mb-2">{key}</label>
                          {value.map((item: string, idx: number) => (
                            renderInput(sectionKey, key, item, `Item ${idx + 1}`, idx)
                          ))}
                        </div>
                      );
                    } else if (typeof value[0] === 'object') {
                      // Specific handler for Services items array
                      return (
                        <div key={key}>
                           <label className="block text-xs font-bold text-gray-500 uppercase mb-2">{key}</label>
                           {value.map((item: any, idx: number) => (
                             <div key={idx} className="mb-4 pl-3 border-l-2 border-gray-300 dark:border-neutral-600">
                               <p className="text-xs text-gray-400 mb-2">Item {idx + 1}</p>
                               {renderInput(sectionKey, 'title', item.title, 'Título', idx)}
                               {renderInput(sectionKey, 'description', item.description, 'Descrição', idx)}
                             </div>
                           ))}
                        </div>
                      )
                    }
                  }
                  
                  // Handle Nested Objects (like card1 inside about)
                  if (typeof value === 'object' && value !== null) {
                    return (
                      <div key={key} className="mb-4 pl-3 border-l-2 border-blue-200">
                        <label className="block text-xs font-bold text-blue-500 uppercase mb-2">{key}</label>
                         {Object.entries(value).map(([subKey, subValue]) => (
                           // We flatten the update key path by passing a specialized update function or by handling it in context.
                           // For this simple implementation, let's create a temporary composite key or handle it in the renderInput by direct modification
                           // Actually, for the card1.title, we need to pass 'card1' as key, but the value is an object.
                           // Simpler approach for this demo: Render inputs that update the sub-object property
                           <div key={subKey} className="mb-2">
                             <label className="block text-xs font-bold text-gray-400 uppercase mb-1">
                               {subKey}
                             </label>
                             <textarea
                               value={subValue as string}
                               onChange={(e) => {
                                  // Update the nested object
                                  const updatedObject = { ...(value as object), [subKey]: e.target.value };
                                  updateContent(currentLang, sectionKey, key, updatedObject);
                               }}
                               className="w-full p-2 text-sm border border-gray-200 rounded-lg bg-gray-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-white"
                               rows={2}
                             />
                           </div>
                         ))}
                      </div>
                    );
                  }

                  // Handle Strings
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