import { siteMetadata } from "@/app/constants/metadata";

// Safely cast meta object to access nested properties safely
const serviceMeta = siteMetadata.services as any;

export const metadata = {
  // 🎯 FIXED: "webDev" ki jagah original key "website-development" use ki hai aur optional chaining lagayi hai
  title: serviceMeta?.["website-development"]?.title || "Website Development Agency",
  description: serviceMeta?.["website-development"]?.description || "Build a powerful online presence with our website development agency.",
};

export default function WebDevLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}