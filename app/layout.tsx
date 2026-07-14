import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/CustomCursor";
import { Instrument_Sans, Inter } from "next/font/google";
import { siteMetadata } from "@/app/constants/metadata";
import Script from "next/script";

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],                  // 🎯 Fix: nested array khatam kiya
  variable: "--font-heading",
  weight: ["600", "700"],             // 🎯 Fix: pure strings pass kiye
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],                  // 🎯 Fix: nested array khatam kiya
  variable: "--font-sans",
  weight: ["400", "500", "600"],      // 🎯 Fix: pure strings pass kiye
  display: "swap",
});

export const metadata = {
  // 🎯 FIXED: Domain mismatch theek kar diya (.io set kiya taake sitemap se match ho)
  metadataBase: new URL('https://highrisedigital.io'), 
  title: siteMetadata.home.title,
  description: siteMetadata.home.description,
  icons: {
    icon: "/fibo-fav.png",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#111827",
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`scroll-smooth ${inter.variable} ${instrumentSans.variable}`}
    >
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-GC1MBVHBW7"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-GC1MBVHBW7');
          `}
        </Script>
      </head>
      <body
        className="bg-[#FFFFFF] text-white antialiased overflow-x-hidden selection:bg-blue-600/30"
        suppressHydrationWarning
      >
        {/* <CustomCursor /> */}
        <Navbar />
        <main className="relative z-10 min-h-screen w-full max-w-[2560px] mx-auto">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}