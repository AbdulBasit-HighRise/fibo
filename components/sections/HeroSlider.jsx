"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const awardLogos = [
  { src: "/brands/ahrefs.png", alt: "Ahrefs" },
  // { src: "/brands/googleleads.png", alt: "Google" },
  { src: "/brands/google-analisis.png", alt: "Google Analatics" },
  { src: "/brands/google-patner.png", alt: "Google patner" },
  // { src: "/brands/Google-Partner.png", alt: "Google" },
  { src: "/brands/linkedin.png", alt: "LinkedIn" },
  { src: "/brands/meta-business.png", alt: "meta" },
  { src: "/brands/semrush.png", alt: "semrush" }, 
  { src: "/brands/shopify-patner.png", alt: "shopify" },
  { src: "/brands/tiktok.png", alt: "tiktok" },
  { src: "/brands/woocommerce.png", alt: "woocommerce" },

];

export default function HeroSlider() {
  return (
    <section className="border-y border-white/5 py-8 md:py-12 bg-gradient-to-r from-[#030303] via-[#050a18] to-[#030303] px-6 md:px-8 lg:px-20 2xl:px-32 py-10 md:py-14 2xl:py-24 hoverflow-hidden relative">
      
      {/* Side Fades: Logos ko smooth edges dene ke liye */}
      <div className="absolute inset-y-0 left-0 w-24 md:w-48 bg-gradient-to-r from-[#020617] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 md:w-48 bg-gradient-to-l from-[#020617] to-transparent z-10 pointer-events-none" />

      <div className="flex">
        <motion.div 
          className="flex flex-nowrap items-center gap-8 md:gap-15 2xl:gap-20 px-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            duration: 25, 
            ease: "linear", 
            repeat: Infinity 
          }}
        >
          {/* Loop double kiya hai infinite effect ke liye */}
          {[...awardLogos, ...awardLogos].map((logo, index) => (
            <div
              key={index}
              className="group relative flex-shrink-0 flex items-center justify-center transition-all duration-500"
            >
              {/* 🖼️ Fixed Height Container: Is se saaray logos barabar nazar ayengay */}
              <div className="h-8 md:h-12 2xl:h-16 w-[120px] md:w-[160px] 2xl:w-[200px] relative">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  className="object-contain transition-all duration-500 
                             
                             group-hover:grayscale-0 group-hover:opacity-100 
                             group-hover:brightness-100 group-hover:scale-105"
                  sizes="200px"
                />
              </div>

              {/* ✨ Glow Effect on Hover */}
              <div className="absolute inset-0 bg-blue-500/5 blur-[30px] opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}