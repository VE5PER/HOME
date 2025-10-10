import React from 'react';
import experienceData from '../data/experience.json';

const Timeline: React.FC = () => {
  return (
    <div className="relative">
      <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-gray-200 dark:bg-gray-700"></div>
      {experienceData.map((item, index) => (
        <div key={index} className="relative mb-12">
          <div className="flex items-center mb-1">
            <div className="z-10 w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center absolute left-1/2 -translate-x-1/2">
              <div className="w-3 h-3 bg-white rounded-full"></div>
            </div>
          </div>
          <div className={`w-full flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
            <div className="w-1/2 px-4">
              <div className={`bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 ${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
                <p className="text-sm text-gray-500 dark:text-gray-400">{item.dates}</p>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-1">{item.role}</h3>
                <p className="text-md font-semibold text-indigo-600 dark:text-indigo-400">{item.organization}</p>
                <ul className="mt-4 space-y-2 text-gray-600 dark:text-gray-300">
                  {item.responsibilities.map((resp, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-indigo-500 mr-2">&#8227;</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
