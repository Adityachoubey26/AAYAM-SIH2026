import React from 'react';
import Navbar from '../../components/landing/Navbar';
import Hero from '../../components/landing/Hero';
import ProblemSection from '../../components/landing/ProblemSection';
import WhatIsAayam from '../../components/landing/WhatIsAayam';
import Capabilities from '../../components/landing/Capabilities';
import HowItWorks from '../../components/landing/HowItWorks';
import AIIntelligence from '../../components/landing/AIIntelligence';
import GeospatialPreview from '../../components/landing/GeospatialPreview';
import Impact from '../../components/landing/Impact';
import AuthorityCTA from '../../components/landing/AuthorityCTA';
import AboutSection from '../../components/landing/AboutSection';
import Footer from '../../components/landing/Footer';

export const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#06090d] text-slate-100 flex flex-col selection:bg-emerald-500/25 selection:text-emerald-300">
      {/* Navigation */}
      <Navbar />

      {/* Main Sections */}
      <main className="flex-grow">
        {/* Section 1: Hero */}
        <Hero />

        {/* Section 2: The Problem */}
        <ProblemSection />

        {/* Section 3: What is AAYAM (Pipeline) */}
        <WhatIsAayam />

        {/* Section 4: Capabilities Grid */}
        <Capabilities />

        {/* Section 5: How It Works */}
        <HowItWorks />

        {/* Section 6: AI Intelligence */}
        <AIIntelligence />

        {/* Section 7: Geospatial Preview */}
        <GeospatialPreview />

        {/* Section 8: Impact */}
        <Impact />

        {/* Section 9: Authority Portal CTA */}
        <AuthorityCTA />

        {/* Section 10: About AAYAM & SIH26191 Context */}
        <AboutSection />
      </main>

      {/* Section 11: Footer */}
      <Footer />
    </div>
  );
};

export default LandingPage;
