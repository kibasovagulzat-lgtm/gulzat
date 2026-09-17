import React, { useEffect, useState } from 'react';
import { 
  Award, 
  CheckCircle2, 
  Compass, 
  GraduationCap, 
  Quote, 
  Sparkles, 
  TrendingUp, 
  UserCheck, 
  Users 
} from 'lucide-react';
import { STUDENT_METRICS, STUDENT_STORIES } from '../data/portfolioData';

// Hook for animated counting
const useCounter = (end: number, duration: number = 1600) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const stepTime = Math.abs(Math.floor(duration / end));
    const timer = setInterval(() => {
      start += Math.ceil(end / 40);
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, stepTime || 20);

    return () => clearInterval(timer);
  }, [end, duration]);

  return count;
};

interface MetricCardProps {
  label: string;
  value: number;
  suffix: string;
  description: string;
}

const MetricCard: React.FC<MetricCardProps> = ({ label, value, suffix, description }) => {
  const animatedValue = useCounter(value);

  return (
    <div className="bg-white rounded-2xl p-6 border border-stone-200/90 shadow-xs text-center space-y-2 hover:border-emerald-600/50 card-hover-shadow transition-all duration-200">
      <div className="font-display text-4xl sm:text-5xl font-bold text-emerald-950">
        <span>{animatedValue}</span>
        <span className="text-amber-500 font-normal">{suffix}</span>
      </div>
      <h4 className="font-bold text-stone-900 text-sm sm:text-base">
        {label}
      </h4>
      <p className="text-xs text-stone-500 leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export const StudentOutcomesSection: React.FC = () => {
  return (
    <section id="results" className="py-16 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-3 border border-emerald-200/70">
            <Users className="h-3.5 w-3.5 text-amber-600" />
            Өлшенетін кәсіби тиімділік
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight">
            ОҚУШЫЛАР НӘТИЖЕСІ
          </h2>
          <p className="text-stone-800 font-serif italic text-lg sm:text-xl mt-4 max-w-2xl mx-auto">
            «Кәсіби бағдардың нәтижесі — оқушының өз таңдауына жауапкершілікпен қарауы.»
          </p>
          <div className="mt-4 mx-auto h-1 w-20 bg-gradient-to-r from-amber-500 to-emerald-600 rounded-full" />
        </div>

        {/* Animated Metrics Grid (Exact metrics without fabricated numbers) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-16">
          {STUDENT_METRICS.map((metric, idx) => (
            <MetricCard
              key={idx}
              label={metric.label}
              value={metric.value}
              suffix={metric.suffix}
              description={metric.description}
            />
          ))}
        </div>

        {/* Real Student Cases & Stories */}
        <div className="rounded-3xl bg-gradient-to-br from-emerald-950 to-stone-900 p-8 sm:p-12 text-white shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-8 border-b border-emerald-800/80">
            <div>
              <span className="text-xs font-mono font-bold text-amber-300 uppercase tracking-widest block">
                СӘТТІ КӘСІБИ ТРАЕКТОРИЯЛАР
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mt-1">
                Оқушылардың жеке кәсіби маршрут тарихы
              </h3>
            </div>
            <span className="text-xs text-stone-300 font-medium bg-emerald-900/60 px-3 py-1.5 rounded-full border border-emerald-700/60">
              №16 мектеп түлектері
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {STUDENT_STORIES.map((story) => (
              <div 
                key={story.id}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 flex flex-col justify-between hover:bg-white/15 transition duration-300"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-amber-300 text-sm">
                      {story.studentName}
                    </span>
                    <span className="text-xs text-stone-300 font-mono">
                      {story.schoolGrade}
                    </span>
                  </div>

                  <div className="text-xs space-y-1.5 text-stone-200">
                    <p><strong className="text-white">Бастапқы жағдай:</strong> {story.initialSituation}</p>
                    <p><strong className="text-amber-200">Диагностика қорытындысы:</strong> {story.diagnosticResult}</p>
                    <p><strong className="text-emerald-300">Таңдалған сала:</strong> {story.chosenField}</p>
                    <p><strong className="text-amber-300">Нәтиже:</strong> {story.universityOrGrant}</p>
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-white/10 text-xs text-stone-300 italic">
                  <Quote className="h-4 w-4 text-amber-400 mb-1 opacity-70" />
                  {story.quote}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
