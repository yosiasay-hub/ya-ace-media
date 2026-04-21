import type { Locale } from '@/i18n/routing';
import { getAbsoluteUrl } from '@/lib/site';

export interface ItemListEntry {
  /** Localized name of the list item (e.g., case study title) */
  name: string;
  /**
   * Path relative to locale root (e.g., '/case-studies/project-x/').
   * Absolute URLs are passed through unchanged.
   */
  path: string;
  /** Optional localized description */
  description?: string;
  /** Optional image URL (absolute or relative to site root) */
  image?: string;
}

export interface ItemListSchemaInput {
  locale: Locale;
  /** Path to the list page itself — used for the @id */
  listPath: string;
  /** Optional localized name of the list (e.g., "Case Studies") */
  name?: string;
  items: ItemListEntry[];
}

/**
 * ItemList schema — used for the case studies index page.
 * Each entry becomes a ListItem with position + url.
 */
export function buildItemListJsonLd({
  locale,
  listPath,
  name,
  items
}: ItemListSchemaInput): Record<string, unknown> {
  const listUrl = getAbsoluteUrl(locale, listPath);

  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    '@id': `${listUrl}#itemlist`,
    url: listUrl,
    numberOfItems: items.length,
    inLanguage: locale === 'he' ? 'he-IL' : 'en-US',
    itemListElement: items.map((item, idx) => {
      const itemUrl = item.path.startsWith('http')
        ? item.path
        : getAbsoluteUrl(locale, item.path);

      const listItem: Record<string, unknown> = {
        '@type': 'ListItem',
        position: idx + 1,
        url: itemUrl,
        name: item.name
      };

      if (item.description) {
        listItem.description = item.description;
      }

      if (item.image) {
        listItem.image = item.image.startsWith('http')
          ? item.image
          : `${getAbsoluteUrl(locale, '/')}${item.image.replace(/^\//, '')}`;
      }

      return listItem;
    })
  };

  if (name) {
    schema.name = name;
  }

  return schema;
}
