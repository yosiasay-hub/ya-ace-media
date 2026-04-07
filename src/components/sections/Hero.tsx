import { useTranslations, useLocale } from 'next-intl';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import type { Locale } from '@/i18n/routing';

export function Hero() {
  const t = useTranslations('hero');
  const locale = useLocale() as Locale;
  const Arrow = locale === 'he' ? ArrowLeft : ArrowRight;
  const auditHref = locale === 'he' ? '/בדיקה-חינם' : '/free-audit';
  const workHref = locale === 'he' ? '/תיקי-עבודה' : '/case-studies';

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[color:var(--color-brand-50)] to-white pt-12 lg:pt-20">
      {/* Decorative background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-40"
        style={{
          background:
            'radial-gradient(60% 40% at 50% 0%, var(--color-brand-200) 0%, transparent 70%)'
        }}
      />

      <div className="container-x grid items-center gap-12 pb-16 lg:grid-cols-12 lg:pb-24">
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-2 rounded-full border border-[color:var(--color-brand-200)] bg-white/70 px-4 py-1.5 text-xs font-semibold text-[color:var(--color-brand-700)] backdrop-blur">
            <CheckCircle2 className="h-3.5 w-3.5" aria-hidden />
            {t('badge')}
          </div>

          <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] tracking-tight text-[color:var(--color-ink-900)] sm:text-5xl lg:text-6xl xl:text-7xl">
            {t('title')}
            <br />
            <span className="bg-gradient-to-r from-[color:var(--color-brand-600)] to-[color:var(--color-brand-400)] bg-clip-text text-transparent">
              {t('titleHighlight')}
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-[color:var(--color-ink-900)]/75 sm:text-lg">
            {t('subtitle')}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a href={auditHref} className="btn-accent text-base">
              {t('ctaPrimary')}
              <Arrow className="h-4 w-4" aria-hidden />
            </a>
            <a href={workHref} className="btn-secondary text-base">
              {t('ctaSecondary')}
            </a>
          </div>

          <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-[color:var(--color-ink-900)]/10 pt-8 sm:gap-10">
            <div>
              <dt className="text-xs font-medium uppercase tracking-wider text-[color:var(--color-ink-900)]/60">
                {t('stats.psi')}
              </dt>
              <dd className="mt-1 text-3xl font-bold text-[color:var(--color-brand-700)] sm:text-4xl">98+</dd>
            </div>
            <div>
              <dt className="text-xs font-medium uppercase tracking-wider text-[color:var(--color-ink-900)]/60">
                {t('stats.clients')}
              </dt>
              <dd className="mt-1 text-3xl font-bold text-[color:var(--color-brand-700)] sm:text-4xl">25+</dd>
            </div>
            <div>
              <dt className="text-xs font-medium uppercase tracking-wider text-[color:var(--color-ink-900)]/60">
                {t('stats.countries')}
              </dt>
              <dd className="mt-1 text-3xl font-bold text-[color:var(--color-brand-700)] sm:text-4xl">2</dd>
            </div>
          </dl>
        </div>

        {/* Visual placeholder — replace with R3F scene or hero artwork */}
        <div className="relative lg:col-span-5">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-gradient-to-br from-[color:var(--color-brand-600)] to-[color:var(--color-brand-900)] p-8 shadow-2xl">
            <div className="absolute inset-0 bg-[radial-gradient(at_top_right,white,transparent_40%)] opacity-15" />
            <div className="relative flex h-full flex-col justify-between text-white">
              <div className="text-xs font-semibold uppercase tracking-widest opacity-80">PSI Report</div>
              <div className="space-y-4">
                <div className="flex items-baseline gap-3">
                  <div className="text-7xl font-extrabold leading-none">99</div>
                  <div className="text-sm opacity-80">/100</div>
                </div>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="rounded-xl bg-white/10 p-3 backdrop-blur">
                    <div className="text-2xl font-bold">100</div>
                    <div className="text-xs opacity-80">Accessibility</div>
                  </div>
                  <div className="rounded-xl bg-white/10 p-3 backdrop-blur">
                    <div className="text-2xl font-bold">100</div>
                    <div className="text-xs opacity-80">Best Practices</div>
                  </div>
                  <div className="rounded-xl bg-white/10 p-3 backdrop-blur">
                    <div className="text-2xl font-bold">97</div>
                    <div className="text-xs opacity-80">SEO</div>
                  </div>
                  <div className="rounded-xl bg-white/10 p-3 backdrop-blur">
                    <div className="text-2xl font-bold">0.8s</div>
                    <div className="text-xs opacity-80">LCP</div>
                  </div>
                </div>
                <div className="text-xs opacity-70">golocksmithhonolulu.com — live</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
