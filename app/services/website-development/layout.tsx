import { siteMetadata } from "@/app/constants/metadata";

// 🔴 1. Spaces khatam kar diye key ke andar se
export const metadata = siteMetadata["website-development"];

// 🔴 2. Function ka naam 'WebsiteDevelopmentLayout' kar diya (Dash hata kar camelCase kiya)
export default function WebsiteDevelopmentLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}