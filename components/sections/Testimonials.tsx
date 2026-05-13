"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Testimonials() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="relative py-16 md:py-20 bg-[#050505] overflow-hidden border-t border-white/5">
      
      {/* 🌌 Background Atmosphere - Subtle Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] 2xl:w-[1200px] h-[250px] bg-blue-600/[0.06] blur-[100px] 2xl:blur-[180px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-6xl 2xl:max-w-[100rem] mx-auto px-6">
        
        {/* 📋 Header: Centered & Sharp */}
        <div className="mb-12 md:mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl 2xl:text-8xl font-black tracking-tighter text-white leading-none">
              Verified {""}
              <span className="bg-gradient-to-r from-[#00f2ff] via-[#0070ff] to-[#00f2ff] bg-[length:200%_auto] animate-gradient text-transparent bg-clip-text drop-shadow-[0_0_10px_rgba(0,242,255,0.2)]">
                Reviews.
              </span>
            </h2>
          </motion.div>
        </div>

        {/* 🚀 WIDGET CONTAINER: Slim Frame */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative w-full overflow-hidden rounded-[1.5rem] md:rounded-[2.5rem] 2xl:rounded-[4rem] bg-white/[0.01] border border-white/10 p-1 md:p-2 shadow-2xl backdrop-blur-sm"
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
                    .elfsight-app-1b210a2a-9bbd-48a8-8c8c-5fad7ea4f52b {
                      animation: fadeIn 0.8s ease-in;
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
            // Height optimized for laptop (400px) and 4K (650px)
            className="w-full h-[400px] md:h-[450px] 2xl:h-[650px] border-none scale-[1.01]"
            title="Google Reviews"
            scrolling="no"
          />
          
          {/* Subtle Border Overlay */}
          <div className="absolute inset-0 pointer-events-none border-[1px] border-white/5 rounded-[1.5rem] md:rounded-[2.5rem] 2xl:rounded-[4rem]" />
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