import React from 'react';
import Timeline from '../components/Timeline';

const Experience: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">Experience</h1>
      <div className="max-w-4xl mx-auto">
        <Timeline />
      </div>
    </div>
  );
};

export default Experience;
