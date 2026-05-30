import React from 'react';
import { MapPin, Mail, Book, Briefcase, GraduationCap } from 'lucide-react';
import siteData from '../data/site.json';

const keyFacts = [
  { icon: <MapPin size={20} />, label: 'Location', value: siteData.location },
  { icon: <Mail size={20} />, label: 'Email', value: <a href={`mailto:${siteData.email}`} className="hover:underline">{siteData.email}</a> },
  { icon: <Book size={20} />, label: 'ORCID', value: <a href={`https://orcid.org/${siteData.social.orcid}`} target="_blank" rel="noopener noreferrer" className="hover:underline">{siteData.social.orcid}</a> },
  { icon: <Briefcase size={20} />, label: 'Current Role', value: 'Senior Software Development Engineer, Zscaler' },
  { icon: <GraduationCap size={20} />, label: 'Education', value: 'B.Tech, Amrita University' },
];

const KeyFacts: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Key Facts</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {keyFacts.map((fact) => (
          <div key={fact.label} className="flex items-center space-x-3">
            <div className="flex-shrink-0 text-indigo-500 dark:text-indigo-400">{fact.icon}</div>
            <div>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{fact.label}</p>
              <p className="text-base font-semibold text-gray-900 dark:text-white">{fact.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KeyFacts;
