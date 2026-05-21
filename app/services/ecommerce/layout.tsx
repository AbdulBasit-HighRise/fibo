import { siteMetadata } from "@/app/constants/metadata";

const serviceMeta = siteMetadata.services as any;

export const metadata = {
  title: serviceMeta.ecommerce.title,
  description: serviceMeta.ecommerce.description,
};

export default function EcommerceLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}