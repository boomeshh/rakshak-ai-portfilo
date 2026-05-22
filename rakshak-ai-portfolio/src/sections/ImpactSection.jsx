import { motion } from 'framer-motion';
import { Shield, Zap, AlertTriangle, BookOpen, Eye, Database } from 'lucide-react';
import impact from '../data/impact';
import { staggerContainer, fadeInUp } from '../animations/variants';

const iconMap = { Shield, Zap, AlertTriangle, BookOpen, Eye, Database };

export default function ImpactSection() {
  return (
    <section id="impact" className="py-20 px-4 md:px-8 lg:px-16 relative">
      <h2 className="text-3xl md:text-4xl font-bold text-center cyber-text mb-4">Defence Impact</h2>
      <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
        Strengthening national cyber defence through AI-powered threat intelligence and rapid response.
      </p>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {impact.map((item) => {
          const Icon = iconMap[item.icon];
          return (
            <motion.div
              key={item.id}
              variants={fadeInUp}
              whileHover={{ y: -6, boxShadow: '0 0 25px rgba(0,245,255,0.3)' }}
              className={`glass-card rounded-xl p-6 bg-gradient-to-br ${item.gradient}`}
            >
              <Icon size={32} className="text-cyan-400 mb-4" aria-hidden="true" />
              <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
