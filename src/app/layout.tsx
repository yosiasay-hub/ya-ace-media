import type { Metadata, Viewport } from 'next';
import { Heebo, Inter_Tight } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages, getTranslations } from 'next-intl/server';
import type { Locale } from '@/i18n/routing';
import { JsonLd } from '@/components/seo/JsonLd';
import { buildOrganizationJsonLd, buildWebsiteJsonLd } from '@/lib/seo';
import { SITE, getSiteUrl } from '@/lib/site';
import './globals.css';

const heebo = Heebo({
  subsets: ['hebrew', 'latin'],
  display: 'swap',
  variable: '--font-heebo',
  weight: ['300', '400', '500', '700', '800']
});

const interTight = Inter_Tight({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter-tight',
  weight: ['300', '400', '500', '700', '800']
});

export async function generateMetadata(): Promise<Metadata> {
  const locale = (await getLocale()) as Locale;
  const t = await getTranslations({ locale, namespace: 'meta' });

  return {
    metadataBase: new URL(getSiteUrl(locale)),
    title: { default: `${t('siteName')} — ${t('tagline')}`, template: `%s | ${t('siteName')}` },
    description: t('description'),
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
  const dir = locale === 'he' ? 'rtl' : 'ltr';
  const fontVar = locale === 'he' ? heebo.variable : interTight.variable;

  return (
    <html lang={locale} dir={dir} className={`${heebo.variable} ${interTight.variable} ${fontVar}`}>
      <head>
        <link
          rel="alternate"
          hrefLang="he-IL"
          href={getSiteUrl('he')}
        />
        <link
          rel="alternate"
          hrefLang="en-US"
          href={getSiteUrl('en')}
        />
        <link rel="alternate" hrefLang="x-default" href={getSiteUrl('he')} />
      </head>
      <body>
        <NextIntlClientProvider messages={messages} locale={locale}>
          {children}
        </NextIntlClientProvider>
        <JsonLd data={[buildOrganizationJsonLd(locale), buildWebsiteJsonLd(locale)]} />
      </body>
    </html>
  );
}
