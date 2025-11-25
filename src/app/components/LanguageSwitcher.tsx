'use client';

import React, { useState } from 'react';
import { Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Language } from '../lib/il8n';

const languages: { code: Language; label: string }[] = [
  { code: 'en', label: 'English' },
  { code: 'id', label: 'Bahasa Indonesia' },
];

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (code: Language) => {
    setLanguage(code);
    setIsOpen(false);
  };

  const activeLabel = languages.find((lang) => lang.code === language)?.label ?? 'English';

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="relative">
        <button
          aria-label="Toggle language menu"
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex items-center gap-3 rounded-full border border-black/10 bg-white px-5 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-black shadow-lg transition hover:border-black"
        >
          <Globe size={16} />
          {activeLabel}
        </button>

        {isOpen && (
          <div className="absolute bottom-16 right-0 w-56 overflow-hidden rounded-2xl border border-black/10 bg-white text-sm shadow-2xl">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleSelect(lang.code)}
                className={`flex w-full items-center justify-between px-5 py-4 text-left text-neutral-700 transition ${
                  lang.code === language
                    ? 'bg-black text-white'
                    : 'hover:bg-neutral-100'
                }`}
              >
                {lang.label}
                {lang.code === language && (
                  <span className="text-[0.6rem] uppercase tracking-[0.4em]">
                    Active
                  </span>
                )}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default LanguageSwitcher;

