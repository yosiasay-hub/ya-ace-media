import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { CASE_STUDIES, type CaseStudy } from '@/data/case-studies';
import { SITE_LOCALE } from '@/lib/locale';
import { buildMetadata } from '@/lib/seo';

const COPY = {
  he: {
    backToList: '→ חזרה לכל הפרויקטים',
    visitSite: 'לצפייה באתר החי',
    wantThis: 'רוצה אתר כזה',
    metricsEyebrow: 'מדדים בולטים',
    metricsTitle: 'התוצאות מדברות בעד עצמן',
    highlights: 'נקודות עיקריות בפרויקט',
    services: 'שירותים שסיפקנו',
    stack: 'טכנולוגיה',
    liveLink: 'קישור חי',
    ctaTitle: 'רוצים פרויקט דומה?',
    ctaBody: 'ספרו לנו על העסק שלכם ונחזור אליכם עם הצעה ממוקדת.',
    ctaButton: 'בואו נדבר'
  },
  en: {
    backToList: '← Back to all case studies',
    visitSite: 'Visit live site',
    wantThis: 'Want a site like this',
    metricsEyebrow: 'Key metrics',
    metricsTitle: 'The results speak for themselves',
    highlights: 'Project highlights',
    services: 'Services delivered',
    stack: 'Stack',
    liveLink: 'Live link',
    ctaTitle: 'Want a project like this?',
    ctaBody: "Tell me about your business and I'll come back with a focused proposal.",
    ctaButton: "Let's talk"
  }
}[SITE_LOCALE];

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return CASE_STUDIES.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = CASE_STUDIES.find((s) => s.slug === slug);
  if (!study) return { title: 'Case Study' };
  return buildMetadata({
    locale: SITE_LOCALE,
    title: study.name,
    description: study.description[SITE_LOCALE],
    path: `/case-studies/${slug}/`
  });
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const study = CASE_STUDIES.find((s) => s.slug === slug);
  if (!study) notFound();

  const location = study.city ? `${study.city}, ${study.country}` : study.country;

  return (
    <>
      <Header />
      <main id="main">
        <CaseStudyHero study={study} location={location} />

        {study.metrics && study.metrics.length > 0 ? (
          <MetricsSection metrics={study.metrics} />
        ) : null}

        <DetailsSection study={study} />

        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}

function CaseStudyHero({ study, location }: { study: CaseStudy; location: string }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[color:var(--color-brand-50)] to-white pt-16 lg:pt-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-40"
        style={{
          background:
            'radial-gradient(60% 40% at 50% 0%, var(--color-brand-200) 0%, transparent 70%)'
        }}
      />
      <div className="container-x pb-12 lg:pb-16">
        <div className="mb-6 flex items-center gap-3 text-xs font-semibold">
          <Link
            href="/case-studies/"
            prefetch={false}
            className="text-[color:var(--color-brand-700)] hover:underline"
          >
            {COPY.backToList}
          </Link>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center rounded-full bg-[color:var(--color-brand-50)] px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-[color:var(--color-brand-700)]">
            {study.industry}
          </span>
          <span className="inline-flex items-center rounded-full border border-[color:var(--color-ink-900)]/10 bg-white px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest text-[color:var(--color-ink-900)]/70">
            {study.market}
          </span>
          <span className="text-xs font-medium text-[color:var(--color-ink-900)]/60">
            {location}
          </span>
        </div>

        <h1 className="mt-4 text-4xl font-extrabold leading-[1.05] tracking-tight text-[color:var(--color-ink-900)] sm:text-5xl lg:text-6xl">
          {study.name}
        </h1>

        <p className="mt-6 max-w-3xl text-base leading-relaxed text-[color:var(--color-ink-900)]/75 sm:text-lg">
          {study.description[SITE_LOCALE]}
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href={study.url}
            target="_blank"
            rel="noopener nofollow"
            className="btn-primary text-base"
          >
            {COPY.visitSite}
          </a>
          <a href="/#contact" className="btn-accent text-base">
            {COPY.wantThis}
          </a>
        </div>
      </div>
    </section>
  );
}

