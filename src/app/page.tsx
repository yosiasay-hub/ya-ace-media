import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { Services } from '@/components/sections/Services';
import { TrustBar } from '@/components/sections/TrustBar';
import { CTA } from '@/components/sections/CTA';
import { ContactForm } from '@/components/sections/ContactForm';
import { FAQ } from '@/components/sections/FAQ';
import { PortfolioPreview } from '@/components/sections/PortfolioPreview';
import { AboutTeaser } from '@/components/sections/AboutTeaser';
import { Reveal } from '@/components/Reveal';
import { MobileFloatingCTA } from '@/components/MobileFloatingCTA';
import { getTranslations } from 'next-intl/server';
import { JsonLd } from '@/components/seo/JsonLd';
import { buildFaqPageJsonLd } from '@/lib/schemas';
import { SITE_LOCALE } from '@/lib/locale';

interface RawFaqItem {
  q: string;
  a: string;
}

export default async function HomePage() {
  const t = await getTranslations('contact');
  const tFaq = await getTranslations('faq');
  const rawItems = tFaq.raw('items') as RawFaqItem[];
  const faqs = rawItems.map((item) => ({ question: item.q, answer: item.a }));

  return (
    <>
      <JsonLd data={buildFaqPageJsonLd({ locale: SITE_LOCALE, faqs, path: '/' })} />
      <Header />
      <main id="main">
        <Hero />
        <TrustBar />
        <Services />
        <PortfolioPreview />
        <AboutTeaser />
        <FAQ />
        <CTA />
        <section id="contact" className="section-y bg-[color:var(--color-ink-50)]/40">
          <div className="container-x">
            <Reveal>
              <div className="mx-auto mb-14 max-w-2xl text-center">
                <h2 className="text-4xl font-bold tracking-tight text-[color:var(--color-ink-900)] sm:text-5xl lg:text-6xl">
                  {t('title')}
                </h2>
                <p className="mt-4 text-base text-[color:var(--color-ink-900)]/70 sm:text-lg">{t('subtitle')}</p>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <ContactForm />
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
      <MobileFloatingCTA />
    </>
  );
}
