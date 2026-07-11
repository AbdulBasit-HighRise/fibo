"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";

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

         <div className="hidden lg:flex items-center gap-1">
  {[
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services", isDropdown: true },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Contact", href: "/contact" }
  ].map((link) => (
    <div key={link.name} className="relative group" onMouseEnter={() => setShowServices(true)} onMouseLeave={() => setShowServices(false)}>
      <Link 
        href={link.href} 
        className={`flex items-center gap-1.5 px-5 py-2.5 text-[12px] font-extrabold uppercase tracking-wide transition-all duration-300 rounded-full
          ${pathname === link.href 
            ? "text-black bg-zinc-100" 
            : "text-zinc-700 hover:text-black hover:bg-zinc-100"}`}
      >
        {link.name} {link.isDropdown && <ChevronDown size={12} className="stroke-[3]" />}
      </Link>
      
      {/* Dropdown - Solid Black Theme */}
      {link.isDropdown && showServices && (
        <div className="absolute top-full left-0 w-64 pt-2 z-[100]">
          <div className="bg-white border border-zinc-200 shadow-2xl shadow-zinc-200/50 rounded-2xl p-2 animate-in fade-in zoom-in duration-200">
            {["Web Development", "SEO", "Social Media", "AI Automation"].map((sub) => (
              <Link key={sub} href="#" className="block px-4 py-3.5 text-[12px] font-bold text-zinc-700 hover:text-black hover:bg-zinc-100 rounded-xl transition-all">
                {sub}
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
            <button className="hidden md:block bg-zinc-900 text-white px-6 py-2.5 rounded-full text-[11px] font-bold uppercase tracking-widest hover:bg-black transition-all active:scale-95">
              Get Quote
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2 text-zinc-900">
              <Menu size={24} />
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
}