import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { Services } from '@/components/sections/Services';
import { TrustBar } from '@/components/sections/TrustBar';
import { CTA } from '@/components/sections/CTA';
import { ContactForm } from '@/components/sections/ContactForm';
import { Reveal } from '@/components/Reveal';
import { MobileFloatingCTA } from '@/components/MobileFloatingCTA';
import { useTranslations } from 'next-intl';

export default function HomePage() {
  const t = useTranslations('contact');

  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <TrustBar />
        <Services />
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
