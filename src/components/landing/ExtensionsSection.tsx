import { useScrollReveal } from './useScrollReveal';
import { cn } from '@/lib/utils';
import {
  LayoutDashboard,
  Video,
  Puzzle,
  ShieldCheck,
  Radio,
} from 'lucide-react';

const extensions = [
  {
    icon: Radio,
    title: 'CI Integration',
    description: 'Select trusted CI providers and pay per-usage with ecash.',
  },
  {
    icon: LayoutDashboard,
    title: 'Kanban Boards',
    description: 'Visual project management for your issues and tasks.',
  },
  {
    icon: Video,
    title: 'Video & Conference',
    description: 'Built-in calls and live streaming for remote teams.',
  },
];

export function ExtensionsSection() {
  const [ref, isVisible] = useScrollReveal<HTMLDivElement>();

  return (
    <section className="py-24 md:py-32 relative">
      {/* Background accent */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full bg-primary/3 blur-[120px]" />
      </div>

      <div className="container mx-auto px-6" ref={ref}>
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left: Text */}
            <div>
              <p className={cn(
                "text-primary font-mono text-sm tracking-widest uppercase mb-4 transition-all duration-700",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              )}>
                Extensible by Design
              </p>
              <h2 className={cn(
                "text-3xl md:text-5xl font-bold tracking-tight mb-6 transition-all duration-700 delay-100",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              )}>
                Load what you need. Verify who made it.
              </h2>
              <p className={cn(
                "text-muted-foreground text-lg leading-relaxed mb-8 transition-all duration-700 delay-200",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              )}>
                Extensions are published on Nostr — so security and reputation are verifiable before you install anything. Load plugins from accounts you trust, or build your own.
              </p>

              <div className={cn(
                "flex items-start gap-3 p-5 rounded-xl border border-primary/15 bg-primary/5 transition-all duration-700 delay-300",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              )}>
                <ShieldCheck className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-sm mb-1">Verifiable Extensions</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Every extension is signed by its author&apos;s Nostr key. Check their reputation before you load — no blind trust in app stores.
                  </p>
                </div>
              </div>

              <div
                className={cn(
                  "flex items-start gap-3 p-5 rounded-xl border border-border/30 bg-card/30 mt-4 transition-all duration-700",
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                )}
                style={{ transitionDelay: isVisible ? '400ms' : '0ms' }}
              >
                <Puzzle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-sm mb-1">Build Your Own</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    The extension system is open. Build custom tooling for your team and publish it on Nostr for others to discover and verify.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Extension cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {extensions.map((ext, i) => (
                <div
                  key={ext.title}
                  className={cn(
                    "group p-6 rounded-2xl border border-border/30 bg-card/30 backdrop-blur-sm transition-all duration-700 hover:border-primary/25 hover:bg-card/60",
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                  )}
                  style={{ transitionDelay: isVisible ? `${300 + i * 100}ms` : '0ms' }}
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 transition-colors group-hover:bg-primary/20">
                    <ext.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-base font-semibold mb-2">{ext.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{ext.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
