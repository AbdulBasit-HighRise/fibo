"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import CTA from "@/components/sections/CTA";
export default function PrivacyPolicy() {
  return (
    /* 🎯 Exact structural clone with standard top gap framework matching pricing section */
    <main className="min-h-screen bg-[#111827] text-white overflow-x-hidden selection:bg-blue-600 -mt-24 md:-mt-28 lg:-mt-32">

      {/* 1. HERO SECTION (Privacy Policy - Identical Setup to Pricing Plans) */}
      <section className="relative w-full overflow-hidden">

        {/* Background Image Container with Exact Matching Premium CSS */}
        <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
          <Image
            src="/home-hero.jpg"
            alt="Mesh Grid"
            fill
            priority
            sizes="100vw"
            className="object-cover object-top opacity-35" // Depth consistency locked
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#111827]/40 to-[#111827]" />
        </div>

        {/* Ambient Blur Dot to lock the signature aesthetic */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/[0.05] blur-[120px] pointer-events-none" />

        {/* Full Sized Padded Content Wrapper - Identical to Pricing Page */}
        <div className="relative z-10 w-full mx-auto text-center lg:text-left px-6 pt-32 pb-16 md:pt-20 md:pb-24 lg:max-w-full lg:pt-60 lg:pb-28 lg:pl-40 2xl:mx-0 2xl:max-w-[1500px] 2xl:pt-48 2xl:pb-36 2xl:pl-80 3xl:mx-0 3xl:max-w-[1800px] 3xl:pt-60 3xl:pb-44 3xl:pl-72">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="w-full"
          >
            {/* Badge Container (Privacy Framework Style) */}


            {/* Main Large Typography Block - Dynamic Controlled Laptop Sizing */}
            <h1 className="text-[2rem] md:text-[3.2rem] lg:text-[3.8rem] 2xl:text-[5rem] font-black tracking-tighter leading-[0.8] text-white mb-8 normal-case">
              PRIVACY {" "}
              <span className="inline-block mt-2 uppercase bg-gradient-to-r from-[#FFD36A] via-[#EAB308] to-[#FFD36A] bg-[length:200%_auto] animate-gradient text-transparent bg-clip-text">
                Policy.
              </span>
            </h1>

            <p className="text-white text-sm md:text-base lg:text-[17px] 2xl:text-xl 3xl:text-2xl font-medium leading-relaxed max-w-xl 2xl:max-w-3xl mx-auto lg:mx-0 opacity-80">
              Your privacy is our priority. This Privacy Policy outlines how we collect, use, and protect your information to ensure a transparent and secure experience when working with us.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- ARTICLE CONTENT SECTION (Optimized Width & Perfectly Balanced Layout) --- */}
      <section className="bg-white py-16 md:py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto space-y-12">

          {/* Section 1 */}
          <div>
            <h3 className="text-2xl md:text-3xl font-black text-black mb-4">1. Information We Collect</h3>
            <p className="text-zinc-600 text-base md:text-lg leading-relaxed">
              We collect information that you voluntarily provide to us when you inquire about our services, such as your name, email address, and project requirements. Additionally, we may collect technical data through cookies to enhance your browsing experience and improve our website's functionality.
            </p>
          </div>

          {/* Section 2 */}
          <div>
            <h3 className="text-2xl md:text-3xl font-black text-black mb-4">2. How We Use Your Data</h3>
            <p className="text-zinc-600 text-base md:text-lg leading-relaxed">
              Your data is used solely to respond to your inquiries, deliver our design and development services, and improve our platform's performance. We are committed to your privacy and do not sell, rent, or share your personal information with third parties for marketing purposes.
            </p>
          </div>

          {/* Section 3 */}
          <div>
            <h3 className="text-2xl md:text-3xl font-black text-black mb-4">3. Data Security</h3>
            <p className="text-zinc-600 text-base md:text-lg leading-relaxed">
              We implement industry-standard security measures to protect your data from unauthorized access, alteration, or disclosure. While we strive to maintain the highest level of security, please be aware that no method of transmission over the internet or electronic storage is entirely invulnerable.
            </p>
          </div>

          {/* Section 4 */}
          <div>
            <h3 className="text-2xl md:text-3xl font-black text-black mb-4">4. Your Rights</h3>
            <p className="text-zinc-600 text-base md:text-lg leading-relaxed">
              You have the right to request access to the information we hold about you, ask for necessary corrections, or request that we delete your personal data from our records at any time.
            </p>
          </div>

          {/* Contact Line */}
          <div className="pt-8 border-t border-zinc-200">
            <p className="text-zinc-600 text-base font-medium">
              If you have any questions regarding this policy, please reach out to us at
              <span className="font-bold text-amber-600 ml-2">hello@fiboentertainment.com</span>
            </p>
          </div>

        </div>
      </section>

    </main>
  );
}