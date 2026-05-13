"use client";

import { useState } from "react";
import Image from "next/image"; // Next.js Optimization
import {
  Mail,
  Phone,
  Send,
  ChevronDown,
  MapPin,
} from "lucide-react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoSubject = encodeURIComponent(form.subject || "Proposal Request from High Rise Website");
    const mailtoBody = encodeURIComponent(
      `Full Name: ${form.name}\n` +
      `Email: ${form.email}\n` +
      `Phone: ${form.phone}\n` +
      `Service: ${form.service}\n\n` +
      `Project Details:\n${form.message}`
    );
    window.location.href = `mailto:info@highrisedigital.io?subject=${mailtoSubject}&body=${mailtoBody}`;
    alert("Opening your Email Client... Please click 'Send' in Gmail. 🚀");
  };

  return (
    <main className="bg-[#030303] text-white min-h-screen selection:bg-blue-600  antialiased overflow-x-hidden">

      {/* SECTION 1: HERO - Optimized for 4K */}
{/* SECTION 1: HERO - Fixed for Background Visibility */}
<section className="relative w-full min-h-[60vh] md:min-h-[80vh] flex items-center overflow-hidden">
  
  {/* 1. Background Image - Isay absolute rakha hai taake ye bilkul top se shuru ho */}
  <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
    <Image
      src="/home-hero.jpg"
      alt="Mesh Grid"
      fill
      priority
      sizes="100vw"
      className="object-cover object-top opacity-35" 
    />
    {/* 2. Gradient Overlay - Isay thora deep kiya hai taake text clear ho */}
    <div className="absolute inset-0 bg-gradient-to-b from-[#030303]/80 via-[#030712]/40 to-[#030303]" />
  </div>

  {/* Ambient Glow */}
  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] md:w-[1200px] h-[500px] bg-blue-600/[0.1] blur-[120px] pointer-events-none" />

  {/* 3. Content Container - Padding top ko 'pt-32' rakha hai taake Navbar ke liye jagah banay */}
  <div className="relative z-10 max-w-7xl 2xl:max-w-[1600px] mx-auto px-6 w-full pt-32 md:pt-40">
    <div className="max-w-5xl 2xl:max-w-7xl">
      
      <h1 className="text-6xl sm:text-8xl md:text-[100px] 2xl:text-[130px] font-black tracking-tighter leading-[0.8] text-white mb-8">
        Contact
        <span className="bg-gradient-to-r from-[#00f2ff] via-[#0070ff] to-[#00f2ff] bg-[length:200%_auto] animate-gradient text-transparent bg-clip-text ml-4">
          US.
        </span>
      </h1>

      <p className="text-zinc-400 text-lg md:text-xl lg:text-2xl 2xl:text-3xl max-w-2xl 2xl:max-w-4xl font-medium leading-relaxed opacity-80">
        Connect with our digital experts today for innovative solutions, creative strategies, and personalized support to grow your business successfully online.
      </p>
    </div>
  </div>
