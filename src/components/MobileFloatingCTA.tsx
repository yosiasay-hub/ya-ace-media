'use client';

import { useEffect, useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Phone, ArrowLeft, ArrowRight } from 'lucide-react';
import { SITE } from '@/lib/site';
import type { Locale } from '@/i18n/routing';

/**
 * Mobile-only floating CTA bar that fades in after the user has scrolled past
 * the hero. Two actions side-by-side: call + contact form jump.
 * Hidden on lg+ where the header CTA is always visible.
 */
export function MobileFloatingCTA() {
  const t = useTranslations('nav');
  const locale = useLocale() as Locale;
  const Arrow = locale === 'he' ? ArrowLeft : ArrowRight;
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const onScroll = () => {
      // Show after scrolling ~70% of viewport height
      const trigger = window.innerHeight * 0.7;
      setVisible(window.scrollY > trigger);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const hidden = !visible;

  return (
    <div
      aria-hidden={hidden}
      // @ts-expect-error - inert is a valid HTML attribute, supported by React 19+
      inert={hidden ? '' : undefined}
      className={`fixed inset-x-0 bottom-0 z-40 px-3 pb-3 lg:hidden transition-all duration-300 ${
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
      }`}
      style={{ paddingBottom: 'max(0.75rem, env(safe-area-inset-bottom))' }}
    >
      <div className="mx-auto flex max-w-md items-center gap-2 rounded-2xl border border-[color:var(--color-ink-900)]/10 bg-white/95 p-2 shadow-2xl shadow-[color:var(--color-ink-900)]/15 backdrop-blur-md">
        <a
          href={`tel:${SITE.phone}`}
          tabIndex={hidden ? -1 : 0}
          className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-xl border border-[color:var(--color-ink-900)]/10 bg-white text-sm font-semibold text-[color:var(--color-ink-900)] hover:border-[color:var(--color-brand-400)] hover:text-[color:var(--color-brand-700)]"
          aria-label={t('callUs')}
        >
          <Phone className="h-4 w-4" aria-hidden />
          {t('callUs')}
        </a>
        <a
          href="#contact"
          tabIndex={hidden ? -1 : 0}
          className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-xl bg-[color:var(--color-accent-500)] text-sm font-semibold text-white shadow-md shadow-[color:var(--color-accent-600)]/20 hover:bg-[color:var(--color-accent-600)]"
        >
          {t('contact')}
          <Arrow className="h-4 w-4" aria-hidden />
        </a>
      </div>
    </div>
  );
}
