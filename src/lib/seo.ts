import type { Metadata } from 'next';
import type { Locale } from '@/i18n/routing';
import { SITE, getSiteUrl } from './site';

interface BuildMetadataInput {
  locale: Locale;
  title: string;
  description: string;
  path?: string;
  ogImage?: string;
  noindex?: boolean;
}

export function buildMetadata({
  locale,
  title,
  description,
  path = '',
  ogImage,
  noindex = false
}: BuildMetadataInput): Metadata {
  const url = `${getSiteUrl(locale)}${path}`;
  const oppositeLocale: Locale = locale === 'he' ? 'en' : 'he';
  const oppositeUrl = `${getSiteUrl(oppositeLocale)}${path}`;
  const image = ogImage ?? `${getSiteUrl(locale)}/og-default.png`;

  return {
    title: {
      default: title,
      template: `%s | ${SITE.name}`
    },
    description,
    metadataBase: new URL(getSiteUrl(locale)),
    alternates: {
      canonical: url,
      languages: {
        'he-IL': `${getSiteUrl('he')}${path}`,
        'en-US': `${getSiteUrl('en')}${path}`,
        'x-default': `${getSiteUrl('he')}${path}`
      }
    },
    openGraph: {
      type: 'website',
      url,
      siteName: SITE.name,
      title,
      description,
      locale: locale === 'he' ? 'he_IL' : 'en_US',
      alternateLocale: locale === 'he' ? 'en_US' : 'he_IL',
      images: [{ url: image, width: 1200, height: 630, alt: title }]
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image]
    },
    robots: noindex
      ? { index: false, follow: false }
      : { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large' } }
  };
}

export function buildOrganizationJsonLd(locale: Locale): Record<string, unknown> {
  // Stable @id — single canonical entity regardless of locale.
  const orgId = `${SITE.baseUrl}#organization`;

  return {
    '@context': 'https://schema.org',
    // Dual-typed so the node satisfies both ProfessionalService consumers
    // and LocalBusiness requirements (opening hours, priceRange, geo).
    '@type': ['ProfessionalService', 'LocalBusiness'],
    '@id': orgId,
    name: SITE.name,
    legalName: SITE.legalName,
    url: getSiteUrl(locale),
    logo: `${SITE.baseUrl}/logo.png`,
    image: `${SITE.baseUrl}/og-default.png`,
    telephone: SITE.phone,
    email: SITE.email,
    priceRange: '₪₪ / $$',
    foundingDate: SITE.founded,
    founder: { '@type': 'Person', name: SITE.founder },
    areaServed: SITE.areaServed.map((a) => ({ '@type': 'Country', name: a.name })),
    serviceArea: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: SITE.gbp.geo.lat,
        longitude: SITE.gbp.geo.lng
      },
      // ~13,000 km radius — covers IL + US service territory.
      geoRadius: 13000000
    },
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
    knowsAbout: [
      'Web Development',
      'Search Engine Optimization',
      'Local SEO',
      'Google Business Profile Optimization',
      'Next.js',
      'Schema.org Markup'
    ],
    inLanguage: locale === 'he' ? 'he-IL' : 'en-US'
  };
}

export function buildWebsiteJsonLd(locale: Locale): Record<string, unknown> {
  // Stable @id across locales — single WebSite entity for the whole domain.
  const websiteId = `${SITE.baseUrl}#website`;
  const orgId = `${SITE.baseUrl}#organization`;

  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': websiteId,
    url: getSiteUrl(locale),
    name: SITE.name,
    publisher: { '@id': orgId },
    inLanguage: locale === 'he' ? 'he-IL' : 'en-US',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${getSiteUrl(locale)}/?q={search_term_string}`
      },
      'query-input': 'required name=search_term_string'
    }
  };
}
