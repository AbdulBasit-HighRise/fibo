import { createClient } from 'contentful';
import { notFound } from 'next/navigation';

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID || 'aprr3d93u7vz',
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN || 'LXVuIdmXm-IK71j-DfjMMgSZQnAoM_aqxz-KzAlaMdA',
});

// 🎯 DYNAMIC SEO META DATA: Google Search ke liye automatic titles set karega
export async function generateMetadata({ params }: { params: any }) {
  const { slug } = await params;
  try {
    const response = await client.getEntries({
      content_type: 'page',
      'fields.slug': slug,
    });
    
    if (!response.items.length) return {};
    const page: any = response.items[0].fields;
    
    return {
      title: `${page.metaTitle} | High Rise Agency`,
      description: page.metaDescription,
    };
  } catch {
    return {};
  }
}

export default async function DynamicPage({ params }: { params: any }) {
  const { slug } = await params;
  
  // Contentful se slug ke mutabik page ka data fetch karna
  const response = await client.getEntries({
    content_type: 'page',
    'fields.slug': slug,
  });

  if (!response.items.length) return notFound();
  const page: any = response.items[0].fields;

  return (
    <main className="bg-[#020617] text-white min-h-screen py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-black mb-8 uppercase tracking-tight">
          {page.title}
        </h1>
        <div className="prose prose-invert text-zinc-300 leading-relaxed whitespace-pre-line">
          {/* Agar string text hai toh direct render hoga */}
          {typeof page.pageContent === 'string' ? page.pageContent : "Rich text rendering here"}
        </div>
      </div>
    </main>
  );
}