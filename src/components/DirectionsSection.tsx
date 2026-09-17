import React from 'react';
import { 
  Brain, 
  Briefcase, 
  Check, 
  Compass, 
  Route, 
  Sparkles, 
  Target, 
  TrendingUp 
} from 'lucide-react';
import { DIRECTIONS } from '../data/portfolioData';

interface DirectionsSectionProps {
  onSelectDirection: (directionTitle: string) => void;
  onScrollToSection: (id: string) => void;
}

export const DirectionsSection: React.FC<DirectionsSectionProps> = ({
  onSelectDirection,
  onScrollToSection,
}) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Brain':
        return <Brain className="h-6 w-6 text-emerald-700" />;
      case 'Target':
        return <Target className="h-6 w-6 text-amber-600" />;
      case 'Route':
        return <Route className="h-6 w-6 text-emerald-800" />;
      case 'TrendingUp':
        return <TrendingUp className="h-6 w-6 text-amber-700" />;
      case 'Briefcase':
        return <Briefcase className="h-6 w-6 text-emerald-700" />;
      case 'Sparkles':
        return <Sparkles className="h-6 w-6 text-teal-600" />;
      default:
        return <Compass className="h-6 w-6 text-emerald-700" />;
    }
  };

  return (
    <section id="directions" className="py-16 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-3 border border-emerald-200/70">
            <Compass className="h-3.5 w-3.5 text-amber-600" />
            Кешенді қызметтер жүйесі
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight">
            КӘСІБИ БАҒЫТТАР
          </h2>
          <p className="text-stone-600 text-base sm:text-lg mt-3">
            Оқушының жеке тұлғалық әлеуетін толық ашуға және саналы мамандық таңдауына арналған 6 негізгі бағыт
          </p>
          <div className="mt-4 mx-auto h-1 w-20 bg-gradient-to-r from-amber-500 to-emerald-600 rounded-full" />
        </div>

        {/* 6 Large Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DIRECTIONS.map((dir) => (
            <div
              key={dir.id}
              id={`direction-card-${dir.id}`}
              className="group rounded-2xl bg-white p-7 border border-stone-200/90 shadow-xs hover:border-emerald-500/60 card-hover-shadow transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100/80 flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                    {getIcon(dir.iconName)}
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-stone-100 text-stone-600 group-hover:bg-amber-50 group-hover:text-amber-800 transition-colors">
                    {dir.badge}
                  </span>
                </div>

                <div className="flex items-center gap-2 mb-2">
                  <span className="font-mono text-xs font-bold text-emerald-800 bg-emerald-50/80 px-2 py-0.5 rounded">
                    0{dir.id}
                  </span>
                  <h3 className="font-display text-xl font-bold text-stone-900 group-hover:text-emerald-900 transition-colors">
                    {dir.title}
                  </h3>
                </div>

                <p className="text-stone-600 text-sm leading-relaxed mb-6">
                  {dir.description}
                </p>

                {/* Key Points */}
                <div className="space-y-2 border-t border-stone-100 pt-4 mb-4">
                  {dir.keyPoints.map((point, pIdx) => (
                    <div key={pIdx} className="flex items-center gap-2 text-xs text-stone-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                <button
                  id={`consult-for-dir-${dir.id}`}
                  onClick={() => onSelectDirection(dir.title)}
                  className="text-xs font-bold text-emerald-800 hover:text-emerald-950 flex items-center gap-1.5 group-hover:translate-x-0.5 transition-transform"
                >
                  Кеңес алу
                  <span className="text-amber-600">→</span>
                </button>
                <span className="text-[11px] text-stone-400 font-mono">
                  №16 мектеп
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
