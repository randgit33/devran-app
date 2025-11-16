'use client';

import React, { useState, useEffect } from 'react';
import CardNav from './components/CardNav';
import Hero from './components/Hero';
import About from './components/About';
import Career from './components/Career';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Import our new context hook and modal
import { useLanguage } from './context/LanguageContext';
import LanguageModal from './components/LanguageModal';

export default function Home() {
  const { language, setLanguage, t } = useLanguage();
  const [isHydrated, setIsHydrated] = useState(false); // Prevents flash of wrong content

  useEffect(() => {
    // Check localStorage when the component mounts
    let storedLanguage: string | null = null;
    try {
      storedLanguage = localStorage.getItem('language');
    } catch (e) {
      console.warn("Could not read language from localStorage:", e);
    }
    
    if (storedLanguage) {
      setLanguage(storedLanguage as 'en' | 'id');
    }
    setIsHydrated(true); // Hydration is complete
  }, [setLanguage]);

  const handleLanguageSelect = (lang: 'en' | 'id') => {
    setLanguage(lang);
  };

  // --- Logic Gate ---
  // If we haven't checked localStorage yet, show nothing
  if (!isHydrated) {
    return null; 
  }

  // --- FIX: Check the React 'language' state, not localStorage ---
  // If no language is set in our state, show the modal.
  if (!language) {
    return <LanguageModal onSelectLanguage={handleLanguageSelect} />;
  }

  // --- Main Page ---
  // If language IS set, show the full page
  return (
    <div className="font-sans antialiased relative"> 
      <div>
        <CardNav
          // Use the translated nav items
          items={t.navItems} 
          baseColor="#fff"
          menuColor="#000"
          ease="power3.out"
        />
        <main>
          <Hero />
          <About />
          <Career />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}