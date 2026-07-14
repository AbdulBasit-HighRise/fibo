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
  { id: "07", title: "Blockchain Development", icon: Cpu, link: "/services/blockchain-development", desc: "Building decentralized applications and smart contracts for innovative solutions." },
  { id: "08", title: "AI/ML Solutions", icon: BrainCircuit, link: "/services/ai-ml-solutions", desc: "Leveraging artificial intelligence and machine learning to drive innovation and efficiency." },
];
export default function Services() {
  return (
    <section className="relative bg-[#f4f4f4] py-12 md:py-20 2xl:py-32 pt-10 overflow-hidden border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        
        {/* HEADER */}
        <div className="mb-12 md:mb-16 text-center">
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[2rem] md:text-[2.5rem] font-black tracking-tighter text-black"
          >
            Our Services
          </motion.h3>
        </div>

 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
  {SERVICES.map((item) => {
    const Icon = item.icon;
    return (
      <Link href={item.link || "#"} key={item.id} className="block group">
        <div className="bg-white border border-zinc-200 p-8 rounded-3xl transition-all duration-500 hover:border-[#FFD36A] hover:shadow-[0_20px_40px_rgba(255,211,106,0.2)] flex flex-col justify-between aspect-square">
          
          <div>
            <div className="w-14 h-14 rounded-2xl bg-zinc-100 border border-zinc-200 flex items-center justify-center text-black group-hover:bg-[#FFD36A] transition-all duration-500">
              <Icon size={26} />
            </div>

            <h4 className="text-xl font-black text-black mt-8 leading-tight uppercase tracking-tight">
              {item.title}
            </h4>

            {/* Inline style ka istemal taake color force ho jaye */}
            <p 
              className="text-sm mt-4 leading-relaxed line-clamp-3 font-normal"
              style={{ color: '#000000' }} 
            >
              {item.desc}
            </p>
          </div>

          <div className="flex justify-end">
            <div className="w-10 h-10 rounded-full border border-zinc-200 flex items-center justify-center text-black group-hover:bg-black group-hover:text-[#FFD36A] transition-all duration-500">
              <ArrowUpRight size={18} />
            </div>
          </div>
          
        </div>
      </Link>
    );
  })}
</div>
        {/* CTA BUTTON */}
        {/* <div className="mt-12 flex justify-center">
       <Link href="/services">
  <button className="group relative overflow-hidden h-[48px] px-8 rounded-full bg-white text-black font-black text-[11px] uppercase tracking-[0.2em] transition-all duration-500 active:scale-95 shadow-lg">
   
    <div className="absolute inset-0 w-0 bg-[#FFD36A] transition-all duration-500 ease-out group-hover:w-full" />
    

    <span className="relative z-10 flex items-center gap-2 group-hover:text-black transition-colors duration-500">
      Explore All Services
      <ArrowUpRight size={14} />
    </span>
  </button>
</Link>
        </div> */}
      </div>
    </section>
  );
}