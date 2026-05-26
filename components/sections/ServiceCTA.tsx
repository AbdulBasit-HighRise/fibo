"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function ConsultationCTA() {
  return (
    <section className="w-full bg-[#020617] py-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* MAIN CARD */}
        <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] backdrop-blur-xl">

          {/* Glow Effects */}
          <div className="absolute -top-32 -left-20 w-[300px] h-[300px] bg-blue-500/10 blur-[120px]" />
          <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-cyan-400/10 blur-[120px]" />

          <div className="grid lg:grid-cols-2 items-center">

            {/* LEFT SIDE */}
            <div className="relative z-10 p-6 md:p-8">

              <h3 className="mt-2 text-4xl md:text-6xl font-black leading-[0.95] tracking-tight text-white max-w-xl">
                Let’s Build Your{" "}
                <span className="inline-block mb-2 pb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">
                  Next Big Project
                </span>
              </h3>

              <p className="mt-6 text-slate-400 text-sm md:text-base leading-relaxed max-w-lg">
                Get a free strategy consultation for your business, website,
                branding, or marketing growth system.
              </p>

              {/* 🎯 FORM ACTION HERE (Choose Tareeqa 1 or Tareeqa 2) */}
              <form 
                action="https://formspree.io/f/YOUR_FORM_ID_HERE" // <-- Formspree ID ya "mailto:info@highrise.com"
                method="POST" 
                className="mt-10 space-y-4"
              >

                {/* ROW */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="First Name"
                    required
                    placeholder="First Name"
                    className="h-14 rounded-2xl bg-[#0B1220] border border-white/10 px-5 text-white placeholder:text-slate-500 outline-none focus:border-blue-500/40 transition-all"
                  />

                  <input
                    type="text"
                    name="Last Name"
                    required
                    placeholder="Last Name"
                    className="h-14 rounded-2xl bg-[#0B1220] border border-white/10 px-5 text-white placeholder:text-slate-500 outline-none focus:border-blue-500/40 transition-all"
                  />
                </div>

                {/* ROW */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    type="email"
                    name="Email"
                    required
                    placeholder="Business Email"
                    className="h-14 rounded-2xl bg-[#0B1220] border border-white/10 px-5 text-white placeholder:text-slate-500 outline-none focus:border-blue-500/40 transition-all"
                  />

                  <input
                    type="text"
                    name="Phone"
                    placeholder="Phone Number"
                    className="h-14 rounded-2xl bg-[#0B1220] border border-white/10 px-5 text-white placeholder:text-slate-500 outline-none focus:border-blue-500/40 transition-all"
                  />
                </div>

                {/* TEXTAREA */}
                <textarea
                  name="Message"
                  required
                  placeholder="Tell us about your project..."
                  rows={5}
                  className="w-full rounded-[24px] bg-[#0B1220] border border-white/10 px-5 py-4 text-white placeholder:text-slate-500 outline-none resize-none focus:border-blue-500/40 transition-all"
                />

                {/* SUBMIT BUTTON */}
                <div className="w-full block mt-3">
                  <motion.button
                    whileTap={{ scale: 0.97 }}
                    whileHover={{ y: -2 }}
                    type="submit" // 🎯 Type submit khud form action ko trigger karega
                    className="group relative overflow-hidden h-14 w-full rounded-full bg-white border border-white/5 text-black font-black uppercase tracking-[0.25em] text-xs flex items-center justify-center gap-3 transition-all duration-500 shadow-[0_10px_40px_rgba(37,99,235,0.15)] cursor-pointer"
                  >
                    <div className="absolute top-0 left-0 bottom-0 w-0 bg-gradient-to-r from-blue-600 to-cyan-500 transition-all duration-500 ease-out group-hover:w-full pointer-events-none z-0" />

                    <span className="relative z-10 flex items-center justify-center gap-3 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 group-hover:text-white transition-colors duration-500 font-bold tracking-[0.25em]">
                      Send Request
                      <ArrowUpRight
                        size={18}
                        className="text-blue-600 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-500"
                      />
                    </span>
                  </motion.button>
                </div>
              </form>
            </div>

            {/* RIGHT SIDE IMAGE */}
            <div className="relative h-full min-h-[620px] hidden lg:block">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-cyan-400/10 to-transparent" />
              <div className="absolute inset-y-10 right-10 left-0 rounded-tl-[180px] rounded-bl-[180px] rounded-tr-[40px] rounded-br-[40px] bg-gradient-to-br from-blue-500/20 to-cyan-400/20 border border-white/10 overflow-hidden">
                <Image
                  src="/contact-png.png"
                  alt="Consultation Team"
                  fill
                  priority
                  className="object-contain object-bottom scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/50 via-transparent to-transparent" />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}