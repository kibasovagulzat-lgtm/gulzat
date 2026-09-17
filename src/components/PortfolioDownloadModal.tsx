import React from 'react';
import { Award, BookOpen, CheckCircle, Download, FileText, Printer, Sparkles, User, X } from 'lucide-react';
import { ACHIEVEMENTS, COURSES, DIRECTIONS, PERSONAL_INFO, PROJECTS } from '../data/portfolioData';

interface PortfolioDownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PortfolioDownloadModal: React.FC<PortfolioDownloadModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-stone-900/60 p-4 backdrop-blur-sm animate-fadeIn">
      <div 
        id="portfolio-dossier-modal"
        className="relative w-full max-w-3xl rounded-2xl bg-[#FCFAF6] p-6 md:p-8 shadow-2xl border border-stone-200/90 max-h-[90vh] overflow-y-auto"
      >
        <button
          id="close-dossier-btn"
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full p-2 text-stone-400 hover:bg-stone-100 hover:text-stone-700 transition"
          aria-label="Жабу"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Dossier Header */}
        <div className="border-b border-stone-200 pb-6 mb-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-2">
                <Award className="h-3.5 w-3.5 text-amber-700" />
                «Үздік педагог – 2026» сараптамалық портфолиосы
              </span>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-stone-900">
                КӘСІБИ ПОРТФОЛИО ЖӘНЕ АТТЕСТАЦИЯЛЫҚ ҚҰЖАТ
              </h2>
              <p className="text-stone-600 text-sm mt-1">
                Кибасова Гульзат Насихатовна — Кәсіби профориентолог, грант-аналитик
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button
                id="print-dossier-btn"
                onClick={() => window.print()}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-800 text-white text-xs font-semibold hover:bg-emerald-900 transition shadow-sm"
              >
                <Printer className="h-4 w-4" />
                Басып шығару / PDF
              </button>
            </div>
          </div>
        </div>

        {/* Dossier Content */}
        <div className="space-y-6 text-stone-800 text-sm">
          {/* Section 1: General Info */}
          <div className="bg-white p-5 rounded-xl border border-stone-200 shadow-sm">
            <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-800 mb-3 flex items-center gap-2">
              <User className="h-4 w-4 text-emerald-700" />
              1. Жалпы мәліметтер
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs md:text-sm">
              <div><span className="text-stone-400 font-medium">Т.А.Ә.:</span> <strong className="text-stone-900">Кибасова Гульзат Насихатовна</strong></div>
              <div><span className="text-stone-400 font-medium">Лауазымы:</span> <strong className="text-stone-900">Кәсіби профориентолог, грант-аналитик</strong></div>
              <div><span className="text-stone-400 font-medium">Білімі:</span> <strong className="text-stone-900">Техникалық ғылымдар магистрі</strong></div>
              <div><span className="text-stone-400 font-medium">Педагогикалық өтілі:</span> <strong className="text-stone-900">15 жыл</strong></div>
              <div><span className="text-stone-400 font-medium">Санаты:</span> <strong className="text-stone-900">Педагог-модератор</strong></div>
              <div><span className="text-stone-400 font-medium">Жұмыс орны:</span> <strong className="text-stone-900">№16 С.Мұқашев атындағы ЖББМ, Ақтау қаласы</strong></div>
            </div>
          </div>

          {/* Section 2: Credo */}
          <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200/60 italic text-emerald-950 font-medium">
            {PERSONAL_INFO.credo}
          </div>

          {/* Section 3: Directions */}
          <div className="bg-white p-5 rounded-xl border border-stone-200 shadow-sm">
            <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-800 mb-3 flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-emerald-700" />
              2. Негізгі кәсіби бағыттар мен қызмет саласы
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {DIRECTIONS.map((d) => (
                <div key={d.id} className="p-2.5 rounded-lg bg-stone-50 border border-stone-100 text-xs">
                  <span className="font-bold text-stone-900 block">{d.id}. {d.title}</span>
                  <span className="text-stone-600">{d.description}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Section 4: Projects */}
          <div className="bg-white p-5 rounded-xl border border-stone-200 shadow-sm">
            <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-800 mb-3 flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-emerald-700" />
              3. Авторлық және жүзеге асырылған жобалар
            </h3>
            <ul className="space-y-2 text-xs">
              {PROJECTS.map((p) => (
                <li key={p.id} className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-stone-900">{p.title}</strong> — {p.description} (Қамтылуы: {p.participants})
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 5: Qualifications */}
          <div className="bg-white p-5 rounded-xl border border-stone-200 shadow-sm">
            <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-800 mb-3 flex items-center gap-2">
              <Award className="h-4 w-4 text-emerald-700" />
              4. Біліктілікті арттыру курстары
            </h3>
            <div className="space-y-2 text-xs">
              {COURSES.map((c) => (
                <div key={c.id} className="flex justify-between items-center py-1.5 border-b border-stone-100">
                  <div>
                    <span className="font-semibold text-stone-900">{c.title}</span> ({c.organization}, {c.year})
                  </div>
                  <span className="text-emerald-800 font-bold bg-emerald-50 px-2 py-0.5 rounded text-[11px] shrink-0 ml-2">
                    {c.hours}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-stone-200 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl border border-stone-200 text-stone-700 text-sm font-medium hover:bg-stone-100 transition"
          >
            Жабу
          </button>
        </div>
      </div>
    </div>
  );
};
