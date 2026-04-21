// Barrel exports for schema.org JSON-LD builders.
// Pair with buildOrganizationJsonLd + buildWebsiteJsonLd from '@/lib/seo'.

export { buildLocalBusinessJsonLd } from './local-business';
export type { LocalBusinessInput } from './local-business';

export { buildServiceJsonLd } from './service';
export type { ServiceSchemaInput } from './service';

export { buildFaqPageJsonLd } from './faq-page';
export type { FaqItem, FaqPageSchemaInput } from './faq-page';

export { buildBreadcrumbJsonLd } from './breadcrumb';
export type { BreadcrumbSegment, BreadcrumbSchemaInput } from './breadcrumb';

export { buildPersonJsonLd } from './person';
export type { PersonSchemaInput } from './person';

export { buildItemListJsonLd } from './item-list';
export type { ItemListEntry, ItemListSchemaInput } from './item-list';
