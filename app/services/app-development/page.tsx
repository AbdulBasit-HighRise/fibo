"use client";
import React from "react";
import Link from 'next/link';
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";


import {
  ArrowUpRight,
  Cpu,
  BarChart3,
  PenTool,
  Rocket,
  ShieldCheck,
  Zap,
  Search,
  LayoutGrid,
  FileText,
  Globe2,
  LineChart,
  Link2,
  Box,
  Layers,
  FileCode2,
  BarChart4,
  Flame,
  ArrowRight,
  ChevronRight
} from "lucide-react";

// Section Components


import { TrendingUp, Star, CheckCircle2 } from "lucide-react";

export default function SEOPage() {
  // 📊 Dynamic Working Process Data Array
  const faqs = [
    {
      q: "Do you develop apps for both iOS and Android?",
      a: "Yes, we specialize in both native and cross-platform development (using React Native/Flutter). We ensure your app performs flawlessly and looks professional on all devices, whether it's an iPhone or an Android smartphone."
    },
    {
      q: "How do you ensure the app is user-friendly and engaging?",
      a: "We follow a 'User-First' design philosophy. Before writing code, we map out intuitive navigation and smooth UI layouts to ensure that your users have a seamless, high-impact experience from the moment they open the app."
    },
    {
      q: "Can you integrate my existing website features into the app?",
      a: "Absolutely. We can sync your app with your current database, CRM, and website backend. This ensures that all your user accounts, orders, and content remain updated across both your web and mobile platforms in real-time."
    },
    {
      q: "What is the typical timeline to develop and launch an app?",
      a: "The timeline depends on the complexity of the features. A functional MVP (Minimum Viable Product) usually takes 4 to 8 weeks, while fully customized, feature-rich apps may require additional time for testing and optimization."
    },
    {
      q: "Do you provide support after the app is launched?",
      a: "Yes, we don't just launch and leave. We provide ongoing post-launch support, including performance monitoring, bug fixes, and feature updates to ensure your app stays fast, secure, and compatible with the latest OS versions."
    },
    {
      q: "How do you handle security and data protection in mobile apps?",
      a: "Security is built into our development process. We implement industry-standard encryption, secure authentication, and protected API endpoints to ensure your user data remains safe and compliant with privacy standards."
    }
  ];
  const features = [
    {
      icon: <Zap className="w-5 h-5 2xl:w-8 2xl:h-8" />,
      title: "High-Performance Apps",
      desc: "We build blazing-fast mobile applications optimized for smooth performance and lightning-quick load times on every device.",
    },
    {
      icon: <Star className="w-5 h-5 2xl:w-8 2xl:h-8" />,
      title: "Intuitive UI/UX Design",
      desc: "Crafting beautiful, user-centric interfaces that ensure your app is not only functional but also a delight for users to interact with.",
    },
    {
      icon: <ShieldCheck className="w-5 h-5 2xl:w-8 2xl:h-8" />,
      title: "Cross-Platform Efficiency",
      desc: "One codebase, two platforms. We utilize advanced frameworks to deliver seamless experiences across both iOS and Android simultaneously.",
    },
    {
      icon: <TrendingUp className="w-5 h-5 2xl:w-8 2xl:h-8" />,
      title: "Scalable Architecture",
      desc: "Our apps are designed to grow with your business, featuring robust backends that handle increasing user loads without breaking a sweat.",
    },
  ];
  const steps = [
    {
      id: "01",
      title: "Requirement Analysis",
      desc: "We dive deep into your goals, features, and target audience to define a clear roadmap for your mobile application.",
      icon: <Search className="w-5 h-5 2xl:w-7 2xl:h-7" />
    },
    {
      id: "02",
      title: "UI/UX Prototyping",
      desc: "We design intuitive wireframes and interactive prototypes to ensure a seamless, user-friendly experience before coding begins.",
      icon: <LayoutGrid className="w-5 h-5 2xl:w-7 2xl:h-7" />
    },
    {
      id: "03",
      title: "Agile Development",
      desc: "Our developers write clean, scalable code using modern frameworks to build a robust and high-performing application.",
      icon: <FileText className="w-5 h-5 2xl:w-7 2xl:h-7" />
    },
    {
      id: "04",
      title: "Quality Assurance",
      desc: "We conduct rigorous testing across multiple devices and environments to ensure your app is bug-free and fully optimized.",
      icon: <Globe2 className="w-5 h-5 2xl:w-7 2xl:h-7" />
    },
    {
      id: "05",
      title: "Deployment & Support",
      desc: "We handle the store submission process and provide ongoing maintenance to keep your app updated and ahead of the curve.",
      icon: <LineChart className="w-5 h-5 2xl:w-7 2xl:h-7" />
    }
  ];
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  return (

    <main className="bg-[#030712] text-white selection:bg-blue-600 overflow-x-hidden">

      {/* 🎯 SYNCED SEO HERO SECTION: Formatted exactly on top of your verified master framework */}
      <section className="relative w-full overflow-hidden bg-[#1E2939]">
        <div className="container-wide">

          {/* Background Image Container with Exact Matching Premium CSS */}
          <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
            {/* Image */}
            <Image
              src="/home-hero.png"
              alt="Mesh Grid"
              fill
              sizes="100vw"
              priority
              className="object-cover object-center"
            />

            {/* Dark Overlay - Yahan shade control karo */}
            {/* bg-black/60 ka matlab hai 60% opacity wala black shade */}
            <div className="absolute inset-0 bg-black/60" />

            {/* Agar tum gradient chahte ho taake neeche se upar dark ho, toh ye use karo: */}
            {/* <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70" /> */}
          </div>

          {/* Ambient Blur Dot to lock the signature aesthetic */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/[0.05] blur-[120px] pointer-events-none" />

          {/* Full Sized Padded Content Wrapper - 🎯 FIXED: Aligned perfectly with your global framework layout */}
          <div className="relative z-10 w-full mx-auto text-center lg:text-left px-6 pt-32 pb-16 md:pt-20 md:pb-24 lg:max-w-full lg:pt-40 lg:pb-28 lg:pl-40 2xl:mx-0 2xl:max-w-[1500px] 2xl:pt-48 2xl:pb-36 2xl:pl-80 3xl:mx-0 3xl:max-w-[1800px] 3xl:pt-60 3xl:pb-44 3xl:pl-72">
            <div className="max-w-5xl">



              <h1 className="text-[2rem] md:text-[3.2rem] lg:text-[3.8rem] 2xl:text-[5rem] font-medium uppercase tracking-tighter leading-[1.1] lg:leading-[1.0] text-white mb-8">
                SCALABLE MOBILE {" "}APPS & SOLUTIONS.

              </h1>

              {/* Description Paragraph */}
              <p className="text-white text-[16px] md:text-base lg:text-[17px] 2xl:text-xl 3xl:text-2xl font-medium leading-relaxed w-full max-w-3xl mx-auto lg:mx-0 opacity-80">
                We transform complex ideas into intuitive, high-performance mobile applications. From sleek UI/UX design to robust backend architecture, we build apps that engage users and drive your business forward.
              </p>
            </div>
          </div>
        </div>
      </section>



      <section className="relative pt-16 pb-16 sm:pt-16 sm:pb-16 md:pt-16 md:pb-16 lg:pt-16 lg:pb-16 2xl:pt-16 2xl:pb-16 bg-[#222630] overflow-hidden">


        {/* Background Glow */}

        <div className="max-w-7xl 2xl:max-w-[110rem] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">

            {/* LEFT: Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative flex items-center justify-center lg:justify-start order-2 lg:order-1"
            >
              <div className="absolute w-[50%] h-[50%] bg-blue-600/[0.05] blur-[80px] rounded-full" />
              <div className="relative z-10 w-full max-w-[320px] md:max-w-[490px] 2xl:max-w-[650px]">
                <Image
                  src="/App Developoment.png"
                  alt="High Rise Digital - Leading Global Agency"
                  width={700}
                  height={700}
                  className="w-full h-auto object-contain drop-shadow-2xl"
                  priority
                />
              </div>
            </motion.div>

            {/* RIGHT: Text Content */}
            <div className="space-y-6 md:space-y-6 order-1 lg:order-2">
              <div>
                <h2 className="text-[2rem] sm:text-[2.2rem] md:text-[2.5rem] lg:text-[2.5rem] 2xl:text-[3.2rem] font-medium tracking-tighter leading-[1] text-white">
                  High-Performance Apps with {" "} Our Development Services.

                </h2>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className="space-y-6 md:space-y-8"
              >
                {/* Paragraph 1 */}
                {/* Paragraph 1 */}
                {/* Paragraph 1 */}
                <p className="text-white text-[16px] md:text-base lg:text-[17px] 2xl:text-xl 3xl:text-2xl font-medium leading-relaxed max-w-xl 2xl:max-w-3xl mx-auto lg:mx-0">
                  A great app is only the beginning; the real goal is to build a digital experience that keeps your users coming back. Our development approach focuses on intuitive design and robust performance to bring your mobile vision to life.
                </p>

                {/* Paragraph 2 */}
                <p className="text-white text-[16px] md:text-base lg:text-[17px] 2xl:text-xl 3xl:text-2xl font-medium leading-relaxed max-w-xl 2xl:max-w-3xl mx-auto lg:mx-0">
                  By leveraging modern frameworks, custom backend architecture, and user-centric design, we streamline the path from a basic concept straight to a high-performance application that elevates your brand identity.
                </p>

                {/* Paragraph 3 */}
                <p className="text-white text-[16px] md:text-base lg:text-[17px] 2xl:text-xl 3xl:text-2xl font-medium leading-relaxed max-w-xl 2xl:max-w-3xl mx-auto lg:mx-0 hidden md:block">
                  We don’t just write code; we optimize every layer of your mobile experience to ensure technical precision, creative depth, and maximum user engagement across all digital stores and platforms.
                </p>
              </motion.div>

              {/* Buttons Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
                className="flex flex-wrap items-center gap-6 pt-4"
              >
                <Link href="/contact">
                  <button className="group relative overflow-hidden px-8 2xl:px-10 h-[48px] 2xl:h-[56px] rounded-full bg-white text-black font-black text-[11px] 2xl:text-[13px] uppercase tracking-widest transition-all duration-500 flex items-center gap-2 active:scale-95 shadow-lg">
                    <div className="absolute inset-0 w-0 bg-[#FFD36A] transition-all duration-500 ease-out group-hover:w-full" />
                    <span className="relative z-10 flex items-center gap-2 group-hover:text-black transition-colors duration-500">
                      Get Quote <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                  </button>
                </Link>


              </motion.div>
            </div>
          </div>
        </div>
      </section>
      {/* STRATEGIC FOUNDATION (Services Matrix Grid) */}
      <section className="relative py-16 2xl:py-40 px-6 overflow-hidden bg-[#111827]">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:32px_32px]" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.07)_0%,transparent_70%)]" />
        </div>

        <div className="max-w-7xl 2xl:max-w-[1600px] mx-auto relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6 border-b border-white/5 pb-10">
            <div className="max-w-4xl">
              <h3 className="text-[2rem] sm:text-[2.2rem] md:text-[2.5rem] lg:text-[2.5rem] 2xl:text-[3.2rem] font-medium leading-[1.1] md:leading-[1.05] tracking-tighter text-white">
                Our{" "} Professional App Development Services.

              </h3>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 2xl:gap-10">
            {[
              {
                title: "Native App Development",
                desc: "High-performance iOS and Android apps built with native technologies to ensure maximum speed, security, and hardware integration.",
                icon: <Box size={24} />
              },
              {
                title: "Cross-Platform Solutions",
                desc: "Cost-effective, lightning-fast apps built with React Native or Flutter that deliver a seamless experience on both major platforms.",
                icon: <Zap size={24} />
              },
              {
                title: "Custom UI/UX Design",
                desc: "Stunning, user-focused interfaces designed to drive engagement, boost retention, and make your app stand out in the app store.",
                icon: <Layers size={24} />
              },
              {
                title: "Backend Architecture",
                desc: "Robust, scalable server-side solutions and API integrations that keep your app running smoothly, even with thousands of users.",
                icon: <Cpu size={24} />
              },
              {
                title: "App Maintenance & Support",
                desc: "Ongoing performance monitoring, regular updates, and bug fixes to ensure your app stays compatible with the latest OS versions.",
                icon: <Flame size={24} />
              },
              {
                title: "App Strategy Consulting",
                desc: "Expert roadmap planning, feature prioritization, and market analysis to turn your app concept into a successful digital product.",
                icon: <PenTool size={24} />
              }
            ].map((s, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                // Background White kar diya hai
                className="group relative p-10 2xl:p-16 rounded-[2.5rem] bg-white border border-zinc-200 hover:border-[#FFD36A] hover:shadow-[0_20px_50px_rgba(255,211,106,0.2)] transition-all duration-500 text-left cursor-pointer h-full flex flex-col justify-between overflow-hidden"
              >
                {/* Hover Effect Layer (Golden transition) */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#FFD36A]/10 via-transparent to-transparent translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out z-0 pointer-events-none" />

                <div className="relative z-10 flex flex-col h-full justify-between w-full">
                  <div>
                    {/* Icon aur Title Row */}
                    <div className="flex items-center gap-5 mb-8">
                      {/* Icon Box: White bg, Gold icon hover */}
                      <div className="shrink-0 w-12 h-12 2xl:w-16 2xl:h-16 rounded-xl bg-zinc-100 text-[#FFD36A] border border-zinc-200 group-hover:bg-[#FFD36A] group-hover:text-black transition-all duration-500 shadow-sm flex items-center justify-center scale-100 group-hover:scale-110">
                        {s.icon}
                      </div>

                      {/* Title: Black text, hover par Golden */}
                      <h4 className="font-black text-[1.2rem] sm:text-[1.3rem] lg:text-[1.4rem] 2xl:text-[1.6rem] tracking-tight text-black group-hover:text-[#FFD36A] transition-colors leading-tight">
                        {s.title}
                      </h4>
                    </div>

                    {/* Description */}
                    <p className="text-zinc-600 text-[15px] md:text-base lg:text-[15px] 2xl:text-[15px] font-medium leading-relaxed antialiased tracking-wide opacity-90 group-hover:text-black transition-opacity duration-300">
                      {s.desc}
                    </p>
                  </div>
                </div>

                {/* Bottom Indicator Line: Gold color */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#FFD36A] shadow-[0_0_15px_#FFD36A] scale-x-0 group-hover:scale-x-100 origin-center transition-transform duration-500 ease-out z-20" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* <AuditCTA /> */}

      {/* 🚀 WORKING PROCESS MATRIX SECTION */}
      <section className="relative py-16 md:py-24 bg-[#222630] overflow-hidden selection:bg-[#FFD36A]/30">
        {/* Luxury subtle background pattern */}
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#FFD36A_1px,transparent_1px)] [background-size:30px_30px] pointer-events-none" />

        <div className="relative z-10 max-w-6xl 2xl:max-w-[85rem] mx-auto px-6">
          {/* 📋 HEADER - Font sizing synced with reference file */}
          <div className="mb-12 md:mb-16 pt-0 text-center">
            <h3 className="text-[2rem] sm:text-[2.2rem] md:text-[2.5rem] lg:text-[2.5rem] 2xl:text-[3.2rem] font-medium tracking-tighter leading-[1.1] lg:leading-[1] text-white normal-case">
              Our{" "} Development Workflow.

            </h3>
          </div>

          {/* 🧠 TIMELINE MATRIX */}
          <div className="relative">
            {/* Central Progress Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-zinc-200 via-zinc-300 to-transparent -translate-x-1/2 hidden md:block" />

            <div className="flex flex-col gap-3 md:gap-6">
              {steps.map((step, index) => {
                const isEven = index % 2 === 0;
                return (
                  <div
                    key={step.id}
                    className={`relative flex flex-col md:flex-row items-start md:items-center justify-between w-full group ${isEven ? "md:flex-row" : "md:flex-row-reverse"}`}
                  >
                    <div className="w-full md:w-[45%] pl-8 md:pl-0">
                      <motion.div
                        initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="relative p-6 md:p-8 2xl:p-12 rounded-[1.8rem] 2xl:rounded-[2.5rem] bg-[#f4f4f4] border border-zinc-200 shadow-xl hover:border-[#FFD36A] transition-all duration-500"
                      >
                        {/* Floating Step Number */}
                        <div className="absolute -top-3 -right-3 w-10 h-10 2xl:w-14 2xl:h-14 rounded-full bg-black text-[#FFD36A] flex items-center justify-center font-black text-[11px] 2xl:text-sm shadow-xl z-10">
                          {step.id}
                        </div>

                        <div className="flex flex-col gap-4">
                          <div className="flex items-center gap-4">
                            {/* Icon Container */}
                            <div className="shrink-0 w-11 h-11 md:w-12 md:h-12 2xl:w-14 2xl:h-14 rounded-xl bg-zinc-100 text-[#FFD36A] flex items-center justify-center group-hover:bg-[#FFD36A] group-hover:text-black transition-all duration-500 shadow-sm">
                              {step.icon}
                            </div>
                            <h4 className="font-black text-[1.1rem] sm:text-[1.2rem] lg:text-[1.2rem] 2xl:text-[1.4rem] text-black tracking-tight transition-colors duration-300">
                              {step.title}
                            </h4>
                          </div>

                          <p className="text-zinc-600 text-[14px] md:text-[15px] font-medium leading-relaxed max-w-xl">
                            {step.desc}
                          </p>
                        </div>

                        {/* Bottom Indicator Line */}
                        <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#FFD36A] group-hover:w-[40%] transition-all duration-700 ease-out rounded-bl-full" />
                      </motion.div>
                    </div>

                    {/* Central Node */}
                    <div className="absolute left-4 md:left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 hidden md:block">
                      <div className="w-6 h-6 rounded-full bg-white border-4 border-zinc-200 group-hover:border-[#FFD36A] transition-all duration-500 shadow-sm" />
                    </div>

                    <div className="hidden md:block md:w-[45%]" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>



      {/* Why Chose ue */}
      <section className="relative py-16 md:py-24 2xl:py-32 bg-[#111827] overflow-hidden border-b border-zinc-200">
        {/* Subtle Background Glow */}
        <div className="absolute top-1/4 -right-20 w-[400px] 2xl:w-[800px] h-[400px] bg-[#FFD36A]/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl 2xl:max-w-[110rem] mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 xl:gap-16 2xl:gap-24 items-center">

            {/* LEFT SIDE: Content */}
            <div className="lg:col-span-6 space-y-6 md:space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h3 className="text-[2rem] sm:text-[2.2rem] md:text-[2.5rem] lg:text-[2.5rem] 2xl:text-[3.2rem] font-medium tracking-tighter leading-[1.1] lg:leading-[1] mb-2 text-white">
                  Why Choose Our AI & ML Solutions?

                </h3>

                <div className="space-y-6 max-w-xl 2xl:max-w-3xl">
                  <p className="text-white text-[16px] md:text-base lg:text-[17px] 2xl:text-xl font-medium leading-relaxed">
                    We don't just write code; we architect <span className="font-black text-white">intelligent systems</span> that scale your business. By blending cutting-edge machine learning with seamless automation, we deliver solutions that optimize performance and efficiency.
                  </p>
                  <p className="text-white text-[16px] md:text-base lg:text-[17px] 2xl:text-xl font-medium leading-relaxed">
                    Our team works closely with you to map your unique operational challenges, ensuring every automated workflow is tailored to your business goals and growth trajectory.
                  </p>
                  <p className="text-white text-[16px] md:text-base lg:text-[17px] 2xl:text-xl font-medium leading-relaxed">
                    From custom AI model development to full-scale digital integration, we provide end-to-end automation solutions backed by technical expertise and data-driven strategy.
                  </p>
                  <p className="text-white text-[16px] md:text-base lg:text-[17px] 2xl:text-xl font-medium leading-relaxed">
                    We combine industry-leading AI frameworks with advanced data analytics to ensure every insight is actionable, giving your brand a distinct competitive edge in the modern market.
                  </p>
                  <p className="text-white text-[16px] md:text-base lg:text-[17px] 2xl:text-xl font-medium leading-relaxed">
                    Our studio operates with a client-first philosophy, ensuring clear communication and iterative feedback loops so that the final product is not just a tool, but a high-impact asset that drives your business forward.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* RIGHT SIDE: Cards Grid */}
            <div className="lg:col-span-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 2xl:gap-10">
                {features.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`relative p-8 md:p-10 rounded-[2rem] bg-white border border-zinc-200 hover:border-[#FFD36A] hover:shadow-[0_20px_40px_rgba(255,211,106,0.15)] transition-all duration-500 flex flex-col justify-between group ${index % 2 !== 0 ? 'sm:translate-y-10' : ''}`}
                  >
                    <div className="relative z-10 space-y-4">
                      <div className="flex items-center gap-4">
                        <div className="shrink-0 w-12 h-12 flex items-center justify-center rounded-2xl bg-zinc-100 text-[#FFD36A] group-hover:bg-[#FFD36A] group-hover:text-black transition-all duration-500 shadow-sm">
                          {item.icon}
                        </div>
                        <h4 className="font-black text-[1.2rem] text-black leading-tight group-hover:text-[#FFD36A] transition-colors">
                          {item.title}
                        </h4>
                      </div>
                      <p className="text-zinc-600 text-[15px] leading-relaxed group-hover:text-black transition-colors">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* <SeoFAQ /> */}
      <section className="relative py-24 bg-[#222630] overflow-hidden border-b border-zinc-100">
        {/* Background Glow */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#FFD36A]/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="relative z-10 w-full mx-auto px-6 max-w-4xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl">
          {/* Header Title Section */}
          <div className="mb-16 text-center">
            <h3 className="text-[2rem] sm:text-[2.2rem] md:text-[2.5rem] lg:text-[2.5rem] 2xl:text-[3.2rem] font-medium text-white leading-none mb-6">
              Frequently Asked  Questions (FAQs)

            </h3>
          </div>

          {/* FAQ Accordion List */}
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className={`rounded-[1.5rem] border transition-all duration-500 ${activeIdx === idx
                  ? "bg-zinc-50 border-[#FFD36A]/50 shadow-md"
                  : "bg-white border-zinc-200 hover:border-[#FFD36A]/30"
                  }`}
              >
                <button
                  onClick={() => setActiveIdx(activeIdx === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-6 text-left outline-none group"
                >
                  <span className={`text-lg font-bold transition-colors duration-300 ${activeIdx === idx ? "text-[#FFD36A]" : "text-black group-hover:text-zinc-600"
                    }`}>
                    {faq.q}
                  </span>

                  <div className={`p-2 rounded-full shrink-0 ml-4 transition-colors duration-300 ${activeIdx === idx ? "bg-[#FFD36A] text-black" : "bg-zinc-100 text-zinc-500 group-hover:bg-zinc-200"
                    }`}>
                    {activeIdx === idx ? <Minus size={18} /> : <Plus size={18} />}
                  </div>
                </button>

                <AnimatePresence>
                  {activeIdx === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-8 text-zinc-600 border-t border-zinc-100 pt-4 leading-relaxed antialiased font-medium">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}