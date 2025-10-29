'use client';

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import GetInTouch from "./Get";
import CertificatesSection from "./Certifacte";

// === PROJECT DATA ===
const projects = [
  {
    title: "Food Delivery Web App",
    description:
      "A modern responsive food delivery platform with authentication, live order tracking, and admin dashboard.",
    tech: ["React", "Redux", "Firebase", "TailwindCSS"],
    image:
      "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=1200&q=80",
    demo: "#",
    github: "https://github.com/yourusername/food-delivery", // 👈 Add your repo link
  },
  {
    title: "E-commerce Website",
    description:
      "A full-stack shopping site with secure payments, user authentication, and product management.",
    tech: ["React.js", "Node.js", "Express", "MongoDB"],
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",
    demo: "#",
    github: "https://github.com/yourusername/ecommerce-site", // 👈 Add your repo link
  },
  {
    title: "Water Quality Prediction",
    description:
      "Machine Learning model classifying water as safe or unsafe using physical and chemical parameters.",
    tech: ["Python", "Scikit-learn", "Streamlit", "Pandas"],
    image:
      "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=1200&q=80",
    demo: "#",
    github: "https://github.com/yourusername/water-quality-prediction", // 👈 Add your repo link
  },
  {
    title: "EV Charging Demand Forecasting",
    description:
      "Predicts EV charging demand using time-series models with a real-time dashboard and analytics.",
    tech: ["Python", "Pandas", "Matplotlib", "Streamlit"],
    image:
      "https://images.unsplash.com/photo-1612538490990-7d60d3c8d7b8?auto=format&fit=crop&w=1200&q=80",
    demo: "#",
    github: "https://github.com/yourusername/ev-demand-forecast", // 👈 Add your repo link
  },
];

export default function FeaturedProjects() {
  const [current, setCurrent] = useState(0);
  const nextProject = () => setCurrent((prev) => (prev + 1) % projects.length);
  const prevProject = () =>
    setCurrent((prev) => (prev - 1 + projects.length) % projects.length);

  const project = projects[current];

  return (
    <div className="bg-black text-white w-full flex flex-col items-center overflow-hidden">
      {/* === PROJECTS SECTION === */}
      <section
        id="projects"
        className="relative w-full flex flex-col items-center py-16 px-6 sm:px-12 overflow-hidden"
      >
        {/* === HEADING === */}
        <motion.h2
          className="text-4xl sm:text-5xl font-extrabold mb-4 text-center text-teal-400"
          whileHover={{ scale: 1.06 }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          Featured Projects
        </motion.h2>

        <p className="text-gray-400 text-center mb-12 max-w-2xl">
          Explore some of my most impactful and innovative projects.
        </p>

        {/* === PROJECT CARD === */}
        <div className="relative w-full max-w-5xl flex justify-center items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 60, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -60, scale: 0.9 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
              whileHover={{
                scale: 1.03,
                boxShadow: "0px 0px 25px rgba(0, 255, 200, 0.25)",
                rotateY: 3,
                rotateX: 2,
              }}
              className="relative bg-zinc-900 border border-gray-700 rounded-2xl overflow-hidden w-full flex flex-col sm:flex-row items-center transition-all duration-700"
            >
              {/* === IMAGE === */}
              <motion.div
                className="w-full sm:w-1/2 h-64 sm:h-96 overflow-hidden relative"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 120, damping: 15 }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700 ease-in-out"
                />
              </motion.div>

              {/* === CONTENT === */}
              <div className="w-full sm:w-1/2 p-6 sm:p-10 flex flex-col justify-between h-full">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-semibold mb-3 text-gray-100 hover:text-teal-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 text-sm sm:text-base leading-relaxed">
                    {project.description}
                  </p>

                  {/* === TECH STACK === */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gray-700/30 rounded-full text-xs sm:text-sm font-medium text-teal-300 border border-teal-600/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* === BUTTONS === */}
                <div className="flex flex-wrap gap-4 mt-2">
                  {/* View Project */}
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-gradient-to-r from-teal-500 to-emerald-400 hover:from-emerald-400 hover:to-teal-500 text-black font-semibold px-5 py-2 rounded-lg text-sm transition-all duration-300 shadow-md hover:shadow-[0_0_20px_rgba(0,255,180,0.4)]"
                  >
                    View Project
                  </a>

                  {/* NEW BUTTON: View on GitHub */}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block border border-teal-400 text-teal-300 hover:bg-teal-500/20 font-semibold px-5 py-2 rounded-lg text-sm transition-all duration-300"
                  >
                    View on GitHub
                  </a>

                  {/* Next Button */}
                  <button
                    onClick={nextProject}
                    className="inline-block border border-gray-600 hover:bg-gray-800 text-gray-200 px-5 py-2 rounded-lg text-sm transition-all duration-300"
                  >
                    Next →
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* === ARROWS === */}
          <button
            onClick={prevProject}
            className="absolute left-0 sm:-left-12 top-1/2 -translate-y-1/2 bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-full shadow-md"
          >
            <ArrowLeft size={20} />
          </button>

          <button
            onClick={nextProject}
            className="absolute right-0 sm:-right-12 top-1/2 -translate-y-1/2 bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-full shadow-md"
          >
            <ArrowRight size={20} />
          </button>
        </div>

        {/* === PROJECT COUNTER === */}
        <motion.div
          className="mt-8 text-teal-400 text-sm font-medium"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          {current + 1} / {projects.length}
        </motion.div>
      </section>

      {/* === CERTIFICATES SECTION === */}
      <section className="w-full mt-20 relative z-10">
        <CertificatesSection />
      </section>

      {/* === GET IN TOUCH SECTION === */}
      <section className="w-full mt-20 relative z-10">
        <GetInTouch />
      </section>
    </div>
  );
}
