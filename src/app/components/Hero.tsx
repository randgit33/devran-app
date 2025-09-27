// components/Hero.tsx

'use client';

import React, { useState, useEffect } from 'react';
import { Briefcase} from 'lucide-react';
import { motion } from 'framer-motion';

// NOTE: Removed 'HeroProps' definition as it was defined but never used.

const Hero: React.FC = () => {
  const name = "Randey";
  const designation = "Full-Stack Developer";
  const [typedDesignation, setTypedDesignation] = useState<string>('');

  useEffect(() => {
    setTypedDesignation('');
    const typingInterval = setInterval(() => {
      setTypedDesignation(prev => {
        if (prev.length < designation.length) {
          return designation.substring(0, prev.length + 1);
        } else {
          clearInterval(typingInterval);
          return prev;
        }
      });
    }, 100);
    return () => clearInterval(typingInterval);
  }, [designation]);
  
  const scrollToSection = (sectionId: string): void => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    // 1. Added w-full and relative to ensure section spans the whole viewport
    <section id="hero" className="min-h-screen w-full flex items-center justify-center text-center relative">
      
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 z-10" // 3. Added z-10 for content visibility
        >
          <h1 className="text-5xl md:text-7xl font-bold">
            Hi, I&apos;m <span className="text-violet-400">{name}</span>
          </h1>
          <p className="text-xl md:text-3xl text-gray-400 h-10 md:h-12 font-mono">
            {typedDesignation}
            <span className="animate-ping">_</span>
          </p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center items-center gap-4 flex-wrap"
          >
            <button 
              onClick={() => scrollToSection('projects')} 
              className="bg-violet-600 text-white font-semibold py-3 px-8 rounded-full hover:bg-violet-700 transition-all duration-300 shadow-lg shadow-violet-500/20 transform hover:scale-105 flex items-center gap-2"
            >
              View My Work <Briefcase size={20} />
            </button>
          
          </motion.div>
        </motion.div>
      
    </section>
  );
};

export default Hero;