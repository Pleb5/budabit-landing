import { Github, ExternalLink } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-border/30 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <img src="/images/logo-mark.png" alt="BudaBit" className="h-8 w-8" />
            <span className="font-bold text-lg tracking-tight">BudaBit</span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a
              href="https://budabit.club"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-primary transition-colors"
            >
              <ExternalLink className="h-3.5 w-3.5" />
              Community
            </a>
            <a
              href="https://github.com/Pleb5/flotilla-budabit"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-primary transition-colors"
            >
              <Github className="h-3.5 w-3.5" />
              GitHub
            </a>
            <a
              href="https://habla.news/u/hodlbod@coracle.social/1741286140797"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              Interop Guide
            </a>
          </div>

          {/* Credits */}
          <div className="text-sm text-muted-foreground/60">
            Open source &middot; Built on{' '}
            <a
              href="https://nostr.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary/60 hover:text-primary transition-colors"
            >
              Nostr
            </a>
            {' '}&middot;{' '}
            <a
              href="https://shakespeare.diy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground/50 hover:text-muted-foreground transition-colors"
            >
              Vibed with Shakespeare
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
