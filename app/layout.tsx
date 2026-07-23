import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Inter } from "next/font/google";
import { siteMetadata } from "@/app/constants/metadata";
import Script from "next/script";

// Sirf Inter ko initialize kiya
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL('https://highrisedigital.io'),
  title: siteMetadata.home.title,
  description: siteMetadata.home.description,
  icons: { icon: "/fibo-fav.png" },
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
      className={inter.variable}
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
        className="font-sans bg-[#030303] text-white antialiased overflow-x-hidden"
        suppressHydrationWarning={true}
      >
        <Navbar />
      <main className="min-h-screen w-full max-w-[2560px] mx-auto">
  {children}
</main>
        <Footer />
      </body>
    </html>
  );
}