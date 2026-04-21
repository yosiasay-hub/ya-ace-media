import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ABOUT } from '@/data/about-content';
import { SITE_LOCALE } from '@/lib/locale';
import { buildMetadata } from '@/lib/seo';
import { SITE } from '@/lib/site';
import { JsonLd } from '@/components/seo/JsonLd';
import { buildBreadcrumbJsonLd, buildPersonJsonLd } from '@/lib/schemas';

const Arrow = SITE_LOCALE === 'he' ? ArrowLeft : ArrowRight;

const COPY = {
  he: {
    eyebrow: 'About',
    title: 'אודות',
    storyTitle: 'הסיפור',
    principlesEyebrow: 'Principles',
    principlesTitle: 'העקרונות שמנחים אותי',
    whyTitle: 'למה YA Ace Media',
    credentialsEyebrow: 'Credentials',
    credentialsTitle: 'הסמכות ומומחיות',
    ctaTitle: 'מוכנים לדבר?',
    ctaBody: 'שיחת היכרות קצרה, בלי התחייבות. נבין אם אני האדם הנכון לפרויקט שלך.',
    ctaButton: 'צור קשר'
  },
  en: {
    eyebrow: 'About',
    title: 'About',
    storyTitle: 'The Story',
    principlesEyebrow: 'Principles',
    principlesTitle: 'The Principles That Guide Me',
    whyTitle: 'Why YA Ace Media',
    credentialsEyebrow: 'Credentials',
    credentialsTitle: 'Certifications & Expertise',
    ctaTitle: 'Ready to talk?',
    ctaBody: 'A short intro call, no commitment. We figure out if I am the right person for your project.',
    ctaButton: 'Get in touch'
  }
}[SITE_LOCALE];

const META = {
  he: {
    title: `אודות | ${SITE.name}`,
    description:
      'יוסי, מייסד YA Ace Media — מפתח Next.js ומומחה Local SEO עם למעלה מעשור ניסיון בבניית אתרים מהירים לעסקים בישראל ובארה״ב.'
  },
  en: {
    title: `About | ${SITE.name}`,
    description:
      'Meet Yossi, founder of YA Ace Media — Next.js developer and Local SEO specialist with 10+ years of experience building fast, conversion-focused websites for US and Israeli businesses.'
  }
}[SITE_LOCALE];

export const metadata = buildMetadata({
  locale: SITE_LOCALE,
  title: META.title,
  description: META.description,
  path: '/about/'
});

const NAV_LABELS = {
  he: { home: 'דף הבית', about: 'אודות' },
  en: { home: 'Home', about: 'About' }
}[SITE_LOCALE];

const BREADCRUMB_SCHEMA = buildBreadcrumbJsonLd({
  locale: SITE_LOCALE,
  segments: [
    { label: NAV_LABELS.home, path: '/' },
    { label: NAV_LABELS.about, path: '/about/' }
  ]
});

const PERSON_SCHEMA = buildPersonJsonLd({
  locale: SITE_LOCALE,
  name: ABOUT.founder.name,
  jobTitle: ABOUT.founder.role[SITE_LOCALE],
  path: '/about/'
});

