import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { DirectionsSection } from './components/DirectionsSection';
import { DiagnosticsSection } from './components/DiagnosticsSection';
import { ProcessTimeline } from './components/ProcessTimeline';
import { GrantAnalyticsSection } from './components/GrantAnalyticsSection';
import { AchievementsSection } from './components/AchievementsSection';
import { ProfessionalDevSection } from './components/ProfessionalDevSection';
import { StudentOutcomesSection } from './components/StudentOutcomesSection';
import { DigitalAIToolsSection } from './components/DigitalAIToolsSection';
import { GallerySection } from './components/GallerySection';
import { DevelopmentMapSection } from './components/DevelopmentMapSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';
import { PortfolioDownloadModal } from './components/PortfolioDownloadModal';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [isConsultationOpen, setIsConsultationOpen] = useState<boolean>(false);
  const [isPortfolioOpen, setIsPortfolioOpen] = useState<boolean>(false);
  const [consultationPreselectedService, setConsultationPreselectedService] = useState<string | undefined>();

  const handleScrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenConsultation = (serviceName?: string) => {
    setConsultationPreselectedService(serviceName);
    setIsConsultationOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-stone-900 selection:bg-emerald-800 selection:text-white flex flex-col font-sans">
      {/* Sticky Header Navigation */}
      <Header
        activeSection={activeSection}
        onScrollToSection={handleScrollToSection}
        onOpenConsultation={() => handleOpenConsultation()}
        onOpenPortfolio={() => setIsPortfolioOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          onOpenConsultation={() => handleOpenConsultation()}
          onOpenPortfolio={() => setIsPortfolioOpen(true)}
          onScrollToSection={handleScrollToSection}
        />

        {/* 2. About Specialist Section */}
        <AboutSection
          onOpenPortfolio={() => setIsPortfolioOpen(true)}
          onOpenConsultation={() => handleOpenConsultation()}
        />

        {/* 3. Professional Directions (6 large cards) */}
        <DirectionsSection
          onSelectDirection={(dirTitle) => handleOpenConsultation(dirTitle)}
          onScrollToSection={handleScrollToSection}
        />

        {/* 4. Diagnostic Methodologies (7 methods) */}
        <DiagnosticsSection
          onOpenConsultation={() => handleOpenConsultation()}
        />

        {/* 5. 7-Step Process Workflow */}
        <ProcessTimeline
          onOpenConsultation={() => handleOpenConsultation()}
        />

        {/* 6. Grant Analytics & Matcher */}
        <GrantAnalyticsSection
          onOpenConsultation={() => handleOpenConsultation('Грант аналитикасы және талдау')}
        />

        {/* 7. Achievements Timeline (Best Teacher 2026) */}
        <AchievementsSection
          onOpenPortfolio={() => setIsPortfolioOpen(true)}
        />

        {/* 8. Qualifications & 6 Core Projects */}
        <ProfessionalDevSection
          onOpenConsultation={() => handleOpenConsultation()}
        />

        {/* 9. Measurable Student Outcomes & Stories */}
        <StudentOutcomesSection />

        {/* 10. Digital & AI Tools */}
        <DigitalAIToolsSection />

        {/* 11. Event Gallery & Photo Upload */}
        <GallerySection />

        {/* 12. Strategic 2026–2027 Development Map */}
        <DevelopmentMapSection />

        {/* 13. Contact & Quick Connect */}
        <ContactSection
          onOpenConsultation={() => handleOpenConsultation()}
          onOpenPortfolio={() => setIsPortfolioOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer
        onScrollToSection={handleScrollToSection}
        onOpenConsultation={() => handleOpenConsultation()}
        onOpenPortfolio={() => setIsPortfolioOpen(true)}
      />

      {/* Consultation Booking Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        initialService={consultationPreselectedService}
      />

      {/* Full "Үздік педагог – 2026" Dossier Modal */}
      <PortfolioDownloadModal
        isOpen={isPortfolioOpen}
        onClose={() => setIsPortfolioOpen(false)}
        onOpenConsultation={() => {
          setIsPortfolioOpen(false);
          handleOpenConsultation();
        }}
      />
    </div>
  );
}
