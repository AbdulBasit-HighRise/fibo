import { siteMetadata } from "@/app/constants/metadata";

// 🔴 1. Spaces khatam kar diye key ke andar se
export const metadata = siteMetadata["vfx"];

// 🔴 2. Function ka naam 'VFXLayout' kar diya (Dash hata kar camelCase kiya)
export default function VFXLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}