"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

const SERVICES = [
  { 
    id: "01", 
    title: "Web Development", 
    link: "/services/web-dev", 
    desc: "Creating responsive, user-friendly websites designed to improve performance, engagement, and conversions.", 
    image: "/web.webp" 
  },
  { 
    id: "02", 
    title: "Search Engine Optimization", 
    link: "/services/seo", 
    desc: "Improving website rankings through strategic SEO techniques, keyword research, and optimization.", 
    image: "/seo.png" 
  },
  { 
    id: "03", 
    title: "Social Media Marketing", 
    link: "/services/social-media", 
    desc: "Growing your brand presence through engaging social media campaigns and targeted strategies.", 
    image: "/man.webp" 
  },
  { 
    id: "04", 
    title: "Branding & Identity", 
    link: "/services/branding", 
    desc: "Building strong brand identities that create trust, recognition, and lasting customer impressions.", 
    image: "/branding.webp" 
  },
  { 
    id: "05", 
    title: "AI Automation", 
    link: "/services/ai-automation", 
    desc: "Streamlining business operations with smart AI automation solutions for improved productivity.", 
    image: "/ai.webp" 
  },
  { 
    id: "06", 
    title: "eCommerce Management", 
    link: "/services/ecommerce", 
    desc: "Managing online stores efficiently to increase sales, customer experience, and business growth", 
    image: "/ecommerce.webp" 
  },
];

export default function Services() {
  const [active, setActive] = useState(0);

  return (
    <section className="relative bg-[#030303] py-20 2xl:py-48 overflow-hidden">
      
      {/* Background Glows */}
      <div className="absolute top-0 left-0 w-[400px] 2xl:w-[800px] h-[400px] 2xl:h-[800px] bg-blue-500/10 blur-[130px] 2xl:blur-[200px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[300px] 2xl:w-[600px] h-[300px] 2xl:h-[600px] bg-cyan-400/10 blur-[110px] 2xl:blur-[180px] pointer-events-none" />

      <div className="max-w-7xl 2xl:max-w-[110rem] mx-auto px-6 relative z-10">
        
        {/* HEADER */}
        <div className="mb-20 2xl:mb-32 text-center lg:text-left">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-[10px] 2xl:text-lg uppercase tracking-[0.4em] text-blue-400 font-bold"
          >
            Our Expertise
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mt-4 text-4xl md:text-6xl 2xl:text-8xl font-black tracking-tight leading-none text-white uppercase"
          >
            Digital Marketing <br className="hidden lg:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">
              SERVICES
            </span>
          </motion.h2>
        </div>

        {/* MAIN GRID */}
        <div className="grid lg:grid-cols-12 gap-12 2xl:gap-24 items-start relative">
          
          {/* LEFT SIDE: SYNC SLIDING IMAGE */}
          <div className="hidden lg:block lg:col-span-5 relative self-stretch">
            <motion.div
              animate={{ 
                // Image moves vertically based on active index to stay parallel
                y: active * 128, // Adjusted specifically for this row height
                transition: { type: "spring", stiffness: 120, damping: 25 }
              }}
              className="relative w-full h-[380px] 2xl:h-[550px] rounded-[2.5rem] 2xl:rounded-[4rem] overflow-hidden border border-white/10 shadow-2xl bg-zinc-900"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={SERVICES[active].image}
                    alt={SERVICES[active].title}
                    fill
                    priority
                    sizes="40vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/90 via-transparent to-transparent" />
                  <div className="absolute bottom-8 left-8 2xl:bottom-12 2xl:left-12 z-20">
                     <span className="text-[10px] 2xl:text-base text-blue-400 font-bold">0{active + 1}</span>
                     <h3 className="text-2xl 2xl:text-4xl font-black text-white">{SERVICES[active].title}</h3>
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </div>

          {/* RIGHT SIDE: THE SERVICES LIST */}
          <div className="lg:col-span-7 border-t border-white/10">
            {SERVICES.map((item, i) => {
              const isActive = active === i;
              return (
                <div
                  key={item.id}
                  onMouseEnter={() => setActive(i)}
                  className="group relative border-b border-white/10 transition-colors duration-500"
                >
                  <Link href={item.link} className="relative z-10 flex items-center justify-between gap-6 py-10 2xl:py-20 px-4">
                    <div className="flex items-start gap-6 2xl:gap-12">
                      <span className={`text-xs 2xl:text-xl font-bold mt-2 transition-colors duration-300 ${isActive ? "text-blue-400" : "text-zinc-700"}`}>
                        {item.id}
                      </span>
                      <div>
                        <h3 className={`text-2xl md:text-[34px] 2xl:text-6xl font-black tracking-tight leading-none transition-all duration-300 ${isActive ? "text-white" : "text-zinc-600"}`}>
                          {item.title}
                        </h3>
                        <motion.div
                          initial={false}
                          animate={{ 
                            height: isActive ? "auto" : 0, 
                            opacity: isActive ? 1 : 0, 
                            marginTop: isActive ? 16 : 0 
                          }}
                          className="overflow-hidden"
                        >
                          <p className="text-zinc-400 text-sm 2xl:text-2xl leading-relaxed max-w-lg 2xl:max-w-3xl opacity-80">
                            {item.desc}
                          </p>
                        </motion.div>
                      </div>
                    </div>

                    <div className={`w-12 h-12 2xl:w-20 2xl:h-20 rounded-full border flex items-center justify-center transition-all duration-500 flex-shrink-0 ${isActive ? "bg-white text-black border-white rotate-45 shadow-[0_0_20px_rgba(255,255,255,0.3)]" : "border-white/10 text-zinc-600"}`}>
                      <ArrowUpRight size={20} className="2xl:w-10 2xl:h-10" />
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>

        {/* ✅ FINAL CTA BUTTON - RESTORED & SCALED */}
        <div className="mt-24 2xl:mt-40 flex justify-center">
          <Link href="/services">
            <button className="group relative overflow-hidden rounded-full border border-white/10 bg-white/[0.03] px-12 2xl:px-24 py-5 2xl:py-10 text-[10px] 2xl:text-xl font-bold uppercase tracking-[0.4em] text-white transition-all duration-500 hover:bg-white hover:text-black shadow-2xl">
              <span className="relative z-10 flex items-center gap-3">
                Explore All Services
                <ArrowUpRight size={18} className="2xl:w-8 2xl:h-8 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
}