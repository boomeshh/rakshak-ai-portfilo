import { useState, useEffect } from 'react';

/**
 * Tracks which section is currently in view using IntersectionObserver.
 * @param {string[]} sectionIds - Array of section element IDs to observe
 * @param {number} offset - Root margin offset in px (default 100)
 * @returns {string|null} activeSection - ID of the currently visible section, or null
 */
function useScrollSpy(sectionIds = [], offset = 100) {
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    if (!sectionIds.length) return;

    const rootMargin = `-${offset}px 0px -${offset}px 0px`;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin, threshold: 0 }
    );

    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, [sectionIds, offset]);

  return activeSection;
}

export default useScrollSpy;
