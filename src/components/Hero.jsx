'use client';

import React, { useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

const HeroSection = () => {
  const shimmerCss = `
    @property --angle {
      syntax: '<angle>';
      initial-value: 0deg;
      inherits: false;
    }
    @keyframes shimmer-spin {
      to { --angle: 360deg; }
    }
  `;

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [15, -15]);
  const rotateY = useTransform(x, [-100, 100], [-15, 15]);
  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const posX = e.clientX - rect.left - rect.width / 2;
    const posY = e.clientY - rect.top - rect.height / 2;
    x.set(posX);
    y.set(posY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section id="home">
      <div className="w-full min-h-screen bg-black flex items-center justify-center px-6 lg:px-12 relative overflow-hidden">
        <style>{shimmerCss}</style>

        <div className="max-w-7xl w-full flex flex-col-reverse lg:flex-row items-center justify-center lg:justify-between gap-14 relative z-10">
          
          {/* === Left Text Section === */}
          <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">
            <motion.h1
              initial={{ y: 50, opacity: 0, rotateY: -15 }}
              animate={{ y: 0, opacity: 1, rotateY: 0 }}
              transition={{ duration: 1 }}
              className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-orange-400 mb-6"
            >
              Creative Developer
            </motion.h1>

            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-gray-300 text-lg sm:text-xl md:text-2xl mb-10 max-w-md sm:max-w-lg"
            >
              Building immersive, interactive digital experiences with modern web technologies.
            </motion.p>

            {/* === Buttons === */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
              {/* View Projects */}
              <motion.a
                href="#projects"
                className="relative inline-flex items-center justify-center px-8 py-3 rounded-full border border-transparent text-pink-400 font-bold cursor-pointer transition-all duration-300"
                whileHover={{
                  scale: 1.05,
                  borderColor: "#ec4899",
                  boxShadow: "0 0 20px rgba(236,72,153,0.6)",
                }}
                whileTap={{
                  scale: 0.95,
                  borderColor: "#ec4899",
                  boxShadow: "0 0 25px rgba(236,72,153,0.8)",
                }}
              >
                View Projects
                <motion.div
                  className="absolute inset-0 rounded-full pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(circle at 50% 50%, rgba(236,72,153,0.1) 0%, transparent 80%)",
                  }}
                  animate={{ opacity: [0.05, 0.15, 0.05] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                />
              </motion.a>

              {/* Resume */}
              <motion.a
                href="Aman-kumar-resume.pdf"
                className="relative inline-flex items-center justify-center px-8 py-3 rounded-full border border-transparent text-purple-400 font-bold cursor-pointer transition-all duration-300"
                whileHover={{
                  scale: 1.05,
                  borderColor: "#a855f7",
                  boxShadow: "0 0 20px rgba(168,85,247,0.6)",
                }}
                whileTap={{
                  scale: 0.95,
                  borderColor: "#a855f7",
                  boxShadow: "0 0 25px rgba(168,85,247,0.8)",
                }}
              >
                Resume
                <motion.div
                  className="absolute inset-0 rounded-full pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(circle at 50% 50%, rgba(168,85,247,0.1) 0%, transparent 80%)",
                  }}
                  animate={{ opacity: [0.05, 0.15, 0.05] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                />
              </motion.a>
            </div>
          </div>

          {/* === Right Image Section (3D Businessman) === */}
          <motion.div
            ref={containerRef}
            className="flex-1 flex justify-center lg:justify-end items-center"
            style={{
              rotateX,
              rotateY,
              scale: 1.05,
              minHeight: "20rem",
              perspective: 1000,
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <motion.img
              src="/ChatGPT Image Oct 28, 2025, 12_05_06 PM.png"
              alt="3D Businessman Working"
              className="w-72 sm:w-80 md:w-96 lg:w-[30rem] h-auto rounded-2xl object-contain drop-shadow-[0_0_30px_rgba(255,120,150,0.4)]"
              animate={{
                y: [0, -15, 0],
                rotateY: [0, 8, -8, 0],
                scale: [1, 1.03, 1],
              }}
              transition={{
                repeat: Infinity,
                repeatType: "mirror",
                duration: 6,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </div>

        {/* === Neon Background Shapes === */}
        <motion.div
          className="absolute -top-32 -left-32 w-60 h-60 rounded-full bg-purple-500 opacity-20 blur-3xl"
          animate={{ rotate: [0, 360] }}
          transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
        />
        <motion.div
          className="absolute -bottom-32 -right-32 w-80 h-80 rounded-full bg-pink-500 opacity-20 blur-3xl"
          animate={{ rotate: [360, 0] }}
          transition={{ repeat: Infinity, duration: 50, ease: "linear" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-72 h-72 rounded-full bg-orange-400 opacity-10 blur-2xl"
          animate={{ rotate: [0, 360] }}
          transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
        />
        
      </div>
    </section>
    
  );
};

export default HeroSection;
