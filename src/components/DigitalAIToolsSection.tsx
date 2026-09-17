import React from 'react';
import { 
  Activity, 
  Bot, 
  CheckSquare, 
  Cpu, 
  Layers, 
  Navigation, 
  Palette, 
  Sparkles, 
  Wand2 
} from 'lucide-react';
import { DIGITAL_TOOLS } from '../data/portfolioData';

export const DigitalAIToolsSection: React.FC = () => {
  const getToolIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles':
        return <Sparkles className="h-6 w-6 text-emerald-700" />;
      case 'Cpu':
        return <Cpu className="h-6 w-6 text-amber-600" />;
      case 'Palette':
        return <Palette className="h-6 w-6 text-emerald-800" />;
      case 'CheckSquare':
        return <CheckSquare className="h-6 w-6 text-emerald-600" />;
      case 'Navigation':
        return <Navigation className="h-6 w-6 text-amber-700" />;
      case 'Activity':
        return <Activity className="h-6 w-6 text-teal-600" />;
      case 'Wand2':
        return <Wand2 className="h-6 w-6 text-amber-600" />;
      default:
        return <Bot className="h-6 w-6 text-emerald-700" />;
    }
  };

  return (
    <section id="digital-ai" className="py-16 md:py-24 bg-[#F8F7F2]/80 border-t border-b border-stone-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-3 border border-emerald-200/70">
            <Cpu className="h-3.5 w-3.5 text-amber-600" />
            Инновациялық технологиялар мен цифрлық платформалар
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight">
            ЦИФРЛЫҚ ЖӘНЕ ЖИ ҚҰРАЛДАРЫ
          </h2>
          <p className="text-stone-600 text-sm sm:text-base mt-3">
            Заманауи жасанды интеллект пен цифрлық сервистерді кәсіби бағдар беру, диагностика және аналитика процесіне тиімді интеграциялау
          </p>
          <div className="mt-4 mx-auto h-1 w-20 bg-gradient-to-r from-amber-500 to-emerald-600 rounded-full" />
        </div>

        {/* 7 Digital AI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {DIGITAL_TOOLS.map((tool, idx) => (
            <div
              key={idx}
              id={`ai-tool-card-${idx}`}
              className="bg-white rounded-2xl p-6 border border-stone-200/90 shadow-xs hover:border-emerald-600/60 card-hover-shadow transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center">
                    {getToolIcon(tool.iconName)}
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-stone-100 text-stone-600">
                    {tool.category}
                  </span>
                </div>

                <h3 className="font-display text-xl font-bold text-stone-900 mb-1">
                  {tool.name}
                </h3>
                <span className="text-xs font-semibold text-emerald-800 block mb-3">
                  {tool.badge}
                </span>

                <div className="space-y-2 text-xs sm:text-sm text-stone-600 mb-4">
                  <p className="leading-relaxed">
                    <strong className="text-stone-800">Маңызы:</strong> {tool.roleInGuidance}
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-stone-100">
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-800 block mb-1">
                  Практикалық қолданысы:
                </span>
                <p className="text-xs text-stone-600 italic bg-amber-50/50 p-2.5 rounded-lg border border-amber-100">
                  {tool.practicalUseCase}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
