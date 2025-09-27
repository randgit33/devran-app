'use client';

import React from 'react';
import {  ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';
interface Project {
  title: string;
  tags: string[];
  liveUrl: string;
  imageUrl: string;
}

const projectData: Project[] = [
  {
    title: "PT. Fortitude Genius Indonesia Landing Page",
    tags: ["NextJS", "TypeScript", "React"],
    liveUrl: "https://fortitudegenius.com",
    imageUrl: "/assets/lpfgi.png"
  },
  {
    title: "Genius Fish Landing Page",
    tags: ["NextJS", "TypeScript", "React"],
    liveUrl: "https://fortitudegenius.com/gfish",
    imageUrl: "/assets/lpgfish.png"
  },
  {
    title: "Global Exposure Community Landing Page",
    tags: ["NextJS", "TypeScript", "React"],
    liveUrl: "https://fortitudegenius.com/gxcLP",
    imageUrl: "/assets/lpgxc.png"
  }
];

const Section: React.FC<{ id: string; title: string; children: React.ReactNode }> = ({ id, title, children }) => (
    <motion.section 
      id={id}
      className="py-24 md:py-32"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 relative">
          {title}
          <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-24 h-1 bg-violet-500 rounded-full"></span>
        </h2>
        {children}
    </motion.section>
);


const Projects: React.FC = () => {
  return (
    <Section id="projects" title="My Projects">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectData.map((project, index) => (
          <motion.div 
            key={index}
            className="bg-gray-900/40 border border-violet-500/20 rounded-xl overflow-hidden group transform transition-all duration-300 hover:border-violet-500/50 hover:shadow-2xl hover:shadow-violet-500/10 hover:-translate-y-2 backdrop-blur-md"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="relative overflow-hidden">
              <Image 
              src={project.imageUrl}
               alt={project.title}
               width={500}
               height={500}
               className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-gray-100">{project.title}</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map(tag => (
                  <span key={tag} className="text-xs font-semibold bg-violet-500/20 text-violet-300 px-3 py-1 rounded-full">{tag}</span>
                ))}
              </div>
              <div className="flex items-center justify-end gap-4 mt-6">
            
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-violet-400 transition-colors" aria-label={`Live demo of ${project.title}`}>
                  <ExternalLink size={24} />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Projects;
