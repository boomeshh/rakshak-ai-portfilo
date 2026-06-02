/**
 * Navbar — Fixed top navigation for the RAKSHAK AI portfolio.
 * Clean, light, professional styling with scroll-aware border + shadow,
 * active-section highlighting, smooth scroll, and a mobile menu.
 */

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

const NAV_LINKS = [
  { label: 'Problem', id: 'problem' },
  { label: 'Our Solution', id: 'solution' },
  { label: 'Research', id: 'research' },
  { label: 'Team', id: 'team' },
  { label: 'Contact', id: 'contact' },
];

const Navbar = ({ activeSection }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md transition-all duration-300 ${
        scrolled ? 'border-b border-slate-200 shadow-sm' : 'border-b border-transparent'
      }`}
    >
      <div className="section flex items-center justify-between h-16">
        {/* Brand */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-2 select-none"
        >
          <span className="grid place-items-center w-8 h-8 rounded-lg bg-primary text-white text-sm font-bold">
            R
          </span>
          <span className="text-primary text-lg font-bold tracking-tight">RAKSHAK AI</span>
        </button>

        {/* Desktop nav */}
        <nav aria-label="Main navigation" className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(({ label, id }) => {
            const isActive = activeSection === id;
            return (
              <button
                key={id}
                onClick={() => handleLinkClick(id)}
                aria-current={isActive ? 'page' : undefined}
                className={`text-sm font-medium transition-colors ${
                  isActive ? 'text-secondary' : 'text-slate-600 hover:text-primary'
                }`}
              >
                {label}
              </button>
            );
          })}
          <button
            onClick={() => handleLinkClick('contact')}
            className="text-sm font-semibold text-white bg-secondary hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors"
          >
            Get in Touch
          </button>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-slate-700 hover:text-primary transition-colors"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden border-t border-slate-200 bg-white"
          >
            <nav className="flex flex-col px-5 py-3">
              {NAV_LINKS.map(({ label, id }) => {
                const isActive = activeSection === id;
                return (
                  <button
                    key={id}
                    onClick={() => handleLinkClick(id)}
                    aria-current={isActive ? 'page' : undefined}
                    className={`text-left text-sm font-medium py-3 transition-colors ${
                      isActive ? 'text-secondary' : 'text-slate-700 hover:text-primary'
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
