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
    bg-[#111827]
     px-6 sm:px-8 py-6 md:py-8">

      {/* 🎯 MAIN WRAPPER: Removed 'pb-12' padding so the bottom area remains compact */}
      <div className="relative z-10 max-w-7xl 2xl:max-w-[100rem] mx-auto">

        {/* ⚡ THE PREMIUM CARD CONTAINER: Converted to matching layout dark glassmorphism */}
        <div className="relative z-10 rounded-[2.5rem] 
         bg-gradient-to-bl from-[#0971A6] via-[#054f7a] to-[#021526]
          px-8 py-10 sm:px-12 sm:py-12 lg:px-16 2xl:px-24 2xl:py-16 shadow-2xl backdrop-blur-sm transition-all duration-500">

          {/* Inner Framework Layout: Splits Left Content & Right Form perfectly */}
          <div className="relative z-10 flex flex-col xl:flex-row items-center justify-between gap-8 xl:gap-10 2xl:gap-16">

            {/* 📝 LEFT: HEADING */}
            <div className="text-center xl:text-left flex-initial xl:whitespace-nowrap">
              <h3 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl 2xl:text-5xl 3xl:text-[3.5rem] font-black tracking-tight text-white normal-case leading-none">
                Get a Free Website Audit
              </h3>
            </div>

      {/* 📥 RIGHT: FORM BLOCK */}
<div className="w-full xl:max-w-[65%] 2xl:max-w-[70%] flex flex-col gap-4 flex-1">
  <form
    onSubmit={handleSubmit}
    // {/* 🎯 Button ko extra breath dene ke liye grid ratio smooth kiya (sm:grid-cols-[2fr_2fr_1.4fr]) */}
    className="w-full grid grid-cols-1 sm:grid-cols-[2fr_2fr_1.4fr] items-stretch gap-5 2xl:gap-6"
  >
    {/* EMAIL INPUT */}
    <div className="flex flex-col justify-end w-full space-y-1.5">
      <label className="text-[11px] 2xl:text-xs font-bold uppercase tracking-widest text-white ml-1">
        Business Email <span className="text-red-500">*</span>
      </label>
      <input
        type="email"
        required
        placeholder="email@company.com"
        value={email}
        disabled={status.loading}
        // {/* 🎯 Padding slim ki: p-3.5 2xl:p-5 */}
        className="w-full bg-[#020617]/60 border border-white/10 rounded-2xl p-3 2xl:p-4 outline-none focus:border-blue-500 focus:bg-[#020617] transition-all text-white placeholder:text-slate-500 text-sm disabled:opacity-50
        [&:-webkit-autofill]:bg-slate-900/0 [&:-webkit-autofill]:text-white [&:-webkit-autofill]:[-webkit-text-fill-color:white] [&:-webkit-autofill]:[transition:background-color_5000s_ease-in-out_0s]"
        onChange={(e) => setEmail(e.target.value)}
      />
    </div>

    {/* URL INPUT */}
    <div className="flex flex-col justify-end w-full space-y-1.5">
      <label className="text-[11px] 2xl:text-xs font-bold uppercase tracking-widest text-white ml-1">
        Website URL <span className="text-red-500">*</span>
      </label>
      <input
        type="text"
        required
        placeholder="example.com"
        value={url}
        disabled={status.loading}
        // {/* 🎯 Padding slim ki: p-3.5 2xl:p-5 */}
        className="w-full bg-[#020617]/60 border border-white/10 rounded-2xl p-3 2xl:p-4 outline-none focus:border-blue-500 focus:bg-[#020617] transition-all text-white placeholder:text-slate-500 text-sm disabled:opacity-50
        [&:-webkit-autofill]:bg-slate-900/0 [&:-webkit-autofill]:text-white [&:-webkit-autofill]:[-webkit-text-fill-color:white] [&:-webkit-autofill]:[transition:background-color_5000s_ease-in-out_0s]"
        onChange={(e) => setUrl(e.target.value)}
      />
    </div>

    {/* ⚡ ANALYZE BUTTON */}
    <div className="flex flex-col justify-end w-full">
      <button
        type="submit"
        disabled={status.loading}
        // {/* 🎯 Height adjusted, tracking streamlined, whitespace-nowrap added */}
        className="group relative overflow-hidden flex items-center justify-center gap-2 px-4 h-[48px] sm:h-[48px] 2xl:h-[64px] bg-white text-black font-black text-[10px] tracking-[1.5px] uppercase rounded-2xl active:scale-95 transition-all duration-500 w-full shadow-lg shadow-black/10 disabled:opacity-50 disabled:scale-100 whitespace-nowrap"
      >
        <div className="absolute inset-0 w-0 bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-500 ease-out group-hover:w-full" />
        <span className="relative z-10 group-hover:text-white transition-colors duration-500 flex items-center justify-center gap-1.5 w-full">
          {status.loading ? (
            <>
              Analyzing
              <Loader2 size={13} className="animate-spin text-zinc-700 group-hover:text-white shrink-0" />
            </>
          ) : (
            <>
              Check Now
              <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform duration-300 text-zinc-700 group-hover:text-white shrink-0" />
            </>
          )}
        </span>
      </button>
    </div>
  </form>

  {/* Real-Time Status Notification Alert */}
  <AnimatePresence mode="wait">
    {status.message && (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        className={`p-4 rounded-xl font-medium text-sm flex items-center gap-3 border ${
          status.success
            ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-400"
            : "bg-rose-500/10 border-rose-500/20 text-rose-400"
        }`}
      >
        {status.message}
      </motion.div>
    )}
  </AnimatePresence>
</div>

          </div>
        </div>

        {/* 🌌 NEON 3D GLOW CAST */}
        <div className="absolute bottom-2 left-12 right-12 h-10 bg-blue-500/10 blur-[35px] rounded-full pointer-events-none z-0" />

      </div>
    </section>
  );
}