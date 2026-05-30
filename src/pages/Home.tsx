import React from 'react';
import Hero from '../components/Hero';
import About from './About';
import Research from './Research';
import Projects from './Projects';
import Experience from './Experience';
import Contact from './Contact';
import ScrollDownNotifier from '../components/ScrollDownNotifier';

const tourSections = ['portfolio-about', 'portfolio-research', 'portfolio-projects', 'portfolio-experience', 'portfolio-contact'];

const Home: React.FC = () => {
  const startPortfolioTour = () => {
    document.getElementById('portfolio-about')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

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
      <ScrollDownNotifier sections={tourSections} />
    </div>
  );
};

export default Home;
