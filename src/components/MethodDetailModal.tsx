import React from 'react';
import { Bot, BrainCircuit, Briefcase, CheckCircle2, Compass, Flower2, Gem, Layers, Sparkles, X } from 'lucide-react';
import { DiagnosticMethod } from '../types';

interface MethodDetailModalProps {
  method: DiagnosticMethod | null;
  onClose: () => void;
  onOpenConsultation: () => void;
}

export const MethodDetailModal: React.FC<MethodDetailModalProps> = ({
  method,
  onClose,
  onOpenConsultation,
}) => {
  if (!method) return null;

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'BrainCircuit':
        return <BrainCircuit className="h-6 w-6 text-emerald-700" />;
      case 'Compass':
        return <Compass className="h-6 w-6 text-amber-600" />;
      case 'Layers':
        return <Layers className="h-6 w-6 text-emerald-800" />;
      case 'Flower2':
        return <Flower2 className="h-6 w-6 text-rose-600" />;
      case 'Gem':
        return <Gem className="h-6 w-6 text-amber-700" />;
      case 'Briefcase':
        return <Briefcase className="h-6 w-6 text-emerald-700" />;
      case 'Bot':
        return <Bot className="h-6 w-6 text-teal-700" />;
      default:
        return <Sparkles className="h-6 w-6 text-emerald-700" />;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-stone-900/60 p-4 backdrop-blur-sm animate-fadeIn">
      <div 
        id="method-detail-modal"
        className="relative w-full max-w-2xl rounded-2xl bg-[#FCFAF6] p-6 md:p-8 shadow-2xl border border-stone-200/90 max-h-[90vh] overflow-y-auto"
      >
        <button
          id="close-method-modal-btn"
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full p-2 text-stone-400 hover:bg-stone-100 hover:text-stone-700 transition"
          aria-label="Жабу"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="p-3 rounded-xl bg-white shadow-sm border border-stone-100">
            {getIcon(method.icon)}
          </div>
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-700">
              Ғылыми диагностикалық әдістеме
            </span>
            <h3 className="font-display text-2xl font-bold text-stone-900">
              {method.name}
            </h3>
            <p className="text-sm text-stone-500 font-medium">{method.subtitle}</p>
          </div>
        </div>

        <div className="space-y-4 text-stone-700 text-sm">
          <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-100/80">
            <h4 className="text-xs font-bold text-emerald-900 uppercase tracking-wider mb-1">
              Негізгі мақсаты:
            </h4>
            <p className="text-emerald-950 font-medium leading-relaxed">
              {method.description}
            </p>
          </div>

          <div className="bg-white p-4 rounded-xl border border-stone-200/80 shadow-sm space-y-2">
            <h4 className="text-xs font-bold text-stone-900 uppercase tracking-wider flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-emerald-600" />
              Кәсіби бағдарда қалай қолданылады:
            </h4>
            <p className="text-stone-600 leading-relaxed">
              {method.practicalApplication}
            </p>
          </div>

          <div className="bg-stone-50 p-4 rounded-xl border border-stone-200/70">
            <h4 className="text-xs font-bold text-stone-500 uppercase tracking-wider mb-1">
              Зерттеу өрісі немесе негізгі өлшемдері:
            </h4>
            <p className="text-stone-800 text-xs md:text-sm font-mono bg-white p-2.5 rounded-lg border border-stone-200/60">
              {method.sampleQuestionOrArea}
            </p>
          </div>

          <div className="text-xs text-stone-500 italic p-3 rounded-lg bg-amber-50/60 border border-amber-200/40">
            ℹ️ <span className="font-semibold text-amber-900">Маңызды қағида:</span> Диагностика нәтижесі оқушыға шектеу қоймайды, керісінше оның күшті жақтарын тануына және мамандық таңдауын саналы түрде салыстыруына ғылыми бағыт береді.
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-end gap-3 mt-6 pt-4 border-t border-stone-200">
          <button
            id="modal-consultation-trigger"
            onClick={() => {
              onClose();
              onOpenConsultation();
            }}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-emerald-800 text-white text-sm font-semibold hover:bg-emerald-900 transition shadow-sm"
          >
            Осы әдіспен диагностикадан өту
          </button>
          <button
            id="close-method-btn"
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-stone-200 text-stone-700 text-sm font-medium hover:bg-stone-100 transition"
          >
            Жабу
          </button>
        </div>
      </div>
    </div>
  );
};
