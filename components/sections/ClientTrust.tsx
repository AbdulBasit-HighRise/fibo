"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const clientLogos = [
  { name: "Client 2", src: "/clients/logo2.webp" },
  { name: "Client 3", src: "/clients/logo3.png" },
  { name: "Client 4", src: "/clients/logo4.png" },
  { name: "Client 5", src: "/clients/logo5.webp" },
  { name: "Client 6", src: "/clients/logo6.webp" },
  { name: "Client 7", src: "/clients/logo7.webp" },
  { name: "Client 9", src: "/clients/logo9.webp" },
  { name: "Client 11", src: "/clients/logo11.webp" },
];

export default function ClientTrust() {
  // Duplicating logos for a truly seamless 4K loop
  const duplicated = [...clientLogos, ...clientLogos, ...clientLogos, ...clientLogos];

  return (
    <section className="relative py-16 2xl:py-32 bg-[#020617] overflow-hidden border-y border-white/5 selection:bg-blue-600/30">

      {/* 🌌 High-End Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] 2xl:w-[1800px] h-[300px] bg-blue-600/[0.08] blur-[150px] 2xl:blur-[250px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-[1800px] 2xl:max-w-[2400px] mx-auto px-6 2xl:px-20">
        <div className="flex flex-col lg:flex-row items-center gap-16 2xl:gap-32">

          {/* LEFT SIDE: Minimalist Branding */}
          <div className="lg:w-1/4 space-y-3 2xl:space-y-6 text-center lg:text-left shrink-0">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-[10px] 2xl:text-xl tracking-[0.5em] text-blue-500 font-black uppercase"
            >
              Trusted By
            </motion.p>
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl 2xl:text-8xl font-black text-white tracking-tighter leading-none"
            >
              The <br className="hidden 2xl:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500">
                Partners.
              </span>
            </motion.h3>
          </div>

          {/* RIGHT SIDE: 4K Marquee Track */}
          <div className="lg:w-3/4 relative h-32 2xl:h-64 flex items-center overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_15%,white_85%,transparent)]">
            <motion.div
              className="flex gap-24 2xl:gap-48 w-max items-center"
              animate={{ x: ["0%", "-25%"] }}
              transition={{
                duration: 40,
                repeat: Infinity,
                ease: "linear",
              }}
              whileHover={{ transition: { duration: 80 } }} // Slow down on hover for detail
            >
              {duplicated.map((client, index) => (
                <div
                  key={index}
                  className="relative flex items-center justify-center min-w-[180px] 2xl:min-w-[350px] group/logo select-none"
                >
                  <Image
                    src={client.src}
                    alt={client.name}
                    width={180} // 4K ke liye ye kafi hai, 300 zyada tha
                    height={70}
                    sizes="(max-width: 768px) 100px, 180px" // Mobile par choti image load hogi
                    className="h-12 md:h-16 2xl:h-32 w-auto object-contain transition-all duration-700 filter grayscale brightness-[0.8] contrast-[1.2] group-hover/logo:grayscale-0 group-hover/logo:brightness-110 group-hover/logo:scale-110"
                  />

                  {/* ✨ Neon Reflection Effect */}
                  <div className="absolute -bottom-10 2xl:-bottom-20 left-1/2 -translate-x-1/2 w-[80%] h-6 2xl:h-12 bg-blue-500/20 blur-xl 2xl:blur-2xl opacity-0 group-hover/logo:opacity-100 transition-all duration-700" />
                </div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}