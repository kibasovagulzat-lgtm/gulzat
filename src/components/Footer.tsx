import React from 'react';
import { ArrowUp, Award, Compass, Heart, Instagram, Mail, MapPin, Sparkles } from 'lucide-react';
import { NAV_ITEMS, PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  onScrollToSection: (id: string) => void;
  onOpenConsultation: () => void;
  onOpenPortfolio: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onScrollToSection,
  onOpenConsultation,
  onOpenPortfolio,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-[#1C2621] text-stone-300 pt-16 pb-12 border-t border-emerald-900/60 relative overflow-hidden">
      {/* Decorative compass watermark */}
      <Compass className="absolute right-6 -bottom-10 w-64 h-64 text-emerald-800/10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-stone-800">
          {/* Col 1: Identity */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-700 to-emerald-900 flex items-center justify-center text-amber-300 shadow-md">
                <Compass className="w-5 h-5 text-amber-300" />
              </div>
              <div>
                <span className="font-display font-bold tracking-wider text-lg text-white block leading-tight">
                  {PERSONAL_INFO.fullName}
                </span>
                <span className="text-xs font-bold tracking-widest text-amber-400 uppercase block">
                  {PERSONAL_INFO.profession}
                </span>
              </div>
            </div>

            <p className="font-serif italic text-base text-stone-300 leading-relaxed max-w-md pt-2">
              «Болашаққа бағыт — саналы таңдаудан басталады.»
            </p>

            <p className="text-xs text-stone-400 leading-relaxed max-w-md">
              15 жылдық педагогикалық тәжірибе, техникалық ғылымдар магистрі, педагог-модератор. Мектеп оқушыларына кәсіби бағдар беру, кәсіби диагностика, мамандық таңдау, гранттық аналитика.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 text-amber-300 border border-emerald-800/80 text-xs font-medium">
              <Award className="h-3.5 w-3.5" />
              «Үздік педагог – 2026» портфолиосы
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold tracking-wider uppercase text-amber-400">
              Сайт бөлімдері
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onScrollToSection(item.id)}
                  className="text-left text-stone-300 hover:text-amber-300 transition py-1"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Col 3: Contact Details */}
          <div className="lg:col-span-3 space-y-3 text-xs">
            <h4 className="text-xs font-bold tracking-wider uppercase text-amber-400">
              Мекенжай & Ресми байланыс
            </h4>
            <div className="space-y-2 text-stone-300">
              <p className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{PERSONAL_INFO.city}, {PERSONAL_INFO.school}</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-amber-400 shrink-0" />
                <span>{PERSONAL_INFO.email}</span>
              </p>
              <p className="flex items-center gap-2">
                <Instagram className="h-4 w-4 text-rose-400 shrink-0" />
                <a 
                  href="https://instagram.com/gulzat.nasikhatovna" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-amber-300 transition"
                >
                  {PERSONAL_INFO.instagram}
                </a>
              </p>
            </div>

            <div className="pt-3">
              <button
                onClick={onOpenConsultation}
                className="w-full py-2 px-3 rounded-xl bg-emerald-800 hover:bg-emerald-700 text-white font-semibold text-xs transition shadow-sm"
              >
                Кәсіби кеңеске жазылу
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <p>
            © {new Date().getFullYear()} Кибасова Гульзат Насихатовна. Барлық құқықтар қорғалған.
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-300 transition"
          >
            <span>Жоғарыға оралу</span>
            <ArrowUp className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
