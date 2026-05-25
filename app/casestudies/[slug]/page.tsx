import { notFound } from "next/navigation";
import { Metadata } from "next";
import { caseStudiesData } from "@/lib/caseStudiesData";
import CaseStudyClientContent from "./CaseStudyClientContent";

interface Params {
  slug: string;
}

// ========================================================
// 🔍 DYNAMIC METADATA GENERATION (Google & Social SEO)
// ========================================================
export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const resolvedParams = await params;
  const project = caseStudiesData.find((p) => p.slug === resolvedParams.slug);

  if (!project) {
    return {
      title: "Case Study Not Found",
    };
  }

  // 🔥 Error Fixed: 'project.tagline' ko hatakar 'project.description' use kiya hai jo real data model ka part hai
  const metaDescription = project.description || `Deep dive into the operational performance and architectural execution metrics of ${project.title}.`;

  return {
    title: `${project.title} | Case Study Performance`,
    description: metaDescription,
    openGraph: {
      title: `${project.title} | Case Study Hub`,
      description: metaDescription,
      images: [{ url: project.image }],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Case Study Hub`,
      description: metaDescription,
      images: [project.image],
    },
  };
}

// ========================================================
// ⚡ STATIC CHUNKS GENERATION (Build Time Optimization)
// ========================================================
export async function generateStaticParams() {
  return caseStudiesData.map((project) => ({
    slug: project.slug,
  }));
}

// ========================================================
// 🖥️ SERVER COMPONENT ENTRY POINT
// ========================================================
export default async function CaseStudyDetailPage({ params }: { params: Promise<Params> }) {
  // 1. Params ko properly await karein (Next.js compliance)
  const resolvedParams = await params;
  const { slug } = resolvedParams;

  // 2. Slug ke mutabiq core project analytics fetch karein
  const project = caseStudiesData.find((p) => p.slug === slug);

  // 3. Fallback trigger agar dataset array mein module na miley
  if (!project) {
    return notFound();
  }

  // 4. Client interface payload pass-through execution
  return <CaseStudyClientContent project={project} />;
}