"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Flame, ExternalLink } from "lucide-react";

// ========================================================
// 📦 CENTRALISED PROJECTS ACQUISITION Blueprints Array
// ========================================================
export const projects = [
  // --- WEBSITE DEVELOPMENT (10 Unique Projects) ---
  {
    slug: "rmc-roofing",
    title: "RMC Roofing",
    category: "web",
    image: "/web1.jpg",
    liveUrl: "https://rmcroofingnm.com/"
  },
  {
    slug: "famme-propre",
    title: "Famme Propre",
    category: "web",
    image: "/web2.jpg",
    liveUrl: "https://www.femmepropre.co.uk/"
  },
  {
    slug: "channel1",
    title: "Channel1",
    category: "web",
    image: "/web3.jpg",
    liveUrl: "https://channel1.com.au/"
  },
  {
    slug: "doctors-of-osteo",
    title: "Doctors Of Osteo",
    category: "web",
    image: "/web4.jpg",
    liveUrl: "https://www.doctorsofosteo.com.au/"
  },
  {
    slug: "feeding-fussy-kids",
    title: "Feeding Fussy Kids",
    category: "web",
    image: "/web5.jpg",
    liveUrl: "https://feedingfussykids.com/"
  },
  {
    slug: "fund-me",
    title: "Fund Me",
    category: "web",
    image: "/web6.jpg",
    liveUrl: "https://fundme.nz/"
  },
  {
    slug: "mango-credit",
    title: "Mango Credit",
    category: "web",
    image: "/web7.jpg",
    liveUrl: "https://mangocredit.com.au/"
  },
  {
    slug: "car-recovery",
    title: "Car Recovery London",
    category: "web",
    image: "/web8.jpg",
    liveUrl: "https://carsrecoverylondon.com/"
  },
  {
    slug: "zaiqah-royal",
    title: "Zaiqah Royale",
    category: "web",
    image: "/web9.jpg",
    liveUrl: "https://zaiqahroyale.com/"
  },
  {
    slug: "rino-roofing",
    title: "Rhino Roofing Orlando",
    category: "web",
    image: "/web10.jpg",
    liveUrl: "https://rhinoroofingorlando.com/"
  },

  // --- SEO PERFORMANCE CAMPAIGNS (6 Projects) ---
  {
    slug: "rhino-orlando",
    title: "170% Leads Increased For Roofing Company",
    category: "seo",
    image: "/rino-roffers.jpg"
  },
  {
    slug: "breez-care",
    title: "+11% Total Sales Revenue Increased For Oral Care Brand",
    category: "seo",
    image: "/smile-care.jpg"
  },
  {
    slug: "west-london-cleaners",
    title: "+28% Organic Traffic Increase For Local Cleaning Company",
    category: "seo",
    image: "/cleaning.jpg"
  },
  {
    slug: "australia-restaurant-seo",
    title: "+6.69K Clicks in Just 3 Months For Local Restaurant",
    category: "seo",
    image: "/burger.jpg"
  },
  {
    slug: "aesthetic-clinic-seo",
    title: "+1.76K Leads For Aesthetic Clinic",
    category: "seo",
    image: "/clinic.jpg"
  },
  {
    slug: "holistic-doctor-clinic",
    title: "#1 Position in SERP For Holistic Doctor Clinic",
    category: "seo",
    image: "/dr.jpg"
  },

  // --- SOCIAL MEDIA MARKETING PERFORMANCE ---
  {
    slug: "australia-real-estate-social",
    title: "31% INCREASE IN QUALIFIED PROPERTY LEADS VIA HIGH-INTENT SOCIAL FUNNELS",
    category: "social",
    image: "/realestate.jpg"
  },
  {
    slug: "fitness-brand-ecommerce",
    title: "$598,541 IN SALES AT 22X ROAS FOR PRIVATE LABEL FITNESS BRAND VIA HIGH-CONVERTING FUNNELS",
    category: "social",
    image: "/gym.jpg"
  },
  {
    slug: "fashion-brand-ecommerce",
    title: "1,044 WEBSITE PURCHASES FOR FASHION BRAND IN 2 MONTHS AT 23.85X ROAS VIA DIRECT-RESPONSE FUNNELS",
    category: "social",
    image: "/brand.jpg"
  },
  {
    slug: "home-living-ecommerce",
    title: "25.10X ROAS FOR HOME & LIVING BRAND VIA HIGH-CONVERTING PAID SOCIAL FUNNELS",
    category: "social",
    image: "/roas.jpg"
  }
];

const filters = [
  { id: "all", label: "All Cases" },
  { id: "web", label: "Web Development" },
  { id: "seo", label: "SEO " },
  { id: "social", label: "Social Media Marketing" }
];

