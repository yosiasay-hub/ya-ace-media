import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import {
  Code2,
  Search,
  MapPin,
  Megaphone,
  MousePointerClick,
  ShieldCheck,
  Check,
  ArrowLeft,
  ArrowRight,
  Clock,
  Wallet
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
    home: 'דף הבית',
    services: 'שירותים',
    deliverables: 'מה תקבלו',
    idealFor: 'למי זה מתאים',
    serviceDetails: 'פרטי השירות',
    pricingModel: 'מודל תמחור',
    timeline: 'לוחות זמנים',
    requestQuote: 'בקשת הצעת מחיר',
    faqs: 'שאלות נפוצות',
    ctaTitle: 'מוכנים להתחיל?',
    ctaBody: 'שלחו לנו הודעה ונחזור אליכם תוך 24 שעות עם הצעה מותאמת לעסק שלכם.',
    ctaButton: 'צרו קשר'
  },
  en: {
    home: 'Home',
    services: 'Services',
    deliverables: 'What you get',
    idealFor: 'Who it’s for',
    serviceDetails: 'Service details',
    pricingModel: 'Pricing model',
    timeline: 'Timeline',
    requestQuote: 'Request a quote',
    faqs: 'Frequently asked questions',
    ctaTitle: 'Ready to get started?',
    ctaBody: 'Send me a message and I’ll get back to you within 24 hours with a proposal tailored to your business.',
    ctaButton: 'Get in touch'
  }
}[SITE_LOCALE];

export function generateStaticParams() {
  return SERVICES.map((service) => ({ slug: service.slug }));
}

