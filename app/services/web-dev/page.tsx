"use client";
import React from "react";
import { motion } from "framer-motion";
import { 
  Sparkles, Layout, Flame, Cpu, ShoppingBag, 
  Database, Layers, Zap, Code, Terminal, ChevronRight 
} from "lucide-react";
import Image from "next/image";

// Components Imports
import Stats from "@/components/sections/Stats";
import CTA from "@/components/sections/CTA";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Process from "@/components/sections/HowWeWork";
import Testimonials from "@/components/sections/Testimonials";
import Portfolio from "@/components/sections/PortfolioPreview";
import WebDevFAQ from "@/components/faqs/WebDevFAQ";

export default function WebDevPage() {
  return (
    <main className="bg-[#030712] text-white selection:bg-blue-600 overflow-x-hidden">
      
     <section className="relative w-full overflow-hidden">
          <div className="container-wide">
           <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
            <Image
              src="/home-hero.jpg"
              alt="Mesh Grid"
              fill
              sizes="100vw"
              priority // 🔥 PageSpeed boost: Hero image jaldi load hogi
              className="object-cover object-top opacity-35"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#030712]/40 to-[#030712]" />
          </div>
  
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/[0.05] blur-[120px] pointer-events-none" />
  
          <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-16 md:pt-40 text-center md:text-left">
            <div className="max-w-5xl">
              <div className="flex items-center gap-2.5 mb-8 w-fit px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-md mx-auto md:mx-0">
                <Flame size={12} className="text-blue-400 animate-pulse" />
              </div>
  
              <h1 className="text-6xl sm:text-8xl md:text-[100px] font-black tracking-tighter leading-[0.8] text-white mb-8">
                Web Devlopment {" "}
                <span className="bg-gradient-to-r from-[#00f2ff] via-[#0070ff] to-[#00f2ff] bg-[length:200%_auto] animate-gradient text-transparent bg-clip-text">
              
                </span>
              </h1>
              
             
            </div>
          </div>
  </div>
        </section>


      {/* 2. CORE STACK - Cleaned Logic */}
      <section className="relative py-24 2xl:py-40 px-6 overflow-hidden bg-[#030303]">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:32px_32px]" />
        </div>

        <div className="max-w-7xl 2xl:max-w-[1600px] mx-auto relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6 border-b border-white/5 pb-10">
             <div className="max-w-2xl">
                <div className="flex items-center gap-2 mb-3 bg-blue-500/10 w-fit px-3 py-1 rounded-full border border-blue-500/20">
                  <Code size={12} className="text-blue-400" />
                  <span className="text-[9px] 2xl:text-xs font-black tracking-[3px] text-blue-300 uppercase">Engineering Excellence</span>
                </div>
                <h2 className="text-5xl md:text-7xl 2xl:text-9xl font-black leading-[0.9] tracking-tighter text-white">
                  The Tech <br /> <span className="text-blue-600">Blueprint.</span>
                </h2>
             </div>
             <p className="text-zinc-500 font-bold text-lg md:text-xl 2xl:text-3xl max-w-xs 2xl:max-w-md leading-snug border-r-2 border-blue-600 pr-6 text-right md:text-left italic">
               "Bespoke code architectures designed for high-performance scaling."
             </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 2xl:gap-10">
            {[
              { title: "Custom WP Dev", desc: "Bespoke WordPress themes zero-bloat code ke sath. Hum templates nahi, systems build karte hain.", icon: <Layout size={24} /> },
              { title: "Next.js Apps", desc: "Ultra-fast React based applications jo speed aur SEO performance mein unbeatable hain.", icon: <Cpu size={24} /> },
              { title: "E-Com Scaling", desc: "High-conversion WooCommerce aur Shopify stores jo hazaron transactions handle kar sakein.", icon: <ShoppingBag size={24} /> },
              { title: "API Integration", desc: "Third-party services aur custom API development for seamless data synchronization.", icon: <Database size={24} /> },
              { title: "Headless CMS", desc: "Decoupled architecture for maximum security and lightning-fast frontend delivery.", icon: <Layers size={24} /> },
              { title: "Performance Ops", desc: "Server-side optimization aur database tuning taake load time < 1s rahe.", icon: <Zap size={24} /> }
            ].map((s, i) => (
              <motion.div 
                key={i} 
                whileHover={{ y: -10 }}
                className="group relative bg-[#070707] p-10 2xl:p-16 rounded-[2.5rem] border border-white/5 hover:border-blue-500/40 transition-all duration-500"
              >
                <div className="relative z-10">
                  <div className="mb-6 w-12 h-12 2xl:w-20 2xl:h-20 bg-white/[0.03] rounded-xl flex items-center justify-center border border-white/10 group-hover:bg-blue-600/20 group-hover:text-blue-400 group-hover:border-blue-500/50 transition-all duration-500">
                    {s.icon}
                  </div>
                  <h3 className="text-2xl 2xl:text-4xl font-black uppercase italic mb-3 group-hover:text-blue-400 transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-zinc-500 group-hover:text-zinc-300 text-sm 2xl:text-xl font-medium leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Portfolio />

      {/* 3. GROWTH BLUEPRINT - Content Preservation Promise */}
      <section className="relative py-24 2xl:py-40 px-6 overflow-hidden bg-[#030303]">
        <div className="absolute inset-0 z-0 opacity-[0.02] bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:40px_40px]" />

        <div className="max-w-7xl 2xl:max-w-[1600px] mx-auto relative z-10">
          <div className="text-center mb-20">
            <div className="flex items-center gap-2 mb-4 bg-blue-500/10 w-fit px-4 py-1.5 rounded-full border border-blue-500/20 mx-auto">
              <Terminal size={14} className="text-blue-400" />
              <span className="text-[10px] 2xl:text-xs font-black tracking-[4px] uppercase text-blue-300">Strategic Content Engineering</span>
            </div>
            <h2 className="text-5xl md:text-8xl 2xl:text-[130px] font-black uppercase italic leading-[0.85] tracking-tighter text-white mb-8">
              The Growth <br /> <span className="text-blue-600">Blueprint.</span>
            </h2>
            <p className="text-zinc-500 font-bold text-xl md:text-2xl 2xl:text-4xl italic max-w-3xl 2xl:max-w-5xl mx-auto">
              "Converting complex algorithms into high-ranking content systems that drive organic revenue."
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 2xl:gap-8">
            {[
              { step: "01", title: "Semantic Analysis", keywords: "LSI Keywords, User Intent, Entity SEO", desc: "Hum sirf high-volume keywords nahi dhundte, hum user ki psychology analyze karte hain." },
              { step: "02", title: "Data Structure", keywords: "Schema Markup, JSON-LD, Silo Architecture", desc: "Aapke content ka structure aisa banate hain jo Google bots ke liye 100% readable ho." },
              { step: "03", title: "Authority Flow", keywords: "Internal Linking, E-E-A-T, Topical Map", desc: "Topical Authority build karne ke liye content clusters engineer karte hain." },
              { step: "04", title: "Conversion Ops", keywords: "CTR Optimization, UX Writing, Lead Gen", desc: "Ranking ko revenue mein badalne ke liye hum performance-driven copywriting karte hain." }
            ].map((p, i) => (
              <motion.div 
                key={i} 
                whileHover={{ scale: 1.02 }}
                className="group relative bg-[#080808] p-8 2xl:p-12 rounded-[3rem] border border-white/5 hover:border-blue-500/40 transition-all duration-500 flex flex-col h-full"
              >
                <div className="flex justify-between items-start mb-10">
                  <span className="text-5xl 2xl:text-7xl font-black text-white/5 group-hover:text-blue-600/20 italic">
                    {p.step}
                  </span>
                  <ChevronRight size={16} className="text-zinc-600 group-hover:text-blue-400" />
                </div>

                <div className="space-y-4 flex-grow">
                  <h3 className="text-2xl 2xl:text-4xl font-black uppercase italic text-white group-hover:text-blue-500 transition-colors">
                    {p.title}
                  </h3>
                  
                  <div className="bg-blue-600/5 border border-blue-600/10 rounded-xl p-3 2xl:p-5">
                    <p className="text-[10px] 2xl:text-sm font-black text-blue-400 uppercase tracking-widest mb-1 italic">Focus Keywords:</p>
                    <p className="text-[11px] 2xl:text-lg text-zinc-400 font-medium leading-relaxed">
                      {p.keywords}
                    </p>
                  </div>

                  <p className="text-zinc-500 2xl:text-xl text-sm font-medium leading-relaxed pt-2">
                    {p.desc}
                  </p>
                </div>

                <div className="mt-8 h-1 w-full bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 1.5, delay: i * 0.2 }}
                    className="h-full bg-blue-600/40" 
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Process />
      <Stats />
      <WhyChooseUs />
      <Testimonials />
      <WebDevFAQ />
      <CTA />
    </main>
  );
}