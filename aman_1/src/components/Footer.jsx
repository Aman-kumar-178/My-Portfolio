'use client';

import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white py-12 px-6 sm:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Portfolio Tagline */}
        <div className="flex flex-col gap-4 text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
            Portfolio
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            Building amazing digital experiences with modern web technologies.
          </p>
        </div>

        {/* Quick Links */}
        <div className="text-center md:text-left">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4">Quick Links</h3>
          <ul className="flex flex-col gap-2 text-gray-400 text-sm sm:text-base">
            <li>
              <a href="#home" className="hover:text-white transition-colors">Home</a>
            </li>
            <li>
              <a href="#about" className="hover:text-white transition-colors">About</a>
            </li>
            <li>
              <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            </li>
          </ul>
        </div>

        {/* Connect With Me */}
        <div className="text-center md:text-left">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4">Connect With Me</h3>
          <div className="flex justify-center md:justify-start gap-4 text-gray-400">
            <a href="https://github.com/Aman-kumar-178" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              <FaGithub size={24} />
            </a>
            <a href="https://www.linkedin.com/in/aman-kumar-a72131338" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              <FaLinkedin size={24} />
            </a>
            <a href="mailto:aman1782003@gmail.com" className="hover:text-white transition-colors">
              <FaEnvelope size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-500 text-xs sm:text-sm">
        &copy; 2025 Portfolio. Made with React & Three.js. All rights reserved.
      </div>
    </footer>
  );
}
