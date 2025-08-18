'use client';

import React, { useState, useEffect } from 'react';
import { Github, ExternalLink, Code2, Folder, Terminal, Play } from 'lucide-react';

// Type definitions
interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  github?: string;
  status: 'deployed' | 'development' | 'archived' | 'private';
}

const Projects: React.FC = () => {
  const [currentProject, setCurrentProject] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [visibleProjects, setVisibleProjects] = useState<number>(0);

  const projects: Project[] = [
    {
      id: '1',
      title: 'Fortitude Genius Indonesia Landing Page',
      description: 'A modern, responsive landing page showcasing the Fortitude Genius Indonesia Corporation.',
      technologies: ['Next.js', 'TypeScript', 'React','Tailwind CSS'],
      link: 'https://fortitudegenius.com',
      status: 'deployed'
    },
    {
      id: '2', 
      title: 'Global Exposure Community Landing Page',
      description: 'A community-driven platform for learning english and developing skills together, featuring interactive elements and a sleek design.',
      technologies: ['React', 'Typescript', 'NextJS', 'Tailwind CSS'],
      link: 'https://fortitudegenius.com/gxcLP',
      status: 'deployed'
    },
    {
      id: '3',
      title: 'Genius Fish Pre-Registration Website',
      description: 'A pre-registration website for the Genius Fish app, featuring a modern design and user-friendly interface.',
      technologies: ['Laravel', 'Tailwind CSS', 'Firestore', 'FastAPI'],
      status: 'private'
    },
    {
    id : '4',
    title : 'Genius Fish User Verificator',
    description: 'A user verification system with secure authentication, role-based access control, and audit logging.',
    technologies: ['NextJS', 'Tailwind CSS', 'Firestore'],
    status : 'private'
  },
  {
    id :'5',
    title : 'Genius Fish Landing Page',
    description : 'Landing Page for Genius Fish App',
    technologies: ['NextJS', 'Tailwind CSS', 'Typescript','React'],
    status : 'development'
  },
  ];

  useEffect(() => {
    // Simulate loading
    setTimeout(() => setIsLoading(false), 1500);
    
    // Animate projects appearance
    const interval = setInterval(() => {
      setVisibleProjects(prev => {
        if (prev < projects.length) {
          return prev + 1;
        }
        clearInterval(interval);
        return prev;
      });
    }, 500);

    return () => clearInterval(interval);
  }, [projects.length]);

  const getStatusColor = (status: Project['status']) => {
    switch (status) {
      case 'deployed': return 'text-green-400 border-green-500/30 bg-green-900/20';
      case 'development': return 'text-yellow-400 border-yellow-500/30 bg-yellow-900/20';
      case 'archived': return 'text-gray-400 border-gray-500/30 bg-gray-900/20';
      default: return 'text-gray-400 border-gray-500/30 bg-gray-900/20';
    }
  };

  return (
    <section className="py-20 px-4 bg-black relative overflow-hidden" id="projects">
      {/* Background pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2300ff00' fill-opacity='0.1' font-family='monospace' font-size='10'%3E%3Ctext x='5' y='20'%3Eif%3C/text%3E%3Ctext x='5' y='40'%3Eelse%3C/text%3E%3Ctext x='5' y='60'%3Efor%3C/text%3E%3Ctext x='5' y='80'%3Ewhile%3C/text%3E%3Ctext x='5' y='100'%3Etry%3C/text%3E%3C/g%3E%3C/svg%3E")`
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
              projects@devran:~$
            </div>
          </div>
          
          {/* Terminal content */}
          <div className="p-6 font-mono">
            {/* Command */}
            <div className="text-green-400 mb-4">
              <span className="text-blue-400">devran@portfolio</span>
              <span className="text-white">:</span>
              <span className="text-purple-400">~/projects</span>
              <span className="text-white">$ </span>
              <span className="text-green-400">ls -la --show-details</span>
            </div>

            {/* Loading simulation */}
            {isLoading ? (
              <div className="space-y-2">
                <div className="text-yellow-400">Scanning project directories...</div>
                <div className="text-cyan-400 animate-pulse">Loading repositories...</div>
                <div className="text-green-400">Found {projects.length} projects</div>
              </div>
            ) : (
              <>
                {/* Projects header */}
                <div className="text-center mb-8">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-900/20 border border-purple-500/30 rounded text-purple-400 text-sm mb-6">
                    <Folder className="h-4 w-4" />
                    <span># Featured Projects</span>
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-mono">
                    <span className="text-green-400">{'>'} </span>
                    Projects That Define Me As A 
                    <span className="text-cyan-400"> Developer</span>
                  </h2>
                  
                  <div className="text-gray-400 text-sm">
                    <span className="text-blue-400">// </span>
                    Recent repositories and deployed applications
                  </div>
                </div>

                {/* Projects list */}
                <div className="space-y-4">
                  {projects.slice(0, visibleProjects).map((project, index) => (
                    <div
                      key={project.id}
                      className="group bg-gray-800/30 border border-gray-700 rounded-lg p-6 hover:border-green-500/50 hover:bg-gray-800/50 transition-all duration-300"
                    >
                      <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                        {/* Project info */}
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="p-2 rounded bg-cyan-900/30 border border-cyan-500/30">
                              <Code2 className="h-5 w-5 text-cyan-400" />
                            </div>
                            <h3 className="text-xl font-semibold text-white font-mono">
                              {project.title}
                            </h3>
                            <div className={`px-3 py-1 rounded-full text-xs font-mono border ${getStatusColor(project.status)}`}>
                              {project.status}
                            </div>
                          </div>
                          
                          <p className="text-gray-300 mb-4 leading-relaxed">
                            <span className="text-blue-400">// </span>{project.description}
                          </p>

                          {/* Technologies */}
                          <div className="flex flex-wrap gap-2 mb-4">
                            {project.technologies.map((tech, techIndex) => (
                              <span
                                key={techIndex}
                                className="px-3 py-1 text-xs font-mono bg-gray-900/50 text-green-400 border border-green-500/30 rounded"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Project actions */}
                        <div className="flex gap-3">
                          {project.github && (
                            <a
                              href={project.github}
                              className="flex items-center gap-2 px-4 py-2 bg-gray-900/50 border border-gray-600 rounded text-gray-300 hover:border-blue-500 hover:text-blue-400 transition-all duration-300 text-sm font-mono group-hover:animate-pulse"
                              aria-label="View GitHub repository"
                            >
                              <Github className="h-4 w-4" />
                              <span>source</span>
                            </a>
                          )}
                          {project.link && (
                            <a
                              href={project.link}
                              className="flex items-center gap-2 px-4 py-2 bg-green-900/30 border border-green-500/50 rounded text-green-400 hover:bg-green-900/50 hover:border-green-400 transition-all duration-300 text-sm font-mono group-hover:animate-pulse"
                              aria-label="View live project"
                            >
                              <Play className="h-4 w-4" />
                              <span>Open</span>
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}

                  {/* Loading more projects */}
                  {visibleProjects < projects.length && (
                    <div className="text-center py-4">
                      <div className="text-yellow-400 animate-pulse font-mono">
                        Loading more projects... [{visibleProjects}/{projects.length}]
                      </div>
                    </div>
                  )}

                  {/* All projects loaded */}
                  {visibleProjects === projects.length && (
                    <div className="text-center py-4">
                      <div className="text-green-400 font-mono text-sm">
                        <span className="text-blue-400">// </span>
                        All projects loaded successfully
                      </div>
                    </div>
                  )}
                </div>

                {/* Command prompt */}
                <div className="mt-8 pt-4 border-t border-gray-700">
                  <div className="text-green-400">
                    <span className="text-blue-400">devran@portfolio</span>
                    <span className="text-white">:</span>
                    <span className="text-purple-400">~/projects</span>
                    <span className="text-white">$ </span>
                    <span className="text-gray-400">cd ../contact</span>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;