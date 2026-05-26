import { Compass, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useScrollReveal } from './useScrollReveal';
import { cn } from '@/lib/utils';
import { ResponsiveScreenshot } from './ResponsiveScreenshot';
import { screenshotAssets } from './screenshotAssets';
import { BUDABIT_COMMUNITY_URL } from './constants';

const pillars = [
  {
    desktopImage: screenshotAssets.communityHome.desktop,
    mobileImage: screenshotAssets.communityHome.mobile,
    darkDesktopImage: screenshotAssets.communityHome.darkDesktop,
    darkMobileImage: screenshotAssets.communityHome.darkMobile,
    imageAlt: 'BudaBit community home showing sections, rooms, and members anchored to a shared community identity.',
    label: 'Community-Owned Identity',
    title: 'Communities are keys, not servers',
    description: 'A BudaBit community is identified by a durable Nostr pubkey. Servers are infrastructure hints, not the community itself, so rooms, sections, permissions, and identity can outlive any one host.',
    details: [
      'Enter a community by npub or ncommunity',
      'Rooms and threads scoped to community identity',
      'Relay and media infrastructure can be replaced or mirrored',
    ],
  },
  {
    desktopImage: screenshotAssets.communityCuration.desktop,
    mobileImage: screenshotAssets.communityCuration.mobile,
    darkDesktopImage: screenshotAssets.communityCuration.darkDesktop,
    darkMobileImage: screenshotAssets.communityCuration.darkMobile,
    imageAlt: 'BudaBit community curation interface for collecting durable project knowledge.',
    label: 'Community Curation',
    title: 'Curate and ship software together',
    description: 'Communities can curate important knowledge into a durable treasure trove of information. Curation becomes a signed, reviewable part of the community instead of private lists trapped faceless services.',
    details: [
      'Community collections for important development context',
      'Information can be targeted to communities without duplicating it',
      'Curator permissions can be granted per content section',
    ],
  },
  {
    desktopImage: screenshotAssets.moderationAccess.desktop,
    mobileImage: screenshotAssets.moderationAccess.mobile,
    darkDesktopImage: screenshotAssets.moderationAccess.darkDesktop,
    darkMobileImage: screenshotAssets.moderationAccess.darkMobile,
    imageAlt: 'BudaBit moderation and access controls showing signed, auditable community decisions.',
    label: 'Open-Protocol Development',
    title: 'The work around shipping becomes portable',
    description: 'Git made code shareable. Nostr makes coordination shareable too: reviews, rooms, access grants, moderation, repo context, and reputation can be verified independently and carried across relays and clients.',
    details: [
      'Every meaningful action signed with a Nostr key',
      'Moderation and access decisions remain auditable',
      'Reputation and context travel with the people and communities',
    ],
  },
];

export function PillarsSection() {
  return (
    <section className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        <div className="space-y-32 md:space-y-40">
          {pillars.map((pillar, i) => (
            <PillarRow key={pillar.label} pillar={pillar} index={i} />
          ))}
        </div>
        <div className="mt-20 flex flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap md:mt-24">
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
              Quick Start Guide
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

interface PillarRowProps {
  pillar: typeof pillars[number];
  index: number;
}

function PillarRow({ pillar, index }: PillarRowProps) {
  const [ref, isVisible] = useScrollReveal<HTMLDivElement>({ threshold: 0.1 });
  const isReversed = index % 2 === 1;

  return (
    <div
      ref={ref}
      className={cn(
        "grid lg:grid-cols-2 gap-12 lg:gap-20 items-center",
        isReversed && "lg:grid-flow-dense"
      )}
    >
      {/* Image */}
      <div
        className={cn(
          "relative mx-auto w-full max-w-[430px] transition-opacity duration-700 md:max-w-3xl lg:max-w-[640px] xl:max-w-[680px]",
          isReversed && "lg:col-start-2",
          isReversed ? "lg:ml-auto" : "lg:mr-auto",
          isVisible ? "opacity-100" : "opacity-0"
        )}
      >
        <div className="relative overflow-hidden rounded-2xl border border-border/30 bg-card/60 shadow-2xl shadow-primary/10">
          <ResponsiveScreenshot
            desktopSrc={pillar.desktopImage}
            mobileSrc={pillar.mobileImage}
            darkDesktopSrc={pillar.darkDesktopImage}
            darkMobileSrc={pillar.darkMobileImage}
            alt={pillar.imageAlt}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
        </div>
        {/* Glow effect behind image */}
        <div className="absolute -inset-4 bg-primary/5 rounded-3xl blur-3xl -z-10 animate-glow-pulse" />
      </div>

      {/* Content */}
      <div
        className={cn(
          "mx-auto max-w-2xl transition-all duration-1000 delay-200 lg:mx-0",
          isReversed && "lg:col-start-1",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}
      >
        <span className="text-primary font-mono text-sm tracking-widest uppercase">
          {pillar.label}
        </span>
        <h3 className="text-3xl md:text-4xl font-bold tracking-tight mt-3 mb-5">
          {pillar.title}
        </h3>
        <p className="text-muted-foreground text-lg leading-relaxed mb-8">
          {pillar.description}
        </p>

        <ul className="space-y-4">
          {pillar.details.map((detail) => (
            <li key={detail} className="flex items-start gap-3">
              <span className="mt-1.5 w-2 h-2 rounded-full bg-primary shrink-0" />
              <span className="text-foreground/80 text-sm leading-relaxed">{detail}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
