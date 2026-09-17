import React, { useState, useEffect } from 'react';
import { Compass, Menu, Sparkles, X, PhoneCall, FileText } from 'lucide-react';
import { NAV_ITEMS } from '../data/portfolioData';

interface HeaderProps {
  activeSection: string;
  onOpenConsultation: () => void;
  onOpenPortfolio: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeSection,
  onOpenConsultation,
  onOpenPortfolio,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      id="main-header"
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF9F5]/90 backdrop-blur-md shadow-sm border-b border-amber-200/40 py-2.5'
          : 'bg-[#FAF9F5]/70 backdrop-blur-sm py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('hero');
            }}
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="Басты бетке өту"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-800 to-emerald-950 flex items-center justify-center text-amber-300 shadow-md group-hover:scale-105 transition-transform duration-200">
              <Compass className="w-5 h-5 text-amber-300 animate-[spin_24s_linear_infinite]" />
            </div>
            <div>
              <span className="font-display font-bold tracking-wider text-base md:text-lg text-emerald-950 block leading-tight group-hover:text-emerald-800 transition-colors">
                GULZAT KIBASOVA
              </span>
              <span className="text-[10px] md:text-[11px] font-bold tracking-widest text-amber-700 uppercase block">
                КӘСІБИ ПРОФОРИЕНТОЛОГ
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center space-x-1 lg:space-x-1.5" aria-label="Басты мәзір">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-link-${item.id}`}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium tracking-wide transition-all duration-150 relative ${
                    isActive
                      ? 'text-emerald-900 font-semibold bg-emerald-50/80'
                      : 'text-stone-600 hover:text-emerald-800 hover:bg-stone-100/60'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-gradient-to-r from-amber-500 to-emerald-600 rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center gap-2.5">
            <button
              id="header-portfolio-btn"
              onClick={onOpenPortfolio}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-emerald-900 bg-white border border-emerald-200/80 hover:bg-emerald-50/60 hover:border-emerald-300 transition shadow-xs"
            >
              <FileText className="w-3.5 h-3.5 text-amber-600" />
              Портфолио
            </button>
            <button
              id="header-consultation-btn"
              onClick={onOpenConsultation}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-emerald-800 to-emerald-900 hover:from-emerald-700 hover:to-emerald-800 transition shadow-sm hover:shadow-md"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              Кеңес алу
            </button>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex items-center gap-2 xl:hidden">
            <button
              id="header-mobile-consult-btn"
              onClick={onOpenConsultation}
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-emerald-800 hover:bg-emerald-900 transition"
            >
              Кеңес алу
            </button>
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-stone-700 hover:bg-stone-100 focus:outline-none"
              aria-label="Мәзірді ашу"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#FCFAF6] border-b border-stone-200/90 shadow-lg px-4 pt-3 pb-6 animate-fadeIn">
          <div className="grid grid-cols-2 gap-1.5 mb-4">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  id={`mobile-nav-${item.id}`}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-left px-3 py-2 rounded-lg text-xs font-medium transition ${
                    isActive
                      ? 'bg-emerald-100/70 text-emerald-950 font-bold border-l-2 border-emerald-700'
                      : 'text-stone-700 hover:bg-stone-100'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          <div className="flex flex-col gap-2 pt-2 border-t border-stone-200">
            <button
              id="mobile-view-dossier-btn"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPortfolio();
              }}
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-stone-300 text-stone-800 text-xs font-semibold bg-white"
            >
              <FileText className="w-4 h-4 text-amber-600" />
              «Үздік педагог – 2026» портфолиосын көру
            </button>
            <button
              id="mobile-book-consultation-btn"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-800 text-white text-xs font-semibold shadow-sm"
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
              Кәсіби кеңеске жазылу
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
