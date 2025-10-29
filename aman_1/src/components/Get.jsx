'use client';

import React from "react";
import { motion } from "framer-motion";

export default function GetInTouch() {
  return (
    <section id="contact"className="relative w-full bg-black text-white py-16 px-6 sm:px-12 flex flex-col items-center overflow-hidden">
      
      {/* Heading */}
      <h2 className="text-4xl sm:text-5xl font-extrabold mb-2 text-center text-cyan-400">
        Get In Touch
      </h2>
      <p className="text-gray-300 text-center mb-12 max-w-2xl text-sm sm:text-base">
        Have a project in mind? Let's create something amazing together!
      </p>

      {/* Main Grid */}
      <div className="w-full max-w-7xl flex flex-col lg:flex-row lg:justify-between lg:items-start gap-6 lg:gap-10">

        {/* Left Column: compact stacked two cards */}
        <div className="flex flex-col gap-4 w-full lg:w-1/3">

          {/* Box 1: Contact Info */}
          <motion.div
            className="bg-zinc-900 p-4 sm:p-5 rounded-2xl shadow-xl border border-zinc-700 cursor-pointer flex-1"
            whileHover={{ scale: 1.05, rotateY: 3, rotateX: 2, boxShadow: "0 0 15px rgba(0,255,255,0.5)" }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-2 text-cyan-400 text-center lg:text-left">Contact Info</h3>
            <p><span className="font-semibold">Name:</span> Aman Kumar</p>
            <p><span className="font-semibold">Email:</span> aman1782003@gmail.com</p>
            <p><span className="font-semibold">Phone:</span> +91 9336146677</p>
            <p><span className="font-semibold">Location:</span> Prayagraj, Uttar Pradesh</p>
          </motion.div>

          {/* Box 2: Why Work With Me (Compact) */}
          <motion.div
            className="bg-gray-800 p-4 sm:p-5 rounded-2xl shadow-xl border border-gray-700 cursor-pointer flex-1"
            whileHover={{ scale: 1.05, rotateY: -3, rotateX: -2, boxShadow: "0 0 15px rgba(128,0,255,0.5)" }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-2 text-purple-400 text-center lg:text-left">
              Why Work With Me?
            </h3>
            <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm sm:text-base">
              <li>Fast & clear communication</li>
              <li>Full-Stack & AI/ML expertise</li>
              <li>High-quality, scalable apps</li>
              <li>Collaborative & client-focused</li>
              <li>Timely delivery & clean code</li>
            </ul>
          </motion.div>

        </div>

        {/* Right Column: Contact Form */}
        <motion.div
          className="bg-gray-900 p-4 sm:p-5 rounded-2xl shadow-xl border border-gray-700 cursor-pointer w-full lg:w-2/5 flex flex-col justify-between"
          whileHover={{ scale: 1.05, rotateY: 2, rotateX: 2, boxShadow: "0 0 15px rgba(0,255,128,0.5)" }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
        >
          <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-teal-400 text-center lg:text-left">Send a Message</h3>
          <form className="flex flex-col gap-3">
            <input
              type="text"
              placeholder="Your Name *"
              className="px-3 py-2 rounded-lg bg-zinc-900 border border-gray-700 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-teal-400 transition-all text-sm sm:text-base"
            />
            <input
              type="email"
              placeholder="Your Email *"
              className="px-3 py-2 rounded-lg bg-zinc-900 border border-gray-700 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-teal-400 transition-all text-sm sm:text-base"
            />
            <input
              type="text"
              placeholder="Subject *"
              className="px-3 py-2 rounded-lg bg-zinc-900 border border-gray-700 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-teal-400 transition-all text-sm sm:text-base"
            />
            <textarea
              placeholder="Message *"
              rows={4}
              className="px-3 py-2 rounded-lg bg-zinc-900 border border-gray-700 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-teal-400 transition-all text-sm sm:text-base"
            />
            <motion.button
              type="submit"
              className="bg-teal-400 px-5 py-2 rounded-lg font-semibold text-black transition-all duration-500 mt-1"
              whileHover={{ scale: 1.05, rotateY: 2, rotateX: 2, boxShadow: "0 0 15px rgba(0,255,128,0.7)" }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>

      </div>
    </section>
  );
}
