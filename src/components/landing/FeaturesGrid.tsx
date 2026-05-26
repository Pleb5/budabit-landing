import { useScrollReveal } from './useScrollReveal';
import { cn } from '@/lib/utils';
import {
  GitPullRequest,
  MessageCircle,
  Calendar,
  Search,
  Globe,
  ShieldCheck,
  Users,
  Server,
} from 'lucide-react';

const features = [
  {
    icon: GitPullRequest,
    title: 'Community Curations',
    description: 'Curate important knowledge for your community with signed targeting events, portable discovery, and visible provenance.',
  },
  {
    icon: MessageCircle,
    title: 'Rooms & Threads',
    description: 'Community rooms, chat messages, and forum threads live as Nostr events scoped to the community instead of a provider account.',
  },
  {
    icon: Search,
    title: 'Knowledge That Travels',
    description: 'Preserve recommendations, references, and useful context in a form that can be inspected, mirrored, and reused by compatible clients.',
  },
  {
    icon: Globe,
    title: 'Redundant Mirroring',
    description: 'Read and publish through multiple relays. Community identity and history are not pinned to one URL or one operator.',
  },
  {
    icon: ShieldCheck,
    title: 'Content-Based Permissions',
    description: 'Grant publishing rights by section: rooms, curations, widgets, reactions, labels, or general participation.',
  },
  {
    icon: Users,
    title: 'Moderator Workflows',
    description: 'Review access requests, grant or reject permissions, and moderate events or people with auditable Nostr records.',
  },
  {
    icon: Calendar,
    title: 'Events & Goals',
    description: 'Coordinate releases, calls, goals, and milestones beside the community discussions they belong to.',
  },
  {
    icon: Server,
    title: 'Optional Media Persistence',
    description: 'Communities can publish Blossom media server hints so important images and files can be mirrored instead of rotting.',
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
            The community layer for Open-Protocol development
          </h2>
          <p className={cn(
            "text-muted-foreground text-lg mt-4 max-w-2xl mx-auto transition-all duration-700 delay-200",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            The work around software becomes signed, inspectable, and portable: curation, rooms, access, moderation, and the context teams need to ship.
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
