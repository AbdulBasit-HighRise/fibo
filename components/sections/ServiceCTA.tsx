"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Loader2 } from "lucide-react";

export default function ConsultationCTA() {
  // 🎯 Form Input States
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  // 🎯 API Status Feedback State
  const [status, setStatus] = useState<{
    loading: boolean;
    success: boolean | null;
    message: string;
  }>({
    loading: false,
    success: null,
    message: "",
  });

  // 🚀 FIXED: Next.js API Secure Handler
  const handleCtaSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ loading: true, success: null, message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          // Combining First & Last Name as the pipeline expects "name"
          name: `${formData.firstName} ${formData.lastName}`.trim(),
          email: formData.email,
          phone: formData.phone || "Not Provided",
          service: "Strategy Consultation (CTA Hook)",
          subject: "New Free Strategy Consultation Request 🚀",
          message: formData.message,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus({
          loading: false,
          success: true,
          message: "Your strategy consultation request has been sent! 🚀",
        });

        // Form Fields Clear
        setFormData({ firstName: "", lastName: "", email: "", phone: "", message: "" });

        // 🕒 3.5 seconds baad status banner hide karne ke liye
        setTimeout(() => {
          setStatus({ loading: false, success: null, message: "" });
        }, 3500);

      } else {
        throw new Error(data.error || "Failed to submit consultation payload.");
      }
    } catch (error: any) {
      setStatus({
        loading: false,
        success: false,
        message: error.message || "Network error. Please try again later.",
      });
    }
  };

  return (
<section className="w-full bg-[#020617] py-16 md:py-24 px-4 sm:px-8 md:px-12 2xl:px-20 overflow-hidden">
  
  <div className="w-full mx-auto max-w-5xl lg:max-w-6xl xl:max-w-7xl 2xl:max-w-[1600px] 3xl:max-w-[1900px] 4xl:max-w-[1900px]">

    {/* MAIN CARD */}
    <div className="relative overflow-hidden rounded-[32px] md:rounded-[40px] border border-white/10 bg-white/[0.03] backdrop-blur-xl w-full">

      {/* Glow Effects */}
      <div className="absolute -top-32 -left-20 w-[400px] h-[400px] bg-blue-500/10 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-400/10 blur-[140px] pointer-events-none" />

      {/* 🎯 RESPONSIVE GRID LAYOUT */}
      <div className="grid lg:grid-cols-2 items-stretch min-h-[600px] 2xl:min-h-[700px]">

        {/* LEFT SIDE: CONTENT & FORM */}
        <div className="relative z-10 p-6 sm:p-10 md:p-12 2xl:p-20 flex flex-col justify-center w-full">

          <h3 className="mt-2 text-[1.8rem] sm:text-5xl md:text-6xl 2xl:text-7xl font-black leading-[0.95] tracking-tight text-white max-w-2xl">
            Let’s Build Your{" "}
            <span className=" mb-2 pb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">
              Next Big Project
            </span>
          </h3>

          <p className="mt-6 text-slate-400 text-sm md:text-base 2xl:text-xl leading-relaxed max-w-xl">
            Get a free strategy consultation for your business, website,
            branding, or marketing growth system.
          </p>

          {/* FORM */}
          <form onSubmit={handleCtaSubmit} className="mt-10 space-y-4 2xl:space-y-6 w-full">

            {/* ROW 1 */}
            <div className="grid sm:grid-cols-2 gap-4 2xl:gap-6">
              <input
                type="text"
                required
                disabled={status.loading}
                placeholder="First Name"
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                className="h-14 2xl:h-18 rounded-2xl bg-[#020617]/60 border border-white/10 px-5 text-white placeholder:text-slate-500 outline-none focus:border-blue-500/50 focus:bg-[#020617] transition-all disabled:opacity-40 text-sm md:text-base 2xl:text-lg"
              />

              <input
                type="text"
                required
                disabled={status.loading}
                placeholder="Last Name"
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                className="h-14 2xl:h-18 rounded-2xl bg-[#020617]/60 border border-white/10 px-5 text-white placeholder:text-slate-500 outline-none focus:border-blue-500/50 focus:bg-[#020617] transition-all disabled:opacity-40 text-sm md:text-base 2xl:text-lg"
              />
            </div>

            {/* ROW 2 */}
            <div className="grid sm:grid-cols-2 gap-4 2xl:gap-6">
              <input
                type="email"
                required
                disabled={status.loading}
                placeholder="Business Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="h-14 2xl:h-18 rounded-2xl bg-[#020617]/60 border border-white/10 px-5 text-white placeholder:text-slate-500 outline-none focus:border-blue-500/50 focus:bg-[#020617] transition-all disabled:opacity-40 text-sm md:text-base 2xl:text-lg"
              />

              <input
                type="text"
                disabled={status.loading}
                placeholder="Phone Number"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="h-14 2xl:h-18 rounded-2xl bg-[#020617]/60 border border-white/10 px-5 text-white placeholder:text-slate-500 outline-none focus:border-blue-500/50 focus:bg-[#020617] transition-all disabled:opacity-40 text-sm md:text-base 2xl:text-lg"
              />
            </div>

            {/* TEXTAREA */}
            <textarea
              required
              disabled={status.loading}
              placeholder="Tell us about your project..."
              rows={5}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full rounded-[24px] bg-[#020617]/60 border border-white/10 px-5 py-4 text-white placeholder:text-slate-500 outline-none resize-none focus:border-blue-500/50 focus:bg-[#020617] transition-all disabled:opacity-40 text-sm md:text-base 2xl:text-lg"
            />

            {/* Live Banner Feedback Alert */}
            <AnimatePresence mode="wait">
              {status.message && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className={`p-4 rounded-2xl text-center text-xs md:text-sm font-bold border ${
                    status.success
                      ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-400"
                      : "bg-rose-500/10 border-rose-500/20 text-rose-400"
                  }`}
                >
                  {status.message}
                </motion.div>
              )}
            </AnimatePresence>

            {/* SUBMIT BUTTON */}
            <div className="w-full block mt-3">
              <motion.button
                whileTap={{ scale: status.loading ? 1 : 0.97 }}
                whileHover={{ y: status.loading ? 0 : -2 }}
                type="submit"
                disabled={status.loading}
                className="group relative overflow-hidden h-14 2xl:h-18 w-full rounded-full bg-white border border-white/5 text-black font-black uppercase tracking-[0.25em] text-xs md:text-sm flex items-center justify-center gap-3 transition-all duration-500 shadow-[0_10px_40px_rgba(37,99,235,0.15)] cursor-pointer disabled:opacity-50"
              >
                <div className="absolute top-0 left-0 bottom-0 w-0 bg-gradient-to-r from-blue-600 to-cyan-500 transition-all duration-500 ease-out group-hover:w-full pointer-events-none z-0" />

                <span className="relative z-10 flex items-center justify-center gap-3 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 group-hover:text-white transition-colors duration-500 font-bold tracking-[0.25em]">
                  {status.loading ? (
                    <>
                      Transmitting...
                      <Loader2 size={16} className="animate-spin text-blue-600 group-hover:text-white" />
                    </>
                  ) : (
                    <>
                      Send Request
                      <ArrowUpRight
                        size={18}
                        className="text-blue-600 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-500"
                      />
                    </>
                  )}
                </span>
              </motion.button>
            </div>
          </form>
        </div>

        {/* RIGHT SIDE IMAGE */}
        {/* 🎯 FIXED: Grid stretching logic handles large scale sizes cleanly now */}
        <div className="hidden lg:flex items-end justify-center relative min-h-[600px] 2xl:min-h-[700px] w-full self-stretch">
          
          {/* Shape Background */}
          <div className="absolute bottom-0 right-0 w-[85%] h-[75%] 
          
   bg-gradient-to-bl from-[#0971A6] via-[#054f7a] to-[#021526]
           rounded-tl-[2400px] 2xl:rounded-tl-[2500px]" />

          {/* Image Layer */}
          <img
            src="/contact-png.png"
            alt="Team"
            className="relative z-10 max-h-[650px] 2xl:max-h-[950px] w-auto object-contain object-bottom select-none pointer-events-none"
          />

        </div>

      </div>
    </div>
  </div>
</section>
  );
}