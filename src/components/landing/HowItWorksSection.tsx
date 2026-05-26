import { useScrollReveal } from './useScrollReveal';
import { cn } from '@/lib/utils';
import { Shield, GitBranch, MessageSquare, Radio } from 'lucide-react';

const steps = [
  {
    icon: Radio,
    number: '01',
    title: 'Visit budabit.club',
    description: 'Start in the app. Explore public developer communities, inspect their rooms and curated work. Bring your own Nostr identity when you are ready to participate.',
  },
  {
    icon: MessageSquare,
    number: '02',
    title: 'Create or enter a community',
    description: 'Communities are Communikey pubkeys with their own content sections, relays, moderators, Blossom media servers, and member-facing access flows.',
  },
  {
    icon: GitBranch,
    number: '03',
    title: 'Curate community knowledge',
    description: 'Collect important repos, code snippets, and many types of content to enrich the collective hive mind.',
  },
  {
    icon: Shield,
    number: '04',
    title: 'Grant access and moderate',
    description: 'Use content-based permissions so members and moderators can publish in specific sections, review applications, and keep community spaces high-signal.',
  },
];

export function HowItWorksSection() {
  const [ref, isVisible] = useScrollReveal<HTMLDivElement>();

  return (
    <section className="relative pt-24 pb-8 md:pt-32 md:pb-10">
      {/* Subtle background accent */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/3 blur-[120px]" />
      </div>

      <div className="container mx-auto px-6" ref={ref}>
        <div className="text-center mb-16">
          <p className={cn(
            "text-primary font-mono text-sm tracking-widest uppercase mb-4 transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            How it works
          </p>
          <h2 className={cn(
            "text-3xl md:text-5xl font-bold tracking-tight transition-all duration-700 delay-100",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            Open protocols as the coordination layer
          </h2>
          <p className={cn(
            "text-muted-foreground text-lg mt-4 max-w-2xl mx-auto transition-all duration-700 delay-200",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            Nostr carries community identity, signed activity, curation, and permission state. BudaBit gives developers a focused interface for using that open coordination graph.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className={cn(
                "relative group p-8 rounded-2xl border border-border/40 bg-card/50 backdrop-blur-sm transition-all duration-700 hover:border-primary/30 hover:bg-primary/5",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
              style={{ transitionDelay: isVisible ? `${300 + i * 100}ms` : '0ms' }}
            >
              {/* Step number */}
              <span className="text-primary/20 font-mono text-5xl font-bold absolute top-4 right-6 transition-colors group-hover:text-primary/30">
                {step.number}
              </span>

              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 transition-colors group-hover:bg-primary/20">
                <step.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-3">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>

              {/* Connector line (hidden on last item and mobile) */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-border/60" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
