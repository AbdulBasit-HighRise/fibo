"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useInView,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Users, Rocket, Globe, Zap } from "lucide-react";

type StatProps = {
  value: number;
  label: string;
  icon: React.ReactNode;
  suffix?: string;
};

const StatItem = ({ value, label, icon, suffix = "+" }: StatProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [isMounted, setIsMounted] = useState(false);

  const count = useMotionValue(0);
  const spring = useSpring(count, { stiffness: 45, damping: 18 });
  const display = useTransform(spring, (latest) => Math.round(latest));

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isInView && isMounted) {
      count.set(value);
    }
  }, [isInView, value, count, isMounted]);

  return (
    <motion.div
      ref={ref}
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      // 🖥️ 4K Scale: Padding increased from py-12 to 2xl:py-24
      className="group relative flex flex-col items-center justify-center py-12 2xl:py-24 px-4 transition-all duration-300 cursor-pointer"
    >
      {/* 🌌 Premium Neon Glow Background on Hover */}
      <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 blur-3xl transition-all duration-500 pointer-events-none" />

      {/* Dynamic Hover Border Track */}
      <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />

      {/* ICON - 🖥️ 4K Scale */}
      <div className="mb-4 2xl:mb-8 text-zinc-500 group-hover:text-blue-400 group-hover:scale-125 transition-all duration-300">
        {/* Lucide icons scaling via stroke width or container */}
        <div className="scale-100 2xl:scale-[1.8]">
           {icon}
        </div>
      </div>

      {/* NUMBER - 🖥️ 4K Scale: text-3xl to 2xl:text-7xl */}
      <h3 className="text-3xl md:text-5xl 2xl:text-7xl font-black tracking-tighter text-zinc-100 group-hover:text-white font-mono flex items-center transition-colors duration-300">
        <motion.span>{isMounted ? display : 0}</motion.span>
        <span className="text-blue-500 font-sans text-2xl md:text-3xl 2xl:text-5xl ml-1 group-hover:text-cyan-400 transition-colors duration-300">
          {suffix}
        </span>
      </h3>

      {/* LABEL - 🖥️ 4K Scale: 2xl:text-lg */}
      <p className="mt-3 2xl:mt-6 text-[10px] 2xl:text-lg font-black tracking-[3px] 2xl:tracking-[5px] text-zinc-500 group-hover:text-zinc-300 transition-colors duration-300 uppercase">
        {label}
      </p>
    </motion.div>
  );
};

export default function Stats() {
  return (
    // 🖥️ 4K Padding Scale
    <section className="relative py-20 2xl:py-40 bg-[#020617] border-t border-b border-white/5 overflow-hidden selection:bg-blue-600">

      {/* Technical Ambient Overlay */}
      <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] 2xl:w-[1200px] h-[250px] 2xl:h-[500px] bg-blue-500/[0.05] blur-[150px] 2xl:blur-[250px] rounded-full pointer-events-none" />

      {/* 📦 Container: 4K stability */}
      <div className="relative z-10 max-w-6xl 2xl:max-w-[100rem] mx-auto px-6">

        {/* HEADER BLOCK */}
        <div className="text-center mb-16 2xl:mb-24 space-y-2">
          <h2 className="text-4xl md:text-6xl 2xl:text-8xl font-black text-white tracking-tight">
            Some Facts About Us
          </h2>
        </div>

        {/* STATS GRID */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative bg-white/[0.01] border border-white/10 rounded-[2.5rem] 2xl:rounded-[4rem] backdrop-blur-md overflow-hidden p-[1px] shadow-2xl"
        >
          {/* Inner Light Reflection Strip */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/[0.05] to-transparent pointer-events-none" />

          {/* Grid Inner Layer */}
          <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-white/5 bg-black/20">

            <StatItem value={100} label="Active Clients" icon={<Users size={20} />} />
            <StatItem value={700} label="projects Completed" icon={<Rocket size={20} />} />
            <StatItem value={12} label="professional Team" icon={<Zap size={20} />} suffix="+" />
            <StatItem value={7} label="years of Experience" icon={<Globe size={20} />} />

          </div>
        </motion.div>

      </div>
    </section>
  );
}