'use client';

import React, { useState, useEffect } from 'react';
import { Mail, Linkedin, Github, MessageCircle, Terminal } from 'lucide-react';

const commands = [
  'init contact_module...',
  'loading communication protocols...',
  'establishing connection...',
  'ready for input'
];

const Contact: React.FC = () => {
  const [currentCommand, setCurrentCommand] = useState<string>('');
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const [showForm, setShowForm] = useState<boolean>(false);
  
  // --- DELETED: formData state is no longer needed ---
  // const [formData, setFormData] = useState({ ... });

  useEffect(() => {
    let commandIndex = 0;
    const typeCommand = () => {
      if (commandIndex < commands.length) {
        setIsTyping(true);
        setCurrentCommand(commands[commandIndex]);
        
        setTimeout(() => {
          commandIndex++;
          if (commandIndex < commands.length) {
setTimeout(typeCommand, 800);
          } else {
setTimeout(() => {
  setShowForm(true); // We still use this to show the contact links
  setIsTyping(false);
}, 1000);
          }
        }, 1500);
      }
    };

    setTimeout(typeCommand, 500);
  }, []);

  // --- DELETED: handleInputChange and handleSubmit are no longer needed ---
  // const handleInputChange = (e: React.ChangeEvent<...>) => { ... };
  // const handleSubmit = (e: React.FormEvent) => { ... };

  return (
    <section className="py-20 px-4 bg-black relative overflow-hidden" id="contact">
      {/* Background pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2300ff00' fill-opacity='0.1' font-family='monospace' font-size='8'%3E%3Ctext x='5' y='15'%3Econnect%3C/text%3E%3Ctext x='5' y='30'%3Emailto%3C/text%3E%3Ctext x='5' y='45'%3Esend%3C/text%3E%3Ctext x='5' y='60'%3Emessage%3C/text%3E%3C/g%3E%3C/svg%3E")`
        }}
      ></div>

      <div className="max-w-4xl mx-auto relative z-10">
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
  contact@devran:~$
</div>
          </div>
          
          {/* Terminal content */}
          <div className="p-6 font-mono">
{/* Command */}
<div className="text-green-400 mb-6">
  <span className="text-blue-400">devran@portfolio</span>
  <span className="text-white">:</span>
  <span className="text-purple-400">~</span>
  <span className="text-white">$ </span>
  <span className="text-green-400">./contact --init</span>
</div>

{/* Loading commands */}
<div className="space-y-2 mb-8">
  {commands.map((command, index) => (
    <div
key={index}
className={`text-cyan-400 transition-opacity duration-500 ${
 currentCommand === command || commands.indexOf(currentCommand) > index
   ? 'opacity-100'
   : 'opacity-30'
}`}
    >
{currentCommand === command && isTyping ? (
 <span className="animate-pulse">{command}</span>
) : (
 command
)}
    </div>
  ))}
</div>

{/* Header */}
{showForm && (
  <>
    <div className="text-center mb-8">
<div className="inline-flex items-center gap-2 px-4 py-2 bg-green-900/20 border border-green-500/30 rounded text-green-400 text-sm mb-6">
 <MessageCircle className="h-4 w-4" />
 <span># Initialize Connection</span>
</div>

<h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-mono">
 <span className="text-green-400">{'>'} </span>
	Let&apos;s Create Something
	<span className="text-cyan-400"> Amazing Together</span>
</h2>

<div className="text-gray-400 text-sm space-y-1">
 <div><span className="text-blue-400">{'// '}</span>Always interested in new opportunities and exciting projects</div>
 <div><span className="text-blue-400">{'// '}</span>Whether you have a question or just want to say hello</div>
</div>
    </div>

    {/* Contact methods */}
    <div className="mb-8">
<div className="text-green-400 mb-4">
 <span className="text-blue-400">devran@portfolio</span>
 <span className="text-white">:</span>
 <span className="text-purple-400">~</span>
 <span className="text-white">$ </span>
 <span className="text-green-400">ls available_connections</span>
</div>

<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
 <a
   href="mailto:randeygiffary33@gmail.com"
   className="flex items-center gap-3 px-6 py-3 bg-blue-900/30 border border-blue-500/50 text-blue-400 rounded font-mono text-sm hover:bg-blue-900/50 hover:border-blue-400 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 w-full sm:w-auto justify-center group"
 >
   <Mail className="h-5 w-5 group-hover:animate-bounce" />
   <span>send_email</span>
 </a>
 <a
   href="https://www.linkedin.com/in/randgfry/"
   className="flex items-center gap-3 px-6 py-3 bg-cyan-900/30 border border-cyan-500/50 text-cyan-400 rounded font-mono text-sm hover:bg-cyan-900/50 hover:border-cyan-400 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25 w-full sm:w-auto justify-center group"
 >
   <Linkedin className="h-5 w-5 group-hover:animate-bounce" />
   <span>connect_linkedin</span>
 </a>
 <a
   href="https://github.com/randgit33"
   className="flex items-center gap-3 px-6 py-3 bg-purple-900/30 border border-purple-500/50 text-purple-400 rounded font-mono text-sm hover:bg-purple-900/50 hover:border-purple-400 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 w-full sm:w-auto justify-center group"
 >
   <Github className="h-5 w-5 group-hover:animate-bounce" />
   <span>view_github</span>
 </a>
</div>
    </div>
                
                {/* --- DELETED: The entire contact form section is gone --- */}

    {/* Command prompt */}
    <div className="text-green-400 animate-pulse">
<span className="text-blue-400">devran@portfolio</span>
<span className="text-white">:</span>
<span className="text-purple-400">~</span>
<span className="text-white">$ </span>
<span className="animate-pulse">█</span>
    </div>
  </>
)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;