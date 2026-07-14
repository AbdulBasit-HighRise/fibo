"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

// Sirf 5 main logos



export default function AboutPreview() {
  return (
    <>
      {/* 🎯 ABOUT SECTION */}
      <section className="relative pt-12 md:pt-20 2xl:pt-32 pb-12 md:pb-20 2xl:pb-32 bg-[#FFFFFF] overflow-hidden">

        {/* Background Glow */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[300px] md:w-[600px] h-[200px] bg-blue-600/[0.04] blur-[120px] pointer-events-none" />

        <div className="max-w-7xl 2xl:max-w-[110rem] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">

            {/* LEFT: Image */}
            <div className="relative flex items-center justify-center lg:justify-start order-2 lg:order-1 animate-fade-in">
              <div className="absolute w-[50%] h-[50%] bg-blue-600/[0.05] blur-[80px] rounded-full" />
              <div className="relative z-10 w-full max-w-[320px] md:max-w-[550px] 2xl:max-w-[650px]">
                <Image
                  src="/Home About Section.png"
                  alt="High Rise Digital - Leading Global Agency"
                  width={900}
                  height={700}
                  className="w-full h-auto object-contain drop-shadow-2xl dynamic-float"
                  priority
                />
              </div>
            </div>

            {/* RIGHT: Text Content */}
            <div className="space-y-6 md:space-y-6 order-1 lg:order-2">
              <div className="space-y-6 md:space-y-6 order-1 lg:order-2">
                <div>
                  <h2 className="text-[2rem] sm:text-[2.2rem] md:text-[2.5rem] lg:text-[2.5rem] 2xl:text-[3.2rem] font-black tracking-normal leading-[1.1] md:leading-[1] text-black">
                    Global Media Production &
                    {" "}
                    Advanced Tech Solutions
                  </h2>
                </div>
              </div>

              <div className="space-y-6 md:space-y-8">
                {/* Paragraph 1 */}
                {/* Paragraph 1: Brand Positioning */}
                <p className="text-black text-[16px] md:text-base lg:text-[17px] 2xl:text-xl 3xl:text-2xl font-medium leading-relaxed max-w-xl 2xl:max-w-3xl mx-auto lg:mx-0 opacity-90">
                  Fibo Entertainment is a global media production and tech agency, dedicated to blending cinematic storytelling with cutting-edge digital technology to bring your vision to life.
                </p>

                {/* Paragraph 2: Core Expertise */}
                <p className="text-black text-[16px] md:text-base lg:text-[17px] 2xl:text-xl 3xl:text-2xl font-medium leading-relaxed max-w-xl 2xl:max-w-3xl mx-auto lg:mx-0 opacity-90">
                  Our expert team specializes in high-end VFX, 3D video production, and custom software development, creating immersive experiences that elevate your brand and captivate your audience.
                </p>

                {/* Paragraph 3: Global Reach & Reliability */}
                <p className="text-black text-[16px] md:text-base lg:text-[17px] 2xl:text-xl 3xl:text-2xl font-medium leading-relaxed max-w-xl 2xl:max-w-3xl mx-auto lg:mx-0 opacity-90">
                  We transform complex visions into high-impact digital realities, bridging the gap between cinematic media and robust technology for global brands.                </p>
              </div>

              {/* Buttons Section */}
              <div className="flex flex-wrap items-center gap-6 pt-4">
                <Link href="/contact">
                  <button className="group relative overflow-hidden px-8 2xl:px-10 h-[48px] 2xl:h-[56px] rounded-full bg-[#F3F4F6] text-black font-black text-[11px] 2xl:text-[13px] uppercase tracking-widest transition-all duration-500 flex items-center gap-2 active:scale-95 shadow-lg">
                    {/* Gold Hover Background */}
                    <div className="absolute inset-0 w-0 bg-[#FFD36A] transition-all duration-500 ease-out group-hover:w-full" />

                    <span className="relative z-10 flex items-center gap-2 group-hover:text-black transition-colors duration-500">
                      Get Quote <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>


    </>
  );
}

