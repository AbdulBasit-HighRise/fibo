"use client";

import { motion } from "framer-motion";
import {
  Globe,
  ArrowRight,
  Sparkles,
  Flame,
  Target,
  Rocket,
  Users,
  Award,
  CheckCircle2
} from "lucide-react";
import Link from "next/link";
import Image from "next/image"; // Next.js Optimization ke liye

export default function AboutPage() {
  return (
    <main className="bg-[#020617] text-white overflow-hidden selection:bg-blue-600 ">

      {/* 1. HERO SECTION (Optimized) */}
      <section className="relative w-full overflow-hidden bg-[#FFFFFF]">
        <div className="container-wide">

          {/* Background Image Container with Exact Matching Premium CSS */}
          <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
            <Image
              src="/home-hero.png"
              alt="Mesh Grid"
              fill
              sizes="100vw"
              priority // 🔥 PageSpeed boost: Hero image jaldi load hogi
              className="object-cover object-top"
            />
            <div className="absolute inset-0" />
          </div>

          {/* Ambient Blur Dot to lock the signature aesthetic */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/[0.05] blur-[120px] pointer-events-none" />

          {/* Full Sized Padded Content Wrapper */}
          <div className="relative z-10 w-full mx-auto text-center lg:text-left px-6 pt-32 pb-16 md:pt-20 md:pb-24 lg:max-w-full lg:pt-40 lg:pb-28 lg:pl-40 2xl:mx-0 2xl:max-w-[1500px] 2xl:pt-48 2xl:pb-36 2xl:pl-80 3xl:mx-0 3xl:max-w-[1800px] 3xl:pt-60 3xl:pb-44 3xl:pl-72">
            {/* Aapka Content */}
            <div className="max-w-5xl">

              {/* Glassmorphism Badge Container */}
              {/* <div className="flex items-center gap-2.5 mb-8 w-fit px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-md mx-auto md:mx-0">
                <Flame size={12} className="text-blue-400 animate-pulse" />
                <span className="text-[10px] font-black tracking-[4px] text-blue-300 uppercase">ABOUT HIGH RISE</span>
              </div> */}

              {/* Main Typography Block with Tight Line Height */}
              <h1 className="text-[2rem]  md:text-[3.2rem] lg:text-[3.8rem] 2xl:text-[5rem] font-black tracking-tighter leading-[0.8] text-white mb-8">
                ABOUT  US.
                 
              
              </h1>

              {/* Description Paragraph */}
              <p className="text-white text-[16px] md:text-base lg:text-[17px] 2xl:text-xl 3xl:text-2xl font-medium leading-relaxed max-w-xl 2xl:max-w-3xl mx-auto lg:mx-0 ">
                We blend cinematic storytelling with cutting-edge production to craft visual experiences that define your brand and capture your audience.              </p>
            </div>
          </div>
        </div>

      </section>

      {/* 2. OUR IDENTITY (CLS Fix) */}
      <section className="py-20 px-6 bg-[#FFFFFF] relative z-10 border-t border-white/5">
        <div className="container-wide">
          <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-blue-500/[0.04] blur-[140px] pointer-events-none" />

          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-blue-500/15 blur-3xl pointer-events-none rounded-[3rem] opacity-50 group-hover:opacity-80 transition-opacity duration-700" />

              <div className="relative rounded-[2.5rem] overflow-hidden aspect-square bg-slate-950/40 border border-white/10 flex items-center justify-center group transition-all duration-500 hover:border-blue-500/30">
                <div className="relative w-full h-full">
                  <Image
                    src="/About.png"
                    alt="High Rise Digital Identity"
                    width={600}
                    height={600}
                    className="w-full h-full object-cover rounded-[1.5rem] transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-105 h-auto"
                  />
                </div>
                <div className="absolute inset-0  bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                {/* Label ko bhi Golden touch diya */}
                <span className="text-[10px] tracking-[4px] text-black font-extrabold block">OUR VISION</span>

                <h2 className="text-[2rem] md:text-[2.5rem] lg:text-[2.5rem] 2xl:text-[3.2rem] font-black text-black tracking-tighter leading-[1.1] lg:leading-[1] mb-6">
                  Crafting{" "}Visual Excellence
                
                </h2>
              </div>

              {/* Main Lead Paragraph - Agency Focused */}
              <p className="text-black text-[16px] md:text-base lg:text-[17px] 2xl:text-xl font-normal leading-relaxed opacity-90">
                <span className="font-bold text-black">Fibo Production</span> is a premier production & media agency.
                We blend cinematic storytelling with cutting-edge technology to craft digital experiences that define brands.
              </p>

              <div className="space-y-4 lg:space-y-4 text-black font-medium leading-relaxed w-full mt-6">
                {/* Paragraph 1 */}
                <p className="pl-4 border-l-2 border-[#FFD36A] text-[16px] md:text-base lg:text-[17px] 2xl:text-xl max-w-3xl opacity-90">
                  We specialize in high-end 3D video production, immersive VFX, and creative media solutions. Over the years, we have helped global brands turn complex ideas into stunning visual realities.
                </p>

                {/* Paragraph 2 */}
                <p className="pl-4 border-l-2 border-[#FFD36A] text-[16px] md:text-base lg:text-[17px] 2xl:text-xl max-w-3xl opacity-90">
                  With a passion for innovation, we have successfully delivered <span className="text-black font-black">700+ projects</span>,
                  from interactive 3D environments to high-impact post-production for films and commercials.
                </p>

                {/* Paragraph 3 */}
                <p className="pl-4 border-l-2 border-[#FFD36A] text-[16px] md:text-base lg:text-[17px] 2xl:text-xl max-w-3xl opacity-90">
                  Our mission is simple: to push the boundaries of creativity and production quality, ensuring your project doesn't just reach an audience—it captures them.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. VISION & MISSION */}
      <section className="py-20 bg-[#f4f4f4] px-6 relative border-y border-zinc-200">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-20 space-y-4"
          >
            <div className="w-12 h-12 rounded-2xl bg-black flex items-center justify-center mx-auto text-[#FFD36A] shadow-2xl">
              <Sparkles size={22} />
            </div>
            <span className="text-[10px] tracking-[4px] text-black font-extrabold block uppercase">Our Core Purpose</span>
            <h3 className="text-[2rem] md:text-[3.5rem] font-black text-black tracking-tighter leading-none">
              Vision & Mission
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Our Vision",
                icon: <Globe size={26} />,
                desc: "To redefine visual storytelling by creating immersive 3D and cinematic experiences that set new global standards in the media and production industry."
              },
              {
                title: "Our Mission",
                icon: <Target size={26} />,
                desc: "To empower brands through high-end VFX, 3D innovation, and professional post-production that turns creative concepts into breathtaking digital realities."
              },
              {
                title: "Our Goal",
                icon: <Rocket size={26} />,
                desc: "To consistently deliver cutting-edge media solutions that drive engagement, elevate brand identity, and create a lasting impact in a digital-first world."
              },
            ].map((val, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-10 rounded-[2.5rem] bg-white border border-zinc-200 shadow-xl group transition-all duration-500 hover:border-[#FFD36A] hover:shadow-[0_20px_50px_rgba(255,211,106,0.15)]"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="shrink-0 w-14 h-14 flex items-center justify-center rounded-2xl bg-zinc-100 text-[#FFD36A] group-hover:bg-[#FFD36A] group-hover:text-black transition-all duration-500 shadow-sm">
                    {val.icon}
                  </div>
                  <h4 className="text-[20px] font-black text-black tracking-tight">{val.title}</h4>
                </div>

                <p className="text-zinc-600 text-[15px] font-medium leading-relaxed opacity-90 group-hover:text-black transition-colors duration-300">
                  {val.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* 4. WORKING PROCESS */}
      <section className="py-20 bg-[#FFFFFF] px-6 relative border-y border-white/[#FFFFFF]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <span className="text-[10px] tracking-[4px] text-black font-extrabold block mb-4 uppercase">Production Roadmap</span>
            <h3 className="text-[2rem] md:text-[3.5rem] font-black text-black tracking-tighter leading-none">
              Our Creative Workflow
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { step: "01", title: "Discovery", desc: "Understanding your vision and creative requirements." },
              { step: "02", title: "Strategy", desc: "Planning the production roadmap and technical approach." },
              { step: "03", title: "Production", desc: "Executing 3D modeling, VFX, and cinematography." },
              { step: "04", title: "Refinement", desc: "Iterative editing and high-end color grading." },
              { step: "05", title: "Delivery", desc: "Final render delivery in premium quality formats." }
            ].map((proc, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 rounded-[2rem] bg-[#f4f4f4] border border-zinc-200 hover:border-[#FFD36A] transition-all duration-500 hover:shadow-[0_20px_40px_rgba(255,211,106,0.15)] flex flex-col justify-between group"
              >
                <div>
                  {/* Icon Box: Light grey background with Gold text, hover par Gold fill */}
                  <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-zinc-100 text-[#FFD36A] border border-zinc-200 font-black text-sm mb-6 group-hover:bg-[#FFD36A] group-hover:text-black transition-all duration-500">
                    {proc.step}
                  </div>

                  {/* Heading: Black text, hover par Golden */}
                  <h3 className="text-[20px] font-black text-black mb-4 group-hover:text-[#FFD36A] transition-colors duration-300">
                    {proc.title}
                  </h3>

                  {/* Description: Dark grey text */}
                  <p className="text-zinc-600 text-[14px] leading-relaxed group-hover:text-black transition-colors duration-300">
                    {proc.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}