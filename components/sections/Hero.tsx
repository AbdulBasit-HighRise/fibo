"use client";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion"; // Optimized Hook
import { ArrowUpRight, Star } from "lucide-react";

export default function HeroSection() {
  // Framer Motion ka native scroll handler (No Lag)
  const { scrollY } = useScroll();
  const yImage = useTransform(scrollY, [0, 500], [0, 100]);

  return (
    <section className="relative min-h-screen bg-[#030303] overflow-hidden pt-28 md:pt-36 lg:pt-24 2xl:pt-40 flex items-center selection:bg-blue-600">

      {/* 🖼️ BACKGROUND IMAGE LAYER */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/home-hero.jpg"
          alt="High Rise Digital - Trusted Digital Marketing Agency Background"
          fill 
          priority 
          quality={85} 
          className="object-cover opacity-15"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#030303]/80 via-transparent to-[#030303]" />
      </div>

      {/* 🌌 AMBIENT LIGHTS */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-0 left-[-10%] w-[300px] sm:w-[600px] 2xl:w-[1000px] h-[300px] sm:h-[600px] 2xl:h-[1000px] bg-blue-600/[0.05] blur-[120px] rounded-full" />
        {/* Mobile par heavy animations hide kar di hain taake scroll smooth rahay */}
        <div className="hidden lg:block absolute top-[20%] right-[10%] w-72 h-72 2xl:w-[500px] 2xl:h-[500px] rounded-full bg-blue-500/5 blur-[100px] animate-shape-float" />
      </div>

      <div className="relative z-10 max-w-7xl 2xl:max-w-[110rem] mx-auto px-6 w-full py-12 2xl:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 2xl:gap-24 items-center">

          {/* 📝 LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-6 2xl:space-y-12 text-center lg:text-left flex flex-col items-center lg:items-start"
          >
            <h1 className="text-4xl sm:text-6xl lg:text-7xl 2xl:text-8xl 3xl:text-[130px] font-black leading-[1.1] lg:leading-[0.95] 2xl:leading-[0.9] tracking-tighter text-white">
              Trusted Digital
              <br />
              <span className="bg-gradient-to-r from-[#00f2ff] via-[#0070ff] to-[#00f2ff] bg-[length:200%_auto] animate-gradient text-transparent bg-clip-text">
                Marketing Agency
              </span>
            </h1>

            <p className="text-zinc-400 text-sm md:text-base lg:text-lg 2xl:text-2xl font-medium leading-relaxed max-w-xl 2xl:max-w-4xl mx-auto lg:mx-0">
              We are a results-driven digital marketing agency providing SEO, PPC, social media, and web solutions for businesses across the USA, UK, Australia, UAE, and worldwide markets.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 2xl:gap-8 w-full sm:w-auto pt-2">
              <Link href="/contact" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto px-8 2xl:px-14 py-4 2xl:py-7 rounded-full border border-white bg-white text-black font-bold text-xs 2xl:text-lg uppercase tracking-widest flex items-center justify-center gap-2.5 hover:bg-transparent hover:text-white transition-all duration-300">
                  Start Project
                  <ArrowUpRight size={15} className="2xl:w-6 2xl:h-6" />
                </button>
              </Link>
              <Link href="/portfolio" className="inline-flex items-center justify-center w-full sm:w-auto px-8 2xl:px-14 py-4 2xl:py-7 rounded-full border border-white/10 text-zinc-400 text-xs 2xl:text-lg font-bold uppercase tracking-widest hover:border-white/30 hover:text-white transition-all duration-300">
                View Work
              </Link>
            </div>

            {/* Social Trust */}
            <div className="flex items-center gap-3 pt-6 border-t border-white/5 w-full max-w-md 2xl:max-w-2xl mx-auto lg:mx-0">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={12} className="fill-blue-500 text-blue-500 2xl:w-6 2xl:h-6" />
                ))}
              </div>
              <p className="text-zinc-500 font-bold text-[10px] 2xl:text-base uppercase tracking-tight">
                Trusted by 150+ rapid-scale founders
              </p>
            </div>
          </motion.div>

          {/* 📸 RIGHT IMAGE BLOCK */}
          <motion.div
            style={{ y: yImage }} // JS scroll listener khatam, ab Framer engine handle karega
            className="lg:col-span-5 relative flex items-center justify-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative w-full max-w-[450px] 2xl:max-w-[750px]"
            >
              <div className="absolute inset-0 bg-blue-600/10 rounded-full blur-[80px] 2xl:blur-[150px] pointer-events-none" />

              <Image
                src="/hero-img.webp"
                alt="Strategic Digital Marketing System Display" 
                width={750} 
                height={750} 
                priority 
                className="relative z-10 w-full h-auto object-contain drop-shadow-2xl animate-float-slow"
                sizes="(max-width: 1200px) 100vw, 750px" 
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      <style jsx global>{`
        .animate-gradient { animation: gradientMove 6s linear infinite; }
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }
        .animate-float-slow { 
          animation: float-slow 6s ease-in-out infinite; 
          will-change: transform; /* Performance fix */
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        .animate-shape-float { animation: shapeFloat 15s ease-in-out infinite; }
        @keyframes shapeFloat {
          0%, 100% { transform: translate(0,0) rotate(0deg); }
          50% { transform: translate(-20px, -20px) rotate(5deg); }
        }
      `}</style>
    </section>
  );
}