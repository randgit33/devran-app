'use client';

import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="mt-24 border-t border-black/10 py-16 text-neutral-600">
      <div className="container mx-auto px-6">
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="space-y-3">
            <p className="text-sm uppercase tracking-[0.4em] text-neutral-400">
              Devran Studio
            </p>
            <p className="text-lg text-black">
              {t.footer.design}
            </p>
            <p className="text-xs tracking-[0.4em] text-neutral-400">
              &copy; {new Date().getFullYear()} Devran. {t.footer.rights}
            </p>
          </div>

          <div className="flex flex-col gap-4 text-sm uppercase tracking-[0.3em] text-neutral-500 sm:flex-row sm:items-center sm:justify-center">
            <a href="#about" className="transition hover:text-black">
              {t.footer.nav_about}
            </a>
            <a href="#projects" className="transition hover:text-black">
              {t.footer.nav_projects}
            </a>
            <a href="#contact" className="transition hover:text-black">
              {t.footer.nav_contact}
            </a>
          </div>

          <div className="flex items-center justify-start gap-4 lg:justify-end">
            <a
              href="https://github.com/randgit33"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-black/10 p-3 text-black transition hover:border-black"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="https://linkedin.com/in/randgfry"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-black/10 p-3 text-black transition hover:border-black"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="mailto:randeygiffary33@gmail.com"
              className="rounded-2xl border border-black/10 p-3 text-black transition hover:border-black"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
