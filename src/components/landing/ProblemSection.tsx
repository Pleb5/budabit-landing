import { AlertTriangle, Lock, Unlink } from 'lucide-react';
import { useScrollReveal } from './useScrollReveal';
import { cn } from '@/lib/utils';

const problems = [
  {
    icon: Unlink,
    title: 'Fragmented Workflow',
    description: 'Your code lives on GitHub, conversations on Discord, planning on Notion, CI on yet another platform. Context is scattered, continuity is lost.',
  },
  {
    icon: Lock,
    title: 'Platform Lock-in',
    description: 'Your issues, reviews, and discussions belong to the platform — not to you. Migrate and you start from zero. Your reputation doesn\'t travel.',
  },
  {
    icon: AlertTriangle,
    title: 'Trust by Authority',
    description: 'Permissions are granted by platform admins, not verified by cryptographic identity. You can\'t independently verify who did what — you just have to trust the provider.',
  },
];

export function ProblemSection() {
  const [ref, isVisible] = useScrollReveal<HTMLDivElement>();

  return (
    <section className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6" ref={ref}>
        <div className="text-center mb-16">
          <p className={cn(
            "text-primary font-mono text-sm tracking-widest uppercase mb-4 transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            The problem
          </p>
          <h2 className={cn(
            "text-3xl md:text-5xl font-bold tracking-tight transition-all duration-700 delay-100",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            Developer tools shouldn&apos;t be silos
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {problems.map((problem, i) => (
            <div
              key={problem.title}
              className={cn(
                "group relative p-8 rounded-2xl border border-border/40 bg-card/50 backdrop-blur-sm transition-all duration-700 hover:border-destructive/30 hover:bg-destructive/5",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              )}
              style={{ transitionDelay: isVisible ? `${200 + i * 100}ms` : '0ms' }}
            >
              <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center mb-5 transition-colors group-hover:bg-destructive/20">
                <problem.icon className="h-6 w-6 text-destructive/70" />
              </div>
              <h3 className="text-lg font-semibold mb-3">{problem.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
