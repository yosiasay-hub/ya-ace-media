import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['he', 'en'],
  defaultLocale: 'he',
  localePrefix: 'never',
  domains: [
    {
      domain: 'ya-ace-media.co.il',
      defaultLocale: 'he',
      locales: ['he']
    },
    {
      domain: 'en.ya-ace-media.co.il',
      defaultLocale: 'en',
      locales: ['en']
    }
  ]
});

export type Locale = (typeof routing.locales)[number];
