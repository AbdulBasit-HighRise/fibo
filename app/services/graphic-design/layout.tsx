import { siteMetadata } from "@/app/constants/metadata";

// 🔴 1. Spaces khatam kar diye key ke andar se
export const metadata = siteMetadata["graphic-design"];

// 🔴 2. Function ka naam 'GraphicDesignLayout' kar diya (Dash hata kar camelCase kiya)
export default function GraphicDesignLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}