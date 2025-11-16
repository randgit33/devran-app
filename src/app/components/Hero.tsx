'use client';

import React, { useState, useEffect } from 'react';
import { Briefcase, Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext'; // Import hook

const Hero: React.FC = () => {
  const { t } = useLanguage(); // Use translations
  const name = "Randey";
  const designation = t.hero.designation; // Use translation
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
    <section id="hero" className="min-h-screen w-full flex items-center justify-center relative">
      <div className="container mx-auto px-6">
        <motion.div 
          className="grid md:grid-cols-5 gap-16 items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="md:col-span-2 text-center md:text-left">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900">
              {t.hero.greeting} <span className="text-indigo-600">{name}</span>
            </h1>
            <div className="flex justify-center md:justify-start gap-5 mt-8">
              {/* ... (social links remain the same) ... */}
            </div>
          </div>

          <div className="md:col-span-3 text-center md:text-left">
            <p className="text-xl md:text-2xl text-slate-700 h-10 md:h-12 font-mono">
              {typedDesignation}
              <span className="animate-ping text-indigo-600">_</span>
            </p>
            <p className="text-lg text-slate-600 mt-4 max-w-lg mx-auto md:mx-0">
              {t.hero.bio} {/* Use translation */}
            </p>
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-8"
            >
              <button 
                onClick={() => scrollToSection('projects')} 
                className="bg-indigo-600 text-white font-semibold py-3 px-8 rounded-full hover:bg-indigo-700 transition-all duration-300 shadow-lg shadow-indigo-200 transform hover:scale-105 flex items-center gap-2 mx-auto md:mx-0"
              >
                {t.hero.button} <Briefcase size={20} /> {/* Use translation */}
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;