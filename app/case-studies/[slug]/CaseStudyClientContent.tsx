"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion"; // 👈 Framer-motion features properly imported
import { ArrowLeft, Flame, Globe, Tag, MapPin, Link2, X, Eye } from "lucide-react";
import { CaseStudy } from "@/lib/caseStudiesData";

interface CaseStudyProps {
  project: CaseStudy;
}

export default function CaseStudyClientContent({ project }: CaseStudyProps) {
  // 🔗 LOCAL STATE: Image Lightbox Popup Control
  const [activeImg, setActiveImg] = useState<string | null>(null);

  return (
    <main className="bg-[#111827] text-zinc-100 min-h-screen antialiased overflow-x-hidden pt-0 selection:bg-blue-600">

      {/* ========================================================
          🔥 1. HERO SECTION (Background Color: #111827)
          ======================================================== */}
      <section className="relative w-full overflow-hidden bg-[#111827] border-b border-white/[0.02]">
        <div className="w-full">
          {/* Background Image Container */}
          <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
            <Image
              src="/home-hero.jpg"
              alt="Mesh Grid"
              fill
              sizes="100vw"
              priority
              className="object-cover object-top opacity-20 mix-blend-overlay"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#111827]/40 to-[#111827]" />
          </div>

          {/* Ambient Blur Dot */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/[0.08] blur-[140px] pointer-events-none" />

          {/* Full Sized Content Wrapper */}
          <div className="relative z-10 w-full mx-auto text-center lg:text-left px-4 sm:px-8 md:px-12 2xl:px-20 pt-32 pb-16 md:pt-24 md:pb-24 lg:max-w-full lg:pt-40 lg:pb-20 lg:pl-40 2xl:mx-0 2xl:max-w-[1500px] 2xl:pt-48 2xl:pl-80">
            <div className="max-w-5xl animate-fadeIn space-y-2">

              {/* Back to Case Studies Button Styled Inline */}
              <Link
                href="/case-studies"
                className="group inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[3px] text-zinc-400 hover:text-white transition-all duration-300 mb-8"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1.5 transition-transform duration-300" />
                Back to Case Study
              </Link>

              {/* Glassmorphism Badge Container (Strictly Blue Theme) */}
              <div className="flex items-center gap-2.5 mb-8 w-fit px-4 py-2 rounded-full border backdrop-blur-md mx-auto lg:mx-0 bg-blue-500/10 border-blue-500/20 text-blue-300">
                <Flame size={12} className="animate-pulse text-blue-400" />
                <span className="text-[10px] font-black tracking-[4px] uppercase">
                  {project.category === 'seo' ? 'Case Study / SEO' : 'Case Study / Social Media Marketing'}
                </span>
              </div>

              {/* Main Typography Block */}
              <h1 className="text-[3rem] md:text-[3.2rem] lg:text-[3.8rem] 2xl:text-[5rem] font-black tracking-tighter leading-none text-white mb-8 uppercase">
                CASE{" "}
                <span className="bg-gradient-to-r from-[#00f2ff] via-[#0070ff] to-[#00f2ff] bg-[length:200%_auto] animate-gradient text-transparent bg-clip-text">
                  STUDY.
                </span>
              </h1>

            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          📊 2. PROJECT INTRO SECTION (Background Color: #1E2939)
          ======================================================== */}
      <section className="w-full bg-[#1E2939] py-20 border-b border-white/[0.02]">
        <div className="max-w-5xl lg:max-w-6xl xl:max-w-7xl 2xl:max-w-[1500px] mx-auto px-4 sm:px-8 md:px-12 2xl:px-20 space-y-16">

          {/* TOP BLOCK: Picture and Main Title Side-by-Side */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center animate-fadeIn">

            {/* LEFT: Large Punchy Typography & Description */}
            <div className="order-2 lg:order-1 lg:col-span-7 space-y-6">
              <h2
                style={{ textTransform: 'none' }}
                className="text-[2.0rem] md:text-[2.5rem] lg:text-[2.5rem] 2xl:text-[3.0rem] font-black tracking-tight leading-[1.1] text-white"
              >
                {project.description}
              </h2>
              <div className="h-1 w-24 bg-blue-500" />
              <p className="text-zinc-300 text-base md:text-lg lg:text-[19px] 2xl:text-xl font-medium leading-relaxed max-w-2xl">
                Transforming a fragmented digital presence into a high-yielding, conversion-focused revenue engine through data-driven technical optimization.
              </p>
            </div>

            {/* RIGHT: Image Adjusted Right Next to the Main Title */}
            <div className="order-1 lg:order-2 lg:col-span-5 w-full">
              <div className="relative aspect-[16/11] sm:aspect-[4/3] md:aspect-[16/10] lg:aspect-[4/3] w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-zinc-900 group">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-[1.02]"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>

          </div>

          {/* MIDDLE BLOCK: Premium Performance Metrics Strip */}
          <div className="flex flex-nowrap items-center justify-between gap-4 md:gap-8 pt-10 border-t border-white/[0.06] animate-fadeIn delay-100 w-full overflow-x-auto sm:overflow-visible scrollbar-none">
            {project.metrics.map((metric, i) => (
              <div key={i} className="flex flex-col border-l border-zinc-700 pl-4 md:pl-5 hover:border-zinc-400 transition-colors duration-300 flex-1 min-w-[100px] sm:min-w-0">
                <span className={`text-xl sm:text-4xl md:text-4xl lg:text-4xl font-black tracking-tighter leading-none ${metric.highlight ? 'text-blue-500' : 'text-white'
                  }`}>
                  {metric.value}
                </span>
                <span className="text-[10px] font-bold uppercase tracking-[2px] text-zinc-400 mt-3 block leading-tight">
                  {metric.label}
                </span>
              </div>
            ))}
          </div>

          {/* 📊 BOTTOM BLOCK: Fully Dynamic Blueprints & Overview Card */}
          <div className="w-full bg-[#111827] border border-white/[0.08] rounded-2xl p-6 md:p-8 relative overflow-hidden shadow-2xl group animate-slideUp">
            <div className="absolute top-0 left-0 h-1 w-full bg-blue-500" />

            <div className="mb-6 border-b border-white/[0.04] pb-4">
              <h3 className="text-lg font-black uppercase tracking-wider text-zinc-300">
                Project Blueprints & Overview
              </h3>
            </div>

            {/* Grid Content */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 items-center text-left">

              {/* 1. Dynamic Category */}
              <div className="flex items-center gap-3 md:gap-4">
                <div className="p-2.5 md:p-3 rounded-xl bg-[#1E2939] border border-white/5 text-blue-500 shrink-0">
                  <Tag size={16} className="md:w-[18px] md:h-[18px]" />
                </div>
                <div className="min-w-0">
                  <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-wider text-zinc-500 block mb-0.5">Category</span>
                  <span className="text-sm md:text-base font-black text-zinc-200 block truncate">
                    {project.displayCategory || (project.category === 'seo' ? 'Local SEO' : 'Paid Social')}
                  </span>
                </div>
              </div>

              {/* 2. Dynamic Client Name */}
              <div className="flex items-center gap-3 md:gap-4">
                <div className="p-2.5 md:p-3 rounded-xl bg-[#1E2939] border border-white/5 text-blue-500 shrink-0">
                  <Globe size={16} className="md:w-[18px] md:h-[18px]" />
                </div>
                <div className="min-w-0">
                  <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-wider text-zinc-500 block mb-0.5">Client</span>
                  <span className="text-sm md:text-base font-black text-zinc-200 truncate block">
                    {project.clientName || project.title}
                  </span>
                </div>
              </div>

              {/* 3. Dynamic Location */}
              <div className="flex items-center gap-3 md:gap-4">
                <div className="p-2.5 md:p-3 rounded-xl bg-[#1E2939] border border-white/5 text-blue-500 shrink-0">
                  <MapPin size={16} className="md:w-[18px] md:h-[18px]" />
                </div>
                <div className="min-w-0">
                  <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-wider text-zinc-500 block mb-0.5">Location</span>
                  <span className="text-sm md:text-base font-black text-zinc-200 block truncate">
                    {project.location || 'Australia / Global'}
                  </span>
                </div>
              </div>

              {/* 4. Dynamic Website URL */}
              <div className="flex items-center gap-3 md:gap-4">
                <div className="p-2.5 md:p-3 rounded-xl bg-[#1E2939] border border-white/5 text-blue-500 shrink-0">
                  <Link2 size={16} className="md:w-[18px] md:h-[18px]" />
                </div>
                <div className="min-w-0">
                  <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-wider text-zinc-500 block mb-0.5">Website</span>
                  <span className="text-sm md:text-base font-black text-zinc-200 truncate block">
                    {project.websiteName || 'Multiple Webstacks'}
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ========================================================
          🔄 3. DYNAMIC SECTIONS: Loop Alternating Color Logic
          ======================================================== */}
      <div className="w-full">
        {project.sections.map((section, idx) => {
          const currentBg = idx % 2 === 0 ? 'bg-[#111827]' : 'bg-[#1E2939]';

          return (
            <section
              key={section.id}
              className={`w-full py-24 border-b border-white/[0.02] transition-all duration-700 ${currentBg}`}
            >
              <div className="max-w-5xl lg:max-w-6xl xl:max-w-7xl 2xl:max-w-[1500px] mx-auto px-4 sm:px-8 md:px-12 2xl:px-20 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

                {/* Left Side Header */}
                <div className="lg:col-span-4 lg:sticky lg:top-28 animate-fadeIn">
                  <h3 className="text-[2.3rem] md:text-[2.5rem] lg:text-[2.5rem] 2xl:text-[3.2rem] font-black tracking-tighter text-white">
                    {section.title}
                  </h3>
                </div>

                {/* Right Side Content Canvas */}
                <div className="lg:col-span-8 space-y-6 animate-fadeIn">
                  {section.paragraphs.map((p, pIdx) => (
                    <p key={pIdx} className="text-white text-[16px] md:text-base lg:text-[17px] 2xl:text-xl 3xl:text-2xl font-medium leading-relaxed">
                      {p}
                    </p>
                  ))}

                  {section.features && (
                    <div className="space-y-4 pt-4">
                      {section.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-3 group py-1.5 border-b border-white/[0.02] hover:border-white/[0.08] transition-colors duration-300">
                          <div className="mt-2 w-1.5 h-1.5 rounded-full shrink-0 bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.6)]" />
                          <p className="text-white text-[16px] md:text-base lg:text-[17px] 2xl:text-xl 3xl:text-2xl font-medium group-hover:text-white transition-colors duration-300">
                            {feat}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

              </div>
            </section>
          );
        })}
      </div>

      {/* ========================================================
          🏆 4. RESULTS & PROOF CANVAS 
          ======================================================== */}
      <section className={`w-full py-24 border-b border-white/[0.02] transition-all duration-700 ${project.sections.length % 2 === 0 ? 'bg-[#111827]' : 'bg-[#1E2939]'
        }`}>
        <div className="max-w-5xl lg:max-w-6xl xl:max-w-7xl 2xl:max-w-[1500px] mx-auto px-4 sm:px-8 md:px-12 2xl:px-20 space-y-20">

          {/* 🎯 PART 1: LIVE PROOF & IMAGES LAYOUT */}
          {project.proof && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start border-b border-white/[0.04] pb-16">

              {/* 📐 LEFT SIDE: Dynamic Alignment Heading */}
              <div className="lg:col-span-4 lg:sticky lg:top-28 animate-fadeIn space-y-4">
                <h3 className="text-[2.3rem] md:text-[2.5rem] lg:text-[2.5rem] 2xl:text-[3.2rem] font-black tracking-tighter text-white">
                  Live Proof & Verification
                </h3>
                <p className="text-zinc-400 text-sm md:text-base font-medium leading-relaxed max-w-sm">
                  Real-time metrics, analytics dashboards, and documented revenue generation milestones directly from the live campaigns.
                </p>
              </div>

              {/* 🖼️ RIGHT SIDE: Compact & Clean Responsive Images */}
              <div className="lg:col-span-8 animate-fadeIn">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
                  {project.proof.images.map((img, i) => (
                    <div key={i} className="space-y-3 group">

                      {/* Image Container Box (Clickable for Popup) */}
                      <div
                        onClick={() => setActiveImg(img.src)}
                        className="relative w-full h-[220px] md:h-[240px] 2xl:h-[280px] rounded-2xl overflow-hidden border border-white/10 bg-[#111827]/80 shadow-xl transition-all duration-500 hover:border-blue-500/50 hover:scale-[1.02] flex items-center justify-center p-3 cursor-pointer group/card"
                      >
                        <Image
                          src={img.src}
                          alt={img.alt}
                          fill
                          sizes="(max-width: 768px) 100vw, 40vw"
                          className="object-contain transition-transform duration-700 group-hover/card:scale-[1.03]"
                        />

                        {/* Hover Overlay Visual Hint */}
                        <div className="absolute inset-0 bg-blue-900/20 backdrop-blur-sm opacity-0 group-hover/card:opacity-100 transition-all duration-300 flex items-center justify-center z-20">
                          <div className="bg-white/10 border border-white/20 p-3 rounded-full text-white backdrop-blur-md transform translate-y-4 group-hover/card:translate-y-0 transition-all duration-300">
                            <Eye size={20} className="text-white" />
                          </div>
                        </div>
                      </div>

                      {/* Optional Caption text underneath image */}
                      {img.alt && (
                        <span className="text-[11px] font-bold uppercase tracking-[1px] text-zinc-500 block px-1 group-hover:text-zinc-300 transition-colors">
                          {img.alt}
                        </span>
                      )}

                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* 🎯 PART 2: RESULTS DYNAMIC CARDS STRIP */}
          {project.results?.cards && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-slideUp">
              {project.results.cards.map((card, idx) => (
                <div
                  key={idx}
                  className="p-10 rounded-2xl bg-[#1E2939] border border-white/[0.05] flex flex-col justify-between space-y-8 transition-all duration-300 hover:border-zinc-700 hover:scale-[1.01]"
                >
                  <h4 className={`text-6xl md:text-7xl font-black tracking-tighter ${card.isEmerald ? 'text-emerald-500' : 'text-blue-500'}`}>
                    {card.value}
                  </h4>
                  <div>
                    <p className="text-white text-[16px] md:text-base lg:text-[17px] 2xl:text-xl 3xl:text-2xl font-medium tracking-[2px] mb-2">
                      {card.label}
                    </p>
                    <p
                      className="text-white text-[16px] md:text-base lg:text-[17px] 2xl:text-xl 3xl:text-2xl font-medium leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: card.desc }}
                    />
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>
      </section>

      {/* ========================================================
          🌟 ULTIMATE SMART GLASSMORPHISM LIGHTBOX MODAL (POPUP)
          ======================================================== */}
      {/* ========================================================
    🌟 ULTIMATE SMART GLASSMORPHISM LIGHTBOX MODAL (POPUP)
    ======================================================== */}
      <AnimatePresence>
        {activeImg && (
          <div className="fixed inset-0 z-[99999] flex flex-col items-center justify-center p-4 md:p-6 pointer-events-auto">

            {/* Backdrop Dark Mask */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveImg(null)}
              className="absolute inset-0 bg-black/95 backdrop-blur-md cursor-zoom-out"
            />

            {/* Animated Photo Box Content Display */}
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ type: "spring", damping: 28, stiffness: 320 }}
              className="relative w-full max-w-5xl h-[60vh] md:h-[80vh] flex items-center justify-center z-10 select-none pointer-events-none mt-4 md:mt-0"
            >
              <Image
                src={activeImg}
                alt="Enlarged Proof Dashboard View"
                fill
                priority
                sizes="(max-width: 1280px) 100vw, 85vw"
                className="object-contain drop-shadow-[0_0_50px_rgba(59,130,246,0.25)]"
              />
            </motion.div>

            {/* 🎯 FIXED CLOSE BUTTON: Mobile pr picture k nichy center me, desktop pr top-right pr */}
            <button
              onClick={() => setActiveImg(null)}
              className="absolute bottom-8 left-1/2 -translate-x-1/2 md:bottom-auto md:left-auto md:translate-x-0 md:top-8 md:right-8 z-[100000] flex items-center gap-2 px-5 py-3 md:p-3 rounded-full bg-white/10 text-white hover:bg-white/20 border border-white/10 shadow-2xl backdrop-blur-md active:scale-95 transition-all cursor-pointer font-medium text-sm md:text-base"
              aria-label="Close Preview"
            >
              <X size={20} />
              <span className="block md:hidden tracking-wider uppercase text-[11px] font-bold">Close Preview</span>
            </button>

          </div>
        )}
      </AnimatePresence>

    </main>
  );
}

// Sub-Component for Clean Detail List
function DetailItem({ label, value, icon }: { label: string; value: string; icon: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between border-b border-white/[0.03] pb-3">
      <div className="flex items-center gap-3 text-zinc-500">
        {icon}
        <span className="text-[11px] font-medium uppercase tracking-wider">{label}:</span>
      </div>
      <span className="text-zinc-200 text-xs font-bold">{value}</span>
    </div>
  );
}