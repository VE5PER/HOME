import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import siteData from '../data/site.json';

const Contact: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Get in Touch</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-12">
          I'm always open to discussing new projects, research collaborations, or opportunities. Feel free to reach out directly through any of the channels below.
        </p>
      </div>
      <div className="max-w-2xl mx-auto text-center mt-12">
        <div className="flex justify-center items-center space-x-6">
          <a href={`mailto:${siteData.email}`} className="text-gray-500 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 flex items-center space-x-2">
            <Mail size={24} />
            <span>{siteData.email}</span>
          </a>
          {siteData.social.github && (
            <a href={siteData.social.github} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400">
              <Github size={24} />
            </a>
          )}
          {siteData.social.linkedin && (
            <a href={siteData.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400">
              <Linkedin size={24} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
