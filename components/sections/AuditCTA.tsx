"use client";
import { useState } from "react";
import { ArrowRight, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function AuditCTA() {
  const [email, setEmail] = useState("");
  const [url, setUrl] = useState("");

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

  // 🚀 universal API route data post handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ loading: true, success: null, message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: "Audit Requested User",
          email: email,
          phone: "Not Provided (Audit Strip Hook)",
          service: "Free Website Audit",
          subject: `New Free Website Audit Request for: ${url} 🔍`,
          message: `User requested a full analysis for website link: ${url}`,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus({
          loading: false,
          success: true,
          message: "Audit request locked in successfully! 🚀",
        });

        // Inputs reset
        setEmail("");
        setUrl("");

        // 🕒 Notice message dynamic clear
        setTimeout(() => {
          setStatus({ loading: false, success: null, message: "" });
        }, 3500);

      } else {
        throw new Error(data.error || "Failed to submit audit data payload.");
      }
    } catch (error: any) {
      setStatus({
        loading: false,
        success: false,
        message: error.message || "Network error. Please try again.",
      });
    }
  };

  return (
    // 🎯 MAIN SECTION: Faltu vertical padding drops completely to make it tight & clean
    <section className="relative w-full 
    bg-[#E5E5E5]
     px-6 sm:px-8 py-6 md:py-8">

     {/* ⚡ THE PREMIUM CARD CONTAINER: Golden Cinematic Look */}
<div className="relative z-10 rounded-[2.5rem] 
  bg-[#FFD36A] 
  overflow-hidden
  px-8 py-10 sm:px-12 sm:py-12 lg:px-16 2xl:px-24 2xl:py-16 
  shadow-2xl transition-all duration-500">

  {/* Cinematic Golden Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-black/40 to-transparent z-[1]" />

  {/* Inner Framework Layout */}
  <div className="relative z-[2] flex flex-col xl:flex-row items-center justify-between gap-8 xl:gap-10 2xl:gap-16">

    {/* 📝 LEFT: HEADING */}
    <div className="text-center xl:text-left flex-initial xl:whitespace-nowrap">
      <h3 className="text-[2rem] sm:text-3xl md:text-3xl lg:text-4xl 2xl:text-5xl 3xl:text-[3.5rem] font-black tracking-tight text-white normal-case leading-none">
        Get a Free Website Audit
      </h3>
    </div>

    {/* 📥 RIGHT: FORM BLOCK */}
    <div className="w-full xl:max-w-[65%] 2xl:max-w-[70%] flex flex-col gap-4 flex-1">
      <form
        onSubmit={handleSubmit}
        className="w-full grid grid-cols-1 sm:grid-cols-[2fr_2fr_1.4fr] items-stretch gap-5 2xl:gap-6"
      >
        {/* EMAIL INPUT */}
        <div className="flex flex-col justify-end w-full space-y-1.5">
          <label className="text-[11px] 2xl:text-xs font-bold uppercase tracking-widest text-white/90 ml-1">
            Business Email <span className="text-red-400">*</span>
          </label>
          <input
            type="email"
            required
            placeholder="email@company.com"
            value={email}
            disabled={status.loading}
            className="w-full bg-black/20 border border-white/20 rounded-2xl p-3 2xl:p-3.5 outline-none focus:border-white focus:bg-black/40 transition-all text-white placeholder:text-white/50 text-sm disabled:opacity-50"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* URL INPUT */}
        <div className="flex flex-col justify-end w-full space-y-1.5">
          <label className="text-[11px] 2xl:text-xs font-bold uppercase tracking-widest text-white/90 ml-1">
            Website URL <span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            required
            placeholder="example.com"
            value={url}
            disabled={status.loading}
            className="w-full bg-black/20 border border-white/20 rounded-2xl p-3 2xl:p-3.5 outline-none focus:border-white focus:bg-black/40 transition-all text-white placeholder:text-white/50 text-sm disabled:opacity-50"
            onChange={(e) => setUrl(e.target.value)}
          />
        </div>

        {/* ⚡ ANALYZE BUTTON */}
        <div className="flex flex-col justify-end w-full">
          <button
            type="submit"
            disabled={status.loading}
            className="group relative overflow-hidden flex items-center justify-center gap-2 px-4 h-[48px] bg-white text-black font-black text-[10px] tracking-[1.5px] uppercase rounded-2xl active:scale-95 transition-all w-full shadow-lg"
          >
            <div className="absolute inset-0 w-0 bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-500 ease-out group-hover:w-full" />
            <span className="relative z-10 group-hover:text-white transition-colors duration-500 flex items-center justify-center gap-1.5 w-full">
              {status.loading ? "Analyzing..." : "Check Now"}
            </span>
          </button>
        </div>
      </form>
    </div>
  </div>
</div>
    </section>
  );
}