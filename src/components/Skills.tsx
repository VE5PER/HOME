import React from 'react';
import skillsData from '../data/skills.json';

const Skills: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6 mt-8">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Skills</h2>
      <div className="space-y-6">
        {skillsData.map((category) => (
          <div key={category.category}>
            <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-400 mb-2">{category.category}</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-sm font-medium text-indigo-800 bg-indigo-100 dark:text-indigo-100 dark:bg-indigo-900 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
