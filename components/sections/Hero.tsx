"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden pt-36 pb-20">
      {/* 1. Base Gold Layer */}
      <div className="absolute inset-0 bg-[#FFD36A]" />

      {/* 2. Deep Cinematic Gradient Overlay (Black to transparent) */}
      <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-black/40 to-transparent z-[1]" />

      {/* 3. Subtle Texture Grain */}
      <div className="absolute inset-0 opacity-[0.04] z-[2] pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>

      <div className="relative z-[3] max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* LEFT CONTENT */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <h1 className="text-[2.5rem] sm:text-[4rem] lg:text-[4.5rem] font-black leading-[1] tracking-tighter text-white">
              Digital <br /> Marketing Agency
            </h1>

            <p className="text-white/90 text-base md:text-lg font-medium leading-relaxed max-w-xl mx-auto lg:mx-0">
              We are a results-driven digital marketing agency providing SEO, PPC, social media, and web solutions for businesses across the USA, UK, Australia, UAE, and worldwide markets.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <Link href="/contact" className="w-full sm:w-auto">
                <button className="group relative overflow-hidden w-full sm:min-w-[180px] h-[52px] rounded-full bg-white text-black font-black text-[12px] uppercase tracking-[2px] flex items-center justify-center gap-2 transition-all active:scale-95 shadow-xl">
                  <div className="absolute inset-0 w-0  transition-all duration-500 group-hover:w-full" />
                  <span className="relative z-10 flex items-center gap-2 group-hover:text-black transition-colors">
                    Get Quote <ArrowUpRight size={16} />
                  </span>
                </button>
              </Link>
              <Link href="/case-studies" className="text-white text-[12px] font-bold uppercase tracking-[2px] border-b-2 border-white/30 hover:border-white transition-all">
                View Work
              </Link>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              whileHover={{ rotate: 10, scale: 1.05 }}
              transition={{ duration: 0.5 }}
              className="relative w-full max-w-[400px]"
            >
              <Image
                src="/hero-img.webp"
                alt="Strategic Digital Marketing"
                width={600}
                height={600}
                priority
                className="w-full h-auto object-contain drop-shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}