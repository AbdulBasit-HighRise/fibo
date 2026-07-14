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
         <Image
                     src="/home-hero.png"
                     alt="Mesh Grid"
                     fill
                     sizes="100vw"
                     priority
                     className="object-cover object-center"
                   />

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
              PRIVACY {" "} Policy.
            </h1>

            <p className="text-white text-sm md:text-base lg:text-[17px] 2xl:text-xl 3xl:text-2xl font-medium leading-relaxed max-w-xl 2xl:max-w-3xl mx-auto lg:mx-0 opacity-80">
              Your privacy is our priority. This Privacy Policy outlines how we collect, use, and protect your information to ensure a transparent and secure experience when working with us.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto space-y-16">

          {/* Header */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-black text-black tracking-tighter">Privacy Policy</h1>
            <p className="text-zinc-500 font-medium">Last Updated: July 2026</p>
          </div>

          {/* Content Sections */}
          <div className="space-y-12">

            <div>
              <h3 className="text-2xl font-black text-black mb-4">1. Data Collection</h3>
              <p className="text-zinc-600 text-lg leading-relaxed">
                We collect information you provide directly to us when you fill out our contact form, request a proposal, or collaborate on a project. This includes your name, email address, phone number, and project-related details necessary to provide you with tailored digital and production solutions.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-black text-black mb-4">2. Use of Information</h3>
              <p className="text-zinc-600 text-lg leading-relaxed">
                The information we collect is strictly used to communicate regarding your project, provide customer support, and deliver the services you have requested. We do not sell, rent, or trade your personal information with third parties for marketing purposes.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-black text-black mb-4">3. Data Security</h3>
              <p className="text-zinc-600 text-lg leading-relaxed">
                Protecting your digital assets and personal details is our priority. We implement industry-standard security measures to prevent unauthorized access, disclosure, or alteration of the data you share with us during our partnership.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-black text-black mb-4">4. Cookies & Analytics</h3>
              <p className="text-zinc-600 text-lg leading-relaxed">
                We may use browser cookies and analytical tools to understand how our website is used. This data helps us improve your user experience and ensure our portfolio displays correctly across all devices. You can choose to disable cookies through your browser settings if preferred.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-black text-black mb-4">5. Third-Party Links</h3>
              <p className="text-zinc-600 text-lg leading-relaxed">
                Our website may contain links to third-party platforms (like LinkedIn or Upwork). We are not responsible for the privacy practices of those sites and encourage you to review their respective privacy policies before sharing any information.
              </p>
            </div>

            {/* Contact Section */}
            <div className="p-8 md:p-10 bg-[#f4f4f4] rounded-[2rem] border border-black/5">
              <h4 className="text-xl font-black text-black mb-2">Questions about your data?</h4>
              <p className="text-zinc-600 text-lg">
                If you have concerns or requests regarding how your data is handled, feel free to contact us at
                <span className="font-bold text-black block mt-2 hover:text-amber-600 transition-colors">
                  <a href="mailto:hello@fiboentertainment.com">hello@fiboentertainment.com</a>
                </span>
              </p>
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}