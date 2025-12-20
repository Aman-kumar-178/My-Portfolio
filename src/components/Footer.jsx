'use client';

import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp, FaGlobe } from "react-icons/fa";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <footer className="relative w-full bg-[#030303] text-white pt-20 pb-10 px-6 overflow-hidden">
      
      {/* --- PREMIUM DEPTH FX --- */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
      <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-emerald-500/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* TOP SECTION */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-tight">
              Work with <span className="text-zinc-700 hover:text-emerald-400 transition-colors duration-500 cursor-default">Excellence.</span>
            </h2>
          </motion.div>

          <div className="flex items-center gap-6">
            <p className="text-zinc-500 text-xs uppercase tracking-[0.2em] font-bold">Back to top</p>
            <motion.div 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={scrollToTop}
              className="group cursor-pointer relative w-14 h-14 rounded-full border border-zinc-800 flex items-center justify-center overflow-hidden transition-all duration-500 hover:border-emerald-500"
            >
              <motion.div className="absolute inset-0 bg-emerald-500 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              <FaArrowUp size={20} className="relative z-10 text-zinc-400 group-hover:text-black transition-colors duration-500" />
            </motion.div>
          </div>
        </div>

        {/* MAIN NAVIGATION GRID */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 border-y border-zinc-900 py-16"
        >
          {/* Brand Identity */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="text-2xl font-black tracking-tighter">AMAN<span className="text-emerald-500 text-3xl">.</span>STUDIO</div>
            <p className="text-zinc-400 text-sm leading-relaxed max-w-[240px]">
              Building high-performance MERN applications and immersive digital experiences.
            </p>
          </motion.div>

          {/* Sitemaps */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-zinc-500">Navigation</h4>
            <ul className="space-y-3">
              {["Home", "Projects", "About", "Contact"].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="group relative text-zinc-400 hover:text-white transition-colors text-sm font-medium">
                    {link}
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-emerald-500 transition-all duration-300 group-hover:w-full" />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Socials */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-zinc-500">Connect</h4>
            <div className="flex flex-col gap-4">
              {[
                { name: "LinkedIn", icon: <FaLinkedin size={18} />, color: "hover:text-emerald-400", url: "https://linkedin.com/in/aman-kumar-a72131338" },
                { name: "GitHub", icon: <FaGithub size={18} />, color: "hover:text-white", url: "https://github.com/Aman-kumar-178" },
                { name: "Email", icon: <FaEnvelope size={18} />, color: "hover:text-emerald-400", url: "mailto:aman1782003@gmail.com" }
              ].map((social) => (
                <a key={social.name} href={social.url} className={`flex items-center gap-3 text-sm text-zinc-400 transition-all duration-300 ${social.color} group`}>
                  <span className="p-2 rounded-lg bg-zinc-900 group-hover:bg-zinc-800 border border-zinc-800 transition-all">
                    {social.icon}
                  </span>
                  {social.name}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Location Widget */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-zinc-500">Location</h4>
            <div className="bg-zinc-900/50 p-6 rounded-2xl border border-zinc-800 backdrop-blur-md">
              <div className="flex items-center gap-3 mb-3">
                <FaGlobe className="text-emerald-500 animate-[spin_5s_linear_infinite]" size={16} />
                <span className="text-sm font-bold text-zinc-200">Prayagraj, India</span>
              </div>
              <p className="text-sm text-zinc-500 leading-relaxed">
                Available for remote opportunities and worldwide collaborations.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* BOTTOM LEGAL SECTION */}
        <div className="mt-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-zinc-500 text-sm font-medium tracking-wide">
            &copy; {currentYear} Aman Kumar Studio. All rights reserved.
          </p>

          <div className="flex gap-10">
            {["Privacy Policy", "Terms of Service"].map((legal) => (
              <a key={legal} href="#" className="text-zinc-600 hover:text-emerald-400 text-sm font-semibold transition-colors">
                {legal}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}