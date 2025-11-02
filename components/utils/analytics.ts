// Google Analytics event tracking utilities

declare global {
  interface Window {
    gtag?: (
      command: string,
      action: string,
      params?: Record<string, any>
    ) => void;
  }
}

/**
 * Send a custom event to Google Analytics
 */
export const trackEvent = (
  action: string,
  category: string,
  label?: string,
  value?: number
) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

/**
 * Track project link clicks (GitHub source code or Live project)
 */
export const trackProjectClick = (
  projectTitle: string,
  linkType: "source_code" | "live_project"
) => {
  trackEvent("click_project", "Projects", `${projectTitle} - ${linkType}`);
};

/**
 * Track social media link clicks
 */
export const trackSocialClick = (platform: "linkedin" | "github" | "email") => {
  trackEvent("click_social", "Social Media", platform);
};

/**
 * Track contact button click
 */
export const trackContactClick = () => {
  trackEvent("click_contact", "Contact", "email_button");
};

/**
 * Track section scroll/view
 */
export const trackSectionView = (sectionName: string) => {
  trackEvent("section_view", "Navigation", sectionName);
};

/**
 * Track outbound link clicks
 */
export const trackOutboundClick = (url: string, label?: string) => {
  trackEvent("click_outbound", "Outbound Links", label || url);
};
