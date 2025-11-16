'use client';

import React from 'react';
import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import AnimatedSection from './AnimatedSection';
import { useLanguage } from '../context/LanguageContext'; // Import hook

// Project type and data are now imported from i18n
// const projectData: Project[] = [ ... ]; // REMOVED

const Projects: React.FC = () => {
  const { t } = useLanguage(); // Use translations
  const projectData = t.projects.projectData; // Get data from translations

  return (
    <AnimatedSection 
      id="projects" 
      title={t.projects.title} 
      sectionNumber="03"
      className="bg-slate-50/50"
    >
      <p className="text-lg text-slate-600 text-left -mt-8 mb-16 max-w-2xl">
        {t.projects.subtitle} {/* Use translation */}
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectData.map((project, index) => (
          <motion.div 
            key={index}
            className="relative h-80 rounded-xl overflow-hidden group transform transition-all duration-300 shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Image 
              src={project.imageUrl}
              alt={project.title}
              layout="fill"
              objectFit="cover"
              className="w-full h-full" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map(tag => (
                  <span key={tag} className="text-xs font-semibold bg-white/20 text-white px-3 py-1 rounded-full">{tag}</span>
                ))}
              </div>
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-indigo-300 hover:text-white transition-colors flex items-center gap-2" aria-label={`Live demo of ${project.title}`}>
                {t.projects.viewProject} <ExternalLink size={18} /> {/* Use translation */}
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </AnimatedSection>
  );
};

export default Projects;