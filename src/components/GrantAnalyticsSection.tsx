import React, { useState } from 'react';
import { 
  Award, 
  BarChart3, 
  BookOpen, 
  Building, 
  Calculator, 
  CheckCircle2, 
  Compass, 
  GraduationCap, 
  HelpCircle, 
  Layers, 
  Search, 
  Sparkles, 
  TrendingUp, 
  Users 
} from 'lucide-react';
import { GRANT_MAJORS } from '../data/portfolioData';
import { GrantMajor } from '../types';

interface GrantAnalyticsSectionProps {
  onOpenConsultation: () => void;
}

export const GrantAnalyticsSection: React.FC<GrantAnalyticsSectionProps> = ({ onOpenConsultation }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Барлығы');
  const [scoreFilter, setScoreFilter] = useState<number>(100);
  const [activeMajor, setActiveMajor] = useState<GrantMajor>(GRANT_MAJORS[0]);

  const categories = ['Барлығы', 'IT және цифрлық технологиялар', 'Медицина және денсаулық', 'Педагогикалық ғылымдар', 'Инженерлік-өндірістік сала', 'Экономика және басқару'];

  const filteredMajors = GRANT_MAJORS.filter((m) => {
    if (selectedCategory === 'Барлығы') return true;
    return m.category === selectedCategory;
  });

  return (
    <section id="grants" className="py-16 md:py-24 bg-[#FAF9F5] border-t border-b border-stone-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-3 border border-emerald-200/70">
            <TrendingUp className="h-3.5 w-3.5 text-amber-600" />
            Стратегиялық деректер базасы
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight">
            ГРАНТ АНАЛИТИКАСЫ
          </h2>
          <p className="text-stone-700 text-base sm:text-lg leading-relaxed mt-4 max-w-3xl mx-auto">
            «Мамандық таңдауда тек қызығушылық емес, нақты мүмкіндік пен ақпарат та маңызды. Грант саны, білім беру бағдарламалары, конкурс көрсеткіштері және мамандықтар бойынша деректерді талдау арқылы оқушыға саналы таңдау жасауға көмектесемін.»
          </p>
          <div className="mt-4 mx-auto h-1 w-20 bg-gradient-to-r from-amber-500 to-emerald-600 rounded-full" />
        </div>

        {/* 6 Core Analytical Dimension Cards Required by Prompt */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3.5 mb-12">
          <div className="bg-white p-4 rounded-2xl border border-stone-200/90 shadow-xs text-center space-y-1 hover:border-emerald-600 transition">
            <div className="w-8 h-8 mx-auto rounded-lg bg-emerald-50 text-emerald-800 flex items-center justify-center font-bold text-xs mb-2">
              <Award className="h-4 w-4" />
            </div>
            <h4 className="font-bold text-stone-900 text-xs sm:text-sm">Грант саны</h4>
            <p className="text-[11px] text-stone-500 leading-tight">Бөлінген мемлекеттік квоталар</p>
          </div>

          <div className="bg-white p-4 rounded-2xl border border-stone-200/90 shadow-xs text-center space-y-1 hover:border-emerald-600 transition">
            <div className="w-8 h-8 mx-auto rounded-lg bg-amber-50 text-amber-800 flex items-center justify-center font-bold text-xs mb-2">
              <BookOpen className="h-4 w-4" />
            </div>
            <h4 className="font-bold text-stone-900 text-xs sm:text-sm">Мамандықтар</h4>
            <p className="text-[11px] text-stone-500 leading-tight">Бейінді пәндер үйлесімі</p>
          </div>

          <div className="bg-white p-4 rounded-2xl border border-stone-200/90 shadow-xs text-center space-y-1 hover:border-emerald-600 transition">
            <div className="w-8 h-8 mx-auto rounded-lg bg-emerald-50 text-emerald-800 flex items-center justify-center font-bold text-xs mb-2">
              <Users className="h-4 w-4" />
            </div>
            <h4 className="font-bold text-stone-900 text-xs sm:text-sm">Конкурс</h4>
            <p className="text-[11px] text-stone-500 leading-tight">1 орынға үміткерлер саны</p>
          </div>

          <div className="bg-white p-4 rounded-2xl border border-stone-200/90 shadow-xs text-center space-y-1 hover:border-emerald-600 transition">
            <div className="w-8 h-8 mx-auto rounded-lg bg-amber-50 text-amber-800 flex items-center justify-center font-bold text-xs mb-2">
              <BarChart3 className="h-4 w-4" />
            </div>
            <h4 className="font-bold text-stone-900 text-xs sm:text-sm">Шекті балл</h4>
            <p className="text-[11px] text-stone-500 leading-tight">Соңғы 2 жылғы динамика</p>
          </div>

          <div className="bg-white p-4 rounded-2xl border border-stone-200/90 shadow-xs text-center space-y-1 hover:border-emerald-600 transition">
            <div className="w-8 h-8 mx-auto rounded-lg bg-emerald-50 text-emerald-800 flex items-center justify-center font-bold text-xs mb-2">
              <Layers className="h-4 w-4" />
            </div>
            <h4 className="font-bold text-stone-900 text-xs sm:text-sm">Бағдарламалар</h4>
            <p className="text-[11px] text-stone-500 leading-tight">Бейінді мамандық кодтары</p>
          </div>

          <div className="bg-white p-4 rounded-2xl border border-stone-200/90 shadow-xs text-center space-y-1 hover:border-emerald-600 transition">
            <div className="w-8 h-8 mx-auto rounded-lg bg-amber-50 text-amber-800 flex items-center justify-center font-bold text-xs mb-2">
              <Building className="h-4 w-4" />
            </div>
            <h4 className="font-bold text-stone-900 text-xs sm:text-sm">ЖОО таңдауы</h4>
            <p className="text-[11px] text-stone-500 leading-tight">Өңірлік және жетекші ЖОО</p>
          </div>
        </div>

        {/* Interactive Grant Explorer Component */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/90 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-stone-200">
            <div>
              <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider block">
                Интерактивті гранттық сараптама
              </span>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-stone-900 mt-0.5">
                Мамандықтар бойынша өтпелі балл мен грант көрсеткіштері
              </h3>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-1.5">
              {categories.slice(0, 4).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition ${
                    selectedCategory === cat
                      ? 'bg-emerald-800 text-white font-semibold shadow-xs'
                      : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Grid: Major List & Active Major Deep-Dive */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-6">
            {/* Left: Majors List */}
            <div className="lg:col-span-6 space-y-3">
              {filteredMajors.map((major) => {
                const isSelected = activeMajor.code === major.code;
                return (
                  <div
                    key={major.code}
                    id={`grant-row-${major.code}`}
                    onClick={() => setActiveMajor(major)}
                    className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                      isSelected
                        ? 'border-emerald-600 bg-emerald-50/60 shadow-xs'
                        : 'border-stone-200/90 bg-white hover:border-stone-300'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-stone-100 text-stone-800">
                          {major.code}
                        </span>
                        <h4 className="font-bold text-stone-900 text-sm">
                          {major.name}
                        </h4>
                      </div>
                      <span className="text-xs font-bold text-amber-700">
                        {major.grantCount2025} грант
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-stone-500 pt-1">
                      <span>Пәндер: <strong className="text-stone-700">{major.profileSubjects}</strong></span>
                      <span className="font-semibold text-emerald-800">Өтпелі балл: ~{major.passingScore2025}</span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right: Active Major Card Detail */}
            <div className="lg:col-span-6">
              <div className="rounded-2xl bg-gradient-to-br from-[#FAF8F2] to-emerald-50/40 p-6 border border-amber-200/70 shadow-xs space-y-5">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100/80 text-amber-900 text-xs font-bold">
                    <Sparkles className="h-3.5 w-3.5 text-amber-700" />
                    Талдау дерегі: {activeMajor.code}
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-white text-emerald-800 border border-emerald-200">
                    Сұраныс: {activeMajor.demandLevel}
                  </span>
                </div>

                <div>
                  <h4 className="font-display text-2xl font-bold text-stone-900">
                    {activeMajor.name}
                  </h4>
                  <p className="text-xs text-stone-500 mt-1">
                    Бейіндік пән комбинациясы: <strong className="text-stone-800">{activeMajor.profileSubjects}</strong>
                  </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-center">
                  <div className="bg-white p-3 rounded-xl border border-stone-200/80">
                    <span className="text-[11px] text-stone-400 block">Грант саны (2025)</span>
                    <span className="font-display text-xl font-bold text-emerald-900">{activeMajor.grantCount2025}</span>
                  </div>

                  <div className="bg-white p-3 rounded-xl border border-stone-200/80">
                    <span className="text-[11px] text-stone-400 block">Өтпелі балл</span>
                    <span className="font-display text-xl font-bold text-amber-700">{activeMajor.passingScore2025}</span>
                  </div>

                  <div className="bg-white p-3 rounded-xl border border-stone-200/80">
                    <span className="text-[11px] text-stone-400 block">Конкурс коэффициенті</span>
                    <span className="font-display text-xl font-bold text-stone-800">{activeMajor.competitionRatio}</span>
                  </div>
                </div>

                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-stone-500 block mb-2">
                    Ұсынылатын үздік ЖОО-лар:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {activeMajor.topUniversities.map((uni, idx) => (
                      <span key={idx} className="px-3 py-1 bg-white rounded-lg border border-stone-200 text-xs font-medium text-stone-800">
                        {uni}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    id="grant-calc-consult-btn"
                    onClick={onOpenConsultation}
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white font-semibold text-xs transition shadow-xs"
                  >
                    <Calculator className="h-4 w-4 text-amber-300" />
                    Осы мамандық бойынша жеке гранттық есептеу алу
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
