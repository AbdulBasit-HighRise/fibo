"use client";

import { motion } from "framer-motion";
import { Search, PenTool, Rocket, ShieldCheck, BarChart3, Sparkles } from "lucide-react";

const steps = [
  {
    id: "01",
    icon: <Search className="2xl:w-10 2xl:h-10" size={20} />,
    title: "Discovery & Research",
    desc: "We deep-dive into your business DNA to understand goals, audience, and market gaps.",
  },
  {
    id: "02",
    title: "Strategy Planning",
    icon: <PenTool className="2xl:w-10 2xl:h-10" size={20} />,
    desc: "A custom-built roadmap designed to outpace competitors and maximize ROI.",
  },
  {
    id: "03",
    title: "Execution Phase",
    icon: <Rocket className="2xl:w-10 2xl:h-10" size={20} />,
    desc: "Deploying high-precision campaigns across digital channels with surgical accuracy.",
  },
  {
    id: "04",
    title: "Optimization",
    icon: <ShieldCheck className="2xl:w-10 2xl:h-10" size={20} />,
    desc: "Real-time data monitoring to pivot and polish strategies for peak performance.",
  },
  {
    id: "05",
    title: "Scale & Growth",
    icon: <BarChart3 className="2xl:w-10 2xl:h-10" size={20} />,
    desc: "Transparent reporting and scaling what works to ensure long-term market dominance.",
  },
];

export default function Process() {
  return (
    <section className="relative py-16 md:py-24 bg-[#020617] overflow-hidden selection:bg-blue-600/30">
      
      {/* 🌌 Luxury Background Elements */}
      <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:30px_30px] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_70%)] pointer-events-none" />

      <div className="relative z-10 max-w-6xl 2xl:max-w-[100rem] mx-auto px-6">

        {/* 📋 HEADER - Always Centered */}
        <div className="mb-16 md:mb-24 text-center">
          {/* <motion.div
             initial={{ opacity: 0, y: 15 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6"
          >
            <Sparkles size={14} className="text-blue-400" />
            <span className="text-[10px] 2xl:text-lg font-bold uppercase tracking-[0.3em] text-blue-400">The Roadmap</span>
          </motion.div> */}
          
          <h2 className="text-5xl md:text-7xl 2xl:text-9xl font-black text-white tracking-tighter leading-none">
            Our Working {" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500">
              Process
            </span>
          </h2>
        </div>

        {/* 🧠 TIMELINE MATRIX */}
        <div className="relative">
          
          {/* Central Progress Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-blue-500/50 via-white/10 to-transparent -translate-x-1/2 hidden md:block" />

          {/* gap-4 for mobile, gap-6 for desktop to keep them close */}
          <div className="flex flex-col gap-4 md:gap-6">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={step.id}
                  className={`relative flex flex-col md:flex-row items-start md:items-center justify-between w-full group ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* CARD CONTAINER */}
                  <div className="w-full md:w-[45%] pl-12 md:pl-0">
                    <motion.div 
                      initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                      className="relative p-6 md:p-10 2xl:p-16 rounded-[2rem] 2xl:rounded-[4rem] bg-white/[0.03] border border-white/5 backdrop-blur-3xl hover:bg-white/[0.06] hover:border-blue-500/30 transition-all duration-500 shadow-xl group"
                    >
                      {/* Floating Step Number */}
                      <div className="absolute -top-3 -right-3 2xl:-top-6 2xl:-right-6 w-10 h-10 2xl:w-20 2xl:h-20 rounded-full bg-[#030712] border border-white/10 flex items-center justify-center text-white font-mono text-[10px] 2xl:text-xl font-bold group-hover:border-blue-500/50 transition-colors">
                        {step.id}
                      </div>

                      <div className="flex flex-col gap-4 md:gap-6">
                        {/* Icon Housing */}
                        <div className="w-12 h-12 md:w-14 md:h-14 2xl:w-24 2xl:h-24 rounded-2xl bg-blue-500/10 text-blue-400 flex items-center justify-center group-hover:bg-blue-500 group-hover:text-white transition-all duration-500">
                          {step.icon}
                        </div>
                        
                        <div className="space-y-3">
                          <h3 className="text-xl md:text-2xl 2xl:text-5xl font-black text-white tracking-tight uppercase">
                            {step.title}
                          </h3>
                          {/* White text with opacity for better readability */}
                          <p className="text-sm 2xl:text-2xl text-white/70 group-hover:text-white transition-colors leading-relaxed">
                            {step.desc}
                          </p>
                        </div>
                      </div>

                      {/* Bottom Accent Line */}
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-blue-500 group-hover:w-[40%] transition-all duration-700" />
                    </motion.div>
                  </div>

                  {/* CENTRAL NODE (Bullet Point) */}
                  <div className="absolute left-4 md:left-1/2 top-0 md:top-1/2 -translate-x-1/2 md:-translate-y-1/2 z-20">
                    <div className="w-6 h-6 md:w-8 md:h-8 2xl:w-14 2xl:h-14 rounded-full bg-[#020617] border-2 border-white/10 flex items-center justify-center group-hover:border-blue-500 transition-all duration-500 group-hover:scale-110 shadow-lg">
                      <div className="w-2 h-2 2xl:w-4 2xl:h-4 bg-zinc-700 rounded-full group-hover:bg-blue-400 transition-all" />
                    </div>
                  </div>

                  {/* Spacer for Desktop Grid */}
                  <div className="hidden md:block md:w-[45%]" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}