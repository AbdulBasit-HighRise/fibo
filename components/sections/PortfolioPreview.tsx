"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Cpu, BarChart3, Layers, Blocks } from "lucide-react";

const bentoProjects = [
  {
    id: "01",
    title: "SaaS Growth Engine",
    category: "Web Engineering",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600", // 4K ke liye high-res image
    size: "lg:col-span-2 h-[450px] 2xl:h-[650px]", // 🖥️ 4K Height Scale
    metrics: "+180% Revenue Scale",
    tags: ["Next.js", "GraphQL", "AWS"]
  },
  {
    id: "02",
    title: "Analytics Dashboard",
    category: "Data Architecture",
    size: "lg:col-span-1 h-[450px] 2xl:h-[650px]", // 🖥️ 4K Height Scale
    metrics: "Sub-Second Latency",
    tags: ["TypeScript", "Python", "Tailwind"],
    isTechCard: true
  },
  {
    id: "03",
    title: "Conversion Impact",
    category: "Optimization Pipeline",
    size: "lg:col-span-1 h-[450px] 2xl:h-[650px]", // 🖥️ 4K Height Scale
    metrics: "4.2x Conversion Multiplier",
    tags: ["Technical SEO", "UI/UX"],
    isMetricCard: true
  },
  {
    id: "04",
    title: "Ecommerce Experience",
    category: "Headless Commerce",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1600",
    size: "lg:col-span-2 h-[450px] 2xl:h-[650px]", // 🖥️ 4K Height Scale
    metrics: "Load Time < 400ms",
    tags: ["Shopify Hydrogen", "Sanity CMS"]
  }
];

export default function PortfolioBento() {
  return (
    // 🖥️ 4K/2K: Padding increased for massive screens
    <section className="relative py-28 2xl:py-48 bg-[#030303] text-white overflow-hidden select-none border-t border-white/5">
      
      {/* Background Glows (Scaled for 4K) */}
      <div className="absolute top-1/3 left-1/4 w-[700px] 2xl:w-[1200px] h-[700px] 2xl:h-[1200px] bg-blue-600/[0.02] blur-[180px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] 2xl:w-[1000px] h-[600px] 2xl:h-[1000px] bg-cyan-500/[0.02] blur-[150px] pointer-events-none" />

      {/* 📦 Container: max-w extended for 4K stability */}
      <div className="relative z-10 max-w-7xl 2xl:max-w-[110rem] mx-auto px-6">

        {/* ⚡ HEADER BLOCK */}
        <div className="flex items-end justify-between mb-16 2xl:mb-28 flex-wrap gap-6">
          <div className="space-y-4">
            <p className="text-[10px] 2xl:text-base tracking-[6px] text-blue-500 font-black uppercase">
              Proven Case Studies
            </p>
            <h2 className="text-4xl md:text-6xl 2xl:text-8xl font-black tracking-tighter leading-none">
              Selected Works.{" "}
              <br className="hidden 2xl:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500">
                Engineered For Impact.
              </span>
            </h2>
          </div>

          <Link
            href="/portfolio"
            className="hidden md:flex items-center gap-4 text-xs 2xl:text-lg uppercase tracking-widest font-bold text-gray-400 hover:text-white transition-colors group"
          >
            <span>View All Projects</span>
            <div className="w-9 h-9 2xl:w-14 2xl:h-14 rounded-full border border-white/10 flex items-center justify-center group-hover:rotate-45 group-hover:border-blue-500 group-hover:bg-white/5 transition-all duration-300">
              <ArrowUpRight size={14} className="text-gray-400 group-hover:text-white 2xl:w-6 2xl:h-6" />
            </div>
          </Link>
        </div>

        {/* 🎬 THE INTERACTIVE BENTO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 2xl:gap-10 relative z-10">
          {bentoProjects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`group relative ${project.size} rounded-[2.5rem] 2xl:rounded-[4rem] p-8 2xl:p-14 border border-white/5 bg-gradient-to-b from-white/[0.02] to-transparent backdrop-blur-md flex flex-col justify-between overflow-hidden hover:border-blue-500/30 transition-all duration-500 cursor-pointer`}
            >
              {/* Conditional Rendering based on card type */}
              {project.isTechCard ? (
                <>
                  <div className="w-12 h-12 2xl:w-20 2xl:h-20 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform duration-500">
                    <Cpu size={22} className="2xl:w-10 2xl:h-10" />
                  </div>
                  <div className="space-y-4 2xl:space-y-8 relative z-10">
                    <span className="text-[10px] 2xl:text-base uppercase tracking-[3px] text-zinc-500 font-bold block">{project.category}</span>
                    <h3 className="text-2xl 2xl:text-5xl font-black tracking-tight uppercase">{project.title}</h3>
                    <div className="flex flex-wrap gap-2 2xl:gap-4 pt-2">
                      {project.tags.map((tag, idx) => (
                        <span key={idx} className="px-3 2xl:px-6 py-1 2xl:py-3 rounded-full border border-white/5 bg-white/[0.02] text-xs 2xl:text-lg font-semibold text-zinc-400 group-hover:border-blue-500/20 group-hover:text-blue-400 transition-all duration-300">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="absolute -right-12 -bottom-12 2xl:-right-20 2xl:-bottom-20 text-white/[0.01] group-hover:text-white/[0.02] transition-colors pointer-events-none">
                    <Blocks size={200} className="2xl:w-[400px] 2xl:h-[400px] stroke-[1]" />
                  </div>
                </>
              ) : project.isMetricCard ? (
                <>
                  <div className="w-12 h-12 2xl:w-20 2xl:h-20 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform duration-500">
                    <BarChart3 size={22} className="2xl:w-10 2xl:h-10" />
                  </div>
                  <div className="space-y-2 2xl:space-y-6">
                    <h4 className="text-4xl 2xl:text-7xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">{project.metrics}</h4>
                    <p className="text-sm 2xl:text-xl text-zinc-400 font-medium leading-relaxed">System parameters benchmarked via real-time stress testing.</p>
                  </div>
                  <div className="space-y-1 2xl:space-y-3 relative z-10">
                    <span className="text-[10px] 2xl:text-base uppercase tracking-[3px] text-zinc-500 font-bold block">{project.category}</span>
                    <h3 className="text-2xl 2xl:text-5xl font-black tracking-tight uppercase">{project.title}</h3>
                  </div>
                </>
              ) : (
                // Image Cards (Project 01 & 04)
                <div className="absolute inset-0 w-full h-full">
                  <div className="absolute inset-0 w-full h-full opacity-40 group-hover:opacity-95 transition-all duration-500">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover filter grayscale contrast-110 group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/50 to-transparent opacity-90" />
                  </div>
                  <div className="absolute top-8 left-8 2xl:top-14 2xl:left-14 z-20">
                    <span className="px-3 2xl:px-6 py-1 2xl:py-3 rounded-full border border-white/10 bg-black/40 backdrop-blur-md text-[10px] 2xl:text-base font-bold text-gray-300 uppercase tracking-widest">
                      {project.id}
                    </span>
                  </div>
                  <div className="absolute bottom-8 left-8 2xl:bottom-14 2xl:left-14 right-8 z-20 space-y-2 2xl:space-y-6">
                    <span className="text-[10px] 2xl:text-base uppercase tracking-[3px] text-cyan-400 font-bold block">{project.category}</span>
                    <h3 className="text-2xl 2xl:text-5xl font-black tracking-tight uppercase">{project.title}</h3>
                    <p className="text-xs 2xl:text-lg text-zinc-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500">{project.metrics}</p>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}