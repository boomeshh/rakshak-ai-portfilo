/**
 * ProblemSection — Cyber challenges faced by defence personnel.
 * Clean, white, academic-portfolio styling with simple icon cards.
 */

import { motion } from 'framer-motion';
import { ShieldAlert, Heart, Radio, Bug, Clock, Network } from 'lucide-react';
import problems from '../data/problems';
import { staggerContainer, fadeInUp } from '../animations/variants';

const iconMap = { ShieldAlert, Heart, Radio, Bug, Clock, Network };

const ProblemSection = () => {
  return (
    <section id="problem" className="py-20 md:py-28 scroll-mt-16">
      <div className="section">
        <div className="max-w-2xl mb-12">
          <span className="eyebrow">The Problem</span>
          <h2 className="section-title">Cyber Threats Facing Defence Personnel</h2>
          <p className="section-subtitle mt-4">
            Defence personnel are increasingly targeted by sophisticated cyber attacks that
            threaten personal safety, operational security, and national interest.
          </p>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {problems.map((problem) => {
            const Icon = iconMap[problem.icon] || ShieldAlert;
            return (
              <motion.div
                key={problem.id}
                variants={fadeInUp}
                className="card card-hover p-6 h-full"
              >
                <div className="grid place-items-center w-12 h-12 rounded-xl bg-blue-50 text-secondary mb-4">
                  <Icon size={24} aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">{problem.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{problem.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection;
