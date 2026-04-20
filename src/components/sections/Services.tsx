import { useTranslations } from 'next-intl';
import { Code2, Search, MapPin, Sparkles, Megaphone, MousePointerClick, ShieldCheck } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { Reveal } from '@/components/Reveal';

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
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <div className="text-xs font-semibold uppercase tracking-widest text-[color:var(--color-brand-600)]">
              {t('eyebrow')}
            </div>
            <h2 className="mt-3 text-4xl font-bold tracking-tight text-[color:var(--color-ink-900)] sm:text-5xl lg:text-6xl">
              {t('title')}
            </h2>
            <p className="mt-5 text-base text-[color:var(--color-ink-900)]/70 sm:text-lg">
              {t('subtitle')}
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3 lg:gap-8">
          {SERVICE_KEYS.map(({ key, icon: Icon }, i) => (
            <Reveal key={key} delay={(((i % 3) * 100) as 0 | 100 | 200)}>
              <ServiceCard
                index={i + 1}
                icon={Icon}
                title={t(`items.${key}.title`)}
                description={t(`items.${key}.description`)}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

interface ServiceCardProps {
  index: number;
  icon: LucideIcon;
  title: string;
  description: string;
}

function ServiceCard({ index, icon: Icon, title, description }: ServiceCardProps) {
  const num = index.toString().padStart(2, '0');
  return (
    <article className="group relative h-full overflow-hidden rounded-2xl border border-[color:var(--color-ink-900)]/8 bg-white p-7 transition-all duration-500 hover:-translate-y-1 hover:border-[color:var(--color-brand-300)] hover:shadow-2xl hover:shadow-[color:var(--color-brand-900)]/8">
      {/* Hover glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            'radial-gradient(circle at 50% 0%, color-mix(in srgb, var(--color-brand-200) 50%, transparent), transparent 60%)'
        }}
      />
      <div className="relative flex items-start justify-between">
        <span
          className="font-mono text-[3rem] font-bold leading-none tracking-tighter text-[color:var(--color-brand-600)]/15 transition-colors duration-500 group-hover:text-[color:var(--color-brand-600)]/40 sm:text-[3.5rem]"
          aria-hidden
        >
          {num}
        </span>
        <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[color:var(--color-brand-50)] text-[color:var(--color-brand-600)] transition-colors duration-500 group-hover:bg-[color:var(--color-brand-600)] group-hover:text-white">
          <Icon className="h-5 w-5" aria-hidden />
        </div>
      </div>
      <h3 className="relative mt-6 text-xl font-bold tracking-tight text-[color:var(--color-ink-900)]">{title}</h3>
      <p className="relative mt-3 text-sm leading-relaxed text-[color:var(--color-ink-900)]/70">{description}</p>
    </article>
  );
}
