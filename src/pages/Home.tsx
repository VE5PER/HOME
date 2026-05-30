import React, { useCallback, useEffect, useRef } from 'react';
import Hero from '../components/Hero';
import About from './About';
import Research from './Research';
import Projects from './Projects';
import Experience from './Experience';
import Contact from './Contact';

const tourSections = ['portfolio-about', 'portfolio-research', 'portfolio-projects', 'portfolio-experience', 'portfolio-contact'];

const Home: React.FC = () => {
  const tourTimeouts = useRef<number[]>([]);

  const clearTourTimeouts = useCallback(() => {
    tourTimeouts.current.forEach((timeout) => window.clearTimeout(timeout));
    tourTimeouts.current = [];
  }, []);

  const startPortfolioTour = useCallback(() => {
    clearTourTimeouts();

    tourSections.forEach((sectionId, index) => {
      const timeout = window.setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }, index * 2500);

      tourTimeouts.current.push(timeout);
    });
  }, [clearTourTimeouts]);

  useEffect(() => clearTourTimeouts, [clearTourTimeouts]);

  return (
    <div>
      <Hero onStartTour={startPortfolioTour} />
      {/* Other sections of the home page will go here */}
      <section id="portfolio-about" className="scroll-mt-24">
        <About />
      </section>
      <section id="portfolio-research" className="scroll-mt-24">
        <Research />
      </section>
      <section id="portfolio-projects" className="scroll-mt-24">
        <Projects />
      </section>
      <section id="portfolio-experience" className="scroll-mt-24">
        <Experience />
      </section>
      <section id="portfolio-contact" className="scroll-mt-24">
        <Contact />
      </section>
    </div>
  );
};

export default Home;
