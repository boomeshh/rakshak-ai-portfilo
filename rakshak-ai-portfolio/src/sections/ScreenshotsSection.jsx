// Requirements: 7.1, 7.2, 7.3, 7.4, 7.5, 7.6, 7.7
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import screenshots from '../data/screenshots';
import DeviceFrame from '../components/DeviceFrame';

const ScreenshotsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setModalOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section id="screenshots" className="py-20 px-4 md:px-8 lg:px-16 relative">
      <h2 className="text-3xl md:text-4xl font-bold text-center cyber-text mb-4">
        Live Screenshots
      </h2>
      <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
        Explore the RAKSHAK AI portal interface across different modules.
      </p>

      {/* Thumbnail Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
        {screenshots.map((s, i) => (
          <motion.div
            key={s.id}
            whileHover={{ scale: 1.03 }}
            className="cursor-pointer rounded-xl overflow-hidden"
            onClick={() => {
              setModalIndex(i);
              setModalOpen(true);
            }}
          >
            <DeviceFrame device={s.device}>
              <div
                className={`w-full h-full bg-gradient-to-br ${s.gradient} flex items-center justify-center`}
              >
                <span className="text-white/60 text-sm font-medium">{s.title}</span>
              </div>
            </DeviceFrame>
          </motion.div>
        ))}
      </div>

      {/* Prev / Next Controls */}
      <div className="flex items-center justify-center gap-6">
        <button
          aria-label="Previous screenshot"
          onClick={() => setActiveIndex(i => (i - 1 + screenshots.length) % screenshots.length)}
          className="text-gray-400 hover:text-cyan-400 transition-colors"
        >
          <ChevronLeft />
        </button>
        <span className="text-cyan-400">{screenshots[activeIndex].title}</span>
        <button
          aria-label="Next screenshot"
          onClick={() => setActiveIndex(i => (i + 1) % screenshots.length)}
          className="text-gray-400 hover:text-cyan-400 transition-colors"
        >
          <ChevronRight />
        </button>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setModalOpen(false)}
          >
            <motion.div
              className="relative max-w-3xl w-full mx-4"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={e => e.stopPropagation()}
            >
              <button
                className="absolute -top-10 right-0 text-white hover:text-cyan-400"
                onClick={() => setModalOpen(false)}
                aria-label="Close modal"
              >
                <X size={24} />
              </button>
              <DeviceFrame device={screenshots[modalIndex].device}>
                <div
                  className={`w-full h-full bg-gradient-to-br ${screenshots[modalIndex].gradient} flex items-center justify-center min-h-64`}
                >
                  <span className="text-white/60 text-lg font-medium">
                    {screenshots[modalIndex].title}
                  </span>
                </div>
              </DeviceFrame>
              <p className="text-center text-gray-400 mt-4 text-sm">
                {screenshots[modalIndex].description}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ScreenshotsSection;
