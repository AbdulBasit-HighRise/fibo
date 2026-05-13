// "use client";

// import { useState, useEffect } from "react";
// import Link from "next/link";
// import { motion, AnimatePresence } from "framer-motion";
// import { usePathname } from "next/navigation";
// import { Menu, X, ChevronDown } from "lucide-react"; 
// import Image from "next/image";

// export default function Navbar() {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isOpen, setIsOpen] = useState(false);
//   const [showServices, setShowServices] = useState(false);
//   const [isProposalOpen, setIsProposalOpen] = useState(false);
//   const pathname = usePathname();

//   useEffect(() => {
//     const handleScroll = () => setIsScrolled(window.scrollY > 20);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   useEffect(() => {
//     setIsOpen(false);
//     setShowServices(false);
//   }, [pathname]);

//   const links = [
//     { name: "Home", href: "/" },
//     { name: "About", href: "/about" },
//     { 
//       name: "Services", 
//       href: "/services", 
//       isDropdown: true,
//       subLinks: [
//         { name: "Web Development", href: "/services/web-dev" },
//         { name: "Content Writing", href: "/services/content-writing" },
//         { name: "SEO Optimization", href: "/services/seo" },
//         { name: "Social Media Marketing", href: "/services/social-media" },
//         { name: "Branding", href: "/services/branding" },
//       ]
//     },
//     { name: "Portfolio", href: "/portfolio" },
//     { name: "Blog", href: "/blog" },
//     { name: "Contact", href: "/contact" },
//   ];

//   return (
//     <div className="fixed top-4 md:top-6 2xl:top-12 left-0 right-0 z-[100] flex justify-center px-4 md:px-6">
//       <motion.nav
//         initial={{ y: -100, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         className={`relative flex items-center justify-between rounded-full border transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] w-full
//         ${isScrolled
//             ? "max-w-5xl 2xl:max-w-7xl px-5 md:px-8 py-3 2xl:py-6 bg-[#030303]/80 backdrop-blur-xl border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
//             : "max-w-7xl 2xl:max-w-[110rem] px-6 md:px-10 py-5 md:py-6 2xl:py-10 bg-transparent border-transparent"
//           }`}
//       >
//         {/* LOGO */}
//         <Link href="/" className="flex items-center group z-50">
//           <Image
//             src="/Hr Logo White.svg"
//             alt="High Raise Digital Logo"
            
//             width={240}
//             height={80}
//             className={`h-auto transition-all duration-500 ${
//               isScrolled ? "w-[120px] 2xl:w-[180px]" : "w-[150px] 2xl:w-[240px]"
//             }`}
//             priority
//           />
//         </Link>

//         {/* DESKTOP NAVIGATION */}
//         <div className="hidden md:flex items-center gap-2 2xl:gap-6">
//           {links.map((link) => {
//             const isActive = pathname === link.href;

//             if (link.isDropdown) {
//               return (
//                 <div 
//                   key={link.name}
//                   className="relative"
//                   onMouseEnter={() => setShowServices(true)}
//                   onMouseLeave={() => setShowServices(false)}
//                 >
//                   <Link
//                     href={link.href}
//                     className={`flex items-center gap-1 px-5 py-2 text-[11px] 2xl:text-xl font-bold uppercase tracking-[0.15em] transition-all duration-300 relative z-10
//                     ${isActive || showServices ? "text-white" : "text-gray-400 hover:text-white"}`}
//                   >
//                     {link.name}
//                     <ChevronDown size={isScrolled ? 14 : 18} className={`transition-transform duration-300 ${showServices ? "rotate-180" : ""}`} />
//                   </Link>

//                   <AnimatePresence>
//                     {showServices && (
//                       <motion.div
//                         initial={{ opacity: 0, y: 15 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         exit={{ opacity: 0, y: 15 }}
//                         className="absolute top-full left-0 mt-4 w-72 2xl:w-96 p-3 rounded-[2rem] border border-white/10 bg-[#030303]/95 backdrop-blur-2xl shadow-2xl"
//                       >
//                         {link.subLinks?.map((sub) => (
//                           <Link
//                             key={sub.name}
//                             href={sub.href}
//                             className="block px-5 py-3 2xl:py-6 text-[10px] 2xl:text-lg font-bold text-gray-400 hover:text-white hover:bg-white/5 rounded-2xl transition-all"
//                           >
//                             {sub.name}
//                           </Link>
//                         ))}
//                       </motion.div>
//                     )}
//                   </AnimatePresence>
//                 </div>
//               );
//             }

