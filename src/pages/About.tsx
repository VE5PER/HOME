import React from 'react';
import { motion } from 'framer-motion';
import KeyFacts from '../components/KeyFacts';
import Skills from '../components/Skills';
import AnimatedBackground from '../components/AnimatedBackground';
import siteData from '../data/site.json';
import profilePic from '../data/dp.jpg';

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
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="absolute inset-0 bg-indigo-600 rounded-full blur opacity-20 animate-pulse"></div>
                <img
                  src={profilePic}
                  alt="Profile"
                  className="relative rounded-full w-40 h-40 object-cover border-4 border-white dark:border-slate-800 shadow-xl"
                />
              </div>
            </div>
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
              I am a researcher and engineer with a passion for building robust and intelligent systems. My work focuses on the intersection of adversarial machine learning and evolutionary computation, where I design algorithms that can adapt and thrive in challenging, dynamic environments.
            </p>
            <p>
              From developing resilient AI to Inventing robust solutions, I am driven by a curiosity to understand how complex behaviors emerge from simple rules. This website serves as a portfolio of my work, a collection of my thoughts, and a point of connection for future collaborations.
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
