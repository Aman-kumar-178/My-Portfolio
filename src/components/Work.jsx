'use client';
import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const ExperienceCard = ({ item, index }) => {
  const cardRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  // Smooth handle for mouse movement
  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const { left, top } = cardRef.current.getBoundingClientRect();
    setMousePos({ x: e.clientX - left, y: e.clientY - top });
  };

  const { scrollYProgress } = useScroll({ 
    target: cardRef, 
    offset: ["start end", "end start"] 
  });

  // Scroll animations
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.95, 1]);

  // Design Config
  const gradients = [
    "from-slate-800 via-slate-900 to-black group-hover:from-blue-900/40",
    "from-teal-900 via-emerald-950 to-black group-hover:from-emerald-900/40",
    "from-indigo-950 via-slate-950 to-black group-hover:from-indigo-900/40",
  ];

  const accents = [
    "border-blue-500/20 group-hover:border-blue-400/50", 
    "border-emerald-500/20 group-hover:border-emerald-400/50", 
    "border-indigo-500/20 group-hover:border-indigo-400/50"
  ];
  
  const textAccents = ["text-blue-400", "text-emerald-400", "text-indigo-400"];

  return (
    <motion.div 
      ref={cardRef}
      style={{ opacity, scale }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
      className="flex flex-col md:flex-row gap-6 mb-16 w-full group relative cursor-none md:cursor-default"
    >
      {/* LEFT SIDE: Title Card */}
      <div className={`relative w-full md:w-[35%] min-h-[240px] rounded-3xl p-8 flex flex-col justify-between overflow-hidden border transition-all duration-500 ${accents[index % accents.length]} bg-gradient-to-br ${gradients[index % gradients.length]} shadow-2xl`}>
        
        {/* Spotlight Effect - Optimized to prevent errors */}
        <div 
          className="pointer-events-none absolute -inset-px transition-opacity duration-300 opacity-0 group-hover:opacity-100"
          style={{
            background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255,255,255,0.1), transparent 40%)`,
          }}
        />

        <div className="z-10 transition-transform duration-500 group-hover:translate-x-1">
          <p className="text-white/30 text-[10px] font-bold tracking-[0.2em] uppercase mb-4">{item.period}</p>
          <h3 className="text-white text-3xl font-bold leading-tight tracking-tight group-hover:text-white/90">
            {item.role}
          </h3>
        </div>
        
        <div className="z-10">
          <p className={`${textAccents[index % textAccents.length]} text-lg font-medium tracking-wide flex items-center gap-2`}>
            <span className="h-[1px] w-4 bg-current"></span>
            {item.company}
          </p>
        </div>
      </div>

      {/* RIGHT SIDE: Description Card */}
      <div className="w-full md:w-[65%] rounded-3xl p-8 md:p-10 flex flex-col justify-center border border-white/5 bg-[#070708] relative overflow-hidden transition-all duration-500 group-hover:border-white/10 group-hover:bg-[#0a0a0b]">
        
        {/* Grainy Texture */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

        <p className="text-gray-400 text-lg leading-relaxed mb-8 relative z-10 font-light group-hover:text-gray-300 transition-colors duration-500">
          {item.description}
        </p>
        
        <div className="flex flex-wrap gap-3 relative z-10">
          {item.tech.map((t, i) => (
            <motion.span 
              key={i} 
              whileHover={{ y: -2, backgroundColor: "rgba(255,255,255,0.1)" }}
              className="text-[10px] text-white/40 bg-white/5 border border-white/5 px-4 py-2 rounded-full uppercase tracking-tighter font-semibold transition-all hover:text-white"
            >
              {t}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default function WorkExperienceSection() {
  const internshipData = [
    { 
      role: "Full-Stack Intern", 
      company: "Vedsar Pvt.ltd", 
      period: "6/2024 - 8/2024", 
      description: "Spearheaded the development of a high-traffic e-commerce dashboard, improving data rendering speeds by 40%. Implemented secure RESTful APIs using Node.js.", 
      tech: ["React", "Node.js", "MongoDB", "Express js","Htlm" ,"Css", "Tailwind Css"] 
    },
    { 
      role: "AI/ML Intern", 
      company: "Edunet Foundation", 
      period: "6/25 — 8/25", 
      description: "Completed AI/ML Internship at Edunet Foundation, gained hands-on experience in Python, data preprocessing, machine learning model development, and delivered a real-world AI project with completion certificate", 
      tech: ["Python,", "NumPy", "Pandas", "Matplotlib", "Scikit-learn","data preprocessing"] 
    },
    { 
      "role": "AI/ML Intern",
  "company": "Infosys Springboard",
  "period": "2025 — 2025",
  "description": "Developed an AI-powered Audio Book Generator that converts text content into natural-sounding speech, leveraging NLP and TTS techniques to enhance accessibility and user experience.",
  "tech": ["Python", "Text-to-Speech (TTS)", "Natural Language Processing (NLP)", "PyTorch", "Streamlit"]
    }
  ];

  return (
    <section className="bg-[#020617] py-32 px-6 md:px-20 w-full overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <header className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="relative">
            <motion.span 
              initial={{ width: 0 }}
              whileInView={{ width: "100px" }}
              className="absolute -top-4 left-0 h-[2px] bg-blue-500"
            />
            <h2 className="text-white text-5xl md:text-7xl font-bold tracking-tighter m-0">
              Experience
            </h2>
            <p className="text-gray-500 text-xl mt-4 max-w-md font-light">
              Building digital products that blend <span className="text-white/80 italic">aesthetics</span> with performance.
            </p>
          </div>
        </header>

        <div className="flex flex-col">
          {internshipData.map((item, index) => (
            <ExperienceCard key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}