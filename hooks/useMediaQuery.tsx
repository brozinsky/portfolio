import { useState, useEffect } from "react";

/**
 * A custom hook to check if the current viewport width is below a specified maximum breakpoint.
 *
 * @param {number} maxWidth - The maximum breakpoint width in pixels.
 * @returns {boolean} - Returns `true` if the viewport width is less than or equal to the breakpoint, otherwise `false`.
 */
const useMediaQuery = (maxWidth: number): boolean => {
  const [isBelowMaxWidth, setIsBelowMaxWidth] = useState<boolean>(false);

  useEffect(() => {
    // Create a media query list
    const mediaQuery = window.matchMedia(`(max-width: ${maxWidth}px)`);

    // Update state on initial load
    setIsBelowMaxWidth(mediaQuery.matches);

    // Add event listener to update state when the media query changes
    const handleMediaChange = (event: MediaQueryListEvent) => {
      setIsBelowMaxWidth(event.matches);
    };

    // Add listener for older browsers
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", handleMediaChange);
    } else {
      // Fallback for older browsers (Safari < 14)
      mediaQuery.addListener(handleMediaChange);
    }

    // Cleanup function to remove the event listener
    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener("change", handleMediaChange);
      } else {
        // Fallback for older browsers (Safari < 14)
        mediaQuery.removeListener(handleMediaChange);
      }
    };
  }, [maxWidth]);

  return isBelowMaxWidth;
};

export default useMediaQuery;
