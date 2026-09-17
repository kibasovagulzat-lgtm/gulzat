import React, { useState } from 'react';
import { 
  Bot, 
  BrainCircuit, 
  Briefcase, 
  Compass, 
  Flower2, 
  Gem, 
  HelpCircle, 
  Info, 
  Layers, 
  Sparkles 
} from 'lucide-react';
import { DIAGNOSTIC_METHODS } from '../data/portfolioData';
import { DiagnosticMethod } from '../types';
import { MethodDetailModal } from './MethodDetailModal';

interface DiagnosticsSectionProps {
  onOpenConsultation: () => void;
}

export const DiagnosticsSection: React.FC<DiagnosticsSectionProps> = ({ onOpenConsultation }) => {
  const [selectedMethod, setSelectedMethod] = useState<DiagnosticMethod | null>(null);

  const getMethodIcon = (icon: string) => {
    switch (icon) {
      case 'BrainCircuit':
        return <BrainCircuit className="h-5 w-5 text-emerald-700" />;
      case 'Compass':
        return <Compass className="h-5 w-5 text-amber-600" />;
      case 'Layers':
        return <Layers className="h-5 w-5 text-emerald-800" />;
      case 'Flower2':
        return <Flower2 className="h-5 w-5 text-rose-600" />;
      case 'Gem':
        return <Gem className="h-5 w-5 text-amber-700" />;
      case 'Briefcase':
        return <Briefcase className="h-5 w-5 text-emerald-700" />;
      case 'Bot':
        return <Bot className="h-5 w-5 text-teal-700" />;
      default:
        return <Sparkles className="h-5 w-5 text-emerald-700" />;
    }
  };

  return (
    <section id="diagnostics" className="py-16 md:py-24 bg-[#FAF8F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-3 border border-emerald-200/70">
            <Compass className="h-3.5 w-3.5 text-amber-600" />
            Ғылыми және заманауи әдіснама
          </div>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-stone-900 tracking-tight leading-snug">
            ОҚУШЫНЫ ТАНУ → БАҒЫТЫН АНЫҚТАУ → БОЛАШАҒЫН ЖОСПАРЛАУ
          </h2>
          <p className="text-stone-600 text-sm sm:text-base mt-3 max-w-2xl mx-auto">
            Диагностика — оқушының табиғи қызығушылығы мен қабілетін объективті саралап, болашақ кәсіби жолын саналы таңдауға негіз болатын ғылыми құрал.
          </p>
          <div className="mt-4 mx-auto h-1 w-20 bg-gradient-to-r from-amber-500 to-emerald-600 rounded-full" />
        </div>

        {/* 7 Diagnostic Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {DIAGNOSTIC_METHODS.map((method, idx) => (
            <div
              key={method.id}
              id={`method-card-${method.id}`}
              onClick={() => setSelectedMethod(method)}
              className="group cursor-pointer rounded-2xl bg-white p-5 sm:p-6 border border-stone-200/90 shadow-xs hover:border-emerald-600/60 card-hover-shadow transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-100 group-hover:bg-amber-50 group-hover:border-amber-200 transition-colors">
                    {getMethodIcon(method.icon)}
                  </div>
                  <span className="text-[11px] font-mono font-bold text-stone-400 group-hover:text-amber-700 transition-colors">
                    Әдіс 0{idx + 1}
                  </span>
                </div>

                <h3 className="font-display text-lg font-bold text-stone-900 group-hover:text-emerald-900 transition-colors mb-1">
                  {method.name}
                </h3>
                <p className="text-xs font-semibold text-amber-800 mb-3">
                  {method.subtitle}
                </p>

                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-4">
                  {method.description}
                </p>
              </div>

              <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                <span className="text-xs font-bold text-emerald-800 group-hover:text-emerald-950 flex items-center gap-1">
                  Толығырақ сараптау
                  <span className="text-amber-600">→</span>
                </span>
                <span className="text-[11px] text-stone-400">
                  Ғылыми негіз
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Scientific Disclaimer Note from Prompt */}
        <div className="mt-10 rounded-2xl bg-white p-5 border border-amber-200/70 shadow-xs flex items-start gap-3.5 max-w-4xl mx-auto">
          <Info className="h-5 w-5 text-amber-700 shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm text-stone-600 leading-relaxed">
            <strong className="text-stone-900 font-semibold">Әдіснамалық нақтылық пен этика:</strong> Барлық диагностикалық әдістер оқушының тұлғалық қызығушылығы мен бейімділігін тануға бағытталған практикалық құралдар болып табылады. Оқушының таңдауына шектеу қойылмайды; негізгі мақсат — өзін-өзі жан-жақты тануы мен саналы шешім қабылдауына қолдау көрсету.
          </div>
        </div>
      </div>

      {/* Interactive Detail Modal */}
      <MethodDetailModal
        method={selectedMethod}
        onClose={() => setSelectedMethod(null)}
        onOpenConsultation={onOpenConsultation}
      />
    </section>
  );
};
