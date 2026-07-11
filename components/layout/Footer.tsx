"use client";
import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socials = [
    { icon: <FaInstagram size={18} />, href: "https://www.instagram.com/highrisedigitalagency/", label: "Instagram", hoverColor: "hover:text-[#E1306C] hover:border-[#E1306C]/40 hover:shadow-[0_0_20px_rgba(225,48,108,0.3)]" },
    { icon: <FaLinkedinIn size={18} />, href: "https://www.linkedin.com/company/high-rise-digital-agency/", label: "LinkedIn", hoverColor: "hover:text-[#0A66C2] hover:border-[#0A66C2]/40 hover:shadow-[0_0_20px_rgba(10,102,194,0.3)]" },
    { icon: <FaFacebook size={18} />, href: "https://www.facebook.com/highrisedigital.official/", label: "Facebook", hoverColor: "hover:text-[#1877F2] hover:border-[#1877F2]/40 hover:shadow-[0_0_20px_rgba(24,119,242,0.3)]" },
    { icon: <Mail size={18} />, href: "mailto:hello@fiboentertainment.com", label: "Email", hoverColor: "hover:text-blue-400 hover:border-blue-500/40 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]" },
  ];

  return (
    <footer className="text-white relative bg-[#111827] border-t border-white/5 overflow-hidden">
      <div className="relative z-10 max-w-[1600px] mx-auto px-6 py-16">

        {/* --- MAIN LINKS GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-white/5 pb-16">
          <div className="lg:col-span-1 space-y-6">
            <Link href="/"><Image src="/fibo-footer-logo.png" alt="Logo" width={200} height={50} className="h-10 w-auto" /></Link>
            <p className="text-zinc-400 text-sm leading-relaxed">Let’s discuss your goals and create a powerful strategy to boost your business growth online.</p>
            <div className="flex items-center gap-3">
              {socials.map((item, i) => (
                <Link key={i} href={item.href} className={`w-10 h-10 rounded-xl  border border-white/10 flex items-center justify-center  transition-all ${item.hoverColor}`}>{item.icon}</Link>
              ))}
            </div>
          </div>

          {/* Other columns (Quick Links, Expertise, Compliance) */}
          <div className="space-y-6">
             <span className="block font-bold text-white tracking-widest uppercase">Quick Links</span>
             <div className="flex flex-col space-y-3 text-sm text-zinc-400">
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/services">Services</Link>
             </div>
          </div>
          
          <div className="space-y-6">
             <span className="block font-bold text-white tracking-widest uppercase">Expertise</span>
             <div className="flex flex-col space-y-3 text-sm text-zinc-400">
                <Link href="/services/website-development">Web Development</Link>
                <Link href="/services/seo">SEO</Link>
                <Link href="/services/ai-automation">AI Automation</Link>
             </div>
          </div>

          <div className="space-y-6">
             <span className="block font-bold text-white tracking-widest uppercase">Compliance</span>
             <div className="flex flex-col space-y-3 text-sm text-zinc-400">
                <Link href="/privacy">Privacy Policy</Link>
                <Link href="/terms">Terms</Link>
                <Link href="/faq">FAQs</Link>
             </div>
          </div>
        </div>

        {/* --- 3-CARD INQUIRIES SECTION --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12">
          <a href="mailto:hello@fiboentertainment.com" className="flex items-center gap-4 p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-blue-500/50 transition-all">
            <Mail className="text-blue-400" />
            <div>
              <p className="text-[10px] uppercase font-bold text-zinc-500">Email Us</p>
              <p className="text-sm">hello@fiboentertainment.com</p>
            </div>
          </a>
          <a href="tel:+923394004791" className="flex items-center gap-4 p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-cyan-500/50 transition-all">
            <Phone className="text-cyan-400" />
            <div>
              <p className="text-[10px] uppercase font-bold text-zinc-500">Call Support</p>
              <p className="text-sm">+92 339 4004791</p>
            </div>
          </a>
          <div className="flex items-center gap-4 p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-emerald-500/50 transition-all">
            <MapPin className="text-emerald-400" />
            <div>
              <p className="text-[10px] uppercase font-bold text-zinc-500">Visit Us</p>
              <p className="text-sm">Islamabad, F-7 Markaz</p>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="pt-12 text-[10px] text-zinc-500 font-bold uppercase tracking-widest text-center">
          © {currentYear} Fibo Entertainment LLC. Built for growth • Designed for dominance
        </div>
      </div>
    </footer>
  );
}