"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronRight, ArrowRight } from "lucide-react";

export default function AboutPreview() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    // 🖥️ 4K/2K: Spacing increased
    <section className="relative pt-16 lg:pt-24 2xl:pt-40 pb-16 lg:pb-24 bg-[#030303] overflow-hidden border-b border-white/5">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[400px] 2xl:w-[800px] h-[200px] 2xl:h-[400px] bg-blue-600/[0.03] blur-[100px] 2xl:blur-[180px] pointer-events-none" />

      <div className="max-w-7xl 2xl:max-w-[110rem] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 2xl:gap-32 items-center">

          {/* LEFT: Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative flex items-center justify-center lg:justify-start"
          >
            <div className="absolute w-[60%] h-[60%] bg-blue-600/[0.05] blur-[80px] rounded-full" />
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10 w-full max-w-[380px] lg:max-w-[480px] 2xl:max-w-[700px]"
            >
              <Image
                src="/mobile.webp"
                alt="High Rise Digital - Leading Global Agency"
                width={700}
                height={700}
                className="w-full h-auto object-contain drop-shadow-2xl"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 480px, 700px"
              />
            </motion.div>
          </motion.div>

          {/* RIGHT: Text Content (Full Original Text) */}
          <div className="space-y-6 2xl:space-y-12">
            <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <span className="text-[10px] 2xl:text-base uppercase tracking-[3px] text-blue-400 font-bold bg-blue-500/5 px-3 2xl:px-5 py-1 2xl:py-2 rounded-full border border-blue-500/10">
                Agency Insight
              </span>
            </motion.div>

            <motion.h2
              variants={fadeIn} initial="hidden" whileInView="visible" transition={{ delay: 0.1 }} viewport={{ once: true }}
              className="text-3xl md:text-5xl 2xl:text-7xl font-black tracking-tight text-white leading-[1.1]"
            >
              Leading Digital Marketing Company{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                Working Globally
              </span>
            </motion.h2>

            <motion.div
              variants={fadeIn} initial="hidden" whileInView="visible" transition={{ delay: 0.2 }} viewport={{ once: true }}
              className="space-y-4 2xl:space-y-8"
            >
              {/* ✅ Full Original Text Restored */}
              <p className="text-zinc-400 text-sm md:text-base 2xl:text-2xl leading-relaxed max-w-xl 2xl:max-w-4xl opacity-80 font-medium">
                As a leading digital marketing company working globally, we help businesses grow with smart, creative, and results-focused digital solutions. 
              </p>
              <p className="text-zinc-400 text-sm md:text-base 2xl:text-2xl leading-relaxed max-w-xl 2xl:max-w-4xl opacity-80 font-medium">
                Our experienced team works closely with clients to understand their goals and create strategies that improve online visibility, generate quality leads, and increase business growth.
              </p>
              <p className="text-zinc-400 text-sm md:text-base 2xl:text-2xl leading-relaxed max-w-xl 2xl:max-w-4xl opacity-80 font-medium">
                We provide professional services including SEO, social media marketing, PPC advertising, branding, and website development for businesses of all sizes. 
              </p>
              <p className="text-zinc-400 text-sm md:text-base 2xl:text-2xl leading-relaxed max-w-xl 2xl:max-w-4xl opacity-80 font-medium">
                Serving clients across the USA, UK, Australia, UAE, and many other countries, we focus on delivering reliable support, transparent communication, and measurable results that help brands succeed in today’s competitive digital world.
              </p>
            </motion.div>

            <motion.div
              variants={fadeIn} initial="hidden" whileInView="visible" transition={{ delay: 0.3 }} viewport={{ once: true }}
              className="flex items-center gap-6 2xl:gap-10 pt-2"
            >
              <Link href="/about">
                <button className="px-6 2xl:px-10 py-3 2xl:py-5 rounded-lg bg-white text-black font-bold text-[11px] 2xl:text-lg uppercase tracking-wider hover:bg-blue-600 hover:text-white transition-all flex items-center gap-2">
                  Our Story <ChevronRight size={14} className="2xl:w-6 2xl:h-6" />
                </button>
              </Link>

              <Link href="/services" className="group flex items-center gap-2 text-zinc-400 hover:text-white font-bold text-[11px] 2xl:text-lg uppercase tracking-wider transition-colors">
                View Services <ArrowRight size={14} className="2xl:w-6 2xl:h-6 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}