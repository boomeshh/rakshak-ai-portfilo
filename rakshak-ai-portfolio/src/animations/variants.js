/**
 * Framer Motion animation variants for RAKSHAK AI Portfolio
 * Used across all sections for consistent entrance and interaction animations.
 */

/** Fade in from below */
export const fadeInUp = {
  hidden: { y: 40, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

/** Fade in from the left */
export const fadeInLeft = {
  hidden: { x: -40, opacity: 0 },
  visible: { x: 0, opacity: 1 },
};

/** Fade in from the right */
export const fadeInRight = {
  hidden: { x: 40, opacity: 0 },
  visible: { x: 0, opacity: 1 },
};

/** Scale up from slightly smaller */
export const scaleIn = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { scale: 1, opacity: 1 },
};

/**
 * Container variant that staggers its children.
 * Pair with child variants (e.g. fadeInUp) on direct children.
 */
export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

/**
 * Card hover variant — use as the `whileHover` prop value.
 * Lifts the card slightly and adds a cyan neon glow.
 */
export const cardHover = {
  scale: 1.02,
  boxShadow: '0 0 20px rgba(0,245,255,0.4)',
};

/**
 * Continuous glow-pulse animation — use as the `animate` prop value.
 * Cycles the box-shadow between three intensity levels.
 */
export const glowPulse = {
  animate: {
    boxShadow: [
      '0 0 5px rgba(0,245,255,0.2)',
      '0 0 20px rgba(0,245,255,0.6)',
      '0 0 40px rgba(0,245,255,0.8)',
      '0 0 20px rgba(0,245,255,0.6)',
      '0 0 5px rgba(0,245,255,0.2)',
    ],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};
