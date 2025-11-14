import React from 'react';
import { NavLink } from 'react-router-dom';
import { ArrowRight, Download } from 'lucide-react';
import siteData from '../data/site.json';
import AnimatedBackground from './AnimatedBackground';
import profilePic from '../data/dp.jpg';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-white dark:bg-gray-800 text-center py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <AnimatedBackground />
      </div>
      <div className="container mx-auto px-4 z-10 relative">
        <img
          src={profilePic} // Placeholder image
          alt="Saurav Shyju"
          className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-indigo-500 shadow-lg"
        />
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white">{siteData.name}</h1>
        <p className="mt-4 text-lg md:text-xl text-indigo-600 dark:text-indigo-400 font-semibold">{siteData.title}</p>
        <p className="mt-4 max-w-2xl mx-auto text-3xl text-gray-500 dark:text-gray-400 font-dancing">{siteData.tagline}</p>
        <div className="mt-8 flex justify-center gap-4">
          <NavLink
            to="/research"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            View Research
            <ArrowRight className="ml-2 -mr-1 h-5 w-5" />
          </NavLink>
          <a
            href="https://drive.google.com/file/d/1MORy9okvPwiFq3ZV7Jbj3eMekPFL112_/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-base font-medium rounded-md text-indigo-700 dark:text-indigo-300 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Show Resume
            <Download className="ml-2 -mr-1 h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
