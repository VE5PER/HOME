import React from 'react';
import { motion } from 'framer-motion';
import KeyFacts from '../components/KeyFacts';
import Skills from '../components/Skills';
import AnimatedBackground from '../components/AnimatedBackground';
import siteData from '../data/site.json';

const About: React.FC = () => {
  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">About Me</h1>
            <p className="text-2xl md:text-3xl text-slate-500 dark:text-slate-400 font-dancing leading-relaxed">
              {siteData.tagline}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="prose prose-lg dark:prose-invert mx-auto mb-20 text-slate-600 dark:text-slate-300 leading-loose"
          >
            <p className="mb-6">
              Senior AI Engineer and published researcher delivering secure enterprise GenAI, cloud infrastructure, and ML solutions — architecting proprietary developer tooling, optimizing ML workloads, and leading multi-million-dollar AI initiatives from research to production.
            </p>
            <p>
              I built the company's first internal LLM coding assistant, invented a patent-pending dependency parsing methodology for deep codebase awareness, and drove 75%+ engagement across 2,500+ engineers — backed by a track record in adversarial ML and evolutionary computation.
            </p>
          </motion.div>

          <KeyFacts />
          <Skills />
        </div>
      </div>
    </div>
  );
};

export default About;
