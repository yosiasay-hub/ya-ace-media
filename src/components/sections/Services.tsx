import { useTranslations } from 'next-intl';
import { Code2, Search, MapPin, Sparkles, Megaphone, MousePointerClick, ShieldCheck } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const SERVICE_KEYS = [
  { key: 'websites', icon: Code2 },
  { key: 'seo', icon: Search },
  { key: 'localSeo', icon: MapPin },
  { key: 'geo', icon: Sparkles },
  { key: 'ads', icon: Megaphone },
  { key: 'cro', icon: MousePointerClick },
  { key: 'maintenance', icon: ShieldCheck }
] as const;

export function Services() {
  const t = useTranslations('services');

  return (
    <section id="services" className="section-y scroll-mt-20">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <div className="text-xs font-semibold uppercase tracking-widest text-[color:var(--color-brand-600)]">
            {t('eyebrow')}
          </div>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[color:var(--color-ink-900)] sm:text-4xl lg:text-5xl">
            {t('title')}
          </h2>
          <p className="mt-4 text-base text-[color:var(--color-ink-900)]/70 sm:text-lg">
            {t('subtitle')}
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {SERVICE_KEYS.map(({ key, icon: Icon }) => (
            <ServiceCard
              key={key}
              icon={Icon}
              title={t(`items.${key}.title`)}
              description={t(`items.${key}.description`)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

function ServiceCard({ icon: Icon, title, description }: ServiceCardProps) {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-[color:var(--color-ink-900)]/8 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[color:var(--color-brand-300)] hover:shadow-xl">
      <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[color:var(--color-brand-50)] text-[color:var(--color-brand-600)] transition-colors group-hover:bg-[color:var(--color-brand-600)] group-hover:text-white">
        <Icon className="h-6 w-6" aria-hidden />
      </div>
      <h3 className="mt-5 text-lg font-bold text-[color:var(--color-ink-900)]">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-[color:var(--color-ink-900)]/70">{description}</p>
    </article>
  );
}
