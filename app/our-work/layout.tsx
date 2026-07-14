import { siteMetadata } from "@/app/constants/metadata";

// 🔴 1. Spaces khatam kar diye key ke andar se
export const metadata = siteMetadata["our-work"];

// 🔴 2. Function ka naam 'OurWorkLayout' kar diya (Dash hata kar camelCase kiya)
export default function OurWorkLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}