import { siteMetadata } from "@/app/constants/metadata";

export const metadata = siteMetadata.services;

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}