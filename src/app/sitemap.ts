import type { MetadataRoute } from 'next';
import { headers } from 'next/headers';
import { SITE } from '@/lib/site';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const headerList = await headers();
  const locale = (headerList.get('x-locale') as 'he' | 'en') ?? 'he';
  const base = SITE.domains[locale];

  const hePages = ['', '/שירותים', '/תחומים', '/תיקי-עבודה', '/אודות', '/בלוג', '/יצירת-קשר', '/בדיקה-חינם'];
  const enPages = ['', '/services', '/industries', '/case-studies', '/about', '/blog', '/contact', '/free-audit'];

  const pages = locale === 'he' ? hePages : enPages;

  return pages.map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: path === '' ? 1 : 0.8,
    alternates: {
      languages: {
        'he-IL': `${SITE.domains.he}${hePages[enPages.indexOf(path)] ?? ''}`,
        'en-US': `${SITE.domains.en}${enPages[hePages.indexOf(path)] ?? ''}`
      }
    }
  }));
}
