import type { MetadataRoute } from 'next';
import { SITE, getAbsoluteUrl } from '@/lib/site';
import { SERVICES } from '@/data/services-content';
import { CASE_STUDIES } from '@/data/case-studies';

export const dynamic = 'force-static';

type StaticRoute = { path: string; changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency']; priority: number };

const STATIC_ROUTES: StaticRoute[] = [
  { path: '/', changeFrequency: 'weekly', priority: 1.0 },
  { path: '/services/', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/case-studies/', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/about/', changeFrequency: 'yearly', priority: 0.7 },
  { path: '/contact/', changeFrequency: 'yearly', priority: 0.7 }
];

function withAlternates(path: string) {
  return {
    'he-IL': getAbsoluteUrl('he', path),
    'en-US': getAbsoluteUrl('en', path),
    'x-default': getAbsoluteUrl('he', path)
  };
}

/**
 * Unified sitemap — lists HE URLs as primary with EN alternates via hreflang.
 * Generated identically for both builds; Google treats them as equivalent.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticEntries: MetadataRoute.Sitemap = STATIC_ROUTES.map(({ path, changeFrequency, priority }) => ({
    url: getAbsoluteUrl('he', path),
    lastModified,
    changeFrequency,
    priority,
    alternates: { languages: withAlternates(path) }
  }));

  const serviceEntries: MetadataRoute.Sitemap = SERVICES.map((s) => ({
    url: getAbsoluteUrl('he', `/services/${s.slug}/`),
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
    alternates: { languages: withAlternates(`/services/${s.slug}/`) }
  }));

  const caseStudyEntries: MetadataRoute.Sitemap = CASE_STUDIES.map((c) => ({
    url: getAbsoluteUrl('he', `/case-studies/${c.slug}/`),
    lastModified,
    changeFrequency: 'yearly' as const,
    priority: 0.7,
    alternates: { languages: withAlternates(`/case-studies/${c.slug}/`) }
  }));

  return [...staticEntries, ...serviceEntries, ...caseStudyEntries];
}

// Silence unused-import lint if future tree-shaking changes land
void SITE;
