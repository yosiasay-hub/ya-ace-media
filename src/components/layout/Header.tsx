import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { Phone } from 'lucide-react';
import { SITE } from '@/lib/site';
import type { Locale } from '@/i18n/routing';

export function Header() {
  const t = useTranslations('nav');
  const locale = useLocale() as Locale;

  // MVP: single-page anchors until inner pages are built
  const links = [
    { href: '#services', label: t('services') },
    { href: '#case-studies', label: t('caseStudies') }
  ];

  const contactHref = '#contact';

  return (
    <header className="sticky top-0 z-50 border-b border-[color:var(--color-ink-900)]/8 bg-white/90 backdrop-blur-md">
      <div className="container-x flex h-16 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2 font-bold text-[color:var(--color-ink-900)]">
          <span className="text-xl tracking-tight">
            YA <span className="text-[color:var(--color-brand-600)]">Ace</span> Media
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
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
            aria-label="Call us"
          >
            <Phone className="h-4 w-4" aria-hidden />
            <span>{SITE.phoneDisplay}</span>
          </a>
          <Link href={contactHref} className="btn-primary text-sm">
            {t('contact')}
          </Link>
        </div>
      </div>
    </header>
  );
}
