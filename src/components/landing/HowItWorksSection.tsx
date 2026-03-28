import { useScrollReveal } from './useScrollReveal';
import { cn } from '@/lib/utils';
import { Shield, GitBranch, MessageSquare, Radio } from 'lucide-react';

const steps = [
  {
    icon: Shield,
    number: '01',
    title: 'Sign in with your Nostr key',
    description: 'Your cryptographic identity is your passport. No emails, no passwords, no platform accounts. One key pair signs everything you do.',
  },
  {
    icon: MessageSquare,
    number: '02',
    title: 'Create or join a BudaBit group',
    description: 'Set up your team\'s private space — channels, threads, calendar — on the Nostr relays you trust. Tune access from invite-only to wide open.',
  },
  {
    icon: GitBranch,
    number: '03',
    title: 'Connect your repositories',
    description: 'Link repos from any Git provider. Manage issues, PRs, and discussions across multiple remotes — all in one place, all on Nostr.',
  },
  {
    icon: Radio,
    number: '04',
    title: 'Collaborate with provenance',
    description: 'Every interaction is cryptographically signed and stored on relays you choose. Your contributions, reputation, and history are portable and verifiable.',
  },
];

export function HowItWorksSection() {
  const [ref, isVisible] = useScrollReveal<HTMLDivElement>();

  return (
    <section className="py-24 md:py-32 relative">
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
            Nostr as your control plane
          </h2>
          <p className={cn(
            "text-muted-foreground text-lg mt-4 max-w-2xl mx-auto transition-all duration-700 delay-200",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            Nostr replaces the platform with a protocol. Your identity, your data, and your relationships are cryptographically yours — BudaBit just gives you a great interface to use them.
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
