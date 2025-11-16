'use client';

import React from 'react';
import AnimatedSection from './AnimatedSection';
import { useLanguage } from '../context/LanguageContext'; // Import hook

const About: React.FC = () => {
  const { t } = useLanguage(); // Use translations
  const skills = t.about.skills; // Get skills from translation file

  return (
    <AnimatedSection 
      id="about" 
      title={t.about.title}
      sectionNumber="01"
      className="bg-slate-50/50" 
    >
      <div className="grid md:grid-cols-3 gap-12 items-start">
        <div className="md:col-span-2 space-y-6 text-lg text-slate-700">
          <p>{t.about.p1}</p> {/* Use translation */}
          <p>{t.about.p2}</p> {/* Use translation */}
          <p>{t.about.p3}</p> {/* Use translation */}
        </div>

        <div className="md:col-span-1 md:mt-0 mt-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            {t.about.skillsTitle} {/* Use translation */}
          </h3>
          <div className="border border-slate-200 rounded-lg p-4">
            <div className="flex flex-wrap gap-2">
              {skills.map(skill => (
                <div key={skill} className="bg-slate-100 border border-slate-200 text-indigo-700 text-sm font-medium px-3 py-1 rounded-full cursor-default">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default About;