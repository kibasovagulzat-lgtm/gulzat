import React from 'react';
import { 
  Award, 
  BookOpen, 
  Building2, 
  CheckCircle2, 
  Compass, 
  GraduationCap, 
  HeartHandshake, 
  MapPin, 
  Quote, 
  ShieldCheck, 
  Sparkles, 
  User, 
  Users 
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface AboutSectionProps {
  onOpenPortfolio: () => void;
  onOpenConsultation: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  onOpenPortfolio,
  onOpenConsultation,
}) => {
  return (
    <section id="about" className="py-16 md:py-24 bg-[#F7F5EE]/60 border-t border-b border-stone-200/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-3 border border-emerald-200/70">
            <User className="h-3.5 w-3.5 text-amber-600" />
            Маманның тұлғалық және кәсіби бейнесі
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight">
            КӘСІБИ БАҒДАР — САНАЛЫ ТАҢДАУДАН БАСТАЛАДЫ
          </h2>
          <div className="mt-3 mx-auto h-1 w-20 bg-gradient-to-r from-amber-500 to-emerald-600 rounded-full" />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left: Professional Statement & Methodology */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-stone-200/90 shadow-sm space-y-4">
              <h3 className="font-display text-xl font-bold text-emerald-950 flex items-center gap-2.5">
                <Compass className="h-5 w-5 text-amber-600" />
                Кәсіби миссия және көзқарас
              </h3>
              
              <p className="text-stone-700 text-base leading-relaxed">
                Менің кәсіби мақсатым — әр оқушының өзін тануына, қабілеті мен қызығушылығын анықтауына және болашақ мамандығын саналы таңдауына жағдай жасау.
              </p>

              <p className="text-stone-700 text-base leading-relaxed">
                Кәсіби бағдар беру барысында заманауи диагностикалық әдістерді, цифрлық платформаларды, жасанды интеллект құралдарын, кәсіби сынамаларды және жеке консультация әдістерін қолданамын.
              </p>

              <p className="text-stone-700 text-base leading-relaxed font-medium text-emerald-950 bg-emerald-50/70 p-4 rounded-xl border border-emerald-100/90">
                «Оқушыға дайын мамандық ұсынудан бұрын оның тұлғалық ерекшелігін, қабілетін, қызығушылығын, құндылықтарын және кәсіби мақсаттарын зерттеуге мән беремін.»
              </p>
            </div>

            {/* School & Professional Creed */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* School Card */}
              <div className="bg-white p-5 rounded-2xl border border-stone-200/90 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold text-amber-700 uppercase tracking-wider mb-2">
                    <Building2 className="h-4 w-4" />
                    Мектеп
                  </div>
                  <h4 className="font-bold text-stone-900 text-sm sm:text-base leading-snug">
                    №16 С.Мұқашев атындағы жалпы білім беретін мектеп
                  </h4>
                </div>
                <div className="mt-4 flex items-center gap-1.5 text-xs text-stone-500">
                  <MapPin className="h-3.5 w-3.5 text-emerald-600" />
                  Ақтау қаласы, Маңғыстау облысы
                </div>
              </div>

              {/* Best Teacher 2026 Card */}
              <div className="bg-gradient-to-br from-amber-50 to-amber-100/60 p-5 rounded-2xl border border-amber-200 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold text-amber-800 uppercase tracking-wider mb-2">
                    <Award className="h-4 w-4 text-amber-600" />
                    Мәртебе
                  </div>
                  <h4 className="font-bold text-stone-900 text-sm sm:text-base leading-snug">
                    «Үздік педагог – 2026» портфолиосы
                  </h4>
                  <p className="text-xs text-stone-600 mt-1">
                    Кәсіби бағдар саласындағы үздік өңірлік тәжірибе үлгісі.
                  </p>
                </div>
                <button
                  id="view-dossier-from-about-btn"
                  onClick={onOpenPortfolio}
                  className="mt-3 text-xs font-bold text-amber-900 hover:text-amber-950 flex items-center gap-1 underline underline-offset-2"
                >
                  Портфолио материалын қарау →
                </button>
              </div>
            </div>

            {/* Professional Credo Block */}
            <div className="relative rounded-2xl bg-white p-6 border-l-4 border-emerald-700 border-t border-r border-b border-stone-200/90 shadow-sm">
              <Quote className="absolute right-4 top-4 h-12 w-12 text-stone-200/60 pointer-events-none" />
              <span className="text-xs font-bold uppercase tracking-wider text-amber-700 block mb-1">
                КӘСІБИ ҰСТАНЫМ
              </span>
              <p className="font-display text-lg text-stone-900 italic leading-relaxed">
                {PERSONAL_INFO.credo}
              </p>
            </div>
          </div>

          {/* Right: Personal Data Cards & Highlights */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-white p-6 sm:p-7 rounded-2xl border border-stone-200/90 shadow-sm">
              <h3 className="font-display text-lg font-bold text-stone-900 mb-4 pb-3 border-b border-stone-100 flex items-center justify-between">
                <span>Жеке ақпарат карточкасы</span>
                <span className="text-xs font-mono font-medium text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded">
                  Ресми деректер
                </span>
              </h3>

              <div className="space-y-3.5 text-sm">
                <div className="flex items-start justify-between py-2 border-b border-stone-100">
                  <span className="text-stone-500 text-xs font-medium">Аты-жөні:</span>
                  <span className="font-bold text-stone-900 text-right text-xs sm:text-sm">
                    {PERSONAL_INFO.fullName}
                  </span>
                </div>

                <div className="flex items-start justify-between py-2 border-b border-stone-100">
                  <span className="text-stone-500 text-xs font-medium">Мамандығы:</span>
                  <span className="font-bold text-emerald-800 text-right text-xs sm:text-sm">
                    {PERSONAL_INFO.profession}
                  </span>
                </div>

                <div className="flex items-start justify-between py-2 border-b border-stone-100">
                  <span className="text-stone-500 text-xs font-medium">Білімі:</span>
                  <span className="font-semibold text-stone-900 text-right text-xs sm:text-sm">
                    {PERSONAL_INFO.degree}
                  </span>
                </div>

                <div className="flex items-start justify-between py-2 border-b border-stone-100">
                  <span className="text-stone-500 text-xs font-medium">Педагогикалық тәжірибе:</span>
                  <span className="font-bold text-amber-700 text-right text-xs sm:text-sm">
                    15 жыл
                  </span>
                </div>

                <div className="flex items-start justify-between py-2 border-b border-stone-100">
                  <span className="text-stone-500 text-xs font-medium">Санаты:</span>
                  <span className="font-semibold text-emerald-900 bg-emerald-50 px-2.5 py-0.5 rounded-full text-xs text-right">
                    {PERSONAL_INFO.category}
                  </span>
                </div>

                <div className="py-2">
                  <span className="text-stone-500 text-xs font-medium block mb-1">
                    Кәсіби бағыты:
                  </span>
                  <p className="font-medium text-stone-800 text-xs leading-relaxed bg-stone-50 p-2.5 rounded-xl border border-stone-200/60">
                    Профориентация • Кәсіби диагностика • Грант аналитикасы
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-100">
                <button
                  id="about-request-consultation-btn"
                  onClick={onOpenConsultation}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white font-semibold text-sm transition shadow-xs"
                >
                  <Sparkles className="h-4 w-4 text-amber-300" />
                  Маманмен жеке кеңеске жазылу
                </button>
              </div>
            </div>

            {/* Quick Principles card */}
            <div className="p-5 rounded-2xl bg-white border border-stone-200/90 shadow-xs space-y-2.5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                Педагог-профориентологтың негізгі қағидалары:
              </h4>
              <ul className="space-y-2 text-xs text-stone-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Тұлғалық тәсіл:</strong> Оқушыға дайын мамандық таңбай, өз жолын сезінуге жетелеу.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Ғылыми негізділік:</strong> Халықаралық мойындалған әдістемелерге сүйену.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Нарықпен байланыс:</strong> Қазақстанның және әлемнің жаңа мамандықтар атласын ескеру.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
