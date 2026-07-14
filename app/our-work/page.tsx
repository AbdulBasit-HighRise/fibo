"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
// 🎯 FIXED: Missing icons (ArrowUpRight, ExternalLink) successfully imported here
import { ArrowUpRight, Flame, ExternalLink } from "lucide-react";

// ========================================================
// 📦 CENTRALISED PROJECTS ACQUISITION Blueprints Array
// ========================================================
export const projects = [
  // --- WEBSITE DEVELOPMENT (10 Unique Projects) ---

  {
    slug: "femme-propre",
    title: " Femme Propre",
    category: "web",
    image: "/web2.jpg",
    liveUrl: "https://www.femmepropre.co.uk/"
  },
  // {
  //   slug: "channel1",
  //   title: "Channel1",
  //   category: "web",
  //   image: "/web3.jpg",
  //   liveUrl: "https://channel1.com.au/"
  // },
  // {
  //   slug: "doctors-of-osteo",
  //   title: "Doctors Of Osteo",
  //   category: "web",
  //   image: "/web4.jpg",
  //   liveUrl: "https://www.doctorsofosteo.com.au/"
  // },
  // {
  //   slug: "feeding-fussy-kids",
  //   title: "Feeding Fussy Kids",
  //   category: "web",
  //   image: "/web5.jpg",
  //   liveUrl: "https://feedingfussykids.com/"
  // },


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


  // --- SEO PERFORMANCE CAMPAIGNS (6 Projects) ---
  //   {
  //  slug: "170-leads-increased-for-roofing-company",
  //     title: "170% Leads Increased For Roofing Company",
  //     category: "seo",
  //     image: "/rino-roffers.jpg"
  //   },

  {
    slug: "28-organic-traffic-increase-for-local-cleaning-company",
    title: "+28% Organic Traffic Increase For Local Cleaning Company",
    category: "seo",
    image: "/cleaning.jpg"
  },
  // {
  //   slug: "6.69K-clicks-in-just-3-months-for-local-restaurant",
  //   title: "+6.69K Clicks in Just 3 Months For Local Restaurant",
  //   category: "seo",
  //   image: "/burger.jpg"
  // },
  // {
  //   slug: "1-76k-leads-for-aesthetic-clinic",
  //   title: "+1.76K Leads For Aesthetic Clinic",
  //   category: "seo",
  //   image: "/clinic.jpg"
  // },
  // {
  //   slug: "#1-position-in-serp-for-holistic-doctor-clinic",
  //   title: "#1 Position in SERP For Holistic Doctor Clinic",
  //   category: "seo",
  //   image: "/dr.jpg"
  // },

  // --- SOCIAL MEDIA MARKETING PERFORMANCE ---
  {
    slug: "31-increase-in-qualified-property-leads-via-high-intent-social-funnels",
    title: "31% Increase In Qualified Property Leads Via High-Intent Social Funnels",
    category: "social",
    image: "/realestate.jpg"
  },
  {
    slug: "598541-in-sales-at-22x-roas-for-private-label-fitness-brand",
    title: "$598,541 In Sales At 22x ROAS For Private Label Fitness Brand Via High-Converting Funnels",
    category: "social",
    image: "/gym.jpg"
  },
  {
    slug: "1044-website-purchases-for-fashion-brand",
    title: "1,044 Website Purchases For Fashion Brand In 2 Months At 23.85x ROAS Via Direct-Response Funnels",
    category: "social",
    image: "/brand.jpg"
  },
  {
    slug: "25-10x-roas-for-home-living-brand",
    title: "25.10x ROAS For Home & Living Brand Via High-Converting Paid Social Funnels",
    category: "social",
    image: "/roas.jpg"
  }
];



export default function PortfolioPage() {
  const [active, setActive] = useState("all");

  const filtered = active === "all" ? projects : projects.filter(p => p.category === active);

  return (
    <main className="bg-[#FFFFFF] text-zinc-100 selection:bg-blue-600 overflow-x-hidden min-h-screen antialiased pb-24">

      {/* 1. HERO SECTION */}
      <section className="relative w-full overflow-hidden bg-[#030712]">
        <div className="w-full">
          {/* Background Image Container */}
          <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
            <Image
              src="/home-hero.png"
              alt="Mesh Grid"
              fill
              sizes="100vw"
              priority
              className="object-cover object-top"
            />
            <div className="absolute inset-0" />
          </div>

          {/* Ambient Blur Dot */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/[0.05] blur-[120px] pointer-events-none" />

          {/* Full Sized Content Wrapper */}
          <div className="relative z-10 w-full mx-auto text-center lg:text-left px-6 pt-32 pb-16 md:pt-20 md:pb-24 lg:max-w-full lg:pt-40 lg:pb-16 lg:pl-40 2xl:mx-0 2xl:max-w-[1500px] 2xl:pt-48 2xl:pl-80">
            <div className="max-w-5xl">
              {/* Glassmorphism Badge Container */}


              {/* Main Typography Block */}
              <h1 className="text-[2rem] md:text-[3.2rem] lg:text-[3.8rem] 2xl:text-[5rem] font-black tracking-tighter leading-none text-white mb-8">
                Our Work.
              </h1>

              {/* Description Paragraph */}
              <p className="text-white text-[16px] md:text-base lg:text-[17px] 2xl:text-xl font-medium leading-relaxed max-w-xl 2xl:max-w-3xl mx-auto lg:mx-0">
                Explore our portfolio of successful projects and see how we've helped businesses achieve their goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((item) => (
            <Link
              href={item.liveUrl || `/case-studies/${item.slug}`}
              key={item.slug}
              className="block"
            >
              <div className="group relative w-full h-[300px] overflow-hidden rounded-2xl bg-zinc-100">
                {/* Picture */}
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                  priority // Isse image jaldi load hogi
                />

                {/* Hover Text (Black) */}
                <div className="absolute inset-0 bg-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <h3 className="text-white text-xl font-bold">
                    {item.title}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

    </main>
  );
}