import { cn } from '@/lib/utils';

interface ResponsiveScreenshotProps {
  desktopSrc: string;
  mobileSrc: string;
  alt: string;
  className?: string;
  imageClassName?: string;
}

export function ResponsiveScreenshot({
  desktopSrc,
  mobileSrc,
  alt,
  className,
  imageClassName,
}: ResponsiveScreenshotProps) {
  return (
    <div className={cn('block', className)}>
      <img
        src={mobileSrc}
        alt={alt}
        className={cn('h-full w-full object-cover md:hidden', imageClassName)}
      />
      <img
        src={desktopSrc}
        alt={alt}
        className={cn('hidden h-full w-full object-cover md:block', imageClassName)}
      />
    </div>
  );
}
