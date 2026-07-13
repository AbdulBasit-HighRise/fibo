import { siteMetadata } from "@/app/constants/metadata";

const serviceMeta = siteMetadata.services as any;

export const metadata = {
  title: serviceMeta.seo.title,
  description: serviceMeta.seo.description,
};

export default function SeoLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}