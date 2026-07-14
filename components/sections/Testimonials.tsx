"use client";

import React, { useRef, useEffect, useState } from "react";
import { Star } from "lucide-react";

export default function JuicerReviews() {
  // 📝 Testimonial Data Array
  const testimonials = [
    { id: 1, name: "John Doe", role: "CEO, Tech Corp", text: "Exceptional quality and professional service. Their 3D production team is top-tier!" },
    { id: 2, name: "Sarah Smith", role: "Marketing Head", text: "The VFX work delivered was beyond our expectations. Truly a creative powerhouse." },
    { id: 3, name: "Mike Ross", role: "Founder, Startup", text: "Next-level web solutions. They understood our vision and brought it to life perfectly." },
    { id: 4, name: "Emma Wilson", role: "Art Director", text: "Their graphic design team has a keen eye for detail. Highly recommended agency." },
    { id: 5, name: "David Chen", role: "CTO, Fintech", text: "Professional, timely, and innovative. The best Blockchain developers I've worked with." },
  ];

  const doubledReviews = [...testimonials, ...testimonials];

  // 🛠️ Slider logic (Existing)
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isResetting, setIsResetting] = useState(false);
  const startX = useRef(0);
  const currentX = useRef(0);
  const activeX = useRef(0);
  const isDown = useRef(false);

  // Animation Loop
  useEffect(() => {
    let animationFrameId: number;
    const updateAnimation = () => {
      if (!isDown.current && scrollContainerRef.current) {
        const halfWidth = scrollContainerRef.current.scrollWidth / 2;
        activeX.current += 0.5; 
        if (activeX.current >= 0) activeX.current = -halfWidth;
        currentX.current = activeX.current;
        scrollContainerRef.current.style.transform = `translateX(${currentX.current}px)`;
      }
      animationFrameId = requestAnimationFrame(updateAnimation);
    };
    animationFrameId = requestAnimationFrame(updateAnimation);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div className="w-full bg-[#f4f4f4] py-20 overflow-hidden">
      <div className="text-center mb-16">
        <h3 className="text-[2rem] md:text-[2.5rem] font-black text-black uppercase tracking-tighter">
          Client Success Stories
        </h3>
      </div>

      <div className="relative w-screen left-1/2 right-1/2 -ml-[50vw] mr-[50vw] overflow-hidden flex select-none cursor-grab">
        <div ref={scrollContainerRef} className="flex gap-6 w-max items-center pl-6">
          {doubledReviews.map((t, index) => (
            <div
              key={`${t.id}-${index}`}
              className="w-[320px] md:w-[400px] h-[220px] bg-white rounded-3xl p-8 border border-zinc-200 shadow-xl flex flex-col justify-between hover:border-[#FFD36A] transition-all duration-500"
            >
              <div>
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} className="fill-[#FFD36A] text-[#FFD36A]" />)}
                </div>
                <p className="text-black font-medium leading-relaxed text-sm italic">"{t.text}"</p>
              </div>
              <div className="mt-4">
                <h4 className="font-black text-black uppercase text-sm">{t.name}</h4>
                <p className="text-zinc-500 text-[11px] font-bold uppercase tracking-widest">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}