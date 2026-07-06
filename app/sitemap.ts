import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://highrisedigital.io';

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
    
    // 📊 SEO PERFORMANCE CAMPAIGNS
    // '/case-studies/170-leads-increased-for-roofing-company',
    '/case-studies/28-organic-traffic-increase-for-local-cleaning-company',
    // '/case-studies/6.69K-clicks-in-just-3-months-for-local-restaurant',
    // '/case-studies/1-76k-leads-for-aesthetic-clinic',
    // '/case-studies/%231-position-in-serp-for-holistic-doctor-clinic',

    // 📱 SOCIAL MEDIA MARKETING PERFORMANCE
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

  // 🎯 FIXED: Contentful ka dynamic array hata kar sirf static routes return kar diye hain
  return staticRoutes;
}