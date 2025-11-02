import { useEffect } from "react";
import { trackOutboundClick } from "@/components/utils/analytics";

/**
 * Global hook to track all outbound link clicks that don't have explicit tracking
 */
export const useOutboundTracking = () => {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("a");

      if (!target) return;

      // Check if it's an outbound link
      const href = target.getAttribute("href");
      const isExternal =
        href &&
        (href.startsWith("http") || href.startsWith("https")) &&
        !href.includes(window.location.hostname);

      // Check if link already has a tracking onClick handler
      // (we check if there's a data-tracked attribute to avoid duplicates)
      const hasTracking = target.hasAttribute("data-tracked");

      if (isExternal && !hasTracking) {
        const linkText = target.textContent || target.getAttribute("aria-label") || "Unknown";
        trackOutboundClick(href, linkText);
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);
};
