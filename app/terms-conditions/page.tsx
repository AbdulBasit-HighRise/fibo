"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Scale } from "lucide-react"; // Professional Legal Icon
import CTA from "@/components/sections/CTA";
export default function TermsAndConditions() {


  return (
    /* 🎯 Exact structural clone from Privacy/Pricing logic to maintain zero-gap navbar integration */
    <main className="min-h-screen bg-[#111827] text-white overflow-x-hidden selection:bg-blue-600 -mt-24 md:-mt-28 lg:-mt-32">

      {/* 🎯 ADJUSTED TERMS & CONDITIONS HERO SECTION: Enhanced top padding to force layout down and equalize space */}
      <section className="relative w-full overflow-hidden bg-[#111827]">
        <div className="container-wide">

          {/* Background Image Container with Exact Matching Premium CSS */}
          <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
            <Image
              src="/home-hero.jpg"
              alt="Mesh Grid"
              fill
              priority
              sizes="100vw"
              className="object-cover object-top opacity-35" // Standardized opacity for depth consistency
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#030712]/40 to-[#030712]" />
          </div>

          {/* Ambient Blur Dot to lock the signature aesthetic */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/[0.05] blur-[120px] pointer-events-none" />

          {/* Full Sized Padded Content Wrapper - 🎯 FIXED: Increased padding to pt-44 and md:pt-56 to balance the height */}
          <div className="relative z-10 w-full mx-auto text-center lg:text-left px-6 pt-32 pb-16 md:pt-30 md:pb-24 lg:max-w-full lg:pt-80 lg:pb-28 lg:pl-40 2xl:mx-0 2xl:max-w-[1500px] 2xl:pt-48 2xl:pb-36 2xl:pl-80 3xl:mx-0 3xl:max-w-[1800px] 3xl:pt-60 3xl:pb-44 3xl:pl-72">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="max-w-5xl"
            >
              {/* Badge Container (Centered on mobile, left on desktop) */}


              {/* Main Large Typography Block with Tight Line Height */}
              <h1 className="text-[2rem] md:text-[3.2rem] lg:text-[3.8rem] 2xl:text-[5rem] font-black tracking-tighter leading-[0.8] text-white mb-8 normal-case">
                TERMS & {" "}
                <span className="mt-2 block md:inline-block uppercase bg-gradient-to-r from-[#FFD36A] via-[#EAB308] to-[#FFD36A] bg-[length:200%_auto] animate-gradient text-transparent bg-clip-text">
                  Conditions.
                </span>
              </h1>

              <p className="text-white text-sm md:text-base lg:text-[17px] 2xl:text-xl 3xl:text-2xl font-medium leading-relaxed max-w-xl 2xl:max-w-3xl mx-auto lg:mx-0 opacity-80">
                Welcome to our professional services. By accessing our services, you agree to these terms, which govern our professional relationship, project delivery, and the use of our digital solutions.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto space-y-12">

          <div>
            <h3 className="text-2xl md:text-3xl font-black text-black mb-4">1. Scope of Services</h3>
            <p className="text-zinc-600 text-base md:text-lg leading-relaxed">
              We provide professional web development, VFX, and digital solutions. By engaging with us, you acknowledge that all project timelines and deliverables are based on the initial project scope and are subject to change based on mutual agreement.
            </p>
          </div>

          <div>
            <h3 className="text-2xl md:text-3xl font-black text-black mb-4">2. Intellectual Property</h3>
            <p className="text-zinc-600 text-base md:text-lg leading-relaxed">
              All designs, code, VFX assets, and content created during your project remain the property of the client upon full payment. We reserve the right to showcase completed projects in our professional portfolio for demonstration purposes.
            </p>
          </div>

          <div>
            <h3 className="text-2xl md:text-3xl font-black text-black mb-4">3. Payment Terms</h3>
            <p className="text-zinc-600 text-base md:text-lg leading-relaxed">
              All services require a project deposit as specified in your invoice before work commences. Final delivery of files or project deployment is provided only upon receipt of the final payment.
            </p>
          </div>

          <div>
            <h3 className="text-2xl md:text-3xl font-black text-black mb-4">4. Limitation of Liability</h3>
            <p className="text-zinc-600 text-base md:text-lg leading-relaxed">
              We strive for excellence in all deployments; however, we are not liable for any incidental or consequential damages arising from the use of our digital products or updates related to third-party platforms.
            </p>
          </div>

          <div className="pt-8 border-t border-zinc-200">
            <p className="text-zinc-600 text-base font-medium">
              For any inquiries regarding our Terms of Service, feel free to contact us at
              <span className="font-bold text-amber-600 ml-2">hello@fiboentertainment.com</span>
            </p>
          </div>

        </div>
      </section>

    </main>
  );
}