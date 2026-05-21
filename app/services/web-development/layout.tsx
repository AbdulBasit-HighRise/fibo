import { siteMetadata } from "@/app/constants/metadata";

// Safely cast meta object to access nested properties safely
const serviceMeta = siteMetadata.services as any;

export const metadata = {
  title: serviceMeta.webDev.title,
  description: serviceMeta.webDev.description,
};

export default function WebDevLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}