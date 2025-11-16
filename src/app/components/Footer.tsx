'use client'; // Add 'use client' to use the hook

import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext'; // Import hook

const Footer: React.FC = () => {
  const { t } = useLanguage(); // Use translations

  return (
    <footer className="border-t border-slate-200 text-slate-500 py-12 bg-slate-50/50">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 items-center text-center md:text-left">
          
          <div className="text-sm">
            &copy; {new Date().getFullYear()} Devran. {t.footer.rights} {/* Use translation */}
            <br />
            {t.footer.design} {/* Use translation */}
          </div>

          <div className="flex justify-center gap-6 font-medium">
            <a href="#about" className="hover:text-indigo-600 transition-colors">
              {t.footer.nav_about} {/* Use translation */}
            </a>
            <a href="#projects" className="hover:text-indigo-600 transition-colors">
              {t.footer.nav_projects} {/* Use translation */}
            </a>
            <a href="#contact" className="hover:text-indigo-600 transition-colors">
              {t.footer.nav_contact} {/* Use translation */}
            </a>
          </div>

          <div className="flex justify-center md:justify-end gap-6">
            {/* ... (social links remain the same) ... */}
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;