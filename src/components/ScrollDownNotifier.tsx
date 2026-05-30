import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface ScrollDownNotifierProps {
  sections: string[];
}

const ScrollDownNotifier: React.FC<ScrollDownNotifierProps> = ({ sections }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      // Hide when user is near the bottom
      if (scrollY + windowHeight >= docHeight - 50) {
        setVisible(false);
        return;
      }

      // Also hide if the last section is already visible
      const lastSection = document.getElementById(sections[sections.length - 1]);
      if (lastSection) {
        const rect = lastSection.getBoundingClientRect();
        if (rect.top < windowHeight && rect.bottom > 0) {
          setVisible(false);
          return;
        }
      }

      setVisible(true);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [sections]);

  const handleClick = () => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;

    // Find the first section whose top is below the current viewport
    for (const sectionId of sections) {
      const el = document.getElementById(sectionId);
      if (!el) continue;
      const rect = el.getBoundingClientRect();
      if (rect.top > 10) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }
    }

    // Fallback: scroll to bottom
    window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
  };

  return (
    <button
      onClick={handleClick}
      className={`fixed bottom-8 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center gap-1 transition-opacity duration-300 ${
        visible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
      aria-label="Scroll to next section"
    >
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        className="text-white/80 dark:text-slate-300/80"
      >
        <ChevronDown size={32} strokeWidth={2.5} />
      </motion.div>
    </button>
  );
};

export default ScrollDownNotifier;
