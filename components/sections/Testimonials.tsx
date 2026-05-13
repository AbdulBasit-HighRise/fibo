"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

export default function Testimonials() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="relative py-24 2xl:py-48 bg-[#050505] overflow-hidden border-t border-white/5">
      
      {/* 🌌 Background Atmosphere */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] 2xl:w-[1400px] h-[300px] bg-blue-600/[0.08] blur-[120px] 2xl:blur-[200px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl 2xl:max-w-[110rem] mx-auto px-6">
        
        {/* 📋 Header: Bold & High Contrast */}
        <div className="mb-16 2xl:mb-32 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-4">
              <Star size={16} className="text-[#00f2ff] fill-[#00f2ff]" />
              <p className="text-[10px] 2xl:text-xl tracking-[0.4em] text-[#00f2ff] font-black uppercase">
                Social Proof
              </p>
            </div>
            <h2 className="text-5xl md:text-7xl 2xl:text-9xl font-black tracking-tighter text-white leading-[0.9]">
              Verified <br />
              <span className="bg-gradient-to-r from-[#00f2ff] via-[#0070ff] to-[#00f2ff] bg-[length:200%_auto] animate-gradient text-transparent bg-clip-text drop-shadow-[0_0_15px_rgba(0,242,255,0.3)]">
                Reviews.
              </span>
            </h2>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="hidden md:block text-right"
          >
            <Quote size={60} className="text-white/10 ml-auto 2xl:w-32 2xl:h-32" />
            <p className="text-zinc-500 text-sm 2xl:text-2xl max-w-xs 2xl:max-w-md mt-4">
              Trusted by industry leaders across the globe for consistent digital excellence.
            </p>
          </motion.div>
        </div>

        {/* 🚀 WIDGET CONTAINER: Glassmorphism Frame */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative w-full overflow-hidden rounded-[2.5rem] 2xl:rounded-[5rem] bg-white/[0.02] border border-white/10 p-2 2xl:p-4 shadow-2xl backdrop-blur-sm"
        >
          <iframe 
            srcDoc={`
              <html>
                <head>
                  <style>
                    body { 
                      margin: 0; 
                      padding: 0;
                      background: transparent; 
                      overflow: hidden; 
                    }
                    /* Smooth fade-in for the widget */
                    .elfsight-app-1b210a2a-9bbd-48a8-8c8c-5fad7ea4f52b {
                      animation: fadeIn 1s ease-in;
                    }
                    @keyframes fadeIn {
                      from { opacity: 0; }
                      to { opacity: 1; }
                    }
                    ::-webkit-scrollbar { display: none; }
                  </style>
                </head>
                <body>
                  <script src="https://static.elfsight.com/platform/platform.js" data-use-service-core defer></script>
                  <div class="elfsight-app-1b210a2a-9bbd-48a8-8c8c-5fad7ea4f52b"></div>
                </body>
              </html>
            `}
            className="w-full h-[500px] 2xl:h-[800px] border-none scale-[1.01]"
            title="Google Reviews"
            scrolling="no"
          />
          
          {/* Overlay to catch stray clicks or add subtle texture */}
          <div className="absolute inset-0 pointer-events-none border-[1px] border-white/5 rounded-[2.5rem] 2xl:rounded-[5rem]" />
        </motion.div>
      </div>

      <style jsx global>{`
        /* Removing Elfsight branding through global CSS injection */
        .elfsight-app-1b210a2a-9bbd-48a8-8c8c-5fad7ea4f52b a[href*="elfsight.com"] {
          display: none !important;
          opacity: 0 !important;
          visibility: hidden !important;
        }

        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </section>
  );
}