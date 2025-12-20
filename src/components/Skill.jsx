"use client";
import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaReact, FaNodeJs, FaJsSquare, FaPython, FaDocker, FaGitAlt, FaAws 
} from "react-icons/fa";
import { 
  SiTypescript, SiNextdotjs, SiTailwindcss, SiMongodb, SiPostgresql, 
  SiPrisma, SiFramer, SiRedux, SiExpress, SiFirebase 
} from "react-icons/si";

const skills = [
  { name: "JavaScript", icon: <FaJsSquare />, color: "#F7DF1E", angle: 0, radius: 100, speed: 0.3, ring: 1 },
  { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6", angle: 120, radius: 100, speed: 0.3, ring: 1 },
  { name: "Python", icon: <FaPython />, color: "#3776AB", angle: 240, radius: 100, speed: 0.3, ring: 1 },
  { name: "React", icon: <FaReact />, color: "#61DAFB", angle: 0, radius: 190, speed: 0.2, ring: 2 },
  { name: "Next.js", icon: <SiNextdotjs />, color: "#FFFFFF", angle: 60, radius: 190, speed: 0.2, ring: 2 },
  { name: "Redux", icon: <SiRedux />, color: "#764ABC", angle: 120, radius: 190, speed: 0.2, ring: 2 },
  { name: "Tailwind", icon: <SiTailwindcss />, color: "#38BDF8", angle: 180, radius: 190, speed: 0.2, ring: 2 },
  { name: "Express", icon: <SiExpress />, color: "#828282", angle: 240, radius: 190, speed: 0.2, ring: 2 },
  { name: "Framer", icon: <SiFramer />, color: "#E11D48", angle: 300, radius: 190, speed: 0.2, ring: 2 },
  { name: "Node.js", icon: <FaNodeJs />, color: "#339933", angle: 0, radius: 280, speed: 0.1, ring: 3 },
  { name: "MongoDB", icon: <SiMongodb />, color: "#47A248", angle: 51, radius: 280, speed: 0.1, ring: 3 },
  { name: "Postgres", icon: <SiPostgresql />, color: "#4169E1", angle: 102, radius: 280, speed: 0.1, ring: 3 },
  { name: "Prisma", icon: <SiPrisma />, color: "#6B7280", angle: 153, radius: 280, speed: 0.1, ring: 3 },
  { name: "Docker", icon: <FaDocker />, color: "#2496ED", angle: 204, radius: 280, speed: 0.1, ring: 3 },
  { name: "AWS", icon: <FaAws />, color: "#FF9900", angle: 255, radius: 280, speed: 0.1, ring: 3 },
  { name: "Firebase", icon: <SiFirebase />, color: "#FFCA28", angle: 306, radius: 280, speed: 0.1, ring: 3 },
];

export default function DeepSpaceSkillUniverse() {
  const [rotation, setRotation] = useState(0);
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  
  const stars = useMemo(() => [...Array(60)].map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 0.5,
    opacity: Math.random() * 0.5 + 0.2
  })), []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 50,
        y: (e.clientY / window.innerHeight - 0.5) * 50,
      });
    };
    let raf;
    const animate = () => {
      setRotation((prev) => prev + 0.15);
      raf = requestAnimationFrame(animate);
    };
    window.addEventListener("mousemove", handleMouseMove);
    raf = requestAnimationFrame(animate);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center bg-[#010208] overflow-hidden px-6 lg:px-20 py-20">
      
      {/* --- ADVANCED BACKGROUND SYSTEM --- */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Deep Space Gradient */}
        <div 
          className="absolute inset-0 transition-all duration-1000"
          style={{ 
            background: hoveredSkill 
              ? `radial-gradient(circle at ${50 + mousePos.x/5}% ${50 + mousePos.y/5}%, ${hoveredSkill.color}15 0%, #010208 60%)`
              : `radial-gradient(circle at ${50 + mousePos.x/4}% ${50 + mousePos.y/4}%, #0a0b1e 0%, #010208 80%)`,
          }} 
        />
        
        {/* Parallax Starfield */}
        {stars.map((star) => (
          <motion.div
            key={star.id}
            className="absolute bg-white rounded-full"
            style={{ 
                left: `${star.x}%`, 
                top: `${star.y}%`, 
                width: star.size, 
                height: star.size,
                opacity: star.opacity,
                x: mousePos.x * (star.size / 3),
                y: mousePos.y * (star.size / 3)
            }}
          />
        ))}

        {/* Floating Nebula Dust */}
        <div className="absolute inset-0 opacity-10 mix-blend-screen bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
      </div>

      <div className="relative z-10 w-full max-w-[1400px] flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24">
        
        {/* --- LEFT SIDE: EXTENDED DESCRIPTION --- */}
        <motion.div 
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="lg:w-[45%] relative group"
        >
          {/* Glass Card Container */}
          <div className="relative z-10 backdrop-blur-2xl bg-white/[0.02] border border-white/10 p-10 lg:p-14 rounded-[40px] shadow-2xl overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
            
            <div className="space-y-8">
              <div className="space-y-3">
                <motion.span 
                  animate={{ color: hoveredSkill ? hoveredSkill.color : "#60a5fa" }}
                  className="text-[15px] font-black tracking-[0.6em] uppercase block transition-colors"
                >
                  System Architect & Developer
                </motion.span>
                <h2 className="text-5xl lg:text-7xl font-bold text-white tracking-tight leading-none">
                  Engineering <br /> 
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-100 to-blue-500/50">
                    Digital Flow.
                  </span>
                </h2>
              </div>

              <div className="space-y-6">
                <p className="text-gray-400 text-lg lg:text-xl leading-relaxed font-light italic">
                  "I transform complex business requirements into high-performance, modular technical architectures."
                </p>
                
                <p className="text-gray-500 text-base leading-relaxed">
                  With a deep-rooted passion for the JavaScript ecosystem and Cloud Infrastructure, I specialize in building end-to-end applications that are not only visually stunning but also technically robust. From optimizing database queries in Postgres to crafting fluid 60fps animations with Framer Motion, I ensure every layer of the stack is tuned for excellence. 
                  <br /><br />
                  My approach focuses on Atomic Design, Type Safety, and CI/CD automation, ensuring that projects scale effortlessly from a prototype to a global product.
                </p>
              </div>

              {/* Status Pills */}
              <div className="flex flex-wrap gap-3">
                {['Available for Projects', 'Remote Ready', 'Open Source Contributor'].map((text) => (
                  <div key={text} className="px-4 py-1.5 rounded-full bg-blue-500/5 border border-blue-500/20 text-[9px] text-blue-300 font-bold uppercase tracking-widest">
                    {text}
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Background Glow for Card */}
          <div className="absolute -inset-4 bg-gradient-to-br from-blue-600/10 to-transparent blur-3xl -z-10 rounded-[50px]" />
        </motion.div>

        {/* --- RIGHT SIDE: THE INTERACTIVE UNIVERSE --- */}
        <div className="lg:w-[55%] relative flex items-center justify-center min-h-[600px] lg:min-h-[800px] w-full">
          <motion.div 
            style={{ 
              perspective: "2000px",
              rotateX: mousePos.y / 10,
              rotateY: -mousePos.x / 10,
            }}
            className="relative flex items-center justify-center scale-75 lg:scale-100"
          >
            {/* Pulsing Core */}
            <div className="absolute z-20">
              <div className="w-32 h-32 rounded-full bg-[#05060f] border-2 border-white/10 flex items-center justify-center relative shadow-[0_0_80px_rgba(59,130,246,0.2)]">
                <div className="absolute inset-0 rounded-full border border-white/20 animate-ping opacity-20" />
                <div className="text-center z-10">
                  <div className="text-xs text-blue-400 font-black tracking-widest"></div>
                  <div className="text-4xl font-black text-white italic">SKILL</div>
                </div>
              </div>
            </div>

            {/* Orbit Paths */}
            {[100, 190, 280].map((radius, idx) => (
              <div
                key={radius}
                style={{ width: radius * 2, height: radius * 2 }}
                className={`absolute border rounded-full transition-all duration-1000 ${
                    hoveredSkill?.ring === (idx + 1) 
                    ? "border-white/40 scale-105 shadow-[0_0_60px_rgba(255,255,255,0.1)]" 
                    : "border-white/[0.03]"
                }`}
              />
            ))}

            {/* Skills */}
            {skills.map((skill, i) => {
              const currentRotation = rotation * (skill.speed * 4) + skill.angle;
              const radian = (currentRotation * Math.PI) / 180;
              const x = Math.cos(radian) * skill.radius;
              const y = Math.sin(radian) * skill.radius;

              return (
                <motion.div
                  key={i}
                  className="absolute z-30"
                  animate={{ x, y }}
                  transition={{ type: "spring", stiffness: 30, damping: 25 }}
                >
                  <motion.div
                    onMouseEnter={() => setHoveredSkill(skill)}
                    onMouseLeave={() => setHoveredSkill(null)}
                    whileHover={{ scale: 1.5, zIndex: 100 }}
                    className="relative group cursor-none"
                  >
                    <div 
                      style={{ 
                        borderColor: hoveredSkill === skill ? skill.color : 'rgba(255,255,255,0.08)',
                        background: hoveredSkill === skill ? `${skill.color}15` : 'rgba(5,6,15,0.9)',
                        color: skill.color,
                        boxShadow: hoveredSkill === skill ? `0 0 40px ${skill.color}33` : 'none'
                      }}
                      className="w-16 h-16 backdrop-blur-xl border rounded-2xl flex items-center justify-center text-3xl transition-all duration-500"
                    >
                      {skill.icon}
                    </div>

                    <AnimatePresence>
                      {hoveredSkill === skill && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.5, y: 10 }}
                          animate={{ opacity: 1, scale: 1, y: -65 }}
                          exit={{ opacity: 0, scale: 0.5 }}
                          className="absolute left-1/2 -translate-x-1/2 whitespace-nowrap z-50 pointer-events-none"
                        >
                          <div className="bg-white px-5 py-2 rounded-xl flex items-center gap-3 shadow-2xl">
                             <span className="text-black font-black text-[11px] uppercase tracking-tighter">{skill.name}</span>
                             <div className="w-1.5 h-1.5 rounded-full animate-ping" style={{ backgroundColor: skill.color }} />
                          </div>
                          <div className="w-3 h-3 bg-white rotate-45 mx-auto -mt-1.5" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}