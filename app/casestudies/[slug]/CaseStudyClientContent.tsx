"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ShieldCheck, Layers, BarChart3, Zap } from "lucide-react";
import { CaseStudy } from "@/lib/caseStudiesData";

interface CaseStudyProps {
  project: CaseStudy;
}

export default function CaseStudyClientContent({ project }: CaseStudyProps) {
  // 🎯 Auto-detecting if this asset belongs to Paid Social or standard SEO
  const isSocial = project.isSocial || project.category === "social";

  return (
    <main className={`bg-[#030303] text-zinc-100 min-h-screen antialiased overflow-x-hidden pt-20 ${
      isSocial ? "selection:bg-pink-600" : "selection:bg-blue-600"
    }`}>
      
      {/* ========================================================
          📍 PREMIUM GLOBAL NAV BAR 
          ======================================================== */}
      <nav className="fixed top-0 inset-x-0 h-20 bg-[#030303]/70 backdrop-blur-xl border-b border-white/[0.04] z-50">
        <div className="max-w-6xl mx-auto h-full px-6 md:px-12 flex items-center justify-between">
          <Link 
            href="/casestudies" 
            className="group flex items-center gap-2 text-xs font-bold uppercase tracking-[3px] text-zinc-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back To Showcase
          </Link>
          <div className="flex items-center gap-2 shrink-0">
            <span className={`w-2 h-2 rounded-full animate-pulse ${isSocial ? 'bg-pink-500 shadow-[0_0_8px_rgba(236,72,153,0.6)]' : 'bg-emerald-500'}`} />
            <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase">System Active // 2026</span>
          </div>
        </div>
      </nav>

      {/* ========================================================
          🔥 SECTION 1: HERO SECTION 
          ======================================================== */}
      <section className="w-full bg-[#030303] py-16 md:py-24 relative">
        {/* Dynamic Glow: Social ke liye pink aura, SEO ke liye blue aura */}
        <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[500px] blur-[150px] pointer-events-none rounded-full ${
          isSocial ? "bg-pink-500/[0.05]" : "bg-blue-500/[0.04]"
        }`} />
        
        <div className="max-w-6xl mx-auto px-6 md:px-12 space-y-16 flex flex-col items-center">
          
          {/* Hero Media Canvas */}
          <div className="group relative aspect-[16/12] md:aspect-[21/21] w-full rounded-2xl overflow-hidden border border-white/[0.08] shadow-[0_25px_70px_-20px_rgba(0,0,0,0.8)] bg-zinc-950">
            <Image 
              src={project.image} 
              alt={project.title}
              fill
              priority
              className="object-cover object-center transition-transform duration-1000 group-hover:scale-[1.015]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#030303]/50 via-transparent to-transparent" />
          </div>

          {/* Centered Typography Matrix */}
          <div className="space-y-8 flex flex-col items-center text-center w-full">
            <div className="flex flex-col items-center gap-6">
              <span className={`text-[10px] font-black uppercase tracking-[4px] px-5 py-2 rounded-full border backdrop-blur-md ${
                isSocial 
                  ? 'text-pink-400 bg-pink-500/10 border-pink-500/20' 
                  : 'text-blue-400 bg-blue-500/10 border-blue-500/20'
              }`}>
                {project.category === 'seo' ? 'SEO Portfolio Case Study' : 'Social Paid Performance'}
              </span>

              <h1 className="text-[2.8rem] md:text-[3.5rem] lg:text-[4.5rem] 2xl:text-[5.5rem] font-black tracking-tighter text-white leading-[1] uppercase bg-gradient-to-b from-white via-zinc-200 to-zinc-500 bg-clip-text text-transparent max-w-5xl">
                {project.title}
              </h1>
            </div>

            <p className="text-zinc-300 text-[16px] md:text-lg lg:text-xl font-medium leading-relaxed max-w-4xl text-center">
              {project.description}
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================
          📊 SECTION 2: METRICS BAR (Centered Grid)
          ======================================================== */}
      <section className="w-full bg-[#020617] border-y border-white/[0.04] py-16 relative">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 md:gap-4 justify-items-center">
            {project.metrics.map((metric, i) => (
              <div 
                key={i} 
                className="space-y-3 flex flex-col items-center text-center w-full"
              >
                <span className={`text-5xl md:text-6xl font-black tracking-tight font-sans ${
                  metric.highlight 
                    ? isSocial
                      ? 'text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-rose-400 to-purple-400'
                      : 'text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400' 
                    : 'text-white'
                }`}>
                  {metric.value}
                </span>
                <p className="text-zinc-400 text-xs md:text-sm font-medium tracking-wide max-w-[200px]">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          🔄 SECTION 3+: DYNAMIC SECTIONS (PERFECTLY CENTERED)
          ======================================================== */}
      <div className="w-full">
        {project.sections.map((section, idx) => {
          const isMidnightBlue = idx % 2 === 0;

          return (
            <section 
              key={section.id}
              className={`w-full py-24 transition-all duration-300 border-b border-white/[0.03] flex flex-col items-center justify-center text-center ${
                isMidnightBlue ? 'bg-[#020617]' : 'bg-[#030303]'
              }`}
            >
              <div className="max-w-5xl mx-auto px-6 md:px-12 flex flex-col items-center justify-center space-y-12 w-full">
                
                {/* Center Heading Block */}
                <div className="flex flex-col items-center justify-center text-center space-y-4 w-full mx-auto">
                  <div className="flex items-center justify-center gap-3 mx-auto">
                    <span className={`text-[10px] font-mono font-bold tracking-wider px-3 py-1 rounded ${
                      isMidnightBlue 
                        ? isSocial ? 'bg-pink-500/20 text-pink-400' : 'bg-blue-500/20 text-blue-400' 
                        : 'bg-zinc-800 text-zinc-400'
                    }`}>
                      {section.id}
                    </span>
                    <span className={`text-[10px] font-black uppercase tracking-[3px] ${isSocial ? 'text-pink-400' : 'text-blue-400'}`}>
                      {section.tag}
                    </span>
                  </div>
                  
                  <h2 className="text-[2.3rem] md:text-[2.5rem] lg:text-[2.5rem] 2xl:text-[3.2rem] font-black text-white tracking-tight uppercase leading-[1.1] bg-gradient-to-r from-white via-zinc-100 to-zinc-400 bg-clip-text text-transparent text-center block mx-auto max-w-4xl">
                    {section.title}
                  </h2>
                  
                  {section.subtitle && (
                    <p className={`text-xs md:text-sm font-bold uppercase tracking-[4px] text-center w-full block ${isSocial ? 'text-pink-400' : 'text-blue-400'}`}>
                      {section.subtitle}
                    </p>
                  )}
                </div>

                {/* Content Body (Strictly Centered Stack) */}
                <div className="w-full flex flex-col items-center justify-center space-y-8 mx-auto">
                  <div className="space-y-6 max-w-4xl w-full flex flex-col items-center justify-center text-center mx-auto">
                    {section.paragraphs.map((p, pIndex) => (
                      <p key={pIndex} className={`text-center leading-relaxed block w-full mx-auto ${
                        pIndex === 0 ? "text-white text-lg md:text-xl font-semibold" : "text-zinc-400 text-base"
                      }`}>
                        {p}
                      </p>
                    ))}
                  </div>

                  {/* Features Grid (Perfect Center Alignment Inside Cards) */}
                  {section.features && section.features.length > 0 && (
                    <div className="flex flex-col items-center justify-center space-y-6 w-full pt-4 mx-auto">
                      {section.featuresHeader && (
                        <h4 className="text-[10px] font-black uppercase tracking-[3px] text-zinc-500 flex items-center justify-center gap-2 text-center w-full">
                          <Layers className="w-3.5 h-3.5" />
                          {section.featuresHeader}
                        </h4>
                      )}
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-3xl mx-auto justify-center items-center">
                        {section.features.map((feat, featIdx) => (
                          <div 
                            key={featIdx} 
                            className={`flex flex-col sm:flex-row items-center justify-center gap-3 p-5 rounded-2xl border transition-all duration-300 group text-center ${
                              isMidnightBlue 
                                ? `bg-[#030303]/40 border-white/[0.05] ${isSocial ? 'hover:border-pink-500/20' : 'hover:border-blue-500/20'}` 
                                : `bg-zinc-900/40 border-white/[0.05] ${isSocial ? 'hover:border-pink-500/20' : 'hover:border-blue-500/20'}`
                            }`}
                          >
                            <div className={`w-1.5 h-1.5 rounded-full shrink-0 ${
                              isSocial 
                                ? 'bg-pink-500 shadow-[0_0_10px_rgba(236,72,153,0.6)]' 
                                : 'bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.6)]'
                            }`} />
                            <span className="text-zinc-300 group-hover:text-white text-sm font-medium transition-colors text-center">
                              {feat}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Centered Conclusion Label */}
                  {section.conclusion && (
                    <div className="pt-4 w-full flex justify-center items-center mx-auto">
                      <p className="text-zinc-500 text-xs font-mono tracking-wide text-center px-6 py-2 border-y border-white/[0.03] max-w-2xl block mx-auto">
                        // {section.conclusion}
                      </p>
                    </div>
                  )}
                </div>

              </div>
            </section>
          );
        })}
      </div>

      {/* ========================================================
          📈 SECTION 4: IMPACT & RESULTS (STRICT CENTER)
          ======================================================== */}
      <section className="w-full bg-[#030303] py-24 relative border-b border-white/[0.03]">
        <div className="max-w-6xl mx-auto px-6 md:px-12 flex flex-col items-center space-y-16">
          
          <div className="flex flex-col items-center text-center space-y-4 max-w-4xl">
            <span className={`text-[10px] font-black uppercase tracking-[3px] flex items-center gap-2 ${isSocial ? 'text-pink-400' : 'text-emerald-400'}`}>
              <Zap className="w-3 h-3 animate-pulse" /> {project.results.id} / {project.results.tag}
            </span>
            <h2 className="text-[2.5rem] md:text-[3.5rem] lg:text-[4.5rem] font-black bg-gradient-to-r from-white via-zinc-100 to-zinc-500 bg-clip-text text-transparent uppercase leading-tight">
              {project.results.title}
            </h2>
            <p className="text-zinc-300 text-lg md:text-xl font-medium leading-relaxed text-center">
              {project.results.description}
            </p>
          </div>

          {/* Centered Data Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
            {project.results.cards.map((card, idx) => {
              // Paid social handles dynamic coloring based on config preferences
              const useEmeraldLayout = card.isEmerald;
              
              return (
                <div 
                  key={idx} 
                  className={`p-10 rounded-[2rem] border transition-all duration-500 flex flex-col items-center text-center space-y-6 bg-[#020617]/60 ${
                    useEmeraldLayout 
                      ? 'border-emerald-500/10 hover:border-emerald-500/30 shadow-[0_20px_50px_rgba(16,185,129,0.03)]' 
                      : isSocial 
                        ? 'border-pink-500/10 hover:border-pink-500/30 shadow-[0_20px_50px_rgba(236,72,153,0.03)]'
                        : 'border-blue-500/10 hover:border-blue-500/30 shadow-[0_20px_50px_rgba(59,130,246,0.03)]'
                  }`}
                >
                  <span className={`text-[9px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full border ${
                    useEmeraldLayout 
                      ? 'text-emerald-400 border-emerald-500/20 bg-emerald-500/5' 
                      : isSocial
                        ? 'text-pink-400 border-pink-500/20 bg-pink-500/5'
                        : 'text-blue-400 border-blue-500/20 bg-blue-500/5'
                  }`}>
                    {card.badge}
                  </span>
                  
                  <h3 className={`text-6xl md:text-7xl font-black tracking-tighter ${
                    useEmeraldLayout 
                      ? 'text-transparent bg-clip-text bg-gradient-to-b from-emerald-300 to-emerald-600' 
                      : isSocial
                        ? 'text-transparent bg-clip-text bg-gradient-to-b from-pink-300 to-pink-600'
                        : 'text-transparent bg-clip-text bg-gradient-to-b from-blue-300 to-blue-600'
                  }`}>
                    {card.value}
                  </h3>
                  
                  <div className="space-y-2">
                    <p className="text-white text-xs font-black uppercase tracking-[2px]">
                      {card.label}
                    </p>
                    <p className="text-zinc-400 text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: card.desc }} />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Centered Conclusion Text */}
          <div className="pt-16 border-t border-white/[0.06] w-full flex flex-col items-center space-y-8">
            <h3 className="text-xl font-black text-white uppercase tracking-tight flex items-center gap-3">
              <ShieldCheck className={`w-6 h-6 ${isSocial ? 'text-pink-400' : 'text-emerald-400'}`} />
              {project.results.conclusionTitle}
            </h3>
            
            <div className="max-w-4xl flex flex-col items-center space-y-6 text-center">
              {project.results.conclusionParagraphs.map((paragraph, cIdx) => (
                <p key={cIdx} className={`leading-relaxed ${
                  cIdx === project.results.conclusionParagraphs.length - 1 
                    ? isSocial
                      ? "text-white text-lg font-bold bg-pink-500/5 px-8 py-4 rounded-2xl border border-pink-500/10"
                      : "text-white text-lg font-bold bg-emerald-500/5 px-8 py-4 rounded-2xl border border-emerald-500/10" 
                    : "text-zinc-400 text-base"
                }`}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================
          📸 SECTION 5: SNAPSHOTS (CENTERED)
          ======================================================== */}
      {project.proof && project.proof.images.length > 0 && (
        <section className="w-full bg-[#020617] py-24 flex flex-col items-center">
          <div className="max-w-6xl mx-auto px-6 md:px-12 space-y-12 flex flex-col items-center">
            
            <div className="text-center space-y-3">
              <h4 className="text-[10px] font-black uppercase tracking-[4px] text-zinc-500">
                {project.proof.header}
              </h4>
              <p className="text-white text-xl md:text-2xl font-black uppercase">
                {project.proof.subheader}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full justify-center">
              {project.proof.images.map((img, i) => (
                <div key={i} className="flex flex-col items-center space-y-4 group w-full">
                  <div className="relative aspect-[16/11] w-full rounded-[2rem] overflow-hidden border border-white/[0.08] bg-zinc-950 shadow-2xl transition-all duration-500 group-hover:border-white/20">
                    <Image 
                      src={img.src} 
                      alt={img.alt}
                      fill
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  </div>
                  <p className="text-zinc-500 text-[11px] font-bold uppercase tracking-widest flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full ${
                      img.color === 'emerald' 
                        ? 'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]' 
                        : img.color === 'pink' 
                          ? 'bg-pink-500 shadow-[0_0_8px_rgba(236,72,153,0.5)]' 
                          : img.color === 'purple'
                            ? 'bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.5)]'
                            : 'bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.5)]'
                    }`} />
                    {img.caption}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </section>
      )}

    </main>
  );
}