import { cn } from '@/lib/utils';

interface BudaBitIconProps {
  className?: string;
}

/** A small inline BudaBit campfire icon. Inverts to white for the dark theme. */
export function BudaBitIcon({ className }: BudaBitIconProps) {
  return (
    <img
      src="/images/budabit-icon.png"
      alt=""
      aria-hidden="true"
      className={cn('inline-block h-4 w-4 object-contain invert', className)}
    />
  );
}
