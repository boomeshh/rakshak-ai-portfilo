import { useState, useEffect } from 'react';

/**
 * Observes a DOM element and reports whether it is intersecting the viewport.
 * @param {React.RefObject} ref - Ref attached to the element to observe
 * @param {IntersectionObserverInit} options - IntersectionObserver options
 * @returns {boolean} isIntersecting - Whether the element is currently intersecting
 */
function useIntersectionObserver(ref, options = {}) {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const element = ref?.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, options);

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref]);

  return isIntersecting;
}

export default useIntersectionObserver;
