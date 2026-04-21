import { useTranslations, useLocale } from 'next-intl';
import { ArrowLeft, ArrowRight, Sparkles, Gauge, MapPin, Bot } from 'lucide-react';
import type { Locale } from '@/i18n/routing';
import { PSIShowcase } from './PSIShowcase';
import { Reveal } from '@/components/Reveal';

export function Hero() {
  const t = useTranslations('hero');
  const locale = useLocale() as Locale;
  const Arrow = locale === 'he' ? ArrowLeft : ArrowRight;

  return (
    <section className="relative isolate grain overflow-hidden bg-white">
      {/* Premium background — layered gradient mesh + orbs */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(60% 50% at 50% 0%, color-mix(in srgb, var(--color-brand-200) 65%, transparent) 0%, transparent 70%)'
          }}
        />
        <div
          className="absolute -top-32 start-[10%] h-[28rem] w-[28rem] rounded-full opacity-50 blur-3xl"
          style={{ background: 'radial-gradient(circle, var(--color-brand-300), transparent 60%)' }}
        />
        <div
          className="absolute top-20 end-[5%] h-[22rem] w-[22rem] rounded-full opacity-40 blur-3xl"
          style={{ background: 'radial-gradient(circle, var(--color-accent-500), transparent 60%)' }}
        />
        {/* Subtle grid pattern for texture */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              'linear-gradient(to right, var(--color-ink-900) 1px, transparent 1px), linear-gradient(to bottom, var(--color-ink-900) 1px, transparent 1px)',
            backgroundSize: '48px 48px'
          }}
        />
        <div
          className="absolute inset-x-0 bottom-0 h-px"
          style={{
            background:
              'linear-gradient(to right, transparent, color-mix(in srgb, var(--color-ink-900) 12%, transparent), transparent)'
          }}
        />
      </div>

      <div className="container-x relative pb-20 pt-12 sm:pb-28 sm:pt-20 lg:grid lg:grid-cols-12 lg:items-center lg:gap-12 lg:pb-36 lg:pt-32">
        {/* Left — copy */}
        <Reveal className="lg:col-span-7">
          <div className="inline-flex items-center gap-2 rounded-full border border-[color:var(--color-brand-300)]/60 bg-white/80 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-[color:var(--color-brand-700)] shadow-sm backdrop-blur-md">
            <Sparkles className="h-3.5 w-3.5" aria-hidden />
            {t('badge')}
          </div>

          <h1
            className="mt-7 font-extrabold leading-[0.98] tracking-[-0.03em] text-[color:var(--color-ink-900)]"
            style={{ fontSize: 'clamp(2.5rem, 7.5vw, 6.25rem)' }}
          >
            {t('title')}
            <br />
            <span className="relative inline-block italic tracking-tighter">
              <span className="bg-gradient-to-br from-[color:var(--color-brand-400)] via-[color:var(--color-brand-600)] to-[color:var(--color-brand-900)] bg-clip-text text-transparent">
                {t('titleHighlight')}
              </span>
              <span
                aria-hidden
                className="absolute inset-x-0 -bottom-1 h-[6px] rounded-full opacity-25"
                style={{
                  background:
                    'linear-gradient(90deg, var(--color-brand-500), var(--color-accent-500))'
                }}
              />
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-[15px] leading-relaxed text-[color:var(--color-ink-900)]/75 sm:text-lg lg:max-w-2xl lg:text-xl">
            {t('subtitle')}
          </p>

          {/* Capability chips — visible on all viewports, communicate service breadth */}
          <ul className="mt-6 flex flex-wrap gap-2">
            <li className="inline-flex items-center gap-1.5 rounded-full border border-[color:var(--color-brand-200)] bg-white/80 px-3 py-1.5 text-xs font-semibold text-[color:var(--color-brand-800)] shadow-sm backdrop-blur">
              <Gauge className="h-3.5 w-3.5" aria-hidden />
              PSI 95+
            </li>
            <li className="inline-flex items-center gap-1.5 rounded-full border border-[color:var(--color-brand-200)] bg-white/80 px-3 py-1.5 text-xs font-semibold text-[color:var(--color-brand-800)] shadow-sm backdrop-blur">
              <Sparkles className="h-3.5 w-3.5" aria-hidden />
              Organic SEO
            </li>
            <li className="inline-flex items-center gap-1.5 rounded-full border border-[color:var(--color-brand-200)] bg-white/80 px-3 py-1.5 text-xs font-semibold text-[color:var(--color-brand-800)] shadow-sm backdrop-blur">
              <MapPin className="h-3.5 w-3.5" aria-hidden />
              Local SEO
            </li>
            <li className="inline-flex items-center gap-1.5 rounded-full border border-[color:var(--color-accent-500)]/30 bg-gradient-to-r from-[color:var(--color-accent-500)]/10 to-[color:var(--color-brand-500)]/10 px-3 py-1.5 text-xs font-semibold text-[color:var(--color-accent-600)] shadow-sm backdrop-blur">
              <Bot className="h-3.5 w-3.5" aria-hidden />
              GEO / AI Search
            </li>
          </ul>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-[color:var(--color-ink-900)] px-6 py-3.5 text-sm font-semibold text-white shadow-xl shadow-[color:var(--color-ink-900)]/15 transition-all duration-300 hover:bg-[color:var(--color-brand-700)] hover:shadow-2xl hover:shadow-[color:var(--color-brand-700)]/25 sm:px-7 sm:py-4 sm:text-base"
            >
              {t('ctaPrimary')}
              <Arrow
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5"
                aria-hidden
              />
            </a>
            <a
              href="#case-studies"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[color:var(--color-ink-900)]/15 bg-white/70 px-6 py-3.5 text-sm font-semibold text-[color:var(--color-ink-900)] backdrop-blur-md transition-all duration-300 hover:border-[color:var(--color-brand-600)] hover:text-[color:var(--color-brand-700)] sm:px-7 sm:py-4 sm:text-base"
            >
              {t('ctaSecondary')}
            </a>
          </div>
        </Reveal>

        {/* Right — animated PSI showcase */}
        <Reveal delay={200} className="mt-14 lg:col-span-5 lg:mt-0">
          <PSIShowcase />
        </Reveal>
      </div>
    </section>
  );
}
