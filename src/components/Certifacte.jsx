'use client';

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { ExternalLink, Terminal, Cpu, Binary, Layers } from "lucide-react";

const achievementsData = [
  {
    id: "1",
    title: "Oracle Cloud AI Professional 2025",
    type: "Certification",
    date: "2025",
    link: "https://drive.google.com/file/d/1-4HdoV52qg_lan7IKFrWQl7mL17mcQIE/view?usp=drive_link",
    description: "Expertise in AI infrastructure, GenAI, and OCI machine learning services.",
    color: "from-cyan-500/20 to-blue-600/10",
    accent: "text-cyan-400",
    border: "group-hover:border-cyan-400",
    shadow: "group-hover:shadow-cyan-500/20"
  },
  {
    id: "2",
    title: "Full Stack Web Development",
    type: "Internship",
    date: "2024",
    link: "https://drive.google.com/file/d/1QDVQMiY6gGgkls4gKFfV3wVBFVH3Ar7U/view?usp=drive_link",
    description: "End-to-end development using MERN stack and cloud-native architectures.",
    color: "from-purple-500/20 to-pink-600/10",
    accent: "text-purple-400",
    border: "group-hover:border-purple-400",
    shadow: "group-hover:shadow-purple-500/20"
  },
  {
    id: "3",
    title: "Artificial Intelligence & ML (AICTE)",
    type: "Internship",
    date: "2025",
    link: " https://drive.google.com/file/d/1LKACGMgqz4z5NaXChGE_7cCZyjPIe7kC/view?usp=drive_link",
    description: "Statistical modeling and predictive intelligence for industrial analytics.",
    color: "from-orange-500/20 to-red-600/10",
    accent: "text-orange-400",
    border: "group-hover:border-orange-400",
    shadow: "group-hover:shadow-orange-500/20"
  },
  {
    id: "4",
    title: "Infosys",
    type: "Certification",
    date: "2025",
    link: "https://drive.google.com/file/d/1AaLsasGhnJBgz4E8d8qzwt2wmo4ZTBbU/view?usp=drive_link",
    description: "Deep learning models and neural network optimizations for real-world datasets.",
    color: "from-emerald-500/20 to-teal-600/10",
    accent: "text-emerald-400",
    border: "group-hover:border-emerald-400",
    shadow: "group-hover:shadow-emerald-500/20"
  },
];

