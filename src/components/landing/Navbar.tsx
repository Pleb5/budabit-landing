import { useState, useEffect } from 'react';
import { ExternalLink, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { BudaBitIcon } from './BudaBitIcon';
import { BUDABIT_REPO_URL, BUDABIT_COMMUNITY_URL } from './constants';

const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Extensions', href: '#extensions' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/30 shadow-lg shadow-background/20"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <img
              src="/images/budabit-logo.svg"
              alt="BudaBit"
              className="h-8 w-auto transition-transform group-hover:scale-105"
            />
            <span className="font-bold text-xl tracking-tight">
              Buda<span className="text-primary">Bit</span>
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop actions */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              asChild
              variant="ghost"
              size="sm"
              className="text-muted-foreground hover:text-foreground"
            >
              <a href={BUDABIT_REPO_URL} target="_blank" rel="noopener noreferrer">
                <BudaBitIcon className="mr-1.5 h-4 w-4" />
                Repo
              </a>
            </Button>
            <Button
              asChild
              size="sm"
              className="rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm shadow-primary/20"
            >
              <a href={BUDABIT_COMMUNITY_URL} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-1.5 h-4 w-4" />
                Open App
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-300 bg-background/95 backdrop-blur-xl border-b border-border/30",
          mobileOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0 border-b-0"
        )}
      >
        <div className="container mx-auto px-6 py-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="block py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="flex gap-3 pt-2">
            <Button
              asChild
              variant="outline"
              size="sm"
              className="flex-1 rounded-xl"
            >
              <a href={BUDABIT_REPO_URL} target="_blank" rel="noopener noreferrer">
                <BudaBitIcon className="mr-1.5 h-4 w-4" />
                Repo
              </a>
            </Button>
            <Button
              asChild
              size="sm"
              className="flex-1 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <a href={BUDABIT_COMMUNITY_URL} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-1.5 h-4 w-4" />
                Open App
              </a>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
