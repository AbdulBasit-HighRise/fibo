import { siteMetadata } from "@/app/constants/metadata";

// 🔴 1. Spaces khatam kar diye key ke andar se
export const metadata = siteMetadata["digital-marketing"];

// 🔴 2. Function ka naam 'DigitalMarketingLayout' kar diya (Dash hata kar camelCase kiya)
export default function DigitalMarketingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}