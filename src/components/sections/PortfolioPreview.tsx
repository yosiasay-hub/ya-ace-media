import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { ArrowLeft, ArrowRight, ExternalLink, Gauge } from 'lucide-react';
import type { Locale } from '@/i18n/routing';
import { Reveal } from '@/components/Reveal';

interface PortfolioItem {
  slug: string;
  key: 'eagleGarageDoor' | 'kamaainaLocksmith' | 'locksmith970';
  url: string;
  tags: string[];
  rot: string;
  accent: string;
}

const ITEMS: PortfolioItem[] = [
  {
    slug: 'eagle-garage-door',
    key: 'eagleGarageDoor',
    url: 'https://eaglegaragedoorservices.com',
    tags: ['Next.js', 'Local SEO', 'Lead Gen'],
    rot: '-rotate-2',
    accent: 'from-[color:var(--color-brand-500)]/20 to-transparent'
  },
  {
    slug: 'kamaaina-locksmith',
    key: 'kamaainaLocksmith',
    url: 'https://golocksmithhonolulu.com',
    tags: ['Local SEO', 'GBP', 'Mobile'],
    rot: 'rotate-1',
    accent: 'from-[color:var(--color-accent-500)]/20 to-transparent'
  },
  {
    slug: '970-locksmith-fort-collins',
    key: 'locksmith970',
    url: 'https://970locksmithservices.tech',
    tags: ['Next.js', 'PSI 100', 'Conversion'],
    rot: '-rotate-1',
    accent: 'from-[color:var(--color-brand-500)]/20 to-transparent'
  }
];

export function PortfolioPreview() {
  const t = useTranslations('portfolioPreview');
  const locale = useLocale() as Locale;
  const Arrow = locale === 'he' ? ArrowLeft : ArrowRight;

  return (
    <section className="section-y relative overflow-hidden bg-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(50% 40% at 80% 20%, color-mix(in srgb, var(--color-brand-100) 80%, transparent), transparent 65%)'
        }}
      />

      <div className="container-x">
        <div className="flex flex-col items-end justify-between gap-8 sm:flex-row sm:items-end">
          <Reveal className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-widest text-[color:var(--color-brand-600)]">
              {t('eyebrow')}
            </div>
            <h2 className="mt-3 text-4xl font-bold leading-[1.05] tracking-tight text-[color:var(--color-ink-900)] sm:text-5xl lg:text-6xl">
              {t('title')}{' '}
              <span className="italic tracking-tighter text-[color:var(--color-brand-500)]">
                {t('titleHighlight')}
              </span>
            </h2>
            <p className="mt-5 max-w-xl text-base text-[color:var(--color-ink-900)]/70 sm:text-lg">
              {t('subtitle')}
            </p>
          </Reveal>
          <Reveal delay={100}>
            <Link
              href="/case-studies/"
              prefetch={false}
              className="group inline-flex items-center gap-2 rounded-full border border-[color:var(--color-ink-900)]/15 bg-white px-5 py-3 text-sm font-semibold text-[color:var(--color-ink-900)] transition-all hover:border-[color:var(--color-brand-600)] hover:text-[color:var(--color-brand-700)]"
            >
              {t('viewAll')}
              <Arrow className="h-4 w-4 transition-transform group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5" aria-hidden />
            </Link>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3 lg:gap-8">
          {ITEMS.map((item, i) => (
            <Reveal key={item.slug} delay={((i % 3) * 100) as 0 | 100 | 200} className={i === 1 ? 'sm:mt-12' : ''}>
              <PortfolioCard item={item} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function PortfolioCard({ item }: { item: PortfolioItem }) {
  const t = useTranslations('portfolioPreview');
  const locale = useLocale() as Locale;
  const Arrow = locale === 'he' ? ArrowLeft : ArrowRight;

  return (
    <article
      className={`group relative h-full overflow-hidden rounded-3xl border border-[color:var(--color-ink-900)]/8 bg-white p-7 shadow-[0_4px_24px_-8px_rgba(10,14,39,0.08)] transition-all duration-500 ${item.rot} hover:rotate-0 hover:-translate-y-1 hover:shadow-[0_24px_60px_-16px_rgba(2,116,190,0.28)]`}
    >
      <div
        aria-hidden
        className={`pointer-events-none absolute inset-0 -z-0 bg-gradient-to-br ${item.accent} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
      />

      {/* Header — PSI badge + tags */}
      <div className="relative flex items-start justify-between gap-3">
        <div className="inline-flex items-center gap-1.5 rounded-full border border-[color:var(--color-brand-300)] bg-white px-3 py-1 text-[11px] font-bold tracking-wide text-[color:var(--color-brand-700)] shadow-sm">
          <Gauge className="h-3.5 w-3.5" aria-hidden />
          PSI {t(`items.${item.key}.psi`)}
        </div>
        <a
          href={item.url}
          target="_blank"
          rel="noopener nofollow"
          className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[color:var(--color-ink-900)]/10 bg-white text-[color:var(--color-ink-900)]/60 transition-all hover:border-[color:var(--color-brand-500)] hover:text-[color:var(--color-brand-600)]"
          aria-label={t('viewLive')}
        >
          <ExternalLink className="h-4 w-4" aria-hidden />
        </a>
      </div>

      <h3 className="relative mt-6 text-xl font-bold leading-tight tracking-tight text-[color:var(--color-ink-900)]">
        {t(`items.${item.key}.title`)}
      </h3>
      <div className="relative mt-1 text-xs font-medium uppercase tracking-wider text-[color:var(--color-ink-900)]/55">
        {t(`items.${item.key}.location`)}
      </div>

      <p className="relative mt-4 text-sm leading-relaxed text-[color:var(--color-ink-900)]/75">
        {t(`items.${item.key}.blurb`)}
      </p>

      <div className="relative mt-5 flex flex-wrap gap-1.5">
        {item.tags.map((tag) => (
          <span
            key={tag}
            className="inline-flex items-center rounded-full bg-[color:var(--color-brand-50)] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-[color:var(--color-brand-700)]"
          >
            {tag}
          </span>
        ))}
      </div>

      <Link
        href={`/case-studies/${item.slug}/`}
        prefetch={false}
        className="relative mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[color:var(--color-brand-700)] transition-colors hover:text-[color:var(--color-brand-800)]"
      >
        {t('viewLive')}
        <Arrow className="h-4 w-4 transition-transform group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5" aria-hidden />
      </Link>
    </article>
  );
}
