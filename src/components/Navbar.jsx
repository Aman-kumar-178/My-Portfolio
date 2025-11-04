"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Github, Linkedin } from "lucide-react";

const sections = [
  "Home",
  "About",
  "Experience",
  "Skills",
  "Projects",
  "Achievements",
  "Contact",
];

function NavLink({ label, active, onClick }) {
  const ref = useRef(null);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0, scale: 1 });

  const handleMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rx = -((y - rect.height / 2) / rect.height) * 8;
    const ry = ((x - rect.width / 2) / rect.width) * 8;
    setTilt({ rx, ry, scale: 1.04 });
  };

  const reset = () => setTilt({ rx: 0, ry: 0, scale: 1 });

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      onFocus={reset}
      onClick={onClick}
      className="relative px-3 py-2 focus:outline-none"
      style={{
        transform: `perspective(600px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg) scale(${tilt.scale})`,
        transition: "transform 0.12s linear",
      }}
      aria-current={active ? "page" : undefined}
    >
      <span
        className={`font-medium transition-colors duration-150 ${
          active ? "text-white" : "text-gray-300 hover:text-white"
        }`}
      >
        {label}
      </span>

      {/* Underline Animation */}
      <motion.span
        layout
        initial={{ width: 0 }}
        animate={{ width: active ? "100%" : 0 }}
        transition={{ type: "tween", duration: 0.25 }}
        className="block h-[2px] bg-cyan-400 rounded mt-1"
        style={{ transformOrigin: "left" }}
      />
    </motion.button>
  );
}

function SocialIcon({ href, Icon, glowColor = "rgba(6,182,212,0.25)", label }) {
  const ref = useRef(null);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0, sx: 1 });
  const [hovered, setHovered] = useState(false);

  const handleMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rx = -((y - rect.height / 2) / rect.height) * 10;
    const ry = ((x - rect.width / 2) / rect.width) * 10;
    setTilt({ rx, ry, sx: 1.06 });
  };

  const reset = () => setTilt({ rx: 0, ry: 0, sx: 1 });

  return (
    <motion.a
      ref={ref}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      onMouseMove={handleMove}
      onMouseLeave={() => {
        reset();
        setHovered(false);
      }}
      onMouseEnter={() => setHovered(true)}
      className="relative inline-flex items-center justify-center w-10 h-10 rounded-md"
      style={{
        transformStyle: "preserve-3d",
        willChange: "transform, box-shadow",
      }}
      animate={{
        rotateX: tilt.rx,
        rotateY: tilt.ry,
        scale: tilt.sx,
      }}
      transition={{ type: "spring", stiffness: 220, damping: 18 }}
    >
      <motion.span
        className="absolute inset-0 rounded-md pointer-events-none"
        style={{
          boxShadow: hovered
            ? `0 10px 30px ${glowColor}, inset 0 0 20px ${glowColor}`
            : "0 0 0 rgba(0,0,0,0)",
          transition: "box-shadow 0.18s ease",
        }}
      />
      <motion.span
        className="relative z-10 text-gray-300"
        animate={hovered ? { y: [-2, 0, -2] } : { y: 0 }}
        transition={{
          repeat: hovered ? Infinity : 0,
          duration: 1.6,
          ease: "easeInOut",
        }}
      >
        <Icon className="w-5 h-5" />
      </motion.span>
    </motion.a>
  );
}

export default function DarkNavbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [active, setActive] = useState("Home");
  const [manualClick, setManualClick] = useState(false);

  // Scroll-based section detection
  useEffect(() => {
    const handleScroll = () => {
      if (manualClick) return; // Skip while user clicked manually
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      let current = "Home";

      for (const sec of sections) {
        const el = document.getElementById(sec.toLowerCase());
        if (el && el.offsetTop <= scrollPosition - 50) {
          current = sec;
        }
      }

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [manualClick]);

  // Smooth scroll + click active
  const scrollTo = (label) => {
    const el = document.getElementById(label.toLowerCase());
    if (el) {
      setManualClick(true);
      setActive(label);
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setTimeout(() => setManualClick(false), 1000); // re-enable scroll detection
    }
    setIsMobileOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-black/95 backdrop-blur-sm border-b border-gray-900 shadow-lg z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 flex items-center justify-between h-16">
          <div
            className="font-bold text-2xl sm:text-3xl text-white cursor-pointer select-none"
            onClick={() => scrollTo("Home")}
          >
            Portfolio
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-2">
            {sections.map((sec) => (
              <NavLink
                key={sec}
                label={sec}
                active={active === sec}
                onClick={() => scrollTo(sec)}
              />
            ))}
            <div className="ml-4 flex items-center gap-2">
              <SocialIcon
                href="https://github.com/Aman-kumar-178"
                Icon={Github}
                glowColor="rgba(255,255,255,0.08)"
                label="GitHub"
              />
              <SocialIcon
                href="https://www.linkedin.com/in/aman-kumar-a72131338"
                Icon={Linkedin}
                glowColor="rgba(10,130,200,0.12)"
                label="LinkedIn"
              />
            </div>
          </div>

          {/* Mobile toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileOpen((s) => !s)}
              aria-label="Toggle menu"
              className="text-gray-300 p-2 rounded hover:bg-white/5"
            >
              {isMobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 h-full w-72 bg-black shadow-2xl z-50 p-6 md:hidden"
            >
              <div className="flex flex-col gap-6 mt-4">
                {sections.map((sec) => (
                  <button
                    key={sec}
                    onClick={() => scrollTo(sec)}
                    className={`text-left text-lg px-2 py-2 rounded transition-colors ${
                      active === sec
                        ? "text-white font-semibold"
                        : "text-gray-300 hover:text-white"
                    }`}
                  >
                    {sec}
                  </button>
                ))}

                <div className="mt-4 border-t border-gray-800 pt-4 flex flex-col gap-3">
                  <a
                    href="https://github.com/Aman-kumar-178"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-300 hover:text-white"
                  >
                    <Github className="w-5 h-5" /> <span>GitHub</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/aman-kumar-a72131338"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-300 hover:text-white"
                  >
                    <Linkedin className="w-5 h-5" /> <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </motion.aside>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.45 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="fixed inset-0 bg-black z-40 md:hidden"
              onClick={() => setIsMobileOpen(false)}
            />
          </>
        )}
      </AnimatePresence>
    </>
  );
}
