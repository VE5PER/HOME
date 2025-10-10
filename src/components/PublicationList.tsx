import React from 'react';
import publicationsData from '../data/publications.json';
import { FileText, Link as LinkIcon } from 'lucide-react';

const PublicationList: React.FC = () => {
  return (
    <div className="space-y-8">
      {publicationsData.map((pub) => (
        <div key={pub.id} className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">{pub.title}</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            {pub.authors.join(', ')}
          </p>
          <p className="text-md font-semibold text-indigo-600 dark:text-indigo-400 mt-2">
            {pub.venue}, {pub.year}
          </p>
          {(pub as any).patentId && (
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              Patent App. No. {(pub as any).patentId}
            </p>
          )}
          <p className="text-gray-600 dark:text-gray-300 mt-4 text-sm">
            {pub.abstract}
          </p>
          <div className="flex items-center space-x-4 mt-4">
            {pub.pdf && (
              <a href={pub.pdf} target="_blank" rel="noopener noreferrer" className="flex items-center text-sm text-indigo-600 hover:underline dark:text-indigo-400">
                <FileText size={16} className="mr-1" />
                PDF
              </a>
            )}
            {pub.url && (
              <a href={pub.url} target="_blank" rel="noopener noreferrer" className="flex items-center text-sm text-indigo-600 hover:underline dark:text-indigo-400">
                <LinkIcon size={16} className="mr-1" />
                DOI
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PublicationList;
