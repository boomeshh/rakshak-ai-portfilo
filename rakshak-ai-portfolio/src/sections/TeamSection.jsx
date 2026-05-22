import { motion } from 'framer-motion';
import { Link, Code2, Star } from 'lucide-react';
import { members, guide } from '../data/team';
import GlassCard from '../components/GlassCard';
import { staggerContainer, fadeInUp } from '../animations/variants';

const TeamSection = () => {
  return (
    <section id="team" className="py-20 px-4 md:px-8 lg:px-16 relative">
      <h2 className="text-3xl md:text-4xl font-bold text-center cyber-text mb-4">
        Meet the Team
      </h2>
      <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
        The talented individuals who built RAKSHAK AI for national cyber defence.
      </p>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
      >
        {members.map((member) => (
          <motion.div
            key={member.id}
            variants={fadeInUp}
            whileHover={{ y: -4, boxShadow: '0 0 20px rgba(0,245,255,0.3)' }}
          >
            <GlassCard className="p-6 rounded-xl text-center">
              <div
                className="w-16 h-16 rounded-full mx-auto mb-4 bg-gradient-to-br from-cyan-500/30 to-blue-500/30 border-2 border-cyan-400/50 flex items-center justify-center"
                style={{ boxShadow: '0 0 15px rgba(0,245,255,0.3)' }}
              >
                <span className="text-cyan-400 text-xl font-bold">{member.name[0]}</span>
              </div>
              <h3 className="text-white font-semibold mb-1">{member.name}</h3>
              <span className="inline-block px-2 py-1 rounded-full text-xs bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 mb-4">
                {member.role}
              </span>
              <div className="flex justify-center gap-3">
                <a
                  href={member.linkedin}
                  aria-label={`${member.name} LinkedIn`}
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Link size={16} />
                </a>
                <a
                  href={member.github}
                  aria-label={`${member.name} GitHub`}
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Code2 size={16} />
                </a>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </motion.div>

      <div className="flex justify-center">
        <motion.div
          whileHover={{ y: -4, boxShadow: '0 0 25px rgba(139,92,246,0.4)' }}
          className="w-64"
        >
          <GlassCard className="p-6 rounded-xl text-center border border-purple-500/30">
            <Star size={24} className="text-purple-400 mx-auto mb-3" aria-hidden="true" />
            <p className="text-purple-400 text-xs font-medium mb-2 uppercase tracking-widest">
              Project Guide
            </p>
            <div className="w-16 h-16 rounded-full mx-auto mb-4 bg-gradient-to-br from-purple-500/30 to-blue-500/30 border-2 border-purple-400/50 flex items-center justify-center">
              <span className="text-purple-400 text-xl font-bold">{guide.name[0]}</span>
            </div>
            <h3 className="text-white font-semibold mb-1">{guide.name}</h3>
            <span className="inline-block px-2 py-1 rounded-full text-xs bg-purple-500/20 text-purple-400 border border-purple-500/30 mb-4">
              {guide.role}
            </span>
            <div className="flex justify-center">
              <a
                href={guide.linkedin}
                aria-label={`${guide.name} LinkedIn`}
                className="text-gray-400 hover:text-purple-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Link size={16} />
              </a>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;
