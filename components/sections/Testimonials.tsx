"use client";

import Image from "next/image";

export default function JuicerReviews() {
  const reviewsList = [
    { id: 1, src: "/test10.jpg", alt: "Review 1" },
    { id: 2, src: "/test9.jpg", alt: "Review 2" },
    { id: 3, src: "/test8.jpg", alt: "Review 3" },
    { id: 4, src: "/test7.jpg", alt: "Review 4" },
    { id: 5, src: "/test6.jpg", alt: "Review 5" },
    { id: 6, src: "/test5.jpg", alt: "Review 6" },
    { id: 7, src: "/test4.jpg", alt: "Review 7" },
    { id: 8, src: "/test3.jpg", alt: "Review 8" },
    { id: 9, src: "/test2.jpg", alt: "Review 9" },
    { id: 10, src: "/test1.jpg", alt: "Review 10" },
  ];

  const doubledReviews = [...reviewsList, ...reviewsList];

  return (
    <div className="w-full bg-[#030303] py-20 text-center relative z-10 overflow-hidden border-b border-white/[0.03]">

      {/* Premium Tech Mesh Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff01_1px,transparent_1px),linear-gradient(to_bottom,#ffffff01_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none opacity-30" />

      {/* Top Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-blue-500/[0.03] blur-[100px] pointer-events-none rounded-full" />

      <div className="w-full relative z-10">

        {/* Strictly Centered Heading */}
        <div className="mb-18 max-w-4xl mx-auto px-4">
          {/* <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-md mb-4 mx-auto">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-[10px] font-black tracking-[4px] text-blue-400 uppercase">WALL OF FAME</span>
          </div> */}

          <h2 className="text-[2.3rem]  md:text-[2.5rem] lg:text-[2.5rem] 2xl:text-[3.2rem] font-black tracking-tight text-white  bg-gradient-to-r from-white via-zinc-100 to-zinc-400 bg-clip-text text-transparent">
            What Our{" "}
            <span className=" mt-0 mb-2 py-1  text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Clients
            </span> Say
          </h2>
        </div>

        {/* 🔥 Infinite Marquee Slider Wrapper */}
        <div className="relative w-full overflow-hidden flex items-center">
          {/* Edge Fading Gradients */}
          <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-[#030303] to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-[#030303] to-transparent z-20 pointer-events-none" />

          {/* Animating Track (Items vertically centered aligned) */}
          <div className="flex gap-6 w-max animate-marquee hover:[animation-play-state:paused] py-4 items-center">
            {doubledReviews.map((review, index) => (
              <div
                key={`${review.id}-${index}`}
                // Width ko adjust kiya aur aspect-ratio ki jagah padding balanced rakhi hai
                className="w-[350px] md:w-[450px] shrink-0 rounded-2xl border border-white/[0.04] bg-[#09090b]/40 backdrop-blur-md p-1.5 overflow-hidden shadow-[0_25px_50px_-30px_rgba(0,0,0,0.9)] hover:border-blue-500/20 hover:scale-[1.015] transition-all duration-500 group"
              >
                {/* Image standard Next.js wrapper with relative container for auto-height safety */}
                <div className="relative w-full overflow-hidden rounded-xl">
                  <img
                    src={review.src}
                    alt={review.alt}
                    // w-full aur h-auto lagane se image apne size ke hisab se poori show hogi
                    className="w-full h-auto object-contain transition-all duration-500 brightness-[0.95] group-hover:brightness-100"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}