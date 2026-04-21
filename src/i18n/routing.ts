import { defineRouting } from 'next-intl/routing';

// Unified single-domain routing. HE at apex, EN under /en/*.
// Each static export still runs with NEXT_PUBLIC_SITE_LOCALE; scripts/build-unified.mjs
// merges both outputs into one dist/ for Cloudflare Pages.
export const routing = defineRouting({
  locales: ['he', 'en'],
  defaultLocale: 'he',
  localePrefix: 'never'
});

export type Locale = (typeof routing.locales)[number];
