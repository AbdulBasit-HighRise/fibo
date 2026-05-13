import { siteMetadata } from "@/app/constants/metadata"; // Metadata file ka path check kar lena

export const metadata = siteMetadata.faq;

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}