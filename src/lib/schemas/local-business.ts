import type { Locale } from '@/i18n/routing';
import { SITE, getSiteUrl } from '@/lib/site';

export interface LocalBusinessInput {
  locale: Locale;
  /** Optional aggregate rating data (from GBP or reviews system) */
  aggregateRating?: {
    ratingValue: number;
    reviewCount: number;
    bestRating?: number;
    worstRating?: number;
  };
  /** Optional price range override — defaults to agency standard */
  priceRange?: string;
}

/**
 * LocalBusiness schema builder — standalone version (NOT the organization node).
 * Use this when a page needs an explicit LocalBusiness reference independent of
 * the site-wide Organization graph. For the main org node, use buildOrganizationJsonLd
 * in seo.ts (it emits ["ProfessionalService", "LocalBusiness"]).
 *
 * Stable @id ensures single canonical entity across locales.
 */
export function buildLocalBusinessJsonLd({
  locale,
  aggregateRating,
  priceRange = '₪₪ / $$'
}: LocalBusinessInput): Record<string, unknown> {
  const orgId = `${SITE.baseUrl}#organization`;

  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': orgId,
    name: SITE.name,
    legalName: SITE.legalName,
    url: getSiteUrl(locale),
    logo: `${SITE.baseUrl}/logo.png`,
    image: `${SITE.baseUrl}/og-default.png`,
    telephone: SITE.phone,
    email: SITE.email,
    priceRange,
    foundingDate: SITE.founded,
    founder: { '@type': 'Person', name: SITE.founder },
    areaServed: SITE.areaServed.map((a) => ({ '@type': 'Country', name: a.name })),
    geo: {
      '@type': 'GeoCoordinates',
      latitude: SITE.gbp.geo.lat,
      longitude: SITE.gbp.geo.lng
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'],
        opens: '09:00',
        closes: '18:00'
      }
    ],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: SITE.phone,
        email: SITE.email,
        contactType: 'customer support',
        areaServed: SITE.areaServed.map((a) => a.code),
        availableLanguage: ['he', 'en']
      }
    ],
    sameAs: [SITE.gbp.sameAs, SITE.social.facebook, SITE.social.linkedin],
    inLanguage: locale === 'he' ? 'he-IL' : 'en-US'
  };

  if (aggregateRating) {
    schema.aggregateRating = {
      '@type': 'AggregateRating',
      ratingValue: aggregateRating.ratingValue,
      reviewCount: aggregateRating.reviewCount,
      bestRating: aggregateRating.bestRating ?? 5,
      worstRating: aggregateRating.worstRating ?? 1
    };
  }

  return schema;
}
