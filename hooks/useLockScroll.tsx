import { useLayoutEffect } from 'react';

const useLockScroll = (lock = true) => {
  useLayoutEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    
    if (lock) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = originalStyle;
      document.documentElement.style.overflow = originalStyle;
    }

    return () => {
      document.body.style.overflow = originalStyle;
      document.documentElement.style.overflow = originalStyle;
    };
  }, [lock]);
};

export default useLockScroll;