import { siteMetadata } from "@/app/constants/metadata";

// TypeScript ko batayein ke yeh ek object hai
const services = siteMetadata.services as Record<string, any>;

export const metadata = {
  // Optional chaining (?.) use karo taake agar key na mile toh error na aaye
  title: services?.["3d-video-production"]?.title || "3D Video Production | Immersive Media Experiences",
  description: services?.["3d-video-production"]?.description || "Cinematic 3D video production services to engage your audience with high-quality, professional visual content.",
};

// Function name se quotes hata diye
export default function ThreeDVideoProductionLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}