export default function PortfolioPage() {
  const [active, setActive] = useState("all");

  const filtered = active === "all" ? projects : projects.filter(p => p.category === active);

  return (
    <main className="bg-[#030712] text-zinc-100 selection:bg-blue-600 overflow-x-hidden min-h-screen antialiased pb-24">

      {/* 1. HERO SECTION */}
      <section className="relative w-full overflow-hidden bg-[#030712]">
        <div className="w-full">

          {/* Background Image Container */}
          <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
            <Image
              src="/home-hero.jpg"
              alt="Mesh Grid"
              fill
              sizes="100vw"
              priority
              className="object-cover object-top opacity-35"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#030712]/40 to-[#030712]" />
          </div>

          {/* Ambient Blur Dot */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/[0.05] blur-[120px] pointer-events-none" />

          {/* Full Sized Content Wrapper */}
          <div className="relative z-10 w-full mx-auto text-center lg:text-left px-6 pt-32 pb-16 md:pt-20 md:pb-24 lg:max-w-full lg:pt-40 lg:pb-16 lg:pl-40 2xl:mx-0 2xl:max-w-[1500px] 2xl:pt-48 2xl:pl-80">
            <div className="max-w-5xl">

              {/* Glassmorphism Badge Container */}
              <div className="flex items-center gap-2.5 mb-8 w-fit px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-md mx-auto lg:mx-0">
                <Flame size={12} className="text-blue-400 animate-pulse" />
                <span className="text-[10px] font-black tracking-[4px] text-blue-300 uppercase">ABOUT HIGH RISE</span>
              </div>

              {/* Main Typography Block */}
              <h1 className="text-[3rem] md:text-[3.2rem] lg:text-[3.8rem] 2xl:text-[5rem] font-black tracking-tighter leading-none text-white mb-8">
                CASE{" "}
                <span className="bg-gradient-to-r from-[#00f2ff] via-[#0070ff] to-[#00f2ff] bg-[length:200%_auto] animate-gradient text-transparent bg-clip-text">
                  STUDIES.
                </span>
              </h1>

              {/* Description Paragraph */}
              <p className="text-white text-[16px] md:text-base lg:text-[17px] 2xl:text-xl font-medium leading-relaxed max-w-xl 2xl:max-w-3xl mx-auto lg:mx-0">
                Explore expert insights, digital marketing tips, and strategies to grow your business with our latest
                blogs and industry updates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PREMIUM FILTER CONTROL CONTROLLER */}
      <section className="w-full px-6 mb-16 relative z-30 flex justify-center mt-6">
        <div className="flex flex-wrap gap-1.5 bg-zinc-900/60 p-1.5 rounded-xl border border-white/5 backdrop-blur-xl shadow-2xl items-center justify-center">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setActive(f.id)}
              className={`px-5 py-2 rounded-lg text-[10px] font-mono uppercase tracking-wider font-bold transition-all duration-300 ${
                active === f.id
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-600/10"
                  : "text-zinc-400 hover:text-zinc-200 hover:bg-white/[0.02]"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </section>

      {/* 3. PREMIUM 3-COLUMN COMPACT CARDS GRID WITH CONSTANT CLEAR TITLES */}
      <section className="w-full px-6 md:px-16 max-w-[1600px] mx-auto relative z-20">
        <motion.div
          layout
          // 🎯 FIXED: Grid updated from cols-2 to cols-3 for sleeker, smaller desktop card layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 w-full"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((item) => {
              const isWeb = item.category === "web";

              const CardContent = (
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="w-full flex flex-col group cursor-pointer"
                >
                  {/* Image wrapper with high aspect ratio */}
                  <div className="aspect-[16/10] w-full rounded-2xl rounded-tr-[35px] overflow-hidden mb-4 border border-white/[0.04] relative bg-zinc-900 shadow-xl">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 33vw"
                      className="object-cover transition-all duration-700 group-hover:scale-[1.03]"
                      priority
                    />

                    {/* Dark depth masking layer */}
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/50 via-transparent to-transparent opacity-80" />

                    {/* Meta Performance Floating Dot Badge */}
                    <div className="absolute top-4 left-4 bg-zinc-950/80 backdrop-blur-md border border-white/10 rounded-md p-1.5 flex items-center justify-center">
                      <div className={`w-1.5 h-1.5 rounded-full animate-pulse ${
                        item.category === "web" ? "bg-emerald-400" : item.category === "seo" ? "bg-blue-400" : "bg-purple-400"
                      }`} />
                    </div>
                  </div>

                  {/* 🎯 FIXED: Text area is now fully visible, larger, and cleanly styled without any truncation bugs */}
                  <div className="px-1 w-full mt-1">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-[17px] sm:text-lg md:text-xl font-black tracking-wide text-zinc-100 leading-snug group-hover:text-blue-400 transition-colors duration-300">
                        {item.title}
                      </h3>

                      {/* Arrow Icon handles layout beautifully */}
                      <div className="opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 text-blue-400 shrink-0 pt-1">
                        {isWeb && item.liveUrl ? <ExternalLink size={16} /> : <ArrowUpRight size={16} />}
                      </div>
                    </div>
                  </div>

                </motion.div>
              );

              // Conditional routing setup depending upon deployment nature
              if (isWeb && item.liveUrl) {
                return (
                  <a href={item.liveUrl} key={item.slug} target="_blank" rel="noopener noreferrer" className="block h-full">
                    {CardContent}
                  </a>
                );
              }

              return (
                <Link href={`/casestudies/${item.slug}`} key={item.slug} className="block h-full">
                  {CardContent}
                </Link>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </section>

    </main>
  );
}