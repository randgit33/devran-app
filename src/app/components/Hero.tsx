
'use client';

import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Github, Linkedin, Mail, Code2, Terminal } from 'lucide-react';

// Type definitions
interface HeroProps {
  name: string;
  designation: string;
}

const Hero: React.FC<HeroProps> = ({ name, designation }) => {
  const [typedText, setTypedText] = useState<string>('');
  const [showCursor, setShowCursor] = useState<boolean>(true);
  const [showPrompt, setShowPrompt] = useState<boolean>(false);
  const effectRan = useRef<boolean>(false);

  useEffect(() => {
    if (effectRan.current) return;
    effectRan.current = true;
    
    // Reset states
    setTypedText('');
    setShowCursor(true);
    setShowPrompt(false);
    
    // Show prompt first
    const promptTimeout = setTimeout(() => {
      setShowPrompt(true);
      
      // Start typing after prompt appears
      const typingTimeout = setTimeout(() => {
        let i = 0;
        const typingInterval = setInterval(() => {
          if (i < name.length) {
            setTypedText(name.substring(0, i + 1));
            i++;
          } else {
            clearInterval(typingInterval);
            // Start cursor blinking after typing is complete
            const cursorInterval = setInterval(() => {
              setShowCursor((prev) => !prev);
            }, 500);
          }
        }, 120);
      }, 1000);
      
    }, 500);

    return () => {
      clearTimeout(promptTimeout);
    };
  }, [name]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 relative overflow-hidden bg-black">
      {/* Terminal background pattern */}
      <div className="absolute inset-0 bg-black"></div>
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2300ff00' fill-opacity='0.4'%3E%3Ctext x='2' y='12' font-family='monospace' font-size='10'%3E01%3C/text%3E%3C/g%3E%3C/svg%3E")`
        }}
      ></div>

      {/* Floating matrix-style elements */}
      <div className="absolute top-10 left-10 text-green-400 font-mono text-xs opacity-20 animate-pulse">
        <div className="space-y-1">
          <div>{'> initializing...'}</div>
          <div>{'> loading modules...'}</div>
          <div>{'> system ready'}</div>
        </div>
      </div>

      {/* Binary rain effect */}
      <div className="absolute top-20 right-20 text-green-400 font-mono text-xs opacity-10 animate-bounce">
        <div className="space-y-0.5">
          <div>01001000</div>
          <div>01100101</div>
          <div>01101100</div>
          <div>01101100</div>
          <div>01101111</div>
        </div>
      </div>

      <div className="relative z-20 max-w-6xl mx-auto">
        {/* Terminal window */}
        <div className="bg-gray-900 rounded-lg border border-gray-700 shadow-2xl mb-8 max-w-4xl mx-auto">
          {/* Terminal header */}
          <div className="bg-gray-800 px-4 py-3 rounded-t-lg border-b border-gray-700 flex items-center gap-2">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="text-gray-400 text-sm ml-4 flex items-center gap-2">
              <Terminal className="h-4 w-4" />
              portfolio@devran:~$
            </div>
          </div>
          
          {/* Terminal content */}
          <div className="p-6 font-mono text-left">
            {showPrompt && (
              <>
                <div className="text-green-400 mb-2">
                  <span className="text-blue-400">devran@portfolio</span>
                  <span className="text-white">:</span>
                  <span className="text-purple-400">~</span>
                  <span className="text-white">$ </span>
                  <span className="text-green-400">whoami</span>
                </div>
                
                <div className="text-center py-8">
                  <div className="mb-6">
                    <Code2 className="h-12 w-12 text-cyan-400 mx-auto animate-pulse" />
                  </div>
                  
                  <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold font-mono tracking-tight mb-6">
                    <span className="text-green-400">{'>'} </span>
                    <span className="text-cyan-400">{typedText}</span>
                    {showCursor && <span className="animate-pulse text-green-400">█</span>}
                  </h1>
                  
                  <div className="space-y-3 text-left max-w-2xl mx-auto">
                    <div className="text-gray-400">
                      <span className="text-blue-400">designation:</span> 
                      <span className="text-white ml-2">{designation}</span>
                    </div>
                    <div className="text-gray-400">
                      <span className="text-blue-400">status:</span> 
                      <span className="text-green-400 ml-2">available_for_hire</span>
                    </div>
                    <div className="text-gray-400">
                      <span className="text-blue-400">passion:</span> 
                      <span className="text-purple-400 ml-2">keep_on_learning</span>
                    </div>
                  </div>
                </div>

                {/* Command prompt for actions */}
                <div className="mt-8 space-y-2">
                  <div className="text-green-400">
                    <span className="text-blue-400">devran@portfolio</span>
                    <span className="text-white">:</span>
                    <span className="text-purple-400">~</span>
                    <span className="text-white">$ </span>
                    <span className="text-yellow-400">ls available_commands</span>
                  </div>
                  
                  {/* Command buttons */}
                  <div className="flex flex-wrap gap-3 mt-4">
                    <button 
                      type="button"
                      onClick={() => scrollToSection('projects')}
                      className="px-4 py-2 bg-green-900/30 border border-green-500/50 text-green-400 rounded font-mono text-sm hover:bg-green-900/50 hover:border-green-400 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/25 cursor-pointer"
                    >
                      ./view_projects
                    </button>
                    <button 
                      type="button"
                      onClick={() => scrollToSection('about')}
                      className="px-4 py-2 bg-blue-900/30 border border-blue-500/50 text-blue-400 rounded font-mono text-sm hover:bg-blue-900/50 hover:border-blue-400 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 cursor-pointer"
                    >
                      ./about_me
                    </button>
                    <button 
                      type="button"
                      onClick={() => scrollToSection('contact')}
                      className="px-4 py-2 bg-purple-900/30 border border-purple-500/50 text-purple-400 rounded font-mono text-sm hover:bg-purple-900/50 hover:border-purple-400 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 cursor-pointer"
                    >
                      ./contact
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Social Links as terminal commands */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <a
            href="https://github.com/randgit33"
            className="flex items-center gap-2 px-4 py-2 bg-gray-900 border border-gray-700 rounded font-mono text-sm text-gray-300 hover:border-green-500 hover:text-green-400 transition-all duration-300"
            aria-label="GitHub Profile"
          >
            <Github className="h-4 w-4" />
            <span>github</span>
          </a>
          <a
            href="https://linkedin.com/in/randgfry"
            className="flex items-center gap-2 px-4 py-2 bg-gray-900 border border-gray-700 rounded font-mono text-sm text-gray-300 hover:border-blue-500 hover:text-blue-400 transition-all duration-300"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="h-4 w-4" />
            <span>linkedin</span>
          </a>
          <a
            href="mailto:randeygiffary33@gmail.com"
            className="flex items-center gap-2 px-4 py-2 bg-gray-900 border border-gray-700 rounded font-mono text-sm text-gray-300 hover:border-purple-500 hover:text-purple-400 transition-all duration-300"
            aria-label="Email Contact"
          >
            <Mail className="h-4 w-4" />
            <span>email</span>
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
    </section>
  );
};

export default Hero;