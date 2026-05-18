"use client";

import { Globe, Mail, ArrowRight } from "lucide-react";
import { useState } from "react";

export default function AuditCTA() {
  const [email, setEmail] = useState("");
  const [url, setUrl] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Audit Request Sent!");
  };

  return (
    // 🛠️ Premium Padding: Restored healthy vertical height so the section feels premium and spacious
    <section className="relative w-full overflow-hidden border-y border-white/5 bg-gradient-to-r from-[#030303] via-[#050a18] to-[#030303] px-6 md:px-12 lg:px-20 2xl:px-32 py-12 md:py-16 2xl:py-20">
      
      {/* 🌌 Background Glows */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[300px] bg-blue-600/[0.06] blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[250px] bg-indigo-600/[0.04] blur-[100px] rounded-full pointer-events-none" />

      {/* 📐 Master Framework Flex Layout */}
      <div className="relative z-10 max-w-7xl 2xl:max-w-[110rem] mx-auto flex flex-col xl:flex-row xl:flex-nowrap items-center justify-between gap-8 xl:gap-12 2xl:gap-16">
        
        {/* 📝 LEFT: UPGRADED HEADING (Bigger, punchier, but strictly locked in 1 line) */}
        <div className="text-center xl:text-left flex-initial whitespace-nowrap">
          <h3 className="!text-2xl sm:!text-3xl md:!text-3xl lg:!text-4xl 2xl:!text-5xl 3xl:!text-[3.5rem] font-black tracking-tight text-white normal-case leading-none">
            Get a Free {" "}
            <span className="inline-block py-0.5 pr-2 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Website Audit
            </span>
          </h3>
        </div>

        {/* 📥 RIGHT: FORM (Maintained sleekness to perfectly balance with the bigger heading) */}
        <form
          onSubmit={handleSubmit}
          className="w-full xl:w-auto flex flex-col sm:flex-row sm:flex-nowrap items-center gap-3 sm:gap-4 2xl:gap-6 flex-1 xl:justify-end"
        >
          {/* EMAIL INPUT */}
          <div className="relative w-full sm:w-[200px] md:w-[240px] 2xl:w-[320px] shrink-0">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Business Email"
              className="w-full h-[46px] 2xl:h-[54px] rounded-full bg-white/[0.05] border border-white/20 pl-5 pr-5 text-xs sm:text-sm 2xl:text-base text-white placeholder:text-zinc-500 outline-none transition-all focus:border-blue-500/50 focus:bg-white/[0.08] backdrop-blur-md"
            />
          </div>

          {/* URL INPUT */}
          <div className="relative w-full sm:w-[200px] md:w-[240px] 2xl:w-[320px] shrink-0">
            <input
              type="url"
              required
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="Website URL"
              className="w-full h-[46px] 2xl:h-[54px] rounded-full bg-white/[0.05] border border-white/20 pl-5 pr-5 text-xs sm:text-sm 2xl:text-base text-white placeholder:text-zinc-500 outline-none transition-all focus:border-blue-500/50 focus:bg-white/[0.08] backdrop-blur-md"
            />
          </div>

          {/* ⚡ ANALYZE BUTTON */}
          <button
            type="submit"
            className="group relative h-[46px] 2xl:h-[54px] px-8 2xl:px-12 rounded-full bg-white overflow-hidden transition-all duration-500 active:scale-95 shadow-xl whitespace-nowrap shrink-0 w-full sm:w-auto"
          >
            {/* 🛠️ GRADIENT FILL LAYER */}
            <div className="absolute inset-0 w-0 bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-500 ease-out group-hover:w-full" />
            
            <span className="relative z-10 flex items-center justify-center gap-2 sm:gap-3 text-black font-black text-[10px] sm:text-[11px] 2xl:text-[13px] tracking-[1.5px] sm:tracking-[2px] group-hover:text-white transition-colors duration-500">
              Check Now 
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 2xl:w-5 2xl:h-5 group-hover:translate-x-1.5 transition-transform duration-300" />
            </span>
          </button>
        </form>

      </div>
    </section>
  );
}