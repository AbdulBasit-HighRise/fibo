import { siteMetadata } from "@/app/constants/metadata";

// TypeScript bypass ke sath services object nikala
const serviceMeta = siteMetadata.services as any;

export const metadata = {
  // 🎯 FIXED: "automation" ki jagah original key "ai-automation" use ki hai
  title: serviceMeta?.["ai-automation"]?.title || "AI Automation Agency | Smart Solutions",
  description: serviceMeta?.["ai-automation"]?.description || "Boost efficiency with smart AI automation solutions.",
};

export default function AutomationLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}