</section>

      {/* SECTION 2: FORM & INFO STACK - Scaled for 2K/4K */}
      <section className="relative z-10 max-w-[1400px] 2xl:max-w-[1700px] mx-auto px-6 py-12 pb-24">
        <div className="flex flex-col lg:flex-row gap-8 2xl:gap-12 items-stretch">

          {/* --- LEFT: CLIENT INTAKE FORM --- */}
          <div className="flex-[1.8] bg-gradient-to-br from-blue-600/10 to-transparent border border-white/5 rounded-[2.5rem] p-8 md:p-12 2xl:p-16 shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-6 2xl:space-y-8">

              <div className="grid md:grid-cols-2 gap-6 2xl:gap-8">
                <div className="space-y-2">
                  <label className="text-[11px] 2xl:text-xs font-bold tracking-widest text-zinc-500 ml-1">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text" required placeholder="Enter your full name"
                    className="w-full bg-white/[0.03] border border-white/10 rounded-2xl p-4 2xl:p-6 outline-none focus:border-blue-500 focus:bg-white/[0.06] transition-all"
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[11px] 2xl:text-xs font-bold uppercase tracking-widest text-zinc-500 ml-1">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email" required placeholder="email@company.com"
                    className="w-full bg-white/[0.03] border border-white/10 rounded-2xl p-4 2xl:p-6 outline-none focus:border-blue-500 focus:bg-white/[0.06] transition-all"
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 2xl:gap-8">
                <div className="space-y-2">
                  <label className="text-[11px] 2xl:text-xs font-bold uppercase tracking-widest text-zinc-500 ml-1">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel" required placeholder="+92 300 0000000"
                    className="w-full bg-white/[0.03] border border-white/10 rounded-2xl p-4 2xl:p-6 outline-none focus:border-blue-500 focus:bg-white/[0.06] transition-all"
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  />
                </div>
                <div className="group space-y-2 relative">
                  <label className="text-[11px] 2xl:text-xs font-bold uppercase tracking-[2px] text-zinc-500 ml-1">
                    Service Required <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <select
                      required
                      className="w-full bg-zinc-900/50 border border-white/10 rounded-[1.5rem] p-4 2xl:p-6 pr-12 outline-none appearance-none text-zinc-300 cursor-pointer hover:bg-white/[0.05] transition-all"
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                      defaultValue=""
                    >
                      <option value="" disabled className="bg-[#0a0a0a]">Select a service</option>
                      <option value="Website Development" className="bg-[#0a0a0a]">Website Development</option>
                      <option value="SEO" className="bg-[#0a0a0a]">SEO</option>
                      <option value="Social Media Marketing" className="bg-[#0a0a0a]">Social Media Marketing</option>
                      <option value="Branding" className="bg-[#0a0a0a]">Branding</option>
                      <option value="AI Automation" className="bg-[#0a0a0a]">AI Automation</option>
                    </select>
                    <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-500 transition-all">
                      <ChevronDown size={18} strokeWidth={2.5} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[11px] 2xl:text-xs font-bold uppercase tracking-widest text-zinc-500 ml-1">
                  Subject <span className="text-red-500">*</span>
                </label>
                <input
                  type="text" required placeholder="How can we help you?"
                  className="w-full bg-white/[0.03] border border-white/10 rounded-2xl p-4 2xl:p-6 outline-none focus:border-blue-500 transition-all"
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <label className="text-[11px] 2xl:text-xs font-bold uppercase tracking-widest text-zinc-500 ml-1">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  required placeholder="Tell us more about your project goals..."
                  className="w-full bg-white/[0.03] border border-white/10 rounded-2xl p-4 2xl:p-6 outline-none focus:border-blue-500 min-h-[120px] 2xl:min-h-[200px] resize-none transition-all"
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                />
              </div>

              <button className="group flex items-center justify-center gap-3 px-12 py-5 2xl:px-16 2xl:py-7 bg-blue-600 text-white font-bold text-xs 2xl:text-sm uppercase tracking-[2px] rounded-full hover:bg-blue-500 transition-all w-full sm:w-auto">
                Send Proposal Request
                <Send size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>

          {/* --- RIGHT: MODULAR INFO STACK --- */}
          <div className="flex-1 space-y-4 2xl:space-y-6 flex flex-col">
            <div className="p-8 2xl:p-12 bg-gradient-to-br from-blue-600/10 to-transparent border border-blue-500/20 rounded-[2.5rem] flex-1 shadow-xl">
              <div className="space-y-8">
                <div className="flex gap-4 2xl:gap-6 items-center">
                  <div className="w-12 h-12 2xl:w-16 2xl:h-16 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] 2xl:text-xs uppercase text-zinc-500 font-bold tracking-wider">Email</p>
                    <p className="text-base 2xl:text-xl font-bold text-white">info@highrisedigital.io</p>
                  </div>
                </div>
                <div className="flex gap-4 2xl:gap-6 items-center">
                  <div className="w-12 h-12 2xl:w-16 2xl:h-16 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] 2xl:text-xs uppercase text-zinc-500 font-bold tracking-wider">WhatsApp</p>
                    <p className="text-base 2xl:text-xl font-bold text-white">+92 300 2777587</p>
                  </div>
                </div>
              </div>

              <div className="pt-8 mt-8 border-t border-white/5">
                <p className="text-[10px] 2xl:text-xs uppercase text-zinc-500 font-bold tracking-[2px] mb-6">Connect With Us</p>
                <div className="flex gap-4 2xl:gap-6">
                  {[
                    { icon: <FaLinkedinIn size={20} />, link: "https://www.linkedin.com/company/high-rise-digital-agency/", color: "hover:text-blue-400" },
                    { icon: <FaInstagram size={20} />, link: "https://www.instagram.com/highrisedigitalagency/", color: "hover:text-pink-400" },
                    { icon: <FaFacebook size={20} />, link: "https://www.facebook.com/highrisedigital.official/", color: "hover:text-blue-500" }
                  ].map((soc, i) => (
                    <a key={i} href={soc.link} target="_blank" rel="noopener noreferrer" className={`p-4 2xl:p-6 rounded-xl bg-white/5 border border-white/10 text-zinc-400 ${soc.color} transition-all`}>
                      {soc.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-8 2xl:p-12 bg-gradient-to-br from-blue-600/10 to-transparent border border-blue-500/20 rounded-[2.5rem] flex-1 shadow-xl">
              <h3 className="text-sm 2xl:text-base font-bold tracking-[3px] text-blue-400 mb-8">Our Global Bases</h3>
              <div className="space-y-8">
                {[
                  { city: "Multan, Pakistan", address: "Suite # 19, Block-M, Wapda Town Phase 2, Multan." },
                  { city: "United States", address: "3564 Avalon Park East Blvd, Orlando, FL 32828" },
                  { city: "United Kingdom", address: "Suite 105, Fence House, Macclesfield, Cheshire SK10 1LT" }
                ].map((loc, i) => (
                  <div key={i} className="flex items-start gap-4 group">
                    <div className="mt-1 p-2 rounded-lg bg-white/5 border border-white/10 group-hover:border-blue-500/50 transition-colors">
                      <MapPin size={16} className="text-blue-400" />
                    </div>
                    <div>
                      <p className="text-base 2xl:text-xl font-bold text-white">{loc.city}</p>
                      <p className="text-zinc-500 text-[11px] 2xl:text-sm leading-relaxed">{loc.address}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
