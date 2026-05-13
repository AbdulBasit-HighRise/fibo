"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Home, Hammer, ShoppingBag, Building2, Truck, Car, 
  Stethoscope, Cpu, Plane, Utensils, Briefcase, Store, Sparkles
} from "lucide-react";

const INDUSTRIES = [
  { title: "Home Services", icon: Home },
  { title: "Roofing Contractor", icon: Hammer },
  { title: "Fashion & Beauty", icon: ShoppingBag },
  { title: "Real Estate & Construction", icon: Building2 },
  { title: "Moving Companies", icon: Truck },
  { title: "Automotive", icon: Car },
  { title: "Healthcare & Wellness", icon: Stethoscope },
  { title: "Tech & Startups", icon: Cpu },
  { title: "Travel & Hospitality", icon: Plane },
  { title: "Food & Beverages", icon: Utensils },
  { title: "Legal & Consulting", icon: Briefcase },
  { title: "E-commerce & Retail", icon: Store },
];

export default function IndustryExpertise() {
  // Duplicating for seamless infinite loop
  const duplicatedIndustries = [...INDUSTRIES, ...INDUSTRIES, ...INDUSTRIES];

  return (
    <section className="bg-[#030303] text-white py-24 2xl:py-48 relative overflow-hidden border-t border-white/5">
      
      {/* 🌌 Atmospheric Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl 2xl:max-w-[110rem] mx-auto px-6 relative z-10 mb-20 2xl:mb-32">
        <div className="text-center lg:text-left flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div className="max-w-4xl">
            <motion.div
               initial={{ opacity: 0, y: 10 }}
               whileInView={{ opacity: 1, y: 0 }}
               className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6"
            >
              <Sparkles size={14} className="text-blue-400" />
              <span className="text-[10px] 2xl:text-base font-bold uppercase tracking-[0.2em] text-blue-400">Diverse Sectors</span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl 2xl:text-9xl font-black tracking-tighter leading-none"
            >
              Industries We <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">Work With</span>
            </motion.h2>
          </div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-slate-400 text-lg 2xl:text-3xl max-w-xl 2xl:max-w-3xl lg:text-right opacity-80 leading-relaxed"
          >
            We collaborate with businesses of all sizes, delivering customized digital marketing solutions that drive growth and long-term dominance.
          </motion.p>
        </div>
      </div>

      {/* 🎡 INFINITE SLIDER */}
      <div className="relative flex overflow-hidden py-10 2xl:py-20 select-none group">
        
        {/* Edge Fades (Luxury Gradient) */}
        <div className="absolute left-0 top-0 bottom-0 w-32 md:w-64 bg-gradient-to-r from-[#030303] via-[#030303]/80 to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 md:w-64 bg-gradient-to-l from-[#030303] via-[#030303]/80 to-transparent z-20 pointer-events-none" />

        <motion.div 
          className="flex flex-nowrap gap-8 2xl:gap-16"
          animate={{ x: ["0%", "-33.33%"] }}
          transition={{ 
            duration: 40, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          // Slidder slow on hover for better UX
          whileHover={{ transition: { duration: 80 } }}
        >
          {duplicatedIndustries.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index}
                className="flex-shrink-0 w-[300px] h-[220px] 2xl:w-[500px] 2xl:h-[350px] rounded-[3rem] 2xl:rounded-[5rem] bg-white/[0.02] border border-white/5 flex flex-col items-center justify-center gap-6 2xl:gap-12 transition-all duration-700 cursor-pointer group/card hover:bg-blue-600 hover:border-blue-400 hover:-translate-y-4 hover:shadow-[0_30px_60px_rgba(37,99,235,0.3)]"
              >
                {/* Icon Container */}
                <div className="p-6 2xl:p-12 rounded-[2rem] 2xl:rounded-[3rem] bg-white/[0.03] text-slate-400 transition-all duration-500 group-hover/card:bg-white/20 group-hover/card:text-white group-hover/card:scale-110 shadow-xl">
                  <Icon className="w-12 h-12 2xl:w-24 2xl:h-24" strokeWidth={1} />
                </div>

                {/* Text */}
                <h3 className="text-xs md:text-sm 2xl:text-3xl font-black uppercase tracking-[0.25em] text-slate-500 transition-colors duration-500 group-hover/card:text-white px-6 text-center">
                  {item.title}
                </h3>
              </div>
            );
          })}
        </motion.div>
      </div>

    </section>
  );
}