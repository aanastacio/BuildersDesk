import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://buildersdeskpro.com';

  // Generate sitemap entries
  const routes = ['', '/about', '/product', '/pricing', '/book-demo', '/privacy', '/terms'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : route === '/about' ? 'monthly' : route === '/product' ? 'weekly' : route === '/pricing' ? 'weekly' : route === '/book-demo' ? 'monthly' : route === '/privacy' ? 'yearly' : 'yearly',
    priority: route === '' ? 1 : route === '/about' ? 0.8 : route === '/product' ? 0.9 : route === '/pricing' ? 0.9 : route === '/book-demo' ? 0.7 : route === '/privacy' ? 0.5 : 0.5,
  }));

  return routes;
}
