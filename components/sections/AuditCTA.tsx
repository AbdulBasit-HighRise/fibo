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
    <section className="w-full bg-[#030303] px-6 py-8">
      <div className="max-w-7xl 2xl:max-w-[1600px] mx-auto">

        {/* SLIM PREMIUM BAR */}
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03]">

          {/* Soft Accent Glow */}
          <div className="absolute inset-y-0 right-0 w-[300px] bg-blue-600/10 blur-3xl" />

          <div className="relative z-10 flex flex-col xl:flex-row items-center justify-between gap-6 px-5 md:px-8 py-5">

            {/* LEFT */}
            <div className="flex-1 text-center xl:text-left">

              <span className="text-[10px] uppercase tracking-[0.3em] text-blue-400 font-bold">
                FREE WEBSITE AUDIT
              </span>

              <h2 className="mt-2 text-2xl md:text-3xl font-black tracking-tight leading-none text-white">
                Get a Free Website{" "}
                <span className="text-blue-500">
                  Audit
                </span>
              </h2>
            </div>

            {/* RIGHT FORM */}
            <form
              onSubmit={handleSubmit}
              className="w-full xl:w-auto flex flex-col md:flex-row items-center gap-3"
            >

              {/* EMAIL */}
              <div className="relative w-full md:w-[220px]">

                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />

                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Business Email"
                  className="
                    w-full
                    h-[50px]
                    rounded-full
                    bg-black/30
                    border border-white/10
                    pl-11
                    pr-4
                    text-sm
                    text-white
                    placeholder:text-slate-600
                    outline-none
                    transition-all
                    focus:border-blue-500/40
                    focus:bg-white/[0.04]
                  "
                />
              </div>

              {/* URL */}
              <div className="relative w-full md:w-[220px]">

                <Globe className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />

                <input
                  type="url"
                  required
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder="Website URL"
                  className="
                    w-full
                    h-[50px]
                    rounded-full
                    bg-black/30
                    border border-white/10
                    pl-11
                    pr-4
                    text-sm
                    text-white
                    placeholder:text-slate-600
                    outline-none
                    transition-all
                    focus:border-blue-500/40
                    focus:bg-white/[0.04]
                  "
                />
              </div>

              {/* BUTTON */}
              <button
                type="submit"
                className="
                  group
                  h-[50px]
                  px-7
                  rounded-full
                  bg-blue-600
                  hover:bg-blue-500
                  text-white
                  text-[11px]
                  uppercase
                  tracking-[0.25em]
                  font-bold
                  transition-all
                  duration-300
                  flex
                  items-center
                  justify-center
                  gap-2
                  shadow-[0_10px_30px_rgba(37,99,235,0.18)]
                "
              >
                Analyze

                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}