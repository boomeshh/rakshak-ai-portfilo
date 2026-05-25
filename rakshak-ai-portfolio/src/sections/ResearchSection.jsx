import { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, Eye, BookOpen, Cpu, Shield, Zap, Target } from 'lucide-react';
import { staggerContainer, fadeInUp } from '../animations/variants';
import GlassCard from '../components/GlassCard';
import PdfModal from '../components/PdfModal';
import researchPdf from '../assets/FINAL RAKSHAKI AI PAPER.pdf';

const highlights = [
  'AI-powered phishing & cyber threat detection',
  'Hybrid NLP + ML threat classification engine',
  'Automated CERT escalation & alert system',
  'Real-time threat intelligence architecture',
  'Defence-oriented cybersecurity platform',
  'Role-based access: User, Admin, CERT panels',
];

const metrics = [
  { icon: Target,  value: '90–92%', label: 'Detection Accuracy',   color: 'cyan' },
  { icon: Zap,     value: '< 2s',   label: 'Threat Analysis Time', color: 'blue' },
  { icon: Cpu,     value: 'AI+NLP', label: 'Hybrid Engine',        color: 'purple' },
  { icon: Shield,  value: 'Live',   label: 'CERT Escalation',      color: 'cyan' },
];

const glowMap = {
  cyan:   { card: '0 0 20px rgba(6,182,212,0.3)',   badge: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30' },
  blue:   { card: '0 0 20px rgba(59,130,246,0.3)',  badge: 'bg-blue-500/20 text-blue-400 border-blue-500/30' },
  purple: { card: '0 0 20px rgba(139,92,246,0.3)',  badge: 'bg-purple-500/20 text-purple-400 border-purple-500/30' },
};

const ResearchSection = () => {
  const [pdfOpen, setPdfOpen] = useState(false);

  return (
    <section id="research" className="py-24 px-4 md:px-8 lg:px-16 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-14"
      >
        <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 mb-4">
          Official Research Publication
        </span>
        <h2 className="text-3xl md:text-4xl font-bold cyber-text mb-4">Research Publication</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          AI-Powered Defence Cyber Incident &amp; Safety Portal — Presented at YUDHISTRA 2026
        </p>
      </motion.div>

      {/* Main research card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto mb-14"
      >
        <GlassCard
          className="rounded-2xl border border-cyan-500/20 overflow-hidden"
          style={{ boxShadow: '0 0 40px 4px rgba(6,182,212,0.12)' }}
        >
          <div className="flex flex-col lg:flex-row">
            {/* Left — paper cover */}
            <div className="lg:w-64 flex-shrink-0 bg-gradient-to-br from-cyan-900/40 to-blue-900/40 flex flex-col items-center justify-center p-8 border-b lg:border-b-0 lg:border-r border-white/10">
              <div
                className="w-32 h-44 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 flex flex-col items-center justify-center gap-3 mb-4"
                style={{ boxShadow: '0 0 30px rgba(6,182,212,0.2)' }}
              >
                <FileText size={36} className="text-cyan-400" />
                <span className="text-cyan-400/70 text-xs font-medium text-center px-2">RAKSHAK AI</span>
                <span className="text-gray-500 text-xs text-center px-2">Research Paper</span>
              </div>
              <span className="text-xs text-cyan-400/60 uppercase tracking-widest font-medium">28 Pages</span>
            </div>

            {/* Right — details */}
            <div className="flex-1 p-8">
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 rounded-full text-xs bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">YUDHISTRA 2026</span>
                <span className="px-2 py-1 rounded-full text-xs bg-blue-500/20 text-blue-400 border border-blue-500/30">AI / Cybersecurity</span>
                <span className="px-2 py-1 rounded-full text-xs bg-purple-500/20 text-purple-400 border border-purple-500/30">Defence Tech</span>
              </div>

              <h3 className="text-xl font-bold text-white mb-2 leading-snug">
                RAKSHAK AI: AI-Powered Defence Cyber Incident &amp; Safety Portal
              </h3>
              <p className="text-gray-400 text-sm mb-5 leading-relaxed">
                A 28-page academic research paper presenting a hybrid NLP + ML threat detection system
                designed for defence personnel. Covers system architecture, AI engine design, threat
                classification methodology, and real-world evaluation results achieving 90–92% accuracy.
              </p>

              {/* Highlights */}
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                {highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2 text-xs text-gray-300">
                    <span className="text-cyan-400 mt-0.5 flex-shrink-0">▸</span>
                    {h}
                  </li>
                ))}
              </ul>

              {/* Action buttons */}
              <div className="flex flex-wrap gap-3">
                <motion.button
                  whileHover={{ scale: 1.04, boxShadow: '0 0 20px rgba(6,182,212,0.4)' }}
                  onClick={() => setPdfOpen(true)}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-500/20 border border-cyan-500/50 text-cyan-400 text-sm font-semibold hover:bg-cyan-500/30 transition-colors"
                >
                  <Eye size={16} />
                  Preview Paper
                </motion.button>
                <motion.a
                  whileHover={{ scale: 1.04 }}
                  href={researchPdf}
                  download="RAKSHAK-AI-Research-Paper.pdf"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-500/20 border border-blue-500/50 text-blue-400 text-sm font-semibold hover:bg-blue-500/30 transition-colors"
                >
                  <Download size={16} />
                  Download PDF
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.04 }}
                  href={researchPdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 border border-white/20 text-gray-300 text-sm font-semibold hover:bg-white/10 transition-colors"
                >
                  <BookOpen size={16} />
                  Open in Tab
                </motion.a>
              </div>
            </div>
          </div>
        </GlassCard>
      </motion.div>

      {/* Research metrics */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto"
      >
        {metrics.map(({ icon: Icon, value, label, color }) => {
          const g = glowMap[color];
          return (
            <motion.div key={label} variants={fadeInUp}>
              <GlassCard
                className={`p-5 rounded-xl text-center border ${
                  color === 'cyan' ? 'border-cyan-500/20' : color === 'blue' ? 'border-blue-500/20' : 'border-purple-500/20'
                }`}
                style={{ boxShadow: g.card }}
              >
                <Icon size={22} className={`mx-auto mb-2 ${
                  color === 'cyan' ? 'text-cyan-400' : color === 'blue' ? 'text-blue-400' : 'text-purple-400'
                }`} />
                <p className={`text-2xl font-bold mb-1 ${
                  color === 'cyan' ? 'text-cyan-400' : color === 'blue' ? 'text-blue-400' : 'text-purple-400'
                }`}>{value}</p>
                <p className="text-gray-400 text-xs">{label}</p>
              </GlassCard>
            </motion.div>
          );
        })}
      </motion.div>

      <PdfModal open={pdfOpen} onClose={() => setPdfOpen(false)} />
    </section>
  );
};

export default ResearchSection;
