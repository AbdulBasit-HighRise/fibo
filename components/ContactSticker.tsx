"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send } from "lucide-react";

const ContactSticker = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-[999] flex items-end flex-col gap-4">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={{ opacity: 1, x: -20, scale: 1 }}
            exit={{ opacity: 0, x: 50, scale: 0.9 }}
            className="w-[320px] bg-zinc-950/90 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden"
          >
            {/* Form Header */}
            <div className="p-5 border-b border-white/5 flex justify-between items-center bg-white/5">
              <div>
                <h3 className="text-white font-bold text-sm">Start a Project</h3>
                <p className="text-zinc-500 text-[10px] uppercase tracking-wider">We'll get back in 24h</p>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-zinc-400 hover:text-white p-1"
              >
                <X size={18} />
              </button>
            </div>

            {/* Form Body */}
            <form className="p-5 flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-1">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs text-white outline-none focus:border-blue-500/50 transition-all"
                />
              </div>
              <div className="space-y-1">
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs text-white outline-none focus:border-blue-500/50 transition-all"
                />
              </div>
              <div className="space-y-1">
                <input 
                  type="phone" 
                  placeholder="Phone Number" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs text-white outline-none focus:border-blue-500/50 transition-all"
                />
              </div>
              <div className="space-y-1">
                <textarea 
                  placeholder="How can we help?" 
                  rows={3}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs text-white outline-none focus:border-blue-500/50 transition-all resize-none"
                ></textarea>
              </div>
              <button className="w-full bg-blue-600 hover:bg-blue-500 text-white py-3 rounded-xl text-[11px] font-bold uppercase tracking-widest flex items-center justify-center gap-2 transition-all group">
                Send Message
                <Send size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sticker Trigger */}
      {!isOpen && (
        <motion.div
          initial={{ x: 100 }}
          animate={{ x: 0 }}
          whileHover={{ x: -4 }}
          onClick={() => setIsOpen(true)}
          className="relative flex items-center cursor-pointer group"
        >
          <div className="bg-zinc-950/80 backdrop-blur-2xl border border-white/10 p-3 rounded-l-2xl shadow-2xl flex flex-col items-center gap-6 group-hover:border-blue-500/50 transition-all duration-500">
            <div className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </div>
            <div className="text-zinc-400 group-hover:text-blue-400 transition-colors duration-300">
              <MessageSquare size={20} strokeWidth={1.5} />
            </div>
            <span className="font-bold uppercase tracking-[0.2em] text-[10px] text-zinc-500 [writing-mode:vertical-lr] rotate-180 group-hover:text-zinc-200 transition-colors duration-300">
              Get In Touch
            </span>
          </div>
          <div className="absolute -z-10 inset-0 bg-blue-600/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        </motion.div>
      )}
    </div>
  );
};

export default ContactSticker;