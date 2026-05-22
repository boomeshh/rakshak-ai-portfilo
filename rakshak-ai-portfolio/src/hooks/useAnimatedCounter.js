import { useState, useEffect, useRef } from 'react';

/**
 * Animates a numeric counter from 0 to a target value using requestAnimationFrame.
 * @param {number} target - The final value to count up to
 * @param {number} duration - Animation duration in milliseconds (default 2000)
 * @param {boolean} isActive - When true, starts the animation
 * @returns {number} count - The current animated count value
 */
function useAnimatedCounter(target, duration = 2000, isActive = false) {
  const [count, setCount] = useState(0);
  const rafRef = useRef(null);
  const startTimeRef = useRef(null);

  useEffect(() => {
    if (!isActive) {
      // Cancel any running animation when isActive becomes false
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
      return;
    }

    // Reset before starting
    setCount(0);
    startTimeRef.current = null;

    const animate = (timestamp) => {
      if (!startTimeRef.current) {
        startTimeRef.current = timestamp;
      }

      const elapsed = timestamp - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);

      // Ease-out cubic for a natural deceleration
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * target);

      setCount(current);

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      } else {
        setCount(target);
        rafRef.current = null;
      }
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
    };
  }, [target, duration, isActive]);

  return count;
}

export default useAnimatedCounter;
