'use client';

import React from 'react';
import { motion } from 'framer-motion';

const skills: string[] = ['React', 'Next.js', 'TypeScript',  'Tailwind CSS', 'MySQL','Laravel','Firebase'];

const Section: React.FC<{ id: string; title: string; children: React.ReactNode }> = ({ id, title, children }) => {
  return (
    <motion.section 
      id={id}
      className="py-24 md:py-32"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 relative">
          {title}
          <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-24 h-1 bg-violet-500 rounded-full"></span>
        </h2>
        {children}
      </div>
    </motion.section>
  );
};


const About: React.FC = () => {
  return (
    <Section id="about" title="About Me">
      <div className="grid md:grid-cols-5 gap-12 items-center">
        <motion.div 
          className="md:col-span-2"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative w-full max-w-xs mx-auto p-2 border-2 border-violet-500/30 rounded-full">
            <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-fuchsia-500 rounded-full blur-2xl opacity-40"></div>
            <img 
              src="/assets/akugwej.jpg" 
              alt="Devran" 
              className="relative w-full rounded-full shadow-lg"
            />
          </div>
        </motion.div>
        <div className="md:col-span-3 text-lg text-gray-300 space-y-6">
          <p>
            Hello, I'm currently a college student studying in Universitas Muslim Indonesia, Faculty of Computer Science and my major is Informatics Engineering
          </p>
          <p>
            I'm a passionate Full-Stack Developer creating beautiful, functional, and user-centric web applications. My tech journey began with a fascination for how things work, evolving into a passion for coding and elegant problem-solving.
          </p>
          <p>
            I thrive in collaborative environments, always eager to learn new technologies and push the boundaries of what's possible on the web.
          </p>
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-violet-400 mb-4">Core Skills</h3>
            <div className="flex flex-wrap gap-3">
              {skills.map(skill => (
                <div key={skill} className="bg-gray-800/60 border border-gray-700 text-violet-300 text-sm font-medium px-4 py-2 rounded-full transition-transform hover:scale-110 hover:bg-gray-700/80 cursor-default">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
