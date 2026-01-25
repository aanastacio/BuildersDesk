import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://buildersdeskpro.com';

  // NOTE: changeFrequency must be one of:
  // "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never"
  // priority must be a number between 0.0 and 1.0
  const pages: Array<{ path: string; changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency']; priority: number }> = [
    { path: '', changeFrequency: 'weekly', priority: 1 },
    // Keep this keyword page in the sitemap (SEO), but it is NOT a top-nav menu item.
    { path: '/roofing-crm', changeFrequency: 'weekly', priority: 0.95 },
    { path: '/product', changeFrequency: 'weekly', priority: 0.9 },
    { path: '/pricing', changeFrequency: 'weekly', priority: 0.9 },
    { path: '/about', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/book-demo', changeFrequency: 'monthly', priority: 0.7 },
    { path: '/privacy', changeFrequency: 'yearly', priority: 0.5 },
    { path: '/terms', changeFrequency: 'yearly', priority: 0.5 },
  ];

  return pages.map((p) => ({
    url: `${baseUrl}${p.path}`,
    lastModified: new Date(),
    changeFrequency: p.changeFrequency,
    priority: p.priority,
  }));
}
