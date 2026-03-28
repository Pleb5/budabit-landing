import { useScrollReveal } from './useScrollReveal';
import { cn } from '@/lib/utils';
import {
  GitPullRequest,
  MessageCircle,
  Calendar,
  Search,
  Zap,
  Globe,
  ShieldCheck,
  Users,
} from 'lucide-react';

const features = [
  {
    icon: GitPullRequest,
    title: 'Issues & Pull Requests',
    description: 'Full issue tracking and patch management with status updates, all stored as Nostr events — portable and signed.',
  },
  {
    icon: MessageCircle,
    title: 'Channels & Threads',
    description: 'Real-time group chat and threaded discussions. Like Discord, but on relays you control.',
  },
  {
    icon: Calendar,
    title: 'Group Calendar',
    description: 'Schedule standups, planning sessions, and releases. Calendar events live on Nostr alongside your code context.',
  },
  {
    icon: Globe,
    title: 'Multi-Remote Management',
    description: 'Mirror and fork repos across GitHub, GitLab, Gitea, or any provider. Manage them all from one interface.',
  },
  {
    icon: ShieldCheck,
    title: 'Verifiable Everything',
    description: 'Every comment, review, and merge is signed with a Nostr key. Provenance is cryptographic, not platform-granted.',
  },
  {
    icon: Users,
    title: 'Personal Web of Trust',
    description: 'You decide who you trust — based on cryptographic identity and observable behavior, not platform permissions.',
  },
  {
    icon: Search,
    title: 'Open & Permissionless',
    description: 'Any feature you\'d expect from a closed platform — open, standardized, and accessible on Nostr. Moderation stays in your hands.',
  },
  {
    icon: Zap,
    title: 'Bitcoin-Native Payments',
    description: 'Pay CI providers with fast, cheap bitcoin-backed ecash. Zap contributors directly. No credit cards, no subscriptions.',
  },
];

export function FeaturesGrid() {
  const [ref, isVisible] = useScrollReveal<HTMLDivElement>();

  return (
    <section className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6" ref={ref}>
        <div className="text-center mb-16">
          <p className={cn(
            "text-primary font-mono text-sm tracking-widest uppercase mb-4 transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            Features
          </p>
          <h2 className={cn(
            "text-3xl md:text-5xl font-bold tracking-tight transition-all duration-700 delay-100",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            Everything you need, nothing you don&apos;t own
          </h2>
          <p className={cn(
            "text-muted-foreground text-lg mt-4 max-w-2xl mx-auto transition-all duration-700 delay-200",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            Every feature a developer team needs — built on open protocols that make each event provable, portable, and standardized.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className={cn(
                "group relative p-6 rounded-2xl border border-border/30 bg-card/30 backdrop-blur-sm transition-all duration-700 hover:border-primary/25 hover:bg-card/60",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              )}
              style={{ transitionDelay: isVisible ? `${200 + i * 60}ms` : '0ms' }}
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 transition-colors group-hover:bg-primary/20">
                <feature.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-base font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
