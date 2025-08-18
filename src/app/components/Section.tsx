'use client';
import React from 'react';

type SectionProps = {
  title: string;
  children: React.ReactNode;
  id: string;
};

const Section: React.FC<SectionProps> = ({ title, children, id }) => (
  <section id={id} className="py-16 md:py-24 px-4 md:px-8">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-mono uppercase tracking-widest text-cyan-400 mb-8 relative">
        <span className="text-green-400">[</span> {title} <span className="text-green-400">]</span>
        <span className="absolute -bottom-2 left-0 w-16 h-0.5 bg-cyan-400 animate-pulse"></span>
      </h2>
      {children}
    </div>
  </section>
);

export default Section;