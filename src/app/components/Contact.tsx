'use client';

import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const Section: React.FC<{ id: string; title: string; children: React.ReactNode }> = ({ id, title, children }) => (
    <motion.section 
      id={id}
      className="py-24 md:py-32"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
    >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 relative">
          {title}
          <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-24 h-1 bg-violet-500 rounded-full"></span>
        </h2>
        {children}
    </motion.section>
);

const Contact: React.FC = () => {
  return (
    <Section id="contact" title="Get In Touch">
      <div className="max-w-xl mx-auto text-center">
        <p className="text-lg text-gray-300 mb-8">
          I'm currently open to new opportunities. If you have a project in mind or just want to connect, feel free to reach out.
        </p>
        <a 
          href="mailto:randeygiffary33@gmail.com" 
          className="inline-block bg-violet-600 text-white font-bold text-lg py-4 px-10 rounded-full hover:bg-violet-700 transition-all duration-300 shadow-lg shadow-violet-500/20 transform hover:scale-105"
        >
          Say Hello
        </a>
        <div className="flex justify-center gap-8 mt-12">
          <a href="https://github.com/randgit33" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-violet-400 transition-transform hover:scale-110" aria-label="GitHub Profile">
            <Github size={32} />
          </a>
          <a href="https://linkedin.com/in/randgfry" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-violet-400 transition-transform hover:scale-110" aria-label="LinkedIn Profile">
            <Linkedin size={32} />
          </a>
          <a href="mailto:randeygiffary33@gmail.com" className="text-gray-400 hover:text-violet-400 transition-transform hover:scale-110" aria-label="Email Contact">
            <Mail size={32} />
          </a>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
