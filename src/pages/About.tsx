import React from 'react';
import KeyFacts from '../components/KeyFacts';
import Skills from '../components/Skills';
import AnimatedBackground from '../components/AnimatedBackground';
import siteData from '../data/site.json';
import profilePic from '../data/dp.jpg';

const About: React.FC = () => {
  return (
    <div className="relative">
      <AnimatedBackground />
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl font-bold text-center mb-2 text-gray-900 dark:text-white">About Me</h1>
          <div className="flex justify-center mb-8">
            <img src={profilePic} alt="Profile" className="rounded-full w-32 h-32 object-cover" />
          </div>
          <p className="text-3xl text-center text-gray-500 dark:text-gray-400 mb-8 font-dancing">{siteData.tagline}</p>
          <div className="prose dark:prose-invert lg:prose-xl mx-auto mb-12">
            <p>
              I am a researcher and engineer with a passion for building robust and intelligent systems. My work focuses on the intersection of evolutionary computation and adversarial machine learning, where I design algorithms that can adapt and thrive in challenging, dynamic environments.
            </p>
            <p>
              From developing resilient AI to Inventing robust solutions, I am driven by a curiosity to understand how complex behaviors emerge from simple rules. This website serves as a portfolio of my work, a collection of my thoughts, and a point of connection for future collaborations.
            </p>
          </div>
          <KeyFacts />
          <Skills />
        </div>
      </div>
    </div>
  );
};

export default About;
