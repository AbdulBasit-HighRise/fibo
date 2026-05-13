"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

export default function ContentFAQ() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  const faqs = [
    {
      q: "What type of content do you specialize in?",
      a: "We handle everything from high-converting website copy and SEO blogs to engaging social media captions and professional whitepapers."
    },
    {
      q: "Is the content original and AI-free?",
      a: "Absolutely. While we use AI for research, every single word is written and polished by human experts to ensure brand voice, emotional depth, and 100% originality."
    },
    {
      q: "How many revisions do I get?",
      a: "Your satisfaction is priority. We offer up to 2 rounds of revisions to ensure the tone and messaging perfectly align with your expectations."
    }
  ];

  return (
    <section className="relative py-24 bg-[#020617] overflow-hidden border-y border-white/5">
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <div className="mb-12">
          <p className="text-[10px] uppercase tracking-[6px] text-[#00f2ff] font-black italic mb-2">Word Craft</p>
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase italic leading-none">
            Content <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f2ff] to-[#0070ff]">FAQ.</span>
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