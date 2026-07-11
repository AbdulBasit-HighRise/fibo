"use client";

import React, { useRef, useEffect, useState } from "react";
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

  // 🛠️ Track horizontal drag and positioning values manually
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isResetting, setIsResetting] = useState(false);
  const startX = useRef(0);
  const currentX = useRef(0);
  const activeX = useRef(0);
  const isDown = useRef(false);

  // Initialize matching width calculations 
  useEffect(() => {
    if (scrollContainerRef.current) {
      const halfWidth = scrollContainerRef.current.scrollWidth / 2;
      currentX.current = -halfWidth;
      activeX.current = -halfWidth;
      scrollContainerRef.current.style.transform = `translateX(${currentX.current}px)`;
    }
  }, []);

  // Continuous animation frame loop to maintain precise position on resume
  useEffect(() => {
    let animationFrameId: number;

    const updateAnimation = () => {
      if (!isDown.current && scrollContainerRef.current && !isResetting) {
        const halfWidth = scrollContainerRef.current.scrollWidth / 2;
        
        // Left-to-Right layout speed parameters (0.6 pixel steps per frame)
        activeX.current += 0.6; 

        // Boundary reset window check without jumping back to 0 completely
        if (activeX.current >= 0) {
          activeX.current = -halfWidth;
        }

        currentX.current = activeX.current;
        scrollContainerRef.current.style.transform = `translateX(${currentX.current}px)`;
      }
      animationFrameId = requestAnimationFrame(updateAnimation);
    };

    animationFrameId = requestAnimationFrame(updateAnimation);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isResetting]);

  // 🛠️ MOUSE DOWN / DRAG TOUCH HANDLERS
  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    isDown.current = true;
    const pageX = "touches" in e ? e.touches[0].pageX : e.pageX;
    startX.current = pageX - currentX.current;
  };

  const handleDragMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDown.current || !scrollContainerRef.current) return;
    e.preventDefault();
    const pageX = "touches" in e ? e.touches[0].pageX : e.pageX;
    let newX = pageX - startX.current;

    const halfWidth = scrollContainerRef.current.scrollWidth / 2;

    // Infinite loop checks while user is manually dragging elements
    if (newX > 0) {
      newX = -halfWidth;
      startX.current = pageX - newX;
    } else if (newX < -halfWidth * 1.5) {
      newX = -halfWidth * 0.5;
      startX.current = pageX - newX;
    }

    currentX.current = newX;
    activeX.current = newX;
    scrollContainerRef.current.style.transform = `translateX(${newX}px)`;
  };

  const handleDragEnd = () => {
    isDown.current = false;
  };

  return (
    <div className="w-full bg-[#E5E5E5] py-12 text-center relative z-10 overflow-hidden border-b border-white/[0.03]">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff01_1px,transparent_1px),linear-gradient(to_bottom,#ffffff01_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none opacity-30" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-blue-500/[0.04] blur-[120px] pointer-events-none rounded-full" />

      <div className="w-full relative z-10 px-4 md:px-12 max-w-full mx-auto">
        
        {/* Top Header Grid Section */}
        <div className="mb-8 flex flex-col md:flex-row items-center justify-between text-left gap-6 border-b border-white/[0.03] pb-6 max-w-[1800px] mx-auto">
         <div className="mb-8 flex flex-col md:flex-row items-center justify-between text-left gap-6 border-b border-white/[0.03] pb-6 max-w-[1800px] mx-auto">
  <div className="max-w-2xl text-center md:text-left">
    <h3 className="text-[2rem] md:text-[2.6rem] lg:text-[3rem] 2xl:text-[3.5rem] font-black tracking-tight text-black leading-none">
      What Our <span className="text-black">Clients</span> Say
    </h3>
  </div>
</div>

       
        </div>

        {/* 🎯 ULTRA PERFORMANCE REUMEABLE SLIDER WRAPPER */}
        <div 
          className="relative w-screen left-1/2 right-1/2 -ml-[50vw] +mr-[50vw] overflow-hidden flex items-center select-none cursor-grab active:cursor-grabbing px-6 group/marquee"
          onMouseDown={handleDragStart}
          onMouseMove={handleDragMove}
          onMouseUp={handleDragEnd}
          onMouseLeave={handleDragEnd}
          onTouchStart={handleDragStart}
          onTouchMove={handleDragMove}
          onTouchEnd={handleDragEnd}
          onMouseEnter={() => { isDown.current = true; }} // Instantly freezes position on mouse enter
        >
          <div
            ref={scrollContainerRef}
            className="flex gap-4 md:gap-6 w-max py-4 items-center pl-6 will-change-transform"
            onMouseEnter={() => { isDown.current = true; }}
            onMouseLeave={() => { isDown.current = false; }}
          >
            {doubledReviews.map((review, index) => (
              <div
                key={`${review.id}-${index}`}
                className="w-[90vw] sm:w-[50vw] md:w-[42vw] lg:w-[38vw] xl:w-[30vw] 2xl:w-[26vw] 3xl:w-[22vw] shrink-0 rounded-2xl border border-white/[0.05] bg-[#09090b]/60 backdrop-blur-md p-0 overflow-hidden transition-all duration-500 pointer-events-none"
              >
                <div className="relative w-full overflow-hidden rounded-xl bg-zinc-950/20">
                  <img
                    src={review.src}
                    alt={review.alt}
                    className="w-full h-auto object-contain"
                    draggable="false"
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