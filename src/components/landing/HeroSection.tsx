import { Compass, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { BUDABIT_COMMUNITY_URL } from './constants';
import { ResponsiveScreenshot } from './ResponsiveScreenshot';
import { screenshotAssets } from './screenshotAssets';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden isolate">
      {/* Background image with overlay */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/images/hero-network.webp"
          alt=""
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      {/* Animated grid overlay */}
      <div
        className="absolute inset-0 -z-10 animate-grid-fade"
        style={{
          backgroundImage: `
            linear-gradient(hsl(45 66% 54% / 0.06) 1px, transparent 1px),
            linear-gradient(90deg, hsl(18 82% 56% / 0.045) 1px, transparent 1px)
          `,
          backgroundSize: '64px 64px',
        }}
      />

      <div className="container mx-auto px-6 py-24 md:py-32 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-primary animate-glow-pulse" />
            Community network &middot; Built on Nostr
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05] mb-6 animate-fade-in-up">
            Open-Protocol{' '}
            <br className="hidden sm:block" />
            <span className="text-primary">development.</span>{' '}
            <br className="hidden sm:block" />
            Connected communities.
          </h1>

          {/* Subhead */}
          <p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed opacity-0 animate-fade-in-up"
            style={{ animationDelay: '0.15s' }}
          >
            BudaBit upgrades open-source development into Open-Protocol development: the coordination around shipping software becomes verifiable, portable, and community-owned.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col items-center justify-center gap-4 opacity-0 animate-fade-in-up sm:flex-row sm:flex-wrap"
            style={{ animationDelay: '0.3s' }}
          >
            <Button
              asChild
              size="lg"
              className="h-14 px-8 text-base font-semibold rounded-2xl bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20 transition-all hover:shadow-xl hover:shadow-primary/30 hover:scale-[1.02]"
            >
              <a href={BUDABIT_COMMUNITY_URL} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-5 w-5" />
                Explore budabit.club
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-14 px-8 text-base font-semibold rounded-2xl border-primary/40 bg-primary/10 text-primary hover:border-primary/60 hover:bg-primary/15 transition-all hover:scale-[1.02]"
            >
              <a href="/quick-start">
                <Compass className="mr-2 h-5 w-5" />
                Quick Start
              </a>
            </Button>
          </div>

          {/* Tech badges */}
          <div
            className="flex flex-wrap items-center justify-center gap-3 mt-12 opacity-0 animate-fade-in"
            style={{ animationDelay: '0.5s' }}
          >
            {['Open-Protocol Development', 'Communikey Communities', 'Community Curations', 'Portable Provenance'].map((label) => (
              <span
                key={label}
                className="px-3 py-1.5 rounded-lg bg-secondary/60 text-muted-foreground text-xs font-mono tracking-wide border border-border/40"
              >
                {label}
              </span>
            ))}
          </div>

          <div
            className="relative mt-14 opacity-0 animate-fade-in-up"
            style={{ animationDelay: '0.4s' }}
          >
            <div className="absolute inset-x-10 top-10 h-40 rounded-full bg-primary/20 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-primary/20 bg-card/80 shadow-2xl shadow-black/40 backdrop-blur-sm">
              <div className="flex items-center gap-2 border-b border-border/60 bg-background/80 px-4 py-3 text-[9px] font-mono uppercase tracking-[0.12em] text-muted-foreground sm:px-5 sm:text-[11px] sm:tracking-[0.24em]">
                <span className="h-2.5 w-2.5 rounded-full bg-primary/90" />
                <span className="h-2.5 w-2.5 rounded-full bg-secondary" />
                <span className="h-2.5 w-2.5 rounded-full bg-foreground/30" />
                <span className="ml-1 min-w-0">Community-owned development graph</span>
              </div>

              <ResponsiveScreenshot
                desktopSrc={screenshotAssets.repoOverviewDesktop}
                mobileSrc={screenshotAssets.repoOverviewMobile}
                alt="BudaBit repository workspace with signed activity, community context, and portable repository coordination."
                imageClassName="w-full h-auto object-top"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
