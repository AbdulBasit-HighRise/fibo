import { siteMetadata } from "@/app/constants/metadata";

// 🔴 1. Spaces khatam kar diye key ke andar se
export const metadata = siteMetadata["case-studies"];

// 🔴 2. Function ka naam 'CaseStudiesLayout' kar diya (Dash hata kar camelCase kiya)
export default function CaseStudiesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}