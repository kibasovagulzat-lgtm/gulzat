import React, { useState } from 'react';
import { 
  ArrowRight, 
  CheckCircle2, 
  Compass, 
  FileCheck, 
  Layers, 
  Sparkles, 
  Workflow 
} from 'lucide-react';
import { PROCESS_STEPS } from '../data/portfolioData';

interface ProcessTimelineProps {
  onOpenConsultation: () => void;
}

export const ProcessTimeline: React.FC<ProcessTimelineProps> = ({ onOpenConsultation }) => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const currentStep = PROCESS_STEPS[activeStepIndex];

  return (
    <section id="process" className="py-16 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-3 border border-emerald-200/70">
            <Workflow className="h-3.5 w-3.5 text-amber-600" />
            7 сатылы жүйелі тәсіл
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight">
            ЖҰМЫС ЖҮЙЕСІ ЖӘНЕ ҚАДАМДАР
          </h2>
          <p className="text-stone-600 text-sm sm:text-base mt-3">
            Оқушының өзін тануынан бастап, бекітілген жеке кәсіби маршрутқа дейінгі тұтас бағдар жолы
          </p>
          <div className="mt-4 mx-auto h-1 w-20 bg-gradient-to-r from-amber-500 to-emerald-600 rounded-full" />
        </div>

        {/* Steps Selector Pills / Horizontal Roadmap Bar */}
        <div className="mb-10 overflow-x-auto pb-3">
          <div className="flex items-center justify-between min-w-[720px] bg-white p-2 rounded-2xl border border-stone-200 shadow-xs">
            {PROCESS_STEPS.map((s, idx) => {
              const isSelected = activeStepIndex === idx;
              return (
                <button
                  key={s.step}
                  id={`process-step-btn-${idx}`}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`flex-1 flex flex-col items-center py-2.5 px-2 rounded-xl text-center transition-all duration-200 ${
                    isSelected
                      ? 'bg-gradient-to-br from-emerald-800 to-emerald-900 text-white shadow-sm font-bold'
                      : 'text-stone-600 hover:bg-stone-50 hover:text-emerald-900'
                  }`}
                >
                  <span className={`text-[11px] font-mono tracking-wider block ${isSelected ? 'text-amber-300' : 'text-stone-400'}`}>
                    Қадам {s.step}
                  </span>
                  <span className="text-xs font-medium truncate max-w-[95px] mt-0.5">
                    {s.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Step Showcase Card */}
        <div className="rounded-3xl bg-white border border-stone-200/90 p-6 sm:p-10 shadow-sm relative overflow-hidden">
          {/* Subtle background number watermark */}
          <span className="absolute -right-6 -bottom-10 font-display font-black text-8xl md:text-9xl text-stone-100/80 pointer-events-none select-none">
            {currentStep.step}
          </span>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Left Description */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 text-amber-900 text-xs font-bold border border-amber-200/80">
                <Compass className="h-3.5 w-3.5 text-amber-700" />
                Кезең {currentStep.step} / 07
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-bold text-stone-900">
                {currentStep.step} — {currentStep.title}
              </h3>

              <p className="text-sm font-semibold text-emerald-800">
                {currentStep.tagline}
              </p>

              <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
                {currentStep.description}
              </p>

              {/* Tools tags */}
              <div className="pt-2">
                <span className="text-xs font-bold uppercase tracking-wider text-stone-500 block mb-2">
                  Қолданылатын әдістер мен құралдар:
                </span>
                <div className="flex flex-wrap gap-2">
                  {currentStep.tools.map((tool, tIdx) => (
                    <span 
                      key={tIdx}
                      className="px-3 py-1 rounded-lg bg-stone-100 text-stone-800 text-xs font-medium border border-stone-200/60"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Deliverable Highlight */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-gradient-to-br from-emerald-50 to-[#FAF9F5] p-6 border border-emerald-200/80 space-y-4 shadow-xs">
                <div className="flex items-center gap-2 text-emerald-900 text-xs font-bold uppercase tracking-wider">
                  <FileCheck className="h-4 w-4 text-emerald-700" />
                  Бұл кезеңнің нақты нәтижесі:
                </div>

                <div className="p-4 rounded-xl bg-white border border-emerald-100 shadow-inner">
                  <h4 className="font-display text-base sm:text-lg font-bold text-stone-900 mb-1">
                    {currentStep.deliverable}
                  </h4>
                  <p className="text-xs text-stone-500">
                    Оқушының қолына нақты құжат немесе талдау парағы ретінде табысталады.
                  </p>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <button
                    disabled={activeStepIndex === 0}
                    onClick={() => setActiveStepIndex((prev) => Math.max(0, prev - 1))}
                    className="text-xs font-semibold text-stone-500 hover:text-stone-900 disabled:opacity-40"
                  >
                    ← Алдыңғы кезең
                  </button>

                  {activeStepIndex < PROCESS_STEPS.length - 1 ? (
                    <button
                      onClick={() => setActiveStepIndex((prev) => Math.min(PROCESS_STEPS.length - 1, prev + 1))}
                      className="text-xs font-bold text-emerald-800 hover:text-emerald-950 flex items-center gap-1"
                    >
                      Келесі кезең →
                    </button>
                  ) : (
                    <button
                      onClick={onOpenConsultation}
                      className="text-xs font-bold text-amber-800 hover:text-amber-950 flex items-center gap-1"
                    >
                      Кеңес алумен бекіту ✨
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
