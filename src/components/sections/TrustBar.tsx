import { useTranslations } from 'next-intl';

const CLIENTS = [
  { name: 'Eagle Garage Door', url: 'https://eaglegaragedoorservices.com', market: 'US' },
  { name: 'Kamaaina Locksmith', url: 'https://golocksmithhonolulu.com', market: 'US' },
  { name: 'Garage Door Kingdom', url: 'https://garagedoorkingdomllc.biz', market: 'US' },
  { name: 'Colorado Locksmith', url: 'https://colorado-locksmith.com', market: 'US' },
  { name: 'CO Dependable Locksmith', url: 'https://coloradodependablelocksmith.com', market: 'US' },
  { name: 'Hummus Ashkara', url: 'https://hummus-ashkara.co.il', market: 'IL' },
  { name: 'Limor Asay', url: 'https://limorasay.co.il', market: 'IL' }
];

export function TrustBar() {
  const t = useTranslations('trust');

  return (
    <section className="border-y border-[color:var(--color-ink-900)]/8 bg-[color:var(--color-ink-50)]/50 py-12">
      <div className="container-x">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-[color:var(--color-ink-900)]/60">
            {t('title')}
          </p>
          <p className="mt-1 text-sm text-[color:var(--color-ink-900)]/70">{t('subtitle')}</p>
        </div>
        <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 lg:gap-x-12">
          {CLIENTS.map((client) => (
            <li key={client.name}>
              <a
                href={client.url}
                target="_blank"
                rel="noopener nofollow"
                className="text-sm font-semibold text-[color:var(--color-ink-900)]/60 transition-colors hover:text-[color:var(--color-brand-700)]"
              >
                {client.name}
                <sup className="ms-1 text-[10px] text-[color:var(--color-ink-900)]/40">{client.market}</sup>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
