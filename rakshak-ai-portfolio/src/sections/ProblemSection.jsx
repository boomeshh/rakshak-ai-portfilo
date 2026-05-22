/**
 * ProblemSection — Displays the cyber threats RAKSHAK AI addresses.
 *
 * Requirements: 4.1, 4.2, 4.3, 4.4, 4.5, 4.6
 */

import { motion } from 'framer-motion';
import { ShieldAlert, Heart, Radio, Eye, Clock, Bug } from 'lucide-react';
import problems from '../data/problems';
import GlassCard from '../components/GlassCard';
import { staggerContainer, fadeInUp } from '../animations/variants';

const iconMap = { ShieldAlert, Heart, Radio, Eye, Clock, Bug };

const ProblemSection = () => {
  return (
    <section id="problem" className="py-20 px-4 md:px-8 lg:px-16 relative">
      <h2 className="text-3xl md:text-4xl font-bold text-center cyber-text mb-4">
        Cyber Threats We Address
      </h2>
      <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
        Defence personnel face sophisticated cyber attacks that compromise national security and
        operational integrity.
      </p>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {problems.map((problem) => {
          const Icon = iconMap[problem.icon];
          return (
            <motion.div key={problem.id} variants={fadeInUp}>
              <GlassCard hoverGlow className="p-6 rounded-xl h-full">
                <Icon size={32} className="text-cyan-400 mb-4" aria-hidden="true" />
                <h3 className="text-lg font-semibold text-white mb-2">{problem.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{problem.description}</p>
              </GlassCard>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default ProblemSection;
