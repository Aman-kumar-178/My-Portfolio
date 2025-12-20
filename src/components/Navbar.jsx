"use client";

import React, { useEffect, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { Menu, X, Github, Linkedin, ArrowRight, Sparkles } from "lucide-react";

const sections = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Experience", id: "experience" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "Achievements", id: "achievements" },
  { name: "Contact", id: "contact" },
];

export default function ProfessionalNavbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 60);
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
    );

    sections.forEach((sec) => {
      const el = document.getElementById(sec.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (targetId) => {
    const el = document.getElementById(targetId);
    if (el) {
      const offset = 90;
      const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top: elementPosition - offset, behavior: "smooth" });
    }
    setIsMobileOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
          scrolled
            ? "py-3 bg-zinc-950/60 backdrop-blur-2xl border-b border-violet-500/20 shadow-[0_10px_30px_-10px_rgba(139,92,246,0.3)]"
            : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          
          <motion.div
            onClick={() => scrollToSection("home")}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-violet-500 to-fuchsia-600 rounded-xl blur opacity-40 group-hover:opacity-100 transition duration-500"></div>
              <div className="relative w-11 h-11 bg-black rounded-xl flex items-center justify-center font-black text-transparent bg-clip-text bg-gradient-to-tr from-violet-400 to-fuchsia-500 text-2xl border border-white/10">
                A
              </div>
            </div>
            <span className="text-white font-bold text-xl tracking-tighter">
              AMAN<span className="text-violet-500 animate-pulse">.</span>
            </span>
          </motion.div>

          <div className="hidden lg:flex items-center bg-zinc-900/50 border border-white/10 px-2 py-1.5 rounded-full backdrop-blur-md shadow-inner">
            {sections.map((sec) => (
              <button
                key={sec.id}
                onClick={() => scrollToSection(sec.id)}
                className={`relative px-5 py-2 text-sm font-bold transition-all duration-300 ${
                  active === sec.id 
                  ? "text-violet-400" 
                  : "text-zinc-400 hover:text-white"
                }`}
              >
                <span className="relative z-10">{sec.name}</span>
                {active === sec.id && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-gradient-to-r from-violet-500/20 to-fuchsia-500/20 rounded-full border border-violet-500/30 shadow-[0_0_15px_rgba(139,92,246,0.3)]"
                    transition={{ type: "spring", bounce: 0.25, duration: 0.6 }}
                  />
                )}
              </button>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-6">
            <div className="flex gap-4 border-r border-white/10 pr-6">
              <SocialLink href="https://github.com/Aman-kumar-178" Icon={Github} color="hover:text-white" />
              <SocialLink href="https://linkedin.com/in/aman-kumar-a72131338" Icon={Linkedin} color="hover:text-violet-500" />
            </div>

            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(139, 92, 246, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection("contact")}
              className="bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white px-7 py-3 rounded-full text-sm font-black flex items-center gap-2 shadow-lg transition-all"
            >
              LET'S TALK <ArrowRight size={16} />
            </motion.button>
          </div>

          <button
            onClick={() => setIsMobileOpen(true)}
            className="lg:hidden p-3 text-violet-400 bg-violet-500/10 rounded-xl border border-violet-500/20 hover:bg-violet-500/20 transition-all"
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileOpen(false)}
              className="fixed inset-0 bg-black/90 backdrop-blur-sm z-[150]"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-[280px] sm:w-[350px] bg-[#09090b] z-[200] border-l border-violet-500/20 flex flex-col shadow-2xl"
            >
              <div className="p-6 flex items-center justify-between border-b border-white/5 bg-zinc-950/50">
                <div className="flex items-center gap-2">
                  <Sparkles className="text-violet-400" size={16} />
                  <span className="text-zinc-100 font-bold tracking-widest uppercase text-xs">Navigation</span>
                </div>
                <button onClick={() => setIsMobileOpen(false)} className="p-2 hover:bg-red-500/10 hover:text-red-500 rounded-lg transition-colors">
                  <X size={20} />
                </button>
              </div>

              {/* Sidebar Content - SCROLLBAR HIDDEN FIX */}
              <div className="flex-1 overflow-y-auto px-4 py-6 space-y-2 
                [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                {sections.map((sec, i) => (
                  <motion.button
                    key={sec.id}
                    onClick={() => scrollToSection(sec.id)}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className={`w-full flex items-center justify-between px-5 py-4 rounded-2xl transition-all duration-300 group ${
                      active === sec.id
                        ? "bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white shadow-lg"
                        : "text-zinc-400 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-[10px] font-mono opacity-50">0{i + 1}</span>
                      <span className="font-bold text-base uppercase tracking-tight">{sec.name}</span>
                    </div>
                    <ArrowRight size={18} className={`transition-transform group-hover:translate-x-1 ${active === sec.id ? "block" : "hidden"}`} />
                  </motion.button>
                ))}
              </div>

              <div className="p-6 border-t border-white/5 bg-zinc-950/50">
                 <div className="flex gap-5 mb-4">
                    <SocialLink href="https://github.com/Aman-kumar-178" Icon={Github} color="text-zinc-400 hover:text-white" />
                    <SocialLink href="https://linkedin.com/in/aman-kumar-a72131338" Icon={Linkedin} color="text-zinc-400 hover:text-violet-500" />
                 </div>
                 <p className="text-zinc-600 text-[10px] font-medium tracking-widest uppercase">© 2025 AMAN KUMAR</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

function SocialLink({ href, Icon, color }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -3, scale: 1.1 }}
      className={`${color} transition-all duration-300`}
    >
      <Icon size={22} />
    </motion.a>
  );
}