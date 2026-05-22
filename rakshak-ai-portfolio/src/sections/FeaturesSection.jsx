/**
 * FeaturesSection — Showcases the eight core capabilities of RAKSHAK AI.
 * Each feature is displayed in a GlassCard with a lucide icon, title, and description.
 *
 * Requirements: 5.1, 5.2, 5.3, 5.4, 5.5, 5.6
 */

import { motion } from 'framer-motion';
import {
  Brain,
  AlertTriangle,
  BarChart2,
  MessageSquare,
  Monitor,
  Database,
  FileText,
  Lock,
} from 'lucide-react';
import features from '../data/features';
import GlassCard from '../components/GlassCard';
import { staggerContainer, fadeInUp } from '../animations/variants';

const iconMap = {
  Brain,
  AlertTriangle,
  BarChart2,
  MessageSquare,
  Monitor,
  Database,
  FileText,
  Lock,
};

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 px-4 md:px-8 lg:px-16 relative">
      <h2 className="text-3xl md:text-4xl font-bold text-center cyber-text mb-4">
        Why RAKSHAK AI
      </h2>
      <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
        Eight powerful capabilities working together to protect defence personnel from cyber threats.
      </p>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {features.map((feature) => {
          const Icon = iconMap[feature.icon];
          return (
            <motion.div key={feature.id} variants={fadeInUp}>
              <GlassCard hoverGlow className="p-6 rounded-xl h-full">
                {Icon && (
                  <Icon size={28} className="text-cyan-400 mb-3" aria-hidden="true" />
                )}
                <h3 className="text-base font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
              </GlassCard>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default FeaturesSection;
