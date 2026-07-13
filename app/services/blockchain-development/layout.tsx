import { siteMetadata } from "@/app/constants/metadata";

const serviceMeta = siteMetadata.services as any;

// Humne ?. lagaya aur backup text bhi de diya taake build kabhi fail na ho
export const metadata = {
  title: serviceMeta?.["e-commerce-management"]?.title || serviceMeta?.["ecommerce"]?.title || "Ecommerce Management Agency",
  description: serviceMeta?.["e-commerce-management"]?.description || serviceMeta?.["ecommerce"]?.description || "Store Optimization & Growth",
};

export default function EcommerceLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}