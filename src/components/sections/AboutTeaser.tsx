import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import type { Locale } from '@/i18n/routing';
import { Reveal } from '@/components/Reveal';

export function AboutTeaser() {
  const t = useTranslations('aboutTeaser');
  const locale = useLocale() as Locale;
  const Arrow = locale === 'he' ? ArrowLeft : ArrowRight;

  return (
    <section className="section-y relative overflow-hidden bg-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(55% 40% at 10% 50%, color-mix(in srgb, var(--color-brand-100) 70%, transparent), transparent 65%)'
        }}
      />

      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
          {/* Left: portrait placeholder — gradient + monogram */}
          <Reveal className="lg:col-span-5">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-md">
              {/* Background card (tilted) */}
              <div
                aria-hidden
                className="absolute inset-0 -rotate-3 rounded-[2rem] bg-gradient-to-br from-[color:var(--color-brand-500)] via-[color:var(--color-brand-700)] to-[color:var(--color-ink-950)] shadow-2xl shadow-[color:var(--color-brand-900)]/30"
              />
              {/* Foreground card */}
              <div
                className="relative flex h-full w-full items-end overflow-hidden rounded-[2rem] bg-gradient-to-br from-[color:var(--color-ink-900)] via-[color:var(--color-brand-900)] to-[color:var(--color-brand-700)] p-8 shadow-2xl"
                style={{
                  backgroundImage:
                    'radial-gradient(circle at 70% 20%, color-mix(in srgb, var(--color-brand-400) 50%, transparent) 0%, transparent 50%), linear-gradient(135deg, var(--color-ink-900), var(--color-brand-800) 60%, var(--color-brand-700))'
                }}
              >
                {/* Grain overlay */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 opacity-20 mix-blend-overlay"
                  style={{
                    backgroundImage:
                      "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")"
                  }}
                />
                {/* Monogram */}
                <div
                  aria-hidden
                  className="absolute start-8 top-8 font-mono text-[11rem] font-black leading-none tracking-tighter text-white/10"
                >
                  Y
                </div>
                {/* Footer card */}
                <div className="relative w-full rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-md">
                  <div className="text-xs font-semibold uppercase tracking-widest text-[color:var(--color-brand-300)]">
                    Founder · Developer
                  </div>
                  <div className="mt-1 text-2xl font-bold text-white">Yossi</div>
                  <div className="mt-1 text-xs text-white/75">
                    Galilee, Israel — serving IL + US
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right: copy + stats */}
          <Reveal delay={200} className="lg:col-span-7">
            <div className="text-xs font-semibold uppercase tracking-widest text-[color:var(--color-brand-600)]">
              {t('eyebrow')}
            </div>
            <h2
              className="mt-3 font-extrabold leading-[1] tracking-[-0.03em] text-[color:var(--color-ink-900)]"
              style={{ fontSize: 'clamp(2.25rem, 5.5vw, 4.5rem)' }}
            >
              {t('title')}
              <br />
              <span className="italic tracking-tighter text-[color:var(--color-brand-500)]">
                {t('titleHighlight')}
              </span>
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-[color:var(--color-ink-900)]/75 sm:text-lg">
              {t('body')}
            </p>

            <dl className="mt-8 grid grid-cols-3 gap-4 sm:max-w-lg sm:gap-6">
              <div className="rounded-2xl border border-[color:var(--color-ink-900)]/8 bg-white p-4 shadow-sm">
                <dt className="text-[10px] font-semibold uppercase tracking-widest text-[color:var(--color-ink-900)]/55">
                  {t('stats.years')}
                </dt>
                <dd className="mt-1 text-2xl font-extrabold tracking-tight text-[color:var(--color-brand-600)] sm:text-3xl">
                  {t('stats.yearsValue')}
                </dd>
              </div>
              <div className="rounded-2xl border border-[color:var(--color-ink-900)]/8 bg-white p-4 shadow-sm">
                <dt className="text-[10px] font-semibold uppercase tracking-widest text-[color:var(--color-ink-900)]/55">
                  {t('stats.clients')}
                </dt>
                <dd className="mt-1 text-2xl font-extrabold tracking-tight text-[color:var(--color-brand-600)] sm:text-3xl">
                  {t('stats.clientsValue')}
                </dd>
              </div>
              <div className="rounded-2xl border border-[color:var(--color-ink-900)]/8 bg-white p-4 shadow-sm">
                <dt className="text-[10px] font-semibold uppercase tracking-widest text-[color:var(--color-ink-900)]/55">
                  {t('stats.markets')}
                </dt>
                <dd className="mt-1 text-2xl font-extrabold tracking-tight text-[color:var(--color-brand-600)] sm:text-3xl">
                  {t('stats.marketsValue')}
                </dd>
              </div>
            </dl>

            <Link
              href="/about/"
              prefetch={false}
              className="group mt-9 inline-flex items-center gap-2 rounded-full bg-[color:var(--color-ink-900)] px-6 py-3.5 text-sm font-semibold text-white shadow-xl shadow-[color:var(--color-ink-900)]/15 transition-all duration-300 hover:bg-[color:var(--color-brand-700)] hover:shadow-2xl hover:shadow-[color:var(--color-brand-700)]/25 sm:text-base"
            >
              {t('cta')}
              <Arrow className="h-4 w-4 transition-transform group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5" aria-hidden />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
