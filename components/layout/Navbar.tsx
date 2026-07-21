"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Plus, Code, Smartphone, Video, Sparkles, PenTool, Megaphone, Cpu, BrainCircuit } from "lucide-react";
import Image from "next/image";

const SERVICES = [
  { id: "01", title: "Web Development", icon: Code, link: "/services/website-development" },
  { id: "02", title: "App Development", icon: Smartphone, link: "/services/app-development" },
  { id: "03", title: "3D Video", icon: Video, link: "/services/3d-video-production" },
  { id: "04", title: "VFX", icon: Sparkles, link: "/services/vfx" },
  { id: "05", title: "Graphic Design", icon: PenTool, link: "/services/graphic-design" },
  { id: "06", title: "Digital Marketing", icon: Megaphone, link: "/services/digital-marketing" },
  { id: "07", title: "Blockchain", icon: Cpu, link: "/services/blockchain-development" },
  { id: "08", title: "AI/ML Solutions", icon: BrainCircuit, link: "/services/ai-ml-solutions" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const [mobileServices, setMobileServices] = useState(false); // Mobile Services ke liye toggle
  const pathname = usePathname();

  return (
  <div className="sticky top-0 z-[100] w-full bg-[#111827] backdrop-blur-sm border-b border-zinc-800 shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
  <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
    <nav className="flex items-center justify-between w-full h-20">

      <Link href="/" className="shrink-0">
        <Image src="/fibo-footer-logo.png" alt="Logo" width={180} height={45} className="h-10 md:h-14 w-auto" />
      </Link>

      <button className="lg:hidden p-2 text-white" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X className="text-white" size={24} /> : <Menu className="text-white" size={24} />}
      </button>

      <div className={`${isOpen ? "flex" : "hidden"} lg:flex absolute lg:static top-20 left-0 w-full lg:w-auto bg-[#111827] lg:bg-transparent flex-col lg:flex-row items-center gap-1 p-6 lg:p-0 shadow-2xl lg:shadow-none`}>
        {[
          { name: "Home", href: "/" },
          { name: "About", href: "/about" },
          { name: "Services", href: "/services", isDropdown: true },
          { name: "Our Work", href: "/our-work" },
          { name: "Contact", href: "/contact" }
        ].map((link) => (
          <div key={link.name} className="relative group w-full lg:w-auto">
            <div className="flex items-center justify-between lg:justify-start w-full">
              <Link
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-1.5 px-5 py-2.5 text-[12px] font-extrabold uppercase transition-all duration-300 rounded-full w-full lg:w-auto ${pathname === link.href ? "text-black bg-white" : "text-white hover:text-black hover:bg-white"}`}
              >
                {link.name}
              </Link>
              {link.isDropdown && (
                <button onClick={() => setMobileServices(!mobileServices)} className="lg:hidden p-2 text-white">
                  <Plus size={16} />
                </button>
              )}
            </div>

            {/* Desktop Dropdown */}
            {link.isDropdown && (
              <div className="hidden lg:block absolute top-full left-0 pt-2 z-[100] w-[450px] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none group-hover:pointer-events-auto">
                <div className="bg-[#222630] border border-zinc-800 shadow-2xl rounded-3xl p-3 grid grid-cols-2 gap-1">
                  {SERVICES.map((item) => (
                    <Link key={item.id} href={item.link} className="flex items-center gap-3 px-4 py-3 text-[12px] font-bold text-white hover:text-black hover:bg-[#FFD36A] rounded-2xl transition-colors">
                      <item.icon size={16} className="text-white group-hover:text-black" /> {item.title}
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Mobile Dropdown List */}
            {link.isDropdown && mobileServices && (
              <div className="lg:hidden grid grid-cols-1 gap-1 px-4 py-2 bg-[#222630]/50 rounded-2xl my-1 w-full">
                {SERVICES.map((item) => (
                  <Link key={item.id} href={item.link} onClick={() => setIsOpen(false)} className="px-4 py-3 text-[12px] font-bold text-white border-b border-zinc-800 last:border-none">
                    {item.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
        
        {/* Mobile CTA Button */}
        <Link href="/contact" className="lg:hidden w-full mt-4">
          <button className="w-full bg-[#FFD36A] text-black py-4 rounded-full text-[11px] font-black uppercase tracking-widest">Get Quote</button>
        </Link>
      </div>

      <div className="hidden md:flex items-center gap-4">
        <Link href="/contact">
          <button className="group relative overflow-hidden bg-white text-black px-6 py-2.5 rounded-full text-[11px] font-black uppercase tracking-widest transition-all duration-500 shadow-md border border-zinc-800">
            <div className="absolute inset-0 w-0 bg-[#FFD36A] transition-all duration-500 group-hover:w-full" />
            <span className="relative z-10 group-hover:text-black transition-colors duration-500">Get Quote</span>
          </button>
        </Link>
      </div>
    </nav>
  </div>
</div>
  );
}