"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function AuditCTA() {
  return (
    // Section ki padding barha di taake yeh screen ke sath chipka na lage
    <section className="relative w-full bg-white py-12 md:py-20 lg:py-24 px-4 md:px-8 selection:bg-black">
      
      {/* CTA Card Container: 'mx-auto' aur 'max-w' card ko balance karega */}
      <div className="relative z-[3] max-w-7xl mx-auto py-16 md:py-24 rounded-[3rem] overflow-hidden bg-[#FFD36A] border border-black/5 shadow-2xl">
        
        {/* Cinematic Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-black/70 via-black/30 to-transparent z-[1]" />

        {/* Subtle Texture Grain */}
        <div className="absolute inset-0 opacity-[0.05] z-[2] pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>

        {/* Content Area */}
        <div className="relative z-[3] text-center px-6 mx-auto">
          <h3 className="text-[2rem] sm:text-[3.5rem] lg:text-[4rem] font-black text-white  leading-[1.2] mb-6">
            Ready to Start Your Project?
          </h3>
          
          <p className="text-white/90 text-base md:text-xl 2xl:text-2xl font-medium leading-relaxed mb-10 max-w-3xl mx-auto px-2">
            Let's bring your vision to life. Whether it's a web application or cinematic VFX, our team is here to build it with you. Have questions? We're just a message away.
          </p>
          
          <Link href="/contact" className="inline-block w-full sm:w-auto">
            <button className="group relative w-full sm:w-auto px-10 sm:px-12 h-[56px] 2xl:h-[64px] rounded-full bg-white text-black font-black text-[12px] 2xl:text-[14px] tracking-[2px] flex items-center justify-center gap-2 transition-all duration-500 active:scale-95 shadow-xl overflow-hidden uppercase whitespace-nowrap">
              
              {/* Gold Hover Background */}
              <div className="absolute inset-0 w-0 bg-[#FFD36A] transition-all duration-500 ease-out group-hover:w-full" />

              {/* Button Text */}
              <span className="relative z-10 group-hover:text-black transition-colors duration-500">
                Get in Touch
              </span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}