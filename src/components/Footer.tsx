import React from 'react';
import { GitFork, Link, Mail } from 'lucide-react';
import siteData from '../data/site.json';

const Footer: React.FC = () => {
  return (
    <footer className="bg-background-light/80 dark:bg-slate-900/80 backdrop-blur-md border-t border-zinc-200 dark:border-slate-700 mt-auto">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center">
        <p className="text-sm text-text-light-secondary dark:text-slate-400 mb-4 sm:mb-0">
          &copy; {new Date().getFullYear()} {siteData.name}. All rights reserved.
        </p>
        <div className="flex space-x-6">
          <a href={`mailto:${siteData.email}`} className="text-text-light-secondary hover:text-text-light-primary dark:text-slate-400 dark:hover:text-white">
            <Mail size={20} />
          </a>
          <a href={siteData.social.github} target="_blank" rel="noopener noreferrer" className="text-text-light-secondary hover:text-text-light-primary dark:text-slate-400 dark:hover:text-white">
            <GitFork size={20} />
          </a>
          <a href={siteData.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-text-light-secondary hover:text-text-light-primary dark:text-slate-400 dark:hover:text-white">
            <Link size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
