
"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Star } from "lucide-react";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [offset, setOffset] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    const handleScroll = () => {
      if (window.innerWidth >= 1024) {
        setOffset(window.scrollY * 0.2);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    // 🖥️ 4K/2K: Padding top adjustment for larger displays
    <section className="relative min-h-screen bg-[#030303] overflow-hidden pt-28 md:pt-36 lg:pt-24 2xl:pt-40 flex items-center selection:bg-blue-600">

      {/* 🖼️ BACKGROUND IMAGE LAYER (Optimized) */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/home-hero.jpg"
          alt="High Rise Digital - Trusted Digital Marketing Agency Background"
          fill 
          priority 
          quality={90} // 4K ke liye quality thori barhai hai
          className="object-cover opacity-15"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#030303]/80 via-transparent to-[#030303]" />
      </div>

      {/* 🌌 AMBIENT LIGHTS (Ultra-Wide support) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-0 left-[-10%] w-[300px] sm:w-[600px] 2xl:w-[1000px] h-[300px] sm:h-[600px] 2xl:h-[1000px] bg-blue-600/[0.05] blur-[120px] rounded-full" />
        {!isMobile && (
          <div className="absolute top-[20%] right-[10%] w-72 h-72 2xl:w-[500px] 2xl:h-[500px] rounded-full bg-blue-500/5 blur-[100px] animate-shape-float" />
        )}
      </div>

      {/* 📦 Container: max-w extended for 4K stability */}
      <div className="relative z-10 max-w-7xl 2xl:max-w-[110rem] mx-auto px-6 w-full py-12 2xl:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 2xl:gap-24 items-center">

          {/* 📝 LEFT CONTENT */}
        <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
  // space-y-6 ko kam kar ke space-y-3 (mobile) aur lg:space-y-4 (desktop) kar diya hai
  className="lg:col-span-7 space-y-3 lg:space-y-4 2xl:space-y-6 text-center lg:text-left flex flex-col items-center lg:items-start"
>
  {/* 🖥️ Heading */}
  <h1 className="text-4xl sm:text-6xl lg:text-7xl 2xl:text-8xl 3xl:text-[130px] font-black leading-[1.1] lg:leading-[0.95] 2xl:leading-[0.9] tracking-tighter text-white">
    Digital
    <br />
    <span className="bg-gradient-to-r from-[#00f2ff] via-[#0070ff] to-[#00f2ff] bg-[length:200%_auto] animate-gradient text-transparent bg-clip-text">
      Marketing Agency
    </span>
  </h1>

  {/* 🖥️ Paragraph - Heading ke bilkul qareeb */}
  <p className="text-zinc-400 text-sm md:text-base lg:text-lg 2xl:text-2xl font-medium leading-relaxed max-w-xl 2xl:max-w-4xl mx-auto lg:mx-0">
    We are a results-driven digital marketing agency providing SEO, PPC, social media, and web solutions for businesses across the USA, UK, Australia, UAE, and worldwide markets.
  </p>

  {/* Buttons container - iske upar pt-4 add kiya taake buttons thore niche rahein text se */}
  <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 2xl:gap-8 w-full sm:w-auto pt-4 md:pt-6">
    <Link href="/contact" className="w-full sm:w-auto">
      <button 
        aria-label="Start your digital marketing project"
        className="w-full sm:w-auto px-8 2xl:px-14 py-4 2xl:py-7 rounded-full border border-white bg-white text-black font-bold text-xs 2xl:text-lg uppercase tracking-widest flex items-center justify-center gap-2.5 hover:bg-transparent hover:text-white transition-all duration-300 shadow-xl"
      >
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
        <Star key={i} size={12} className="fill-blue-500 text-blue-500 2xl:w-6 2xl:h-6" aria-hidden="true" />
      ))}
    </div>
    <p className="text-zinc-500 font-bold text-[10px] 2xl:text-base uppercase tracking-tight">
      Trusted by 150+ rapid-scale founders
    </p>
  </div>
</motion.div>

          {/* 📸 RIGHT IMAGE BLOCK */}
          <motion.div
            style={{ y: isMobile ? 0 : offset }}
            className="lg:col-span-5 relative flex items-center justify-center"
          >
            <motion.div
              initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-[450px] 2xl:max-w-[750px]" // 🖥️ 4K: Hero image scale up
            >
              <div className="absolute inset-0 bg-blue-600/10 rounded-full blur-[80px] 2xl:blur-[150px] pointer-events-none" />

              <Image
                src="/hero-img.webp"
                alt="Strategic Digital Marketing System Display" 
                width={750} // Increased for 4K clarity
                height={750} 
                priority 
                className="relative z-10 w-full h-auto object-contain drop-shadow-2xl animate-float-slow"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 450px, 750px" 
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      <style jsx global>{`
        .animate-gradient { animation: gradientMove 6s linear infinite; }
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float-slow { animation: float-slow 5s ease-in-out infinite; }
        @keyframes shapeFloat {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(5deg); }
        }
        .animate-shape-float { animation: shapeFloat 10s ease-in-out infinite; }
      `}</style>
    </section>
  );
}