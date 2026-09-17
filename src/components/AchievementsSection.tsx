import React from 'react';
import { Award, Calendar, CheckCircle2, Compass, MapPin, Sparkles, Star, Trophy } from 'lucide-react';
import { ACHIEVEMENTS } from '../data/portfolioData';

interface AchievementsSectionProps {
  onOpenPortfolio: () => void;
}

export const AchievementsSection: React.FC<AchievementsSectionProps> = ({ onOpenPortfolio }) => {
  return (
    <section id="achievements" className="py-16 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-3 border border-emerald-200/70">
            <Trophy className="h-3.5 w-3.5 text-amber-600" />
            Кәсіби мойындалу және нәтижелер
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight">
            КӘСІБИ ЖЕТІСТІКТЕР ЖӘНЕ ТӘЖІРИБЕ
          </h2>
          <p className="text-stone-600 text-sm sm:text-base mt-3">
            Педагогикалық шеберлікті шыңдау, өңірлік тәлімгерлік және «Үздік педагог – 2026» бағытындағы негізгі кезеңдер
          </p>
          <div className="mt-4 mx-auto h-1 w-20 bg-gradient-to-r from-amber-500 to-emerald-600 rounded-full" />
        </div>

        {/* Timeline / Card Stream */}
        <div className="relative border-l-2 border-emerald-800/20 ml-4 sm:ml-32 space-y-8">
          {ACHIEVEMENTS.map((ach, idx) => {
            const isBestTeacher = ach.title.includes('Үздік педагог');
            return (
              <div key={idx} id={`achievement-item-${idx}`} className="relative pl-6 sm:pl-8 group">
                {/* Timeline node icon */}
                <div 
                  className={`absolute -left-[17px] top-1.5 flex h-8 w-8 items-center justify-center rounded-full border-2 transition-transform duration-200 group-hover:scale-110 ${
                    isBestTeacher 
                      ? 'bg-amber-500 border-amber-300 text-white shadow-md' 
                      : 'bg-white border-emerald-700 text-emerald-800'
                  }`}
                >
                  {isBestTeacher ? <Star className="h-4 w-4 fill-white" /> : <Award className="h-4 w-4" />}
                </div>

                {/* Left floating year on desktop */}
                <div className="hidden sm:block absolute -left-28 top-2 text-right">
                  <span className="font-display font-bold text-lg text-emerald-950 block">
                    {ach.year}
                  </span>
                  <span className="text-[10px] uppercase font-mono tracking-wider text-amber-700 block">
                    Кезең
                  </span>
                </div>

                {/* Card */}
                <div 
                  className={`rounded-2xl p-6 sm:p-7 border transition-all duration-300 ${
                    isBestTeacher
                      ? 'bg-gradient-to-br from-amber-50/90 to-white border-amber-300 shadow-md ring-1 ring-amber-200'
                      : 'bg-white border-stone-200/90 shadow-xs hover:border-emerald-600/50 card-hover-shadow'
                  }`}
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2">
                      <span className="sm:hidden font-display font-bold text-emerald-900 text-sm">
                        {ach.year} жыл —
                      </span>
                      <span className="text-xs font-semibold px-3 py-0.5 rounded-full bg-emerald-50 text-emerald-900 border border-emerald-100">
                        {ach.badge}
                      </span>
                    </div>

                    {ach.impact && (
                      <span className="text-xs font-medium text-amber-800 bg-amber-50 px-2.5 py-0.5 rounded-md">
                        {ach.impact}
                      </span>
                    )}
                  </div>

                  <h3 className="font-display text-xl font-bold text-stone-900 mb-2">
                    {ach.title}
                  </h3>

                  <p className="text-stone-600 text-sm leading-relaxed mb-4">
                    {ach.description}
                  </p>

                  <div className="flex flex-wrap items-center justify-between gap-2 pt-3 border-t border-stone-100 text-xs text-stone-500">
                    <div className="flex items-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5 text-emerald-700" />
                      <span>{ach.location}</span>
                    </div>

                    {isBestTeacher && (
                      <button
                        onClick={onOpenPortfolio}
                        className="font-bold text-amber-800 hover:text-amber-950 flex items-center gap-1"
                      >
                        Портфолионы ашу →
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
