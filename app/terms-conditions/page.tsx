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
                     {/* Image */}
                     <Image
                       src="/home-hero.png"
                       alt="Mesh Grid"
                       fill
                       sizes="100vw"
                       priority
                       className="object-cover object-center"
                     />
         
                     {/* Dark Overlay - Yahan shade control karo */}
                     {/* bg-black/60 ka matlab hai 60% opacity wala black shade */}
                     <div className="absolute inset-0 bg-black/60" />
         
                     {/* Agar tum gradient chahte ho taake neeche se upar dark ho, toh ye use karo: */}
                     {/* <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70" /> */}
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
                TERMS & {" "}Conditions.
              </h1>

              <p className="text-white text-sm md:text-base lg:text-[17px] 2xl:text-xl 3xl:text-2xl font-medium leading-relaxed max-w-xl 2xl:max-w-3xl mx-auto lg:mx-0 opacity-80">
                Welcome to our professional services. By accessing our services, you agree to these terms, which govern our professional relationship, project delivery, and the use of our digital solutions.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

    <section className="bg-white  py-20 md:py-32 px-6 md:px-12 lg:px-24">
  <div className="max-w-6xl mx-auto space-y-16">
    
    {/* Header */}
    <div className="space-y-4">
      <h1 className="text-4xl md:text-5xl font-black text-black tracking-tighter">Terms of Service</h1>
      <p className="text-zinc-500 font-medium">Last Updated: July 2026</p>
    </div>

    {/* Sections */}
    <div className="space-y-12">
      
      <div>
        <h3 className="text-2xl font-black text-black mb-4">1. Scope of Services</h3>
        <p className="text-zinc-600 text-lg leading-relaxed">
          We specialize in high-end web development, immersive VFX, and digital production. By engaging our services, you agree that the project scope is defined during our initial consultation. Any additional features, revisions, or technical requirements beyond the agreed-upon scope may result in adjustments to timelines and project fees.
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-black text-black mb-4">2. Client Obligations</h3>
        <p className="text-zinc-600 text-lg leading-relaxed">
          To ensure timely delivery, the client agrees to provide necessary assets (images, branding, content, etc.) and feedback in a prompt manner. Delays in providing required materials may impact the final project launch date.
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-black text-black mb-4">3. Intellectual Property & Portfolio</h3>
        <p className="text-zinc-600 text-lg leading-relaxed">
          Upon full receipt of payment, all final deliverables created specifically for your project become your intellectual property. However, we retain the right to utilize the project assets—including screenshots, videos, and live links—within our professional portfolio, case studies, and marketing channels to showcase our expertise.
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-black text-black mb-4">4. Payment Terms</h3>
        <p className="text-zinc-600 text-lg leading-relaxed">
          A non-refundable deposit (as defined in your invoice) is required to secure your project slot and initiate development. Final project handovers, source files, or deployment will only be released once the balance is settled in full.
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-black text-black mb-4">5. Revisions & Support</h3>
        <p className="text-zinc-600 text-lg leading-relaxed">
          Every project includes a defined set of revision rounds to ensure your vision is realized. Post-launch support or further development beyond the initial contract period will be subject to a separate maintenance agreement or hourly rate.
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-black text-black mb-4">6. Limitation of Liability</h3>
        <p className="text-zinc-600 text-lg leading-relaxed">
          While we maintain the highest standards of code and production quality, we are not liable for any downtime, data loss, or issues related to third-party hosting, CMS updates, or external plugin failures that occur after the project handover.
        </p>
      </div>

      {/* Contact Section */}
      <div className="p-8 md:p-10 bg-[#f4f4f4] rounded-[2rem] border border-black/5">
        <h4 className="text-xl font-black text-black mb-2">Have questions about these terms?</h4>
        <p className="text-zinc-600 text-lg">
          We believe in transparent communication. If anything is unclear, please reach out directly at 
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