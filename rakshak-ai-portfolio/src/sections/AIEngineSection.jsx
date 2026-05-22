/**
 * AIEngineSection — Showcases the five specialized AI components of RAKSHAK.
 * Displays cards in a 2-2-1 layout with animated SVG connecting lines.
 *
 * Requirements: 8.1, 8.2, 8.3, 8.4, 8.5, 8.6
 */

import { motion } from 'framer-motion';
import { Hash, TrendingUp, MessageSquare, GitBranch, Cpu } from 'lucide-react';
import aiEngine from '../data/aiEngine';
import GlassCard from '../components/GlassCard';
import { staggerContainer, fadeInUp } from '../animations/variants';
import { drawLineTransition } from '../animations/transitions';

const iconMap = { Hash, TrendingUp, MessageSquare, GitBranch, Cpu };

export default function AIEngineSection() {
  const row1 = aiEngine.slice(0, 2);
  const row2 = aiEngine.slice(2, 4);
  const row3 = aiEngine.slice(4, 5);

  return (
    <section id="ai-engine" className="py-20 px-4 md:px-8 lg:px-16 relative">
      <h2 className="text-3xl md:text-4xl font-bold text-center cyber-text mb-4">
        AI Engine Architecture
      </h2>
      <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
        Five specialized AI components working in concert to detect and classify cyber threats.
      </p>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="relative">
          {/* Animated SVG connecting lines overlay */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            aria-hidden="true"
          >
            <motion.line
              x1="25%"
              y1="30%"
              x2="50%"
              y2="60%"
              stroke="rgba(0,245,255,0.3)"
              strokeWidth="1"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={drawLineTransition}
            />
            <motion.line
              x1="75%"
              y1="30%"
              x2="50%"
              y2="60%"
              stroke="rgba(0,245,255,0.3)"
              strokeWidth="1"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={drawLineTransition}
            />
          </svg>

          {/* Row 1: first 2 cards */}
          <div className="flex justify-center gap-6 mb-6">
            {row1.map((component) => {
              const Icon = iconMap[component.icon];
              return (
                <motion.div variants={fadeInUp} key={component.id} className="w-64">
                  <GlassCard hoverGlow className="p-6 rounded-xl h-full">
                    {Icon && <Icon size={28} className="text-cyan-400 mb-3" aria-hidden="true" />}
                    <h3 className="text-base font-semibold text-white mb-2">{component.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-3">{component.description}</p>
                    <span className="inline-block px-2 py-1 rounded-full text-xs font-medium bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                      {component.badge}
                    </span>
                  </GlassCard>
                </motion.div>
              );
            })}
          </div>

          {/* Row 2: next 2 cards */}
          <div className="flex justify-center gap-6 mb-6">
            {row2.map((component) => {
              const Icon = iconMap[component.icon];
              return (
                <motion.div variants={fadeInUp} key={component.id} className="w-64">
                  <GlassCard hoverGlow className="p-6 rounded-xl h-full">
                    {Icon && <Icon size={28} className="text-cyan-400 mb-3" aria-hidden="true" />}
                    <h3 className="text-base font-semibold text-white mb-2">{component.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-3">{component.description}</p>
                    <span className="inline-block px-2 py-1 rounded-full text-xs font-medium bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                      {component.badge}
                    </span>
                  </GlassCard>
                </motion.div>
              );
            })}
          </div>

          {/* Row 3: last card centered */}
          <div className="flex justify-center">
            {row3.map((component) => {
              const Icon = iconMap[component.icon];
              return (
                <motion.div variants={fadeInUp} key={component.id} className="w-64">
                  <GlassCard hoverGlow className="p-6 rounded-xl h-full">
                    {Icon && <Icon size={28} className="text-cyan-400 mb-3" aria-hidden="true" />}
                    <h3 className="text-base font-semibold text-white mb-2">{component.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-3">{component.description}</p>
                    <span className="inline-block px-2 py-1 rounded-full text-xs font-medium bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                      {component.badge}
                    </span>
                  </GlassCard>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
