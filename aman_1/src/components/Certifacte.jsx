'use client';

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";


// Badge Component
const Badge = ({ children }) => (
  <span className="inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium bg-gray-700/40 text-gray-300 border border-gray-600/40">
    {children}
  </span>
);

// Card Component
const Card = ({ data }) => {
  const cardRef = useRef(null);
  const [isHover, setIsHover] = useState(false);

  return (
    <motion.div
      ref={cardRef}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      whileHover={{ scale: 1.05, y: -5 }}
      transition={{ type: "spring", stiffness: 150, damping: 12 }}
      className="relative w-full h-56 cursor-pointer rounded-2xl overflow-hidden border border-gray-800 bg-gradient-to-br from-zinc-900 via-neutral-800 to-zinc-900 shadow-[0_0_10px_rgba(255,255,255,0.08)] hover:shadow-[0_0_25px_rgba(255,255,255,0.15)] transition-all duration-300"
    >
      {/* Animated gradient overlay on hover */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isHover ? 0.3 : 0 }}
        transition={{ duration: 0.4 }}
        className="absolute inset-0 bg-gradient-to-r from-amber-400/20 via-orange-400/20 to-pink-400/20"
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-between h-full p-5">
        <div>
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-base font-semibold text-gray-100">
              {data.title}
            </h3>
            <Badge>{data.type}</Badge>
          </div>
          <p className="text-gray-400 text-xs leading-snug">
            {data.description}
          </p>
        </div>
        <div className="flex justify-between items-center mt-3">
          <span className="text-[10px] text-gray-500">{data.date}</span>
          {data.link && (
            <a
              href={data.link}
              target="_blank"
              rel="noopener noreferrer"
              className="px-2 py-0.5 text-[10px] font-medium rounded-md bg-gray-700 text-gray-200 hover:bg-gray-600 transition-all duration-300"
            >
              View
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

// Data
const achievementsData = [
  {
    id: "1",
    title: "Oracle Cloud Infrastructure 2025 Certified AI Professional",
    type: "Certification",
    date: "2025",
    link: "public/Aman eCertificate (1).pdf",
    
    description:
      "Proficiency in AI, cloud computing, and Oracle Cloud architecture.",
  },
  
  {
    id: "2",
    title: "Full Stack Web Development",
    type: "Certificate",
    date: "2024",
    link: "#",
    description:
      "Built responsive web apps using React, Node.js, and MongoDB.",
  },
  {
    id: "4",
    title: "AI & Data Analytics (AICTE)",
    type: "Certificate",
    date: "2024",
    link: "#",
    description:
      "Worked on data visualization and ML projects using Python.",
  },
  {
    id: "5",
    title: "Artificial Intelligence & ML (AICTE)",
    type: "Certificate",
    date: "2024",
    link: "#",
    description:
      "Created AI-driven models through hands-on projects.",
  },
  {
    id: "6",
    title: "Intro to Data Science (Infosys Springboard)",
    type: "Certificate",
    date: "2024",
    link: "#",
    description:
      "Learned Python-based data analysis and visualization basics.",
  },
];

// Main Section
export default function AchievementsSection() {
  return (
    <section
      id="achievements"
      className="relative bg-black text-gray-300 min-h-screen py-16 px-4 sm:px-10"
    >
      {/* Heading */}
      <div className="text-center mb-14">
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl sm:text-4xl font-bold text-amber-300 tracking-wide uppercase"
        >
          Achievements & Certificates
        </motion.h1>
        <div className="w-20 h-[3px] bg-amber-400 mx-auto mt-3 rounded-full" />
        <p className="mt-4 text-gray-400 text-sm max-w-xl mx-auto">
          A collection of certifications showcasing my growth in AI, ML, and Web
          Development.
        </p>
      </div>

      {/* Cards Grid with More Gap */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {achievementsData.map((item) => (
          <Card key={item.id} data={item} />
        ))}
      </div>
    
    </section>
  );
}