export default function AboutPage() {
  const storyParagraphs = ABOUT.story[SITE_LOCALE].split('\n\n');
  const bioParagraphs = ABOUT.founder.bio[SITE_LOCALE].split('\n\n');

  return (
    <>
      <JsonLd data={[BREADCRUMB_SCHEMA, PERSON_SCHEMA]} />
      <Header />
      <main id="main">
        {/* Hero header */}
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
              <div className="mt-5 text-lg font-semibold text-[color:var(--color-brand-700)]">
                {ABOUT.founder.name} — {ABOUT.founder.role[SITE_LOCALE]}
              </div>
              <p className="mt-4 text-base leading-relaxed text-[color:var(--color-ink-900)]/75 sm:text-lg">
                {ABOUT.founder.bioShort[SITE_LOCALE]}
              </p>
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="section-y">
          <div className="container-x">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl font-bold tracking-tight text-[color:var(--color-ink-900)] sm:text-4xl">
                {COPY.storyTitle}
              </h2>
              <div className="mt-8 space-y-5 text-base leading-relaxed text-[color:var(--color-ink-900)]/80 sm:text-lg">
                {storyParagraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Founder bio */}
        <section className="section-y bg-[color:var(--color-brand-50)]/40">
          <div className="container-x">
            <div className="mx-auto max-w-4xl">
              <div className="grid gap-10 lg:grid-cols-12 lg:items-start lg:gap-14">
                {/* Portrait */}
                <div className="lg:col-span-5">
                  <div className="relative mx-auto aspect-[4/5] w-full max-w-sm">
                    {/* Tilted backdrop card */}
                    <div
                      aria-hidden
                      className="absolute inset-0 -rotate-3 rounded-[2rem] bg-gradient-to-br from-[color:var(--color-brand-500)] via-[color:var(--color-brand-700)] to-[color:var(--color-ink-950)] shadow-2xl shadow-[color:var(--color-brand-900)]/30"
                    />
                    {/* Photo frame */}
                    <div className="relative h-full w-full overflow-hidden rounded-[2rem] shadow-2xl ring-1 ring-[color:var(--color-ink-900)]/10">
                      <Image
                        src="/yossi-founder.jpg"
                        alt={`${ABOUT.founder.name} — ${ABOUT.founder.role[SITE_LOCALE]}`}
                        fill
                        priority
                        sizes="(min-width: 1024px) 420px, (min-width: 640px) 360px, 90vw"
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Copy */}
                <div className="lg:col-span-7">
                  <h2 className="text-2xl font-bold text-[color:var(--color-ink-900)] sm:text-3xl">
                    {ABOUT.founder.name}
                  </h2>
                  <div className="mt-1 text-sm font-semibold uppercase tracking-wider text-[color:var(--color-brand-700)]">
                    {ABOUT.founder.role[SITE_LOCALE]}
                  </div>
                  <div className="mt-6 space-y-4 text-base leading-relaxed text-[color:var(--color-ink-900)]/80">
                    {bioParagraphs.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Principles */}
        <section className="section-y">
          <div className="container-x">
            <div className="mx-auto max-w-2xl text-center">
              <div className="text-xs font-semibold uppercase tracking-widest text-[color:var(--color-brand-600)]">
                {COPY.principlesEyebrow}
              </div>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-[color:var(--color-ink-900)] sm:text-4xl lg:text-5xl">
                {COPY.principlesTitle}
              </h2>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
              {ABOUT.principles.map((principle, i) => (
                <article
                  key={i}
                  className="group relative overflow-hidden rounded-2xl border border-[color:var(--color-ink-900)]/8 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[color:var(--color-brand-300)] hover:shadow-xl"
                >
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[color:var(--color-brand-50)] text-sm font-bold text-[color:var(--color-brand-700)]">
                    {i + 1}
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-[color:var(--color-ink-900)]">
                    {principle.title[SITE_LOCALE]}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[color:var(--color-ink-900)]/70">
                    {principle.description[SITE_LOCALE]}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Why YA Ace Media */}
        <section className="section-y bg-[color:var(--color-brand-50)]/40">
          <div className="container-x">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl font-bold tracking-tight text-[color:var(--color-ink-900)] sm:text-4xl">
                {COPY.whyTitle}
              </h2>
              <ul className="mt-8 space-y-4">
                {ABOUT.whyYaAceMedia[SITE_LOCALE].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2
                      className="mt-0.5 h-5 w-5 shrink-0 text-[color:var(--color-brand-600)]"
                      aria-hidden
                    />
                    <span className="text-base leading-relaxed text-[color:var(--color-ink-900)]/85 sm:text-lg">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Credentials */}
        <section className="section-y">
          <div className="container-x">
            <div className="mx-auto max-w-3xl text-center">
              <div className="text-xs font-semibold uppercase tracking-widest text-[color:var(--color-brand-600)]">
                {COPY.credentialsEyebrow}
              </div>
              <h2 className="mt-3 text-2xl font-bold tracking-tight text-[color:var(--color-ink-900)] sm:text-3xl">
                {COPY.credentialsTitle}
              </h2>
              <div className="mt-8 flex flex-wrap justify-center gap-2.5">
                {ABOUT.credentials.map((credential, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center rounded-full border border-[color:var(--color-brand-200)] bg-white px-4 py-2 text-sm font-medium text-[color:var(--color-brand-800)] shadow-sm"
                  >
                    {credential}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-y">
          <div className="container-x">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[color:var(--color-brand-700)] via-[color:var(--color-brand-800)] to-[color:var(--color-ink-900)] px-6 py-16 text-center sm:px-12 sm:py-20">
              <div
                aria-hidden
                className="absolute inset-0 opacity-30"
                style={{
                  background:
                    'radial-gradient(circle at 30% 20%, var(--color-brand-400), transparent 50%)'
                }}
              />
              <div className="relative">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                  {COPY.ctaTitle}
                </h2>
                <p className="mt-4 text-base text-white/80 sm:text-lg">
                  {COPY.ctaBody}
                </p>
                <div className="mt-8">
                  <Link
                    href="/#contact"
                    prefetch={false}
                    className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-[color:var(--color-brand-700)] transition-all hover:bg-[color:var(--color-brand-50)] hover:shadow-2xl"
                  >
                    {COPY.ctaButton}
                    <Arrow className="h-5 w-5" aria-hidden />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
