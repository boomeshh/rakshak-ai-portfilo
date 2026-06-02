/**
 * ResearchSection — Research publication showcase + key contributions.
 * Clean white academic styling. PDF viewing/download from the bundled paper.
 */

import { motion } from 'framer-motion';
import {
  FileText,
  Download,
  ExternalLink,
  Brain,
  AlertTriangle,
  Radar,
  BarChart3,
  ShieldCheck,
  Shield,
} from 'lucide-react';
import researchPdf from '../assets/FINAL RAKSHAKI AI PAPER.pdf';
import { staggerContainer, fadeInUp } from '../animations/variants';

const highlights = [
  '28-page academic research paper',
  'AI-powered phishing detection',
  'Hybrid NLP + Machine Learning architecture',
  'Automated CERT escalation',
  'Defence-oriented cyber complaint management',
  '90–92% phishing detection accuracy',
];

const contributions = [
  {
    icon: Brain,
    title: 'AI Threat Detection',
    description: 'Machine-learning models that detect and classify cyber threats from messages and reports in real time.',
  },
  {
    icon: AlertTriangle,
    title: 'CERT Escalation',
    description: 'Automated escalation of critical incidents to CERT authorities for rapid, coordinated response.',
  },
  {
    icon: Radar,
    title: 'Threat Intelligence',
    description: 'Aggregated incident signals turned into actionable intelligence on emerging defence cyber threats.',
  },
  {
    icon: BarChart3,
    title: 'Risk Classification',
    description: 'Multi-tier risk scoring that categorises threats by severity for prioritised response.',
  },
  {
    icon: ShieldCheck,
    title: 'Secure Complaint Management',
    description: 'End-to-end, access-controlled workflow for reporting, tracking, and resolving cyber complaints.',
  },
  {
    icon: Shield,
    title: 'Defence Cyber Safety',
    description: 'A unified, defence-focused platform improving cyber awareness, safety, and incident readiness.',
  },
];

const ResearchSection = () => {
  return (
    <section id="research" className="py-20 md:py-28 bg-surface scroll-mt-16">
      <div className="section">
        {/* Heading */}
        <div className="max-w-2xl mx-auto text-center mb-12">
          <span className="eyebrow">Research Publication</span>
          <h2 className="section-title">Academic Research &amp; Findings</h2>
          <p className="section-subtitle mt-4 mx-auto">
            AI-Powered Defence Cyber Incident &amp; Safety Portal — presented at YUDHISTRA 2026.
          </p>
        </div>

        {/* Research paper card */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-5xl mx-auto bg-white border border-slate-200 rounded-2xl shadow-card overflow-hidden"
        >
          <div className="flex flex-col lg:flex-row">
            {/* Left — paper cover */}
            <div className="lg:w-72 shrink-0 bg-primary flex flex-col items-center justify-center p-8 text-center">
              <div className="w-32 h-44 rounded-xl bg-white/5 border border-white/15 flex flex-col items-center justify-center gap-3 mb-4">
                <FileText size={36} className="text-accent" />
                <span className="text-white text-xs font-semibold px-2">RAKSHAK AI</span>
                <span className="text-slate-400 text-xs px-2">Research Paper</span>
              </div>
              <span className="text-xs text-slate-300 uppercase tracking-widest font-medium">28 Pages</span>
            </div>

            {/* Right — details */}
            <div className="flex-1 p-8">
              <div className="flex flex-wrap gap-2 mb-4">
                {['YUDHISTRA 2026', 'AI / Cybersecurity', 'Defence Tech'].map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-full text-xs font-medium bg-blue-50 text-secondary border border-blue-100"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <h3 className="text-xl font-bold text-primary mb-2 leading-snug">
                RAKSHAK AI – AI-Powered Defence Cyber Incident &amp; Safety Portal
              </h3>
              <p className="text-slate-600 text-sm mb-5 leading-relaxed">
                A 28-page academic research paper presenting a hybrid NLP + Machine Learning threat
                detection system designed for defence personnel — covering system architecture, the AI
                engine, threat classification methodology, and evaluation results reaching 90–92% accuracy.
              </p>

              {/* Highlights */}
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                {highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2 text-sm text-slate-700">
                    <span className="text-accent mt-0.5 shrink-0 font-bold">▸</span>
                    {h}
                  </li>
                ))}
              </ul>

              {/* Action buttons */}
              <div className="flex flex-wrap gap-3">
                <a
                  href={researchPdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-secondary text-white text-sm font-semibold hover:bg-blue-700 transition-colors"
                >
                  <ExternalLink size={16} />
                  View Research Paper
                </a>
                <a
                  href={researchPdf}
                  download="RAKSHAK-AI-Research-Paper.pdf"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-300 text-primary text-sm font-semibold hover:bg-surface transition-colors"
                >
                  <Download size={16} />
                  Download Research Paper
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Key Contributions */}
        <div className="mt-20">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <span className="eyebrow">Key Contributions</span>
            <h2 className="section-title">What RAKSHAK AI Delivers</h2>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {contributions.map(({ icon: Icon, title, description }) => (
              <motion.div
                key={title}
                variants={fadeInUp}
                className="bg-white border border-slate-200 rounded-2xl shadow-card card-hover p-6 h-full"
              >
                <div className="grid place-items-center w-12 h-12 rounded-xl bg-cyan-50 text-accent mb-4">
                  <Icon size={24} aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">{title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;
