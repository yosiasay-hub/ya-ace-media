import type { Locale } from '@/i18n/routing';

export const SITE = {
  name: 'YA Ace Media',
  legalName: 'YA Ace Media - קידום עסקים',
  phone: '+972-54-3300830',
  phoneDisplay: '054-3300830',
  email: 'hello@ya-ace-media.co.il',
  founder: 'Yossi',
  founderRole: {
    he: 'מייסד ומפתח ראשי',
    en: 'Founder & Lead Developer'
  },
  // Google Business Profile
  gbp: {
    placeId: '0x151c333b99cba47d:0xb3ea850ab053ab26',
    cid: '12964057814194553126',
    sameAs: 'https://www.google.com/maps/place/?cid=12964057814194553126',
    geo: { lat: 32.9728522, lng: 35.2795559 }
  },
  // Service area (no physical address — service area business)
  areaServed: [
    { name: 'Israel', code: 'IL' },
    { name: 'United States', code: 'US' }
  ],
  social: {
    facebook: 'https://www.facebook.com/yaacemedia',
    linkedin: 'https://www.linkedin.com/in/yosia-say',
    whatsapp: 'https://wa.me/972543300830'
  },
  founded: '2017',
  domains: {
    he: 'https://ya-ace-media.co.il',
    en: 'https://en.ya-ace-media.co.il'
  }
} as const;

export function getSiteUrl(locale: Locale): string {
  return SITE.domains[locale];
}

export function getOppositeLocaleUrl(locale: Locale, path: string = ''): string {
  const opposite: Locale = locale === 'he' ? 'en' : 'he';
  return `${SITE.domains[opposite]}${path}`;
}
