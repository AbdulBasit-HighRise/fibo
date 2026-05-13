"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Phone, ArrowRight, Globe } from "lucide-react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const offices = [
    { region: "Primary Hub", city: "Pakistan", address: "Suite # 19, Block-M, Wapda Town Phase 2, Multan, Pakistan." },
    { region: "Tech Operations", city: "United States", address: "3564 AVALON PARK EAST BLVD, STE 1 PMB 2002, ORLANDO, FL 32828" },
    { region: "Development Core", city: "United Kingdom", address: "Suite 105, Fence House Fence Avenue Macclesfield Cheshire SK10 1LT United Kingdom" }
  ];

  const socials = [
    { icon: <FaInstagram size={18} />, href: "https://www.instagram.com/highrisedigitalagency/", label: "Instagram", hoverColor: "hover:text-[#E1306C] hover:border-[#E1306C]/40 hover:shadow-[0_0_20px_rgba(225,48,108,0.3)]" },
    { icon: <FaLinkedinIn size={18} />, href: "https://www.linkedin.com/company/high-rise-digital-agency/", label: "LinkedIn", hoverColor: "hover:text-[#0A66C2] hover:border-[#0A66C2]/40 hover:shadow-[0_0_20px_rgba(10,102,194,0.3)]" },
    { icon: <FaFacebook size={18} />, href: "https://www.facebook.com/highrisedigital.official/", label: "Facebook", hoverColor: "hover:text-[#1877F2] hover:border-[#1877F2]/40 hover:shadow-[0_0_20px_rgba(24,119,242,0.3)]" },
    { icon: <Mail size={18} />, href: "mailto:info@highrisedigital.io", label: "Email", hoverColor: "hover:text-blue-400 hover:border-blue-500/40 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]" },
  ];

  return (
    <footer className="relative bg-[#030303] border-t border-white/5 overflow-hidden selection:bg-blue-600/30">

      {/* 🌌 High-End Cosmic Glows */}
      <div className="absolute top-0 left-1/4 w-[800px] 2xl:w-[1200px] h-[400px] bg-blue-600/[0.04] blur-[160px] 2xl:blur-[240px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[800px] 2xl:w-[1200px] h-[400px] bg-cyan-500/[0.03] blur-[160px] 2xl:blur-[240px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-[1800px] 2xl:max-w-[2400px] mx-auto px-6 2xl:px-20">

        <div className="py-20 2xl:py-40 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-16 2xl:gap-24">

{/* Column 1: Brand & Strategic Vision */}
<div className="lg:col-span-3 flex flex-col justify-start">
  
  {/* 🖼️ Logo Area */}
  <div className="flex flex-col items-start -mt-4 md:-mt-8 2xl:-mt-12"> 
    {/* ^ Ye negative margin logo ko top border ke kareeb le jayega */}
    
    <Link href="/" className="inline-block outline-none">
      <Image 
        src="/Hr Logo White.svg" 
        alt="High Raise Digital Logo"
        width={500} 
        height={150}
        priority
        className="h-24 md:h-32 2xl:h-48 w-auto object-contain 
                   scale-125 origin-left -ml-2 select-none" 
      />
    </Link>

    {/* 📝 Strategy Text */}
    <p className="text-zinc-500 text-sm md:text-lg 2xl:text-3xl font-medium leading-relaxed max-w-sm 2xl:max-w-2xl -mt-4 2xl:-mt-8">
      Let’s discuss your goals and create a powerful strategy to boost your business growth online.
    </p>
  </div>

  {/* 📱 Social Links */}
  <div className="flex items-center gap-4 2xl:gap-8 mt-6 2xl:mt-12">
    {socials.map((item, i) => (
      <Link
        key={i}
        href={item.href}
        className={`w-12 h-12 2xl:w-24 2xl:h-24 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-zinc-500 transition-all duration-300 ${item.hoverColor} hover:bg-white/[0.06]`}
      >
        <div className="scale-110 2xl:scale-150 flex items-center justify-center">
           {item.icon}
        </div>
      </Link>
    ))}
  </div>
</div>
          {/* Column 2: Ecosystem */}
          <div className="lg:col-span-2 space-y-6">
            <h4 className="text-[10px] 2xl:text-lg font-black text-zinc-400 uppercase tracking-[3px]">{"Ecosystem"}</h4>
            <div className="flex flex-col space-y-3 2xl:space-y-6 text-xs 2xl:text-xl font-bold">
              {[
                { name: "Platform Home", href: "/" },
                { name: "Our Engineers", href: "/about" },
                { name: "Growth Services", href: "/services" },
                { name: "Case Studies", href: "/portfolio" },
                { name: "Contact Hub", href: "/contact" }
              ].map((link, idx) => (
                <Link key={idx} href={link.href} className="text-zinc-500 hover:text-white transition-colors w-max flex items-center gap-2 group/nav">
                  <span>{link.name}</span>
                  <ArrowRight size={12} className="opacity-0 -translate-x-1 group-hover/nav:opacity-100 group-hover/nav:translate-x-0 transition-all text-blue-400" />
                </Link>
              ))}
            </div>
          </div>

          {/* Column 3: Capabilities */}
          <div className="lg:col-span-2 space-y-6">
            <h4 className="text-[10px] 2xl:text-lg font-black text-zinc-400 uppercase tracking-[3px]">{"Capabilities"}</h4>
            <div className="flex flex-col space-y-3 2xl:space-y-6 text-xs 2xl:text-xl font-bold">
              {["Social Media Marketing", "Search Engine Optimization", "Content Writing", "Web Development", "Branding & Identity"].map((service, idx) => (
                <Link key={idx} href={`/services/${service.toLowerCase().replace(/ /g, "-")}`} className="text-zinc-500 hover:text-white transition-all duration-300 hover:translate-x-1 w-max">
                  {service}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 4: Compliance (RESTORED) */}
          <div className="lg:col-span-2 space-y-6">
            <h4 className="text-[10px] 2xl:text-lg font-black text-zinc-400 uppercase tracking-[3px]">{"Compliance"}</h4>
            <div className="flex flex-col space-y-3 2xl:space-y-6 text-xs 2xl:text-xl font-bold">
              {[
                { name: "Privacy Protocol", href: "/privacy" },
                { name: "Terms of Engine", href: "/terms" },
                { name: "Global Pricing", href: "/pricing" },
                { name: "Knowledge FAQ", href: "/faq" }
              ].map((link, idx) => (
                <Link key={idx} href={link.href} className="text-zinc-500 hover:text-white transition-colors w-max">
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 5: Direct Inquiries */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="text-[10px] 2xl:text-lg font-black text-zinc-400 tracking-[3px] uppercase">{"Inquiries"}</h4>
            <div className="space-y-4">
              <a href="mailto:info@highrisedigital.io" className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.01] border border-white/5 hover:border-blue-500/20 transition-all duration-300 group">
                <Mail size={16} className="text-blue-400" />
                <div className="space-y-0.5">
                  <p className="text-[8px] 2xl:text-sm text-zinc-600 uppercase font-black tracking-wider">{"Drop an email"}</p>
                  <p className="text-xs 2xl:text-xl font-bold text-zinc-300 group-hover:text-white transition-colors">{"info@highrisedigital.io"}</p>
                </div>
              </a>
              <a href="tel:+923002777587" className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.01] border border-white/5 hover:border-cyan-500/20 transition-all duration-300 group">
                <Phone size={16} className="text-cyan-400" />
                <div className="space-y-0.5">
                  <p className="text-[8px] 2xl:text-sm text-zinc-600 uppercase font-black tracking-wider">{"Corporate Support"}</p>
                  <p className="text-xs 2xl:text-xl font-bold text-zinc-300 group-hover:text-white transition-colors">{"+92 300 2777587"}</p>
                </div>
              </a>
            </div>
          </div>

        </div>

        {/* 🏢 GLOBAL OFFICES GRID */}
        <div className="pb-16 pt-4 grid grid-cols-1 sm:grid-cols-3 gap-6 border-b border-white/5">
          {offices.map((office, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-white/[0.01] border border-white/5 space-y-3 hover:border-white/10 transition-all duration-300 group relative overflow-hidden">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400" />
                <span className="text-[9px] 2xl:text-sm uppercase tracking-widest font-black text-zinc-600 group-hover:text-zinc-400 transition-colors">{office.region}</span>
              </div>
              <div className="space-y-1">
                <h5 className="text-sm 2xl:text-2xl font-black text-white uppercase tracking-tight">{office.city}</h5>
                <p className="text-[11px] 2xl:text-lg text-zinc-500 font-medium leading-normal">{office.address}</p>
              </div>
            </div>
          ))}
        </div>

        {/* 🔒 BOTTOM BAR */}
        <div className="py-10 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-[11px] 2xl:text-lg text-zinc-600 font-semibold tracking-tight">
            {"© "}{currentYear}{" High Raise Digital LLC. All strategic architecture reserved worldwide."}
          </p>
          <p className="text-[9px] 2xl:text-sm uppercase tracking-[4px] text-zinc-600 font-bold">
            {"Built for growth • Designed for dominance"}
          </p>
        </div>

      </div>
    </footer>
  );
}