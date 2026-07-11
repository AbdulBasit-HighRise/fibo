"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-fit lg:min-h-[70vh] 2xl:min-h-[65vh] 3xl:min-h-[60vh] bg-[#FFD36A] overflow-hidden flex items-center selection:bg-black pb-4 pt-36 md:pt-40 lg:pt-40 lg:pb-18 2xl:pt-56 2xl:pb-32 3xl:pt-64 3xl:pb-36">
      
      {/* 1. Cinematic Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-black/40 to-transparent z-[1]" />
      
      {/* 2. Subtle Texture */}
      <div className="absolute inset-0 opacity-[0.04] z-[2] pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>

      <div className="relative z-[3] max-w-7xl 2xl:max-w-[110rem] mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 2xl:gap-16 items-center">

          {/* LEFT CONTENT: Perfectly matched sizing */}
          <div className="lg:col-span-7 space-y-0 text-center lg:text-left flex flex-col items-center lg:items-start">
            <h1 className="text-[1.9rem] sm:text-[3.5rem] md:text-[4rem] lg:text-[3.8rem] 2xl:text-[5.5rem] font-black leading-[1.1] lg:leading-[1.05] tracking-tighter text-white max-w-2xl lg:max-w-none">
              Digital Marketing Agency
            </h1>

            <p className="mt-4 text-white/90 text-[16px] md:text-base lg:text-[17px] 2xl:text-xl 3xl:text-2xl font-medium leading-relaxed max-w-xl 2xl:max-w-2xl mx-auto lg:mx-0">
              We are a results-driven digital marketing agency providing SEO, PPC, social media, and web solutions for businesses across the USA, UK, Australia, UAE, and worldwide markets.
            </p>

            {/* Buttons: Consistent sizing */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 2xl:gap-5 w-full sm:w-auto pt-6 md:pt-8">
              <Link href="/contact" className="w-full sm:w-auto">
                <button className="group relative overflow-hidden w-full sm:min-w-[160px] 2xl:min-w-[200px] h-[48px] 2xl:h-[56px] rounded-full bg-white text-black font-black text-[11px] 2xl:text-[13px] tracking-[2px] flex items-center justify-center gap-2 transition-all shadow-lg active:scale-95">
                  <div className="absolute inset-0 w-0 bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-500 group-hover:w-full" />
                  <span className="relative z-10 flex items-center gap-2 group-hover:text-white transition-colors duration-500">
                    Start Project <ArrowUpRight size={14} />
                  </span>
                </button>
              </Link>
              <Link href="/case-studies" className="inline-flex items-center justify-center w-full sm:min-w-[140px] 2xl:min-w-[180px] h-[48px] 2xl:h-[56px] rounded-full border border-white/30 text-white/70 text-[11px] 2xl:text-[13px] font-bold uppercase tracking-[2px] hover:border-white hover:text-white transition-all">
                View Work
              </Link>
            </div>
          </div>

          {/* RIGHT IMAGE: Consistent structure */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <motion.div
              whileHover={{ rotate: 10, scale: 1.05 }}
              transition={{ duration: 0.5 }}
              className="relative w-full max-w-[350px] lg:max-w-[450px] 2xl:max-w-[550px] cursor-pointer"
            >
              <Image
                src="/hero-img.webp"
                alt="Strategic Digital Marketing"
                width={700}
                height={700}
                priority
                className="relative z-[4] w-full h-auto object-contain drop-shadow-2xl"
              />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}