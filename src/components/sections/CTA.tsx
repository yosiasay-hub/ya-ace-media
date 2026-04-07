import { useTranslations, useLocale } from 'next-intl';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import type { Locale } from '@/i18n/routing';

export function CTA() {
  const t = useTranslations('cta');
  const locale = useLocale() as Locale;
  const Arrow = locale === 'he' ? ArrowLeft : ArrowRight;
  const href = '#contact';

  return (
    <section className="section-y">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[color:var(--color-brand-700)] via-[color:var(--color-brand-800)] to-[color:var(--color-ink-900)] px-6 py-16 text-center sm:px-12 sm:py-20">
          <div
            aria-hidden
            className="absolute inset-0 opacity-30"
            style={{
              background: 'radial-gradient(circle at 30% 20%, var(--color-brand-400), transparent 50%)'
            }}
          />
          <div className="relative">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              {t('title')}
            </h2>
            <p className="mt-4 text-base text-white/80 sm:text-lg">{t('subtitle')}</p>
            <div className="mt-8">
              <a
                href={href}
                className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-[color:var(--color-brand-700)] transition-all hover:bg-[color:var(--color-brand-50)] hover:shadow-2xl"
              >
                {t('button')}
                <Arrow className="h-5 w-5" aria-hidden />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
