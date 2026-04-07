import { headers } from 'next/headers';
import { getRequestConfig } from 'next-intl/server';
import type { Locale } from './routing';

export default getRequestConfig(async () => {
  const headerList = await headers();
  const locale: Locale = (headerList.get('x-locale') as Locale) ?? 'he';

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
    timeZone: locale === 'he' ? 'Asia/Jerusalem' : 'America/Los_Angeles'
  };
});
