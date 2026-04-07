'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useTranslations, useLocale } from 'next-intl';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';
import type { Locale } from '@/i18n/routing';

const contactSchema = z.object({
  name: z.string().min(2, 'Required'),
  email: z.string().email('Invalid email'),
  phone: z.string().optional(),
  company: z.string().optional(),
  message: z.string().min(10, 'Tell me a bit more')
});

type ContactInput = z.infer<typeof contactSchema>;

type SubmitState = 'idle' | 'submitting' | 'success' | 'error';

export function ContactForm() {
  const t = useTranslations('contact.form');
  const locale = useLocale() as Locale;
  const [state, setState] = useState<SubmitState>('idle');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ContactInput>({ resolver: zodResolver(contactSchema) });

  async function onSubmit(data: ContactInput) {
    setState('submitting');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, locale })
      });
      if (!res.ok) throw new Error('Submission failed');
      setState('success');
      reset();
    } catch {
      setState('error');
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mx-auto max-w-2xl space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label={t('name')} error={errors.name?.message}>
          <input
            type="text"
            autoComplete="name"
            {...register('name')}
            className="form-input"
            aria-invalid={!!errors.name}
          />
        </Field>
        <Field label={t('email')} error={errors.email?.message}>
          <input
            type="email"
            autoComplete="email"
            {...register('email')}
            className="form-input"
            aria-invalid={!!errors.email}
          />
        </Field>
        <Field label={t('phone')} optional>
          <input type="tel" autoComplete="tel" {...register('phone')} className="form-input" />
        </Field>
        <Field label={t('company')} optional>
          <input type="text" autoComplete="organization" {...register('company')} className="form-input" />
        </Field>
      </div>
      <Field label={t('message')} error={errors.message?.message}>
        <textarea {...register('message')} rows={5} className="form-input resize-none" aria-invalid={!!errors.message} />
      </Field>

      <button type="submit" disabled={state === 'submitting'} className="btn-primary w-full sm:w-auto">
        {state === 'submitting' ? t('submitting') : t('submit')}
        <Send className="h-4 w-4" aria-hidden />
      </button>

      {state === 'success' && (
        <div className="flex items-start gap-3 rounded-xl border border-green-200 bg-green-50 p-4 text-sm text-green-900">
          <CheckCircle2 className="h-5 w-5 flex-shrink-0" aria-hidden />
          <p>{t('success')}</p>
        </div>
      )}
      {state === 'error' && (
        <div className="flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-900">
          <AlertCircle className="h-5 w-5 flex-shrink-0" aria-hidden />
          <p>{t('error')}</p>
        </div>
      )}

      <style jsx>{`
        :global(.form-input) {
          width: 100%;
          border-radius: 0.75rem;
          border: 1px solid rgba(10, 14, 39, 0.15);
          background: white;
          padding: 0.75rem 1rem;
          font-size: 0.95rem;
          color: var(--color-ink-900);
          transition: border-color 0.15s, box-shadow 0.15s;
        }
        :global(.form-input:focus) {
          outline: none;
          border-color: var(--color-brand-600);
          box-shadow: 0 0 0 3px rgba(2, 116, 190, 0.15);
        }
        :global(.form-input[aria-invalid='true']) {
          border-color: rgb(220, 38, 38);
        }
      `}</style>
    </form>
  );
}

interface FieldProps {
  label: string;
  error?: string;
  optional?: boolean;
  children: React.ReactNode;
}

function Field({ label, error, optional, children }: FieldProps) {
  return (
    <label className="block">
      <span className="mb-1.5 inline-block text-sm font-medium text-[color:var(--color-ink-900)]">
        {label}
        {optional && <span className="ms-1 text-xs text-[color:var(--color-ink-900)]/50">(optional)</span>}
      </span>
      {children}
      {error && <span className="mt-1 inline-block text-xs text-red-600">{error}</span>}
    </label>
  );
}