function MetricsSection({ metrics }: { metrics: NonNullable<CaseStudy['metrics']> }) {
  return (
    <section className="border-y border-[color:var(--color-ink-900)]/8 bg-[color:var(--color-ink-50)]/50 py-12 lg:py-16">
      <div className="container-x">
        <div className="text-xs font-semibold uppercase tracking-widest text-[color:var(--color-brand-600)]">
          {COPY.metricsEyebrow}
        </div>
        <h2 className="mt-2 text-2xl font-bold tracking-tight text-[color:var(--color-ink-900)] sm:text-3xl">
          {COPY.metricsTitle}
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[color:var(--color-brand-600)] to-[color:var(--color-brand-900)] p-6 text-white shadow-xl"
            >
              <div className="absolute inset-0 bg-[radial-gradient(at_top_right,white,transparent_40%)] opacity-15" />
              <div className="relative">
                <div className="text-3xl font-extrabold leading-tight sm:text-4xl">
                  {metric.value}
                </div>
                <div className="mt-2 text-xs font-medium uppercase tracking-wider opacity-80">
                  {metric.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DetailsSection({ study }: { study: CaseStudy }) {
  return (
    <section className="section-y">
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            {study.highlights && study.highlights[SITE_LOCALE].length > 0 ? (
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-[color:var(--color-ink-900)] sm:text-3xl">
                  {COPY.highlights}
                </h2>
                <ul className="mt-6 space-y-3">
                  {study.highlights[SITE_LOCALE].map((highlight, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 rounded-xl border border-[color:var(--color-ink-900)]/8 bg-white p-4"
                    >
                      <span
                        aria-hidden
                        className="mt-1 inline-block h-2 w-2 flex-shrink-0 rounded-full bg-[color:var(--color-brand-600)]"
                      />
                      <span className="text-sm leading-relaxed text-[color:var(--color-ink-900)]/80">
                        {highlight}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>

          <aside className="space-y-8">
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-[color:var(--color-ink-900)]/60">
                {COPY.services}
              </h3>
              <ul className="mt-4 space-y-2">
                {study.services.map((service) => (
                  <li
                    key={service}
                    className="text-sm font-medium text-[color:var(--color-ink-900)]/80"
                  >
                    · {service}
                  </li>
                ))}
              </ul>
            </div>

            {study.stack && study.stack.length > 0 ? (
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-widest text-[color:var(--color-ink-900)]/60">
                  {COPY.stack}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {study.stack.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center rounded-full border border-[color:var(--color-brand-200)] bg-[color:var(--color-brand-50)] px-3 py-1 text-xs font-semibold text-[color:var(--color-brand-700)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ) : null}

            <div className="rounded-2xl border border-[color:var(--color-ink-900)]/8 bg-[color:var(--color-ink-50)]/50 p-5">
              <div className="text-xs font-semibold uppercase tracking-widest text-[color:var(--color-ink-900)]/60">
                {COPY.liveLink}
              </div>
              <a
                href={study.url}
                target="_blank"
                rel="noopener nofollow"
                className="mt-2 block break-words text-sm font-semibold text-[color:var(--color-brand-700)] hover:underline"
              >
                {study.url.replace(/^https?:\/\//, '')}
              </a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="section-y bg-[color:var(--color-ink-50)]/40">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[color:var(--color-ink-900)] sm:text-4xl">
            {COPY.ctaTitle}
          </h2>
          <p className="mt-3 text-base text-[color:var(--color-ink-900)]/70 sm:text-lg">
            {COPY.ctaBody}
          </p>
          <div className="mt-6 flex justify-center">
            <a href="/#contact" className="btn-accent text-base">
              {COPY.ctaButton}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
