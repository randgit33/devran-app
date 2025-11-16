'use client';

import React from 'react';
import { Calendar } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { useLanguage } from '../context/LanguageContext'; // Import hook

// CareerEntry type is now imported from i18n
// const careerHistory: CareerEntry[] = [ ... ]; // REMOVED

const Career: React.FC = () => {
  const { t } = useLanguage(); // Use translations
  const careerHistory = t.career.history; // Get data from translations

  return (
    <AnimatedSection 
      id="career" 
      title={t.career.title} 
      sectionNumber="02"
    >
        <p className="text-lg text-slate-600 text-left -mt-8 mb-16 max-w-2xl">
            {t.career.subtitle} {/* Use translation */}
        </p>

        <div className="relative border-l-2 border-slate-200 pl-10 space-y-12">
            {careerHistory.map((job, index) => (
                <div key={index} className="relative">
                    <div className="absolute -left-12 -top-1 w-4 h-4 bg-indigo-600 rounded-full border-4 border-white"></div>
                    <div className="p-8 bg-white border border-slate-200 rounded-2xl shadow-sm">
                        <div className="flex flex-col md:flex-row justify-between md:items-center">
                            <div>
                                <h3 className="font-bold text-2xl text-gray-900">{job.role}</h3>
                                <p className="font-semibold text-indigo-700 mt-1 text-lg">{job.company}</p>
                            </div>
                            <p className="text-sm text-slate-500 mt-2 md:mt-0 flex items-center gap-2">
                                <Calendar size={14} /> {job.duration}
                            </p>
                        </div>
                        <ul className="mt-6 space-y-3 text-slate-700 list-disc list-inside">
                            {job.description.map((point, i) => (
                                <li key={i}>{point}</li>
                            ))}
                        </ul>
                        <div className="mt-6 pt-4 border-t border-slate-200">
                            <h4 className="font-semibold text-gray-900 mb-3">Key Technologies:</h4>
                            <div className="flex flex-wrap gap-2">
                                {job.technologies.map((tech) => (
                                    <span key={tech} className="bg-slate-100 text-slate-700 text-xs font-medium px-3 py-1 rounded-full border border-slate-200">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </AnimatedSection>
  );
};

export default Career;