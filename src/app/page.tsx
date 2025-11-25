'use client';

import React, { useEffect } from 'react';
import CardNav from './components/CardNav';
import Hero from './components/Hero';
import About from './components/About';
import Career from './components/Career';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

import { useLanguage } from './context/LanguageContext';
import LanguageSwitcher from './components/LanguageSwitcher';

export default function Home() {
  const { setLanguage, t } = useLanguage();

  useEffect(() => {
    let storedLanguage: string | null = null;
    try {
      storedLanguage = localStorage.getItem('language');
    } catch (e) {
      console.warn("Could not read language from localStorage:", e);
    }
    
    if (storedLanguage) {
      setLanguage(storedLanguage as 'en' | 'id');
    }
  }, [setLanguage]);

  return (
    <div className="relative min-h-screen overflow-hidden bg-[var(--bg-primary)]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-white via-transparent to-transparent" aria-hidden="true" />
        <div className="absolute right-10 top-32 h-32 w-32 rounded-full border border-black/10" aria-hidden="true" />
      </div>

      <CardNav
        items={t.navItems}
        baseColor="#ffffff"
        menuColor="#050505"
        ease="power3.out"
        className=""
        availabilityLabel={t.cardNav.availability}
        contactLabel={t.cardNav.contact}
      />

      <main className="relative z-10 flex flex-col gap-0">
        <Hero />
        <About />
        <Career />
        <Projects />
        <Contact />
        <Footer />
      </main>

      <LanguageSwitcher />
    </div>
  );
}