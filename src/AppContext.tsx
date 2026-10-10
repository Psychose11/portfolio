import React, { createContext, useContext, useEffect, useState } from 'react';
import { translations, Lang, Dict } from './translations';

type Theme = 'light' | 'dark';

interface AppContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  theme: Theme;
  toggleTheme: () => void;
  tr: Dict;
}

const AppContext = createContext<AppContextValue | null>(null);

const read = (key: string): string | null => {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
};

const write = (key: string, value: string) => {
  try {
    localStorage.setItem(key, value);
  } catch {
    /* ignore */
  }
};

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<Lang>(() => {
    const saved = read('lang');
    return saved === 'en' || saved === 'mg' || saved === 'fr' ? saved : 'fr'; // français par défaut
  });
  const [theme, setTheme] = useState<Theme>(() => (read('theme') === 'dark' ? 'dark' : 'light')); // clair par défaut

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    write('theme', theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.lang = lang;
    write('lang', lang);
  }, [lang]);

  const value: AppContextValue = {
    lang,
    setLang: setLangState,
    theme,
    toggleTheme: () => setTheme((t) => (t === 'light' ? 'dark' : 'light')),
    tr: translations[lang],
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useApp = (): AppContextValue => {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp doit être utilisé dans <AppProvider>');
  return ctx;
};