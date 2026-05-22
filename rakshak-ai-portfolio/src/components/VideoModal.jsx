import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import demoVideo from '../assets/DEMO VIDEO.mp4';

const VideoModal = ({ open, onClose }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    const handler = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [open, onClose]);

  useEffect(() => {
    if (!open && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <div className="absolute inset-0 bg-black/90 backdrop-blur-md" />
          <motion.div
            className="relative z-10 w-full max-w-4xl"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              aria-label="Close video"
              className="absolute -top-12 right-0 text-gray-400 hover:text-white transition-colors bg-white/10 rounded-full p-1.5"
            >
              <X size={20} />
            </button>
            <div
              className="rounded-2xl overflow-hidden border border-cyan-500/30"
              style={{ boxShadow: '0 0 60px 8px rgba(6,182,212,0.25)' }}
            >
              <video
                ref={videoRef}
                src={demoVideo}
                controls
                autoPlay
                className="w-full h-auto max-h-[75vh] bg-black"
              />
            </div>
            <p className="text-center text-cyan-400/70 text-sm mt-3 tracking-wide uppercase font-medium">
              RAKSHAK AI — Product Demo
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default VideoModal;
