import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { CASE_STUDIES, type CaseStudy } from '@/data/case-studies';
import { SITE_LOCALE } from '@/lib/locale';
import { buildMetadata } from '@/lib/seo';

const ARROW = SITE_LOCALE === 'he' ? '←' : '→';
const HOVER_TRANSLATE = SITE_LOCALE === 'he' ? 'group-hover:-translate-x-1' : 'group-hover:translate-x-1';

const COPY = {
  he: {
    eyebrow: 'Case Studies',
    title: 'עבודות ותיקי לקוחות',
    intro:
      'מבחר פרויקטים שבנינו עבור עסקים מובילים בישראל ובארצות הברית — אתרי Next.js מהירים במיוחד, קידום מקומי וארכיטקטורת SEO שמביאה לקוחות אמיתיים.',
    metaDescription:
      'תיקי לקוחות נבחרים של YA Ace Media — אתרי Next.js מהירים, קידום מקומי וחוויות משתמש שממירות, בישראל ובארה"ב.',
    viewProject: 'לצפייה בפרויקט'
  },
  en: {
    eyebrow: 'Case Studies',
    title: 'Client Work',
    intro:
      "A selection of websites I've built and grown for service businesses across the US and Israel. Each one engineered for speed, search visibility, and measurable conversions.",
    metaDescription:
      'Selected YA Ace Media case studies — fast Next.js websites, Local SEO, and conversion-focused UX for service businesses in the US and Israel.',
    viewProject: 'View project'
  }
}[SITE_LOCALE];

export const metadata = buildMetadata({
  locale: SITE_LOCALE,
  title: COPY.title,
  description: COPY.metaDescription,
  path: '/case-studies/'
});

export default function CaseStudiesIndexPage() {
  return (
    <>
      <Header />
      <main id="main">
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
            <div className="mx-auto max-w-3xl text-center">
              <div className="text-xs font-semibold uppercase tracking-widest text-[color:var(--color-brand-600)]">
                {COPY.eyebrow}
              </div>
              <h1 className="mt-3 text-4xl font-extrabold leading-[1.1] tracking-tight text-[color:var(--color-ink-900)] sm:text-5xl lg:text-6xl">
                {COPY.title}
              </h1>
              <p className="mt-5 text-base leading-relaxed text-[color:var(--color-ink-900)]/75 sm:text-lg">
                {COPY.intro}
              </p>
            </div>
          </div>
        </section>

        <section className="section-y">
          <div className="container-x">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {CASE_STUDIES.map((study) => (
                <CaseStudyCard key={study.slug} study={study} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function CaseStudyCard({ study }: { study: CaseStudy }) {
  const location = study.city ? `${study.city}, ${study.country}` : study.country;

  return (
    <Link
      href={`/case-studies/${study.slug}/`}
      prefetch={false}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-[color:var(--color-ink-900)]/8 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[color:var(--color-brand-300)] hover:shadow-xl"
    >
      <div className="flex items-center justify-between gap-3">
        <span className="inline-flex items-center rounded-full bg-[color:var(--color-brand-50)] px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-[color:var(--color-brand-700)]">
          {study.industry}
        </span>
        <span className="inline-flex items-center rounded-full border border-[color:var(--color-ink-900)]/10 bg-white px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest text-[color:var(--color-ink-900)]/70">
          {study.market}
        </span>
      </div>

      <h2 className="mt-5 text-xl font-bold leading-tight text-[color:var(--color-ink-900)] transition-colors group-hover:text-[color:var(--color-brand-700)]">
        {study.name}
      </h2>
      <div className="mt-1 text-xs font-medium text-[color:var(--color-ink-900)]/60">
        {location}
      </div>

      <p className="mt-4 line-clamp-4 text-sm leading-relaxed text-[color:var(--color-ink-900)]/75">
        {study.description[SITE_LOCALE]}
      </p>

      <div className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[color:var(--color-brand-700)]">
        {COPY.viewProject}
        <span aria-hidden className={`transition-transform ${HOVER_TRANSLATE}`}>{ARROW}</span>
      </div>
    </Link>
  );
}
