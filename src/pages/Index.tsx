import { useSeoMeta } from '@unhead/react';
import { Navbar } from '@/components/landing/Navbar';
import { HeroSection } from '@/components/landing/HeroSection';
import { ProblemSection } from '@/components/landing/ProblemSection';
import { PillarsSection } from '@/components/landing/PillarsSection';
import { HowItWorksSection } from '@/components/landing/HowItWorksSection';
import { FeaturesGrid } from '@/components/landing/FeaturesGrid';
import { ExtensionsSection } from '@/components/landing/ExtensionsSection';
import { OpenSourceSection } from '@/components/landing/OpenSourceSection';
import { CTASection } from '@/components/landing/CTASection';
import { Footer } from '@/components/landing/Footer';

const Index = () => {
  useSeoMeta({
    title: 'BudaBit — Your Code. Your Group. Your Rules.',
    description: 'A Discord-like collaboration platform for developers built on Nostr. Private group chat, issue tracking, pull requests, and repo management — no platform lock-in, every interaction cryptographically signed.',
  });

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <PillarsSection />
      <div id="how-it-works">
        <HowItWorksSection />
      </div>
      <div id="features">
        <FeaturesGrid />
      </div>
      <div id="extensions">
        <ExtensionsSection />
      </div>
      <OpenSourceSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
