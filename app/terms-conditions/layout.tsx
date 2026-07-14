import { siteMetadata } from "@/app/constants/metadata";

export const metadata = siteMetadata["terms-conditions"];

export default function TermsConditionsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}