import React from 'react';
import { Award, Calendar, CheckCircle2, Download, ExternalLink, ShieldCheck, X } from 'lucide-react';
import { CourseCertification } from '../types';

interface CertificateModalProps {
  course: CourseCertification | null;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({ course, onClose }) => {
  if (!course) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-stone-900/60 p-4 backdrop-blur-sm animate-fadeIn">
      <div 
        id="certificate-modal-container"
        className="relative w-full max-w-2xl rounded-2xl bg-[#FCFAF6] p-6 md:p-8 shadow-2xl border border-amber-200/80 max-h-[90vh] overflow-y-auto"
      >
        {/* Close Button */}
        <button
          id="close-certificate-modal-btn"
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full p-2 text-stone-400 hover:bg-stone-100 hover:text-stone-700 transition"
          aria-label="Жабу"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Certificate Frame Decor */}
        <div className="rounded-xl border-2 border-dashed border-amber-300/80 bg-white p-6 md:p-8 text-center relative overflow-hidden shadow-inner">
          {/* Subtle watermark */}
          <div className="absolute -right-8 -bottom-8 opacity-5 text-emerald-950 pointer-events-none">
            <Award className="w-48 h-48" />
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-4 border border-emerald-200/60">
            <ShieldCheck className="h-4 w-4 text-emerald-700" />
            Ресми Біліктілік Сертификаты
          </div>

          <h3 className="font-display text-xl md:text-2xl font-bold text-stone-900 mb-2">
            СЕРТИФИКАТ
          </h3>
          <p className="text-xs text-amber-700 font-mono tracking-wider mb-6">
            № {course.certificateNumber}
          </p>

          <p className="text-sm text-stone-600 mb-2">Бұл сертификат растайды:</p>
          <p className="font-display text-lg md:text-xl font-bold text-emerald-900 mb-4">
            Кибасова Гульзат Насихатовна
          </p>

          <p className="text-sm text-stone-700 leading-relaxed max-w-lg mx-auto mb-6">
            <span className="font-medium text-stone-900">{course.organization}</span> ұйымдастырған{' '}
            <span className="font-semibold text-emerald-950">«{course.title}»</span> курсын сәтті аяқтады.
          </p>

          <div className="grid grid-cols-2 gap-4 max-w-md mx-auto py-3 my-4 border-y border-stone-200 text-left text-xs text-stone-600">
            <div>
              <span className="block text-stone-400 font-medium">Оқу көлемі:</span>
              <span className="font-bold text-stone-800 text-sm">{course.hours}</span>
            </div>
            <div>
              <span className="block text-stone-400 font-medium">Берілген уақыты:</span>
              <span className="font-bold text-stone-800 text-sm">{course.issueDate}</span>
            </div>
          </div>

          <div className="mb-6 text-left">
            <h4 className="text-xs font-semibold text-stone-500 uppercase tracking-wider mb-2">Меңгерілген құзыреттер:</h4>
            <div className="flex flex-wrap gap-2">
              {course.skillsAcquired.map((skill, idx) => (
                <span key={idx} className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-stone-100 text-stone-700 text-xs">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <button
              id="download-cert-btn"
              onClick={() => {
                window.print();
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-800 text-white text-sm font-medium hover:bg-emerald-900 transition shadow-sm"
            >
              <Download className="h-4 w-4" />
              Сертификатты басып шығару / сақтау
            </button>
            <button
              id="close-cert-btn"
              onClick={onClose}
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-stone-200 text-stone-700 text-sm font-medium hover:bg-stone-50 transition"
            >
              Жабу
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
