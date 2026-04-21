import { useTranslations } from 'next-intl';
import { Code2, Search, MapPin, Sparkles, Megaphone, MousePointerClick, ShieldCheck } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { Reveal } from '@/components/Reveal';

interface ServiceDef {
  key: 'websites' | 'seo' | 'localSeo' | 'geo' | 'ads' | 'cro' | 'maintenance';
  icon: LucideIcon;
  rot: string;
  mt: string;
  isPrimary?: boolean;
}

// Vite SPA-inspired: tilted cards with staggered vertical offsets
const SERVICE_KEYS: ServiceDef[] = [
  { key: 'websites', icon: Code2, rot: '-rotate-2', mt: '' },
  { key: 'seo', icon: Search, rot: 'rotate-1', mt: 'sm:mt-10' },
  { key: 'localSeo', icon: MapPin, rot: '-rotate-1', mt: '' },
  { key: 'geo', icon: Sparkles, rot: 'rotate-2', mt: 'sm:mt-10', isPrimary: true },
  { key: 'ads', icon: Megaphone, rot: 'rotate-1', mt: '' },
  { key: 'cro', icon: MousePointerClick, rot: '-rotate-2', mt: 'sm:mt-10' },
  { key: 'maintenance', icon: ShieldCheck, rot: '-rotate-1', mt: '' }
];

export function Services() {
  const t = useTranslations('services');

  return (
    <section id="services" className="section-y scroll-mt-20">
      <div className="container-x">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <div className="text-xs font-semibold uppercase tracking-widest text-[color:var(--color-brand-600)]">
              {t('eyebrow')}
            </div>
            <h2 className="mt-3 text-4xl font-bold tracking-tight text-[color:var(--color-ink-900)] sm:text-5xl lg:text-6xl">
              {t('title')}{' '}
              <span className="italic tracking-tighter text-[color:var(--color-brand-500)]">
                {t('titleHighlight')}
              </span>
            </h2>
            <p className="mt-5 text-base text-[color:var(--color-ink-900)]/70 sm:text-lg">
              {t('subtitle')}
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:mt-24 lg:grid-cols-3 lg:gap-8">
          {SERVICE_KEYS.map((svc, i) => (
            <Reveal key={svc.key} delay={(((i % 3) * 100) as 0 | 100 | 200)} className={svc.mt}>
              <ServiceCard
                index={i + 1}
                icon={svc.icon}
                rot={svc.rot}
                title={t(`items.${svc.key}.title`)}
                description={t(`items.${svc.key}.description`)}
                accent={svc.isPrimary}
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
  rot: string;
  title: string;
  description: string;
  accent?: boolean;
}

function ServiceCard({ index, icon: Icon, rot, title, description, accent }: ServiceCardProps) {
  const num = index.toString().padStart(2, '0');
  return (
    <article
      className={`group relative h-full overflow-hidden rounded-3xl border border-[color:var(--color-ink-900)]/8 bg-white p-7 shadow-[0_4px_24px_-8px_rgba(10,14,39,0.08)] transition-all duration-500 ease-out ${rot} hover:rotate-0 hover:-translate-y-1.5 hover:border-transparent hover:shadow-[0_20px_60px_-16px_rgba(2,116,190,0.25)]`}
    >
      {/* Animated gradient border — appears on hover */}
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            'linear-gradient(135deg, var(--color-brand-400), var(--color-brand-600) 40%, var(--color-accent-500))',
          WebkitMask:
            'linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
          padding: '1px'
        }}
      />
      {/* Radial glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            'radial-gradient(circle at 50% 0%, color-mix(in srgb, var(--color-brand-200) 55%, transparent), transparent 65%)'
        }}
      />

      <div className="relative flex items-start justify-between">
        <span
          className="font-mono text-[3rem] font-bold leading-none tracking-tighter text-[color:var(--color-brand-600)]/15 transition-colors duration-500 group-hover:text-[color:var(--color-brand-600)]/45 sm:text-[3.5rem]"
          aria-hidden
        >
          {num}
        </span>
        <div
          className={`inline-flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-500 ${
            accent
              ? 'bg-gradient-to-br from-[color:var(--color-accent-500)]/10 to-[color:var(--color-brand-500)]/10 text-[color:var(--color-accent-600)]'
              : 'bg-[color:var(--color-brand-50)] text-[color:var(--color-brand-600)]'
          } group-hover:scale-110 group-hover:bg-[color:var(--color-brand-600)] group-hover:text-white group-hover:shadow-lg group-hover:shadow-[color:var(--color-brand-600)]/30`}
        >
          <Icon className="h-5.5 w-5.5 h-[22px] w-[22px]" aria-hidden />
        </div>
      </div>
      <h3 className="relative mt-6 text-xl font-bold tracking-tight text-[color:var(--color-ink-900)]">
        {title}
      </h3>
      <p className="relative mt-3 text-sm leading-relaxed text-[color:var(--color-ink-900)]/70">
        {description}
      </p>
    </article>
  );
}
