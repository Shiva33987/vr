import React from 'react';
import { SEO } from '@/components/SEO';
import { HeroSection } from '@/sections/HeroSection';
import { PrimaryServicesStrip } from '@/sections/PrimaryServicesStrip';
import { SpecializedServicesGrid } from '@/sections/SpecializedServicesGrid';
import { AboutDifferentiatorsSection } from '@/sections/AboutDifferentiatorsSection';
import { HowItWorksSection } from '@/sections/HowItWorksSection';
import { FeaturedWorkSection } from '@/sections/FeaturedWorkSection';
import { ClientsMarqueeSection } from '@/sections/ClientsMarqueeSection';
import { CtaBandSection } from '@/sections/CtaBandSection';

export const HomePage: React.FC = () => {
  return (
    <>
      <SEO
        title="Connecting Brands with People"
        description="VR Media & Advertising is South India's premier outdoor advertising, high-definition LED video wall, railway station transit, and brand event production agency."
        canonicalPath="/"
      />
      
      {/* 10 Core Sections */}
      <HeroSection />
      <PrimaryServicesStrip />
      <SpecializedServicesGrid />
      <AboutDifferentiatorsSection />
      <HowItWorksSection />
      <FeaturedWorkSection />
      <ClientsMarqueeSection />
      <CtaBandSection />
    </>
  );
};
