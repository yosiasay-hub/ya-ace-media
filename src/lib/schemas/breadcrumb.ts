import type { Locale } from '@/i18n/routing';
import { getAbsoluteUrl } from '@/lib/site';

export interface BreadcrumbSegment {
  /** Localized label shown in the breadcrumb (e.g., "שירותים" / "Services") */
  label: string;
  /**
   * Path relative to locale root. Use '/' for home, '/services/' for list pages, etc.
   * The last segment typically represents the current page.
   */
  path: string;
}

export interface BreadcrumbSchemaInput {
  locale: Locale;
  segments: BreadcrumbSegment[];
}

/**
 * BreadcrumbList schema builder.
 *
 * Example:
 *   buildBreadcrumbJsonLd({
 *     locale: 'en',
 *     segments: [
 *       { label: 'Home', path: '/' },
 *       { label: 'Services', path: '/services/' },
 *       { label: 'Local SEO', path: '/services/local-seo/' }
 *     ]
 *   })
 */
export function buildBreadcrumbJsonLd({
  locale,
  segments
}: BreadcrumbSchemaInput): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: segments.map((segment, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: segment.label,
      item: getAbsoluteUrl(locale, segment.path)
    }))
  };
}
