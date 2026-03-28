import { cn } from '@/lib/utils';

interface BudaBitIconProps {
  className?: string;
}

/** A small inline BudaBit logo icon using the logo-mark image. */
export function BudaBitIcon({ className }: BudaBitIconProps) {
  return (
    <img
      src="/images/logo-mark.png"
      alt=""
      aria-hidden="true"
      className={cn('inline-block h-4 w-4 object-contain', className)}
    />
  );
}
