import { useTranslations, useLocale } from 'next-intl';
import { Phone, Mail, MapPin } from 'lucide-react';
import { SITE } from '@/lib/site';
import type { Locale } from '@/i18n/routing';

export function Footer() {
  const t = useTranslations();
  const locale = useLocale() as Locale;
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[color:var(--color-ink-900)]/10 bg-[color:var(--color-ink-50)]">
      <div className="container-x py-12 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="text-2xl font-bold tracking-tight">
              YA <span className="text-[color:var(--color-brand-600)]">Ace</span> Media
            </div>
            <p className="mt-3 max-w-md text-sm text-[color:var(--color-ink-900)]/70">
              {t('meta.description')}
            </p>
            <p className="mt-4 text-xs uppercase tracking-wider text-[color:var(--color-ink-900)]/60">
              {t('footer.tagline')}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[color:var(--color-ink-900)]">
              {t('nav.contact')}
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={`tel:${SITE.phone}`}
                  className="inline-flex items-center gap-2 text-[color:var(--color-ink-900)]/80 hover:text-[color:var(--color-brand-700)]"
                >
                  <Phone className="h-4 w-4" aria-hidden />
                  {SITE.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="inline-flex items-center gap-2 text-[color:var(--color-ink-900)]/80 hover:text-[color:var(--color-brand-700)]"
                >
                  <Mail className="h-4 w-4" aria-hidden />
                  {SITE.email}
                </a>
              </li>
              <li className="inline-flex items-center gap-2 text-[color:var(--color-ink-900)]/80">
                <MapPin className="h-4 w-4" aria-hidden />
                {locale === 'he' ? 'ישראל • ארה״ב' : 'Israel • USA'}
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[color:var(--color-ink-900)]">
              {locale === 'he' ? 'מהיר' : 'Quick links'}
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={SITE.gbp.sameAs}
                  className="text-[color:var(--color-ink-900)]/80 hover:text-[color:var(--color-brand-700)]"
                  rel="noopener"
                  target="_blank"
                >
                  Google Business Profile
                </a>
              </li>
              <li>
                <a
                  href={SITE.social.linkedin}
                  className="text-[color:var(--color-ink-900)]/80 hover:text-[color:var(--color-brand-700)]"
                  rel="noopener"
                  target="_blank"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={SITE.social.whatsapp}
                  className="text-[color:var(--color-ink-900)]/80 hover:text-[color:var(--color-brand-700)]"
                  rel="noopener"
                  target="_blank"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-[color:var(--color-ink-900)]/10 pt-6 text-xs text-[color:var(--color-ink-900)]/60 sm:flex-row">
          <div>
            © {year} {SITE.name}. {t('footer.rights')}.
          </div>
          <div>{locale === 'he' ? 'נבנה עם Next.js + Cloudflare' : 'Built with Next.js + Cloudflare'}</div>
        </div>
      </div>
    </footer>
  );
}
