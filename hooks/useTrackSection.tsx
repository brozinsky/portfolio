import { useEffect, useRef } from "react";
import { trackSectionView } from "@/components/utils/analytics";

/**
 * Hook to track when a section becomes visible via Intersection Observer
 * @param sectionName - Name of the section to track in GA
 */
export const useTrackSection = (sectionName: string) => {
  const hasTracked = useRef(false);

  useEffect(() => {
    const sectionElement = document.getElementById(sectionName.toLowerCase());

    if (!sectionElement) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Track only once when section becomes 50% visible
          if (entry.isIntersecting && !hasTracked.current) {
            trackSectionView(sectionName);
            hasTracked.current = true;
          }
        });
      },
      {
        threshold: 0.5, // Trigger when 50% of section is visible
      }
    );

    observer.observe(sectionElement);

    return () => {
      observer.disconnect();
    };
  }, [sectionName]);
};
