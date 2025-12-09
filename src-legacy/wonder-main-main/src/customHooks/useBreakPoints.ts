'use client';
import { useCallback, useEffect, useState } from 'react';
// import useMediaQuery from '../components/externalComponents/reactResponsive';

export const useMediaQuery = (query: string) => {
  const [targetReached, setTargetReached] = useState(false);

  const updateTarget = useCallback((e: MediaQueryListEvent) => {
    if (e.matches) setTargetReached(true);
    else setTargetReached(false);
  }, []);

  useEffect(() => {
    const media = window.matchMedia(`(${query})`);
    media.addEventListener('change', updateTarget);

    // Check on mount (callback is not called until a change occurs)
    if (media.matches) setTargetReached(true);

    return () => media.removeEventListener('change', updateTarget);
  }, []);

  return targetReached;
};

const useBreakpoints = (value?: string) => {
  const isMobile = useMediaQuery(`max-width: ${value || '460px'}`);
  const isTablet = useMediaQuery('min-width: 820px');

  return {
    isTablet,
    isMobile,
  };
};

export default useBreakpoints;
