import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, ExternalLink } from 'lucide-react';
import researchPdf from '../assets/FINAL RAKSHAKI AI PAPER.pdf';

const PdfModal = ({ open, onClose }) => {
  useEffect(() => {
    if (!open) return;
    const handler = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [open, onClose]);

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
            className="relative z-10 w-full max-w-5xl h-[90vh] flex flex-col"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header bar */}
            <div className="flex items-center justify-between mb-3">
              <div>
                <p className="text-cyan-400 text-xs font-semibold uppercase tracking-widest">Research Publication</p>
                <p className="text-white text-sm font-medium">RAKSHAK AI — YUDHISTRA 2026</p>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={researchPdf}
                  download="RAKSHAK-AI-Research-Paper.pdf"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-500/20 border border-cyan-500/40 text-cyan-400 text-xs hover:bg-cyan-500/30 transition-colors"
                >
                  <Download size={13} />
                  Download
                </a>
                <a
                  href={researchPdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 border border-white/20 text-gray-300 text-xs hover:bg-white/20 transition-colors"
                >
                  <ExternalLink size={13} />
                  Open Tab
                </a>
                <button
                  onClick={onClose}
                  aria-label="Close PDF viewer"
                  className="text-gray-400 hover:text-white transition-colors bg-white/10 rounded-full p-1.5 ml-1"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* PDF iframe */}
            <div
              className="flex-1 rounded-2xl overflow-hidden border border-cyan-500/30"
              style={{ boxShadow: '0 0 60px 8px rgba(6,182,212,0.2)' }}
            >
              <iframe
                src={researchPdf}
                title="RAKSHAK AI Research Paper"
                className="w-full h-full bg-gray-950"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PdfModal;
