import type { Locale } from '@/i18n/routing';
import { getAbsoluteUrl } from '@/lib/site';

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqPageSchemaInput {
  locale: Locale;
  faqs: FaqItem[];
  /**
   * Optional path where the FAQ lives. Used to build a stable @id
   * so the same FAQ block on different pages (e.g., home + service) can
   * be distinguished by Google.
   */
  path?: string;
}

/**
 * FAQPage schema builder. Accepts a generic Q&A array so it can drive
 * per-page FAQ sections and the homepage FAQ.
 *
 * Answers are wrapped in Answer objects; text is rendered as-is (do NOT
 * pre-escape — schema.org accepts Unicode including Hebrew).
 */
export function buildFaqPageJsonLd({
  locale,
  faqs,
  path = '/'
}: FaqPageSchemaInput): Record<string, unknown> {
  const url = getAbsoluteUrl(locale, path);

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${url}#faq`,
    inLanguage: locale === 'he' ? 'he-IL' : 'en-US',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };
}
