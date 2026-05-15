"use client";

import { motion } from "framer-motion";
import { BarChart3, Eye, Target, TrendingUp } from "lucide-react";

const FEATURES = [
  {
    title: "Measurable Results",
    desc: "Delivering measurable results through strategic and data-driven marketing campaigns.",
    icon: <BarChart3 className="text-blue-400 w-5 h-5 2xl:w-8 2xl:h-8" />,
  },
  {
    title: "Brand Visibility",
    desc: "Increasing brand visibility with innovative and creative digital solutions.",
    icon: <Eye className="text-cyan-400 w-5 h-5 2xl:w-8 2xl:h-8" />,
  },
  {
    title: "Higher Conversions",
    desc: "Improving conversions through targeted audience engagement and optimization techniques.",
    icon: <Target className="text-blue-500 w-5 h-5 2xl:w-8 2xl:h-8" />,
  },
  {
    title: "Consistent Growth",
    desc: "Ensuring consistent growth with performance-focused marketing strategies and analysis.",
    icon: <TrendingUp className="text-cyan-500 w-5 h-5 2xl:w-8 2xl:h-8" />,
  },
];

export default function ProvenExcellence() {
  return (
    <section className="relative bg-[#030303] py-16 md:py-24 2xl:py-32 px-6 overflow-hidden border-b border-white/5">
      
      {/* 🌌 Decorative Glows */}
      <div className="absolute top-1/4 -left-20 w-[400px] 2xl:w-[800px] h-[400px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl 2xl:max-w-[110rem] mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 2xl:gap-24 items-center">
          
          {/* LEFT: Main Content Area */}
          <div className="space-y-6 md:space-y-8 2xl:space-y-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {/* 🎯 Bold & Balanced Heading */}
              <h2 className="text-3xl md:text-5xl 2xl:text-7xl font-black text-white leading-[1.1] tracking-tighter mb-8">
                Thrive Your Business with <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                  Marketing Solutions
                </span>
              </h2>
              
              {/* ⚪ Pure White & Normal Font P tags */}
              <div className="space-y-6 text-white text-base md:text-lg 2xl:text-2xl font-normal leading-relaxed max-w-2xl">
                <p className="text-sm md:text-base 2xl:text-xl italic text-white">
                  We consistently deliver measurable digital growth through strategic planning, creative execution, and performance-focused campaigns.
                </p>
                <p className="text-sm md:text-base 2xl:text-xl italic text-white">
                  Our approach combines data insights with innovative marketing techniques to ensure every project achieves strong visibility and engagement.
                </p>
                <div className="border-l-2 border-blue-500 pl-6 mt-8">
                   <p className="text-sm md:text-base 2xl:text-xl italic text-white">
                    We help brands stay competitive and achieve sustainable success.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT: Features Grid (Bigger Cards) */}
          <div className="grid sm:grid-cols-2 gap-6 2xl:gap-8">
            {FEATURES.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group p-6 md:p-8 2xl:p-12 rounded-2xl md:rounded-3xl border border-white/10 bg-white/[0.03] hover:border-blue-500/50 hover:bg-white/[0.07] transition-all duration-500 relative overflow-hidden shadow-2xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10 space-y-4 md:space-y-6">
                  
                  {/* Icon Container */}
                  <div className="w-10 h-10 md:w-12 md:h-12 2xl:w-16 2xl:h-16 rounded-xl bg-white/[0.05] flex items-center justify-center group-hover:bg-blue-500/20 transition-all duration-500">
                    {feature.icon}
                  </div>
                  
                  {/* Card Title - White & Bold */}
                  <p className="text-white font-black text-xs md:text-sm 2xl:text-lg tracking-[2px] uppercase leading-tight group-hover:text-blue-400 transition-colors">
                    {feature.title}
                  </p>
                  
                  {/* Card Description - Now Pure White/Solid */}
                  <p className="text-white/80 text-xs md:text-sm 2xl:text-lg leading-relaxed group-hover:text-white transition-colors font-normal">
                    {feature.desc}
                  </p>
                </div>

                {/* Corner Indicator */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_10px_#3b82f6]" />
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}