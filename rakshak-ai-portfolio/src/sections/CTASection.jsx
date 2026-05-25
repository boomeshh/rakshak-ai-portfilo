import { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Mail, BookOpen } from 'lucide-react';
import CyberGrid from '../components/CyberGrid';
import ParticleSystem from '../components/ParticleSystem';
import VideoModal from '../components/VideoModal';
import { fadeInUp, staggerContainer } from '../animations/variants';

const CTASection = () => {
  const [videoOpen, setVideoOpen] = useState(false);
  return (
    <section id="cta" className="relative py-32 px-4 md:px-8 lg:px-16 overflow-hidden">
      {/* Background layers */}
      <CyberGrid className="z-0" />
      <ParticleSystem className="z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Heading */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Strengthening Digital Defence Preparedness with AI
          </h2>
          <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
            Join the mission to protect defence personnel from sophisticated cyber threats through AI-powered intelligence.
          </p>
        </motion.div>

        {/* Buttons */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4"
        >
          {/* View Demo */}
          <motion.button
            variants={fadeInUp}
            whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(0,245,255,0.5)' }}
            className="flex items-center gap-2 px-8 py-4 rounded-xl bg-cyan-500/20 border border-cyan-500/50 text-cyan-400 font-semibold hover:bg-cyan-500/30 transition-colors"
            onClick={() => setVideoOpen(true)}
          >
            <Play size={18} />
            View Demo
          </motion.button>

          {/* Contact Team */}
          <motion.a
            href="mailto:boomesh.public@gmail.com"
            variants={fadeInUp}
            whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(0,245,255,0.5)' }}
            className="flex items-center gap-2 px-8 py-4 rounded-xl bg-blue-500/20 border border-blue-500/50 text-blue-400 font-semibold hover:bg-blue-500/30 transition-colors"
          >
            <Mail size={18} />
            Contact Team
          </motion.a>

          {/* Explore Research */}
          <motion.button
            variants={fadeInUp}
            whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(0,245,255,0.5)' }}
            className="flex items-center gap-2 px-8 py-4 rounded-xl bg-purple-500/20 border border-purple-500/50 text-purple-400 font-semibold hover:bg-purple-500/30 transition-colors"
          >
            <BookOpen size={18} />
            Explore Research
          </motion.button>
        </motion.div>
      </div>
      <VideoModal open={videoOpen} onClose={() => setVideoOpen(false)} />
    </section>
  );
};

export default CTASection;
