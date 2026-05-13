import { siteMetadata } from "@/app/constants/metadata"; // Metadata file ka path check kar lena

// ✅ Ye line SEO handle karegi
export const metadata = siteMetadata.privacy;

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      {/* Yahan 'children' ka matlab hai aapka page.tsx wala sara code.
          Next.js khud hi layout ke andar page ko fit kar deta hai.
      */}
      {children}
    </section>
  );
}