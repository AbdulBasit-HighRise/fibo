"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const clientLogos = [
  { name: "Client 2", src: "/clients/logo2.webp" },
  { name: "Client 3", src: "/clients/logo3.png" },
  { name: "Client 4", src: "/clients/logo4.png" },
  { name: "Client 12", src: "/clients/12.png" },
  { name: "Client 15", src: "/clients/15.png" },
  { name: "Client 16", src: "/clients/16.webp" },
  { name: "Client 19", src: "/clients/19.webp" },
  { name: "Client 20", src: "/clients/20.png" },
  { name: "Client 22", src: "/clients/22.webp" },
  { name: "Client 23", src: "/clients/23.webp" },
  { name: "Client 24", src: "/clients/24.webp" },
  { name: "Client 26", src: "/clients/26.webp" },
  { name: "Client 27", src: "/clients/27.png" },
  { name: "Client 28", src: "/clients/28.png" },
];

export default function ClientTrust() {
  const duplicated = [...clientLogos, ...clientLogos];

  return (
   <section className="relative py-12 md:py-16 bg-[#111827] overflow-hidden border-y border-white/5">
  <div className="max-w-[1600px] mx-auto px-6">
    
    {/* HEADING - Centered */}
    <div className="text-center mb-12">
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-[2rem] sm:text-4xl lg:text-[3rem] font-black tracking-tighter text-white"
      >
        Our Clients
      </motion.h3>
    </div>

    {/* LOGO TRACK - Below Heading */}
    <div className="w-full relative h-20 md:h-24 flex items-center overflow-hidden">
      <motion.div
        className="flex gap-12 md:gap-20 w-max items-center"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {duplicated.map((client, index) => (
          <div
            key={index}
            className="relative flex items-center justify-center min-w-[100px] group/logo select-none"
          >
            <Image
              src={client.src}
              alt={client.name}
              width={180}
              height={60}
              className="h-10 md:h-12 w-auto object-contain transition-all duration-500  group-hover/logo:opacity-100 brightness-110"
            />
          </div>
        ))}
      </motion.div>
    </div>

  </div>
</section>
  );
}