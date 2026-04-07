'use client';

import { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useTranslations } from 'next-intl';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';

const CONTACT_ENDPOINT = 'https://ya-ace-contact.yossiasay1412.workers.dev';

const contactSchema = z.object({
  name: z.string().min(2, 'Required'),
  email: z.string().email('Invalid email'),
  phone: z.string().optional(),
  company: z.string().optional(),
  message: z.string().min(10, 'Tell me a bit more'),
  // honeypot — must stay empty
  website: z.string().optional()
});

type ContactInput = z.infer<typeof contactSchema>;

type SubmitState = 'idle' | 'submitting' | 'success' | 'error';

export function ContactForm() {
  const t = useTranslations('contact.form');
  const [state, setState] = useState<SubmitState>('idle');
  const renderedAtRef = useRef<number>(Date.now());

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ContactInput>({ resolver: zodResolver(contactSchema) });

  async function onSubmit(data: ContactInput) {
    setState('submitting');
    try {
      const res = await fetch(CONTACT_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          phone: data.phone,
          company: data.company,
          message: data.message,
          website: data.website,
          renderedAt: renderedAtRef.current,
          source: typeof window !== 'undefined' ? window.location.pathname : ''
        })
      });

      if (!res.ok) {
        throw new Error(`HTTP ${res.status}`);
      }

      setState('success');
      reset();
      renderedAtRef.current = Date.now();
    } catch {
      setState('error');
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mx-auto max-w-2xl space-y-5" noValidate aria-busy={state === 'submitting'}>
      {/* Honeypot — visually hidden but still in the a11y tree (no aria-hidden on focusable input) */}
      <div style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', overflow: 'hidden' }}>
        <label htmlFor="cf-website">Website</label>
        <input id="cf-website" type="text" tabIndex={-1} autoComplete="off" {...register('website')} />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="cf-name" label={t('name')} error={errors.name?.message}>
          {(props) => (
            <input
              type="text"
              autoComplete="name"
              {...register('name')}
              {...props}
              className="form-input"
              aria-invalid={!!errors.name}
            />
          )}
        </Field>
        <Field id="cf-email" label={t('email')} error={errors.email?.message}>
          {(props) => (
            <input
              type="email"
              autoComplete="email"
              {...register('email')}
              {...props}
              className="form-input"
              aria-invalid={!!errors.email}
            />
          )}
        </Field>
        <Field id="cf-phone" label={t('phone')} optional>
          {(props) => (
            <input type="tel" autoComplete="tel" {...register('phone')} {...props} className="form-input" />
          )}
        </Field>
        <Field id="cf-company" label={t('company')} optional>
          {(props) => (
            <input type="text" autoComplete="organization" {...register('company')} {...props} className="form-input" />
          )}
        </Field>
      </div>
      <Field id="cf-message" label={t('message')} error={errors.message?.message}>
        {(props) => (
          <textarea {...register('message')} {...props} rows={5} className="form-input resize-none" aria-invalid={!!errors.message} />
        )}
      </Field>

      <button
        type="submit"
        disabled={state === 'submitting'}
        aria-busy={state === 'submitting'}
        className="btn-primary w-full sm:w-auto"
      >
        {state === 'submitting' ? t('submitting') : t('submit')}
        <Send className="h-4 w-4" aria-hidden />
      </button>

      {state === 'success' && (
        <div role="status" aria-live="polite" className="flex items-start gap-3 rounded-xl border border-green-200 bg-green-50 p-4 text-sm text-green-900">
          <CheckCircle2 className="h-5 w-5 flex-shrink-0" aria-hidden />
          <p>{t('success')}</p>
        </div>
      )}
      {state === 'error' && (
        <div role="alert" className="flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-900">
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

interface FieldRenderProps {
  id: string;
  'aria-describedby'?: string;
}

interface FieldProps {
  id: string;
  label: string;
  error?: string;
  optional?: boolean;
  children: (props: FieldRenderProps) => React.ReactNode;
}

function Field({ id, label, error, optional, children }: FieldProps) {
  const errorId = error ? `${id}-error` : undefined;
  return (
    <div className="block">
      <label htmlFor={id} className="mb-1.5 inline-block text-sm font-medium text-[color:var(--color-ink-900)]">
        {label}
        {optional && <span className="ms-1 text-xs text-[color:var(--color-ink-900)]/50">(optional)</span>}
      </label>
      {children({ id, 'aria-describedby': errorId })}
      {error && (
        <span id={errorId} className="mt-1 inline-block text-xs text-red-600">
          {error}
        </span>
      )}
    </div>
  );
}
