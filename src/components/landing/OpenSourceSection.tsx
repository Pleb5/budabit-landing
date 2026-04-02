import { useScrollReveal } from './useScrollReveal';
import { cn } from '@/lib/utils';
import { Code2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { BudaBitIcon } from './BudaBitIcon';
import { BUDABIT_REPO_URL } from './constants';

export function OpenSourceSection() {
  const [ref, isVisible] = useScrollReveal<HTMLDivElement>();

  return (
    <section className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6" ref={ref}>
        <div className="max-w-4xl mx-auto text-center">
          <div className={cn(
            "inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium mb-8 transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            <Code2 className="h-4 w-4" />
            Open Source Software
          </div>

          <h2 className={cn(
            "text-3xl md:text-5xl font-bold tracking-tight mb-6 transition-all duration-700 delay-100",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            Built on open protocols.{' '}
            <span className="text-primary">Every event provable.</span>
          </h2>

          <p className={cn(
            "text-muted-foreground text-lg leading-relaxed mb-10 max-w-2xl mx-auto transition-all duration-700 delay-200",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            BudaBit is free and open source software built entirely on Nostr — an open protocol where data continuity and trust semantics are baked in. No proprietary APIs, no vendor lock-in. Just standardized events that any client can read, verify, and display.
          </p>

          {/* Code block visual */}
          <div className={cn(
            "max-w-lg mx-auto rounded-2xl border border-border/40 bg-card/60 backdrop-blur-sm overflow-hidden text-left mb-12 transition-all duration-700 delay-300",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          )}>
            <div className="flex items-center gap-2 px-5 py-3 border-b border-border/30">
              <span className="w-3 h-3 rounded-full bg-destructive/50" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/50" />
              <span className="w-3 h-3 rounded-full bg-green-500/50" />
              <span className="text-muted-foreground text-xs font-mono ml-2">nostr-event.json</span>
            </div>
            <pre className="p-5 text-sm font-mono leading-relaxed overflow-x-auto">
              <code>
                <span className="text-muted-foreground">{'{'}</span>{'\n'}
                <span className="text-primary/70">  &quot;kind&quot;</span><span className="text-muted-foreground">:</span> <span className="text-orange-400/80">1621</span><span className="text-muted-foreground">,</span>{'\n'}
                <span className="text-primary/70">  &quot;pubkey&quot;</span><span className="text-muted-foreground">:</span> <span className="text-green-400/70">&quot;d04ecf...&quot;</span><span className="text-muted-foreground">,</span>{'\n'}
                <span className="text-primary/70">  &quot;content&quot;</span><span className="text-muted-foreground">:</span> <span className="text-green-400/70">&quot;Fix: resolve relay timeout&quot;</span><span className="text-muted-foreground">,</span>{'\n'}
                <span className="text-primary/70">  &quot;sig&quot;</span><span className="text-muted-foreground">:</span> <span className="text-green-400/70">&quot;3a8f9b...&quot;</span>{'\n'}
                <span className="text-muted-foreground">{'}'}</span>
              </code>
            </pre>
          </div>

          <div
            className={cn(
              'flex items-center justify-center transition-all duration-700',
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            )}
            style={{ transitionDelay: isVisible ? '400ms' : '0ms' }}
          >
            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-12 px-6 rounded-xl border-border/50 hover:border-primary/40 hover:bg-primary/5 transition-all"
            >
              <a href={BUDABIT_REPO_URL} target="_blank" rel="noopener noreferrer">
                <BudaBitIcon className="mr-2 h-5 w-5" />
                Browse the Code
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
