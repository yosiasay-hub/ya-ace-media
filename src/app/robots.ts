import type { MetadataRoute } from 'next';
import { headers } from 'next/headers';
import { SITE } from '@/lib/site';

export default async function robots(): Promise<MetadataRoute.Robots> {
  const headerList = await headers();
  const locale = (headerList.get('x-locale') as 'he' | 'en') ?? 'he';
  const base = SITE.domains[locale];

  return {
    rules: [{ userAgent: '*', allow: '/', disallow: ['/api/', '/_next/'] }],
    sitemap: `${base}/sitemap.xml`,
    host: base
  };
}
