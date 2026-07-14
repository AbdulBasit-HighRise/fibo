"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-fit lg:min-h-[70vh] 2xl:min-h-[65vh] 3xl:min-h-[60vh] bg-[#FFD36A] overflow-hidden flex items-center 
    selection:bg-black py-20 md:py-24 lg:py-28 2xl:py-36 3xl:py-48">

      {/* Cinematic Gradient Overlay for Depth */}
      <div className="absolute inset-0 bg-gradient-to-tr from-black/70 via-black/30 to-transparent z-[1]" />

      {/* Subtle Texture Grain for Modern feel */}
      <div className="absolute inset-0 opacity-[0.05] z-[2] pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>

      <div className="relative z-[3] max-w-7xl 2xl:max-w-[110rem] mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 2xl:gap-16 items-center">

          {/* LEFT CONTENT */}
          <div className="lg:col-span-7 text-center lg:text-left flex flex-col items-center lg:items-start">
            <h1 className="text-[1.9rem] sm:text-[3.5rem] md:text-[3rem] lg:text-[3.5rem] 2xl:text-[5.5rem] font-black leading-[1.1] lg:leading-[1.02] tracking-normal md:tracking-normal text-white max-w-2xl lg:max-w-none !normal-case">
              Redefining cinematic visual storytelling.
            </h1>

            <div className="mt-6 space-y-4">
              <p className="text-white text-[16px] md:text-base lg:text-[17px] 2xl:text-xl 3xl:text-2xl font-medium leading-relaxed max-w-xl 2xl:max-w-2xl mx-auto lg:mx-0">
                Architecting the future of visual storytelling through Cinematic VFX, Immersive Animation, and High-End Production.
              </p>
              <p className="text-white font-medium text-[16px] md:text-base lg:text-[17px] 2xl:text-xl 3xl:text-2xl leading-relaxed max-w-xl 2xl:max-w-2xl mx-auto lg:mx-0">
                Pushing the boundaries of reality: Transforming bold creative ambitions into breathtaking, broadcast-ready experiences.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 2xl:gap-5 w-full sm:w-auto pt-8 md:pt-10">
              <Link href="/contact" className="w-full sm:w-auto">
                <button className="group relative w-full sm:min-w-[160px] 2xl:min-w-[200px] h-[48px] 2xl:h-[56px] rounded-full bg-white text-black font-black text-[11px] 2xl:text-[13px] tracking-[2px] flex items-center justify-center gap-2 transition-all duration-500 active:scale-95 shadow-xl overflow-hidden">

                  {/* Gold Hover Background */}
                  <div className="absolute inset-0 w-0 bg-[#FFD36A] transition-all duration-500 ease-out group-hover:w-full" />

                  {/* Button Text */}
                  <span className="relative z-10 flex items-center gap-2 group-hover:text-black transition-colors duration-500">
                    Start Project <ArrowUpRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
              </Link>
              <Link href="/case-studies" className="inline-flex items-center justify-center w-full sm:min-w-[140px] 2xl:min-w-[180px] h-[48px] 2xl:h-[56px] rounded-full border border-white/40 text-white text-[11px] 2xl:text-[13px] font-bold uppercase tracking-[2px] hover:bg-white/10 transition-all">
                View Work
              </Link>
            </div>
          </div>

          {/* RIGHT IMAGE BLOCK */}
          <div className="lg:col-span-5 relative flex items-center justify-center mt-12 lg:mt-0">
            <div className="absolute w-[250px] h-[250px] bg-black/20 blur-[80px] rounded-full" />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="relative w-full max-w-[280px] lg:max-w-[380px] 2xl:max-w-[480px]"
            >
              <Image
                src="/home-hero-img.png"
                alt="Strategic Digital Marketing"
                width={700}
                height={700}
                priority
                className="relative z-[4] w-full h-auto object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.2)]"
              />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}