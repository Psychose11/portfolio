import React, { useState, useEffect } from 'react';
import { Menu, X, Code, Smartphone, Mail, User, Sun, Moon, Globe, Check } from 'lucide-react';
import { useApp } from '../AppContext';
import { Lang } from '../translations';

const LANGS: { code: Lang; label: string }[] = [
  { code: 'fr', label: 'Français' },
  { code: 'en', label: 'English' },
  { code: 'mg', label: 'Malagasy' },
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { lang, setLang, theme, toggleTheme, tr } = useApp();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const links = [
    { id: 'home', label: tr.nav.about, icon: <User className="w-4 h-4" /> },
    { id: 'projects', label: tr.nav.projects, icon: <Smartphone className="w-4 h-4" /> },
    { id: 'skills', label: tr.nav.skills, icon: <Code className="w-4 h-4" /> },
    { id: 'contact', label: tr.nav.contact, icon: <Mail className="w-4 h-4" /> },
  ];

  // En haut de page (fond dégradé) : texte blanc. Après scroll (fond blanc) : texte sombre.
  const textColor = isScrolled ? 'text-gray-700 hover:text-primary' : 'text-white hover:text-secondary';
  const iconBtn = `h-9 px-2.5 rounded-lg flex items-center gap-1.5 text-sm font-semibold transition-colors ${
    isScrolled ? 'text-gray-700 hover:bg-primary/10' : 'text-white hover:bg-white/20'
  }`;

  const actions = (
    <div className="flex items-center gap-1">
      {/* Langue : un seul bouton qui ouvre la liste */}
      <div className="relative">
        <button onClick={() => setIsLangOpen(!isLangOpen)} className={iconBtn} aria-label={tr.ui.language}>
          <Globe className="w-4 h-4" />
          <span className="uppercase">{lang}</span>
        </button>
        {isLangOpen && (
          <>
            <div className="fixed inset-0 z-40" onClick={() => setIsLangOpen(false)} />
            <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg border z-50 overflow-hidden">
              {LANGS.map(({ code, label }) => (
                <button
                  key={code}
                  onClick={() => {
                    setLang(code);
                    setIsLangOpen(false);
                  }}
                  className="w-full flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-primary/10"
                >
                  <span>{label}</span>
                  {lang === code && <Check className="w-4 h-4 text-accent" />}
                </button>
              ))}
            </div>
          </>
        )}
      </div>

      {/* Mode clair / sombre */}
      <button
        onClick={toggleTheme}
        className={iconBtn}
        aria-label={theme === 'light' ? tr.ui.dark : tr.ui.light}
        title={theme === 'light' ? tr.ui.dark : tr.ui.light}
      >
        {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
      </button>
    </div>
  );

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Code className={`w-8 h-8 ${isScrolled ? 'text-primary' : 'text-white'}`} />
            <span className={`text-xl font-bold ${isScrolled ? 'text-primary' : 'text-white'}`}>Tahina Sarobidy</span>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            {links.map((l) => (
              <button
                key={l.id}
                onClick={() => scrollToSection(l.id)}
                className={`flex items-center space-x-1 transition-colors ${textColor}`}
              >
                {l.icon}
                <span>{l.label}</span>
              </button>
            ))}
            {actions}
          </nav>

          <div className="md:hidden flex items-center gap-1">
            {actions}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 ${isScrolled ? 'text-primary' : 'text-white'}`}
              aria-label="Menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t">
            <div className="container mx-auto px-4 py-4 space-y-4">
              {links.map((l) => (
                <button
                  key={l.id}
                  onClick={() => scrollToSection(l.id)}
                  className="block w-full text-left text-gray-700 hover:text-primary transition-colors"
                >
                  {l.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;