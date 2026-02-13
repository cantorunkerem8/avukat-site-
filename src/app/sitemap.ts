import { MetadataRoute } from 'next';
import { siteContent } from '@/content/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://guvenhukuk.com';

  // Static pages
  const staticPages = [
    '',
    '/hakkimizda',
    '/hizmetler',
    '/ekibimiz',
    '/sss',
    '/iletisim',
    '/gizlilik',
    '/kvkk',
  ];

  const staticRoutes = staticPages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: page === '' ? 1 : 0.8,
  }));

  // Service pages
  const serviceRoutes = siteContent.services.map((service) => ({
    url: `${baseUrl}/hizmetler/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Team pages
  const teamRoutes = siteContent.team.map((member) => ({
    url: `${baseUrl}/ekibimiz/${member.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...serviceRoutes, ...teamRoutes];
}
