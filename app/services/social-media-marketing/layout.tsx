import { siteMetadata } from "@/app/constants/metadata";

const serviceMeta = siteMetadata.services as any;

export const metadata = {
  title: serviceMeta.smm.title,
  description: serviceMeta.smm.description,
};

export default function SmmLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}