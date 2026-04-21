import { useTranslations } from 'next-intl';
import { Plus } from 'lucide-react';
import { Reveal } from '@/components/Reveal';

// We render 8 items from messages. next-intl raw indexing via t.raw:
interface FaqItem {
  q: string;
  a: string;
}

export function FAQ() {
  const t = useTranslations('faq');
  const items = t.raw('items') as FaqItem[];

  return (
    <section id="faq" className="section-y scroll-mt-20 bg-[color:var(--color-ink-50)]/50">
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

        <div className="mx-auto mt-12 max-w-3xl lg:mt-16">
          <ul className="space-y-3">
            {items.map((item, i) => (
              <Reveal as="li" key={i} delay={((i % 3) * 100) as 0 | 100 | 200}>
                <details className="group relative overflow-hidden rounded-2xl border border-[color:var(--color-ink-900)]/8 bg-white transition-all duration-300 hover:border-[color:var(--color-brand-300)] hover:shadow-md open:border-[color:var(--color-brand-400)] open:shadow-lg open:shadow-[color:var(--color-brand-900)]/5">
                  <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-start font-semibold text-[color:var(--color-ink-900)] [&::-webkit-details-marker]:hidden">
                    <span className="text-base sm:text-lg">{item.q}</span>
                    <span
                      aria-hidden
                      className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[color:var(--color-brand-50)] text-[color:var(--color-brand-600)] transition-transform duration-300 group-open:rotate-45 group-open:bg-[color:var(--color-brand-600)] group-open:text-white"
                    >
                      <Plus className="h-4 w-4" />
                    </span>
                  </summary>
                  <div className="px-5 pb-5 text-sm leading-relaxed text-[color:var(--color-ink-900)]/75 sm:text-base">
                    {item.a}
                  </div>
                </details>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
