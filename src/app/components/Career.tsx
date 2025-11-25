'use client';

import React from 'react';
import { Calendar, ArrowUpRight } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';

const Career: React.FC = () => {
  const { t } = useLanguage();
  const careerHistory = t.career.history;
  const sidebar = t.career.sidebar;

  return (
    <AnimatedSection
      id="career"
      title={t.career.title}
      sectionNumber="02"
    >
      <div className="-mt-8 mb-16 max-w-3xl text-lg text-neutral-600">
        {t.career.subtitle}
      </div>

      <div className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-10">
          {careerHistory.map((job, index) => (
            <motion.div
              key={job.company}
              className="group relative overflow-hidden rounded-[32px] border border-black/10 bg-white p-9 shadow-[0_25px_80px_rgba(15,15,15,0.08)]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.12, duration: 0.6, ease: 'easeOut' }}
            >
              <div className="relative space-y-6">
                <div className="flex flex-wrap items-center gap-4">
                  <p className="rounded-full border border-black/10 px-4 py-2 text-xs uppercase tracking-[0.4em] text-neutral-500">
                    {job.company}
                  </p>
                  <span className="flex items-center gap-2 text-sm text-neutral-500">
                    <Calendar size={16} />
                    {job.duration}
                  </span>
                </div>
                <div className="flex flex-col gap-3">
                  <h3 className="text-3xl font-semibold tracking-tight text-black">
                    {job.role}
                  </h3>
                  <div className="text-base text-neutral-600">
                    {job.description.map((point) => (
                      <p key={point} className="mb-3">
                        {point}
                      </p>
                    ))}
                  </div>
                </div>
                <div className="rounded-3xl border border-black/5 bg-neutral-50 p-4">
                  <p className="text-xs uppercase tracking-[0.4em] text-neutral-500">
                    Key Technologies
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {job.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-black/10 bg-white px-4 py-1.5 text-xs font-medium uppercase tracking-[0.35em] text-neutral-500"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      
      </div>
    </AnimatedSection>
  );
};

export default Career;
