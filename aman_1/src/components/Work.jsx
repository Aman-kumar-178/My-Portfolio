"use client";
import React from "react";
import { motion } from "framer-motion";

const workItems = [
  {
    role: "Full Stack Web Development Intern",
    company: "Vedsar Pvt. Ltd.",
    period: "Jan 2024 - Mar 2024",
    description: [
      "Developed responsive websites using HTML, CSS, JavaScript, and React.",
      "Fixed UI bugs and improved performance metrics.",
      "Built secure backend with Node.js and Express.",
      "Used Git & GitHub for version control.",
    ],
  },
  {
    role: "AI/ML Intern",
    company: "Edunet Foundation | Remote",
    period: "Apr 2024 - Jun 2024",
    description: [
      "Worked on Machine Learning projects involving Regression and Classification.",
      "Used Python, Pandas, NumPy, and Scikit-learn for data preprocessing and modeling.",
      "Implemented models and optimized accuracy using evaluation metrics.",
    ],
  },
  {
    role: "AI/ML Intern",
    company: "Infosys Springboard Program | Online",
    period: "Sep 2023 - Nov 2023",
    description: [
      "Created an Audio Book Generator using Python and Streamlit.",
      "Integrated TTS models for converting text to speech.",
      "Optimized the project for multilingual support and deployment.",
    ],
  },
];

const TimelineCard = ({ item, index }) => {
  const isLeft = index % 2 === 0;
  return (
    <div
      className={`relative flex ${
        isLeft ? "justify-start" : "justify-end"
      } w-full`}
    >
      {/* Connector Dot */}
      <div
        className={`absolute top-10 ${
          isLeft ? "left-[49.6%]" : "right-[49.6%]"
        } w-4 h-4 bg-blue-500 rounded-full z-20 border-4 border-black`}
      ></div>

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className={`relative bg-[#111] text-gray-300 shadow-md hover:shadow-blue-900/40 transition-all duration-300 rounded-2xl p-6 w-[85%] md:w-[45%] border border-gray-800 ${
          isLeft ? "ml-0 mr-auto" : "ml-auto mr-0"
        }`}
      >
        <h3 className="text-xl font-semibold text-white mb-1">{item.role}</h3>
        <p className="text-gray-400 text-sm mb-3">
          {item.company} | {item.period}
        </p>
        <ul className="list-disc pl-5 text-gray-400 text-sm space-y-1">
          {item.description.map((desc, i) => (
            <li key={i}>{desc}</li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

export default function WorkTimeline() {
  return (
    <section
      id="experience"
      className="relative bg-black py-24 px-6 sm:px-12 overflow-hidden"
    >
      {/* Title */}
      <div className="text-center mb-24 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-extrabold text-[#3B82F6] tracking-wide mb-4 relative inline-block"
        >
          Work Experience
          {/* Stylish Underline */}
          <span className="block w-28 h-[3px] bg-[#3B82F6] mx-auto mt-3 rounded-full shadow-[0_0_10px_#3B82F6]" />
        </motion.h2>

        <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto mt-2">
          A look at my professional journey and hands-on learning experiences.
        </p>
      </div>

      {/* Timeline Line — added more gap below heading */}
      <div className="absolute left-1/2 top-[290px] bottom-[100px] w-[2px] bg-gray-700 transform -translate-x-1/2 z-0"></div>

      {/* Timeline Cards */}
      <div className="flex flex-col space-y-20 relative z-10">
        {workItems.map((item, index) => (
          <TimelineCard key={index} item={item} index={index} />
        ))}
      </div>
    </section>
  );
}
