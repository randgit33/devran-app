'use client';

import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  const { t } = useLanguage();

  return (
    <AnimatedSection
      id="contact"
      title={t.contact.title}
      sectionNumber="04"
    >
      <motion.div
        className="grid gap-10 rounded-[36px] border border-black/10 bg-white p-10 shadow-[0_25px_90px_rgba(15,15,15,0.08)] lg:grid-cols-[1.1fr_0.9fr]"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="space-y-8 text-black">
          <p className="text-lg text-neutral-600">{t.contact.p1}</p>
          <a
            href="mailto:randeygiffary33@gmail.com"
            className="inline-flex items-center gap-4 rounded-full border border-black bg-black px-10 py-4 text-sm font-semibold uppercase tracking-[0.4em] text-white transition hover:bg-white hover:text-black"
          >
            {t.contact.button}
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
          </a>
          <div className="rounded-3xl border border-black/5 bg-neutral-50 p-6">
            <p className="text-xs uppercase tracking-[0.4em] text-neutral-500">
              {t.contact.workModesTitle}
            </p>
            <ul className="mt-4 space-y-3 text-sm text-neutral-600">
              {t.contact.workModes.map((mode) => (
                <li key={mode} className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-black" />
                  {mode}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="space-y-6 rounded-[28px] border border-black/10 bg-neutral-50 p-8">
          <div className="text-xs uppercase tracking-[0.4em] text-neutral-500">
            {t.contact.channelsTitle}
          </div>
          <div className="space-y-4">
            {[
              {
                href: 'https://github.com/randgit33',
                label: t.contact.github,
                icon: <Github size={20} />,
              },
              {
                href: 'https://linkedin.com/in/randgfry',
                label: t.contact.linkedin,
                icon: <Linkedin size={20} />,
              },
              {
                href: 'mailto:randeygiffary33@gmail.com',
                label: t.contact.email,
                icon: <Mail size={20} />,
              },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="flex items-center justify-between rounded-2xl border border-black/10 bg-white px-5 py-4 text-neutral-700 transition hover:border-black hover:text-black"
              >
                <div className="flex items-center gap-4">
                  <div className="rounded-full border border-black/10 bg-neutral-50 p-3 text-black">
                    {link.icon}
                  </div>
                  <span className="text-lg font-medium">{link.label}</span>
                </div>
                <span className="text-xs uppercase tracking-[0.4em] text-neutral-400">
                  {t.contact.reachOutCta}
                </span>
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </AnimatedSection>
  );
};

export default Contact;
