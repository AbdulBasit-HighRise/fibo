"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

export default function BrandingFAQ() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  const faqs = [
    {
      q: "What's included in a Brand Identity kit?",
      a: "Our full kit includes Logo design, Typography, Color Palette, Brand Voice guidelines, and Social Media templates for a consistent look."
    },
    {
      q: "I already have a logo, can you just refresh it?",
      a: "Yes! We offer 'Brand Evolution' services where we modernize your existing assets while keeping the core recognition of your brand intact."
    },
    {
      q: "How long does the branding process take?",
      a: "A standard branding project takes 2-3 weeks. This includes research, mood-boarding, design concepts, and final refinements."
    }
  ];

  return (
    <section className="relative py-24 bg-[#020617] overflow-hidden border-y border-white/5">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <div className="mb-12">
          <p className="text-[10px] uppercase tracking-[6px] text-[#00f2ff] font-black italic mb-2">Visual Strategy</p>
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase italic leading-none">
            Branding <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f2ff] to-[#0070ff]">FAQ.</span>
          </h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className={`rounded-2xl border transition-all duration-500 ${activeIdx === idx ? "bg-blue-900/20 border-blue-500/50" : "bg-white/[0.02] border-white/5"}`}>
              <button onClick={() => setActiveIdx(activeIdx === idx ? null : idx)} className="w-full flex items-center justify-between p-6 text-left outline-none">
                <span className={`text-lg font-bold ${activeIdx === idx ? "text-[#00f2ff]" : "text-zinc-200"}`}>{faq.q}</span>
                <div className={`p-2 rounded-lg ${activeIdx === idx ? "bg-blue-500 text-white" : "bg-white/5 text-zinc-500"}`}>
                  {activeIdx === idx ? <Minus size={18} /> : <Plus size={18} />}
                </div>
              </button>
              <AnimatePresence>
                {activeIdx === idx && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                    <div className="px-6 pb-8 text-zinc-400 border-t border-white/5 pt-4">{faq.a}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}