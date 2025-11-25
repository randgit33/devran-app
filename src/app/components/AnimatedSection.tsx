'use client';

import React from 'react';
import { motion } from 'framer-motion';

type SectionProps = {
  id: string;
  title: string;
  sectionNumber: string;
  children: React.ReactNode;
  className?: string;
};

const AnimatedSection: React.FC<SectionProps> = ({
  id,
  title,
  sectionNumber,
  children,
  className = '',
}) => {
  return (
    <motion.section
      id={id}
      className={`py-24 md:py-32 ${className}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="mb-16 max-w-5xl">
          <div className="flex flex-wrap items-center gap-4 text-xs uppercase tracking-[0.4em] text-neutral-400">
            <span className="text-neutral-500">{sectionNumber}</span>
            <span className="h-px flex-1 bg-neutral-200" />
            {title}
          </div>
          <h2 className="serif mt-6 text-4xl font-semibold leading-tight text-[#0a0a0a] md:text-5xl">
            {title}
          </h2>
        </div>
        {children}
      </div>
    </motion.section>
  );
};

export default AnimatedSection;
