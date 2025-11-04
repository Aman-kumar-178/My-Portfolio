'use client';

import React from "react";
import { Code, Database, Terminal, Server, Monitor, Zap } from "lucide-react";
import Marquee from "./Marquee"; // Ensure Marquee.jsx exists
import FeaturedProjects from "./Project";

const skills = [
  // Programming & Scripting
  { name: "JavaScript", icon: <Code className="w-6 h-6 sm:w-8 sm:h-8" /> },
  { name: "Python", icon: <Code className="w-6 h-6 sm:w-8 sm:h-8" /> },
  { name: "Java", icon: <Code className="w-6 h-6 sm:w-8 sm:h-8" /> },
  { name: "HTML", icon: <Code className="w-6 h-6 sm:w-8 sm:h-8" /> },
  { name: "CSS", icon: <Monitor className="w-6 h-6 sm:w-8 sm:h-8" /> },

  // Front-End Development
  { name: "React.js", icon: <Code className="w-6 h-6 sm:w-8 sm:h-8" /> },
  { name: "Next.js", icon: <Code className="w-6 h-6 sm:w-8 sm:h-8" /> },
  { name: "Tailwind CSS", icon: <Monitor className="w-6 h-6 sm:w-8 sm:h-8" /> },
  { name: "Bootstrap", icon: <Monitor className="w-6 h-6 sm:w-8 sm:h-8" /> },

  // Back-End Development
  { name: "Node.js", icon: <Server className="w-6 h-6 sm:w-8 sm:h-8" /> },
  { name: "Express.js", icon: <Server className="w-6 h-6 sm:w-8 sm:h-8" /> },

  // Databases
  { name: "MongoDB", icon: <Database className="w-6 h-6 sm:w-8 sm:h-8" /> },
  { name: "MySQL", icon: <Database className="w-6 h-6 sm:w-8 sm:h-8" /> },

  // Data Science & AI/ML
  { name: "Artificial Intelligence", icon: <Zap className="w-6 h-6 sm:w-8 sm:h-8" /> },
  { name: "Machine Learning", icon: <Zap className="w-6 h-6 sm:w-8 sm:h-8" /> },
  { name: "Scikit-learn", icon: <Terminal className="w-6 h-6 sm:w-8 sm:h-8" /> },
  { name: "Pandas", icon: <Terminal className="w-6 h-6 sm:w-8 sm:h-8" /> },
  { name: "NumPy", icon: <Terminal className="w-6 h-6 sm:w-8 sm:h-8" /> },
  { name: "Matplotlib", icon: <Monitor className="w-6 h-6 sm:w-8 sm:h-8" /> },
  { name: "Seaborn", icon: <Monitor className="w-6 h-6 sm:w-8 sm:h-8" /> },

  // Tools & Platforms
  { name: "Git", icon: <Terminal className="w-6 h-6 sm:w-8 sm:h-8" /> },
  { name: "GitHub", icon: <Terminal className="w-6 h-6 sm:w-8 sm:h-8" /> },
  { name: "VS Code", icon: <Monitor className="w-6 h-6 sm:w-8 sm:h-8" /> },
  { name: "Jupyter Notebook", icon: <Monitor className="w-6 h-6 sm:w-8 sm:h-8" /> },
  { name: "Streamlit", icon: <Monitor className="w-6 h-6 sm:w-8 sm:h-8" /> },

  // Other Skills
  { name: "Problem-solving", icon: <Zap className="w-6 h-6 sm:w-8 sm:h-8" /> },
  { name: "Analytical Thinking", icon: <Zap className="w-6 h-6 sm:w-8 sm:h-8" /> },
  { name: "OOP & Design Patterns", icon: <Code className="w-6 h-6 sm:w-8 sm:h-8" /> },
  { name: "SDLC Understanding", icon: <Terminal className="w-6 h-6 sm:w-8 sm:h-8" /> },
];

export default function Skills() {
  return (
    <section id="skills"className="w-full bg-black text-white flex flex-col items-center py-12 px-4 sm:px-12">
      
      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 text-center">
        Technical Skills
      </h2>
      <p className="text-gray-400 text-center mb-8 max-w-2xl text-sm sm:text-base">
        Technologies, programming languages, AI/ML, databases, and tools I work with
      </p>

      {/* First scrolling line */}
      <Marquee className="w-full mb-4" speed={30} pauseOnHover repeat={2}>
        {skills.map((skill, idx) => (
          <div
            key={idx}
            className="flex items-center gap-2 sm:gap-4 px-4 sm:px-10 py-3 sm:py-6 bg-gray-800 rounded-2xl shadow-xl hover:scale-105 transition-transform min-w-[120px]"
          >
            {skill.icon}
            <span className="font-semibold text-sm sm:text-lg">{skill.name}</span>
          </div>
        ))}
      </Marquee>

      {/* Second scrolling line (reverse) */}
      <Marquee className="w-full mb-12" speed={30} pauseOnHover repeat={2} reverse>
        {skills.map((skill, idx) => (
          <div
            key={idx}
            className="flex items-center gap-2 sm:gap-4 px-4 sm:px-10 py-3 sm:py-6 bg-gray-800 rounded-2xl shadow-xl hover:scale-105 transition-transform min-w-[120px]"
          >
            {skill.icon}
            <span className="font-semibold text-sm sm:text-lg">{skill.name}</span>
          </div>
        ))}
      </Marquee>

      {/* Featured Projects */}
      <div className="w-full mt-12">
        <FeaturedProjects />
      </div>
    </section>
  );
}
