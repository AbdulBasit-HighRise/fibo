import { siteMetadata } from "@/app/constants/metadata";

// TypeScript bypass ke sath services object nikala
const serviceMeta = siteMetadata.services as any;

export const metadata = {
  // 🎯 FIXED: "smm" ki jagah original key "social-media-marketing" dhal di jo config me hai
  title: serviceMeta?.["social-media-marketing"]?.title || "Social Media Marketing Agency",
  description: serviceMeta?.["social-media-marketing"]?.description || "Grow your brand online.",
};

export default function SmmLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}