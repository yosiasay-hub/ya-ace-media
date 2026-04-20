import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { Phone, Menu } from 'lucide-react';
import { SITE, getOppositeLocaleUrl } from '@/lib/site';
import { SITE_LOCALE } from '@/lib/locale';

export function Header() {
  const t = useTranslations('nav');

  const links = [
    { href: '/services/', label: t('services') },
    { href: '/case-studies/', label: t('caseStudies') },
    { href: '/about/', label: t('about') }
  ];

  const contactHref = '/#contact';

  return (
    <header className="sticky top-0 z-50 border-b border-[color:var(--color-ink-900)]/8 bg-white/90 backdrop-blur-md">
      <div className="container-x flex h-16 items-center justify-between gap-4">
        <Link href="/" prefetch={false} className="flex items-center gap-2 font-bold text-[color:var(--color-ink-900)]">
          <span className="text-xl tracking-tight">
            YA <span className="text-[color:var(--color-brand-600)]">Ace</span> Media
          </span>
        </Link>

        <nav aria-label={t('services')} className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              prefetch={false}
              className="text-sm font-medium text-[color:var(--color-ink-900)]/80 transition-colors hover:text-[color:var(--color-brand-600)]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={`tel:${SITE.phone}`}
            className="hidden items-center gap-2 text-sm font-medium text-[color:var(--color-ink-900)]/80 hover:text-[color:var(--color-brand-600)] sm:flex"
            aria-label={t('callUs')}
          >
            <Phone className="h-4 w-4" aria-hidden />
            <span>{SITE.phoneDisplay}</span>
          </a>
          <a
            href={getOppositeLocaleUrl(SITE_LOCALE)}
            className="inline-flex h-11 min-w-11 items-center justify-center rounded-md px-3 text-sm font-medium text-[color:var(--color-ink-900)]/70 hover:text-[color:var(--color-brand-600)] transition"
            hrefLang={SITE_LOCALE === 'he' ? 'en' : 'he'}
            aria-label={SITE_LOCALE === 'he' ? 'Switch to English' : 'עבור לעברית'}
          >
            {SITE_LOCALE === 'he' ? 'EN' : 'עברית'}
          </a>
          <Link href={contactHref} prefetch={false} className="btn-primary hidden text-sm sm:inline-flex">
            {t('contact')}
          </Link>

          {/* Mobile menu — server-component-friendly via <details> */}
          <details className="relative lg:hidden">
            <summary
              className="inline-flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-lg border border-[color:var(--color-ink-900)]/10 text-[color:var(--color-ink-900)]/80 hover:text-[color:var(--color-brand-600)] [&::-webkit-details-marker]:hidden"
              aria-label={t('openMenu')}
            >
              <Menu className="h-5 w-5" aria-hidden />
            </summary>
            <div className="absolute end-0 mt-2 w-56 rounded-xl border border-[color:var(--color-ink-900)]/10 bg-white p-2 shadow-xl">
              <nav aria-label={t('services')} className="flex flex-col">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    prefetch={false}
                    className="flex min-h-11 items-center rounded-md px-3 py-3 text-sm font-medium text-[color:var(--color-ink-900)]/85 hover:bg-[color:var(--color-brand-50)] hover:text-[color:var(--color-brand-700)]"
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href={contactHref}
                  prefetch={false}
                  className="mt-1 flex min-h-11 items-center justify-center rounded-md bg-[color:var(--color-brand-600)] px-3 py-3 text-center text-sm font-semibold text-white hover:bg-[color:var(--color-brand-700)]"
                >
                  {t('contact')}
                </Link>
              </nav>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}
