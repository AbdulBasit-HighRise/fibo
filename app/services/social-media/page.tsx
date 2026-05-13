"use client";
import React from "react";
import { motion } from "framer-motion";
import { 
  Share2, TrendingUp, Flame, Users, MessageSquare, Zap, 
  Activity, Target, UserPlus, Video, PieChart, ChevronRight 
} from "lucide-react";
import Image from "next/image";

// Components Imports
import Stats from "@/components/sections/Stats";
import CTA from "@/components/sections/CTA";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Process from "@/components/sections/HowWeWork";
import Testimonials from "@/components/sections/Testimonials";
import Portfolio from "@/components/sections/PortfolioPreview";

export default function SocialMediaPage() {
    return (
        <main className="bg-[#030712] text-white selection:bg-blue-600 overflow-x-hidden">

            {/* 1. HERO SECTION - Optimized for Performance */}
              <section className="relative w-full overflow-hidden">
                   <div className="container-wide">
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
           
                   <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/[0.05] blur-[120px] pointer-events-none" />
           
                   <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-16 md:pt-40 text-center md:text-left">
                     <div className="max-w-5xl">
                       <div className="flex items-center gap-2.5 mb-8 w-fit px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-md mx-auto md:mx-0">
                         <Flame size={12} className="text-blue-400 animate-pulse" />
                       </div>
           
                       <h1 className="text-6xl sm:text-8xl md:text-[100px] font-black tracking-tighter leading-[0.8] text-white mb-8">
                         Social Media Marketing {" "}
                         <span className="bg-gradient-to-r from-[#00f2ff] via-[#0070ff] to-[#00f2ff] bg-[length:200%_auto] animate-gradient text-transparent bg-clip-text">
                         </span>
                       </h1>
                       
                       <p className="text-zinc-400 text-lg md:text-xl lg:text-2xl max-w-2xl font-medium leading-relaxed opacity-80 mx-auto md:mx-0">
                         We create powerful digital experiences through innovative marketing, creative design, and strategic solutions that help brands grow and succeed.
                       </p>
                     </div>
                   </div>
           </div>
                 </section>

            {/* 2. CORE CAPABILITIES (Content Exactly Same) */}
            <section className="relative py-24 2xl:py-40 px-6 overflow-hidden bg-[#030303]">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:32px_32px]" />
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/[0.05] blur-[120px] rounded-full pointer-events-none" />
                </div>

                <div className="max-w-7xl 2xl:max-w-[1600px] mx-auto relative z-10">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6 border-b border-white/5 pb-10">
                        <div className="max-w-2xl">
                            <div className="flex items-center gap-2 mb-3 bg-blue-500/10 w-fit px-3 py-1 rounded-full border border-blue-500/20">
                                <Share2 size={12} className="text-blue-400" />
                                <span className="text-[9px] 2xl:text-xs font-black uppercase tracking-[3px] text-blue-300">Viral Infrastructure</span>
                            </div>
                            <h2 className="text-5xl md:text-7xl 2xl:text-9xl font-black uppercase italic leading-[0.9] tracking-tighter text-white">
                                Scalable <br /> <span className="text-blue-600">Engagement.</span>
                            </h2>
                        </div>
                        <p className="text-zinc-500 font-bold text-lg md:text-xl 2xl:text-3xl italic max-w-xs 2xl:max-w-md leading-snug border-r-2 border-blue-600 pr-6 text-right md:text-left">
                            "Transforming social signals into sustainable revenue streams."
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 2xl:gap-10">
                        {[
                            { title: "Paid Acquisition", desc: "Meta & TikTok ads engineered for high ROAS. Hum budget burn nahi, scale karte hain.", icon: <Target size={24} /> },
                            { title: "Organic Authority", desc: "Viral content strategy jo algorithm ko cheat nahi, satisfy karti hai for long-term growth.", icon: <TrendingUp size={24} /> },
                            { title: "Community Ops", desc: "Active engagement aur moderation jo followers ko loyal fans aur customers mein badal de.", icon: <Users size={24} /> },
                            { title: "Influencer Sync", desc: "Niche-leading influencers ke saath partnership jo direct credibility aur traffic laye.", icon: <UserPlus size={24} /> },
                            { title: "Performance Reels", desc: "High-retention short-form video content jo attention grab kare aur result produce kare.", icon: <Video size={24} /> },
                            { title: "Analytics & ROI", desc: "Deep-dive reports jo metrics ke peeche ki asli story aur profit show karein.", icon: <PieChart size={24} /> }
                        ].map((s, i) => (
                            <motion.div 
                                key={i} 
                                whileHover={{ y: -10 }}
                                className="group relative bg-[#070707] p-10 2xl:p-16 rounded-[2.5rem] border border-white/5 hover:border-blue-500/40 transition-all duration-500"
                            >
                                <div className="relative z-10">
                                    <div className="mb-6 w-12 h-12 2xl:w-20 2xl:h-20 bg-white/[0.03] rounded-xl flex items-center justify-center border border-white/10 group-hover:bg-blue-600/20 group-hover:text-blue-400 transition-all duration-500">
                                        {s.icon}
                                    </div>
                                    <h3 className="text-2xl 2xl:text-4xl font-black uppercase italic mb-3 group-hover:text-blue-400 transition-colors">
                                        {s.title}
                                    </h3>
                                    <p className="text-zinc-500 group-hover:text-zinc-300 text-sm 2xl:text-xl font-medium leading-relaxed">
                                        {s.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Portfolio />

            {/* 4. THE SOCIAL LINE (Content Exactly Same) */}
            <section className="relative py-24 2xl:py-40 px-6 overflow-hidden bg-[#030303]">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:40px_40px]" />
                </div>

                <div className="max-w-7xl 2xl:max-w-[1600px] mx-auto relative z-10">
                    <div className="text-center mb-20">
                        <div className="flex items-center gap-2 mb-4 bg-blue-500/10 w-fit px-4 py-1.5 rounded-full border border-blue-500/20 mx-auto">
                            <Activity size={14} className="text-blue-400" />
                            <span className="text-[10px] 2xl:text-xs font-black tracking-[4px] uppercase text-blue-300">Social Engine Optimization</span>
                        </div>
                        <h2 className="text-5xl md:text-8xl 2xl:text-[130px] font-black uppercase italic leading-[0.85] tracking-tighter text-white mb-6">
                            The Growth <br /> <span className="text-blue-600">Pipeline.</span>
                        </h2>
                        <p className="text-zinc-500 font-bold text-lg md:text-xl 2xl:text-4xl italic max-w-2xl mx-auto">
                            "Algorithm-driven strategies that convert passive scrolling into active brand equity."
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 2xl:gap-8">
                        {[
                            { step: "01", title: "Audience Intel", keywords: "Demographics, Psychographics, Core Interests", desc: "Hum sirf followers nahi dhoondte, hum unka behavior analyze karte hain jo conversion trigger kare." },
                            { step: "02", title: "Creative Hook", keywords: "Viral Loops, Retention Edits, Visual ID", desc: "Scroll-stopping content jo user ki attention capture kare aur brand recall boost kare." },
                            { step: "03", title: "Ads Scaling", keywords: "ROAS Optimization, Pixel Tracking, Lookalike Audiences", desc: "Data-backed paid campaigns jo kam budget mein maximum reach aur leads generate karein." },
                            { step: "04", title: "Community ROI", keywords: "Engagement Rate, Brand Loyalty, LTV Metrics", desc: "Followers ko loyal customers mein badalne ka system jo long-term revenue drive karta hai." }
                        ].map((p, i) => (
                            <motion.div 
                                key={i} 
                                whileHover={{ scale: 1.02 }}
                                className="group relative bg-[#080808] p-8 2xl:p-12 rounded-[2.5rem] border border-white/5 hover:border-blue-500/40 transition-all duration-500 h-full flex flex-col"
                            >
                                <div className="flex justify-between items-center mb-8">
                                    <span className="text-4xl 2xl:text-6xl font-black text-white/10 group-hover:text-blue-600/30 italic">
                                        {p.step}
                                    </span>
                                    <ChevronRight size={16} className="text-zinc-600 group-hover:text-blue-400" />
                                </div>

                                <div className="space-y-4 flex-grow">
                                    <h3 className="text-2xl 2xl:text-4xl font-black uppercase italic text-white group-hover:text-blue-500 transition-colors">
                                        {p.title}
                                    </h3>
                                    
                                    <div className="bg-blue-600/[0.04] border border-blue-600/10 rounded-xl p-3 2xl:p-5">
                                        <p className="text-[9px] 2xl:text-xs font-black text-blue-500 uppercase tracking-widest mb-1 italic">Tactical Focus:</p>
                                        <p className="text-[11px] 2xl:text-lg text-zinc-400 font-bold leading-relaxed">
                                            {p.keywords}
                                        </p>
                                    </div>

                                    <p className="text-zinc-500 2xl:text-xl text-sm font-medium leading-relaxed">
                                        {p.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Process />
            <Stats />
            <WhyChooseUs />
            <Testimonials />
            <CTA />

        </main>
    );
}