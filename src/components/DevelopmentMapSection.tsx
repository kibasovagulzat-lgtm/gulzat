import React from 'react';
import { 
  ArrowUpRight, 
  CheckCircle2, 
  Compass, 
  Flame, 
  Milestone, 
  Route, 
  Sparkles, 
  Target 
} from 'lucide-react';
import { DEVELOPMENT_VECTORS } from '../data/portfolioData';

export const DevelopmentMapSection: React.FC = () => {
  return (
    <section id="roadmap" className="py-16 md:py-24 bg-[#FAF9F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-3 border border-emerald-200/70">
            <Route className="h-3.5 w-3.5 text-amber-600" />
            Стратегиялық болашақ көкжиегі
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight">
            2026–2027 КӘСІБИ ДАМУ КАРТАСЫ
          </h2>
          <p className="text-stone-600 text-sm sm:text-base mt-3">
            Педагог-профориентологтың алдағы 2 жылдық стратегиялық 4 негізгі даму бағыты мен нақты мақсатты көрсеткіштері
          </p>
          <div className="mt-4 mx-auto h-1 w-20 bg-gradient-to-r from-amber-500 to-emerald-600 rounded-full" />
        </div>

        {/* 4 Strategic Vectors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {DEVELOPMENT_VECTORS.map((vec) => (
            <div
              key={vec.number}
              id={`dev-vector-${vec.number}`}
              className="bg-white rounded-3xl p-7 sm:p-8 border border-stone-200/90 shadow-xs hover:border-emerald-600/60 card-hover-shadow transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-display font-black text-2xl sm:text-3xl text-amber-600">
                    {vec.number}
                  </span>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-50 text-emerald-900 border border-emerald-100">
                    Стратегиялық вектор
                  </span>
                </div>

                <h3 className="font-display text-xl sm:text-2xl font-bold text-stone-900 mb-2 leading-snug">
                  {vec.title}
                </h3>

                <p className="text-xs sm:text-sm text-emerald-900 font-semibold mb-5 bg-emerald-50/60 p-3 rounded-xl border border-emerald-100/60">
                  🎯 Мақсат: {vec.target}
                </p>

                <div className="space-y-2.5 mb-6">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-stone-400 block">
                    Негізгі бастамалар мен іс-шаралар:
                  </span>
                  {vec.initiatives.map((init, iIdx) => (
                    <div key={iIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-700">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{init}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-stone-100 flex items-center justify-between bg-stone-50/80 -mx-7 -mb-7 p-4 sm:-mx-8 sm:-mb-8 sm:p-5 rounded-b-3xl">
                <span className="text-xs font-bold text-stone-500 uppercase tracking-wider">
                  Күтілетін KPI:
                </span>
                <span className="text-xs font-bold text-emerald-900 text-right">
                  {vec.kpi}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
