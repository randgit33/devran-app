'use client';

import React from 'react';
import AnimatedSection from './AnimatedSection';
import { useLanguage } from '../context/LanguageContext';
import { motion, Variants } from 'framer-motion';

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: 'easeOut' },
  }),
};

const About: React.FC = () => {
  const { t } = useLanguage();
  const skills = t.about.skills;
  const { focus, narrativeLabel } = t.about;

  return (
    <AnimatedSection
      id="about"
      title={t.about.title}
      sectionNumber="01"
      className="relative overflow-hidden"
    >
      <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr]">
        <motion.div
          className="space-y-6 rounded-[32px] border border-black/10 bg-white p-10 text-neutral-700 shadow-[0_25px_80px_rgba(15,15,15,0.08)]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={cardVariants}
        >
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-neutral-400">
            <span className="h-px flex-1 bg-neutral-200" />
            {narrativeLabel}
            <span className="h-px flex-1 bg-neutral-200" />
          </div>
          <div className="space-y-5 text-lg leading-relaxed text-neutral-700">
            <p>{t.about.p1}</p>
            <p>{t.about.p2}</p>
            <p>{t.about.p3}</p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <div className="rounded-3xl border border-black/5 bg-neutral-50 p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">{focus.title}</p>
              <p className="mt-3 text-xl font-semibold tracking-tight text-black">{focus.body}</p>
            </div>
          
          </div>
        </motion.div>

        <motion.div
          className="space-y-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={cardVariants}
          custom={2}
        >
          <div className="rounded-[32px] border border-black/10 bg-white p-8 shadow-[0_20px_60px_rgba(15,15,15,0.08)]">
            <h3 className="text-sm uppercase tracking-[0.4em] text-neutral-500">
              {t.about.skillsTitle}
            </h3>
            <div className="mt-6 flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-black/10 bg-neutral-50 px-4 py-2 text-xs font-medium uppercase tracking-[0.3em] text-neutral-600"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

       
        </motion.div>
      </div>
    </AnimatedSection>
  );
};

export default About;