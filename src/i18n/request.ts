import { getRequestConfig } from 'next-intl/server';
import type { Locale } from './routing';

export default getRequestConfig(async () => {
  const locale: Locale = 'he';

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
    timeZone: 'Asia/Jerusalem'
  };
});
