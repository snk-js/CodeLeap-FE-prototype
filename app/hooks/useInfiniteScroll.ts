import { useEffect, useRef } from 'react';

export const useInfiniteScroll = (callback: () => void, hasMore: boolean) => {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const sentinelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!hasMore) return;

    const options = {
      root: null,
      rootMargin: '500px 0px 0px 0px',
      threshold: 0.1,
    };

    observerRef.current = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        callback();
      }
    }, options);

    if (sentinelRef.current) {
      observerRef.current.observe(sentinelRef.current);
    }

    return () => {
      if (observerRef.current && sentinelRef.current) {
        observerRef.current.unobserve(sentinelRef.current);
      }
    };
  }, [callback, hasMore]);

  return sentinelRef;
};