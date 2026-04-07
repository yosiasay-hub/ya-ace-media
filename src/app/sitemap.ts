import type { MetadataRoute } from 'next';
import { SITE_LOCALE } from '@/lib/locale';
import { SITE } from '@/lib/site';
import { SERVICES } from '@/data/services-content';
import { CASE_STUDIES } from '@/data/case-studies';

export const dynamic = 'force-static';

/**
 * Per-locale sitemap. Generated at build time — each Worker (HE/EN) gets
 * its own sitemap.xml with its own canonical URLs.
 *
 * Cross-locale references are emitted as <xhtml:alternate> via the layout
 * <link rel="alternate" hreflang> tags.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.domains[SITE_LOCALE];
  const lastModified = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified, changeFrequency: 'monthly', priority: 1.0 },
    { url: `${base}/services/`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/case-studies/`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/about/`, lastModified, changeFrequency: 'yearly', priority: 0.7 }
  ];

  const serviceRoutes: MetadataRoute.Sitemap = SERVICES.map((s) => ({
    url: `${base}/services/${s.slug}/`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.8
  }));

  const caseStudyRoutes: MetadataRoute.Sitemap = CASE_STUDIES.map((c) => ({
    url: `${base}/case-studies/${c.slug}/`,
    lastModified,
    changeFrequency: 'yearly' as const,
    priority: 0.7
  }));

  return [...staticRoutes, ...serviceRoutes, ...caseStudyRoutes];
}
