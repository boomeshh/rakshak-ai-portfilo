/**
 * HeroSection — full-viewport hero with typing animation, CTA buttons,
 * a decorative dashboard preview, floating stat cards, and animated
 * background layers.
 *
 * Requirements: 3.1, 3.2, 3.3, 3.4, 3.5, 3.6, 3.7, 3.8, 3.9, 3.10, 3.11
 */

import { motion } from 'framer-motion';
import { Zap, Target, Bell, ExternalLink, Code2, Play } from 'lucide-react';

import TypingAnimation from '../components/TypingAnimation';
import CyberGrid from '../components/CyberGrid';
import ParticleSystem from '../components/ParticleSystem';
import HeroDashboardPreview from '../components/HeroDashboardPreview';
import { fadeInLeft, fadeInRight } from '../animations/variants';

// ─── Floating stat cards data ────────────────────────────────────────────────
const floatingStats = [
  {
    icon: Target,
    label: '92% Accuracy',
    delay: 0.5,
    position: 'absolute -top-4 -left-4',
  },
  {
    icon: Zap,
    label: '< 2s Response',
    delay: 0.7,
    position: 'absolute -bottom-4 -right-4',
  },
  {
    icon: Bell,
    label: 'Real-Time Alerts',
    delay: 0.9,
    position: 'absolute top-1/2 -right-8',
  },
];

// ─── CTA buttons data ─────────────────────────────────────────────────────────
const ctaButtons = [
  {
    label: 'View Demo',
    icon: Play,
    className:
      'bg-cyan-500/20 border border-cyan-500/50 text-cyan-400 px-6 py-3 rounded-lg flex items-center gap-2',
  },
  {
    label: 'Explore Architecture',
    icon: ExternalLink,
    className:
      'bg-blue-500/20 border border-blue-500/50 text-blue-400 px-6 py-3 rounded-lg flex items-center gap-2',
  },
  {
    label: 'GitHub Dataset',
    icon: Code2,
    className:
      'bg-purple-500/20 border border-purple-500/50 text-purple-400 px-6 py-3 rounded-lg flex items-center gap-2',
  },
];

// ─── Component ────────────────────────────────────────────────────────────────
const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background layers */}
      <CyberGrid className="z-0" />
      <ParticleSystem className="z-0" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-20">
        <div className="flex flex-col md:flex-row items-center gap-12">

          {/* ── Left column ── */}
          <motion.div
            className="flex-1 space-y-6"
            variants={fadeInLeft}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            {/* Typing headline */}
            <TypingAnimation
              words={['RAKSHAK AI', 'Cyber Defence', 'AI-Powered Safety']}
              className="text-4xl md:text-6xl font-bold cyber-text"
            />

            {/* Subtitle */}
            <p className="text-cyan-400/80 text-lg mt-2">
              AI-Powered Defence Cyber Incident &amp; Safety Portal
            </p>

            {/* Description */}
            <p className="text-gray-400 mt-4 max-w-lg">
              Protecting defence personnel from sophisticated cyber threats using
              advanced AI, NLP, and real-time threat intelligence.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4 mt-6">
              {ctaButtons.map(({ label, icon: Icon, className }) => (
                <motion.button
                  key={label}
                  className={className}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: '0 0 20px rgba(0,245,255,0.4)',
                  }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  <Icon size={16} aria-hidden="true" />
                  {label}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* ── Right column ── */}
          <motion.div
            className="flex-1 flex justify-center"
            variants={fadeInRight}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            {/* Dashboard preview + floating stat cards */}
            <div className="relative">
              <HeroDashboardPreview />

              {/* Floating stat cards (Task 7.3) */}
              {floatingStats.map(({ icon: Icon, label, delay, position }) => (
                <motion.div
                  key={label}
                  className={`${position} glass-card rounded-lg px-3 py-2 flex items-center gap-2 text-sm text-cyan-400`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay, duration: 0.5, ease: 'easeOut' }}
                >
                  <Icon size={14} aria-hidden="true" />
                  <span>{label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
