import { getRequestConfig } from 'next-intl/server';
import type { Locale } from './routing';
import { SITE_LOCALE } from '@/lib/locale';

export default getRequestConfig(async () => {
  const locale: Locale = SITE_LOCALE;

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
    timeZone: locale === 'he' ? 'Asia/Jerusalem' : 'America/New_York'
  };
});
