"use client";
import { useState } from "react";
import { ArrowRight, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
export default function AuditCTA() {
  const [email, setEmail] = useState("");
  const [url, setUrl] = useState("");

  // 🎯 API Status Feedback State
  const [status, setStatus] = useState<{
    loading: boolean;
    success: boolean | null;
    message: string;
  }>({
    loading: false,
    success: null,
    message: "",
  });

  // 🚀 universal API route data post handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ loading: true, success: null, message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: "Audit Requested User",
          email: email,
          phone: "Not Provided (Audit Strip Hook)",
          service: "Free Website Audit",
          subject: `New Free Website Audit Request for: ${url} 🔍`,
          message: `User requested a full analysis for website link: ${url}`,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus({
          loading: false,
          success: true,
          message: "Audit request locked in successfully! 🚀",
        });

        // Inputs reset
        setEmail("");
        setUrl("");

        // 🕒 Notice message dynamic clear
        setTimeout(() => {
          setStatus({ loading: false, success: null, message: "" });
        }, 3500);

      } else {
        throw new Error(data.error || "Failed to submit audit data payload.");
      }
    } catch (error: any) {
      setStatus({
        loading: false,
        success: false,
        message: error.message || "Network error. Please try again.",
      });
    }
  };

  return (

    <>
      <section className="relative w-full bg-[#FFFFFF] py-8 md:py-16 lg:py-18  overflow-hidden">
        <div className=" text-center p-8 md:p-12 2xl:p-20 3xl:p-24 rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#FFD36A] to-amber-600 w-full max-w-5xl mx-auto shadow-2xl">

          <h3 className="text-2xl md:text-5xl 2xl:text-5xl 3xl:text-6xl font-black mb-4 text-black">
            Ready to Start Your Project?
          </h3>

          <p className="text-black/70 text-[15px] md:text-base lg:text-[17px] 2xl:text-xl 3xl:text-2xl font-medium leading-relaxed mb-6 md:mb-8 max-w-2xl 3xl:max-w-4xl mx-auto antialiased">
            Let's bring your vision to life. Whether it's a web application or cinematic VFX, our team is here to build it with you. Have questions? We're just a message away.
          </p>

          <Link href="/contact" className="inline-block">
            <button className="px-10 py-4 2xl:px-16 2xl:py-6 3xl:px-20 3xl:py-7 bg-black hover:bg-gradient-to-r hover:from-[#FFD36A] hover:to-amber-600 text-white hover:text-black font-black rounded-full transition-all duration-300 text-sm 2xl:text-xl 3xl:text-2xl shadow-[0_0_30px_rgba(0,0,0,0.2)] active:scale-95">
              Get in Touch
            </button>
          </Link>
        </div>
      </section>
    </>

  );
}