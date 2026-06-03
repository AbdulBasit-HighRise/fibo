import { siteMetadata } from "@/app/constants/metadata";

const serviceMeta = siteMetadata.services as any;

export const metadata = {
  title: serviceMeta["ecommerce-management"].title,
  description: serviceMeta["ecommerce-management"].description,
};

export default function EcommerceLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}