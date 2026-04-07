import Link from 'next/link';
import {
  Code2,
  Search,
  MapPin,
  Megaphone,
  MousePointerClick,
  ShieldCheck,
  ArrowLeft,
  ArrowRight
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { SERVICES } from '@/data/services-content';
import { SITE_LOCALE } from '@/lib/locale';
import { buildMetadata } from '@/lib/seo';

const Arrow = SITE_LOCALE === 'he' ? ArrowLeft : ArrowRight;

const ICON_MAP: Record<string, LucideIcon> = {
  Code2,
  Search,
  MapPin,
  Megaphone,
  MousePointerClick,
  ShieldCheck
};

const COPY = {
  he: {
    eyebrow: 'Services',
    title: 'השירותים שלנו',
    intro:
      'צוות אחד, סטאק מודרני, ותוצאות מדידות. מבניית האתר דרך קידום אורגני ועד קמפיינים ממומנים — כל מה שהעסק שלך צריך כדי לצמוח אונליין, בלי לעבוד מול חמישה ספקים שונים.',
    readMore: 'קרא עוד',
    notSureTitle: 'לא בטוחים איזה שירות מתאים לכם?',
    notSureBody:
      'בואו נעשה שיחת היכרות קצרה. אני אקשיב, אסתכל על האתר שלכם, ואגיד לכם בכנות מה הכי משתלם לכם לעשות — גם אם זה לא אצלי.',
    notSureCta: 'בואו נדבר',
    metaTitle: 'השירותים שלנו',
    metaDescription:
      'בניית אתרים ב-Next.js, קידום אורגני, Local SEO, קמפיינים ממומנים ואופטימיזציית המרות — הכל תחת קורת גג אחת.'
  },
  en: {
    eyebrow: 'Services',
    title: 'Our Services',
    intro:
      'One team, modern stack, measurable results. From website build to organic SEO and paid ads — everything your business needs to grow online, without juggling five different vendors.',
    readMore: 'Read more',
    notSureTitle: 'Not sure which service fits?',
    notSureBody:
      "Let's have a quick intro call. I'll listen, look at your site, and tell you honestly what makes the most sense for you — even if it's not with me.",
    notSureCta: "Let's talk",
    metaTitle: 'Our Services',
    metaDescription:
      'Next.js website development, organic SEO, Local SEO, paid ads, and conversion optimization — all under one roof.'
  }
}[SITE_LOCALE];

export const metadata = buildMetadata({
  locale: SITE_LOCALE,
  title: COPY.metaTitle,
  description: COPY.metaDescription,
  path: '/services/'
});

export default function ServicesIndexPage() {
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
          <div className="container-x pb-16 lg:pb-20">
            <div className="mx-auto max-w-3xl text-center">
              <div className="text-xs font-semibold uppercase tracking-widest text-[color:var(--color-brand-600)]">
                Services
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
              {SERVICES.map((service) => {
                const Icon = ICON_MAP[service.icon] ?? Code2;
                return (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}/`}
                    className="group relative flex flex-col overflow-hidden rounded-2xl border border-[color:var(--color-ink-900)]/8 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[color:var(--color-brand-300)] hover:shadow-xl"
                  >
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[color:var(--color-brand-50)] text-[color:var(--color-brand-600)] transition-colors group-hover:bg-[color:var(--color-brand-600)] group-hover:text-white">
                      <Icon className="h-6 w-6" aria-hidden />
                    </div>
                    <h2 className="mt-5 text-lg font-bold text-[color:var(--color-ink-900)]">
                      {service.title[SITE_LOCALE]}
                    </h2>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-[color:var(--color-ink-900)]/70">
                      {service.shortDescription[SITE_LOCALE]}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--color-brand-600)] group-hover:text-[color:var(--color-brand-700)]">
                      {COPY.readMore}
                      <Arrow className="h-4 w-4" aria-hidden />
                    </span>
                  </Link>
                );
              })}
            </div>

            <div className="mt-16 rounded-3xl bg-gradient-to-br from-[color:var(--color-brand-600)] to-[color:var(--color-brand-900)] p-8 text-center text-white sm:p-12">
              <h2 className="text-2xl font-bold sm:text-3xl">
                {COPY.notSureTitle}
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-sm opacity-90 sm:text-base">
                {COPY.notSureBody}
              </p>
              <a
                href="/#contact"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[color:var(--color-brand-700)] transition hover:bg-[color:var(--color-brand-50)]"
              >
                {COPY.notSureCta}
                <Arrow className="h-4 w-4" aria-hidden />
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
