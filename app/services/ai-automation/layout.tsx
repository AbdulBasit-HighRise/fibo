import { siteMetadata } from "@/app/constants/metadata";

const serviceMeta = siteMetadata.services as any;

export const metadata = {
  title: serviceMeta.automation.title,
  description: serviceMeta.automation.description,
};

export default function AutomationLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}