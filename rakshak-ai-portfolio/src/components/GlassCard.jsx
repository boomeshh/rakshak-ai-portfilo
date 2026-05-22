/**
 * GlassCard — Framer Motion wrapper that applies the glass-card style.
 * When `hoverGlow` is true the card lifts and emits a cyan neon glow on hover.
 *
 * Requirements: 4.6, 5.4, 14.5, 14.6
 */

import { motion } from 'framer-motion';

const GlassCard = ({ className = '', children, hoverGlow = false, ...rest }) => {
  const hoverProps = hoverGlow
    ? {
        whileHover: {
          scale: 1.02,
          boxShadow: '0 0 20px rgba(0,245,255,0.4)',
        },
      }
    : {};

  return (
    <motion.div
      className={`glass-card ${className}`}
      {...hoverProps}
      {...rest}
    >
      {children}
    </motion.div>
  );
};

export default GlassCard;
