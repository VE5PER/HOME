import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import siteData from '../data/site.json';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 mt-12">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center">
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 sm:mb-0">
          &copy; {new Date().getFullYear()} {siteData.name}. All rights reserved.
        </p>
        <div className="flex space-x-6">
          <a href={`mailto:${siteData.email}`} className="text-gray-400 hover:text-gray-500 dark:hover:text-white">
            <Mail size={20} />
          </a>
                    <a href={siteData.social.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-500 dark:hover:text-white">
            <Github size={20} />
          </a>
                    <a href={siteData.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-500 dark:hover:text-white">
            <Linkedin size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
