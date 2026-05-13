"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Home, Hammer, ShoppingBag, Building2, Truck, Car, 
  Stethoscope, Cpu, Plane, Utensils, Briefcase, Store
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
  const duplicatedIndustries = [...INDUSTRIES, ...INDUSTRIES, ...INDUSTRIES];

  return (
    <section className="bg-[#030303] text-white py-12 md:py-20 relative overflow-hidden border-t border-white/5">
      
      {/* 🌌 Top Border Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
      
      <div className="container-main relative z-10">
        <div className="text-center mb-10 md:mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl lg:text-6xl 2xl:text-8xl font-black tracking-tighter leading-tight uppercase"
          >
            Industries We <span className="gradient-text">Work With</span>
          </motion.h2>
        </div>
      </div>

      <div className="relative flex overflow-hidden py-4 select-none group">
        {/* Edge Fades */}
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-64 bg-gradient-to-r from-[#030303] to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-64 bg-gradient-to-l from-[#030303] to-transparent z-20 pointer-events-none" />

        <motion.div 
          className="flex flex-nowrap gap-4 md:gap-8"
          animate={{ x: ["0%", "-33.33%"] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        >
          {duplicatedIndustries.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index}
                // Card sizing logic: Compact on laptop, Large on 4K
                className="flex-shrink-0 w-[150px] h-[135px] md:w-[260px] md:h-[200px] 2xl:w-[420px] 2xl:h-[320px] 
                           rounded-[1.5rem] md:rounded-[2.5rem] 2xl:rounded-[4rem] bg-white/[0.02] border border-white/5 
                           flex flex-col items-center justify-center gap-3 md:gap-5 
                           transition-all duration-500 cursor-pointer group/card hover:bg-[#080808] hover:border-blue-500/40 hover:-translate-y-2"
              >
                {/* 🌀 Icon Container: Bold & Centered */}
                <div className="p-3 md:p-6 2xl:p-10 rounded-xl md:rounded-3xl bg-white/5 group-hover/card:bg-blue-600/10 transition-all duration-500 shadow-sm">
                  <Icon className="w-6 h-6 md:w-12 2xl:w-24 text-blue-500 transition-transform duration-700 ease-in-out group-hover/card:rotate-[360deg]" />
                </div>

                {/* 🖋️ Text: Using 'p' to bypass Global CSS h3 rules */}
                <p className="
                  /* Font Sizes: Mobile 8px | Laptop 10px | 4K 20px */
                  text-[8px] md:text-[10px] 2xl:text-xl 
                  font-bold uppercase 
                  tracking-[0.1em] md:tracking-[0.25em] 
                  text-zinc-500 transition-colors duration-500 group-hover/card:text-white 
                  px-4 text-center leading-tight m-0 p-0
                ">
                  {item.title}
                </p>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}