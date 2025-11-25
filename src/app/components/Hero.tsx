'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Briefcase, Github, Linkedin, Mail } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const heroVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.7, ease: 'easeOut' } 
  },
};

const Hero: React.FC = () => {
  const { t } = useLanguage();

  const scrollToSection = (sectionId: string): void => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative isolate overflow-hidden py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col gap-12 sm:gap-16">
          <motion.div
            className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]"
            initial="hidden"
            animate="visible"
            variants={heroVariants}
          >
            <div className="space-y-8">
              {/* Adjusted tracking for mobile to prevent overflow */}
              <div className="flex flex-wrap items-center gap-3 text-sm font-semibold uppercase tracking-widest sm:tracking-[0.4em] text-neutral-500">
                <span className="inline-flex h-2 w-2 rounded-full bg-black" />
                {t.hero.designation}
              </div>
              
              <div className="space-y-4 sm:space-y-6">
                {/* Added break-words to prevent overflow on small screens */}
                <p className="serif text-3xl leading-snug text-[#0a0a0a] break-words sm:text-4xl md:text-6xl lg:text-7xl">
                  {t.hero.greeting}{' '}
                  <span className="underline decoration-[8px] decoration-black/80 underline-offset-8">
                    Randey Giffary
                  </span>
                  <br />
                  {t.hero.punchline}
                </p>
                <p className="max-w-2xl text-lg text-neutral-600 break-words">
                  {t.hero.bio}
                </p>
                {/* Reduced tracking on mobile */}
                <p className="max-w-2xl text-xs uppercase tracking-widest text-neutral-400 sm:text-base sm:tracking-[0.35em]">
                  {t.hero.spotlight}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                <button
                  onClick={() => scrollToSection('projects')}
                  // Adjusted tracking for mobile button
                  className="flex items-center gap-3 rounded-full border border-black bg-black px-7 py-3 text-sm font-semibold uppercase tracking-widest sm:tracking-[0.4em] text-white transition hover:bg-white hover:text-black"
                >
                  {t.hero.button}
                  <Briefcase size={18} />
                </button>
                <div className="flex items-center gap-3 rounded-full border border-black/10 bg-white px-6 py-3 text-black">
                  {[
                    { icon: <Github size={18} />, href: 'https://github.com/randgit33', label: 'GitHub' },
                    { icon: <Linkedin size={18} />, href: 'https://linkedin.com/in/randgfry', label: 'LinkedIn' },
                    { icon: <Mail size={18} />, href: 'mailto:randeygiffary33@gmail.com', label: 'Email' },
                  ].map((item) => (
                    <a
                      key={item.label}
                      aria-label={item.label}
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="rounded-full border border-transparent p-2 transition hover:border-black/40"
                    >
                      {item.icon}
                    </a>
                  ))}
                </div>
              </div>

              {/* Adjusted tracking for marquee container */}
              <div className="overflow-hidden rounded-full border border-black/10 bg-white px-4 py-2 text-xs uppercase tracking-widest text-neutral-500 sm:px-6 sm:py-3 sm:text-sm sm:tracking-[0.4em]">
                <div className="marquee-track">
                  {t.hero.marquee.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-[28px] border border-black/10 bg-white p-6 sm:p-8 shadow-[0_20px_80px_rgba(15,15,15,0.08)]">
                <p className="mono-tracking text-neutral-500">{t.hero.availability.title}</p>
                <h3 className="mt-4 text-3xl font-semibold text-black break-words">{t.hero.availability.status}</h3>
                <p className="mt-2 text-sm text-neutral-500">{t.hero.availability.subtitle}</p>
                <div className="mt-6 flex items-center gap-3 rounded-2xl border border-black/10 bg-neutral-50 px-4 py-3 text-sm text-neutral-600">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  {t.hero.spotlight}
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                {t.hero.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-black/10 bg-white px-5 py-5 text-center shadow-[0_12px_50px_rgba(15,15,15,0.08)]"
                  >
                    <div className="text-3xl font-semibold text-black">{stat.value}</div>
                    {/* Reduced tracking on mobile stats labels to prevent card blowout */}
                    <p className="mt-3 text-[0.65rem] uppercase tracking-widest sm:tracking-[0.3em] text-neutral-500">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;