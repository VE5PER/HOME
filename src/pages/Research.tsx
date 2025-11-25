import React from 'react';
import PublicationList from '../components/PublicationList';
import { motion } from 'framer-motion';

const Research: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <motion.h1
        className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Research & Publications
      </motion.h1>
      <div className="max-w-4xl mx-auto">
        <PublicationList />
      </div>
    </div>
  );
};

export default Research;
