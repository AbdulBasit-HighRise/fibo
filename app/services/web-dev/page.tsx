"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Sparkles, Layout, Flame, Cpu, ShoppingBag,
  Database, Layers, Zap, Code, Terminal, ChevronRight ,Monitor, Building2, RefreshCw, Wrench
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
import IndustryExpertise from "@/components/IndustryExpertise";

export default function WebDevPage() {
  return (
    <main className="bg-[#030712] text-white selection:bg-blue-600 overflow-x-hidden">

      {/* 🎯 SYNCED WEB DEVELOPMENT HERO SECTION: Formatted exactly on top of your verified About Us master framework */}
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
                <span className="text-[10px] font-black tracking-[4px] text-blue-300 uppercase">Engineering</span>
              </div>

              {/* Main Typography Block with Tight Line Height - Fixed Spelling "Development" */}
              <h1 className="text-6xl sm:text-8xl md:text-[100px] font-black tracking-tighter leading-[0.8] text-white mb-8 normal-case">
                Website Development  {" "}
                <span className="uppercase bg-gradient-to-r from-[#00f2ff] via-[#0070ff] to-[#00f2ff] bg-[length:200%_auto] animate-gradient text-transparent bg-clip-text">
                  Agency.
                </span>
              </h1>

              {/* Description Paragraph - Aligned perfectly with global layout standards */}
<p className="text-white text-sm md:text-base lg:text-[17px] 2xl:text-xl 3xl:text-2xl font-medium leading-relaxed max-w-xl 2xl:max-w-3xl mx-auto lg:mx-0 opacity-80">
  Professional website development agency delivering responsive, user-friendly, and high-performing websites that help businesses grow, attract customers, and increase online visibility.      
</p>
            </div>
          </div>
        </div>
      </section>


{/* 🎯 SEAMLESS CENTERED CONTENT + LOGOS STRIP BOTTOM */}
<section className="relative py-15 md:py-25 px-3 overflow-hidden bg-[#020617]">
  
  {/* Premium Ambient Glow centered right behind the layout */}
  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-blue-500/[0.03] blur-[150px] pointer-events-none z-0" />

  <div className="max-w-5xl mx-auto relative z-10">
    <div className="flex flex-col items-center text-center">
      
      {/* 1. Mini Badge */}
      <div className="flex items-center gap-2 mb-6 bg-blue-500/10 w-fit px-3 py-1 rounded-full border border-blue-500/20">
        <span className="text-[10px] 2xl:text-xs font-black tracking-[3px] text-blue-300 uppercase">
          Digital Deployment
        </span>
      </div>

      {/* 2. Focused Main Heading */}
      <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tighter text-white mb-8 max-w-4xl">
        Experience  Web Design & Development Services!{" "}
         
        <span className="bg-gradient-to-r from-[#00f2ff] via-[#0070ff] to-[#00f2ff] bg-[length:200%_auto] animate-gradient text-transparent bg-clip-text uppercase">
         
        </span>
      </h2>

      {/* 3. Perfectly Bounded Centered Paragraphs */}
      <div className="space-y-6 text-zinc-400 text-base md:text-lg lg:text-xl font-medium leading-relaxed max-w-3xl mb-14">
        <p>
          Our web design and development services help businesses of all sizes build a commanding online presence with modern, intuitive, and easy-to-use websites. We engineer digital assets that look stunningly professional, load instantly, and perform smoothly across all device metrics.
        </p>
        <p>
          Our core team focuses heavily on understanding your strategic business goals, deploying customized structural frameworks that actively attract high-intent customers and fuel online scaling. From creative high-end designs to user-friendly UI layouts, every ecosystem is engineered to maximize visitor experience.
        </p>
        <div className="pt-2">
          <p className="text-white/90 font-semibold italic border-t border-b border-white/5 py-4 max-w-2xl mx-auto">
            Whether you own a high-growth small business or a large-scale enterprise, we provide simple, reliable, and high-performance web solutions designed to anchor your long-term market success.
          </p>
        </div>
      </div>

      {/* 4. PICTURE BLOCK: Sitting exactly underneath the content with perfect width */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative w-full max-w-4xl py-6 px-4 md:px-8 rounded-[1rem] overflow-hidden border border-white/5 bg-[#070707]/40 backdrop-blur-sm shadow-2xl flex items-center justify-center"
      >
        {/* Soft edge fade overlays to make the graphic pop on dark theme */}
        <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-[#020617]/20 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-[#020617]/20 to-transparent z-10 pointer-events-none" />
        
        <div className="relative w-full aspect-[8/1.5] md:aspect-[10/1.5]">
          <Image
            src="/web-dev logos.jpg" // 🔥 Aapki logos strip ka image source path
            alt="Supported Platforms Stack"
            fill
            priority
            sizes="(max-w-4xl) 100vw, 100vw"
            className="object-contain opacity-90 hover:opacity-100 transition-opacity duration-300"
          />
        </div>
      </motion.div>

    </div>
  </div>
</section>

     {/* 2. CORE STACK - Updated with Exact Custom Core Services */}
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
      <p className="text-white-500 font-bold text-lg md:text-xl lg:text-[22px] 2xl:text-2xl 3xl:text-3xl italic leading-snug max-w-xs md:max-w-md 2xl:max-w-lg border-r-2 md:border-r-0 md:border-l-2 border-blue-600 pr-6 md:pr-0 md:pl-6 text-right md:text-left antialiased">
  "Bespoke code architectures designed for high-performance scaling."
</p>
    </div>

    {/* 🎯 Grid Wrapper mapped with the 6 requested core services */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 2xl:gap-10">
      {[
        { title: "Custom Website", desc: "Bespoke digital architecture built from scratch. High performance solutions tailored precisely to your functional scale.", icon: <Monitor size={24} /> },
        { title: "eCommerce Store", desc: "High-converting WooCommerce, Shopify, and specialized headless commerce systems built for heavy transaction volume.", icon: <ShoppingBag size={24} /> },
        { title: "Corporate Website", desc: "Enterprise-grade elite digital platforms designed to command market authority, speed, and seamless credibility.", icon: <Building2 size={24} /> },
        { title: "CMS Websites", desc: "Scalable content systems giving you complete modular control without compromising speed, layout, or structural security.", icon: <Database size={24} /> },
        { title: "Website Redesign", desc: "Transform legacy architectures into modern, ultra-fast interfaces optimized for maximum UX conversions and core web vitals.", icon: <RefreshCw size={24} /> },
        { title: "Maintenance & Support", desc: "Proactive server monitoring, dependency updates, and database tuning to keep your systems operational 24/7.", icon: <Wrench size={24} /> }
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
       <p className="text-zinc-500 group-hover:text-zinc-300 text-sm md:text-base lg:text-[15px] 2xl:text-base 3xl:text-lg font-medium leading-relaxed max-w-xl 2xl:max-w-2xl opacity-90 transition-colors duration-300 antialiased">
  {s.desc}
</p>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>
      <Stats />

      <Portfolio />
      <Process />
      <IndustryExpertise />
      <WhyChooseUs />
      <Testimonials />


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
           <p className="text-white-500 font-bold text-xl md:text-2xl lg:text-[26px] 2xl:text-3xl 3xl:text-4xl italic leading-tight max-w-3xl 2xl:max-w-5xl mx-auto antialiased tracking-wide">
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

                <div className="bg-blue-600/5 border border-blue-600/10 rounded-xl p-3 lg:p-4 2xl:p-5">
  {/* Focus Keywords Label */}
  <p className="text-[10px] md:text-[11px] lg:text-xs 2xl:text-sm font-black text-blue-400 uppercase tracking-widest mb-1 italic antialiased leading-none">
    Focus Keywords:
  </p>
  
  {/* Dynamic Keywords Text */}
  <p className="text-[11px] sm:text-xs md:text-sm lg:text-[15px] 2xl:text-base 3xl:text-lg text-zinc-400 font-medium leading-relaxed antialiased">
    {p.keywords}
  </p>
</div>

                 <p className="text-zinc-500 text-sm md:text-base lg:text-[15px] 2xl:text-base 3xl:text-lg font-medium leading-relaxed pt-2 max-w-xl 2xl:max-w-2xl antialiased">
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

      <WebDevFAQ />
      <CTA />
    </main>
  );
}