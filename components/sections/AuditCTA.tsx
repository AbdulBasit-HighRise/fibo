"use client";

import { motion } from "framer-motion";
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
    // Section background as requested: #020617
    <section className="py-12 2xl:py-20 bg-[#020617] px-6">
      <div className="max-w-7xl 2xl:max-w-[110rem] mx-auto">
        
        {/* 🖤 Black Card Design */}
        <div className="relative overflow-hidden rounded-[2.5rem] 2xl:rounded-[4rem] bg-black p-8 md:p-12 2xl:p-20 border border-white/5 shadow-2xl">
          
          {/* Subtle Blue Glow in the corner for depth */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-600/10 blur-[100px] rounded-full pointer-events-none" />
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
            
            {/* Left Side: Content */}
            <div className="text-white text-center lg:text-left space-y-4">
              <h2 className="text-3xl md:text-5xl 2xl:text-7xl font-black tracking-tighter leading-none">
                Get a free  <br />
                <span className="text-blue-500">website audit.</span>
              </h2>
             
            </div>

            {/* Right Side: Sleek Horizontal Form */}
            <form 
              onSubmit={handleSubmit} 
              className="w-full lg:w-auto flex flex-col md:flex-row items-center gap-3 bg-zinc-900/50 backdrop-blur-sm p-2 rounded-[1.5rem] md:rounded-full border border-white/10"
            >
              {/* Email Input */}
              <div className="relative w-full md:w-60 2xl:w-96">
                <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-500 w-4 h-4 2xl:w-7 2xl:h-7" />
                <input
                  type="email"
                  placeholder="Business Email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-transparent text-white placeholder:text-zinc-600 py-4 2xl:py-7 pl-12 2xl:pl-16 pr-4 outline-none text-sm 2xl:text-xl"
                />
              </div>

              {/* Minimalist Divider */}
              <div className="hidden md:block w-[1px] h-10 bg-white/10" />

              {/* URL Input */}
              <div className="relative w-full md:w-60 2xl:w-96">
                <Globe className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-500 w-4 h-4 2xl:w-7 2xl:h-7" />
                <input
                  type="url"
                  placeholder="Website URL"
                  required
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  className="w-full bg-transparent text-white placeholder:text-zinc-600 py-4 2xl:py-7 pl-12 2xl:pl-16 pr-4 outline-none text-sm 2xl:text-xl"
                />
              </div>

              {/* Submit Button: Blue to match theme */}
              <button
                type="submit"
                className="w-full md:w-auto bg-blue-600 text-white font-bold px-10 2xl:px-16 py-4 2xl:py-7 rounded-xl md:rounded-full hover:bg-blue-500 transition-all duration-300 flex items-center justify-center gap-3 shadow-xl shadow-blue-600/20 active:scale-95 text-sm 2xl:text-xl"
              >
                Get My Audit
                <ArrowRight className="w-4 h-4 2xl:w-6 2xl:h-6" />
              </button>
            </form>

          </div>
        </div>
      </div>
    </section>
  );
}