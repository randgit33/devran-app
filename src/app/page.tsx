// page.tsx

'use client';
import React from 'react';
import CardNav from './components/CardNav';
import Hero from './components/Hero';
import About from './components/About';
import Career from './components/Career';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  const items = [
    {
      label: "About",
      bgColor: "#0D0716",
      textColor: "#fff",
      links: [
        { label: "My Story", href: "#about", ariaLabel: "Navigate to About section" },
        { label: "Experience", href: "#career", ariaLabel: "Navigate to Career section" }
      ]
    },
    {
      label: "Projects",
      bgColor: "#170D27",
      textColor: "#fff",
      links: [
        { label: "Featured Work", href: "#projects", ariaLabel: "Navigate to Projects section" },
      ]
    },
    {
      label: "Contact",
      bgColor: "#271E37",
      textColor: "#fff",
      links: [
        { label: "Get in Touch", href: "#contact", ariaLabel: "Navigate to Contact section" },
      ]
    }
  ];

  return (
    // REMOVED bg-[#0A0A0A] here to allow Hero background to fill the screen
    <div className="text-gray-200 font-sans antialiased relative"> 
      <div className="relative z-10">
        <CardNav
          items={items}
          baseColor="#fff"
          menuColor="#000"
          ease="power3.out"
        />
        <main>
          <Hero />
          <section id="about">
            <About />
          </section>
          <section id="career">
            <Career />
          </section>
          <section id="projects">
            <Projects />
          </section>
          <section id="contact">
            <Contact />
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
}