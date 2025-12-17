
import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { translations as defaultTranslations } from '../translations';
import { Language } from '../types';

type ContentType = typeof defaultTranslations;

interface ContentContextType {
  content: ContentType;
  updateContent: (lang: Language, section: string, key: string, value: any, index?: number, parentKey?: string) => void;
  resetContent: () => void;
  isAdmin: boolean;
  login: (password: string) => Promise<boolean>;
  logout: () => void;
}

const ContentContext = createContext<ContentContextType | undefined>(undefined);

const STORAGE_KEY = 'AMPLIA_VAULT_PROD';
const ITERATIONS = 100000;

// Optimized Binary-to-Base64 to prevent stack overflow on large strings
function encode(bytes: Uint8Array) {
  let binary = '';
  const len = bytes.byteLength;
  for (let i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary);
}

function decode(base64: string) {
  const binaryString = atob(base64);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes;
}

async function deriveKey(password: string, salt: Uint8Array): Promise<CryptoKey> {
  const encoder = new TextEncoder();
  const baseKey = await crypto.subtle.importKey(
    'raw', encoder.encode(password), 'PBKDF2', false, ['deriveKey']
  );
  return crypto.subtle.deriveKey(
    { name: 'PBKDF2', salt, iterations: ITERATIONS, hash: 'SHA-256' },
    baseKey,
    { name: 'AES-GCM', length: 256 },
    false,
    ['encrypt', 'decrypt']
  );
}

async function encrypt(data: any, password: string): Promise<string | null> {
  try {
    const encoder = new TextEncoder();
    const salt = crypto.getRandomValues(new Uint8Array(16));
    const iv = crypto.getRandomValues(new Uint8Array(12));
    const key = await deriveKey(password, salt);
    const encrypted = await crypto.subtle.encrypt({ name: 'AES-GCM', iv }, key, encoder.encode(JSON.stringify(data)));
    
    const combined = new Uint8Array(salt.length + iv.length + encrypted.byteLength);
    combined.set(salt, 0);
    combined.set(iv, 16);
    combined.set(new Uint8Array(encrypted), 28);
    
    return encode(combined);
  } catch (e) { 
    console.error("Encryption failure:", e);
    return null; 
  }
}

async function decrypt(base64: string, password: string): Promise<any | null> {
  try {
    const combined = decode(base64);
    const salt = combined.slice(0, 16);
    const iv = combined.slice(16, 28);
    const data = combined.slice(28);
    const key = await deriveKey(password, salt);
    const decrypted = await crypto.subtle.decrypt({ name: 'AES-GCM', iv }, key, data);
    return JSON.parse(new TextDecoder().decode(decrypted));
  } catch (e) { 
    return null; 
  }
}

export const ContentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [content, setContent] = useState<ContentType>(defaultTranslations);
  const [isAdmin, setIsAdmin] = useState(false);
  const [sessionKey, setSessionKey] = useState<string | null>(null);

  useEffect(() => {
    const init = async () => {
      const savedPass = sessionStorage.getItem('__AMPLIA_S__');
      const vault = localStorage.getItem(STORAGE_KEY);
      if (savedPass && vault) {
        const decrypted = await decrypt(vault, savedPass);
        if (decrypted) {
          setContent(decrypted);
          setIsAdmin(true);
          setSessionKey(savedPass);
        }
      }
    };
    init();
  }, []);

  const updateContent = useCallback(async (lang: Language, section: string, key: string, value: any, index?: number, parentKey?: string) => {
    setContent(prev => {
      const next = JSON.parse(JSON.stringify(prev));
      const target = next[lang]?.[section];
      if (!target) return prev;

      if (index !== undefined && parentKey && Array.isArray(target[parentKey])) {
        target[parentKey][index][key] = value;
      } else if (index !== undefined && Array.isArray(target[key])) {
        target[key][index] = value;
      } else {
        target[key] = value;
      }

      if (sessionKey) {
        encrypt(next, sessionKey).then(enc => {
          if (enc) localStorage.setItem(STORAGE_KEY, enc);
        });
      }
      return next;
    });
  }, [sessionKey]);

  const login = async (password: string): Promise<boolean> => {
    const vault = localStorage.getItem(STORAGE_KEY);
    if (vault) {
      const decrypted = await decrypt(vault, password);
      if (decrypted) {
        setContent(decrypted);
        setIsAdmin(true);
        setSessionKey(password);
        sessionStorage.setItem('__AMPLIA_S__', password);
        return true;
      }
    } else {
      const enc = await encrypt(defaultTranslations, password);
      if (enc) {
        localStorage.setItem(STORAGE_KEY, enc);
        setIsAdmin(true);
        setSessionKey(password);
        sessionStorage.setItem('__AMPLIA_S__', password);
        return true;
      }
    }
    return false;
  };

  const logout = () => {
    setIsAdmin(false);
    setSessionKey(null);
    sessionStorage.removeItem('__AMPLIA_S__');
  };

  const resetContent = () => {
    if (confirm('Ação Crítica: Deseja apagar todos os dados guardados e voltar à configuração original?')) {
      localStorage.removeItem(STORAGE_KEY);
      sessionStorage.removeItem('__AMPLIA_S__');
      setContent(defaultTranslations);
      logout();
    }
  };

  return (
    <ContentContext.Provider value={{ content, updateContent, resetContent, isAdmin, login, logout }}>
      {children}
    </ContentContext.Provider>
  );
};

export const useContent = () => {
  const ctx = useContext(ContentContext);
  if (!ctx) throw new Error('Context not initialized');
  return ctx;
};
