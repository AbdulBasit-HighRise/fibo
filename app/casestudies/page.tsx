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
  // --- WEBSITE DEVELOPMENT (22 Unique Projects) ---
  {
    slug: "rmc-roofing",
    title: "RMC Roffing",
    category: "web",
    metric: "Live Preview Available",
    // tagline: "Type-safe custom Next.js deployment sync built over lightning-fast API microservices.",
    image: "/web1.jpg",
    liveUrl: "https://crypto-telemetry-demo.vercel.app"
  },
  {
    slug: "famme-propre",
    title: "Famme Propre",
    category: "web",
    metric: "Live Preview Available",
    // tagline: "Decoupled React layout structures paired seamlessly with secure background databases.",
    image: "/web2.jpg",
    liveUrl: "https://headless-commerce-preview.vercel.app"
  },
  {
    slug: "channel1",
    title: "Channel1",
    category: "web",
    metric: "Live Preview Available",
    // tagline: "Custom Node.js database architectures with responsive Framer Motion UI structures.",
    image: "/web3.jpg",
    liveUrl: "https://enterprise-dashboard-core.vercel.app"
  },
  {
    slug: "doctors-of-osteo",
    title: "Doctors Of Osteo",
    category: "web",
    metric: "Live Preview Available",
    // tagline: "High-security banking interface layered over dynamic transaction pipelines.",
    image: "/web4.jpg",
    liveUrl: "https://fintech-banking-core.vercel.app"
  },
  {
    slug: "feeding-fussy-kids",
    title: "Feeding Fussy Kids",
    category: "web",
    metric: "Live Preview Available",
    // tagline: "Next-gen centralized lead management dashboard mapping critical B2B milestones.",
    image: "/web5.jpg",
    liveUrl: "https://saas-crm-flow.vercel.app"
  },
  {
    slug: "fund-me",
    title: "Fund Me",
    category: "web",
    metric: "Live Preview Available",
    tagline: "Decoupled Next.js client handling dynamic Stripe billing tracks and user token counters.",
    image: "/web6.jpg",
    liveUrl: "https://ai-prompt-market.vercel.app"
  },
  {
    slug: "mango-credit",
    title: "Mango Credit",
    category: "web",
    metric: "Live Preview Available",
    // tagline: "Immersive WebGL map structures filtering luxury residential architecture units instantly.",
    image: "/web7.jpg",
    liveUrl: "https://spatial-homes-live.vercel.app"
  },
  {
    slug: "car-recovery",
    title: "Car Recovery London",
    category: "web",
    metric: "Live Preview Available",
    // tagline: "Type-safe Web3 core modules connecting multi-chain consumer browser wallets safely.",
    image: "/web8.jpg",
    liveUrl: "https://liquidity-stake-dapp.vercel.app"
  },
  {
    slug: "zaiqah-royal",
    title: "Zaiqah Royal",
    category: "web",
    metric: "Live Preview Available",
    // tagline: "HIPAA compliant booking software tracking doctor synchronization queues in real-time.",
    image: "/web9.jpg",
    liveUrl: "https://pulse-telemed-hub.vercel.app"
  },
  {
    slug: "rino-roofing",
    title: "Rino Roofing",
    category: "web",
    metric: "Live Preview Available",
    // tagline: "Custom video streaming pipelines paired with instant interactive student grading matrices.",
    image: "/web10.jpg",
    liveUrl: "https://apex-lms-platform.vercel.app"
  },

  // --- SEO PERFORMANCE CAMPAIGNS (6 Projects) ---
  {
    slug: "rhino-orlando", // Perfect slug mapping for URL matching
    title: "Rhino Roofing Orlando Scale",
    category: "seo",
    metric: "+1,194% Traffic Spike",
   // tagline: "Comprehensive conversion loop infrastructure overhaul combined with geometric local market visibility capture.",
    image: "/rino-roffers.jpg"
  },

  {
    slug: "breez-care",
    title: "Breez Care",
    category: "seo",
    metric: "Ranked #1 for 400+ Keywords",
    // tagline: "Automated topical hubs answering scalable multi-intent search parameters.",
    image: "/smile-care.jpg"
  },
  {
    slug: "west-london-cleaners",
    title: "West London Cleaning Company",
    category: "seo",
    metric: "+340% Domain Authority",
    // tagline: "Clean architectural crawling maps and systemic search visibility restoration blueprints.",
    image: "/cleaning.jpg"
  },
  {
    slug: "australia-restaurant-seo",
    title: "Local Restaurant Australia",
    category: "seo",
    metric: "800K Active Search Clicks",
    // tagline: "Medical-grade conversational semantic clustering generating direct organic intent leads.",
    image: "/burger.jpg"
  },
  {
    slug: "aesthetic-clinic-seo",
    title: "Aesthetic Clinic",
    category: "seo",
    metric: "Zero Indexing Bottlenecks",
    // tagline: "Resolving complex dynamic page routing deadlocks to clear path crawling loops.",
    image: "/clinic.jpg"
  },
  {
    slug: "holistic-doctor-clinic",
    title: "Holistic Doctor Clinic",
    category: "seo",
    metric: "Zero Indexing Bottlenecks",
    // tagline: "Resolving complex dynamic page routing deadlocks to clear path crawling loops.",
    image: "/dr.jpg"
  },

  // --- SOCIAL MEDIA MARKETING PERFORMANCE ---
  {
    slug: "australia-real-estate-social",
    title: "Victoria Property Network",
    category: "social",
    metric: "4.2x Attributed ROAS",
    // tagline: "Full-funnel Meta and TikTok targeted performance deployment scaling revenue pipelines.",
    image: "/realestate.jpg"
  },
  {
    slug: "b2b-saas-lead-campaign",
    title: "B2B SaaS Lead Generation Matrix",
    category: "social",
    metric: "+180% Demo Bookings",
    tagline: "LinkedIn conversational ad tracks mapping high-value enterprise accounts.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800"
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
    <main className="bg-[#030712] text-zinc-100 selection:bg-blue-600 overflow-x-hidden min-h-screen antialiased">

      {/* 1. HERO SECTION (Optimized) */}
      <section className="relative w-full overflow-hidden bg-[#030712]">
        <div className="container-wide">

          {/* Background Image Container with Exact Matching Premium CSS */}
          <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
            <Image
              src="/home-hero.jpg"
              alt="Mesh Grid"
              fill
              sizes="100vw"
              priority // 🔥 PageSpeed boost: Hero image jaldi load hogi
              className="object-cover object-top opacity-35"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#030712]/40 to-[#030712]" />
          </div>

          {/* Ambient Blur Dot to lock the signature aesthetic */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/[0.05] blur-[120px] pointer-events-none" />

          {/* Full Sized Padded Content Wrapper */}
          <div className="relative z-10 w-full mx-auto text-center lg:text-left px-6 pt-32 pb-16 md:pt-20 md:pb-24 lg:max-w-full lg:pt-40 lg:pb-28 lg:pl-40 2xl:mx-0 2xl:max-w-[1500px] 2xl:pt-48 2xl:pb-36 2xl:pl-80 3xl:mx-0 3xl:max-w-[1800px] 3xl:pt-60 3xl:pb-44 3xl:pl-72">
            {/* Aapka Content */}
            <div className="max-w-5xl">

              {/* Glassmorphism Badge Container */}
              <div className="flex items-center gap-2.5 mb-8 w-fit px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-md mx-auto md:mx-0">
                <Flame size={12} className="text-blue-400 animate-pulse" />
                <span className="text-[10px] font-black tracking-[4px] text-blue-300 uppercase">ABOUT HIGH RISE</span>
              </div>

              {/* Main Typography Block with Tight Line Height */}
              <h1 className="text-[3rem]  md:text-[3.2rem] lg:text-[3.8rem] 2xl:text-[5rem] font-black tracking-tighter leading-[0.8] text-white mb-8">
                CASE {" "}
                <span className="bg-gradient-to-r from-[#00f2ff] via-[#0070ff] to-[#00f2ff] bg-[length:200%_auto] animate-gradient text-transparent bg-clip-text">
                  STUDIES.
                </span>
              </h1>

              {/* Description Paragraph */}
              <p className="text-white text-[16px] md:text-base lg:text-[17px] 2xl:text-xl 3xl:text-2xl font-medium leading-relaxed max-w-xl 2xl:max-w-3xl mx-auto lg:mx-0 ">
                Explore expert insights, digital marketing tips, and strategies to grow your business with our latest blogs and industry updates.                   </p>
            </div>
          </div>
        </div>

      </section>

      {/* --- PREMIUM FILTER CONTROL CONTROLLER --- */}
      <section className="max-w-6xl mx-auto px-6 -mt-6 relative z-30">
        <div className="flex flex-wrap gap-1.5 bg-zinc-900/60 p-1.5 rounded-xl border border-white/5 backdrop-blur-xl w-fit shadow-2xl">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setActive(f.id)}
              className={`px-4 sm:px-5 py-2 rounded-lg text-[10px] font-mono uppercase tracking-wider font-bold transition-all duration-300 ${active === f.id
                ? "bg-blue-600 text-white shadow-lg shadow-blue-600/10"
                : "text-zinc-400 hover:text-zinc-200 hover:bg-white/[0.02]"
                }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </section>

      {/* --- GRID GRID ARCHITECTURE DISPLAY --- */}
      <section className="max-w-6xl mx-auto px-6 py-16 relative z-20">
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
                  className="rounded-xl border border-white/5 bg-zinc-950/40 p-4 flex flex-col h-full shadow-xl transition-all duration-500 hover:border-blue-500/20 hover:bg-zinc-900/30 group"
                >
                  {/* Dynamic Scaled Media Asset Block */}
                  <div className="aspect-[16/10] rounded-lg overflow-hidden mb-4 border border-white/5 relative bg-zinc-900">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-w-768px) 100vw, 33vw"
                      className="object-cover filter grayscale group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent opacity-80" />

                    {/* Meta Performance Floating Tag */}
                    <div className="absolute top-2.5 left-2.5 bg-zinc-950/90 backdrop-blur-md border border-white/10 rounded px-2 py-0.5 flex items-center gap-1.5">
                      <div className={`w-1 h-1 rounded-full animate-pulse ${isWeb ? 'bg-emerald-400' : 'bg-blue-400'}`} />
                      <span className="text-[9px] font-mono font-bold tracking-wide text-zinc-300">{item.metric}</span>
                    </div>
                  </div>

                  {/* Core Block Narrative Context */}
                  <div className="flex flex-col flex-grow justify-between space-y-4">
                    <div className="space-y-2">
                      {/* <span className={`text-[8px] font-mono font-bold uppercase tracking-widest px-2 py-0.5 rounded border inline-block ${isWeb ? 'text-emerald-400 bg-emerald-500/5 border-emerald-500/10' :
                        item.category === 'seo' ? 'text-blue-400 bg-blue-500/5 border-blue-500/10' : 'text-purple-400 bg-purple-500/5 border-purple-500/10'
                        }`}>
                        {item.category === 'web' ? 'ENGINEERING' : item.category === 'seo' ? 'SEO STRATEGY' : 'PAID CHANNELS'}
                      </span> */}

                      <h3 className="text-base font-bold tracking-tight text-white group-hover:text-blue-400 transition-colors duration-300 leading-snug">
                        {item.title}
                      </h3>

                      <p className="text-zinc-400 text-xs font-normal leading-relaxed line-clamp-2">
                        {item.tagline}
                      </p>
                    </div>

                    {/* Bottom Action Loop Wrapper */}
                    <div className="pt-3 border-t border-white/[0.04] flex items-center justify-between">
                      <span className="text-[9px] font-mono uppercase font-bold tracking-wider text-zinc-500 group-hover:text-blue-400 transition-colors">
                        {isWeb ? "Launch Interface" : "View Execution Case"}
                      </span>
                      <div className="w-6 h-6 rounded-md bg-white/5 border border-white/5 flex items-center justify-center text-zinc-400 group-hover:bg-blue-600 group-hover:border-blue-600 group-hover:text-white transition-all duration-300 group-hover:rotate-45">
                        {isWeb ? <ExternalLink size={11} /> : <ArrowUpRight size={11} />}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );

              // Standard dynamic processing filters execution paths
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