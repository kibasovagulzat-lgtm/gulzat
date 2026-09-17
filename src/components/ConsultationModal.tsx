import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Calendar, CheckCircle2, Clock, Mail, MessageSquare, Phone, Send, Sparkles, User, X } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledTopic?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  prefilledTopic = 'Мамандық таңдау және кәсіби диагностика',
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [grade, setGrade] = useState('11-сынып');
  const [direction, setDirection] = useState(prefilledTopic);
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;

    // Trigger celebratory confetti
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#047857', '#D97706', '#10B981', '#F59E0B'],
    });

    setIsSubmitted(true);
  };

  const handleResetAndClose = () => {
    setIsSubmitted(false);
    setName('');
    setPhone('');
    setMessage('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-stone-900/60 p-4 backdrop-blur-sm animate-fadeIn">
      <div 
        id="consultation-modal-dialog"
        className="relative w-full max-w-xl rounded-2xl bg-[#FCFAF6] p-6 md:p-8 shadow-2xl border border-stone-200/90 max-h-[90vh] overflow-y-auto"
      >
        <button
          id="close-consultation-modal-btn"
          onClick={handleResetAndClose}
          className="absolute right-4 top-4 rounded-full p-2 text-stone-400 hover:bg-stone-100 hover:text-stone-700 transition"
          aria-label="Жабу"
        >
          <X className="h-5 w-5" />
        </button>

        {isSubmitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 shadow-inner">
              <CheckCircle2 className="h-10 w-10" />
            </div>
            <h3 className="font-display text-2xl font-bold text-stone-900">
              Өтінішіңіз сәтті қабылданды!
            </h3>
            <p className="text-stone-600 max-w-md mx-auto text-sm leading-relaxed">
              Құрметті <span className="font-semibold text-stone-900">{name}</span>, сіздің кәсіби кеңеске жазылу өтінішіңіз тіркелді. Кибасова Гульзат Насихатовна жақын арада сізбен WhatsApp/телефон арқылы хабарласып, уақытын нақтылайды.
            </p>
            <div className="p-4 rounded-xl bg-amber-50/80 border border-amber-200/60 text-xs text-amber-900 text-left max-w-md mx-auto space-y-1">
              <p className="font-semibold flex items-center gap-1.5">
                <Sparkles className="h-4 w-4 text-amber-600" />
                Кеңес алдындағы ұсыныс:
              </p>
              <p className="text-stone-600">
                Оқушының соңғы тоқсандық бағаларын және ерекше қызығатын 2-3 саласын алдын ала ойластырып қою кеңестің тиімділігін арттырады.
              </p>
            </div>
            <button
              id="confirm-close-consultation-btn"
              onClick={handleResetAndClose}
              className="mt-4 px-6 py-2.5 rounded-xl bg-emerald-800 text-white text-sm font-semibold hover:bg-emerald-900 transition shadow-sm"
            >
              Түсінікті, рақмет!
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-2 border border-emerald-200/50">
                <Sparkles className="h-3.5 w-3.5 text-amber-600" />
                Жеке кәсіби кеңес алу
              </span>
              <h3 className="font-display text-2xl font-bold text-stone-900">
                Кәсіби кеңеске жазылу
              </h3>
              <p className="text-sm text-stone-500 mt-1">
                Гульзат Насихатовнамен жеке немесе онлайн форматта мамандық пен грант мәселесін талқылаңыз.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1.5">
                  Аты-жөніңіз (оқушы немесе ата-ана) *
                </label>
                <div className="relative">
                  <User className="absolute left-3.5 top-3 h-4 w-4 text-stone-400" />
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Мысалы: Аружан немесе Айгүл (анасы)"
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-stone-300 bg-white text-sm text-stone-900 focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-600/20"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1.5">
                    Байланыс телефоны (WhatsApp) *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3.5 top-3 h-4 w-4 text-stone-400" />
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+7 (70X) XXX-XX-XX"
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-stone-300 bg-white text-sm text-stone-900 focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-600/20"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1.5">
                    Оқушының сыныбы
                  </label>
                  <select
                    value={grade}
                    onChange={(e) => setGrade(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-stone-300 bg-white text-sm text-stone-900 focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-600/20"
                  >
                    <option value="7-сынып">7-сынып</option>
                    <option value="8-сынып">8-сынып</option>
                    <option value="9-сынып">9-сынып</option>
                    <option value="10-сынып">10-сынып</option>
                    <option value="11-сынып">11-сынып (Түлек)</option>
                    <option value="Колледж студенті">Колледж студенті</option>
                    <option value="Ата-ана">Ата-ана</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1.5">
                  Негізгі тақырып немесе сұрақ
                </label>
                <select
                  value={direction}
                  onChange={(e) => setDirection(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-stone-300 bg-white text-sm text-stone-900 focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-600/20"
                >
                  <option value="Мамандық таңдау және кәсіби диагностика">Мамандық таңдау және кәсіби диагностика</option>
                  <option value="Грант аналитикасы және ҰБТ стратегиясы">Грант аналитикасы және ҰБТ стратегиясы</option>
                  <option value="Жеке кәсіби маршрут әзірлеу">Жеке кәсіби маршрут әзірлеу</option>
                  <option value="Кәсіби сынамалар және тәжірибелік сынақ">Кәсіби сынамалар және тәжірибелік сынақ</option>
                  <option value="Педагогтерге тәлімгерлік және кеңес беру">Педагогтерге тәлімгерлік және кеңес беру</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1.5">
                  Қосымша сұрағыңыз немесе түсініктеме (міндетті емес)
                </label>
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Қандай мамандықтар арасында таңдау жасап отырсыз, немесе нақты қандай мәселе толғандырады?"
                  className="w-full p-3 rounded-xl border border-stone-300 bg-white text-sm text-stone-900 focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-600/20 resize-none"
                />
              </div>

              <div className="pt-2 flex items-center justify-between">
                <span className="text-xs text-stone-400">
                  📍 Ақтау қаласы, №16 мектеп / Онлайн
                </span>
                <button
                  id="submit-consultation-btn"
                  type="submit"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-emerald-800 text-white text-sm font-semibold hover:bg-emerald-900 transition shadow-md"
                >
                  <Send className="h-4 w-4" />
                  Өтінішті жіберу
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
