'use client';

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Send, CheckCircle2, Loader2, ArrowUpRight, Github, Linkedin, Twitter, Sparkles } from "lucide-react";
import emailjs from '@emailjs/browser';

export default function GetInTouch() {
  const formRef = useRef();
  const [isSending, setIsSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [selectedService, setSelectedService] = useState("Web Systems");
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  const services = ["Web Systems", "UI/UX Architecture", "Mobile Dev", "Consultancy"];

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    const SERVICE_ID = "service_d8budlq";
    const TEMPLATE_ID = "template_hqksd6b";
    const PUBLIC_KEY = "Uh-MxN7cb9utGODK0";

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(() => {
        setSubmitted(true);
        formRef.current.reset();
        setTimeout(() => setSubmitted(false), 5000);
      })
      .catch(() => alert("Transmission failed."))
      .finally(() => setIsSending(false));
  };

  return (
    <section id="contact" className="relative w-full bg-[#030014] text-white py-32 px-6 overflow-hidden font-sans">
      
      {/* --- PREMIUM BACKGROUND ENGINE --- */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute w-[800px] h-[800px] rounded-full bg-indigo-600/10 blur-[150px] transition-transform duration-1000 ease-out"
          style={{ 
            transform: `translate(${mousePos.x - 400}px, ${mousePos.y - 400}px)` 
          }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-start">
          
          {/* --- LEFT SIDE: THE PITCH --- */}
          <div className="lg:col-span-5 space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-8">
                <Sparkles size={14} className="text-indigo-400" />
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-indigo-400">Collaborate with Aman</span>
              </div>

              <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[0.85] mb-8">
                Turning <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400">Vision</span> <br />
                Into Digital Reality.
              </h2>

              <p className="text-neutral-400 text-lg md:text-xl font-light leading-relaxed max-w-md">
                Crafting bespoke architectures for the digital avant-garde. Ready to build something <span className="text-white italic">extraordinary</span>?
              </p>
            </motion.div>

            {/* Social Bento Tiles (Updated with your links) */}
            <div className="grid grid-cols-2 gap-4 max-w-sm">
              {[
                { 
                  name: 'LinkedIn', 
                  icon: <Linkedin size={20}/>, 
                  link: 'https://linkedin.com/in/aman-kumar-a72131338' 
                },
                { 
                  name: 'GitHub', 
                  icon: <Github size={20}/>, 
                  link: 'https://github.com/Aman-kumar-178' 
                }
              ].map((item) => (
                <a 
                  key={item.name} 
                  href={item.link}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-indigo-500/10 hover:border-indigo-500/50 transition-all flex flex-col gap-4 group"
                >
                  <div className="text-neutral-400 group-hover:text-indigo-400 transition-colors">
                    {item.icon}
                  </div>
                  <span className="text-[10px] uppercase tracking-widest font-bold">{item.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* --- RIGHT SIDE: THE TERMINAL FORM --- */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="lg:col-span-7 relative group"
          >
            <div className="absolute -inset-[1px] bg-gradient-to-br from-indigo-500 to-fuchsia-500 rounded-[2.5rem] blur-sm opacity-20 group-hover:opacity-40 transition duration-500"></div>
            
            <div className="relative bg-[#0a0a0c] border border-white/10 rounded-[2.5rem] p-8 md:p-12 shadow-2xl backdrop-blur-xl">
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-10">
                
                <div className="space-y-4">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 font-bold">Select Domain</label>
                  <div className="flex flex-wrap gap-2">
                    {services.map((s) => (
                      <button
                        key={s} type="button" onClick={() => setSelectedService(s)}
                        className={`px-5 py-2.5 rounded-xl text-xs font-semibold transition-all duration-300 ${
                          selectedService === s 
                          ? "bg-indigo-600 text-white shadow-[0_0_20px_rgba(79,70,229,0.4)]" 
                          : "bg-white/5 text-neutral-500 border border-white/5 hover:border-white/20"
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                  <input type="hidden" name="service_type" value={selectedService} />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="relative group">
                    <input 
                      name="from_name" required type="text" placeholder="Full Name"
                      className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 text-sm focus:border-indigo-500/50 focus:bg-white/[0.05] outline-none transition-all placeholder:text-neutral-700" 
                    />
                  </div>
                  <div className="relative group">
                    <input 
                      name="from_email" required type="email" placeholder="Work Email"
                      className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 text-sm focus:border-indigo-500/50 focus:bg-white/[0.05] outline-none transition-all placeholder:text-neutral-700" 
                    />
                  </div>
                </div>

                <div className="relative">
                  <textarea 
                    name="message" required rows={4} placeholder="Tell me about your project..."
                    className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 text-sm focus:border-indigo-500/50 focus:bg-white/[0.05] outline-none transition-all placeholder:text-neutral-700 resize-none" 
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSending || submitted}
                  className={`w-full py-5 rounded-2xl text-xs font-bold uppercase tracking-[0.4em] flex items-center justify-center gap-3 transition-all duration-500 relative overflow-hidden ${
                    submitted ? 'bg-indigo-600' : 'bg-white text-black hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]'
                  }`}
                >
                  {isSending ? (
                    <Loader2 className="animate-spin" size={20}/>
                  ) : submitted ? (
                    <span className="flex items-center gap-2"><CheckCircle2 size={18}/> Transmission Success</span>
                  ) : (
                    <>
                      <span>Submit Inquiry</span>
                      <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute -bottom-48 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none"></div>
    </section>
  );
}