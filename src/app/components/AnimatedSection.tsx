'use client';

import React from 'react';
import { motion } from 'framer-motion';

type SectionProps = {
  id: string;
  title: string;
  sectionNumber: string; // e.g., "01"
  children: React.ReactNode;
  className?: string;
};

const AnimatedSection: React.FC<SectionProps> = ({ id, title, sectionNumber, children, className = '' }) => {
  return (
    // A subtle fade-in animation. More professional than a slide-up.
    <motion.section 
      id={id}
      className={`py-24 md:py-32 ${className}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div className="container mx-auto px-6">
        {/* This is a professional heading pattern.
          - A left-aligned, numbered "overline"
          - A large, bold main heading
        */}
        <div className="max-w-4xl mx-auto mb-16 text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            <span className="text-indigo-600 font-mono text-xl md:text-2xl block mb-2">{sectionNumber}.</span>
            {title}
          </h2>
        </div>
        <div className="max-w-4xl mx-auto">
          {children}
        </div>
      </div>
    </motion.section>
  );
};

export default AnimatedSection;