import { siteMetadata } from "@/app/constants/metadata";

// 🔴 1. Spaces khatam kar diye key ke andar se
export const metadata = siteMetadata["ai-ml-solutions"];

// 🔴 2. Function ka naam 'AiMlSolutionsLayout' kar diya (Dash hata kar camelCase kiya)
export default function AiMlSolutionsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}