export const dynamicParams = false;

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return {};
  return buildMetadata({
    locale: SITE_LOCALE,
    title: service.title[SITE_LOCALE],
    description: service.shortDescription[SITE_LOCALE],
    path: `/services/${slug}/`
  });
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const Icon = ICON_MAP[service.icon] ?? Code2;
  const paragraphs = service.longDescription[SITE_LOCALE]
    .split('\n\n')
    .map((p) => p.trim())
    .filter(Boolean);

  return (
    <>
      <Header />
      <main id="main">
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-b from-[color:var(--color-brand-50)] to-white pt-16 lg:pt-24">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10 opacity-40"
            style={{
              background:
                'radial-gradient(60% 40% at 50% 0%, var(--color-brand-200) 0%, transparent 70%)'
            }}
          />
          <div className="container-x pb-14 lg:pb-20">
            <nav aria-label={COPY.services} className="mb-8 text-sm text-[color:var(--color-ink-900)]/60">
              <Link href="/" className="hover:text-[color:var(--color-brand-600)]">
                {COPY.home}
              </Link>
              <span className="mx-2">/</span>
              <Link
                href="/services/"
                className="hover:text-[color:var(--color-brand-600)]"
              >
                {COPY.services}
              </Link>
              <span className="mx-2">/</span>
              <span className="text-[color:var(--color-ink-900)]/80">
                {service.title[SITE_LOCALE]}
              </span>
            </nav>

            <div className="flex flex-col items-start gap-6 lg:flex-row lg:items-center">
              <div className="inline-flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white text-[color:var(--color-brand-600)] shadow-md ring-1 ring-[color:var(--color-brand-200)]">
                <Icon className="h-8 w-8" aria-hidden />
              </div>
              <div>
                <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-[color:var(--color-ink-900)] sm:text-5xl lg:text-6xl">
                  {service.title[SITE_LOCALE]}
                </h1>
                <p className="mt-4 max-w-3xl text-base leading-relaxed text-[color:var(--color-ink-900)]/75 sm:text-lg">
                  {service.shortDescription[SITE_LOCALE]}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Body */}
        <section className="section-y">
          <div className="container-x grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <div className="space-y-5 text-base leading-relaxed text-[color:var(--color-ink-900)]/80 sm:text-lg">
                {paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>

              <div className="mt-12">
                <h2 className="text-2xl font-bold text-[color:var(--color-ink-900)] sm:text-3xl">
                  {COPY.deliverables}
                </h2>
                <ul className="mt-6 space-y-3">
                  {service.deliverables[SITE_LOCALE].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[color:var(--color-brand-50)] text-[color:var(--color-brand-600)]">
                        <Check className="h-3.5 w-3.5" aria-hidden />
                      </span>
                      <span className="text-[color:var(--color-ink-900)]/85">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-12">
                <h2 className="text-2xl font-bold text-[color:var(--color-ink-900)] sm:text-3xl">
                  {COPY.idealFor}
                </h2>
                <ul className="mt-6 space-y-3">
                  {service.idealFor[SITE_LOCALE].map((item, i) => (
                    <li
                      key={i}
                      className="relative rounded-xl border border-[color:var(--color-ink-900)]/8 bg-white p-4 text-[color:var(--color-ink-900)]/85"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-24 rounded-2xl border border-[color:var(--color-ink-900)]/8 bg-white p-6 shadow-sm">
                <h3 className="text-xs font-semibold uppercase tracking-widest text-[color:var(--color-brand-600)]">
                  {COPY.serviceDetails}
                </h3>

                <div className="mt-5 space-y-5">
                  <div className="flex items-start gap-3">
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[color:var(--color-brand-50)] text-[color:var(--color-brand-600)]">
                      <Wallet className="h-5 w-5" aria-hidden />
                    </span>
                    <div>
                      <div className="text-xs font-medium uppercase tracking-wider text-[color:var(--color-ink-900)]/60">
                        {COPY.pricingModel}
                      </div>
                      <div className="mt-1 text-sm font-semibold text-[color:var(--color-ink-900)]">
                        {service.pricingModel[SITE_LOCALE]}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[color:var(--color-brand-50)] text-[color:var(--color-brand-600)]">
                      <Clock className="h-5 w-5" aria-hidden />
                    </span>
                    <div>
                      <div className="text-xs font-medium uppercase tracking-wider text-[color:var(--color-ink-900)]/60">
                        {COPY.timeline}
                      </div>
                      <div className="mt-1 text-sm font-semibold text-[color:var(--color-ink-900)]">
                        {service.timeline[SITE_LOCALE]}
                      </div>
                    </div>
                  </div>
                </div>

                <a
                  href="/#contact"
                  className="btn-accent mt-6 w-full justify-center"
                >
                  {COPY.requestQuote}
                  <Arrow className="h-4 w-4" aria-hidden />
                </a>
              </div>
            </aside>
          </div>
        </section>

        {/* FAQs */}
        {service.faqs.length > 0 && (
          <section className="section-y bg-[color:var(--color-ink-50)]/40">
            <div className="container-x">
              <div className="mx-auto max-w-3xl">
                <h2 className="text-center text-3xl font-bold tracking-tight text-[color:var(--color-ink-900)] sm:text-4xl">
                  {COPY.faqs}
                </h2>
                <div className="mt-10 space-y-4">
                  {service.faqs.map((faq, i) => (
                    <details
                      key={i}
                      className="group rounded-xl border border-[color:var(--color-ink-900)]/10 bg-white p-5 open:shadow-md"
                    >
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold text-[color:var(--color-ink-900)]">
                        {faq.question[SITE_LOCALE]}
                        <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[color:var(--color-brand-50)] text-[color:var(--color-brand-600)] transition-transform group-open:rotate-45">
                          +
                        </span>
                      </summary>
                      <p className="mt-4 text-sm leading-relaxed text-[color:var(--color-ink-900)]/75 sm:text-base">
                        {faq.answer[SITE_LOCALE]}
                      </p>
                    </details>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="section-y">
          <div className="container-x">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[color:var(--color-brand-600)] to-[color:var(--color-brand-900)] p-10 text-center text-white sm:p-16">
              <div className="absolute inset-0 bg-[radial-gradient(at_top_right,white,transparent_40%)] opacity-10" />
              <div className="relative">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  {COPY.ctaTitle}
                </h2>
                <p className="mx-auto mt-4 max-w-xl text-base opacity-90 sm:text-lg">
                  {COPY.ctaBody}
                </p>
                <a
                  href="/#contact"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-[color:var(--color-brand-700)] transition hover:bg-[color:var(--color-brand-50)]"
                >
                  {COPY.ctaButton}
                  <Arrow className="h-4 w-4" aria-hidden />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
