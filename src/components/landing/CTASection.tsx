import { Compass, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { BUDABIT_COMMUNITY_URL } from './constants';

export function CTASection() {
  return (
    <section className="relative isolate overflow-hidden pt-0 pb-16 md:pb-20">
      {/* Background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 h-[420px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[100px]" />
      </div>

      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-3xl text-center">
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap">
            <Button
              asChild
              size="lg"
              className="h-14 px-8 text-base font-semibold rounded-2xl bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20 transition-all hover:shadow-xl hover:shadow-primary/30 hover:scale-[1.02]"
            >
              <a href={BUDABIT_COMMUNITY_URL} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-5 w-5" />
                Visit budabit.club
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
                Quick Start
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
