"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Phone,
  Send,
  ChevronDown,
  MapPin,
  Flame,
  Loader2,
  CheckCircle2
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

  const [status, setStatus] = useState<{
    loading: boolean;
    success: boolean | null;
    message: string;
  }>({
    loading: false,
    success: null,
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ loading: true, success: null, message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus({
          loading: false,
          success: true,
          message: "Your proposal request has been transmitted successfully! 🚀",
        });
        // Clear the form fields upon success
        setForm({
          name: "",
          email: "",
          phone: "",
          service: "",
          subject: "",
          message: "",
        });
      } else {
        throw new Error(data.error || "Failed to dispatch payload.");
      }
    } catch (error: any) {
      setStatus({
        loading: false,
        success: false,
        message: error.message || "Something went wrong. Please check your network connection.",
      });
    }
  };

  return (
    <main className="min-h-screen bg-[#FFFFFF] text-white overflow-x-hidden selection:bg-blue-600 -mt-24 md:-mt-28 lg:-mt-32">

      {/* 🖼️ HERO SECTION */}
      <section className="relative w-full overflow-hidden bg-[#020617]">
        <div className="container-wide">

         <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
                    {/* Image */}
                    <Image
                      src="/home-hero.png"
                      alt="Mesh Grid"
                      fill
                      sizes="100vw"
                      priority
                      className="object-cover object-center"
                    />
        
                    {/* Dark Overlay - Yahan shade control karo */}
                    {/* bg-black/60 ka matlab hai 60% opacity wala black shade */}
                    <div className="absolute inset-0 bg-black/60" />
        
                    {/* Agar tum gradient chahte ho taake neeche se upar dark ho, toh ye use karo: */}
                    {/* <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70" /> */}
                  </div>

          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/[0.05] blur-[120px] pointer-events-none" />

          <div className="relative z-10 w-full mx-auto text-center lg:text-left px-6 pt-32 pb-16 md:pt-20 md:pb-24 lg:max-w-full lg:pt-60 lg:pb-28 lg:pl-40 2xl:mx-0 2xl:max-w-[1500px] 2xl:pt-48 2xl:pb-36 2xl:pl-80 3xl:mx-0 3xl:max-w-[1800px] 3xl:pt-60 3xl:pb-44 3xl:pl-72">
            <div className="max-w-5xl">



              <h1 className="text-[2rem] md:text-[3.2rem] lg:text-[3.8rem] 2xl:text-[5rem] uppercase font-black tracking-tighter leading-[0.8] text-white mb-8 normal-case">
                CONTACT US
              </h1>

              <p className="text-white text-[16px] md:text-base lg:text-[17px] 2xl:text-xl 3xl:text-2xl font-medium leading-relaxed max-w-xl 2xl:max-w-3xl mx-auto lg:mx-0 opacity-90">
                Have questions or want to learn more about our services? Fill out the form and we'll get back to you as soon as possible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: FORM & INFO STACK */}
      <section className="relative z-10 max-w-[1400px] 2xl:max-w-[1700px] mx-auto px-6 py-12 pb-24">
        <div className="flex flex-col lg:flex-row gap-8 2xl:gap-12 items-stretch">

          {/* --- LEFT: CLIENT INTAKE FORM --- */}
          <div className="flex-[1.8] bg-[#f4f4f4] border border-black/5 rounded-[2.5rem] p-8 md:p-12 2xl:p-16 shadow-lg relative">
            <form onSubmit={handleSubmit} className="space-y-6 2xl:space-y-8">

              <div className="grid md:grid-cols-2 gap-6 2xl:gap-8">
                <div className="space-y-2">
                  <label className="text-[11px] 2xl:text-xs font-bold tracking-widest text-zinc-600 ml-1">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text" required placeholder="Enter your full name"
                    value={form.name}
                    disabled={status.loading}
                    className="w-full bg-white border border-zinc-200 text-zinc-900 rounded-2xl p-4 2xl:p-6 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all disabled:opacity-50"
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[11px] 2xl:text-xs font-bold uppercase tracking-widest text-zinc-600 ml-1">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email" required placeholder="email@company.com"
                    value={form.email}
                    disabled={status.loading}
                    className="w-full bg-white border border-zinc-200 text-zinc-900 rounded-2xl p-4 2xl:p-6 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all disabled:opacity-50"
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 2xl:gap-8">
                <div className="space-y-2">
                  <label className="text-[11px] 2xl:text-xs font-bold uppercase tracking-widest text-zinc-600 ml-1">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel" required placeholder="+92 300 0000000"
                    value={form.phone}
                    disabled={status.loading}
                    className="w-full bg-white border border-zinc-200 text-zinc-900 rounded-2xl p-4 2xl:p-6 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all disabled:opacity-50"
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  />
                </div>
                <div className="group space-y-2 relative">
                  <label className="text-[11px] 2xl:text-xs font-bold uppercase tracking-[2px] text-zinc-600 ml-1">
                    Service Required <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <select
                      required
                      disabled={status.loading}
                      className="w-full bg-white border border-zinc-200 text-zinc-900 rounded-[1.5rem] p-4 2xl:p-6 pr-12 outline-none appearance-none cursor-pointer focus:border-blue-500 transition-all disabled:opacity-50"
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                      value={form.service}
                    >
                      <option value="" disabled>Select a service</option>
                      <option value="Website Development">Website Development</option>
                      <option value="App Development">App Development</option>
                      <option value="Social Media Marketing">Digital Marketing</option>
                      <option value="AI Automation">AI/ML Solutions</option>
                      <option value="Ecommerce Management">3D Video Production</option>
                      <option value="VFX">VFX</option>
                      <option value="Block Chain Development">Block Chain Development</option>
                      <option value="Graphic Design">Graphic Design</option>
                    </select>
                    <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-500">
                      <ChevronDown size={18} strokeWidth={2.5} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[11px] 2xl:text-xs font-bold uppercase tracking-widest text-zinc-600 ml-1">
                  Subject <span className="text-red-500">*</span>
                </label>
                <input
                  type="text" required placeholder="How can we help you?"
                  value={form.subject}
                  disabled={status.loading}
                  className="w-full bg-white border border-zinc-200 text-zinc-900 rounded-2xl p-4 2xl:p-6 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all disabled:opacity-50"
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <label className="text-[11px] 2xl:text-xs font-bold uppercase tracking-widest text-zinc-600 ml-1">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  required placeholder="Tell us more about your project goals..."
                  value={form.message}
                  disabled={status.loading}
                  className="w-full bg-white border border-zinc-200 text-zinc-900 rounded-2xl p-4 2xl:p-6 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 min-h-[120px] 2xl:min-h-[200px] resize-none transition-all disabled:opacity-50"
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                />
              </div>

              {/* Status Notifications */}
              <AnimatePresence mode="wait">
                {status.message && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className={`p-4 rounded-xl font-medium text-sm flex items-center gap-3 border ${status.success
                      ? "bg-emerald-50 border-emerald-200 text-emerald-600"
                      : "bg-rose-50 border-rose-200 text-rose-600"
                      }`}
                  >
                    {status.success && <CheckCircle2 size={16} />}
                    <span>{status.message}</span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status.loading}
                className="group relative overflow-hidden flex items-center justify-center gap-3 px-8 py-4 md:px-10 md:py-5 bg-white text-black font-black text-[10px] tracking-[3px] uppercase rounded-full active:scale-95 transition-all duration-500 w-full sm:w-auto shadow-lg disabled:opacity-50"
              >
                <div className="absolute inset-0 w-0 bg-[#FFD36A] transition-all duration-500 ease-out group-hover:w-full" />
                <span className="relative z-10 flex items-center gap-3">
                  {status.loading ? (
                    <>Processing Request <Loader2 size={14} className="animate-spin" /></>
                  ) : (
                    <>Send Proposal Request <Send size={14} className="group-hover:translate-x-1 transition-transform" /></>
                  )}
                </span>
              </button>
            </form>
          </div>

          {/* --- RIGHT: MODULAR INFO STACK --- */}
          {/* --- RIGHT: MODULAR INFO STACK --- */}
          <div className="flex-1 space-y-6 flex flex-col">

            {/* Contact Info Card */}
            <div className="p-8 2xl:p-12 bg-white rounded-[2.5rem] shadow-sm border border-black/5 flex-1">
              <div className="space-y-8">
                {/* Email */}
                <div className="flex gap-6 items-center">
                  <div className="w-16 h-16 rounded-2xl bg-[#f4f4f4] flex items-center justify-center text-blue-600">
                    <Mail className=" text-[#FFD36A]" size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-zinc-400">Email</p>
                    <p className="text-lg font-bold text-black">hello@fiboentertainment.com</p>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex gap-6 items-center">
                  <div className="w-16 h-16 rounded-2xl bg-[#f4f4f4] flex items-center justify-center text-emerald-600">
                    <Phone className=" text-[#FFD36A]" size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-zinc-400">WhatsApp</p>
                    <p className="text-lg font-bold text-black">+92 339 4004791</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-8 mt-8 border-t border-zinc-100">
                <p className="text-xs font-bold uppercase tracking-[2px] text-zinc-400 mb-6">Connect With Us</p>
                <div className="flex gap-4">
                  {[
                    { icon: <FaLinkedinIn size={20} />, link: "https://www.linkedin.com/company/fibo-entertainment/", color: "hover:bg-[#FFD36A]" },
                    { icon: <FaInstagram size={20} />, link: "https://www.instagram.com/fiboentertainment/", color: "hover:bg-[#FFD36A]" },
                    { icon: <FaFacebook size={20} />, link: "https://www.facebook.com/fiboentertainment/", color: "hover:bg-[#FFD36A]" }
                  ].map((soc, i) => (
                    <a key={i} href={soc.link} target="_blank" rel="noopener noreferrer"
                      className={`p-5 rounded-2xl bg-[#f4f4f4] text-zinc-600 hover:text-white ${soc.color} transition-all duration-300`}>
                      {soc.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Location Card */}
            <div className="p-8 2xl:p-12 bg-white rounded-[2.5rem] shadow-sm border border-black/5 flex-none">
              <h3 className="text-xs font-bold tracking-[3px] text-zinc-400 mb-8 uppercase">Location</h3>
              <div className="flex items-start gap-4">
                <div className="mt-1 p-3 rounded-xl bg-[#f4f4f4] text-blue-600">
                  <MapPin className=" text-[#FFD36A]" size={20} />
                </div>
                <div>
                  <p className="text-lg font-bold text-black">Pakistan</p>
                  <p className="text-sm text-zinc-500 leading-relaxed">Islamabad, F-7 Markaz</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}