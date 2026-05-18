"use client";
import React from "react";
import { motion } from "framer-motion";
import { 
  Search, 
  Link2, 
  FileCode2, 
  Globe2, 
  BarChart4, 
  LineChart, 
  Zap,
  Flame,
  ChevronRight
} from "lucide-react";
import Image from "next/image";

// Section Components
import Stats from "@/components/sections/Stats";
import CTA from "@/components/sections/CTA";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Portfolio from "@/components/sections/PortfolioPreview";
import Testimonials from "@/components/sections/Testimonials";
import AboutPreview from "@/components/sections/AboutPreview";
import Process from "@/components/sections/HowWeWork";
import SeoFAQ from "@/components/faqs/SeoFAQ";

export default function SEOPage() {
  return (
    <main className="bg-[#030712] text-white selection:bg-blue-600 overflow-x-hidden">
      
    {/* 🎯 SYNCED SEO HERO SECTION: Formatted exactly on top of your verified About Us master framework */}
<section className="relative w-full overflow-hidden bg-[#030712]">
  <div className="container-wide">
    
    {/* Background Image Container with Exact Matching Premium CSS */}
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

    {/* Ambient Blur Dot to lock the signature aesthetic */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/[0.05] blur-[120px] pointer-events-none" />

    {/* Full Sized Padded Content Wrapper - Exact global layout spacing matching About Us */}
    <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-16 md:pt-40 text-center md:text-left">
      <div className="max-w-5xl">
        
        {/* Glassmorphism Badge Container */}
        <div className="flex items-center gap-2.5 mb-8 w-fit px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-md mx-auto md:mx-0">
          <Flame size={12} className="text-blue-400 animate-pulse" />
          <span className="text-[10px] font-black tracking-[4px] text-blue-300 uppercase">Organic Growth</span>
        </div>

        {/* Main Typography Block with Tight Line Height */}
        <h1 className="text-6xl sm:text-8xl md:text-[100px] font-black tracking-tighter leading-[0.8] text-white mb-8 normal-case">
          SEO <br />
          <span className="uppercase bg-gradient-to-r from-[#00f2ff] via-[#0070ff] to-[#00f2ff] bg-[length:200%_auto] animate-gradient text-transparent bg-clip-text">
            Optimization.
          </span>
        </h1>

        {/* Description Paragraph - Aligned perfectly with global layout standards */}
     <p className="text-white text-sm md:text-base lg:text-[17px] 2xl:text-xl 3xl:text-2xl font-medium leading-relaxed max-w-xl 2xl:max-w-3xl mx-auto lg:mx-0 opacity-80">
  Dominate search rankings, capture high-intent organic traffic, and establish long-term digital authority with our advanced performance SEO frameworks.
</p>
      </div>
    </div>
  </div>
</section>

      <AboutPreview />

      {/* 4. STRATEGIC FOUNDATION (Exactly same content) */}
      <section className="relative py-24 2xl:py-40 px-6 overflow-hidden bg-[#030303]">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:32px_32px]" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.07)_0%,transparent:70%)]" />
        </div>

        <div className="max-w-7xl 2xl:max-w-[1600px] mx-auto relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6 border-b border-white/5 pb-10">
             <div className="max-w-2xl">
                <div className="flex items-center gap-2 mb-3 bg-blue-500/10 w-fit px-3 py-1 rounded-full border border-blue-500/20">
                  <Zap size={12} className="text-blue-400" />
                  <span className="text-[9px] 2xl:text-xs font-black uppercase tracking-[3px] text-blue-300">Engineered Ranking</span>
                </div>
                <h2 className="text-5xl md:text-7xl 2xl:text-9xl font-black uppercase italic leading-[0.9] tracking-tighter text-white">
                  Strategic <br /> <span className="text-blue-600">Foundation.</span>
                </h2>
             </div>
             <p className="text-zinc-500 font-bold text-lg md:text-xl 2xl:text-3xl italic max-w-xs 2xl:max-w-md leading-snug border-r-2 border-blue-600 pr-6 text-right md:text-left">
               "Systems that force search engines to rank you #1."
             </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 2xl:gap-10">
            {[
              { title: "Technical Audit", desc: "Crawlability & Core Web Vitals code-level analysis.", icon: <FileCode2 size={24} /> },
              { title: "Keyword Intel", desc: "High-intent mapping targeting direct revenue leads.", icon: <Search size={24} /> },
              { title: "Authority Links", desc: "High-DR niche relevant backlink engineering.", icon: <Link2 size={24} /> },
              { title: "Local Domination", desc: "GMB optimization for local search dominance.", icon: <Globe2 size={24} /> },
              { title: "Content Engine", desc: "Semantic writing for AI-driven search algorithms.", icon: <BarChart4 size={24} /> },
              { title: "ROI Analytics", desc: "Deep conversion tracking & transparent reporting.", icon: <LineChart size={24} /> }
            ].map((s, i) => (
              <motion.div 
                key={i} 
                whileHover={{ y: -10 }}
                className="group relative bg-[#070707] p-10 2xl:p-16 rounded-[2.5rem] border border-white/5 hover:border-blue-500/40 transition-all duration-500"
              >
                <div className="absolute inset-0 bg-blue-600/[0.02] opacity-0 group-hover:opacity-100 transition-opacity rounded-[2.5rem]" />
                <div className="relative z-10">
                  <div className="mb-6 w-12 h-12 2xl:w-20 2xl:h-20 bg-white/[0.03] rounded-xl flex items-center justify-center border border-white/10 group-hover:bg-blue-600/20 group-hover:text-blue-400 group-hover:border-blue-500/50 transition-all duration-500">
                    <div className="text-blue-400">{s.icon}</div>
                  </div>
                  <h3 className="text-2xl 2xl:text-4xl font-black uppercase italic mb-3 leading-tight group-hover:text-blue-400 transition-colors tracking-tight">
                    {s.title}
                  </h3>
                  <p className="text-zinc-500 group-hover:text-zinc-300 text-sm 2xl:text-xl font-medium leading-relaxed transition-colors">
                    {s.desc}
                  </p>
                  <div className="mt-8 flex items-center gap-2 text-[8px] 2xl:text-xs font-black uppercase tracking-widest text-zinc-700 group-hover:text-blue-400/60 transition-colors">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-pulse" />
                    Rank Verified
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Portfolio />

      {/* 6. PRODUCTION LINE (PROCESS) */}
      <section className="bg-blue-600 text-black py-24 2xl:py-40 px-8 rounded-[4.5rem] mx-4 my-20 shadow-xl overflow-hidden relative">
        <div className="max-w-7xl 2xl:max-w-[1600px] mx-auto relative z-10">
          <h2 className="text-5xl md:text-7xl 2xl:text-9xl font-black uppercase italic tracking-tighter mb-16 text-center">The Production Line</h2>
          <div className="grid md:grid-cols-4 gap-8 2xl:gap-16">
            {[
              { step: "01", title: "Technical Audit", desc: "Identifying bottlenecks in your code." },
              { step: "02", title: "Strategy Phase", desc: "Mapping keywords to revenue goals." },
              { step: "03", title: "Execution", desc: "On-page and Off-page deployment." },
              { step: "04", title: "Scale", desc: "Monitoring and continuous growth." },
            ].map((p, i) => (
              <div key={i} className="border-t-4 border-black pt-8">
                <span className="text-sm 2xl:text-xl font-black uppercase tracking-widest">{p.step} // Phase</span>
                <h3 className="text-2xl 2xl:text-4xl font-black uppercase italic mt-4">{p.title}</h3>
                <p className="font-bold 2xl:text-2xl opacity-70 mt-2 leading-tight">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Process />
      <WhyChooseUs />
      <Stats />
      <Testimonials />
      <SeoFAQ />
      <CTA />
    </main>
  );
}