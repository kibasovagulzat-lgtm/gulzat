import React, { useState } from 'react';
import { 
  Award, 
  BookOpen, 
  Calendar, 
  CheckCircle2, 
  ExternalLink, 
  FileCheck, 
  GraduationCap, 
  Layers, 
  Sparkles, 
  Users 
} from 'lucide-react';
import { COURSES, PROJECTS } from '../data/portfolioData';
import { CourseCertification, ProjectItem } from '../types';
import { CertificateModal } from './CertificateModal';

interface ProfessionalDevSectionProps {
  onOpenConsultation: () => void;
}

export const ProfessionalDevSection: React.FC<ProfessionalDevSectionProps> = ({ onOpenConsultation }) => {
  const [selectedCourse, setSelectedCourse] = useState<CourseCertification | null>(null);
  const [activeTab, setActiveTab] = useState<'courses' | 'projects'>('courses');

  return (
    <section id="qualifications" className="py-16 md:py-24 bg-[#F8F6F0]/60 border-t border-b border-stone-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-3 border border-emerald-200/70">
            <GraduationCap className="h-3.5 w-3.5 text-amber-600" />
            Үздіксіз біліктілік & Практикалық бастамалар
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight">
            БІЛІКТІЛІКТІ АРТТЫРУ ЖӘНЕ ЖОБАЛАР
          </h2>
          <p className="text-stone-600 text-sm sm:text-base mt-3">
            Кәсіби деңгейді үздіксіз көтеру курстары және мектеп оқушыларына арналған авторлық тәжірибелік жобалар
          </p>
          <div className="mt-4 mx-auto h-1 w-20 bg-gradient-to-r from-amber-500 to-emerald-600 rounded-full" />
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-white p-1.5 rounded-2xl border border-stone-200 shadow-xs">
            <button
              id="tab-courses-btn"
              onClick={() => setActiveTab('courses')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition ${
                activeTab === 'courses'
                  ? 'bg-emerald-800 text-white shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              <Award className="h-4 w-4" />
              Біліктілікті арттыру курстары (72+ сағат)
            </button>
            <button
              id="tab-projects-btn"
              onClick={() => setActiveTab('projects')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition ${
                activeTab === 'projects'
                  ? 'bg-emerald-800 text-white shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              <Sparkles className="h-4 w-4 text-amber-300" />
              Негізгі жобалар (6 жоба)
            </button>
          </div>
        </div>

        {/* Tab 1: Courses */}
        {activeTab === 'courses' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fadeIn">
            {COURSES.map((course) => (
              <div
                key={course.id}
                id={`course-card-${course.id}`}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-stone-200/90 shadow-xs hover:border-emerald-600/60 card-hover-shadow transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-amber-700 bg-amber-50 px-2.5 py-1 rounded-md">
                      {course.year} жыл
                    </span>
                    <span className="font-mono text-xs font-bold text-emerald-900 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                      {course.hours}
                    </span>
                  </div>

                  <h3 className="font-display text-lg sm:text-xl font-bold text-stone-900 mb-2 leading-snug">
                    {course.title}
                  </h3>

                  <p className="text-xs text-stone-500 font-medium mb-4">
                    Ұйымдастырушы: <span className="text-stone-800 font-semibold">{course.organization}</span>
                  </p>

                  <div className="space-y-1.5 mb-6 pt-3 border-t border-stone-100">
                    <span className="text-[11px] font-bold text-stone-400 uppercase tracking-wider block">
                      Меңгерілген дағдылар:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {course.skillsAcquired.map((skill, sIdx) => (
                        <span key={sIdx} className="text-xs bg-stone-50 text-stone-700 px-2 py-0.5 rounded border border-stone-200">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-stone-400">
                    {course.certificateNumber}
                  </span>
                  <button
                    id={`view-cert-btn-${course.id}`}
                    onClick={() => setSelectedCourse(course)}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-900 text-xs font-bold transition"
                  >
                    <FileCheck className="h-3.5 w-3.5 text-amber-600" />
                    Сертификатты көру
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: Projects */}
        {activeTab === 'projects' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fadeIn">
            {PROJECTS.map((project) => (
              <div
                key={project.id}
                id={`project-card-${project.id}`}
                className="bg-white rounded-2xl p-6 border border-stone-200/90 shadow-xs hover:border-emerald-600/60 card-hover-shadow transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-800 flex items-center justify-center font-bold text-sm">
                      <Sparkles className="h-4 w-4 text-amber-600" />
                    </div>
                    <span className="text-xs font-medium text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full">
                      {project.participants}
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-bold text-stone-900 mb-1">
                    {project.title}
                  </h3>
                  <p className="text-xs font-semibold text-amber-800 mb-3">
                    {project.tagline}
                  </p>

                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  <div className="bg-stone-50 p-3 rounded-xl mb-4 border border-stone-100 space-y-1">
                    <span className="text-[10px] uppercase font-bold text-stone-400 block tracking-wider">
                      Форматы:
                    </span>
                    <p className="text-xs text-stone-700 font-medium">
                      {project.format}
                    </p>
                  </div>
                </div>

                <div className="pt-3 border-t border-stone-100">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-stone-400 block mb-1">
                    Негізгі нәтижелер:
                  </span>
                  <ul className="space-y-1 text-xs text-stone-600">
                    {project.keyOutcomes.map((out, oIdx) => (
                      <li key={oIdx} className="flex items-center gap-1.5">
                        <CheckCircle2 className="h-3 w-3 text-emerald-600 shrink-0" />
                        <span>{out}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Certificate Modal */}
      <CertificateModal
        course={selectedCourse}
        onClose={() => setSelectedCourse(null)}
      />
    </section>
  );
};
