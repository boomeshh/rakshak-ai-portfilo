/**
 * AnimatedCounter — counts up to a target number when scrolled into view.
 * Respects the user's prefers-reduced-motion preference by showing the
 * final value immediately when motion is reduced.
 *
 * Requirements: 9.2
 */

import { useRef } from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import useAnimatedCounter from '../hooks/useAnimatedCounter';

const AnimatedCounter = ({
  target,
  duration = 2000,
  prefix = '',
  suffix = '',
}) => {
  const ref = useRef(null);
  const isIntersecting = useIntersectionObserver(ref, { threshold: 0.3 });

  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const count = useAnimatedCounter(
    target,
    duration,
    // Skip animation when reduced motion is preferred
    prefersReducedMotion ? false : isIntersecting
  );

  const displayValue = prefersReducedMotion ? target : count;

  return (
    <span ref={ref}>
      <span>
        {prefix}
        {displayValue}
        {suffix}
      </span>
    </span>
  );
};

export default AnimatedCounter;
