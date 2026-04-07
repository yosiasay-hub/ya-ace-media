import type { Locale } from '@/i18n/routing';

/**
 * Build-time locale for the current Worker.
 *
 * Set via `NEXT_PUBLIC_SITE_LOCALE=he|en` before `next build`.
 * Each Worker (ya-ace-media for HE, ya-ace-media-en for EN) is built with a
 * different value, producing two independent static bundles.
 *
 * Defaults to 'he' so local dev works without env config.
 */
export const SITE_LOCALE: Locale =
  (process.env.NEXT_PUBLIC_SITE_LOCALE as Locale) === 'en' ? 'en' : 'he';

export const IS_HEBREW = SITE_LOCALE === 'he';
export const IS_ENGLISH = SITE_LOCALE === 'en';
