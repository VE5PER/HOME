import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import siteData from '../data/site.json';
import AnimatedBackground from './AnimatedBackground';
import profilePic from '../data/dp.jpg';

interface HeroProps {
  onStartTour: () => void;
}

const Hero: React.FC<HeroProps> = ({ onStartTour }) => {
  return (
    <section className="relative bg-background-light dark:bg-slate-900 text-center py-20 md:py-32 overflow-hidden min-h-screen flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <AnimatedBackground />
      </div>
      <div className="container mx-auto px-4 z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src={profilePic}
            alt="Saurav Shyju"
            className="w-40 h-40 rounded-full mx-auto mb-8 border-4 border-white dark:border-slate-800 shadow-2xl object-cover"
          />
        </motion.div>

        <motion.h1
          className="text-5xl md:text-7xl font-bold text-text-light-primary dark:text-white tracking-tight mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {siteData.name}
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-indigo-600 dark:text-indigo-400 font-semibold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {siteData.title}
        </motion.p>

        <motion.p
          className="max-w-2xl mx-auto text-2xl md:text-3xl text-text-light-secondary dark:text-slate-300 font-dancing mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {siteData.tagline}
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <button
            type="button"
            onClick={onStartTour}
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-full text-white bg-indigo-600 hover:bg-indigo-700 transition-all duration-300 shadow-lg hover:shadow-indigo-500/30 transform hover:-translate-y-1"
          >
            Show Portfolio
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
