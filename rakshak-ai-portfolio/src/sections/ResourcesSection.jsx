import { motion } from 'framer-motion';
import { FileText, Database, Play, Layout, Award, ExternalLink } from 'lucide-react';
import resources from '../data/resources';
import GlassCard from '../components/GlassCard';
import { staggerContainer, fadeInUp } from '../animations/variants';

const iconMap = { FileText, Database, Play, Layout, Award };

const ResourcesSection = () => {
  return (
    <section id="resources" className="py-20 px-4 md:px-8 lg:px-16 relative">
      <h2 className="text-3xl md:text-4xl font-bold text-center cyber-text mb-4">
        Project Resources
      </h2>
      <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
        Access research papers, datasets, and documentation for RAKSHAK AI.
      </p>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {resources.map((resource) => {
          const Icon = iconMap[resource.icon];
          return (
            <motion.div
              key={resource.id}
              variants={fadeInUp}
              whileHover={{ scale: 1.02, boxShadow: '0 0 20px rgba(0,245,255,0.3)' }}
            >
              <GlassCard className="p-6 rounded-xl h-full flex flex-col">
                <Icon size={28} className="text-cyan-400 mb-3" aria-hidden="true" />
                <h3 className="text-base font-semibold text-white mb-2">{resource.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed flex-1 mb-4">
                  {resource.description}
                </p>
                <a
                  href={resource.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-cyan-500/20 border border-cyan-500/30 text-cyan-400 text-sm hover:bg-cyan-500/30 transition-colors mt-auto"
                >
                  <ExternalLink size={14} aria-hidden="true" />
                  {resource.label}
                </a>
              </GlassCard>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default ResourcesSection;
