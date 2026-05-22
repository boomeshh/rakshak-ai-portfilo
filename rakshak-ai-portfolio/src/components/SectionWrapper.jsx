/**
 * SectionWrapper — consistent section layout with scroll-triggered fade-in.
 * Wraps children in a <section> with standard padding and a Framer Motion
 * entrance animation that fires once when the section enters the viewport.
 *
 * Requirements: 14.2
 */

import { motion } from 'framer-motion';
import { fadeInUp } from '../animations/variants';

const SectionWrapper = ({ id, className = '', children }) => {
  return (
    <section id={id} className={`py-20 px-4 md:px-8 lg:px-16 ${className}`}>
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {children}
      </motion.div>
    </section>
  );
};

export default SectionWrapper;
