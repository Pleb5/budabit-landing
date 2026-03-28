import { useScrollReveal } from './useScrollReveal';
import { cn } from '@/lib/utils';

const pillars = [
  {
    image: '/images/feature-private-group.webp',
    label: 'Private Group, Open Protocol',
    title: 'Your team\'s space — on your terms',
    description: 'Chat, forum threads, and calendar events for your group — running on Nostr relays you choose. Your BudaBit group decides its own degree of openness: fully private, invite-only, or wide open. Access controls and moderation stay in your hands, separate from the repo context.',
    details: [
      'Discord-like channels and threads on Nostr',
      'Group calendar for standups and planning',
      'Tunable privacy — from closed team to open community',
    ],
  },
  {
    image: '/images/feature-repo.webp',
    label: 'Repo Without Walls',
    title: 'Create, fork, and mirror — anywhere',
    description: 'Manage repositories across multiple hosting providers from one place. Issues, pull requests, and repo-specific discussions live on Nostr relays — not locked inside a single platform. Migrate without losing context.',
    details: [
      'Multiple remotes for the same repo in one view',
      'Fork and mirror to any Git hosting provider',
      'Issues and PRs stored on Nostr, portable by default',
    ],
  },
  {
    image: '/images/feature-trust.webp',
    label: 'Trust That Travels',
    title: 'Cryptographic identity, verifiable reputation',
    description: 'Every commit, comment, issue, and review is cryptographically signed by its author. Reputation is personal and verifiable — no central authority decides who you trust. Switch providers, switch relays — your history and trust graph come with you.',
    details: [
      'Every interaction signed with your Nostr key',
      'Personal web of trust — you decide who to trust',
      'Portable reputation across platforms and relays',
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
          "relative transition-all duration-1000",
          isReversed && "lg:col-start-2",
          isVisible ? "opacity-100 translate-x-0" : isReversed ? "opacity-0 translate-x-12" : "opacity-0 -translate-x-12"
        )}
      >
        <div className="relative rounded-2xl overflow-hidden border border-border/30 shadow-2xl shadow-primary/5">
          <img
            src={pillar.image}
            alt={pillar.label}
            className="w-full aspect-square object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
        </div>
        {/* Glow effect behind image */}
        <div className="absolute -inset-4 bg-primary/5 rounded-3xl blur-3xl -z-10 animate-glow-pulse" />
      </div>

      {/* Content */}
      <div
        className={cn(
          "transition-all duration-1000 delay-200",
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
