import { useTranslations, useLocale } from 'next-intl';
import { ArrowLeft, ArrowRight, Sparkles, Gauge, MapPin, Bot } from 'lucide-react';
import type { Locale } from '@/i18n/routing';

export function Hero() {
  const t = useTranslations('hero');
  const locale = useLocale() as Locale;
  const Arrow = locale === 'he' ? ArrowLeft : ArrowRight;

  return (
    <section className="relative isolate overflow-hidden bg-white">
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

      <div className="container-x relative pb-16 pt-10 sm:pb-24 sm:pt-16 lg:grid lg:grid-cols-12 lg:items-center lg:gap-12 lg:pb-32 lg:pt-28">
        {/* Left — copy */}
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-2 rounded-full border border-[color:var(--color-brand-300)]/60 bg-white/80 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-[color:var(--color-brand-700)] shadow-sm backdrop-blur-md">
            <Sparkles className="h-3.5 w-3.5" aria-hidden />
            {t('badge')}
          </div>

          <h1 className="mt-6 text-[2.25rem] font-extrabold leading-[1.05] tracking-tight text-[color:var(--color-ink-900)] sm:text-6xl lg:text-7xl xl:text-[5.25rem]">
            {t('title')}
            <br />
            <span className="relative inline-block">
              <span className="bg-gradient-to-br from-[color:var(--color-brand-500)] via-[color:var(--color-brand-600)] to-[color:var(--color-brand-900)] bg-clip-text text-transparent">
                {t('titleHighlight')}
              </span>
              <span
                aria-hidden
                className="absolute inset-x-0 -bottom-1 h-[6px] rounded-full opacity-20"
                style={{
                  background:
                    'linear-gradient(90deg, var(--color-brand-500), var(--color-accent-500))'
                }}
              />
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-[color:var(--color-ink-900)]/75 sm:text-lg lg:max-w-2xl lg:text-xl">
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
        </div>

        {/* Right — premium layered visual. Compact on mobile, full on desktop. */}
        <div className="mt-12 lg:col-span-5 lg:mt-0">
          <div className="relative mx-auto aspect-[4/3] w-full max-w-sm sm:max-w-md lg:aspect-square">
            {/* Glow */}
            <div
              aria-hidden
              className="absolute inset-0 -z-10 rounded-full opacity-40 blur-3xl sm:opacity-50"
              style={{
                background:
                  'radial-gradient(circle, var(--color-brand-400), transparent 65%)'
              }}
            />

            {/* Main PSI card */}
            <div className="absolute inset-0 -translate-y-1 rotate-[-2deg] rounded-2xl bg-gradient-to-br from-[color:var(--color-brand-700)] via-[color:var(--color-brand-800)] to-[color:var(--color-ink-900)] p-5 shadow-2xl shadow-[color:var(--color-brand-900)]/30 sm:-translate-y-2 sm:rotate-[-3deg] sm:rounded-3xl sm:p-6">
              <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(at_top_right,white,transparent_45%)] opacity-15 sm:rounded-3xl" />
              <div className="relative flex h-full flex-col justify-between text-white">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-widest backdrop-blur sm:px-3 sm:text-[10px]">
                    <Gauge className="h-3 w-3" aria-hidden />
                    PageSpeed
                  </div>
                  <div className="text-[10px] font-mono opacity-60">●●●</div>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-end gap-2">
                    <div className="text-[4rem] font-extrabold leading-none tracking-tight sm:text-[5.5rem]">
                      99
                    </div>
                    <div className="pb-2 text-xs font-medium opacity-70 sm:pb-3 sm:text-sm">
                      / 100
                    </div>
                  </div>
                  <div className="grid grid-cols-4 gap-1.5 sm:grid-cols-2 sm:gap-2.5">
                    {[
                      { v: '100', l: 'A11y' },
                      { v: '100', l: 'BP' },
                      { v: '97', l: 'SEO' },
                      { v: '0.8s', l: 'LCP' }
                    ].map((m) => (
                      <div
                        key={m.l}
                        className="rounded-lg border border-white/15 bg-white/10 p-1.5 backdrop-blur sm:rounded-xl sm:p-2.5"
                      >
                        <div className="text-sm font-bold leading-none sm:text-xl">{m.v}</div>
                        <div className="mt-0.5 text-[9px] uppercase tracking-wider opacity-70 sm:mt-1 sm:text-[10px]">
                          {m.l}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Floating chip — Local SEO / Map Pack */}
            <div
              className="absolute -end-2 top-4 rotate-[6deg] rounded-2xl border border-white bg-white p-2.5 shadow-xl shadow-[color:var(--color-ink-900)]/10 sm:-end-4 sm:top-8 sm:p-3"
              style={{ animation: 'float-slow 6s ease-in-out infinite' }}
            >
              <div className="flex items-center gap-2">
                <div className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-[color:var(--color-brand-500)]/15 text-[color:var(--color-brand-700)] sm:h-8 sm:w-8">
                  <MapPin className="h-3.5 w-3.5 sm:h-4 sm:w-4" aria-hidden />
                </div>
                <div>
                  <div className="text-[9px] font-semibold uppercase tracking-wider text-[color:var(--color-ink-900)]/55 sm:text-[10px]">
                    Map Pack
                  </div>
                  <div className="text-sm font-bold text-[color:var(--color-ink-900)] sm:text-base">
                    #1 Rank
                  </div>
                </div>
              </div>
            </div>

            {/* Floating chip — GEO / AI Search */}
            <div
              className="absolute -start-3 bottom-6 -rotate-[5deg] rounded-2xl border border-white bg-white p-2.5 shadow-xl shadow-[color:var(--color-ink-900)]/10 sm:-start-6 sm:bottom-12 sm:p-3"
              style={{ animation: 'float-slow 7s ease-in-out 1s infinite' }}
            >
              <div className="flex items-center gap-2">
                <div className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-[color:var(--color-accent-500)]/20 to-[color:var(--color-brand-500)]/20 text-[color:var(--color-accent-600)] sm:h-8 sm:w-8">
                  <Bot className="h-3.5 w-3.5 sm:h-4 sm:w-4" aria-hidden />
                </div>
                <div>
                  <div className="text-[9px] font-semibold uppercase tracking-wider text-[color:var(--color-ink-900)]/55 sm:text-[10px]">
                    AI Search
                  </div>
                  <div className="text-sm font-bold text-[color:var(--color-ink-900)] sm:text-base">
                    GEO Ready
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
