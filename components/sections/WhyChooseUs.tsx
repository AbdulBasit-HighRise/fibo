"use client";

import { motion } from "framer-motion";
import { Users, Star, ShieldCheck, Target, TrendingUp, Database } from "lucide-react";

const features = [
  { icon: <Users />, title: "Highly Professional Team", desc: "Experts across design, web, apps, and AI/ML." },
  { icon: <Star />, title: "Customer Focused", desc: "Clear communication and fast iteration." },
  { icon: <ShieldCheck />, title: "Expert Engineering", desc: "EXF management code and strong engineering practice." },
  { icon: <Target />, title: "Tailored Solutions", desc: "Solutions aligned to your goals and constraints." },
  { icon: <TrendingUp />, title: "Proven Track Record", desc: "Launched, scaled, and maintained products." },
  { icon: <Database />, title: "Modern Stack", desc: "Scalable architecture with the latest industry standards." },
];

export default function WhyChooseUs() {
  return (
    <section className="pt-12 md:pt-20 2xl:pt-32 pb-12 md:pb-20 2xl:pb-32 bg-[#222630]">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading Section - Forced High Contrast */}
        <div className="text-center mb-20">
          <h2 className="text-[2rem] sm:text-[2.2rem] md:text-[2.5rem] lg:text-[2.5rem] 2xl:text-[3.2rem] font-medium tracking-tighter leading-[1.1] md:leading-[1.5] text-white">
            Why Choose Us
          </h2>

          <p className="text-white text-[16px] md:text-base lg:text-[17px] 2xl:text-xl 3xl:text-2xl font-medium leading-relaxed max-w-xl 2xl:max-w-3xl mx-auto text-center">
            From discovery to deployment, we partner closely with you to deliver outcomes not just deliverables.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-12">
          {features.map((item, index) => (
            <motion.div
              key={index}
              className="flex items-start gap-6 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 rounded-full bg-zinc-100 flex items-center justify-center text-black shrink-0 group-hover:bg-[#FFD36A] group-hover:text-black transition-all duration-300">
                {item.icon}
              </div>

              <div className="pt-2">
                <h4 className="text-xl font-black !text-white">{item.title}</h4>
                <p className="!text-white text-base mt-3 font-normal leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}