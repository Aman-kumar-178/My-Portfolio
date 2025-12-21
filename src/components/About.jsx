'use client';

import React from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const ProfessionalAbout = () => {
  // Smooth Parallax for the entire section
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseX = useSpring(x, { stiffness: 150, damping: 25 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 25 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    x.set((clientX - window.innerWidth / 2) / 30);
    y.set((clientY - window.innerHeight / 2) / 30);
  };

  return (
    <section 
      onMouseMove={handleMouseMove}
      className="relative min-h-screen w-full flex items-center justify-center bg-[#010101] overflow-hidden py-24 px-8"
    >
      {/* --- PREMIUM DYNAMIC BACKGROUND (GRID REMOVED) --- */}
      <motion.div style={{ x: mouseX, y: mouseY }} className="absolute inset-0 z-0">
        {/* Dynamic Glow Orbs */}
        <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-blue-600/10 blur-[150px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[800px] h-[800px] bg-indigo-600/10 blur-[150px] rounded-full" />
        
        {/* Floating Data Streams / Texture */}
        <motion.div 
          animate={{ y: [-20, 20], opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"
        />
      </motion.div>

      <div className="relative z-10 max-w-7xl w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* --- LEFT: EXPANDED BIO (7 UNITS) --- */}
          <motion.div 
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="lg:col-span-7 space-y-10"
          >
            <div className="space-y-4">
              <span className="text-blue-500 font-mono text-sm tracking-[0.5em] uppercase">Executive Profile</span>
              <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tighter leading-none">
                Aman <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600">Kumar</span>
              </h1>
              <div className="h-[1px] w-24 bg-gradient-to-r from-blue-500 to-transparent" />
            </div>

            <div className="space-y-8 max-w-2xl text-zinc-300">
              <p className="text-2xl md:text-3xl font-light leading-snug">
                I am a <span className="text-white font-medium">Computer Science Engineer</span> from Prayagraj, specializing in architecting modern <span className="text-blue-400">Full-Stack Ecosystems</span> and <span className="text-indigo-400">AI-driven solutions</span>.
              </p>
              
              <p className="text-lg leading-relaxed font-light text-zinc-400">
                With a robust foundation from SHUATS, my technical journey is driven by the challenge of transforming complex data into seamless user experiences. I thrive on the synergy between frontend aesthetics and backend scalability, having delivered high-performance applications from e-commerce platforms to real-time food delivery systems.
              </p>

              <p className="text-lg leading-relaxed font-light text-zinc-400">
                Beyond traditional development, I am deeply invested in Machine Learning, where I engineer predictive models with proven accuracies—such as my 84.6% accuracy classification for water quality and 78.4% for EV demand forecasting. I am committed to pushing the boundaries of what's possible with code.
              </p>
            </div>

            {/* Resume Fast-Facts */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-6 border-t border-white/5">
              {[
                { label: "Location", val: "UP, India" },
                { label: "Internship", val: "AI/ML @ Edunet" },
                { label: "Certified", val: "Oracle Cloud" }
              ].map((info, i) => (
                <div key={i} className="group">
                  <p className="text-[10px] text-zinc-500 uppercase tracking-widest mb-1 group-hover:text-blue-500 transition-colors">{info.label}</p>
                  <p className="text-white font-semibold group-hover:translate-x-1 transition-transform">{info.val}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* --- RIGHT: INTERACTIVE EXPERTISE CARDS (5 UNITS) --- */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Card 1: Web Tech */}
            <motion.div 
              whileHover={{ y: -10, scale: 1.02 }}
              className="p-8 bg-zinc-900/30 border border-white/10 rounded-[2.5rem] backdrop-blur-3xl group"
            >
              <div className="w-12 h-12 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6 text-blue-500 border border-blue-500/20 group-hover:bg-blue-500 group-hover:text-white transition-all">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 18l6-6-6-6M8 6l-6 6 6 6" /></svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Full Stack Architecture</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Expertise in the MERN stack, Next.js, and TypeScript. Focusing on secure authentication, RESTful APIs, and cloud-ready deployments.
              </p>
            </motion.div>

            {/* Card 2: AI/ML */}
            <motion.div 
              whileHover={{ y: -10, scale: 1.02 }}
              className="p-8 bg-zinc-900/30 border border-white/10 rounded-[2.5rem] backdrop-blur-3xl group"
            >
              <div className="w-12 h-12 bg-indigo-500/10 rounded-2xl flex items-center justify-center mb-6 text-indigo-400 border border-indigo-500/20 group-hover:bg-indigo-500 group-hover:text-white transition-all">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M2 12h20" /></svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Predictive Intelligence</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Developing advanced ML models using Python and Scikit-learn. Specializing in regression, clustering, and data-driven decision making.
              </p>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalAbout;
