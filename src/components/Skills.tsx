import React from 'react';
import { motion } from 'framer-motion';
import skillsData from '../data/skills.json';

const Skills: React.FC = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="py-12">
      <h2 className="text-3xl font-bold text-center text-text-light-primary dark:text-white mb-12">Technical Expertise</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillsData.map((category, index) => (
          <motion.div
            key={category.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-zinc-100 dark:border-slate-700 hover:shadow-xl transition-shadow duration-300"
          >
            <h3 className="text-xl font-bold text-indigo-600 dark:text-indigo-400 mb-6 border-b border-zinc-100 dark:border-slate-700 pb-2">
              {category.category}
            </h3>
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex flex-wrap gap-3"
            >
              {category.skills.map((skill) => (
                <motion.span
                  key={skill}
                  variants={item}
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-2 text-sm font-medium text-text-light-secondary bg-zinc-100 dark:text-slate-200 dark:bg-slate-700 rounded-lg hover:bg-indigo-50 hover:text-indigo-700 dark:hover:bg-indigo-900/30 dark:hover:text-indigo-300 transition-colors duration-200 cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
