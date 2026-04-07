import { useTranslations, useLocale } from 'next-intl';
import { ArrowLeft, ArrowRight, Sparkles, Zap, Globe2, Gauge } from 'lucide-react';
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
        <div
          className="absolute inset-x-0 bottom-0 h-px"
          style={{
            background:
              'linear-gradient(to right, transparent, color-mix(in srgb, var(--color-ink-900) 12%, transparent), transparent)'
          }}
        />
      </div>

      <div className="container-x relative pb-20 pt-14 sm:pb-28 sm:pt-20 lg:grid lg:grid-cols-12 lg:items-center lg:gap-12 lg:pb-32 lg:pt-28">
        {/* Left — copy */}
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-2 rounded-full border border-[color:var(--color-brand-300)]/60 bg-white/80 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-[color:var(--color-brand-700)] shadow-sm backdrop-blur-md">
            <Sparkles className="h-3.5 w-3.5" aria-hidden />
            {t('badge')}
          </div>

          <h1 className="mt-7 text-[2.5rem] font-extrabold leading-[1.02] tracking-tight text-[color:var(--color-ink-900)] sm:text-6xl lg:text-7xl xl:text-[5.25rem]">
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

          <p className="mt-7 max-w-xl text-base leading-relaxed text-[color:var(--color-ink-900)]/70 sm:text-lg lg:max-w-2xl lg:text-xl">
            {t('subtitle')}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-[color:var(--color-ink-900)] px-7 py-4 text-base font-semibold text-white shadow-xl shadow-[color:var(--color-ink-900)]/15 transition-all duration-300 hover:bg-[color:var(--color-brand-700)] hover:shadow-2xl hover:shadow-[color:var(--color-brand-700)]/25"
            >
              {t('ctaPrimary')}
              <Arrow
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5"
                aria-hidden
              />
            </a>
            <a
              href="#case-studies"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[color:var(--color-ink-900)]/15 bg-white/70 px-7 py-4 text-base font-semibold text-[color:var(--color-ink-900)] backdrop-blur-md transition-all duration-300 hover:border-[color:var(--color-brand-600)] hover:text-[color:var(--color-brand-700)]"
            >
              {t('ctaSecondary')}
            </a>
          </div>
        </div>

        {/* Right — premium layered visual (desktop only) */}
        <div className="relative mt-14 hidden lg:col-span-5 lg:mt-0 lg:block">
          <div className="relative mx-auto aspect-square w-full max-w-md">
            {/* Glow */}
            <div
              aria-hidden
              className="absolute inset-0 -z-10 rounded-full opacity-50 blur-3xl"
              style={{
                background:
                  'radial-gradient(circle, var(--color-brand-400), transparent 65%)'
              }}
            />

            {/* Main PSI card */}
            <div className="absolute inset-0 -translate-y-2 rotate-[-3deg] rounded-3xl bg-gradient-to-br from-[color:var(--color-brand-700)] via-[color:var(--color-brand-800)] to-[color:var(--color-ink-900)] p-6 shadow-2xl shadow-[color:var(--color-brand-900)]/30">
              <div className="absolute inset-0 rounded-3xl bg-[radial-gradient(at_top_right,white,transparent_45%)] opacity-15" />
              <div className="relative flex h-full flex-col justify-between text-white">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest backdrop-blur">
                    <Gauge className="h-3 w-3" aria-hidden />
                    PageSpeed
                  </div>
                  <div className="text-[10px] font-mono opacity-60">●●●</div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-end gap-2">
                    <div className="text-[5.5rem] font-extrabold leading-none tracking-tight">99</div>
                    <div className="pb-3 text-sm font-medium opacity-70">/ 100</div>
                  </div>
                  <div className="grid grid-cols-2 gap-2.5">
                    {[
                      { v: '100', l: 'A11y' },
                      { v: '100', l: 'BP' },
                      { v: '97', l: 'SEO' },
                      { v: '0.8s', l: 'LCP' }
                    ].map((m) => (
                      <div
                        key={m.l}
                        className="rounded-xl border border-white/15 bg-white/10 p-2.5 backdrop-blur"
                      >
                        <div className="text-xl font-bold leading-none">{m.v}</div>
                        <div className="mt-1 text-[10px] uppercase tracking-wider opacity-70">{m.l}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Floating chip — speed */}
            <div
              className="absolute -end-4 top-8 rotate-[6deg] rounded-2xl border border-white bg-white p-3 shadow-xl shadow-[color:var(--color-ink-900)]/10"
              style={{ animation: 'float-slow 6s ease-in-out infinite' }}
            >
              <div className="flex items-center gap-2">
                <div className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-[color:var(--color-accent-500)]/15 text-[color:var(--color-accent-600)]">
                  <Zap className="h-4 w-4" aria-hidden />
                </div>
                <div>
                  <div className="text-[10px] font-semibold uppercase tracking-wider text-[color:var(--color-ink-900)]/55">
                    LCP
                  </div>
                  <div className="text-base font-bold text-[color:var(--color-ink-900)]">0.8s</div>
                </div>
              </div>
            </div>

            {/* Floating chip — global */}
            <div
              className="absolute -start-6 bottom-12 -rotate-[5deg] rounded-2xl border border-white bg-white p-3 shadow-xl shadow-[color:var(--color-ink-900)]/10"
              style={{ animation: 'float-slow 7s ease-in-out 1s infinite' }}
            >
              <div className="flex items-center gap-2">
                <div className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-[color:var(--color-brand-500)]/15 text-[color:var(--color-brand-700)]">
                  <Globe2 className="h-4 w-4" aria-hidden />
                </div>
                <div>
                  <div className="text-[10px] font-semibold uppercase tracking-wider text-[color:var(--color-ink-900)]/55">
                    Edge
                  </div>
                  <div className="text-base font-bold text-[color:var(--color-ink-900)]">300+ POPs</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
