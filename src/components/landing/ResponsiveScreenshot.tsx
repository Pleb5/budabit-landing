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
    <picture className={cn('block', className)}>
      <source media="(max-width: 767px)" srcSet={mobileSrc} />
      <img src={desktopSrc} alt={alt} className={cn('w-full h-full object-cover', imageClassName)} />
    </picture>
  );
}
