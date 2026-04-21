import type { Metadata, Viewport } from 'next';
import { Heebo, Inter_Tight } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages, getTranslations } from 'next-intl/server';
import type { Locale } from '@/i18n/routing';
import { JsonLd } from '@/components/seo/JsonLd';
import { buildOrganizationJsonLd, buildWebsiteJsonLd, buildMetadata } from '@/lib/seo';
import { SITE } from '@/lib/site';
import './globals.css';

const heebo = Heebo({
  subsets: ['hebrew', 'latin'],
  display: 'swap',
  variable: '--font-heebo',
  weight: ['400', '500', '600', '700', '800']
});

const interTight = Inter_Tight({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter-tight',
  weight: ['400', '500', '600', '700', '800']
});

export async function generateMetadata(): Promise<Metadata> {
  const locale = (await getLocale()) as Locale;
  const t = await getTranslations({ locale, namespace: 'meta' });

  // Default metadata for the home page. Each non-home page exports its own
  // `metadata`/`generateMetadata` via buildMetadata() with its own `path`,
  // which overrides the alternates / canonical / openGraph defined here.
  return {
    ...buildMetadata({
      locale,
      title: `${t('siteName')} — ${t('tagline')}`,
      description: t('description'),
      path: '/'
    }),
    applicationName: SITE.name,
    authors: [{ name: SITE.founder }],
    generator: 'Next.js',
    keywords:
      locale === 'he'
        ? ['בניית אתרים', 'קידום אתרים', 'SEO', 'Next.js', 'סוכנות דיגיטל', 'GBP']
        : ['Web Development', 'SEO', 'Local SEO', 'Next.js', 'Digital Agency', 'GBP Optimization'],
    icons: { icon: '/favicon.ico', apple: '/apple-touch-icon.png' }
  };
}

export const viewport: Viewport = {
  themeColor: '#0274BE',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const locale = (await getLocale()) as Locale;
  const messages = await getMessages();
  const t = await getTranslations({ locale, namespace: 'nav' });
  const dir = locale === 'he' ? 'rtl' : 'ltr';
  // Only apply the active locale's font variable. This lets next/font
  // skip preloading the unused font's woff2 files at build time.
  const fontVar = locale === 'he' ? heebo.variable : interTight.variable;

  // Explicit preload hint for the primary font woff2 — the one Next/font serves
  // for the active locale's "regular" weight. These filenames are deterministic
  // per next/font build; if they change, update here. The `-s.p.` suffix marks
  // the subset+preload variant Next.js already emits <link rel="preload"> for,
  // so this acts as a redundant high-priority hint for Cloudflare edge caching.
  const primaryFontHref =
    locale === 'he'
      ? '/_next/static/media/1c9ef42b327f16c7-s.p.045a486d.woff2'
      : '/en/_next/static/media/ab57efd000576a30-s.p.37015d44.woff2';

  return (
    <html lang={locale} dir={dir} className={fontVar}>
      <head>
        <link
          rel="preload"
          href={primaryFontHref}
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <a href="#main" className="skip-link">
          {t('skipToMain')}
        </a>
        <NextIntlClientProvider messages={messages} locale={locale}>
          {children}
        </NextIntlClientProvider>
        <JsonLd data={[buildOrganizationJsonLd(locale), buildWebsiteJsonLd(locale)]} />
      </body>
    </html>
  );
}
