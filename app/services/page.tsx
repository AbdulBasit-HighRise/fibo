"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Zap, ShieldCheck,
  BarChart3, Globe, Flame, ChevronRight, ArrowRight
} from "lucide-react";

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
import Link from "next/link";
import Image from "next/image";

// Components Imports

import CTA from "@/components/sections/CTA";



export default function ServicesPage() {
  return (
    <main className="bg-[#030712] text-white selection:bg-blue-500 overflow-x-hidden">
      {/* 1. HERO SECTION (Optimized) */}
      <section className="relative w-full overflow-hidden">
        <div className="container-wide">
          <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
            <Image
              src="/home-hero.png"
              alt="Mesh Grid"
              fill
              sizes="100vw"
              priority // 🔥 PageSpeed boost: Hero image jaldi load hogi
              className="object-cover object-top "
            />
            <div className="absolute inset-0 " />
          </div>

          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/[0.05] blur-[120px] pointer-events-none" />

          <div className="relative z-10 w-full mx-auto text-center lg:text-left px-6 pt-32 pb-16 md:pt-20 md:pb-24 lg:max-w-full lg:pt-40 lg:pb-28 lg:pl-40 2xl:mx-0 2xl:max-w-[1500px] 2xl:pt-48 2xl:pb-36 2xl:pl-80 3xl:mx-0 3xl:max-w-[1800px] 3xl:pt-60 3xl:pb-44 3xl:pl-72">
            <div className="max-w-5xl">
              {/* <div className="flex items-center gap-2.5 mb-8 w-fit px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-md mx-auto md:mx-0">
                <Flame size={12} className="text-blue-400 animate-pulse" />
                <span className="text-[10px] font-black tracking-[4px] text-blue-300 ">Digital Marketing Services</span>
              </div> */}

              <h1 className="text-[2rem]  md:text-[3.2rem] lg:text-[3.8rem] 2xl:text-[5rem] font-black tracking-tighter leading-[0.8] text-white mb-8">
                Our {" "} Services.
             
              </h1>

              <p className="text-white text-sm md:text-base lg:text-[17px] 2xl:text-xl 3xl:text-2xl font-medium leading-relaxed max-w-xl 2xl:max-w-3xl mx-auto lg:mx-0 opacity-80">
                We provide SEO, social media marketing, PPC, branding, and web development services to help your business grow and succeed online.
              </p>
            </div>
          </div>
        </div>
      </section>




      {/* SECTION 2: AGENCY INSIGHT */}
      <section className="relative py-24 2xl:py-40 bg-white overflow-hidden border-y border-zinc-100">
        {/* Soft ambient backgrounds */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#FFD36A]/5 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-zinc-200/20 blur-[120px] pointer-events-none" />

        <div className="max-w-7xl 2xl:max-w-[1600px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

          {/* LEFT: Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: -30 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            viewport={{ once: true }}
            className="lg:col-span-5 relative flex items-center justify-center group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#FFD36A]/20 to-amber-500/20 blur-[100px] rounded-full animate-pulse" />
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10"
            >
              <Image
                src="/servicepng.png"
                alt="Production Services"
                width={600}
                height={600}
                className="w-full h-auto object-contain"
              />
            </motion.div>
          </motion.div>

          {/* RIGHT: Content */}
          <div className="lg:col-span-7 space-y-10">
            <div className="space-y-6">


              <h2 className="text-[2rem] md:text-[2.5rem] lg:text-[2.5rem] 2xl:text-[3.2rem] font-black tracking-tighter leading-[1] text-black">
                Elevate Your Vision with Premium Production & VFX
                 
              </h2>
            </div>

            <div className="space-y-6 text-zinc-600 font-medium leading-relaxed">
              <p className="text-[16px] md:text-base lg:text-[17px] 2xl:text-xl antialiased tracking-wide">
                <span className="font-black text-black">Fibo Production</span> brings your ideas to life through high-end 3D production, immersive VFX, and cinematic storytelling. We bridge the gap between imagination and reality with industry-leading technology.
              </p>

              <p className="text-[16px] md:text-base lg:text-[17px] 2xl:text-xl antialiased tracking-wide">
                From motion graphics and 3D environment design to professional post-production and branding, our creative solutions are crafted to captivate audiences and set your brand apart in the digital landscape.
              </p>

              <p className="text-[16px] md:text-base lg:text-[17px] 2xl:text-xl antialiased tracking-wide font-black text-black">
                Our goal is simple: to deliver breathtaking visual experiences that leave a lasting impact.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-6 pt-4">
              <Link href="/contact" className="group block w-full sm:w-auto">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative h-[50px] text-black px-10 rounded-full bg-white overflow-hidden shadow-xl w-full sm:w-auto flex items-center justify-center gap-3 "
                >
                  <div className="absolute inset-0 w-0 bg-[#FFD36A] transition-all duration-500 ease-out group-hover:w-full" />
                  <span className="relative z-10 flex items-center gap-3 text-black font-black text-[11px] uppercase tracking-[2px] group-hover:text-black transition-colors duration-500">
                    Start Your Project
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </motion.button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: SERVICE GRID */}

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
              Our Digital Marketing Services
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
        
        </div>
      </section>
    </main>
  );
}