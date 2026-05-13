import { siteMetadata } from "@/app/constants/metadata";

export const metadata = siteMetadata.blog;

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}