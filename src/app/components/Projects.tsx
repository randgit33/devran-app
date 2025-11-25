'use client';

import React from 'react';
import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import AnimatedSection from './AnimatedSection';
import { useLanguage } from '../context/LanguageContext';

const Projects: React.FC = () => {
  const { t } = useLanguage();
  const projectData = t.projects.projectData;

  return (
    <AnimatedSection
      id="projects"
      title={t.projects.title}
      sectionNumber="03"
      className="relative"
    >
      <p className="-mt-8 mb-16 max-w-2xl text-lg text-neutral-600">
        {t.projects.subtitle}
      </p>

      <div className="grid gap-8 lg:grid-cols-2">
        {projectData.map((project, index) => (
          <motion.div
            key={project.title}
            className="group relative overflow-hidden rounded-[32px] border border-black/10 bg-white p-1 shadow-[0_25px_90px_rgba(15,15,15,0.08)]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: index * 0.08, duration: 0.6, ease: 'easeOut' }}
          >
            <div className="relative flex flex-col gap-6 rounded-[28px] bg-white p-8">
              <div className="relative h-64 overflow-hidden rounded-3xl border border-black/5 bg-neutral-100">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 600px"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 flex items-center gap-2 rounded-full border border-white/40 bg-white/70 px-4 py-1 text-xs uppercase tracking-[0.3em] text-black/60">
                  {t.projects.caseStudyLabel}
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.4em] text-neutral-400">
                  <span className="h-px w-10 bg-neutral-200" />
                  {project.tags.slice(0, 3).join(' · ')}
                </div>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-3xl font-semibold tracking-tight text-black">
                      {project.title}
                    </h3>
                  </div>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Live demo of ${project.title}`}
                    className="rounded-full border border-black/10 bg-black p-3 text-white transition hover:bg-white hover:text-black"
                  >
                    <ExternalLink size={18} />
                  </a>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-black/10 bg-neutral-50 px-4 py-2 text-xs uppercase tracking-[0.3em] text-neutral-500"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </AnimatedSection>
  );
};

export default Projects;
