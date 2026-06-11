import { MetadataRoute } from 'next';
// Future use ke liye: import { getBlogs } from '@/lib/contentful'; 

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://highrisedigital.io';

  // 1. Saare Static Pages + Saari Services + Saare Case Studies (Asli Route)
  const staticRoutes = [
    '',
    '/about',
    '/contact',
    '/blog',
    '/case-studies',
    '/pricing',
    '/services',
    '/services/website-development',
    '/services/seo',
    '/services/social-media-marketing',
    '/services/e-commerce-management',
    '/services/ai-automation',
    '/privacy',
    '/terms',
    
    // 📊 --- SEO PERFORMANCE CAMPAIGNS (5 Projects) ---
    '/case-studies/170-leads-increased-for-roofing-company',
    '/case-studies/28-organic-traffic-increase-for-local-cleaning-company',
    '/case-studies/6.69K-clicks-in-just-3-months-for-local-restaurant',
    '/case-studies/1-76k-leads-for-aesthetic-clinic',
    '/case-studies/%231-position-in-serp-for-holistic-doctor-clinic', // '#' ko URL encoded '%23' kar diya

    // 📱 --- SOCIAL MEDIA MARKETING PERFORMANCE (4 Projects) ---
    '/case-studies/31-increase-in-qualified-property-leads-via-high-intent-social-funnels',
    '/case-studies/598541-in-sales-at-22x-roas-for-private-label-fitness-brand',
    '/case-studies/1044-website-purchases-for-fashion-brand',
    '/case-studies/25-10x-roas-for-home-living-brand',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : route.startsWith('/services') || route.startsWith('/case-studies/') ? 0.8 : 0.6,
  }));

  // 2. Future Blogs (Automatic Fetching from Contentful)
  let dynamicRoutes: any[] = [];
  
  try {
    const blogs: any[] = []; // Blogs aane par Contentful ka data yahan connect hoga

    dynamicRoutes = blogs.map((blog) => ({
      url: `${baseUrl}/blog/${blog.slug}`, 
      lastModified: new Date(blog.updatedAt || new Date()).toISOString().split('T')[0],
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }));
  } catch (error) {
    console.error("Error fetching blogs for sitemap:", error);
  }

  // Saari cheezon ko mila kar return kar diya
  return [...staticRoutes, ...dynamicRoutes];
}