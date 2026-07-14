import { siteMetadata } from "@/app/constants/metadata";

// 🔴 1. Spaces khatam kar diye key ke andar se
export const metadata = siteMetadata["app-development"];

// 🔴 2. Function ka naam 'AppDevelopmentLayout' kar diya (Dash hata kar camelCase kiya)
export default function AppDevelopmentLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}