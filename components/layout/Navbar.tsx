"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, ChevronDown, Code, Smartphone, Video, Sparkles, PenTool, Megaphone, Cpu, BrainCircuit } from "lucide-react";
import Image from "next/image";

// 1. SERVICES Array define kiya taake Error na aye
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
  const pathname = usePathname();

  return (
    <div className="sticky top-0 z-[100] w-full bg-white/95 backdrop-blur-sm border-b border-zinc-100 shadow-[0_2px_10px_rgba(0,0,0,0.03)]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between w-full h-20">

          {/* Logo */}
          <Link href="/" className="shrink-0">
            <Image src="/fibo-footer-logo.png" alt="Logo" width={180} height={45} className="h-8 md:h-14 w-auto" />
          </Link>

          {/* Nav Links */}
          <div className="hidden lg:flex items-center gap-1">
            {[
              { name: "Home", href: "/" },
              { name: "About", href: "/about" },
              { name: "Services", href: "/services", isDropdown: true },
              { name: "Our Work", href: "/our-work" },
              { name: "Contact", href: "/contact" }
            ].map((link) => (
              <div
                key={link.name}
                className="relative group"
                onMouseEnter={() => link.isDropdown && setShowServices(true)}
                onMouseLeave={() => link.isDropdown && setShowServices(false)}
              >
                <Link
                  href={link.href}
                  className={`flex items-center gap-1.5 px-5 py-2.5 text-[12px] font-extrabold uppercase tracking-wide transition-all duration-300 rounded-full
                    ${pathname === link.href
                      ? "text-black bg-zinc-100"
                      : "text-zinc-700 hover:text-black hover:bg-zinc-100"}`}
                >
                  {link.name} {link.isDropdown && <ChevronDown size={12} className="stroke-[3]" />}
                </Link>

                {/* Dynamic Dropdown - 2 Column Grid */}
                {link.isDropdown && showServices && (
                  <div className="absolute top-full left-0 pt-2 z-[100] w-[450px]">
                    <div className="bg-white border border-zinc-200 shadow-2xl shadow-zinc-200/50 rounded-3xl p-3 animate-in fade-in zoom-in duration-200 grid grid-cols-2 gap-1">
                      {SERVICES.map((item) => (
                        <Link
                          key={item.id}
                          href={item.link}
                          className="flex items-center gap-3 px-4 py-3 text-[12px] font-bold text-zinc-700 hover:text-black hover:bg-[#FFD36A]/20 rounded-2xl transition-all"
                        >
                          <item.icon size={16} className="text-[#FFD36A]" />
                          {item.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Side CTA */}
          <div className="flex items-center gap-4">
            <Link href="/contact">
              <button className="group relative hidden md:block overflow-hidden bg-white text-black px-6 py-2.5 rounded-full text-[11px] font-black uppercase tracking-widest transition-all duration-500 active:scale-95 shadow-md">
                {/* Gold Hover Background */}
                <div className="absolute inset-0 w-0 bg-[#FFD36A] transition-all duration-500 ease-out group-hover:w-full" />

                {/* Button Text */}
                <span className="relative z-10 group-hover:text-black transition-colors duration-500">
                  Get Quote
                </span>
              </button>
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
}