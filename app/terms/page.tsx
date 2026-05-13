"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Scale, ShieldAlert, Zap } from "lucide-react";

export default function TermsAndConditions() {
  const terms = [
    { title: "1. Acceptance of Terms", desc: "By using our website or services, you confirm that you have read, understood, and agreed to these Terms and Conditions. If you do not agree, you should not use our services." },
    { title: "2. Services", desc: "High Rise Digital provides digital marketing, web development, branding, SEO, and related digital services. We reserve the right to modify, suspend, or discontinue any service at any time without prior notice." },
    { title: "3. Client Responsibilities", desc: "Clients agree to provide accurate information, necessary materials, and timely feedback required for project completion. Delays caused by missing client input may affect delivery timelines." },
    { title: "4. Payments", desc: "All payments must be made according to the agreed proposal or invoice. Projects may be paused or delayed if payments are not received on time. All fees are non-refundable unless stated otherwise." },
    { title: "5. Intellectual Property", desc: "All content, designs, and materials created by High Rise Digital remain our property until full payment is received. After payment, ownership rights are transferred to the client." },
    { title: "6. Revisions and Changes", desc: "We offer revisions as per the project agreement. Additional changes beyond the agreed scope may incur extra charges." },
    { title: "7. Limitation of Liability", desc: "High Rise Digital is not responsible for any indirect, incidental, or consequential damages. We do not guarantee specific results such as rankings, sales, or revenue." },
    { title: "8. Third-Party Services", desc: "We may use or recommend third-party tools. We are not responsible for the performance, policies, or actions of these third-party providers." },
    { title: "9. Termination", desc: "We reserve the right to terminate or suspend services if a client violates these Terms or engages in unlawful or abusive behavior." },
    { title: "10. Confidentiality", desc: "Both parties agree to maintain confidentiality of any sensitive business information shared during the project." },
  ];

  return (
    <main className="min-h-screen bg-[#020617] text-white overflow-x-hidden pb-20 selection:bg-blue-600">
      
      {/* --- HERO SECTION - 4K Optimized --- */}
      <section className="relative w-full pt-40 pb-24 px-6 border-b border-white/5 2xl:pt-56 2xl:pb-36">
        <div className="absolute inset-0 w-full h-full pointer-events-none">
          <Image
            src="/home-hero.jpg"
            alt="Mesh Grid"
            fill
            priority
            sizes="100vw"
            className="object-cover object-top opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#020617]/60 to-[#020617]" />
        </div>

        <div className="relative z-10 max-w-7xl 2xl:max-w-[1600px] mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl 2xl:max-w-6xl"
          >
            <div className="flex items-center gap-2.5 mb-8 w-fit px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-md">
              <Scale size={14} className="text-blue-400" />
              <span className="text-[10px] 2xl:text-xs font-black tracking-[4px] text-blue-300 uppercase">Legal Framework</span>
            </div>

            <h1 className="text-6xl md:text-8xl 2xl:text-[130px] font-black tracking-tighter leading-none mb-8">
              Terms & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                Conditions.
              </span>
            </h1>

            <p className="text-zinc-400 text-lg md:text-xl 2xl:text-3xl font-medium leading-relaxed max-w-2xl 2xl:max-w-4xl">
              Welcome to High Rise Digital. By accessing or using our website and services, you agree to be bound by these Terms and Conditions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- TERMS CONTENT GRID --- */}
      <section className="py-24 px-6 2xl:py-36">
        <div className="max-w-5xl 2xl:max-w-7xl mx-auto">
          
          <div className="grid md:grid-cols-2 gap-6 2xl:gap-10">
            {terms.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group p-8 2xl:p-12 rounded-[2.5rem] border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] hover:border-blue-500/30 transition-all duration-500"
              >
                <div className="flex items-start gap-4 2xl:gap-6">
                  <div className="mt-1.5">
                    <div className="w-2 h-2 2xl:w-3 2xl:h-3 rounded-full bg-blue-500 group-hover:scale-150 transition-transform shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
                  </div>
                  <div>
                    <h3 className="text-xl 2xl:text-3xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-zinc-500 text-sm 2xl:text-xl leading-relaxed font-light">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* --- FINAL NOTICE --- */}
          <motion.div 
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="mt-20 2xl:mt-32 p-10 2xl:p-20 rounded-[3rem] border border-dashed border-white/10 text-center bg-white/[0.01]"
          >
            <div className="inline-flex p-4 2xl:p-6 rounded-2xl bg-white/5 mb-6 2xl:mb-10">
               <ShieldAlert className="text-blue-500 2xl:w-12 2xl:h-12" size={32} />
            </div>
            <h2 className="text-2xl 2xl:text-5xl font-bold mb-4 2xl:mb-8">Changes to Terms</h2>
            <p className="text-zinc-500 2xl:text-2xl max-w-2xl 2xl:max-w-4xl mx-auto mb-8 2xl:mb-12 leading-relaxed">
              High Rise Digital may update these Terms and Conditions at any time. Continued use of our services indicates acceptance of the updated terms. If you have any questions, please contact us through our official channels.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
               <span className="px-6 py-2 2xl:px-10 2xl:py-4 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] 2xl:text-sm font-black uppercase tracking-widest">
                 Last Updated: May 2026
               </span>
            </div>
          </motion.div>

        </div>
      </section>
    </main>
  );
}