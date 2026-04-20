import { useTranslations, useLocale } from 'next-intl';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import type { Locale } from '@/i18n/routing';
import { Reveal } from '@/components/Reveal';

export function CTA() {
  const t = useTranslations('cta');
  const locale = useLocale() as Locale;
  const Arrow = locale === 'he' ? ArrowLeft : ArrowRight;
  const href = '#contact';

  return (
    <section className="relative isolate overflow-hidden bg-[color:var(--color-ink-950)] text-white">
      {/* Layered background — brand glow + accent orb + grid + grain */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(70% 60% at 25% 30%, color-mix(in srgb, var(--color-brand-700) 70%, transparent), transparent 70%)'
          }}
        />
        <div
          className="absolute -bottom-32 end-[5%] h-[28rem] w-[28rem] rounded-full opacity-25 blur-3xl"
          style={{ background: 'radial-gradient(circle, var(--color-accent-500), transparent 60%)' }}
        />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)',
            backgroundSize: '64px 64px'
          }}
        />
      </div>

      <div className="container-x section-y">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-[color:var(--color-brand-300)] backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-accent-500)]" aria-hidden />
              Free 48h audit
            </div>
            <h2
              className="mt-6 font-extrabold leading-[0.98] tracking-[-0.03em] text-white"
              style={{ fontSize: 'clamp(2.25rem, 6vw, 5rem)' }}
            >
              {t('title')}
            </h2>
            <p className="mt-6 text-base text-white/75 sm:text-lg lg:text-xl">{t('subtitle')}</p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={href}
                className="group inline-flex min-h-12 items-center gap-2 rounded-full bg-[color:var(--color-accent-500)] px-8 py-4 text-base font-semibold text-white shadow-2xl shadow-[color:var(--color-accent-600)]/30 transition-all duration-300 hover:bg-[color:var(--color-accent-600)] hover:shadow-2xl"
              >
                {t('button')}
                <Arrow
                  className="h-5 w-5 transition-transform group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5"
                  aria-hidden
                />
              </a>
              <a
                href="#case-studies"
                className="inline-flex min-h-12 items-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-base font-semibold text-white backdrop-blur transition-colors hover:border-white/40 hover:bg-white/10"
              >
                {locale === 'he' ? 'ראה דוגמאות' : 'See examples'}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
