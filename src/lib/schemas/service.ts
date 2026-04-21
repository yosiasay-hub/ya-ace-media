import type { Locale } from '@/i18n/routing';
import { SITE, getAbsoluteUrl } from '@/lib/site';

export interface ServiceSchemaInput {
  locale: Locale;
  /** Service slug — used to build canonical URL */
  slug: string;
  /** Localized service name */
  name: string;
  /** Localized service description */
  description: string;
  /** Optional service type / category (e.g., "SEO", "Web Development") */
  serviceType?: string;
  /** Optional output of the service (what the client receives) */
  serviceOutput?: string;
  /** Optional offer catalog — subservices with short descriptions */
  offers?: Array<{ name: string; description?: string }>;
}

/**
 * Service schema builder for a single service page.
 * Links back to the site-wide organization as the provider.
 */
export function buildServiceJsonLd({
  locale,
  slug,
  name,
  description,
  serviceType,
  serviceOutput,
  offers
}: ServiceSchemaInput): Record<string, unknown> {
  const url = getAbsoluteUrl(locale, `/services/${slug}/`);
  const orgId = `${SITE.baseUrl}#organization`;

  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${url}#service`,
    name,
    description,
    url,
    provider: { '@id': orgId },
    areaServed: SITE.areaServed.map((a) => ({ '@type': 'Country', name: a.name })),
    availableLanguage: ['he', 'en'],
    inLanguage: locale === 'he' ? 'he-IL' : 'en-US'
  };

  if (serviceType) {
    schema.serviceType = serviceType;
  }

  if (serviceOutput) {
    schema.serviceOutput = serviceOutput;
  }

  if (offers && offers.length > 0) {
    schema.hasOfferCatalog = {
      '@type': 'OfferCatalog',
      name,
      itemListElement: offers.map((offer, idx) => ({
        '@type': 'Offer',
        position: idx + 1,
        itemOffered: {
          '@type': 'Service',
          name: offer.name,
          ...(offer.description ? { description: offer.description } : {})
        }
      }))
    };
  }

  return schema;
}
