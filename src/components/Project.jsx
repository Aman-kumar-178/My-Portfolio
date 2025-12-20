'use client';

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Github, ExternalLink, Code2, Sparkles } from "lucide-react";

const projects = [
   {
    id: "02",
    title: "WATER QUALITY PREDICTION",
    tech: "Python, ML, Scikit-learn",
    desc: "AICTE project to predict water quality using machine learning models.",
    img: "https://images.unsplash.com/photo-1581091012184-5c7c6f2c9a9b?auto=format&fit=crop&w=1200&q=80",
    color: "from-emerald-600/30 via-teal-500/10",
    accent: "text-emerald-400",
    glow: "shadow-emerald-500/40",
    btn: "bg-gradient-to-r from-emerald-600 to-teal-600",
    github: "https://github.com/Aman-kumar-178/water-quality-prediction_AICTE-PROJECT-1",
    live: "#"
  },

  {
    id: "03",
    title: "EV CHARGING DEMAND PREDICTION",
    tech: "Python, Pandas, ML",
    desc: "Forecasting EV charging demand using machine learning techniques.",
    img: "https://images.unsplash.com/photo-1617886322207-6f504f8a7c07?auto=format&fit=crop&w=1200&q=80",
    color: "from-purple-600/30 via-fuchsia-500/10",
    accent: "text-fuchsia-400",
    glow: "shadow-purple-500/40",
    btn: "bg-gradient-to-r from-purple-600 to-fuchsia-600",
    github: "https://github.com/Aman-kumar-178/-EV-Vehicle-Charging-Demand-Prediction",
    live: "#"
  },

  {
    id: "05",
    title: "AI AUDIOBOOK GENERATOR (SPRINGBOARD)",
    tech: "Python, AI, NLP, Text-to-Speech",
    desc: "Infosys Springboard AI Audiobook Generator project.",
    img: "https://images.unsplash.com/photo-1517433456452-f9633a875f6f?auto=format&fit=crop&w=1200&q=80",
    color: "from-yellow-600/30 via-orange-500/10",
    accent: "text-yellow-400",
    glow: "shadow-yellow-500/40",
    btn: "bg-gradient-to-r from-yellow-600 to-orange-600",
    github: "https://github.com/springboardmentor1029a-source/AI-Audiobook-Generator",
    live: "#"
  },

  {
    id: "06",
    title: "PLANT DISEASE PREDICTION APP",
    tech: "Python, CNN, Deep Learning",
    desc: "Deep learning app to detect plant diseases from leaf images.",
    img: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1200&q=80",
    color: "from-green-600/30 via-lime-500/10",
    accent: "text-lime-400",
    glow: "shadow-green-500/40",
    btn: "bg-gradient-to-r from-green-600 to-lime-600",
    github: "https://github.com/Aman-kumar-178/Plant-Disease-Prediction-App",
    live: "#"
  },

  {
    id: "07",
    title: "CUSTOMER SATISFACTION PREDICTION",
    tech: "Python, ML, EDA",
    desc: "Predicts customer satisfaction using machine learning models.",
    img: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1200&q=80",
    color: "from-blue-600/30 via-cyan-500/10",
    accent: "text-cyan-400",
    glow: "shadow-blue-500/40",
    btn: "bg-gradient-to-r from-blue-600 to-cyan-600",
    github: "https://github.com/Aman-kumar-178/Customer-Satisfaction-Prediction-",
    live: "#"
  },

  {
    id: "08",
    title: "SMART IRRIGATION SYSTEM",
    tech: "IoT, Python, Sensors",
    desc: "IoT-based smart irrigation system for efficient water usage.",
    img: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&w=1200&q=80",
    color: "from-teal-600/30 via-emerald-500/10",
    accent: "text-teal-400",
    glow: "shadow-teal-500/40",
    btn: "bg-gradient-to-r from-teal-600 to-emerald-600",
    github: "https://github.com/Aman-kumar-178/Smart-irrigation-system",
    live: "#"
  },

  {
    id: "09",
    title: "EDUASSIST AI",
    tech: "AI, NLP, Python",
    desc: "AI-powered educational assistant for students.",
    img: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=1200&q=80",
    color: "from-violet-600/30 via-purple-500/10",
    accent: "text-violet-400",
    glow: "shadow-violet-500/40",
    btn: "bg-gradient-to-r from-violet-600 to-purple-600",
    github: "https://github.com/Aman-kumar-178/EduAssistAI",
    live: "#"
  },

  {
    id: "10",
    title: "CLIMATE CHANGE MODELING",
    tech: "Python, Data Analysis",
    desc: "Climate change data modeling and analysis project.",
    img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
    color: "from-sky-600/30 via-blue-500/10",
    accent: "text-sky-400",
    glow: "shadow-sky-500/40",
    btn: "bg-gradient-to-r from-sky-600 to-blue-600",
    github: "https://github.com/Aman-kumar-178/Climate-Change-Modeling-",
    live: "#"
  },

  {
    id: "11",
    title: "COVID-19 CLINICAL TRIALS EDA",
    tech: "Python, Pandas, EDA",
    desc: "Exploratory data analysis of COVID-19 clinical trials.",
    img: "https://images.unsplash.com/photo-1584036561584-b03c19da874c?auto=format&fit=crop&w=1200&q=80",
    color: "from-red-600/30 via-pink-500/10",
    accent: "text-red-400",
    glow: "shadow-red-500/40",
    btn: "bg-gradient-to-r from-red-600 to-pink-600",
    github: "https://github.com/Aman-kumar-178/COVID-19-Clinical-Trials-EDA-using-Pandas-",
    live: "#"
  },

  {
    id: "12",
    title: "NETFLIX DATA ANALYSIS",
    tech: "Python, Visualization",
    desc: "Netflix dataset cleaning, analysis and visualization.",
    img: "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?auto=format&fit=crop&w=1200&q=80",
    color: "from-rose-600/30 via-red-500/10",
    accent: "text-rose-400",
    glow: "shadow-rose-500/40",
    btn: "bg-gradient-to-r from-rose-600 to-red-600",
    github: "https://github.com/Aman-kumar-178/Netflix-Data-Cleaning-Analysis-and-Visualization-",
    live: "#"
  }
];

