import Link from "next/link";
import { Home, ArrowRight, Compass, ShieldAlert } from "lucide-react";

export default function NotFound() {
  return (
    // 🎯 FIXED: pt-28 (Mobile), md:pt-36 (Desktop), 2xl:pt-48 (Big Screens) lagaya hai aur justify-start kiya hai taake navbar se text na chupe
    <main className="relative bg-[#111827] text-white w-full min-h-screen flex flex-col items-center justify-start pt-28 md:pt-36 2xl:pt-48 selection:bg-blue-600 antialiased overflow-x-hidden px-6 pb-12">
      
      {/* 🌌 Ultra-Premium Cyber Grid & Ambient Moving Glow */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-40">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:30px_30px] 2xl:bg-[size:50px_50px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] 2xl:w-[1000px] 2xl:h-[1000px] bg-gradient-to-tr from-blue-600/10 to-cyan-500/5 blur-[120px] 2xl:blur-[180px] rounded-full" />
      </div>

      {/* 📦 Main Content Wrapper (Optimized for 2XL) */}
      <div className="relative z-10 text-center max-w-2xl 2xl:max-w-5xl mx-auto space-y-10 2xl:space-y-16 flex flex-col items-center">
        
        {/* Subtle Polite Status Badge */}
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/[0.02] border border-white/5 backdrop-blur-md text-[10px] 2xl:text-[14px] font-black tracking-[3px] text-blue-400 uppercase shadow-inner">
          <ShieldAlert size={14} className="text-blue-500 animate-pulse 2xl:w-5 2xl:h-5" />
          <span>System Route Notice</span>
        </div>

        {/* 🌊 Sinking & Floating 404 Visual (Famous Sites Vibe) */}
        <div className="relative inline-block select-none group">
          {/* Subtle Glow Behind 404 */}
          <div className="absolute inset-0 bg-blue-500/10 blur-[50px] rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
          
          {/* 404 Text with Sinking/Floating Animation */}
          <h1 className="text-[7rem] sm:text-[9rem] md:text-[14rem] 2xl:text-[22rem] font-black tracking-tighter leading-none bg-clip-text text-transparent bg-gradient-to-b from-white via-zinc-400 to-zinc-800/40 uppercase animate-[bounce_4s_infinite_ease-in-out] cursor-default drop-shadow-[0_35px_35px_rgba(0,0,0,0.6)]">
            404
          </h1>
          
          {/* Interactive Neon Shadow Line below 404 */}
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-40 2xl:w-64 h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-70 group-hover:w-60 2xl:group-hover:w-96 transition-all duration-700" />
        </div>

        {/* Classy & Polite Error Message */}
        <div className="space-y-4 2xl:space-y-6 max-w-lg 2xl:max-w-3xl">
          <h2 className="text-xl md:text-2xl 2xl:text-5xl font-black tracking-tight uppercase text-white">
            Looks like you've taken a wrong turn.
          </h2>
          <p className="text-zinc-400 text-xs md:text-sm 2xl:text-xl leading-relaxed font-normal tracking-wide antialiased px-4 2xl:px-12 max-w-xl 2xl:max-w-4xl mx-auto">
            Don't worry, even the best framework deployments get lost sometimes. The link might be outdated or typed incorrectly, but we've got you covered. Let's get you back on track!
          </p>
        </div>

        {/* 🛠️ NAVIGATION CENTER (Responsive & Scaled for 2XL) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 2xl:gap-8 pt-4 w-full max-w-sm sm:max-w-none">
          
          {/* Back To Home Button */}
          <Link href="/" className="w-full sm:w-auto">
            <button className="group relative overflow-hidden w-full sm:w-[220px] 2xl:w-[300px] h-[54px] 2xl:h-[70px] rounded-xl bg-white text-black font-black text-[11px] 2xl:text-[15px] uppercase tracking-widest transition-all duration-500 flex items-center justify-center gap-2 active:scale-[0.98] shadow-2xl">
              <div className="absolute inset-0 w-0 bg-gradient-to-r from-blue-600 to-cyan-500 transition-all duration-500 ease-out group-hover:w-full" />
              <span className="relative z-10 flex items-center justify-center gap-2 group-hover:text-white transition-colors duration-500">
                <Home size={14} className="group-hover:rotate-6 transition-transform duration-300 2xl:w-5 2xl:h-5" />
                Go to Homepage
              </span>
            </button>
          </Link>

          {/* Explore Services Button */}
          <Link href="/services" className="w-full sm:w-auto">
            <button className="group w-full sm:w-[220px] 2xl:w-[300px] h-[54px] 2xl:h-[70px] rounded-xl bg-white/[0.01] border border-white/5 hover:border-blue-500/30 hover:bg-blue-500/5 text-zinc-400 hover:text-blue-400 font-black text-[11px] 2xl:text-[15px] uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 active:scale-[0.98] backdrop-blur-md">
              <Compass size={14} className="text-zinc-600 group-hover:text-blue-400 group-hover:rotate-45 transition-all duration-500 2xl:w-5 2xl:h-5" />
              <span>Our Services</span>
              <ArrowRight size={14} className="text-zinc-600 group-hover:text-blue-400 group-hover:translate-x-1 transition-all duration-300 2xl:w-5 2xl:h-5" />
            </button>
          </Link>

        </div>

        {/* Bottom Decorative Footer Link Note */}
        <p className="text-[10px] 2xl:text-[14px] font-bold tracking-[2px] text-zinc-600 uppercase pt-6 2xl:pt-12 select-none">
          High Rise Digital © {new Date().getFullYear()}
        </p>

      </div>
    </main>
  );
}