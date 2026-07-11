"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { 
  ArrowUpRight, 
  Layers, 
  Search, 
  Share2, 
  Bot, 
  ShoppingCart, 
  Palette 
} from "lucide-react";

const SERVICES = [
  { id: "01", title: "Web Development", icon: Layers, link: "/services/website-development", desc: "Creating responsive, user-friendly websites designed to improve performance, engagement, and conversions." },
  { id: "02", title: "SEO Optimization", icon: Search, link: "/services/seo", desc: "Improving website rankings through strategic SEO techniques, keyword research, and optimization." },
  { id: "03", title: "Social Media Marketing", icon: Share2, link: "/services/social-media-marketing", desc: "Growing your brand presence through engaging social media campaigns and targeted strategies." },
  { id: "04", title: "AI Automation", icon: Bot, link: "/services/ai-automation", desc: "Streamlining business operations with smart AI automation solutions for improved productivity." },
  { id: "05", title: "eCommerce Management", icon: ShoppingCart, link: "/services/e-commerce-management", desc: "Managing online stores efficiently to increase sales, customer experience, and business growth." },
  { id: "06", title: "Branding & Identity", icon: Palette, link: "/services/branding", desc: "Building strong brand identities that create trust, recognition, and lasting customer impressions." },
];

export default function Services() {
  return (
    <section className="relative bg-[#E5E5E5] py-12 md:py-20 2xl:py-32 pt-10 overflow-hidden border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        
        {/* HEADER */}
        <div className="mb-12 md:mb-16 text-center">
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[2rem] md:text-[2.5rem] font-black tracking-tighter text-black"
          >
            Our Digital Marketing Services
          </motion.h3>
        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((item) => {
            const Icon = item.icon; 
            return (
              <div
                key={item.id}
                className="group relative bg-white border border-zinc-200 p-8 rounded-2xl transition-all duration-300 hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/10 flex flex-col justify-between aspect-square"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-zinc-50 border border-zinc-100 flex items-center justify-center text-zinc-400 group-hover:text-blue-600 group-hover:bg-blue-50 transition-all duration-300">
                    <Icon size={24} />
                  </div>
                  <h4 className="text-lg font-black text-zinc-900 mt-6 leading-tight uppercase tracking-tight">
                    {item.title}
                  </h4>
                  <p className="text-zinc-600 text-[13px] mt-4 leading-relaxed line-clamp-3">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 flex justify-end">
                  <div className="w-8 h-8 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-400 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all duration-300">
                    <ArrowUpRight size={16} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA BUTTON */}
        <div className="mt-12 flex justify-center">
          <Link href="/services">
            <button className="group relative overflow-hidden h-[48px] px-8 rounded-full bg-white text-black text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-500 active:scale-95 shadow-lg">
              <div className="absolute inset-0 w-0 bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-500 ease-out group-hover:w-full" />
              <span className="relative z-10 flex items-center gap-2 group-hover:text-white transition-colors duration-500">
                Explore All Services
                <ArrowUpRight size={14} />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}