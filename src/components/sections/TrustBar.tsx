import { useTranslations } from 'next-intl';
import { Reveal } from '@/components/Reveal';

const CLIENTS = [
  { name: 'Eagle Garage Door', url: 'https://eaglegaragedoorservices.com', market: 'US', flag: '🇺🇸' },
  { name: 'Kamaaina Locksmith', url: 'https://golocksmithhonolulu.com', market: 'US', flag: '🇺🇸' },
  { name: 'Garage Door Kingdom', url: 'https://garagedoorkingdomllc.biz', market: 'US', flag: '🇺🇸' },
  { name: 'Colorado Locksmith', url: 'https://colorado-locksmith.com', market: 'US', flag: '🇺🇸' },
  { name: 'CO Dependable Locksmith', url: 'https://coloradodependablelocksmith.com', market: 'US', flag: '🇺🇸' },
  { name: '970 Locksmith Fort Collins', url: 'https://970locksmithservices.tech', market: 'US', flag: '🇺🇸' },
  { name: 'Hummus Ashkara', url: 'https://hummus-ashkara.co.il', market: 'IL', flag: '🇮🇱' },
  { name: 'Limor Asay', url: 'https://limorasay.co.il', market: 'IL', flag: '🇮🇱' },
  { name: 'ProtecVault', url: 'https://protecvault.com', market: 'US', flag: '🇺🇸' }
];

export function TrustBar() {
  const t = useTranslations('trust');

  return (
    <section
      id="case-studies"
      className="scroll-mt-20 border-y border-[color:var(--color-ink-900)]/8 bg-gradient-to-b from-white via-[color:var(--color-ink-50)]/60 to-white py-14"
    >
      <div className="container-x">
        <Reveal>
          <div className="text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[color:var(--color-brand-700)]">
              {t('title')}
            </p>
            <p className="mt-2 text-base text-[color:var(--color-ink-900)]/75 sm:text-lg">
              {t('subtitle')}
            </p>
          </div>
        </Reveal>

        <ul className="mt-10 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
          {CLIENTS.map((client) => (
            <li key={client.name}>
              <a
                href={client.url}
                target="_blank"
                rel="noopener nofollow"
                className="group inline-flex min-h-11 items-center gap-2 rounded-full border border-[color:var(--color-ink-900)]/10 bg-white/80 px-4 py-2.5 text-sm font-semibold text-[color:var(--color-ink-900)]/75 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[color:var(--color-brand-400)] hover:bg-white hover:text-[color:var(--color-brand-700)] hover:shadow-md"
              >
                <span className="text-base leading-none" aria-hidden>
                  {client.flag}
                </span>
                <span>{client.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
