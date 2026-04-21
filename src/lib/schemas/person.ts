import type { Locale } from '@/i18n/routing';
import { SITE, getAbsoluteUrl } from '@/lib/site';

export interface PersonSchemaInput {
  locale: Locale;
  /** Optional override for name — defaults to SITE.founder */
  name?: string;
  /** Localized job title (e.g., "Founder & Lead Developer") */
  jobTitle?: string;
  /** Optional profile image URL (absolute or path relative to site root) */
  image?: string;
  /** Areas of expertise — falls back to organization knowsAbout */
  knowsAbout?: string[];
  /** Path to the about page (used to build @id). Defaults to /about/. */
  path?: string;
}

/**
 * Person schema for Yossi on the about page.
 * References the organization as worksFor via @id so search engines can
 * connect the person to the business entity.
 */
export function buildPersonJsonLd({
  locale,
  name = SITE.founder,
  jobTitle,
  image,
  knowsAbout,
  path = '/about/'
}: PersonSchemaInput): Record<string, unknown> {
  const aboutUrl = getAbsoluteUrl(locale, path);
  const orgId = `${SITE.baseUrl}#organization`;

  const resolvedJobTitle = jobTitle ?? SITE.founderRole[locale];
  const resolvedImage = image
    ? image.startsWith('http')
      ? image
      : `${SITE.baseUrl}${image.startsWith('/') ? image : `/${image}`}`
    : undefined;

  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${aboutUrl}#person`,
    name,
    url: aboutUrl,
    jobTitle: resolvedJobTitle,
    worksFor: { '@id': orgId },
    hasOccupation: {
      '@type': 'Occupation',
      name: resolvedJobTitle,
      occupationalCategory: 'Web Development & Digital Marketing'
    },
    knowsAbout: knowsAbout ?? [
      'Web Development',
      'Search Engine Optimization',
      'Local SEO',
      'Google Business Profile Optimization',
      'Next.js',
      'Schema.org Markup'
    ],
    sameAs: [SITE.social.linkedin, SITE.social.facebook],
    inLanguage: locale === 'he' ? 'he-IL' : 'en-US'
  };

  if (resolvedImage) {
    schema.image = resolvedImage;
  }

  return schema;
}
