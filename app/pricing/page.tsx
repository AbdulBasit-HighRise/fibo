"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Check, Flame, Rocket, BarChart3, ShieldCheck, Zap, Send } from "lucide-react";
import Link from "next/link";

const plans = [
  {
    name: "Starter Plan",
    price: "$149",
    billing: "/month",
    desc: "Perfect for small businesses and startups",
    icon: <Rocket size={24} className="text-emerald-400 2xl:w-8 2xl:h-8" />,
    color: "emerald",
    link: "/contact", 
    features: ["Basic Website SEO", "Social Media Setup", "Monthly Reporting", "Email Support"]
  },
  {
    name: "Growth Plan",
    price: "$399",
    billing: "/month",
    desc: "Ideal for growing businesses",
    icon: <BarChart3 size={24} className="text-blue-400 2xl:w-8 2xl:h-8" />,
    color: "blue",
    featured: true,
    link: "/contact",
    features: ["Advanced SEO Optimization", "Social Media Management", "PPC Campaign Setup", "Content Strategy", "Weekly Reports"]
  },
  {
    name: "Professional Plan",
    price: "$699",
    billing: "/month",
    desc: "Best for established brands",
    icon: <ShieldCheck size={24} className="text-purple-400 2xl:w-8 2xl:h-8" />,
    color: "purple",
    link: "/contact",
    features: ["Full SEO + Technical SEO", "Complete Digital Marketing Strategy", "Paid Ads Management (Google & Meta)", "Branding & Content Creation", "Dedicated Account Manager"]
  }
];

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-[#111827] text-white overflow-x-hidden pb-20  selection:bg-blue-600">
      
      {/* 🎯 PRICING HERO SECTION */}
      <section className="relative w-full overflow-hidden bg-[#111827]">
        <div className="container-wide">
          
          {/* Background Image Container */}
          <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
            <Image
              src="/home-hero.jpg"
              alt="Mesh Grid"
              fill
              priority 
              sizes="100vw"
              className="object-cover object-top opacity-35"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#030712]/40 to-[#030712]" />
          </div>

          {/* Ambient Blur Dot */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/[0.05] blur-[120px] pointer-events-none" />

          {/* Full Sized Padded Content Wrapper */}
          <div className="relative z-10 w-full mx-auto text-center lg:text-left px-6 pt-32 pb-16 md:pt-20 md:pb-24 lg:max-w-full lg:pt-40 lg:pb-28 lg:pl-40 2xl:mx-0 2xl:max-w-[1500px] 2xl:pt-48 2xl:pb-36 2xl:pl-80">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="max-w-5xl"
            >
              {/* Badge Container */}
              <div className="flex items-center gap-2.5 mb-8 w-fit px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-md mx-auto md:mx-0">
                <Zap size={12} className="text-blue-400 animate-pulse" />
                <span className="text-[10px] font-black tracking-[4px] text-blue-300 uppercase">Affordable Growth</span>
              </div>

              {/* Main Large Typography Block */}
              <h1 className="text-[2rem] md:text-[3.2rem] lg:text-[3.8rem] 2xl:text-[5rem] font-medium tracking-tighter leading-[0.8] text-white mb-8 normal-case">
                OUR {" "}
                <span className="inline-block mt-2 uppercase bg-gradient-to-r from-[#00f2ff] via-[#0070ff] to-[#00f2ff] bg-[length:200%_auto] animate-gradient text-transparent bg-clip-text">
                  Pricing Plans.
                </span>
              </h1>

              {/* Paragraph Block */}
              <p className="text-white text-[16px] md:text-base lg:text-[17px] 2xl:text-xl 3xl:text-2xl font-medium leading-relaxed max-w-xl 2xl:max-w-3xl mx-auto lg:mx-0 opacity-80">
                Affordable, transparent pricing plans designed to fit your business needs and help you grow with powerful digital marketing solutions.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

    {/* --- PRICING GRID --- */}
<section className="relative z-10 max-w-7xl 2xl:max-w-[1600px] mx-auto px-6  2xl:-mt-20">
  <div className="grid lg:grid-cols-3 gap-8 2xl:gap-12">
    {plans.map((plan, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: i * 0.1 }}
        viewport={{ once: true }}
        className={`relative p-8 md:p-10 2xl:p-14 rounded-[3rem] bg-[#0971A6] border flex flex-col transition-all duration-500 group ${
          plan.featured 
          ? "border-white/40 scale-105 shadow-[0_20px_50px_rgba(9,113,166,0.3)] z-20" 
          : "border-white/10 hover:border-white/30 hover:scale-[1.02]"
        }`}
      >
        {plan.featured && (
          /* 🎯 FIXED: Synced Badge color with the exact background */
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#0b5f8a] text-white text-[10px] 2xl:text-xs font-black uppercase tracking-widest rounded-full shadow-lg">
            Most Popular
          </div>
        )}

        <div className="mb-8 p-4 2xl:p-6 w-fit rounded-2xl bg-white/10 border border-white/10 group-hover:scale-110 transition-transform text-white">
          {plan.icon}
        </div>

        <h3 className="text-2xl 2xl:text-4xl font-medium mb-2 text-white">{plan.name}</h3>
        {/* 🎯 FIXED: 'text-white-500' fallback class changed to 'text-zinc-100' for better contrast over blue background */}
        <p className="text-zinc-100 text-[16px] 2xl:text-xl mb-8 leading-relaxed opacity-90">{plan.desc}</p>

        <div className="flex items-baseline gap-1 mb-10">
          <span className="text-5xl 2xl:text-7xl font-medium text-white">{plan.price}</span>
          {/* 🎯 FIXED: 'text-black-500' changed to 'text-zinc-200' so the text is perfectly visible over the dark blue */}
          <span className="text-zinc-200 text-sm 2xl:text-lg">{plan.billing}</span>
        </div>

        <div className="space-y-4 2xl:space-y-6 mb-12 flex-1">
          {plan.features.map((feature, idx) => (
            <div key={idx} className="flex items-start gap-3 text-white">
              {/* Checkmark icon syncs with light white context */}
              <Check size={18} className="text-white mt-0.5 flex-shrink-0 2xl:w-6 2xl:h-6 bg-white/20 rounded-full p-0.5" />
              <span className="text-sm 2xl:text-xl font-medium leading-tight opacity-9ated">{feature}</span>
            </div>
          ))}
        </div>

        {/* PRICING CARD BUTTON */}
        <Link href={plan.link} passHref className="w-full">
          <button className="group relative overflow-hidden flex items-center justify-center gap-3 px-8 py-4 w-full bg-white text-medium font-medium text-[10px] 2xl:text-sm tracking-[3px] uppercase rounded-full active:scale-95 transition-all duration-500 shadow-lg shadow-black/10">
            <div className="absolute inset-0 w-0 bg-gradient-to-r from-cyan-500 to-blue-600 transition-all duration-500 ease-out group-hover:w-full" />
            <span className="relative z-10 group-hover:text-white transition-colors duration-500 flex items-center gap-2">
              Get Started
              <Send 
                size={12} 
                className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-500 text-zinc-700 group-hover:text-white" 
              />
            </span>
          </button>
        </Link>
      </motion.div>
    ))}
  </div>

  {/* --- ENTERPRISE PLAN --- */}
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="mt-12 2xl:mt-20 p-8 md:p-12 2xl:p-20 rounded-[3.5rem] border border-white/10    bg-gradient-to-bl from-[#0971A6] via-[#054f7a] to-[#021526]
 flex flex-col md:flex-row items-center justify-between gap-8"
  >
    <div className="space-y-4">
      <div className="flex items-center gap-3">
         <div className="p-3 2xl:p-5 rounded-xl bg-white/10 text-white">
            <Flame size={24} className="2xl:w-10 2xl:h-10" />
         </div>
         <h3 className="text-3xl 2xl:text-5xl font-mediummedium italic text-white">Enterprise Plan</h3>
      </div>
      <p className="text-zinc-100 text-[16px] md:text-base lg:text-[17px] 2xl:text-xl 3xl:text-2xl font-medium leading-relaxed max-w-xl 2xl:max-w-4xl opacity-90 antialiased">
        For large-scale business growth. Custom Marketing Strategy, Full Funnel Optimization, Advanced PPC + Retargeting, and 24/7 Priority Support.
      </p>
    </div>

    <div className="text-center md:text-right space-y-4 min-w-[200px]">
      <div className="text-4xl 2xl:text-6xl font-medium text-white">Custom Pricing</div>
      
      <Link href="/contact" passHref>
        <button className="group relative overflow-hidden inline-flex items-center justify-center gap-3 px-8 py-4 mt-4 md:px-10 md:py-5 bg-white text-black font-black text-[10px] 2xl:text-xs tracking-[3px] uppercase rounded-full active:scale-95 transition-all duration-500 w-full sm:w-auto shadow-lg shadow-black/10">
          <div className="absolute inset-0 w-0 bg-gradient-to-r from-cyan-500 to-blue-600 transition-all duration-500 ease-out group-hover:w-full" />
          <span className="relative z-10 group-hover:text-white transition-colors duration-500 flex items-center gap-3">
            Contact Sales
            <Send 
              size={13} 
              className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-500 text-zinc-700 group-hover:text-white" 
            />
          </span>
        </button>
      </Link>
    </div>
  </motion.div>
</section>
    </main>
  );
}