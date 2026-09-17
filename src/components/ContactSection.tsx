import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { 
  Award, 
  CheckCircle2, 
  Compass, 
  Download, 
  Instagram, 
  Mail, 
  MapPin, 
  Phone, 
  Send, 
  Sparkles, 
  User 
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ContactSectionProps {
  onOpenConsultation: () => void;
  onOpenPortfolio: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  onOpenConsultation,
  onOpenPortfolio,
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [question, setQuestion] = useState('');
  const [isSent, setIsSent] = useState(false);

  const handleQuickSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;

    confetti({
      particleCount: 60,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#047857', '#D97706', '#10B981'],
    });

    setIsSent(true);
    setTimeout(() => {
      setName('');
      setPhone('');
      setQuestion('');
    }, 1500);
  };

  const services = [
    'Профориентация',
    'Кәсіби диагностика',
    'Мамандық таңдау',
    'Грант аналитикасы',
    'Жеке консультация',
  ];

  return (
    <section id="contact" className="py-16 md:py-24 bg-gradient-to-b from-[#FAF9F5] to-[#F3EFE6] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-3 border border-emerald-200/70">
            <Compass className="h-3.5 w-3.5 text-amber-600" />
            Байланыс & Ынтымақтастық
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900 tracking-tight">
            БОЛАШАҚҚА БІРГЕ БАҒЫТ АЛАЙЫҚ
          </h2>
          <p className="text-stone-600 text-base sm:text-lg mt-3 max-w-2xl mx-auto">
            Оқушының саналы мамандық таңдауына және болашағына қадам басуына бүгіннен бастап бағыт беріңіз
          </p>
          <div className="mt-4 mx-auto h-1 w-20 bg-gradient-to-r from-amber-500 to-emerald-600 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left: Contact Information & Directions */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-white rounded-3xl p-7 sm:p-8 border border-stone-200/90 shadow-sm space-y-6">
              <div>
                <span className="text-xs font-bold text-amber-700 uppercase tracking-widest block mb-1">
                  Маманмен байланыс
                </span>
                <h3 className="font-display text-2xl font-bold text-stone-900">
                  {PERSONAL_INFO.fullName}
                </h3>
                <p className="text-xs text-stone-500 mt-1">
                  {PERSONAL_INFO.profession}
                </p>
              </div>

              {/* Instagram & Social card */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-pink-50 via-rose-50 to-amber-50 border border-pink-200/60 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white flex items-center justify-center shadow-xs">
                    <Instagram className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-rose-800 uppercase tracking-wider block">
                      Ресми Instagram парақшасы
                    </span>
                    <a
                      href="https://instagram.com/gulzat.nasikhatovna"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-stone-900 hover:text-rose-600 text-sm"
                    >
                      {PERSONAL_INFO.instagram}
                    </a>
                  </div>
                </div>
                <a
                  id="instagram-profile-btn"
                  href="https://instagram.com/gulzat.nasikhatovna"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-xl bg-white text-rose-700 text-xs font-bold shadow-xs hover:bg-rose-50 transition border border-rose-200"
                >
                  Жазылу
                </a>
              </div>

              {/* Directions list */}
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-stone-500 block mb-2.5">
                  Кәсіби бағыттар бойынша көмек:
                </span>
                <div className="flex flex-wrap gap-2">
                  {services.map((srv, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-50 text-emerald-900 text-xs font-semibold border border-emerald-200/60"
                    >
                      <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                      {srv}
                    </span>
                  ))}
                </div>
              </div>

              {/* Location & School */}
              <div className="space-y-2 pt-4 border-t border-stone-100 text-xs sm:text-sm text-stone-600">
                <div className="flex items-start gap-2.5">
                  <MapPin className="h-4 w-4 text-emerald-700 shrink-0 mt-0.5" />
                  <span>
                    <strong>Мекенжайы:</strong> {PERSONAL_INFO.city}, {PERSONAL_INFO.school}
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Mail className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>Электрондық пошта:</strong> {PERSONAL_INFO.email}
                  </span>
                </div>
              </div>

              {/* 3 Main Prompt Action Buttons */}
              <div className="pt-3 border-t border-stone-100 grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                <a
                  id="btn-action-instagram"
                  href="https://instagram.com/gulzat.nasikhatovna"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 text-white text-xs font-bold shadow-xs transition"
                >
                  <Instagram className="h-3.5 w-3.5" />
                  Instagram
                </a>

                <button
                  id="btn-action-consultation"
                  onClick={onOpenConsultation}
                  className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-bold shadow-xs transition"
                >
                  <Sparkles className="h-3.5 w-3.5 text-amber-300" />
                  Кәсіби кеңес алу
                </button>

                <button
                  id="btn-action-portfolio-download"
                  onClick={onOpenPortfolio}
                  className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-white hover:bg-stone-50 border border-stone-300 text-stone-800 text-xs font-bold shadow-xs transition"
                >
                  <Download className="h-3.5 w-3.5 text-amber-600" />
                  Портфолионы көру
                </button>
              </div>
            </div>
          </div>

          {/* Right: Quick Request Card */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-3xl p-7 sm:p-8 border border-stone-200/90 shadow-sm relative overflow-hidden">
              <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider block mb-1">
                Жылдам хабарласу
              </span>
              <h3 className="font-display text-2xl font-bold text-stone-900 mb-2">
                Сұрағыңызды қалдырыңыз
              </h3>
              <p className="text-xs text-stone-500 mb-6">
                Оқушыңыздың болашақ мамандығы немесе грант мүмкіндігі бойынша бастапқы сұрағыңызды жазыңыз.
              </p>

              {isSent ? (
                <div className="py-10 text-center space-y-3 bg-emerald-50/70 rounded-2xl p-6 border border-emerald-200/60">
                  <CheckCircle2 className="h-12 w-12 text-emerald-700 mx-auto" />
                  <h4 className="font-display text-xl font-bold text-emerald-950">
                    Хабарламаңыз қабылданды!
                  </h4>
                  <p className="text-xs text-emerald-900 max-w-sm mx-auto">
                    Гульзат Насихатовна жақын уақытта жауап береді. Рақмет!
                  </p>
                  <button
                    onClick={() => setIsSent(false)}
                    className="mt-2 text-xs font-bold text-emerald-800 hover:underline"
                  >
                    Тағы бір сұрақ жіберу
                  </button>
                </div>
              ) : (
                <form onSubmit={handleQuickSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1.5">
                      Аты-жөніңіз *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Оқушының немесе ата-ананың есімі"
                      className="w-full px-4 py-2.5 rounded-xl border border-stone-300 text-sm focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-600/20"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1.5">
                      Телефон нөміріңіз (WhatsApp) *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+7 (70X) XXX-XX-XX"
                      className="w-full px-4 py-2.5 rounded-xl border border-stone-300 text-sm focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-600/20"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1.5">
                      Сұрағыңыз немесе қызықтырған бағыт
                    </label>
                    <textarea
                      rows={4}
                      value={question}
                      onChange={(e) => setQuestion(e.target.value)}
                      placeholder="Қай мамандықтар бойынша ақпарат қажет? Қай сыныпта оқиды?"
                      className="w-full p-3 rounded-xl border border-stone-300 text-sm focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-600/20 resize-none"
                    />
                  </div>

                  <button
                    id="submit-quick-contact-btn"
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white font-semibold text-sm transition shadow-md"
                  >
                    <Send className="h-4 w-4" />
                    Хабарлама жіберу
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
