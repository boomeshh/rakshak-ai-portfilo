/**
 * Framer Motion reusable transition configs for RAKSHAK AI Portfolio
 * Import these as the `transition` prop on motion elements for consistent timing.
 */

/**
 * Spring-based transition — natural, bouncy feel.
 * Good for card hover lifts and interactive element responses.
 */
export const springTransition = {
  type: 'spring',
  stiffness: 100,
  damping: 15,
};

/**
 * Ease-out transition — smooth deceleration over 0.6 s.
 * Good for entrance animations and section reveals.
 */
export const easeTransition = {
  duration: 0.6,
  ease: 'easeOut',
};

/**
 * Draw-line transition — used for SVG path drawing animations.
 * Apply to a `motion.path` with `initial={{ pathLength: 0 }}` and
 * `animate={{ pathLength: 1 }}` to draw the path in over 1.5 s.
 * The opacity channel fades in quickly so the line appears immediately.
 */
export const drawLineTransition = {
  pathLength: { duration: 1.5, ease: 'easeInOut' },
  opacity: { duration: 0.3 },
};

/**
 * Staggered ease transition — balanced ease-in-out over 0.5 s.
 * Good for staggered list items and sequential card entrances.
 */
export const staggeredEase = {
  duration: 0.5,
  ease: 'easeInOut',
};
