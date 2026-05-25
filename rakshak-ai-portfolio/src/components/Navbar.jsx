/**
 * Navbar — Fixed top navigation bar with scroll-based styling and mobile hamburger menu.
 *
 * Task 6.1: Base navbar with brand, nav links, active section highlighting, smooth scroll.
 * Task 6.2: Scroll-based backdrop-blur / shadow enhancement at 50px scroll threshold.
 * Task 6.3: Hamburger menu (md:hidden) with Framer Motion slide-down animation.
 *
 * Requirements: 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 2.7, 2.8, 15.3
 */

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

const NAV_LINKS = [
  { label: 'Home',        id: 'hero' },
  { label: 'Problem',     id: 'problem' },
  { label: 'Features',    id: 'features' },
  { label: 'Workflow',    id: 'workflow' },
  { label: 'Screenshots', id: 'screenshots' },
  { label: 'AI Engine',   id: 'ai-engine' },
  { label: 'Analytics',   id: 'analytics' },
  { label: 'Impact',      id: 'impact' },
  { label: 'Team',        id: 'team' },
  { label: 'Research',    id: 'research' },
  { label: 'Resources',   id: 'resources' },
  { label: 'Contact',     id: 'cta' },
];

const Navbar = ({ activeSection }) => {
  // Task 6.2 — scroll state
  const [scrolled, setScrolled] = useState(false);

  // Task 6.3 — mobile menu state
  const [menuOpen, setMenuOpen] = useState(false);

  // Task 6.2 — attach / clean up scroll listener
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth-scroll helper
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  // Task 6.3 — link click handler (also closes mobile menu)
  const handleLinkClick = (id) => {
    scrollToSection(id);
    setMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'backdrop-blur-lg bg-cyber-dark/80 shadow-lg shadow-cyan-500/10'
          : 'backdrop-blur-sm bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 flex items-center justify-between h-16">
        {/* Brand */}
        <span className="cyber-text text-xl font-bold tracking-widest select-none">
          RAKSHAK AI
        </span>

        {/* Desktop nav — hidden on mobile */}
        <nav aria-label="Main navigation" className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map(({ label, id }) => {
            const isActive = activeSection === id;
            return (
              <button
                key={id}
                onClick={() => handleLinkClick(id)}
                aria-current={isActive ? 'page' : undefined}
                className={`text-sm font-medium transition-colors duration-200 cursor-pointer ${
                  isActive
                    ? 'text-cyan-400 border-b border-cyan-400 pb-0.5'
                    : 'text-gray-300 hover:text-cyan-400'
                }`}
              >
                {label}
              </button>
            );
          })}
        </nav>

        {/* Hamburger button — visible on mobile only */}
        <button
          className="md:hidden text-gray-300 hover:text-cyan-400 transition-colors"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Open menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile dropdown menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden backdrop-blur-lg bg-cyber-dark/90 border-t border-white/10"
          >
            <nav className="flex flex-col px-4 py-4 gap-1">
              {NAV_LINKS.map(({ label, id }) => {
                const isActive = activeSection === id;
                return (
                  <button
                    key={id}
                    onClick={() => handleLinkClick(id)}
                    aria-current={isActive ? 'page' : undefined}
                    className={`text-left text-sm font-medium py-2 px-3 rounded transition-colors duration-200 cursor-pointer ${
                      isActive
                        ? 'text-cyan-400 bg-cyan-400/10'
                        : 'text-gray-300 hover:text-cyan-400 hover:bg-white/5'
                    }`}
                  >
                    {label}
                  </button>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
