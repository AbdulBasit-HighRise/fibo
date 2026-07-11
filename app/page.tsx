import Hero from "@/components/sections/Hero";
import AboutPreview from "@/components/sections/AboutPreview";
import Services from "@/components/sections/Services";
import HowWeWork from "@/components/sections/HowWeWork";
import PortfolioPreview from "@/components/sections/PortfolioPreview";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Testimonials from "@/components/sections/Testimonials";
import ClientTrust from "@/components/sections/ClientTrust";
import IndustryExpertise from "@/components/IndustryExpertise";
import HeroSlider from "@/components/sections/HeroSlider";
import AuditCTA from "@/components/sections/AuditCTA";
import ProvenExcellence from "@/components/sections/ProvenExcellence";
import Stats from "@/components/sections/Stats";
import faq from "@/app/faq/page";
// ⚡ Is page ko cache rakhne ke liye configuration (Ab yeh makkhan chalega)
export const revalidate = 3600;

export default async function Home() {
  return (
    <main>
      {/* 🎯 Simple components ki tarah bina kisi fetch load ke chalenge */}
      <Hero />

      {/* <HeroSlider /> */}

      {/* 🎯 About Preview ab baaki sections ki tarah direct aur simple load hoga */}
      <AboutPreview />

      {/* <PortfolioPreview /> */}
      {/* <Stats /> */}
      <Services />
      <AuditCTA />
      <ClientTrust />

      {/* <ProvenExcellence /> */}
      {/* <HowWeWork /> */}
      {/* <IndustryExpertise /> */}

      <WhyChooseUs />
      <Testimonials />
      {/* < faq /> */}

    </main>
  );
}