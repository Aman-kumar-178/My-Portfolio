'use client';

import React from "react";
import WorkExperience from "./Work";
import Skills from "./Skill";

const DotIcon = () => (
  <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="4" cy="4" r="4" fill="currentColor" />
  </svg>
);

const coderData = {
  name: 'Aman Kumar',
  role: 'Full Stack Developer',
  location: 'India'
};

// 🔹 Simple One-Color Heading
const PageHeader = () => (
  <div className="text-center mb-8 px-4 sm:px-0">
    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-400">
      About Me
    </h1>
    <div className="w-20 h-[3px] bg-blue-500 mx-auto mt-2 rounded-full" />
  </div>
);

// 🔹 Compact About Section
const AboutSection = () => (
  <div className="bg-[#0d0d0d] border border-zinc-800 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-blue-900/30 transition-transform hover:scale-[1.02]">
    <div className="flex flex-col sm:flex-row items-start gap-6 sm:gap-8">
      <div className="p-3 bg-white/10 rounded-md flex-shrink-0">
        <DotIcon />
      </div>
      <div>
        <h2 className="text-2xl sm:text-3xl font-bold text-blue-400 mb-2">Hi, I’m {coderData.name}</h2>
        <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
          I am a passionate <span className="text-white font-semibold">{coderData.role}</span> from {coderData.location}.  
          I enjoy building interactive and efficient web experiences that deliver value.
        </p>
        <p className="mt-2 text-gray-400 text-sm sm:text-base leading-relaxed">
          My focus is on crafting applications that are fast, scalable, and user-friendly using modern web and cloud technologies.
        </p>
      </div>
    </div>
  </div>
);

// 🔹 Compact Code Section
const CodeSection = () => (
  <div className="relative">
    <div className="absolute inset-0 rounded-2xl animate-border pointer-events-none" />
    <div className="relative bg-zinc-950 border border-zinc-800 rounded-2xl p-6 sm:p-8 shadow-md transform-style preserve-3d" style={{ perspective: '900px' }}>
      <div className="code-card-3d">
        <div className="flex justify-between items-center mb-3">
          <div className="flex gap-2 items-center">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <div className="text-xs text-gray-500">about.js</div>
        </div>

        <pre className="whitespace-pre-wrap leading-relaxed overflow-x-auto text-gray-300 font-mono text-xs sm:text-sm md:text-base">
{`// snapshot of my developer profile
const aboutMe = {
  name: '${coderData.name}',
  role: '${coderData.role}',
  location: '${coderData.location}',
  motto: 'Build, Learn, Repeat',
  focus: ['Responsive UIs', 'Clean Code', 'Scalable Architecture']
};

export default aboutMe;`}
        </pre>
      </div>
    </div>

    <style>{`
      .animate-border {
        background: conic-gradient(from 0deg, #2563eb, #06b6d4, #3b82f6, #2563eb);
        -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
        -webkit-mask-composite: xor;
        mask-composite: exclude;
        padding: 1.5px;
        filter: blur(5px);
        animation: rotateBorder 6s linear infinite;
      }

      @keyframes rotateBorder {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }

      .code-card-3d {
        transform: rotateX(6deg) rotateY(-4deg);
        transition: transform 0.5s ease;
      }

      .code-card-3d:hover {
        transform: rotateX(0deg) rotateY(0deg) scale(1.02);
      }

      pre::-webkit-scrollbar { height: 5px; }
      pre::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); border-radius: 999px; }
    `}</style>
  </div>
);

const Portfolio = () => {
  return (
    <section id="about">
      <div className="min-h-screen w-full flex flex-col items-center justify-center bg-black text-white font-sans p-6 sm:p-12">
        <PageHeader />

        {/* Compact Grid */}
        <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16">
          <AboutSection />
          <CodeSection />
        </div>

        {/* Work Experience and Skills */}
        <div className="w-full max-w-6xl mt-16 sm:mt-24">
          <WorkExperience />
          <Skills />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
