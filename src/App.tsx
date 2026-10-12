import React, { useState } from 'react';
import { scrollToAnchor } from './utils/scrollToAnchor';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { WorkSection } from './components/WorkSection';
import { MarketingLab } from './components/MarketingLab';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { SkillsSection } from './components/SkillsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { BackToTop } from './components/BackToTop';
import { PERSONAL_INFO } from './data/portfolioData';
import { LabModuleId } from './types';

export default function App() {
  const [marketingLabTab, setMarketingLabTab] = useState<LabModuleId>('ai-readiness');

  const handleContactClick = () => {
    const contactEl = document.getElementById('contact');
    if (contactEl) scrollToAnchor('#contact');
    else window.location.href = `mailto:${PERSONAL_INFO.email}`;
  };

  const handleScrollToProjects = () => scrollToAnchor('#projects');

  const handleScrollToMarketingLab = (tab: LabModuleId) => {
    setMarketingLabTab(tab);
    requestAnimationFrame(() => scrollToAnchor('#marketing-lab'));
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] font-sans selection:bg-[#163B65] selection:text-white">
      <a href="#main-content" className="skip-link">Bỏ qua điều hướng</a>
      <Header onContactClick={handleContactClick} />
      <main id="main-content">
        <Hero onExploreProjects={handleScrollToProjects} onContactClick={handleContactClick} onOpenLab={() => handleScrollToMarketingLab(marketingLabTab)} />
        <WorkSection onOpenLab={handleScrollToMarketingLab} />
        <MarketingLab activeTab={marketingLabTab} />
        <ExperienceTimeline />
        <SkillsSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