export default function AchievementsSection() {
  const containerRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e) => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (rect) {
        setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
      }
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const rotateImg = useTransform(scrollYProgress, [0, 1], [-3, 3]);

  return (
    <section ref={containerRef} className="relative bg-[#020617] py-24 px-6 lg:px-20 overflow-hidden min-h-screen flex items-center">
      
      {/* --- CYBER BACKGROUND --- */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none" />
        
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-cyan-500/10 blur-[120px] rounded-full"
        />

        <div 
          className="absolute inset-0 pointer-events-none transition-opacity duration-500"
          style={{
            background: `radial-gradient(800px circle at ${mousePos.x}px ${mousePos.y}px, rgba(34,211,238,0.05), transparent 80%)`
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
        
        {/* --- LEFT: TIMELINE SIDE --- */}
        <div className="w-full lg:w-[60%] order-2 lg:order-1">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-14"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 mb-6">
              <Terminal size={14} />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em]">System.Log: Milestones</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              Technical <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 italic">Achievement</span>
            </h2>
          </motion.div>

          <div className="relative">
            <motion.div 
              style={{ scaleY }} 
              className="absolute left-[7px] top-0 w-[2px] h-full bg-gradient-to-b from-cyan-400 via-blue-600 to-transparent origin-top z-10" 
            />
            <div className="absolute left-[7px] top-0 w-[2px] h-full bg-white/5" />

            <div className="space-y-10">
              {achievementsData.map((item, index) => (
                <motion.div 
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative pl-12 group"
                >
                  <div className={`absolute left-0 top-2 w-4 h-4 rounded-full bg-[#020617] border-2 border-slate-700 ${item.border} transition-all duration-300 z-20 group-hover:scale-125 shadow-lg group-hover:shadow-current`} />

                  <motion.div 
                    whileHover={{ x: 10 }}
                    // Card height fixed for uniformity
                    className={`p-6 rounded-2xl bg-gradient-to-br ${item.color} border border-white/5 backdrop-blur-md hover:border-opacity-50 transition-all duration-500 shadow-2xl ${item.border} ${item.shadow} min-h-[160px] flex flex-col justify-center`}
                  >
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 h-full">
                      <div className="space-y-2 flex-1">
                        <div className="flex items-center gap-3">
                          <span className={`text-[9px] font-bold ${item.accent} bg-black/20 px-2 py-0.5 rounded border border-white/10 uppercase`}>
                            {item.type}
                          </span>
                          <span className="text-slate-500 text-xs font-mono">{item.date}</span>
                        </div>
                        <h3 className="text-xl font-bold text-white group-hover:brightness-125 transition-all">
                          {item.title}
                        </h3>
                        <p className="text-slate-300 text-sm leading-relaxed max-w-md line-clamp-2">
                          {item.description}
                        </p>
                      </div>

                      {item.link && (
                        <motion.a
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          href={item.link}
                          target="_blank"
                          className="flex-shrink-0 flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-black text-[10px] font-bold uppercase tracking-tight hover:bg-cyan-400 transition-all"
                        >
                          Verify <ExternalLink size={12} />
                        </motion.a>
                      )}
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* --- RIGHT SIDE (Unchanged) --- */}
        <div className="w-full lg:w-[40%] flex justify-center items-center order-1 lg:order-2 sticky top-0 lg:h-screen py-12">
          <motion.div style={{ rotate: rotateImg }} className="relative w-full max-w-[420px] group">
            <div className="absolute -inset-1 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-[2rem] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative aspect-square bg-slate-950 rounded-[2rem] border border-white/10 overflow-hidden shadow-2xl">
              <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1000" alt="Source Code Visual" className="w-full h-full object-cover opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-1000" />
              <div className="absolute inset-0 p-8 flex flex-col justify-between z-20">
                <div className="flex justify-between items-start">
                  <div className="bg-black/60 backdrop-blur-md p-3 rounded-xl border border-white/10"><Binary className="text-cyan-400" size={24} /></div>
                  <div className="bg-black/60 backdrop-blur-md p-3 rounded-xl border border-white/10"><Layers className="text-blue-400" size={24} /></div>
                </div>
                <div className="space-y-4">
                  <div className="bg-cyan-500/10 backdrop-blur-xl p-4 rounded-2xl border border-cyan-500/20 transform translate-y-4 group-hover:translate-y-0 transition-all duration-700">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                      <span className="text-[10px] text-cyan-300 font-mono uppercase tracking-widest">Compiler: Active</span>
                    </div>
                    <p className="text-[11px] text-white/70 font-mono leading-tight">{`> Initializing milestone_v2.0...`} <br /> {`> System.status: Optimized`}</p>
                  </div>
                  <div className="flex gap-2">
                    <div className="h-1 flex-1 bg-white/10 rounded-full overflow-hidden">
                      <motion.div initial={{ width: 0 }} whileInView={{ width: "85%" }} transition={{ duration: 2, ease: "easeOut" }} className="h-full bg-cyan-500" />
                    </div>
                    <span className="text-[9px] font-mono text-cyan-400">85%</span>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 pointer-events-none bg-[length:100%_2px,3px_100%]" />
            </div>
            <div className="absolute -top-6 -right-6 bg-slate-900 border border-white/10 p-4 rounded-2xl shadow-xl z-30 hidden md:block">
              <Cpu className="text-cyan-400 mb-2" size={20} />
              <div className="text-[8px] font-mono text-slate-500 uppercase tracking-tighter text-center">Neural<br/>Core</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}