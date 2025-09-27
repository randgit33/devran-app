'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Calendar } from 'lucide-react';

// Define the type for a single career entry
type CareerEntry = {
    role: string;
    company: string;
    duration: string;
    description: string[];
    technologies: string[];
};

// Career data for a single entry
const careerHistory: CareerEntry[] = [
    {
        role: 'Full-Stack Developer',
        company: 'PT. Fortitude Genius Indonesia',
        duration: 'Present',
        description: [
            'Engineered and integrated a robust full-stack solution using Next.js and React with TypeScript for the frontend and Laravel for the backend, delivering seamless user experiences.',
            'Developed and maintained scalable applications by leveraging Laravel to build a powerful RESTful API and Firebase for real-time data synchronization.',
            'Spearheaded the design and implementation of a high-performance web application, using Next.js for server-side rendering (SSR) and TypeScript to enhance code quality and maintainability.',
            'Collaborated with design and product teams to translate complex requirements into elegant, user-centric features, powered by a a combination of React, Next.js, Laravel, and Firebase.'
        ],
        technologies: ['React', 'TypeScript', 'Laravel', 'NextJS', 'MySQL', 'Firestore','RESTful API']
    },
];

const Career: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.2 }
        );

        // --- FIX START ---
        // 1. Copy the ref's current value to a local variable.
        const currentElement = sectionRef.current; 
        
        if (currentElement) {
            observer.observe(currentElement);
        }

        // 2. Use the local variable in the cleanup function.
        return () => {
            if (currentElement) {
                observer.unobserve(currentElement);
            }
        };
        // --- FIX END ---
    }, []); // Dependencies array is correct as empty (it only relies on the element which is stable after mount)


    return (
        <section id="career" className="py-20 md:py-28" ref={sectionRef}>
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-violet-500">
                        My Experience
                    </h2>
                    <p className="mt-4 text-lg text-slate-400">
                        My professional path and key experiences.
                    </p>
                </div>

                <div className={`max-w-3xl mx-auto transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    {careerHistory.map((job, index) => (
                        <div 
                            key={index}
                            className="p-8 bg-slate-800/50 backdrop-blur-sm rounded-2xl shadow-2xl shadow-violet-500/10 border border-violet-500/30"
                        >
                            <div className="flex flex-col md:flex-row justify-between md:items-center">
                                <div>
                                    <h3 className="font-bold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-teal-400">{job.role}</h3>
                                    <p className="font-semibold text-slate-300 mt-1 text-lg">{job.company}</p>
                                </div>
                                <p className="text-sm text-slate-400 mt-2 md:mt-0 flex items-center gap-2">
                                    <Calendar size={14} /> {job.duration}
                                </p>
                            </div>

                            <ul className="mt-6 space-y-3 text-slate-300 list-disc list-inside">
                                {job.description.map((point, i) => (
                                    <li key={i}>{point}</li>
                                ))}
                            </ul>

                            <div className="mt-6 pt-4 border-t border-slate-700/50">
                                <h4 className="font-semibold text-slate-200 mb-3">Key Technologies:</h4>
                                <div className="flex flex-wrap gap-2">
                                    {job.technologies.map((tech) => (
                                        <span key={tech} className="bg-violet-400/10 text-violet-300 text-xs font-medium px-3 py-1 rounded-full">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Career;