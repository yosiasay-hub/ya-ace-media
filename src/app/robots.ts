import type { MetadataRoute } from 'next';
import { SITE_LOCALE } from '@/lib/locale';
import { SITE } from '@/lib/site';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  const base = SITE.domains[SITE_LOCALE];
  return {
    rules: [{ userAgent: '*', allow: '/' }],
    sitemap: `${base}/sitemap.xml`,
    host: base
  };
}
