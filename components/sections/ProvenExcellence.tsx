"use client";

import { motion } from "framer-motion";
import { BarChart3, Eye, Target, TrendingUp } from "lucide-react";

const FEATURES = [
  {
    title: "Measurable Results",
    desc: "Delivering measurable results through strategic and data-driven marketing campaigns.",
    icon: <BarChart3 className="text-blue-400 2xl:w-12 2xl:h-12" size={28} />,
  },
  {
    title: "Brand Visibility",
    desc: "Increasing brand visibility with innovative and creative digital solutions.",
    icon: <Eye className="text-cyan-400 2xl:w-12 2xl:h-12" size={28} />,
  },
  {
    title: "Higher Conversions",
    desc: "Improving conversions through targeted audience engagement and optimization techniques.",
    icon: <Target className="text-blue-500 2xl:w-12 2xl:h-12" size={28} />,
  },
  {
    title: "Consistent Growth",
    desc: "Ensuring consistent growth with performance-focused marketing strategies and analysis.",
    icon: <TrendingUp className="text-cyan-500 2xl:w-12 2xl:h-12" size={28} />,
  },
];

export default function ProvenExcellence() {
  return (
    <section className="relative bg-[#030303] py-24 2xl:py-48 px-6 overflow-hidden">
      
      {/* 🌌 Background Decorative Glows (4K Scaled) */}
      <div className="absolute top-1/4 -left-20 w-[400px] 2xl:w-[800px] h-[400px] 2xl:h-[800px] bg-blue-600/10 blur-[120px] 2xl:blur-[200px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-[300px] 2xl:w-[600px] h-[300px] 2xl:h-[600px] bg-cyan-500/10 blur-[100px] 2xl:blur-[180px] rounded-full pointer-events-none" />

      <div className="max-w-7xl 2xl:max-w-[100rem] mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 2xl:gap-32 items-center">
          
          {/* LEFT: Main Content Area */}
          <div className="space-y-8 2xl:space-y-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-[10px] 2xl:text-lg uppercase tracking-[0.5em] text-blue-400 font-bold block mb-4">
                Our Commitment
              </span>
              <h2 className="text-4xl md:text-6xl 2xl:text-8xl font-black text-white leading-[1.1] tracking-tighter">
                Proven Excellence in <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                  Digital Marketing
                </span>
              </h2>
              
              <div className="mt-8 2xl:mt-16 space-y-6 2xl:space-y-10 text-slate-400 text-lg 2xl:text-3xl leading-relaxed max-w-xl 2xl:max-w-4xl">
                <p>
                  We consistently deliver measurable digital growth through strategic planning, creative execution, and performance-focused campaigns.
                </p>
                <p>
                  Our approach combines data insights with innovative marketing techniques to ensure every project achieves strong visibility and engagement. From improving online reach to increasing conversions, we focus on real outcomes.
                </p>
                <div className="border-l-2 border-blue-500/50 pl-6 2xl:pl-10">
                   <p className="text-sm 2xl:text-xl italic text-slate-500">
                    With a commitment to quality and continuous improvement, we help brands stay competitive and achieve sustainable success.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT: Features Grid */}
          <div className="grid sm:grid-cols-2 gap-6 2xl:gap-10">
            {FEATURES.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="group p-8 2xl:p-14 rounded-[2.5rem] 2xl:rounded-[4rem] bg-white/[0.02] border border-white/5 hover:border-blue-500/30 hover:bg-white/[0.04] transition-all duration-500 relative overflow-hidden shadow-2xl"
              >
                {/* 🌈 Glass Spotlight Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  {/* Icon Container */}
                  <div className="mb-6 2xl:mb-10 w-14 h-14 2xl:w-24 2xl:h-24 rounded-2xl 2xl:rounded-[2rem] bg-white/[0.03] flex items-center justify-center group-hover:scale-110 group-hover:bg-blue-500/20 transition-all duration-500">
                    {feature.icon}
                  </div>
                  
                  {/* Text Content */}
                  <h3 className="text-xl 2xl:text-4xl font-bold text-white mb-3 2xl:mb-6 group-hover:text-blue-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-slate-500 text-sm 2xl:text-2xl leading-relaxed group-hover:text-slate-300 transition-colors">
                    {feature.desc}
                  </p>
                </div>

                {/* Corner Accent */}
                <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-1 h-1 rounded-full bg-blue-500 shadow-[0_0_10px_#3b82f6]" />
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}