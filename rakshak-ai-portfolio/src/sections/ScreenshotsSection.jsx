// Requirements: 7.1, 7.2, 7.3, 7.4, 7.5, 7.6, 7.7
import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';
import screenshots from '../data/screenshots';

const ALL = 'All';
const categories = [ALL, ...Array.from(new Set(screenshots.map((s) => s.category)))];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45, ease: 'easeOut' } },
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.88 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3, ease: 'easeOut' } },
  exit: { opacity: 0, scale: 0.88, transition: { duration: 0.2 } },
};


const ScreenshotCard = ({ item, onClick }) => (
  <motion.div
    variants={cardVariants}
    whileHover={{ scale: 1.03, y: -4 }}
    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    className="group relative cursor-pointer rounded-2xl overflow-hidden"
    style={{ boxShadow: '0 0 0 1px rgba(255,255,255,0.08)' }}
    onClick={onClick}
  >
    <div
      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10"
      style={{ boxShadow: `0 0 24px 4px ${item.glow}, inset 0 0 0 1px ${item.glow}` }}
    />
    <div className="absolute inset-0 bg-white/5 backdrop-blur-sm z-0 rounded-2xl" />
    <div className="relative aspect-video overflow-hidden rounded-2xl bg-gray-900">
      <img
        src={item.image}
        alt={item.title}
        loading="lazy"
        decoding="async"
        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
      />
      <div className={`absolute inset-0 bg-gradient-to-t ${item.gradient} opacity-60`} />
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/30">
        <div className="bg-white/10 backdrop-blur-md rounded-full p-3 border border-white/20">
          <ZoomIn className="text-white" size={22} />
        </div>
      </div>
    </div>
    <div className="absolute bottom-0 left-0 right-0 px-4 py-3 bg-gradient-to-t from-black/80 to-transparent z-20">
      <span className="text-xs font-semibold uppercase tracking-widest text-cyan-400/80 block mb-0.5">
        {item.category}
      </span>
      <span className="text-sm font-medium text-white leading-tight">{item.title}</span>
    </div>
  </motion.div>
);


const ScreenshotModal = ({ items, index, onClose, onPrev, onNext }) => {
  const item = items[index];
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/85 backdrop-blur-md" />
      <motion.div
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="relative z-10 w-full max-w-5xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute -top-12 right-0 text-gray-400 hover:text-white transition-colors bg-white/10 rounded-full p-1.5"
        >
          <X size={20} />
        </button>
        <div className="absolute -top-12 left-0 text-gray-400 text-sm">
          {index + 1} / {items.length}
        </div>
        <div
          className="rounded-2xl overflow-hidden border border-white/10"
          style={{ boxShadow: `0 0 60px 8px ${item.glow}` }}
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-auto max-h-[75vh] object-contain bg-gray-950"
          />
        </div>
        <div className="mt-4 text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-cyan-400 mr-2">
            {item.category}
          </span>
          <span className="text-white font-medium">{item.title}</span>
        </div>
        <button
          onClick={onPrev}
          aria-label="Previous"
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-14 text-gray-400 hover:text-white transition-colors bg-white/10 rounded-full p-2 hidden md:flex"
        >
          <ChevronLeft size={22} />
        </button>
        <button
          onClick={onNext}
          aria-label="Next"
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-14 text-gray-400 hover:text-white transition-colors bg-white/10 rounded-full p-2 hidden md:flex"
        >
          <ChevronRight size={22} />
        </button>
      </motion.div>
    </motion.div>
  );
};


const ScreenshotsSection = () => {
  const [activeCategory, setActiveCategory] = useState(ALL);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);

  const filtered = activeCategory === ALL
    ? screenshots
    : screenshots.filter((s) => s.category === activeCategory);

  const openModal = useCallback((index) => { setModalIndex(index); setModalOpen(true); }, []);
  const closeModal = useCallback(() => setModalOpen(false), []);
  const prevModal = useCallback(
    () => setModalIndex((i) => (i - 1 + filtered.length) % filtered.length),
    [filtered.length]
  );
  const nextModal = useCallback(
    () => setModalIndex((i) => (i + 1) % filtered.length),
    [filtered.length]
  );

  useEffect(() => {
    if (!modalOpen) return;
    const handler = (e) => {
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowLeft') prevModal();
      if (e.key === 'ArrowRight') nextModal();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [modalOpen, closeModal, prevModal, nextModal]);

  return (
    <section id="screenshots" className="py-24 px-4 md:px-8 lg:px-16 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold cyber-text mb-4">Live Screenshots</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Explore the RAKSHAK AI portal interface across every module — from threat dashboards to
          complaint workflows and CERT analytics.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="flex flex-wrap justify-center gap-2 mb-10"
      >
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => { setActiveCategory(cat); setModalOpen(false); }}
            className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-all duration-200 ${
              activeCategory === cat
                ? 'bg-cyan-500/20 border-cyan-500/60 text-cyan-300'
                : 'bg-white/5 border-white/10 text-gray-400 hover:border-cyan-500/40 hover:text-gray-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </motion.div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {filtered.map((item, i) => (
            <ScreenshotCard key={item.id} item={item} onClick={() => openModal(i)} />
          ))}
        </motion.div>
      </AnimatePresence>

      {filtered.length === 0 && (
        <p className="text-center text-gray-500 mt-12">No screenshots in this category.</p>
      )}

      <AnimatePresence>
        {modalOpen && filtered[modalIndex] && (
          <ScreenshotModal
            items={filtered}
            index={modalIndex}
            onClose={closeModal}
            onPrev={prevModal}
            onNext={nextModal}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default ScreenshotsSection;
