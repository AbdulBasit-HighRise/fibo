"use client";
import React from "react";
import { motion } from "framer-motion";
import { Sparkles, CheckCircle2, PlayCircle } from "lucide-react";

export default function ServiceSlugPage({ params }: { params: { slug: string } }) {
  // Normally you'd fetch data here based on params.slug
  return (
    <main className="bg-[#030712] text-white">
      
      {/* 1. MATCHING HERO */}
      <section className="relative min-h-[85vh] flex items-center justify-center px-4 md:px-8 pt-28 pb-16">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative w-full max-w-7xl min-h-[70vh] rounded-[3.5rem] p-8 md:p-16 border border-white/10 bg-[#070b14] shadow-2xl flex flex-col justify-center"
        >
          <div className="absolute top-10 left-10 flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20">
            <Sparkles size={12} className="text-blue-400" />
            <span className="text-[10px] font-black uppercase tracking-[4px] text-blue-300">{params.slug.replace('-', ' ')}</span>
          </div>
          <h1 className="text-5xl md:text-[100px] font-black tracking-tighter leading-[0.85] uppercase mb-8">
            Expert <br /> <span className="text-blue-500">{params.slug.split('-')[0]}</span> Solutions
          </h1>
          <p className="text-zinc-400 text-xl md:text-3xl max-w-3xl font-medium leading-tight italic">
            Advanced technical strategies tailored for high-growth enterprises seeking market leadership.
          </p>
        </motion.div>
      </section>

      {/* 2. ABOUT SERVICE (BLUE) */}
      <section className="py-32 px-6 bg-blue-600 rounded-[4rem] mx-4 my-16 text-black">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24">
          <h2 className="text-5xl font-black uppercase italic tracking-tighter">Strategic <br /> Foundation.</h2>
          <div className="text-xl space-y-6">
            <p className="font-bold">This service is designed to eliminate technical debt and maximize conversion through custom-engineered code.</p>
            <p className="opacity-80">We utilize serverless architectures and global edge networks to ensure your business remains fast, secure, and visible on the global stage.</p>
          </div>
        </div>
      </section>

      {/* 3. SUB-SERVICES GRID (BLACK) */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <h2 className="text-center text-4xl font-black uppercase mb-20 italic">The Production Line</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[1, 2, 3, 4].map(i => (
            <motion.div key={i} whileHover={{ x: 10 }} className="p-12 bg-[#0a0f1d] border border-white/5 rounded-[3rem] flex gap-8 items-start group hover:border-blue-500 transition-all">
              <CheckCircle2 className="text-blue-500 shrink-0" size={32} />
              <div>
                <h3 className="text-2xl font-black uppercase mb-4 italic">Technical Audit 0{i}</h3>
                <p className="text-zinc-500 leading-relaxed">Deep-dive SEO and performance analysis to identify every growth opportunity in your current digital stack.</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. PORTFOLIO & CONTENT (BLUE) */}
      <section className="py-32 px-6 bg-blue-600 rounded-[4rem] mx-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-6xl font-black uppercase mb-16 text-black">Case Evidence.</h2>
          <div className="grid md:grid-cols-2 gap-10">
             <div className="aspect-video bg-black/40 rounded-[3rem] border-4 border-black/10 flex items-center justify-center">
                <PlayCircle size={60} className="text-white/20" />
             </div>
             <div className="aspect-video bg-black/40 rounded-[3rem] border-4 border-black/10 flex items-center justify-center">
                <PlayCircle size={60} className="text-white/20" />
             </div>
          </div>
        </div>
      </section>

      {/* 5. FAQ & CTA */}
      <section className="py-40 px-6 text-center">
         <h2 className="text-6xl font-black uppercase mb-16 italic tracking-tighter">Ready to Deploy?</h2>
         <button className="bg-blue-600 text-black px-16 py-8 rounded-full text-2xl font-black hover:scale-110 transition-all">GET A QUOTE</button>
      </section>

    </main>
  );
}