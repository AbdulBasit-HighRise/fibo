"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck, Lock, Eye, FileText, Bell, Globe, UserCheck } from "lucide-react";

export default function PrivacyPolicy() {
  const sections = [
    {
      id: "01",
      title: "Information We Collect",
      icon: <Eye className="text-blue-400" size={24} />,
      content: "We may collect personal information such as your name, email address, phone number, business details, and any information you provide through contact forms or service inquiries. We may also collect non-personal data such as browser type, device information, and website usage statistics to improve user experience."
    },
    {
      id: "02",
      title: "How We Use Your Information",
      icon: <UserCheck className="text-blue-400" size={24} />,
      content: "High Rise Digital uses your information to: provide and improve our digital marketing services, respond to inquiries and customer support requests, send project updates, promotional content, or important notifications, analyze website performance and enhance user experience, and maintain security."
    },
    {
      id: "03",
      title: "Information Sharing",
      icon: <Globe className="text-blue-400" size={24} />,
      content: "We respect your privacy and do not sell, trade, or rent your personal information to third parties. Your information may only be shared with trusted partners or service providers who assist us in delivering our services while maintaining confidentiality."
    },
    {
      id: "04",
      title: "Data Security",
      icon: <Lock className="text-blue-400" size={24} />,
      content: "We implement appropriate security measures to protect your personal information from unauthorized access, misuse, or disclosure. While we strive to use commercially acceptable methods to secure your data, no online transmission is completely secure."
    },
    {
      id: "05",
      title: "Cookies Policy",
      icon: <FileText className="text-blue-400" size={24} />,
      content: "Our website may use cookies to improve functionality, analyze traffic, and personalize your browsing experience. You can choose to disable cookies through your browser settings if preferred."
    }
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
              <ShieldCheck size={14} className="text-blue-400 animate-pulse" />
              <span className="text-[10px] 2xl:text-xs font-black tracking-[4px] text-blue-300 uppercase">Trust & Security</span>
            </div>

            <h1 className="text-6xl md:text-8xl 2xl:text-[130px] font-black tracking-tighter leading-none mb-8">
              Privacy 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                Policy.
              </span>
            </h1>

            <p className="text-zinc-400 text-lg md:text-xl 2xl:text-3xl font-medium leading-relaxed max-w-3xl 2xl:max-w-5xl">
              Welcome to High Rise Digital. Your privacy is important to us, and we are committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, and safeguard your information.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- CONTENT SECTION --- */}
      <section className="py-24 px-6 relative 2xl:py-36">
        <div className="max-w-4xl 2xl:max-w-6xl mx-auto space-y-20 2xl:space-y-32">
          
          {/* Loop through sections */}
          {sections.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="group relative pl-12 md:pl-16 border-l border-white/10 hover:border-blue-500/50 transition-colors duration-500"
            >
              {/* Floating Indicator */}
              <div className="absolute -left-[13px] top-0 w-6 h-6 bg-[#020617] border-2 border-zinc-800 rounded-full group-hover:border-blue-500 transition-colors z-10" />
              
              <div className="flex items-center gap-4 mb-6">
                 <div className="p-3 2xl:p-5 rounded-2xl bg-white/[0.03] border border-white/5 text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all">
                    {item.icon}
                 </div>
                 <h2 className="text-3xl 2xl:text-5xl font-black tracking-tight">{item.title}</h2>
              </div>

              <p className="text-zinc-400 text-lg 2xl:text-2xl leading-relaxed font-light">
                {item.content}
              </p>
            </motion.div>
          ))}

          {/* Grid for smaller points */}
          <div className="grid md:grid-cols-2 gap-8 2xl:gap-12">
            <div className="p-8 2xl:p-12 rounded-[2rem] border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all">
              <h3 className="text-xl 2xl:text-3xl font-bold mb-4 text-white flex items-center gap-2">
                <Bell size={18} className="text-blue-500 2xl:w-8 2xl:h-8" /> Updates
              </h3>
              <p className="text-zinc-400 text-sm 2xl:text-xl leading-relaxed">
                High Rise Digital may update this Privacy Policy periodically to reflect changes in our services or legal requirements. Any updates will be posted on this page.
              </p>
            </div>

            <div className="p-8 2xl:p-12 rounded-[2rem] border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all">
              <h3 className="text-xl 2xl:text-3xl font-bold mb-4 text-white flex items-center gap-2">
                <Globe size={18} className="text-blue-500 2xl:w-8 2xl:h-8" /> Third-Party
              </h3>
              <p className="text-zinc-400 text-sm 2xl:text-xl leading-relaxed">
                Our website may contain links to third-party websites. High Rise Digital is not responsible for the privacy practices or content of external websites.
              </p>
            </div>
          </div>

          {/* Contact CTA */}
          <motion.div 
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             className="mt-20 p-12 2xl:p-20 rounded-[3rem] bg-gradient-to-br from-blue-600/20 to-cyan-600/5 border border-blue-500/20 text-center"
          >
            <h2 className="text-3xl 2xl:text-5xl font-black mb-4">Have Questions?</h2>
            <p className="text-zinc-400 2xl:text-2xl mb-8 max-w-md 2xl:max-w-2xl mx-auto">
              If you have any questions regarding this Privacy Policy or how your information is handled, please contact our security team.
            </p>
            <a href="/contact" className="inline-block px-8 py-4 2xl:px-12 2xl:py-6 bg-white text-black font-black rounded-full hover:bg-blue-500 hover:text-white transition-all 2xl:text-xl">
              Contact High Rise Digital
            </a>
          </motion.div>

        </div>
      </section>
    </main>
  );
}