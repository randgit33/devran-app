'use client';

import React, { useState, useEffect } from 'react';
import { Code2, Database, Wrench, User, Terminal } from 'lucide-react';

// Type definitions
interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'tools' | 'cloud';
}

interface FeatureItem {
  icon: React.ElementType;
  title: string;
  description: string;
  command: string;
}

const About: React.FC = () => {
  const [loadingSkills, setLoadingSkills] = useState<boolean>(true);
  const [visibleSkills, setVisibleSkills] = useState<number>(0);

  const skills: Skill[] = [
    {name: 'NextJS', level : 85 , category: 'frontend' },
    { name: 'React', level: 90, category: 'frontend' },
    { name: 'TypeScript', level: 85, category: 'frontend' },
    {name : 'Tailwind CSS', level: 75, category: 'frontend' },
    { name: 'Laravel', level: 80, category: 'backend' },
    {name : 'Firebase/Firestore', level: 70, category: 'cloud' },
  ];

  const features: FeatureItem[] = [
    { 
      icon: Code2, 
      title: 'Clean Code', 
      description: 'Writing maintainable, scalable solutions',
      command: './clean_code --optimize'
    },
    { 
      icon: Database, 
      title: 'Full Stack', 
      description: 'Frontend to backend mastery',
      command: './full_stack --deploy'
    },
    { 
      icon: Wrench, 
      title: 'Problem Solver', 
      description: 'Debug, optimize, deliver',
      command: './debug --fix-all'
    }
  ];

  useEffect(() => {
    // Simulate loading skills
    setTimeout(() => setLoadingSkills(false), 1000);
    
    // Animate skills appearance
    const interval = setInterval(() => {
      setVisibleSkills(prev => {
        if (prev < skills.length) {
          return prev + 1;
        }
        clearInterval(interval);
        return prev;
      });
    }, 200);

    return () => clearInterval(interval);
  }, [skills.length]);

  return (
    <section id="about" className="py-20 px-4 bg-black relative overflow-hidden">
      {/* Background code pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2300ff00' fill-opacity='0.1' font-family='monospace' font-size='8'%3E%3Ctext x='5' y='15'%3Econst%3C/text%3E%3Ctext x='5' y='30'%3Efunction%3C/text%3E%3Ctext x='5' y='45'%3Ereturn%3C/text%3E%3Ctext x='5' y='60'%3E%7B%7D%3C/text%3E%3Ctext x='5' y='75'%3E()%3D%3E%3C/text%3E%3C/g%3E%3C/svg%3E")`
        }}
      ></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Terminal window */}
        <div className="bg-gray-900 rounded-lg border border-gray-700 shadow-2xl">
          {/* Terminal header */}
          <div className="bg-gray-800 px-4 py-3 rounded-t-lg border-b border-gray-700 flex items-center gap-2">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="text-gray-400 text-sm ml-4 flex items-center gap-2">
              <Terminal className="h-4 w-4" />
              about@developer:~$
            </div>
          </div>
          
          {/* Terminal content */}
          <div className="p-6 font-mono">
            {/* Command */}
            <div className="text-green-400 mb-4">
              <span className="text-blue-400">developer@portfolio</span>
              <span className="text-white">:</span>
              <span className="text-purple-400">~</span>
              <span className="text-white">$ </span>
              <span className="text-green-400">cat about.md</span>
            </div>

            {/* About content */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-900/20 border border-blue-500/30 rounded text-blue-400 text-sm mb-6">
                <User className="h-4 w-4" />
                <span># About Developer</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-mono">
                <span className="text-green-400">{'>'} </span>
                Passionate Developer with a
                <span className="text-cyan-400"> Technical Vision</span>
              </h2>
              
              <div className="text-gray-300 max-w-3xl mx-auto space-y-2 text-left">
                <div><span className="text-blue-400">// </span>Full-stack developer who loves turning complex problems</div>
                <div><span className="text-blue-400">// </span>into simple, elegant solutions.</div>
                <div><span className="text-blue-400">// </span>Expertise in modern web technologies and system design.</div>
              </div>
            </div>

            {/* Skills section */}
            <div className="mb-8">
              <div className="text-green-400 mb-4">
                <span className="text-blue-400">developer@portfolio</span>
                <span className="text-white">:</span>
                <span className="text-purple-400">~</span>
                <span className="text-white">$ </span>
                <span className="text-green-400">./skills --show-all</span>
              </div>

              {loadingSkills ? (
                <div className="text-yellow-400 animate-pulse">Loading skills...</div>
              ) : (
                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Features */}
                  <div className="space-y-4">
                    <div className="text-cyan-400 mb-4"># Core Capabilities</div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {features.map((item, index) => (
                        <div key={index} className="p-4 bg-gray-800/50 border border-gray-700 rounded hover:border-green-500/50 transition-all duration-300 group">
                          <div className="flex items-center gap-3 mb-2">
                            <div className="p-2 rounded bg-green-900/30 border border-green-500/30 group-hover:border-green-400 transition-all duration-300">
                              <item.icon className="h-4 w-4 text-green-400" />
                            </div>
                            <span className="text-white font-semibold text-sm">{item.title}</span>
                          </div>
                          <p className="text-gray-400 text-xs mb-2">{item.description}</p>
                          <code className="text-xs text-purple-400 bg-gray-900/50 px-2 py-1 rounded">
                            {item.command}
                          </code>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Skills with progress bars */}
                  <div className="space-y-4">
                    <div className="text-cyan-400 mb-4"># Technical Stack</div>
                    {skills.slice(0, visibleSkills).map((skill, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between items-center text-sm">
                          <span className="text-white font-mono">{skill.name}</span>
                          <div className="flex items-center gap-2">
                            <span className="text-gray-400">{skill.level}%</span>
                            <span className={`px-2 py-1 rounded text-xs ${
                              skill.category === 'frontend' ? 'bg-blue-900/30 text-blue-400 border border-blue-500/30' :
                              skill.category === 'backend' ? 'bg-green-900/30 text-green-400 border border-green-500/30' :
                              'bg-purple-900/30 text-purple-400 border border-purple-500/30'
                            }`}>
                              {skill.category}
                            </span>
                          </div>
                        </div>
                        <div className="w-full bg-gray-800 rounded-full h-2 border border-gray-700">
                          <div
                            className={`h-2 rounded-full transition-all duration-1000 ease-out ${
                              skill.category === 'frontend' ? 'bg-gradient-to-r from-blue-500 to-cyan-400' :
                              skill.category === 'backend' ? 'bg-gradient-to-r from-green-500 to-emerald-400' :
                              'bg-gradient-to-r from-purple-500 to-pink-400'
                            }`}
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                    
                    {visibleSkills < skills.length && (
                      <div className="text-yellow-400 animate-pulse text-sm">
                        Loading... [{visibleSkills}/{skills.length}]
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Command prompt */}
            <div className="text-green-400 animate-pulse">
              <span className="text-blue-400">developer@portfolio</span>
              <span className="text-white">:</span>
              <span className="text-purple-400">~</span>
              <span className="text-white">$ </span>
              <span className="animate-pulse">█</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;