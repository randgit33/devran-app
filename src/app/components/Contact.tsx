'use client';

import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { useLanguage } from '../context/LanguageContext'; // Import hook

const Contact: React.FC = () => {
  const { t } = useLanguage(); // Use translations

  return (
    <AnimatedSection 
      id="contact" 
      title={t.contact.title} 
      sectionNumber="04"
    >
      <div className="grid md:grid-cols-2 gap-12 items-center bg-white border border-slate-200 rounded-2xl shadow-sm p-8 md:p-12">
        <div className="text-center md:text-left">
          <p className="text-lg text-slate-700 mb-8">
            {t.contact.p1} {/* Use translation */}
          </p>
          <a 
            href="mailto:randeygiffary33@gmail.com" 
            className="inline-block bg-indigo-600 text-white font-bold text-lg py-4 px-10 rounded-full hover:bg-indigo-700 transition-all duration-300 shadow-lg shadow-indigo-200 transform hover:scale-105"
          >
            {t.contact.button} {/* Use translation */}
          </a>
        </div>

        <div className="flex flex-col gap-6 items-center md:items-start md:border-l md:border-slate-200 md:pl-12">
          <a 
            href="https://github.com/randgit33" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-3 text-slate-600 hover:text-indigo-600 transition-colors group"
            aria-label="GitHub Profile"
          >
            <Github size={24} />
            <span className="text-lg font-medium group-hover:underline">
              {t.contact.github} {/* Use translation */}
            </span>
          </a>
          <a 
            href="https://linkedin.com/in/randgfry" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-3 text-slate-600 hover:text-indigo-600 transition-colors group"
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={24} />
            <span className="text-lg font-medium group-hover:underline">
              {t.contact.linkedin} {/* Use translation */}
            </span>
          </a>
          <a 
            href="mailto:randeygiffary33@gmail.com" 
            className="flex items-center gap-3 text-slate-600 hover:text-indigo-600 transition-colors group"
            aria-label="Email Contact"
          >
            <Mail size={24} />
            <span className="text-lg font-medium group-hover:underline">
              {t.contact.email} {/* Use translation */}
            </span>
          </a>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Contact;