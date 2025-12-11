import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations as defaultTranslations } from '../translations';
import { Language } from '../types';

type ContentType = typeof defaultTranslations;

interface ContentContextType {
  content: ContentType;
  updateContent: (lang: Language, section: string, key: string, value: any, index?: number, parentKey?: string) => void;
  resetContent: () => void;
  isAdmin: boolean;
  login: (password: string) => boolean;
  logout: () => void;
}

const ContentContext = createContext<ContentContextType | undefined>(undefined);

export const ContentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Load content from localStorage or use default
  // Using 'site_content_v2' to invalidate old cache and ensure new portfolio items appear
  const [content, setContent] = useState<ContentType>(() => {
    try {
      const saved = localStorage.getItem('site_content_v2');
      return saved ? JSON.parse(saved) : defaultTranslations;
    } catch (e) {
      return defaultTranslations;
    }
  });

  const [isAdmin, setIsAdmin] = useState(() => {
    return localStorage.getItem('is_admin') === 'true';
  });

  // Persist content changes
  useEffect(() => {
    localStorage.setItem('site_content_v2', JSON.stringify(content));
  }, [content]);

  // Persist admin state
  useEffect(() => {
    localStorage.setItem('is_admin', String(isAdmin));
  }, [isAdmin]);

  const updateContent = (lang: Language, section: string, key: string, value: any, index?: number, parentKey?: string) => {
    setContent(prev => {
      const newContent = { ...prev };
      const langContent = { ...newContent[lang] };
      // @ts-ignore
      const sectionContent = { ...langContent[section] };

      if (index !== undefined && parentKey && Array.isArray(sectionContent[parentKey])) {
        // Generic handler for array of objects (e.g. services.items or services.portfolios)
        const newArray = [...sectionContent[parentKey]];
        newArray[index] = { ...newArray[index], [key]: value };
        sectionContent[parentKey] = newArray;
      } else if (index !== undefined && Array.isArray(sectionContent[key])) {
        // Handle array of strings updates (like features list where key IS the array name)
        const newArray = [...sectionContent[key]];
        newArray[index] = value;
        sectionContent[key] = newArray;
      } else if (typeof sectionContent[key] === 'object' && !Array.isArray(sectionContent[key]) && sectionContent[key] !== null) {
        // Handle nested objects direct update
        sectionContent[key] = value;
      } else {
        // Simple string update
        sectionContent[key] = value;
      }

      // @ts-ignore
      langContent[section] = sectionContent;
      newContent[lang] = langContent;
      return newContent;
    });
  };

  const resetContent = () => {
    if (confirm('Tem a certeza? Todas as alterações serão perdidas.')) {
      setContent(defaultTranslations);
      localStorage.removeItem('site_content_v2');
    }
  };

  const login = (password: string) => {
    if (password === 'admin') {
      setIsAdmin(true);
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAdmin(false);
  };

  return (
    <ContentContext.Provider value={{ content, updateContent, resetContent, isAdmin, login, logout }}>
      {children}
    </ContentContext.Provider>
  );
};

export const useContent = () => {
  const context = useContext(ContentContext);
  if (context === undefined) {
    throw new Error('useContent must be used within a ContentProvider');
  }
  return context;
};