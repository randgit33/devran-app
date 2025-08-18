// No 'use client' needed here - this can be a Server Component
import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

// Main Portfolio Component
const Portfolio: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Hero 
        name="devran" 
        designation="Full Stack Developer" 
      />
      <About />
      <Projects />
      <Contact />
    </div>
  );
};

export default Portfolio;