import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { members, guide, mentors } from '../data/team';
import TeamCard from '../components/TeamCard';
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

      {/* Team Members */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
      >
        {members.map((member) => (
          <TeamCard
            key={member.id}
            name={member.name}
            role={member.role}
            image={member.image}
            accent="cyan"
            linkedin={member.linkedin}
            github={member.github}
          />
        ))}
      </motion.div>

      {/* Project Guide */}
      <div className="flex justify-center mb-10">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="w-full max-w-xs"
        >
          <TeamCard
            name={guide.name}
            role={guide.role}
            organization={guide.organization}
            image={guide.image}
            accent="purple"
            linkedin={guide.linkedin}
            badge="Project Guide & Mentor"
          />
        </motion.div>
      </div>

      {/* Mentor / Leadership Divider */}
      <div className="flex items-center gap-4 mb-10 max-w-2xl mx-auto">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />
        <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10">
          <Star size={14} className="text-cyan-400" />
          <span className="text-cyan-400 text-xs font-semibold uppercase tracking-widest">
            Mentor &amp; Leadership
          </span>
          <Star size={14} className="text-cyan-400" />
        </div>
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />
      </div>

      {/* Mentor Cards */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto"
      >
        {mentors.map((mentor) => (
          <TeamCard
            key={mentor.id}
            name={mentor.name}
            role={mentor.role}
            organization={mentor.organization}
            image={mentor.image}
            accent={mentor.accent}
            linkedin={mentor.linkedin}
            badge="Mentor / Leadership"
          />
        ))}
      </motion.div>
    </section>
  );
};

export default TeamSection;
