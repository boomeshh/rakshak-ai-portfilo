/**
 * TeamSection — Project team, guide, and mentors.
 * Clean white cards with real profile photos.
 */

import { motion } from 'framer-motion';
import { members, guide, mentors } from '../data/team';
import TeamCard from '../components/TeamCard';
import { staggerContainer } from '../animations/variants';

const Subheading = ({ children }) => (
  <h3 className="text-center text-xs font-semibold tracking-[0.2em] uppercase text-slate-400 mb-6">
    {children}
  </h3>
);

const TeamSection = () => {
  return (
    <section id="team" className="py-20 md:py-28 scroll-mt-16">
      <div className="section">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <span className="eyebrow">The Team</span>
          <h2 className="section-title">People Behind RAKSHAK AI</h2>
          <p className="section-subtitle mt-4 mx-auto">
            A student team supported by dedicated faculty and mentors at Rathinam Technical Campus.
          </p>
        </div>

        {/* Team Members */}
        <Subheading>Team Members</Subheading>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {members.map((member) => (
            <TeamCard
              key={member.id}
              name={member.name}
              role={member.role}
              image={member.image}
              linkedin={member.linkedin}
              github={member.github}
            />
          ))}
        </motion.div>

        {/* Project Guide */}
        <Subheading>Project Guide</Subheading>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex justify-center mb-16"
        >
          <div className="w-full max-w-xs">
            <TeamCard
              name={guide.name}
              role={guide.role}
              organization={guide.organization}
              image={guide.image}
              linkedin={guide.linkedin}
              badge="Project Guide"
            />
          </div>
        </motion.div>

        {/* Mentors */}
        <Subheading>Mentors &amp; Leadership</Subheading>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto"
        >
          {mentors.map((mentor) => (
            <TeamCard
              key={mentor.id}
              name={mentor.name}
              role={mentor.role}
              organization={mentor.organization}
              image={mentor.image}
              linkedin={mentor.linkedin}
              badge="Mentor"
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;
