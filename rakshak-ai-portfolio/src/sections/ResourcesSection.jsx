import { motion } from 'framer-motion';
import { FileText, Database, Play, Layout, Award, ExternalLink, Download } from 'lucide-react';
import resources from '../data/resources';
import GlassCard from '../components/GlassCard';
import { staggerContainer, fadeInUp } from '../animations/variants';

const iconMap = { FileText, Database, Play, Layout, Award };

const accentGlow = {
  cyan:   { border: 'border-cyan-500/20', glow: '0 0 20px rgba(6,182,212,0.25)',  btn: 'bg-cyan-500/20 border-cyan-500/40 text-cyan-400 hover:bg-cyan-500/30' },
  blue:   { border: 'border-blue-500/20', glow: '0 0 20px rgba(59,130,246,0.25)', btn: 'bg-blue-500/20 border-blue-500/40 text-blue-400 hover:bg-blue-500/30' },
  purple: { border: 'border-purple-500/20', glow: '0 0 20px rgba(139,92,246,0.25)', btn: 'bg-purple-500/20 border-purple-500/40 text-purple-400 hover:bg-purple-500/30' },
};

const iconColor = { cyan: 'text-cyan-400', blue: 'text-blue-400', purple: 'text-purple-400' };

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
          const accent = accentGlow[resource.accent] || accentGlow.cyan;
          const isDownload = !!resource.download;
          return (
            <motion.div
              key={resource.id}
              variants={fadeInUp}
              whileHover={{ scale: 1.02, boxShadow: accent.glow }}
            >
              <GlassCard className={`p-6 rounded-xl h-full flex flex-col border ${accent.border}`} style={{ boxShadow: accent.glow }}>
                <Icon size={28} className={`${iconColor[resource.accent] || 'text-cyan-400'} mb-3`} aria-hidden="true" />
                <h3 className="text-base font-semibold text-white mb-2">{resource.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed flex-1 mb-4">{resource.description}</p>
                <a
                  href={resource.href}
                  target={isDownload ? undefined : '_blank'}
                  rel={isDownload ? undefined : 'noopener noreferrer'}
                  download={resource.download || undefined}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg border text-sm transition-colors mt-auto ${accent.btn}`}
                >
                  {isDownload ? <Download size={14} aria-hidden="true" /> : <ExternalLink size={14} aria-hidden="true" />}
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
