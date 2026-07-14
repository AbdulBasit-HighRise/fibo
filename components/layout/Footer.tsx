"use client";
import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import AuditCTA from "@/components/sections/AuditCTA";
export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socials = [
    { icon: <FaInstagram size={18} />, href: "https://www.instagram.com", label: "Instagram", hoverColor: "hover:text-[#FFD36A] hover:border-[#FFD36A]/40 hover:shadow-[0_0_20px_rgba(255,211,106,0.3)]" },
    { icon: <FaLinkedinIn size={18} />, href: "https://www.linkedin.com/", label: "LinkedIn", hoverColor: "hover:text-[#FFD36A] hover:border-[#FFD36A]/40 hover:shadow-[0_0_20px_rgba(255,211,106,0.3)]" },
    { icon: <FaFacebook size={18} />, href: "https://www.facebook.com/", label: "Facebook", hoverColor: "hover:text-[#FFD36A] hover:border-[#FFD36A]/40 hover:shadow-[0_0_20px_rgba(255,211,106,0.3)]" },
    { icon: <Mail size={18} />, href: "mailto:hello@fiboentertainment.com", label: "Email", hoverColor: "hover:text-[#FFD36A] hover:border-[#FFD36A]/40 hover:shadow-[0_0_20px_rgba(255,211,106,0.3)]" },
  ];

  return (
    <>
    <AuditCTA />
    <footer className="text-white relative bg-[#111827] border-t border-white/5 overflow-hidden">
      <div className="relative z-10 max-w-[1600px] mx-auto px-6 py-16">

        {/* --- MAIN LINKS GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-white/5 pb-16">
          <div className="lg:col-span-1 space-y-6">
            <Link href="/"><Image src="/fibo-footer-logo.png" alt="Logo" width={200} height={50} className="h-10 md:h-14 w-auto" /></Link>
            <p className="text-zinc-400 text-sm leading-relaxed">Are you looking to package your existing web development and VFX services into a more cohesive "all-in-one" digital agency offering?</p>
            <div className="flex items-center gap-3">
              {socials.map((item, i) => (
                <Link key={i} href={item.href} className={`w-10 h-10 rounded-xl  border border-white/10 flex items-center justify-center  transition-all ${item.hoverColor}`}>{item.icon}</Link>
              ))}
            </div>
          </div>

          {/* Other columns (Quick Links, Expertise, Compliance) */}
          <div className="space-y-6">
            <span className="block font-bold text-white tracking-widest uppercase">Quick Links</span>
            <div className=" flex flex-col space-y-3 text-sm text-zinc-400">
              <Link className="hover:text-[#FFD36A]" href="/">Home</Link>
              <Link className="hover:text-[#FFD36A]" href="/about">About</Link>
              <Link className="hover:text-[#FFD36A]" href="/services">Services</Link>
              <Link className="hover:text-[#FFD36A]" href="/our-work">Our Work</Link>
              <Link className="hover:text-[#FFD36A]" href="/contact">Contact</Link>
              <Link className="hover:text-[#FFD36A]" href="/privacy">Privacy Policy</Link>
              <Link className="hover:text-[#FFD36A]" href="/terms-conditions">Terms & Condition</Link>
            </div>
          </div>

          <div className="space-y-6">
            <span className="block font-bold text-white tracking-widest uppercase">Expertise</span>
            <div className="flex flex-col space-y-3 text-sm text-zinc-400">
              <Link href="/services/website-development" className="hover:text-[#FFD36A] transition-colors">Web Development</Link>
              <Link href="/services/app-development" className="hover:text-[#FFD36A] transition-colors">App Development</Link>
              <Link href="/services/3d-video-production" className="hover:text-[#FFD36A] transition-colors">3D Video Production</Link>
              <Link href="/services/vfx" className="hover:text-[#FFD36A] transition-colors">VFX</Link>
              <Link href="/services/graphic-design" className="hover:text-[#FFD36A] transition-colors">Graphic Design</Link>
              <Link href="/services/digital-marketing" className="hover:text-[#FFD36A] transition-colors">Digital Marketing</Link>
              <Link href="/services/blockchain-development" className="hover:text-[#FFD36A] transition-colors">Blockchain</Link>
              <Link href="/services/ai-ml-solutions" className="hover:text-[#FFD36A] transition-colors">AI/ML Solutions</Link>
            </div>
          </div>

          <div className="space-y-6">
            <span className="block font-bold text-white tracking-widest uppercase">Contact Info</span>
            <div className="flex flex-col space-y-3 text-sm  text-zinc-400">
                <div className="grid grid-cols-1 md:grid-cols-1 gap-6 pt-3">
          <a href="mailto:hello@fiboentertainment.com" className="flex items-center gap-4 p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#FFD36A] transition-all">
            <Mail className="text-[#FFD36A]" />
            <div>
              <p className="text-[10px] uppercase font-bold text-zinc-500">Email Us</p>
              <p className="text-sm">hello@fiboentertainment.com</p>
            </div>
          </a>
          <a href="tel:+923394004791" className="flex items-center gap-4 p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#FFD36A] transition-all">
            <Phone className="text-[#FFD36A]" />
            <div>
              <p className="text-[10px] uppercase font-bold text-zinc-500">Call Support</p>
              <p className="text-sm">+92 339 4004791</p>
            </div>
          </a>
          <div className="flex items-center gap-4 p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#FFD36A] transition-all">
            <MapPin className="text-[#FFD36A]" />
            <div>
              <p className="text-[10px] uppercase font-bold text-zinc-500">Visit Us</p>
              <p className="text-sm">Islamabad, F-7 Markaz</p>
            </div>
          </div>
        </div>
            </div>
          </div>
        </div>

        {/* --- 3-CARD INQUIRIES SECTION --- */}
      

        {/* BOTTOM BAR */}
        <div className="pt-12 text-[10px] text-zinc-500 font-bold uppercase tracking-widest text-center">
          © {currentYear} Fibo Entertainment PTV LTD. All Rights Reserved. 
        </div>
      </div>
    </footer>
    </>
  );
}