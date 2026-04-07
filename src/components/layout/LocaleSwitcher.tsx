'use client';

import { useLocale } from 'next-intl';
import { Globe } from 'lucide-react';
import type { Locale } from '@/i18n/routing';
import { getOppositeLocaleUrl } from '@/lib/site';

export function LocaleSwitcher() {
  const locale = useLocale() as Locale;
  const oppositeLabel = locale === 'he' ? 'EN' : 'עב';
  const targetUrl = getOppositeLocaleUrl(locale);

  return (
    <a
      href={targetUrl}
      className="inline-flex items-center gap-1.5 rounded-full border border-[color:var(--color-ink-900)]/15 px-3 py-1.5 text-xs font-semibold text-[color:var(--color-ink-900)]/80 transition-colors hover:border-[color:var(--color-brand-600)] hover:text-[color:var(--color-brand-700)]"
      aria-label={`Switch to ${oppositeLabel}`}
      hrefLang={locale === 'he' ? 'en' : 'he'}
    >
      <Globe className="h-3.5 w-3.5" aria-hidden />
      {oppositeLabel}
    </a>
  );
}
