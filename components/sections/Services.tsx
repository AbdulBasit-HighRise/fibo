"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import {
  Code,          // Web Dev
  Smartphone,    // App Dev
  Video,         // 3D Video
  Sparkles,      // VFX
  PenTool,       // Graphic Design
  Megaphone,     // Digital Marketing
  Cpu,
  ArrowUpRight,          // Blockchain
  BrainCircuit   // AI/ML
} from "lucide-react";

const SERVICES = [
  { id: "01", title: "Web Development", icon: Code, link: "/services/website-development", desc: "Creating responsive, user-friendly websites designed to improve performance, engagement, and conversions." },
  { id: "02", title: "App Development", icon: Smartphone, link: "/services/app-development", desc: "Building custom mobile applications for iOS and Android platforms." },
  { id: "03", title: "3D Video Production", icon: Video, link: "/services/3d-video-production", desc: "Creating stunning 3D videos for marketing, training, and entertainment purposes." },
  { id: "04", title: "VFX", icon: Sparkles, link: "/services/vfx", desc: "Creating stunning visual effects for films, commercials, and other media." },
  { id: "05", title: "Graphic Design", icon: PenTool, link: "/services/graphic-design", desc: "Designing compelling visuals for brands and marketing materials." },
  { id: "06", title: "Digital Marketing", icon: Megaphone, link: "/services/digital-marketing", desc: "Driving growth through data-driven digital marketing strategies." },
  { id: "07", title: "Blockchain", icon: Cpu, link: "/services/blockchain-development", desc: "Building decentralized applications and smart contracts for innovative solutions." },
  { id: "08", title: "AI/ML Solutions", icon: BrainCircuit, link: "/services/ai-ml-solutions", desc: "Leveraging artificial intelligence and machine learning to drive innovation and efficiency." },
];
export default function Services() {
  return (
    <section className="relative bg-[#222630] py-12 md:py-20 2xl:py-32 pt-10 overflow-hidden border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-6 relative z-10">

        {/* HEADER */}
        <div className="mb-12 md:mb-16 text-center">
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[2rem] sm:text-[2.2rem] md:text-[2.5rem] lg:text-[2.5rem] 2xl:text-[3.2rem] font-medium tracking-tighter text-white"
          >
            Our Services
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((item) => {
            const Icon = item.icon;
            return (
              <Link href={item.link || "#"} key={item.id} className="block group">
                <div className="bg-white border border-zinc-200 p-6 rounded-3xl transition-all duration-500 hover:border-[#FFD36A] hover:shadow-[0_20px_40px_rgba(255,211,106,0.2)] flex flex-col gap-6">

                  {/* Top Section */}
                  <div className="flex-1">
                    <div className="w-14 h-14 rounded-2xl bg-zinc-100 border border-zinc-200 flex items-center justify-center text-black group-hover:bg-[#FFD36A] transition-all duration-500">
                      <Icon size={24} />
                    </div>

                    <h4 className="text-xl font-black text-black mt-6 leading-tight  tracking-tight">
                      {item.title}
                    </h4>

                    <p className="text-sm mt-3 leading-relaxed text-black/70 font-medium">
                      {item.desc}
                    </p>
                  </div>

                  {/* Footer Arrow - Fixed at bottom */}
                  <div className="flex justify-end pt-2">
                    <div className="w-10 h-10 rounded-full border border-zinc-200 flex items-center justify-center text-black group-hover:bg-black group-hover:text-[#FFD36A] transition-all duration-500">
                      <ArrowUpRight size={18} />
                    </div>
                  </div>

                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}