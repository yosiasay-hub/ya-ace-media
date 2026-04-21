import type { Metadata, Viewport } from 'next';
import { Heebo, Inter_Tight } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages, getTranslations } from 'next-intl/server';
import type { Locale } from '@/i18n/routing';
import { JsonLd } from '@/components/seo/JsonLd';
import { buildOrganizationJsonLd, buildWebsiteJsonLd, buildMetadata } from '@/lib/seo';
import { SITE } from '@/lib/site';
import './globals.css';

// HE build only needs the Hebrew subset (body text is Hebrew). Dropping the Latin
// subset avoids preloading 3 unused Latin woff2 files that delayed LCP.
const heebo = Heebo({
  subsets: ['hebrew'],
  display: 'swap',
  variable: '--font-heebo',
  weight: ['400', '500', '600', '700', '800'],
  preload: true
});

const interTight = Inter_Tight({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter-tight',
  weight: ['400', '500', '600', '700', '800'],
  preload: true
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

  return (
    <html lang={locale} dir={dir} className={fontVar}>
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
