'use client';

import React, { useRef, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Terminal, Code2, Cpu, Sparkles } from "lucide-react";

const HeroSection = () => {
  const canvasRef = useRef(null);
  const mouseX = useSpring(useMotionValue(0), { stiffness: 50, damping: 20 });
  const mouseY = useSpring(useMotionValue(0), { stiffness: 50, damping: 20 });

  const handleProjectClick = () => {
    const el = document.getElementById("projects");
    if (el) {
      const offset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  const handleResumeClick = () => {
    window.open("https://drive.google.com/file/d/1QOak9p0_C-2TAP0apduiHI_mHnSrDr9T/view?usp=drive_link", "_blank"); 
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let particles = [];
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 1.5 + 0.5;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
      }
      draw() {
        ctx.fillStyle = "rgba(168, 85, 247, 0.4)";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    const init = () => {
      particles = Array.from({ length: 150 }, () => new Particle());
    };
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => { p.update(); p.draw(); });
      requestAnimationFrame(animate);
    };
    window.addEventListener("resize", resize);
    resize(); init(); animate();
    return () => window.removeEventListener("resize", resize);
  }, []);

  const handleMouseMove = (e) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  };

  return (
    <section 
      id="home"
      onMouseMove={handleMouseMove}
      className="relative w-full min-h-screen flex items-center justify-center bg-[#050505] overflow-hidden px-4 sm:px-6 lg:px-12 py-20 lg:py-0"
    >
      <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none opacity-50" />

      {/* Background Glows - Adjusted for mobile */}
      <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
        <div className="absolute top-[-5%] left-[-5%] w-[80%] lg:w-[50%] h-[50%] bg-purple-600 blur-[80px] lg:blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-5%] right-[-5%] w-[80%] lg:w-[50%] h-[50%] bg-blue-600 blur-[80px] lg:blur-[120px] rounded-full animate-pulse delay-1000" />
      </div>

      <div className="relative z-20 max-w-7xl w-full flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-12">
        
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex-1 text-center lg:text-left z-10"
        >
          <motion.span className="inline-block py-1 px-4 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 text-xs sm:text-sm font-bold tracking-widest mb-6 uppercase">
            SOFTWARE ENGINEER
          </motion.span>
          
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black text-white leading-[1] mb-8 tracking-tighter">
            Creative <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-orange-500 animate-gradient-x">
              Developer
            </span>
          </h1>

          <p className="text-gray-400 text-base sm:text-lg lg:text-xl max-w-lg mb-10 leading-relaxed mx-auto lg:mx-0">
            I build high-performance web applications, turning complex logic into elegant user experiences.
          </p>

          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 sm:gap-6">
             <motion.button
               onClick={handleProjectClick}
               whileHover={{ scale: 1.05, backgroundColor: "#a855f7", color: "#fff" }}
               whileTap={{ scale: 0.95 }}
               className="px-8 sm:px-10 py-4 bg-white text-black font-bold rounded-2xl transition-all duration-300 shadow-xl text-sm sm:text-base"
             >
               View Projects
               </motion.button>

            <motion.button
              onClick={handleResumeClick}
              whileHover={{ scale: 1.05, borderColor: "#a855f7" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 sm:px-10 py-4 rounded-2xl font-bold text-white border border-white/20 backdrop-blur-md bg-white/5 transition-all duration-300 text-sm sm:text-base"
            >
              Get Resume
            </motion.button>
          </div>
        </motion.div>

        {/* Right Section: Animated Code Terminal Illustration */}
        <div className="flex-1 flex justify-center lg:justify-end items-center perspective-[1000px] w-full max-w-[300px] sm:max-w-[450px] lg:max-w-none">
          <motion.div
            style={{ 
              rotateX: useTransform(mouseY, [0, 1000], [15, -15]),
              rotateY: useTransform(mouseX, [0, 1000], [-15, 15]),
            }}
            className="relative w-full aspect-square max-w-[450px]"
          >
            {/* Holographic Rings - Hidden or scaled on very small screens if needed */}
            <div className="absolute inset-0 border-2 border-purple-500/20 rounded-full animate-[spin_10s_linear_infinite]" />
            <div className="absolute inset-4 border border-blue-500/10 rounded-full animate-[spin_15s_linear_infinite_reverse]" />

            {/* Main Terminal Box */}
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="w-[85%] sm:w-80 h-52 sm:h-60 bg-zinc-900/90 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-[0_0_50px_rgba(168,85,247,0.2)] p-5 sm:p-6 relative overflow-hidden">
                {/* Header Dots */}
                <div className="flex gap-2 mb-4">
                  <div className="w-2 sm:w-3 h-2 sm:h-3 rounded-full bg-red-500/50" />
                  <div className="w-2 sm:w-3 h-2 sm:h-3 rounded-full bg-yellow-500/50" />
                  <div className="w-2 sm:w-3 h-2 sm:h-3 rounded-full bg-green-500/50" />
                </div>
                
                {/* Code Lines Animation */}
                <div className="space-y-3">
                  <motion.div animate={{ width: ["30%", "70%", "30%"] }} transition={{ duration: 3, repeat: Infinity }} className="h-1.5 sm:h-2 bg-purple-500/40 rounded" />
                  <motion.div animate={{ width: ["50%", "90%", "50%"] }} transition={{ duration: 4, repeat: Infinity }} className="h-1.5 sm:h-2 bg-blue-500/40 rounded" />
                  <motion.div animate={{ width: ["40%", "60%", "40%"] }} transition={{ duration: 2.5, repeat: Infinity }} className="h-1.5 sm:h-2 bg-pink-500/40 rounded" />
                  <motion.div animate={{ width: ["20%", "80%", "20%"] }} transition={{ duration: 5, repeat: Infinity }} className="h-1.5 sm:h-2 bg-indigo-500/40 rounded" />
                </div>

                <div className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6">
                  <Terminal className="text-purple-400 w-8 h-8 sm:w-12 sm:h-12 opacity-50" />
                </div>
              </div>
            </motion.div>

            {/* Floating Tech Icons - Responsive sizing and positioning */}
            <motion.div 
              animate={{ y: [0, -15, 0] }} 
              transition={{ repeat: Infinity, duration: 3 }}
              className="absolute top-[5%] left-[5%] p-2 sm:p-4 bg-zinc-800 rounded-xl sm:rounded-2xl border border-white/10 shadow-2xl z-30"
            >
              <Code2 className="text-blue-400 w-5 h-5 sm:w-8 sm:h-8" />
            </motion.div>

            <motion.div 
              animate={{ y: [0, 15, 0] }} 
              transition={{ repeat: Infinity, duration: 4, delay: 0.5 }}
              className="absolute bottom-[5%] right-[5%] p-2 sm:p-4 bg-zinc-800 rounded-xl sm:rounded-2xl border border-white/10 shadow-2xl z-30"
            >
              <Cpu className="text-pink-400 w-5 h-5 sm:w-8 sm:h-8" />
            </motion.div>

            <motion.div 
              animate={{ scale: [1, 1.2, 1] }} 
              transition={{ repeat: Infinity, duration: 2 }}
              className="absolute top-1/4 -right-2 sm:right-0 p-2 sm:p-3 bg-zinc-800 rounded-full border border-white/10 shadow-2xl z-30"
            >
              <Sparkles className="text-yellow-400 w-4 h-4 sm:w-6 sm:h-6" />
            </motion.div>

          </motion.div>
        </div>

      </div>

      <style jsx>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 5s ease infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;