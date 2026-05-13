"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Zap } from "lucide-react";

export default function CTASection() {
  return (
    // Micro padding (py-10) for a highly compact and sleek footprint
    <section className="relative py-10 px-6 bg-[#030207] bg-gradient-to-r from-[#030207] via-[#080711] to-[#030207] overflow-hidden border-t border-white/5 selection:bg-blue-600">

      {/* 🌌 Tight Ambient Glow behind the core content */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[150px] bg-blue-600/[0.05] blur-[100px] rounded-full pointer-events-none" />

      {/* Clean 12-Column Grid with reduced gap */}
      <div className="relative z-10 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 items-center">

        {/* 📝 LEFT SIDE — Tight Copy (Spans 8 Columns) */}
        <div className="md:col-span-8 text-left space-y-2">
          
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-500/5 border border-blue-500/10 backdrop-blur-md">
            <Zap className="w-2.5 h-2.5 text-blue-400 animate-pulse" />
            <span className="text-[8px] uppercase tracking-[4px] text-blue-400 font-black">
              {"Next Phase"}
            </span>
          </div>
          
          <h2 className="text-2xl md:text-4xl font-black text-white tracking-tighter   leading-none">
            {"Let's Build Your "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              {"Digital Empire."}
            </span>
          </h2>

          <p className="text-[11px] md:text-xs text-zinc-400 font-medium max-w-sm leading-normal">
            {"Engineering high-converting, deployment-ready scaling systems tailored for growth."}
          </p>
        </div>

        {/* ⚡ RIGHT SIDE — High Clarity Action Button (Spans 4 Columns) */}
        <div className="md:col-span-4 flex justify-start md:justify-end items-center">
          <Link href="/contact">
            <motion.div
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              className="relative inline-flex group"
            >
              {/* Vibrant Outer Glow for Maximum Focus */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 blur-md opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
              
              <button className="relative px-7 py-3 rounded-full bg-white text-black font-black text-xs uppercase tracking-widest flex items-center gap-2 z-10 border border-white/20 transition-all duration-300 group-hover:bg-black group-hover:text-white">
                {"Start Project"}
                <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </motion.div>
          </Link>
        </div>

      </div>
    </section>
  );
}