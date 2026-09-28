import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Send, ChevronRight, Globe, ChevronDown, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import logoImg from '../assets/logo.png';

export default function Navbar({ onOpenBooking }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [mobileLangOpen, setMobileLangOpen] = useState(false);
  const [activeNav, setActiveNav] = useState('Home');

  const { currentLang, languageObj, changeLanguage, t, LANGUAGES } = useLanguage();
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setLangDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navItems = [
    { label: t('nav.home', 'Home'), key: 'Home', href: '#hero' },
    { label: t('nav.about', 'About'), key: 'About', href: '#about' },
    { label: t('nav.packages', 'Packages'), key: 'Packages', href: '#packages' },
    { label: t('nav.destinations', 'Destinations'), key: 'Destinations', href: '#destinations' },
    { label: t('nav.reviews', 'Reviews'), key: 'Reviews', href: '#reviews' },
    { label: t('nav.gallery', 'Gallery'), key: 'Gallery', href: '#gallery' },
    { label: t('nav.contact', 'Contact'), key: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href, key) => {
    setActiveNav(key);
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md py-2.5 shadow-md border-b border-gray-100' 
        : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-3 sm:py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo & Typography */}
          <a href="#hero" className="flex items-center gap-2.5 sm:gap-3 group">
            <img 
              src={logoImg} 
              alt="Custom Brand Logo" 
              className="h-9 sm:h-11 w-auto object-contain flex-shrink-0 transition-transform group-hover:scale-105"
            />
            <div className="text-left">
              <span className={`block font-serif text-lg sm:text-2xl font-extrabold tracking-tight leading-tight transition-colors ${
                isScrolled ? 'text-slate-900' : 'text-white'
              }`}>
                CEYLON HEAVEN
              </span>
              <span className={`block text-[8px] sm:text-[10px] font-bold tracking-widest uppercase -mt-0.5 ${
                isScrolled ? 'text-[#0284C7]' : 'text-cyan-300'
              }`}>
                {t('footer.brandTag', 'PREMIUM TOURS')}
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-1.5">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => handleNavClick(item.href, item.key)}
                className={`relative px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  activeNav === item.key
                    ? isScrolled 
                      ? 'bg-[#0284C7] text-white shadow-sm' 
                      : 'bg-white text-gray-900 shadow-md'
                    : isScrolled 
                      ? 'text-slate-700 hover:text-slate-900 hover:bg-slate-100' 
                      : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* CTA Action Button & Language Icon (Desktop Only) */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={onOpenBooking}
              className="bg-[#0284C7] hover:bg-[#0369A1] text-white px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold tracking-wide transition-all shadow-md hover:shadow-xl transform hover:-translate-y-0.5 flex items-center gap-2"
            >
              <Send className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span>{t('nav.bookTrip', 'Book A Trip')}</span>
            </button>

            {/* Language Selector Dropdown (Right side of Book A Trip) */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-full text-xs font-bold transition-all shadow-sm border ${
                  isScrolled
                    ? 'bg-slate-100 hover:bg-slate-200 text-slate-800 border-slate-200'
                    : 'bg-white/15 hover:bg-white/25 text-white border-white/20 backdrop-blur-md'
                }`}
                aria-label="Select Language"
              >
                <Globe className="w-4 h-4 text-cyan-400" />
                <span className="text-sm">{languageObj.flag}</span>
                <span className="uppercase tracking-wider font-extrabold">{languageObj.code}</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${langDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {langDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 mt-2 w-48 bg-white rounded-2xl shadow-2xl border border-gray-100 py-2 z-50 overflow-hidden"
                  >
                    <div className="px-3.5 py-1.5 text-[10px] font-bold text-slate-400 uppercase tracking-wider border-b border-gray-100 flex items-center gap-1.5">
                      <Globe className="w-3.5 h-3.5 text-[#0284C7]" />
                      <span>{t('nav.selectLanguage', 'Select Language')}</span>
                    </div>
                    <div className="py-1">
                      {LANGUAGES.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => {
                            changeLanguage(lang.code);
                            setLangDropdownOpen(false);
                          }}
                          className={`w-full text-left px-3.5 py-2.5 text-xs sm:text-sm font-semibold flex items-center justify-between transition-colors ${
                            currentLang === lang.code
                              ? 'bg-sky-50 text-[#0284C7] font-bold'
                              : 'text-slate-700 hover:bg-slate-50'
                          }`}
                        >
                          <span className="flex items-center gap-2.5">
                            <span className="text-base">{lang.flag}</span>
                            <span>{lang.name}</span>
                          </span>
                          {currentLang === lang.code && (
                            <Check className="w-4 h-4 text-[#0284C7]" />
                          )}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Mobile Menu & Quick Language Toggle */}
          <div className="lg:hidden flex items-center gap-2">
            {/* Quick Language Toggle Pill for Mobile */}
            <button
              onClick={() => setMobileLangOpen(!mobileLangOpen)}
              className={`flex items-center gap-1 px-2.5 py-1.5 rounded-full text-xs font-bold transition-all border ${
                isScrolled
                  ? 'bg-slate-100 text-slate-900 border-slate-200'
                  : 'bg-white/20 text-white border-white/30 backdrop-blur-md'
              }`}
            >
              <Globe className="w-3.5 h-3.5 text-cyan-300" />
              <span>{languageObj.flag}</span>
              <span className="uppercase text-[10px] font-extrabold">{languageObj.code}</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-full transition-colors focus:outline-none ${
                isScrolled ? 'text-slate-900 hover:bg-slate-100' : 'text-white hover:bg-white/20'
              }`}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Quick Mobile Language Dropdown Modal */}
      <AnimatePresence>
        {mobileLangOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden bg-white border-b border-gray-200 px-4 py-3 shadow-xl"
          >
            <div className="text-xs font-bold text-slate-500 mb-2 flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <Globe className="w-4 h-4 text-[#0284C7]" />
                {t('nav.selectLanguage', 'Select Language')}
              </span>
              <button onClick={() => setMobileLangOpen(false)}>
                <X className="w-4 h-4 text-slate-400" />
              </button>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {LANGUAGES.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    changeLanguage(lang.code);
                    setMobileLangOpen(false);
                  }}
                  className={`px-3 py-2 rounded-xl text-xs font-bold flex items-center justify-between border transition-all ${
                    currentLang === lang.code
                      ? 'bg-[#0284C7] text-white border-[#0284C7]'
                      : 'bg-slate-50 text-slate-800 border-slate-200'
                  }`}
                >
                  <span className="flex items-center gap-1.5">
                    <span>{lang.flag}</span>
                    <span>{lang.name}</span>
                  </span>
                  {currentLang === lang.code && <Check className="w-3.5 h-3.5 text-white" />}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Animated Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white/95 backdrop-blur-xl border-b border-gray-200 px-4 pt-3 pb-6 shadow-2xl space-y-3 overflow-hidden"
          >
            <div className="flex flex-col space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => handleNavClick(item.href, item.key)}
                  className={`text-left px-4 py-3 rounded-xl font-bold text-sm transition-all flex items-center justify-between ${
                    activeNav === item.key 
                      ? 'bg-[#0284C7] text-white shadow-sm' 
                      : 'text-slate-800 hover:bg-slate-100'
                  }`}
                >
                  <span>{item.label}</span>
                  <ChevronRight className="w-4 h-4 opacity-60" />
                </button>
              ))}
            </div>

            {/* Language Selector in Drawer */}
            <div className="pt-2 border-t border-gray-100">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 px-1 flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-[#0284C7]" />
                {t('nav.selectLanguage', 'Select Language')}
              </p>
              <div className="grid grid-cols-2 gap-2">
                {LANGUAGES.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      changeLanguage(lang.code);
                    }}
                    className={`px-3 py-2 rounded-xl text-xs font-bold flex items-center justify-between border transition-all ${
                      currentLang === lang.code
                        ? 'bg-[#0284C7] text-white border-[#0284C7]'
                        : 'bg-slate-50 text-slate-800 border-slate-200'
                    }`}
                  >
                    <span className="flex items-center gap-1.5">
                      <span>{lang.flag}</span>
                      <span>{lang.name}</span>
                    </span>
                    {currentLang === lang.code && <Check className="w-3.5 h-3.5 text-white" />}
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full bg-[#0284C7] text-white py-3.5 rounded-xl font-bold text-sm shadow-md flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>{t('nav.bookTrip', 'Book A Trip')}</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
