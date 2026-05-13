"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Zap, TrendingUp, Star, CheckCircle2, Sparkles } from "lucide-react";

const features = [
  {
    icon: <Zap className="2xl:w-10 2xl:h-10" size={20} />,
    title: "Modern Tools",
    desc: "We leverage industry-leading tech to build high-converting assets.",
  },
  {
    icon: <Star className="2xl:w-10 2xl:h-10" size={20} />,
    title: "Creative Thinking",
    desc: "Strategies built from the ground up to fit your specific goals.",
  },
  {
    icon: <ShieldCheck className="2xl:w-10 2xl:h-10" size={20} />,
    title: "Proven Methods",
    desc: "Data-backed execution that ensures meaningful, measurable growth.",
  },
  {
    icon: <TrendingUp className="2xl:w-10 2xl:h-10" size={20} />,
    title: "Meaningful Results",
    desc: "Focusing on visibility, trust, and real-world brand success.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative py-24 2xl:py-48 bg-[#020617] overflow-hidden">
      
      {/* 🌌 Background Tech-Grid */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(#fff 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />
      
      {/* Ambient Glows */}
      <div className="absolute top-1/4 -right-20 w-[400px] 2xl:w-[800px] h-[400px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl 2xl:max-w-[110rem] mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 2xl:gap-32 items-center">

          {/* LEFT SIDE: Content focus */}
          <div className="lg:col-span-6 space-y-10 2xl:space-y-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="h-[2px] w-12 2xl:w-20 bg-blue-500" />
                <span className="text-xs 2xl:text-xl font-black uppercase tracking-[0.4em] text-blue-500">
                  The High Rise Edge
                </span>
              </div>

              <h2 className="text-5xl md:text-7xl 2xl:text-9xl font-black text-white tracking-tighter leading-[0.9] mb-12">
                Why Choose <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 ">High Rise Digital</span>
              </h2>

              <div className="space-y-8 2xl:space-y-16">
                <p className="text-zinc-200 text-xl 2xl:text-4xl font-medium leading-relaxed max-w-2xl">
                  Choosing High Rise Digital means working with a team that is fully committed to your success. 
                </p>
                
                <div className="space-y-6 2xl:space-y-12 border-l-2 border-white/10 pl-8 2xl:pl-16">
                  <p className="text-zinc-400 text-base 2xl:text-2xl leading-relaxed max-w-xl">
                    Our experts use modern tools, creative thinking, and proven methods to deliver meaningful results. We value clear communication and timely delivery.
                  </p>

                  <p className="text-zinc-400 text-base 2xl:text-2xl leading-relaxed max-w-xl">
                    Every project is handled with care and attention, ensuring your brand gets the visibility, trust, and growth it deserves.
                  </p>
                </div>
              </div>

              {/* Tags Container */}
              <div className="pt-12 2xl:pt-24 flex flex-wrap gap-4 2xl:gap-8">
                 {["Transparency", "Growth", "Innovation"].map((tag) => (
                    <span key={tag} className="px-6 py-2 2xl:px-12 2xl:py-4 rounded-full border border-white/10 bg-white/[0.03] text-[10px] 2xl:text-xl font-bold text-zinc-500 uppercase tracking-widest hover:text-blue-400 hover:border-blue-500/50 transition-all cursor-default">
                       {tag}
                    </span>
                 ))}
              </div>
            </motion.div>
          </div>

          {/* RIGHT SIDE: Unique Staggered Cards */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 2xl:gap-12 relative">
              
              {/* Center Aura */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-500/20 blur-[120px] rounded-full pointer-events-none" />

              {features.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative p-8 2xl:p-16 rounded-[2.5rem] 2xl:rounded-[4.5rem] border border-white/10 bg-gradient-to-br from-white/[0.05] to-transparent backdrop-blur-xl overflow-hidden group transition-all duration-500 hover:border-blue-500/40
                    ${index % 2 !== 0 ? 'md:translate-y-12 2xl:translate-y-24' : ''}`} 
                >
                  <div className="relative z-10">
                    {/* Icon Housing */}
                    <div className="mb-6 2xl:mb-12 w-14 h-14 2xl:w-28 2xl:h-28 flex items-center justify-center rounded-2xl 2xl:rounded-[2rem] bg-blue-500/10 text-blue-400 group-hover:bg-blue-500 group-hover:text-white group-hover:scale-110 transition-all duration-500">
                      {item.icon}
                    </div>
                    
                    <h3 className="text-white font-black text-xl 2xl:text-5xl mb-4 2xl:mb-8 tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-zinc-500 text-sm 2xl:text-2xl leading-relaxed group-hover:text-zinc-300 transition-colors">
                      {item.desc}
                    </p>
                  </div>
                  
                  {/* Subtle Checkmark Overlay */}
                  <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-10 transition-opacity">
                    <CheckCircle2 size={60} className="text-white 2xl:w-32 2xl:h-32" />
                  </div>

                  {/* Internal Glow on Hover */}
                  <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-blue-500/10 blur-3xl group-hover:bg-blue-500/20 transition-all duration-700" />
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}