//             return (
//               <Link
//                 key={link.name}
//                 href={link.href}
//                 className={`relative px-5 py-2 text-[11px] 2xl:text-xl font-bold uppercase tracking-[0.15em] transition-all duration-300
//                 ${isActive ? "text-white" : "text-gray-400 hover:text-white"}`}
//               >
//                 {link.name}
//                 {isActive && (
//                   <motion.span
//                     layoutId="nav-pill"
//                     className="absolute inset-0 bg-white/5 rounded-full -z-10 border border-white/10"
//                     transition={{ type: "spring", duration: 0.6 }}
//                   />
//                 )}
//               </Link>
//             );
//           })}
//         </div>

//         {/* RIGHT ACTION CONTROLS */}
//         <div className="flex items-center gap-4 z-50">
//           <div className="hidden md:block">
//             <motion.button
//               onClick={() => setIsProposalOpen(true)}
//               whileHover={{ scale: 1.05, y: -2 }}
//               whileTap={{ scale: 0.95 }}
//               className="px-8 py-3 2xl:px-14 2xl:py-6 rounded-full text-[10px] 2xl:text-xl font-black uppercase tracking-[2px] bg-white text-black hover:bg-blue-600 hover:text-white transition-all duration-500 shadow-[0_10px_30px_rgba(255,255,255,0.1)]"
//             >
//               Get Proposal
//             </motion.button>
//           </div>

//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             className="flex md:hidden w-12 h-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.02] text-white backdrop-blur-md"
//           >
//             {isOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>

//         {/* MOBILE DRAWER */}
//         <AnimatePresence>
//           {isOpen && (
//             <motion.div
//               initial={{ opacity: 0, y: -20, scale: 0.95 }}
//               animate={{ opacity: 1, y: 0, scale: 1 }}
//               exit={{ opacity: 0, y: -20, scale: 0.95 }}
//               className="absolute top-full left-0 right-0 mt-4 p-8 rounded-[2.5rem] border border-white/10 bg-[#030303]/98 backdrop-blur-3xl shadow-2xl flex flex-col gap-6 md:hidden z-40"
//             >
//               {links.map((link) => (
//                 <div key={link.name} className="flex flex-col">
//                   <div className="flex items-center justify-between">
//                     <Link
//                       href={link.href}
//                       className="px-2 py-2 text-sm font-black uppercase tracking-widest text-zinc-400 hover:text-white transition-colors"
//                       onClick={() => setIsOpen(false)}
//                     >
//                       {link.name}
//                     </Link>
//                     {link.isDropdown && (
//                       <button onClick={() => setShowServices(!showServices)} className="p-2 text-zinc-400">
//                         <ChevronDown size={20} className={`transition-transform ${showServices ? "rotate-180" : ""}`} />
//                       </button>
//                     )}
//                   </div>
//                   {link.isDropdown && showServices && (
//                     <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} className="ml-4 flex flex-col gap-4 border-l border-white/10 pl-6 mt-4 mb-2">
//                       {link.subLinks?.map(sub => (
//                         <Link key={sub.name} href={sub.href} className="text-[11px] uppercase font-bold text-zinc-500 hover:text-blue-400" onClick={() => setIsOpen(false)}>
//                           {sub.name}
//                         </Link>
//                       ))}
//                     </motion.div>
//                   )}
//                 </div>
//               ))}
//               <button onClick={() => { setIsProposalOpen(true); setIsOpen(false); }} className="mt-4 w-full py-5 bg-blue-600 text-white rounded-[1.5rem] text-[11px] font-black uppercase tracking-widest shadow-lg shadow-blue-600/20">
//                 Get Proposal
//               </button>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </motion.nav>

