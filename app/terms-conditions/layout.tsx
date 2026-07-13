import { siteMetadata } from "@/app/constants/metadata";

export const metadata = siteMetadata.terms;

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}