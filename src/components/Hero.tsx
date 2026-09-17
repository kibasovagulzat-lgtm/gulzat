import React, { useRef, useState } from 'react';
import { 
  Award, 
  BookOpen, 
  Calendar, 
  Camera,
  Compass, 
  GraduationCap, 
  MapPin, 
  Navigation, 
  RotateCcw,
  Route, 
  ShieldCheck, 
  Sparkles, 
  Star, 
  TrendingUp, 
  Upload,
  UserCheck, 
  ArrowRight
} from 'lucide-react';
import defaultPortraitImg from '../assets/images/gulzat_kibasova_portrait_1789625264130.jpeg';
import { PERSONAL_INFO, QUICK_ANSWERS } from '../data/portfolioData';

interface HeroProps {
  onOpenConsultation: () => void;
  onOpenPortfolio: () => void;
  onScrollToSection: (id: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenConsultation,
  onOpenPortfolio,
  onScrollToSection,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [hasCustomPhoto, setHasCustomPhoto] = useState<boolean>(() => {
    return !!localStorage.getItem('gk_user_portrait');
  });
  const [photoSrc, setPhotoSrc] = useState<string>(() => {
    return localStorage.getItem('gk_user_portrait') || defaultPortraitImg;
  });

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        if (result) {
          setPhotoSrc(result);
          setHasCustomPhoto(true);
          try {
            localStorage.setItem('gk_user_portrait', result);
          } catch (err) {
            console.warn('Could not cache image in localStorage', err);
          }
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleResetPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    localStorage.removeItem('gk_user_portrait');
    setPhotoSrc(defaultPortraitImg);
    setHasCustomPhoto(false);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };
  return (
    <section 
      id="hero" 
      className="relative pt-6 pb-16 md:pt-12 md:pb-24 overflow-hidden"
    >
      {/* Delicate background decorative elements: compass lines, coordinates, glowing gradients */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-b from-emerald-100/40 via-amber-50/30 to-transparent blur-3xl rounded-full" />
        {/* Subtle geometric career route arcs */}
        <svg 
          className="absolute -top-10 right-0 w-[600px] h-[600px] text-emerald-900/[0.03]" 
          viewBox="0 0 400 400" 
          fill="none"
        >
          <circle cx="200" cy="200" r="180" stroke="currentColor" strokeWidth="1" strokeDasharray="6 6" />
          <circle cx="200" cy="200" r="130" stroke="currentColor" strokeWidth="1" />
          <circle cx="200" cy="200" r="80" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
          <line x1="20" y1="200" x2="380" y2="200" stroke="currentColor" strokeWidth="0.8" />
          <line x1="200" y1="20" x2="200" y2="380" stroke="currentColor" strokeWidth="0.8" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header Badge */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-amber-200/90 shadow-xs text-xs font-semibold text-emerald-950">
            <span className="flex h-2 w-2 rounded-full bg-emerald-600 animate-pulse" />
            <Compass className="h-3.5 w-3.5 text-amber-600" />
            <span>Кәсіби профориентолог • Грант-аналитик</span>
          </div>

          <div className="inline-flex items-center gap-1.5 text-xs text-stone-500 font-medium bg-stone-100/80 px-3 py-1 rounded-full">
            <MapPin className="h-3.5 w-3.5 text-emerald-700" />
            <span>Ақтау қаласы, №16 С.Мұқашев атындағы мектеп</span>
          </div>
        </div>

        {/* Main Grid: Left copy, Right visual composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Heading & Mission */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4">
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-stone-900 leading-[1.12]">
                <span className="block text-stone-900">БОЛАШАҚҚА</span>
                <span className="emerald-gradient-text block">БАҒЫТ БЕРЕМІН</span>
              </h1>

              <div className="h-1 w-24 bg-gradient-to-r from-amber-500 to-emerald-600 rounded-full" />

              <p className="text-stone-700 text-base sm:text-lg lg:text-xl font-normal leading-relaxed max-w-2xl">
                Әр оқушының қабілеті мен қызығушылығын танып, саналы мамандық таңдауына және болашақ кәсіби жолын сенімді жоспарлауына қолдау көрсетемін.
              </p>
            </div>

            {/* Credential highlights */}
            <div className="flex flex-wrap gap-2.5 pt-1">
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-50/90 text-emerald-900 text-xs font-medium border border-emerald-200/60">
                <GraduationCap className="h-4 w-4 text-emerald-700" />
                Техникалық ғылымдар магистрі
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-50/90 text-amber-950 text-xs font-medium border border-amber-200/60">
                <ShieldCheck className="h-4 w-4 text-amber-700" />
                Педагог-модератор
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-stone-100 text-stone-800 text-xs font-medium border border-stone-200">
                <Award className="h-4 w-4 text-emerald-800" />
                «Үздік педагог – 2026» үміткері
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <button
                id="hero-portfolio-btn"
                onClick={onOpenPortfolio}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white font-semibold text-sm shadow-md hover:shadow-lg transition duration-200 group"
              >
                <BookOpen className="h-4 w-4 text-amber-300" />
                Портфолионы көру
                <ArrowRight className="h-4 w-4 text-emerald-200 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                id="hero-consultation-btn"
                onClick={onOpenConsultation}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-stone-50 text-stone-800 font-semibold text-sm border border-stone-300 shadow-xs hover:border-emerald-600 transition duration-200"
              >
                <Sparkles className="h-4 w-4 text-amber-600" />
                Кәсіби кеңес алу
              </button>
            </div>
          </div>

          {/* Right Column: Hero Portrait Composition */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Outer decorative gold/emerald glow ring */}
              <div className="absolute -inset-2.5 rounded-3xl bg-gradient-to-tr from-emerald-600/30 via-amber-400/20 to-emerald-200/40 blur-lg" />

              {/* Card framing container */}
              <div className="relative rounded-3xl bg-white p-3 shadow-xl border border-amber-200/80 overflow-hidden">
                {/* Visual Image */}
                <div className="relative rounded-2xl overflow-hidden aspect-[3/4] bg-stone-100 group">
                  {/* Hidden File Input for Custom Portrait Upload */}
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handlePhotoUpload}
                  />

                  {/* Top-Left Action Button to Change Photo */}
                  <div className="absolute top-3 left-3 z-20 flex items-center gap-1.5">
                    <button
                      id="change-portrait-photo-btn"
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="bg-white/95 hover:bg-white backdrop-blur-md px-2.5 py-1 rounded-full text-[11px] font-semibold text-emerald-950 shadow-sm border border-emerald-100 flex items-center gap-1.5 transition active:scale-95 cursor-pointer"
                      title="Өз суретіңізді жүктеу"
                    >
                      <Camera className="h-3.5 w-3.5 text-emerald-700" />
                      <span>Суретті өзгерту</span>
                    </button>
                    {hasCustomPhoto && (
                      <button
                        id="reset-portrait-photo-btn"
                        type="button"
                        onClick={handleResetPhoto}
                        className="bg-stone-900/80 hover:bg-stone-900 text-white backdrop-blur-md p-1 rounded-full text-[10px] shadow-sm transition active:scale-95"
                        title="Бастапқы суретке қайтару"
                      >
                        <RotateCcw className="h-3 w-3" />
                      </button>
                    )}
                  </div>

                  <img
                    src={photoSrc}
                    alt="Кибасова Гульзат Насихатовна"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top transition duration-500 group-hover:scale-105"
                  />

                  {/* Gradient Overlay at Bottom */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-emerald-950/90 via-emerald-950/40 to-transparent p-5 text-white">
                    <span className="text-[11px] font-mono tracking-widest text-amber-300 uppercase block mb-0.5">
                      Career Navigator
                    </span>
                    <h3 className="font-display text-xl font-bold leading-tight">
                      Кибасова Гульзат Насихатовна
                    </h3>
                    <p className="text-xs text-stone-200 mt-1">
                      №16 С.Мұқашев атындағы мектеп, Ақтау қаласы
                    </p>
                  </div>

                  {/* Top floating badge */}
                  <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold text-emerald-900 shadow-sm border border-emerald-100 flex items-center gap-1.5">
                    <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-500" />
                    15 жыл тәжірибе
                  </div>
                </div>

                {/* Floating Micro-Badge */}
                <div className="mt-3 p-3 rounded-xl bg-amber-50/80 border border-amber-200/60 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-emerald-800 text-amber-300 flex items-center justify-center font-bold text-xs">
                      GK
                    </div>
                    <div>
                      <p className="text-xs font-bold text-stone-900">«Болашаққа бағыт»</p>
                      <p className="text-[11px] text-stone-500">Саналы таңдаудан басталады</p>
                    </div>
                  </div>
                  <button
                    onClick={() => onScrollToSection('about')}
                    className="text-xs text-emerald-800 font-semibold hover:underline"
                  >
                    Толығырақ →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* First-Screen Direct Answers (Кіммін? Не істеймін? Кімге көмектесемін? Қандай әдістер? Қандай нәтиже?) */}
        <div className="mt-14 pt-8 border-t border-stone-200/80">
          <div className="text-center max-w-xl mx-auto mb-6">
            <span className="text-[11px] font-bold tracking-widest text-amber-700 uppercase block">
              ТҰЖЫРЫМДАМАЛЫҚ СҰРАҚТАР
            </span>
            <h2 className="font-display text-xl sm:text-2xl font-bold text-stone-900">
              Маманның кәсіби ұстанымы мен миссиясы
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
            {QUICK_ANSWERS.map((item, idx) => (
              <div 
                key={idx}
                id={`hero-qa-card-${idx}`}
                className="rounded-2xl bg-white p-4 border border-stone-200/80 shadow-xs hover:border-emerald-500/50 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2.5">
                    <span className="font-display font-bold text-emerald-900 text-sm">
                      {item.q}
                    </span>
                    <span className="text-[11px] font-mono font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded">
                      0{idx + 1}
                    </span>
                  </div>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    {item.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Hero Core Statistics Strip */}
        <div className="mt-10 rounded-2xl bg-gradient-to-br from-emerald-900 via-emerald-950 to-stone-900 p-6 sm:p-8 text-white shadow-xl relative overflow-hidden">
          {/* Subtle gold compass watermark */}
          <Compass className="absolute right-4 -bottom-6 w-36 h-36 text-amber-400/10 pointer-events-none" />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center relative z-10">
            <div className="space-y-1">
              <div className="font-display text-3xl sm:text-4xl font-bold text-amber-300">
                15+ жыл
              </div>
              <p className="text-xs sm:text-sm text-stone-300 font-medium">
                Педагогикалық тәжірибе
              </p>
            </div>

            <div className="space-y-1 border-l border-emerald-800/60 pl-4">
              <div className="font-display text-3xl sm:text-4xl font-bold text-amber-300">
                72+ сағат
              </div>
              <p className="text-xs sm:text-sm text-stone-300 font-medium">
                Кәсіби біліктілікті арттыру
              </p>
            </div>

            <div className="space-y-1 border-l border-emerald-800/60 pl-4">
              <div className="font-display text-3xl sm:text-4xl font-bold text-amber-300">
                100+
              </div>
              <p className="text-xs sm:text-sm text-stone-300 font-medium">
                Кәсіби бағдар іс-шаралары
              </p>
            </div>

            <div className="space-y-1 border-l border-emerald-800/60 pl-4">
              <div className="font-display text-3xl sm:text-4xl font-bold text-amber-300">
                1000+
              </div>
              <p className="text-xs sm:text-sm text-stone-300 font-medium">
                Қамтылған оқушы
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