//       {/* PROPOSAL MODAL - Compact but High-End */}
//       <AnimatePresence>
//         {isProposalOpen && (
//           <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
//             <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsProposalOpen(false)} className="absolute inset-0 bg-black/95 backdrop-blur-md" />
//             <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} className="relative w-full max-w-xl 2xl:max-w-4xl bg-zinc-950 border border-white/10 rounded-[3rem] 2xl:rounded-[5rem] p-10 2xl:p-20 shadow-2xl overflow-hidden">
//               <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-blue-600 to-cyan-400" />
//               <button onClick={() => setIsProposalOpen(false)} className="absolute top-8 right-8 text-zinc-500 hover:text-white transition-colors"><X size={28} /></button>
//               <div className="text-center mb-10 2xl:mb-20">
//                 <h2 className="text-3xl 2xl:text-6xl font-black text-white mb-4 tracking-tighter uppercase">Request a Proposal</h2>
//                 <p className="text-zinc-500 text-sm 2xl:text-2xl font-medium tracking-tight">Let's build your digital dominance together.</p>
//               </div>
//               <form className="space-y-5 2xl:space-y-10" onSubmit={(e) => e.preventDefault()}>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-5 2xl:gap-10">
//                   <input type="text" placeholder="Full Name" className="w-full bg-white/5 border border-white/10 rounded-2xl 2xl:rounded-[2rem] px-6 py-5 2xl:py-10 text-sm 2xl:text-2xl text-white outline-none focus:border-blue-500 transition-all" />
//                   <input type="email" placeholder="Email Address" className="w-full bg-white/5 border border-white/10 rounded-2xl 2xl:rounded-[2rem] px-6 py-5 2xl:py-10 text-sm 2xl:text-2xl text-white outline-none focus:border-blue-500 transition-all" />
//                 </div>
//                 <select className="w-full bg-white/5 border border-white/10 rounded-2xl 2xl:rounded-[2rem] px-6 py-5 2xl:py-10 text-sm 2xl:text-2xl text-zinc-400 outline-none focus:border-blue-500 appearance-none">
//                   <option className="bg-zinc-950">Select Service</option>
//                   <option className="bg-zinc-950">Web Development</option>
//                   <option className="bg-zinc-950">Branding</option>
//                   <option className="bg-zinc-950">Social Media Marketing</option>
//                   <option className="bg-zinc-950">SEO</option>
//                   <option className="bg-zinc-950">Google Ads</option>
//                   <option className="bg-zinc-950">Ecommerce Management</option>
//                   <option className="bg-zinc-950">AI Automation</option>
//                 </select>
//                 <textarea placeholder="Briefly describe your project..." rows={4} className="w-full bg-white/5 border border-white/10 rounded-2xl 2xl:rounded-[2rem] px-6 py-5 2xl:py-10 text-sm 2xl:text-2xl text-white outline-none focus:border-blue-500 resize-none transition-all"></textarea>
//                 <button className="w-full bg-blue-600 hover:bg-blue-500 text-white py-6 2xl:py-12 rounded-2xl 2xl:rounded-[2rem] font-black uppercase tracking-[0.2em] text-[11px] 2xl:text-2xl transition-all shadow-lg shadow-blue-600/20">
//                   Submit Request
//                 </button>
//               </form>
//             </motion.div>
//           </div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react"; 
import Image from "next/image";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const [isProposalOpen, setIsProposalOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setShowServices(false);
  }, [pathname]);

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { 
      name: "Services", 
      href: "/services", 
      isDropdown: true,
      subLinks: [
        { name: "Web Development", href: "/services/web-dev" },
        { name: "Content Writing", href: "/services/content-writing" },
        { name: "SEO Optimization", href: "/services/seo" },
        { name: "Social Media Marketing", href: "/services/social-media" },
        { name: "Branding", href: "/services/branding" },
      ]
    },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    // 🌍 MAIN OUTER WRAPPER: Ye hamesha w-full rahega
    <div className="fixed top-0 left-0 right-0 z-[100] w-full pointer-events-none">
      
      {/* 📦 CONTAINER: Ye content ko limit karega (1550px) */}
      <div className="container-main py-4 md:py-6 2xl:py-10 pointer-events-auto">
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          // Tailwind classes simplify ki hain taake globals.css unhe control kare
          className={`relative flex items-center justify-between rounded-full border transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] mx-auto
          ${isScrolled
              ? "max-w-5xl 2xl:max-w-6xl px-6 py-3 bg-[#030303]/80 backdrop-blur-xl border-white/10 shadow-2xl"
              : "w-full px-8 py-5 md:py-6 bg-transparent border-transparent"
            }`}
        >
          {/* LOGO */}
          <Link href="/" className="flex items-center group z-50 shrink-0">
            <Image
              src="/Hr Logo White.svg"
              alt="High Raise Digital Logo"
              width={240}
              height={80}
              className={`h-auto transition-all duration-500 ${
                isScrolled ? "w-[110px] 2xl:w-[150px]" : "w-[140px] 2xl:w-[220px]"
              }`}
              priority
            />
          </Link>

          {/* DESKTOP NAVIGATION */}
          <div className="hidden lg:flex items-center gap-1 2xl:gap-3">
            {links.map((link) => {
              const isActive = pathname === link.href;

              if (link.isDropdown) {
                return (
                  <div 
                    key={link.name}
                    className="relative"
                    onMouseEnter={() => setShowServices(true)}
                    onMouseLeave={() => setShowServices(false)}
                  >
                    <Link
                      href={link.href}
                      className={`flex items-center gap-1 px-4 py-2 text-[10px] 2xl:text-base font-bold uppercase tracking-[0.12em] transition-all duration-300 relative z-10
                      ${isActive || showServices ? "text-white" : "text-zinc-400 hover:text-white"}`}
                    >
                      {link.name}
                      <ChevronDown size={isScrolled ? 14 : 16} className={`transition-transform duration-300 ${showServices ? "rotate-180" : ""}`} />
                    </Link>

                    <AnimatePresence>
                      {showServices && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute top-full left-0 mt-2 w-64 2xl:w-80 p-3 rounded-[2rem] border border-white/10 bg-[#030303] backdrop-blur-2xl shadow-2xl"
                        >
                          {link.subLinks?.map((sub) => (
                            <Link
                              key={sub.name}
                              href={sub.href}
                              className="block px-5 py-3 2xl:py-4 text-[10px] 2xl:text-sm font-bold text-zinc-400 hover:text-white hover:bg-white/5 rounded-2xl transition-all"
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative px-4 py-2 text-[10px] 2xl:text-base font-bold uppercase tracking-[0.12em] transition-all duration-300
                  ${isActive ? "text-white" : "text-zinc-400 hover:text-white"}`}
                >
                  {link.name}
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-white/5 rounded-full -z-10 border border-white/10"
                      transition={{ type: "spring", duration: 0.6 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* RIGHT ACTION CONTROLS */}
          <div className="flex items-center gap-4 z-50">
            <div className="hidden md:block">
              <motion.button
                onClick={() => setIsProposalOpen(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary" 
              >
                Get Proposal
              </motion.button>
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex lg:hidden w-11 h-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.02] text-white"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* MOBILE DRAWER */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute top-full left-0 right-0 mt-3 p-6 rounded-[2.5rem] border border-white/10 bg-[#030303] flex flex-col gap-4 lg:hidden z-40"
              >
                {links.map((link) => (
                  <div key={link.name} className="flex flex-col">
                    <div className="flex items-center justify-between">
                      <Link
                        href={link.href}
                        className="px-2 py-2 text-sm font-black uppercase tracking-widest text-zinc-300"
                        onClick={() => setIsOpen(false)}
                      >
                        {link.name}
                      </Link>
                      {link.isDropdown && (
                        <button onClick={() => setShowServices(!showServices)} className="p-2 text-zinc-400">
                          <ChevronDown size={18} className={`${showServices ? "rotate-180" : ""}`} />
                        </button>
                      )}
                    </div>
                    {link.isDropdown && showServices && (
                      <div className="ml-4 flex flex-col gap-4 border-l border-white/10 pl-4 mt-2">
                        {link.subLinks?.map(sub => (
                          <Link key={sub.name} href={sub.href} className="text-[10px] uppercase font-bold text-zinc-500" onClick={() => setIsOpen(false)}>
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <button onClick={() => { setIsProposalOpen(true); setIsOpen(false); }} className="w-full py-4 bg-white text-black rounded-full text-[10px] font-black uppercase tracking-widest">
                  Get Proposal
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>
      </div>

      {/* MODAL (Keep your existing modal code here...) */}
    </div>
  );
}