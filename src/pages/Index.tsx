import { useSeoMeta } from '@unhead/react';
import { Navbar } from '@/components/landing/Navbar';
import { HeroSection } from '@/components/landing/HeroSection';
import { ProblemSection } from '@/components/landing/ProblemSection';
import { PillarsSection } from '@/components/landing/PillarsSection';
import { HowItWorksSection } from '@/components/landing/HowItWorksSection';
import { CTASection } from '@/components/landing/CTASection';
import { Footer } from '@/components/landing/Footer';

const Index = () => {
  const title = 'BudaBit — Open-Protocol Development for Communities';
  const description = 'A community network for developers where rooms, community curations, permissions, and moderation are verifiable, portable, and built on Nostr.';

  useSeoMeta({
    title,
    description,
    ogTitle: title,
    ogDescription: description,
    ogType: 'website',
    ogUrl: 'https://budabit.org/',
    ogImage: 'https://budabit.org/images/budabit-logo.svg',
    ogImageAlt: 'BudaBit logo and brand mark',
    twitterTitle: title,
    twitterDescription: description,
    twitterCard: 'summary',
    twitterImage: 'https://budabit.org/images/budabit-logo.svg',
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
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