export default function AmanUltraColorfulCompact() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((index + 1) % projects.length);
  const prev = () => setIndex((index - 1 + projects.length) % projects.length);

  return (
    // Yahan scroll hide karne ke liye classes add ki hain: overflow-hidden aur no-scrollbar
    <div className="min-h-screen lg:h-screen bg-[#020406] text-[#e2e8f0] font-sans selection:bg-white/20 overflow-hidden relative flex flex-col [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
      
      {/* BACKGROUND ORBS */}
      <div className={`absolute top-[-10%] left-[-10%] w-[80%] lg:w-[50%] h-[50%] bg-gradient-to-br ${projects[index].color} rounded-full blur-[80px] lg:blur-[120px] opacity-40 transition-all duration-1000 animate-pulse`} />
      <div className={`absolute bottom-[-10%] right-[-10%] w-[80%] lg:w-[50%] h-[50%] bg-gradient-to-tl ${projects[index].color} rounded-full blur-[80px] lg:blur-[120px] opacity-40 transition-all duration-1000 animate-pulse`} />

      {/* TOP NAV */}
      <nav className="w-full p-6 lg:px-12 flex justify-between items-center z-50">
        <span className="font-black text-xl tracking-tighter text-white">
          AMAN<span className={`animate-bounce inline-block ${projects[index].accent}`}>.</span>
        </span>
        <div className="flex items-center gap-2 lg:gap-3">
          <Sparkles size={18} className={`${projects[index].accent} hidden sm:block`} />
          <h2 className="text-[14px] sm:text-[20px] lg:text-[30px] font-black tracking-[0.2em] lg:tracking-[0.4em] uppercase bg-gradient-to-r from-white via-white/50 to-white/20 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <Sparkles size={18} className={`${projects[index].accent} hidden sm:block`} />
        </div>
        <div className="w-10 h-10 hidden md:block" />
      </nav>

      {/* MAIN SHOWCASE */}
      <main className="flex-1 flex items-center justify-center px-6 sm:px-10 lg:px-20 max-w-[1400px] mx-auto w-full relative z-10 py-10 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center w-full">
          
          {/* CONTENT SECTION */}
          <div className="order-2 lg:order-1 flex flex-col justify-center items-start text-left">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 30 }}
                transition={{ duration: 0.5 }}
                className="space-y-4 lg:space-y-6"
              >
                <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-black tracking-[0.2em] ${projects[index].accent}`}>
                  <span className={`w-1.5 h-1.5 rounded-full animate-ping ${projects[index].accent.replace('text', 'bg')}`} />
                  PROJECT 0{index + 1}
                </div>

                <h1 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-[1.1] text-white">
                  {projects[index].title.split(' ').map((word, i) => (
                    <span key={i} className={i === 0 ? "block sm:inline" : projects[index].accent + " block"}>
                      {word}{" "}
                    </span>
                  ))}
                </h1>
                
                <p className="text-zinc-400 text-sm md:text-base leading-relaxed max-w-sm font-medium">
                  {projects[index].desc}
                </p>

                <div className="flex flex-wrap gap-2">
                  {projects[index].tech.split(',').map((item, i) => (
                    <span key={i} className="px-3 py-1 bg-white/5 backdrop-blur-md border border-white/10 rounded-lg text-[9px] lg:text-[10px] font-bold uppercase text-white">
                      {item.trim()}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3 pt-4">
                  <a href={projects[index].live} className={`flex items-center gap-2 ${projects[index].btn} text-white px-5 py-3 lg:px-6 lg:py-3 rounded-xl font-black text-[9px] lg:text-[10px] uppercase tracking-widest transition-all shadow-xl active:scale-95`}>
                    View Live <ExternalLink size={14} />
                  </a>
                  <a href={projects[index].github} className="flex items-center gap-2 bg-white/5 backdrop-blur-xl border border-white/10 text-white px-5 py-3 lg:px-6 lg:py-3 rounded-xl font-black text-[9px] lg:text-[10px] uppercase tracking-widest hover:bg-white/10 transition-all border-dashed">
                    Codebase <Code2 size={14} />
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* IMAGE SECTION */}
          <div className="order-1 lg:order-2 relative group flex justify-center lg:justify-end">
             <div className={`absolute -inset-4 bg-gradient-to-r ${projects[index].color.replace('/30', '')} to-transparent rounded-[2.5rem] blur-3xl opacity-30 group-hover:opacity-50 transition duration-1000`}></div>
             
             <div className="relative w-full max-w-[500px] lg:max-w-none aspect-[16/10] bg-zinc-900 overflow-hidden rounded-[1.5rem] lg:rounded-[2rem] border border-white/10 shadow-2xl">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={index}
                    src={projects[index].img}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.6 }}
                    className="w-full h-full object-cover"
                  />
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
             </div>

             {/* CONTROLS - Repositioned for Mobile */}
             <div className="absolute -bottom-6 right-0 lg:-right-4 flex gap-3 z-20">
               <button onClick={prev} className="w-10 h-10 lg:w-12 lg:h-12 bg-white/10 backdrop-blur-2xl border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all rounded-xl shadow-xl text-white">
                 <ArrowRight size={20} className="rotate-180" />
               </button>
               <button onClick={next} className="w-10 h-10 lg:w-12 lg:h-12 bg-white/10 backdrop-blur-2xl border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all rounded-xl shadow-xl text-white">
                 <ArrowRight size={20} />
               </button>
             </div>
          </div>

        </div>
      </main>

      {/* FOOTER */}
      <footer className="p-6 lg:p-10 flex justify-center items-center mt-auto lg:mt-0">
        <div className="flex gap-2 sm:gap-3 p-2 bg-white/5 backdrop-blur-md rounded-full border border-white/10">
          {projects.map((_, i) => (
            <motion.button 
              key={i} 
              onClick={() => setIndex(i)}
              animate={{ 
                width: i === index ? (typeof window !== 'undefined' && window.innerWidth < 640 ? 25 : 35) : 10,
                backgroundColor: i === index ? "#fff" : "rgba(255,255,255,0.1)"
              }}
              className="h-1.5 sm:h-2 rounded-full cursor-pointer transition-all"
            />
          ))}
        </div>
      </footer>
    </div>
  );
}