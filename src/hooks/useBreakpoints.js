import { useMediaQuery } from 'react-responsive';

export function useBreakpoints() {
  const isMobile = useMediaQuery({ maxWidth: 639 });
  const isTablet = useMediaQuery({ minWidth: 640, maxWidth: 1023 });
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  return { isMobile, isTablet, isDesktop };
}