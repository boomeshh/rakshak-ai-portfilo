/**
 * SolutionSection — "Our Solution": introduces RAKSHAK AI and its core capabilities.
 * Two-column layout: narrative on the left, feature cards on the right.
 */

import { motion } from 'framer-motion';
import {
  Brain,
  ClipboardList,
  AlertTriangle,
  MailCheck,
  BarChart3,
  FileText,
  Lock,
  GraduationCap,
  ShieldCheck,
} from 'lucide-react';
import features from '../data/features';
import { staggerContainer, fadeInUp } from '../animations/variants';

const iconMap = {
  Brain,
  ClipboardList,
  AlertTriangle,
  MailCheck,
  BarChart3,
  FileText,
  Lock,
  GraduationCap,
};

const SolutionSection = () => {
  return (
    <section id="solution" className="py-20 md:py-28 bg-surface scroll-mt-16">
      <div className="section">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left: narrative */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="lg:col-span-5 lg:sticky lg:top-24"
          >
            <span className="eyebrow">Our Solution</span>
            <h2 className="section-title">An AI-Powered Defence Cyber Safety Portal</h2>
            <p className="text-slate-600 text-base md:text-lg leading-relaxed mt-5">
              <span className="font-semibold text-primary">RAKSHAK AI</span> is an AI-powered
              Defence Cyber Incident and Safety Portal that helps defence personnel detect cyber
              threats, report incidents, receive AI-based guidance, and escalate critical cases to
              CERT authorities.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 text-secondary text-sm font-medium bg-white border border-slate-200 rounded-lg px-4 py-2.5">
              <ShieldCheck size={18} />
              Built for detection, reporting, guidance, and escalation
            </div>
          </motion.div>

          {/* Right: feature cards */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5"
          >
            {features.map((feature) => {
              const Icon = iconMap[feature.icon] || ShieldCheck;
              return (
                <motion.div
                  key={feature.id}
                  variants={fadeInUp}
                  className="bg-white border border-slate-200 rounded-2xl shadow-card card-hover p-5 h-full"
                >
                  <div className="grid place-items-center w-11 h-11 rounded-xl bg-cyan-50 text-accent mb-4">
                    <Icon size={22} aria-hidden="true" />
                  </div>
                  <h3 className="text-base font-semibold text-primary mb-1.5">{feature.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{feature.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
