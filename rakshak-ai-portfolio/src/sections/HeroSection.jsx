/**
 * HeroSection — Clean, white, academic-portfolio hero.
 * Title, subtitle, description, primary actions, and a YUDHISTRA 2026 badge.
 */

import { motion } from 'framer-motion';
import { FileText, Database, Mail, Award, ShieldCheck, Brain, BarChart3, AlertTriangle } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../animations/variants';

const DATASET_URL = 'https://bit.ly/rakshak-ai-dataset';

const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

const quickStats = [
  { icon: Brain, label: 'AI + NLP Engine' },
  { icon: AlertTriangle, label: 'CERT Escalation' },
  { icon: BarChart3, label: '90–92% Accuracy' },
  { icon: ShieldCheck, label: 'Defence-Focused' },
];

const HeroSection = () => {
  return (
    <section id="hero" className="relative pt-16 pb-20 md:pt-24 md:pb-28 bg-white scroll-mt-16">
      <div className="section grid lg:grid-cols-12 gap-12 items-center">
        {/* Left — copy */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7"
        >
          <motion.span
            variants={fadeInUp}
            className="inline-flex items-center gap-2 text-secondary text-xs font-semibold tracking-wide uppercase bg-blue-50 border border-blue-100 rounded-full px-3 py-1.5 mb-6"
          >
            <Award size={14} />
            Presented at YUDHISTRA 2026
          </motion.span>

          <motion.h1
            variants={fadeInUp}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-primary tracking-tight"
          >
            RAKSHAK AI
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="mt-4 text-lg md:text-xl font-semibold text-secondary"
          >
            AI-Powered Defence Cyber Incident &amp; Safety Portal
          </motion.p>

          <motion.p
            variants={fadeInUp}
            className="mt-4 text-slate-600 text-base md:text-lg leading-relaxed max-w-2xl"
          >
            A dedicated cyber incident reporting, threat analysis, risk classification, and CERT
            escalation platform for defence communities.
          </motion.p>

          {/* Buttons */}
          <motion.div variants={fadeInUp} className="mt-8 flex flex-col sm:flex-row flex-wrap gap-3">
            <button
              onClick={() => scrollTo('research')}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-secondary text-white font-semibold hover:bg-blue-700 transition-colors"
            >
              <FileText size={18} />
              View Research Paper
            </button>
            <a
              href={DATASET_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-slate-300 text-primary font-semibold hover:bg-surface transition-colors"
            >
              <Database size={18} />
              View Dataset
            </a>
            <button
              onClick={() => scrollTo('contact')}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-slate-300 text-primary font-semibold hover:bg-surface transition-colors"
            >
              <Mail size={18} />
              Contact Team
            </button>
          </motion.div>
        </motion.div>

        {/* Right — clean metric panel */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="lg:col-span-5"
        >
          <div className="card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="grid place-items-center w-12 h-12 rounded-xl bg-primary text-white">
                <ShieldCheck size={24} />
              </div>
              <div>
                <p className="text-primary font-semibold leading-tight">RAKSHAK AI Platform</p>
                <p className="text-slate-500 text-sm">Defence Cyber Safety Portal</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {quickStats.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 bg-white border border-slate-200 rounded-xl p-4"
                >
                  <Icon size={20} className="text-accent shrink-0" />
                  <span className="text-sm font-medium text-slate-700 leading-snug">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
