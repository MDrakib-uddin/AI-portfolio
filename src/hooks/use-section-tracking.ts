import { useEffect, useRef } from 'react';
import { trackSectionView } from '@/lib/analytics';

interface UseSectionTrackingOptions {
  sectionName: string;
  threshold?: number;
  once?: boolean;
}

export const useSectionTracking = ({ 
  sectionName, 
  threshold = 0.3, 
  once = true 
}: UseSectionTrackingOptions) => {
  const sectionRef = useRef<HTMLElement>(null);
  const hasTracked = useRef(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (!hasTracked.current) {
              trackSectionView(sectionName);
              hasTracked.current = true;
              
              if (!once) {
                // Reset tracking after a delay if not tracking once
                setTimeout(() => {
                  hasTracked.current = false;
                }, 5000);
              }
            }
          } else if (!once) {
            // Reset tracking when section is out of view
            hasTracked.current = false;
          }
        });
      },
      {
        threshold,
        rootMargin: '0px 0px -10% 0px'
      }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, [sectionName, threshold, once]);

  return sectionRef;
}; 