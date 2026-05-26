import { useEffect, useState } from 'react';

import { useTheme } from '@/hooks/useTheme';
import { cn } from '@/lib/utils';

interface ResponsiveScreenshotProps {
  desktopSrc: string;
  mobileSrc: string;
  darkDesktopSrc?: string;
  darkMobileSrc?: string;
  alt: string;
  className?: string;
  imageClassName?: string;
}

const darkModeQuery = '(prefers-color-scheme: dark)';

function getSystemPrefersDark() {
  return typeof window !== 'undefined' && window.matchMedia(darkModeQuery).matches;
}

function useDarkScreenshotVariant() {
  const { theme } = useTheme();
  const [systemPrefersDark, setSystemPrefersDark] = useState(getSystemPrefersDark);

  useEffect(() => {
    if (theme !== 'system') return;

    const mediaQuery = window.matchMedia(darkModeQuery);
    const handleChange = () => setSystemPrefersDark(mediaQuery.matches);

    handleChange();
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [theme]);

  return theme === 'dark' || (theme === 'system' && systemPrefersDark);
}

export function ResponsiveScreenshot({
  desktopSrc,
  mobileSrc,
  darkDesktopSrc,
  darkMobileSrc,
  alt,
  className,
  imageClassName,
}: ResponsiveScreenshotProps) {
  const isDarkVariant = useDarkScreenshotVariant();
  const resolvedDesktopSrc = isDarkVariant ? darkDesktopSrc ?? desktopSrc : desktopSrc;
  const resolvedMobileSrc = isDarkVariant ? darkMobileSrc ?? mobileSrc : mobileSrc;

  return (
    <div className={cn('block', className)}>
      <picture>
        <source media="(min-width: 768px)" srcSet={resolvedDesktopSrc} />
        <img
          src={resolvedMobileSrc}
          alt={alt}
          loading="eager"
          decoding="sync"
          className={cn('block h-auto w-full object-contain object-top', imageClassName)}
        />
      </picture>
    </div>
  );
}
