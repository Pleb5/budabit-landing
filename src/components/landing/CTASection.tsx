import { useScrollReveal } from './useScrollReveal';
import { cn } from '@/lib/utils';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { BudaBitIcon } from './BudaBitIcon';
import { BUDABIT_REPO_URL, BUDABIT_COMMUNITY_URL } from './constants';

export function CTASection() {
  const [ref, isVisible] = useScrollReveal<HTMLDivElement>();

  return (
    <section className="py-24 md:py-32 relative overflow-hidden isolate">
      {/* Background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-primary/5 blur-[100px]" />
      </div>

      <div className="container mx-auto px-6" ref={ref}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className={cn(
            "text-4xl md:text-6xl font-bold tracking-tight mb-6 transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          )}>
            Ready to{' '}
            <span className="text-primary">break free</span>?
          </h2>

          <p className={cn(
            "text-muted-foreground text-lg leading-relaxed mb-10 max-w-xl mx-auto transition-all duration-700 delay-150",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            Join the first BudaBit community and experience collaborative development on your terms. Open source, open protocol, open future.
          </p>

          <div className={cn(
            "flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 delay-300",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            <Button
              asChild
              size="lg"
              className="h-14 px-8 text-base font-semibold rounded-2xl bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20 transition-all hover:shadow-xl hover:shadow-primary/30 hover:scale-[1.02]"
            >
              <a href={BUDABIT_COMMUNITY_URL} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-5 w-5" />
                Visit budabit.club
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-14 px-8 text-base font-semibold rounded-2xl border-border/50 hover:border-primary/40 hover:bg-primary/5 transition-all hover:scale-[1.02]"
            >
              <a href={BUDABIT_REPO_URL} target="_blank" rel="noopener noreferrer">
                <BudaBitIcon className="mr-2 h-5 w-5" />
                View on BudaBit
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
