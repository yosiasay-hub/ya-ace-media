import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { z } from 'zod';
import { SITE } from '@/lib/site';
import { ContactNotificationEmail } from '@/emails/ContactNotification';

export const runtime = 'edge';

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  company: z.string().optional(),
  message: z.string().min(10),
  locale: z.enum(['he', 'en'])
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const data = contactSchema.parse(body);

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error('RESEND_API_KEY is not set');
      return NextResponse.json({ error: 'Email service not configured' }, { status: 500 });
    }

    const resend = new Resend(apiKey);

    const result = await resend.emails.send({
      from: process.env.LEAD_EMAIL_FROM ?? `YA Ace Media <hello@ya-ace-media.co.il>`,
      to: process.env.LEAD_EMAIL_TO ?? 'yosiasay@gmail.com',
      replyTo: data.email,
      subject: `New ${data.locale === 'he' ? 'HE' : 'EN'} lead — ${data.name}${data.company ? ` (${data.company})` : ''}`,
      react: ContactNotificationEmail({
        name: data.name,
        email: data.email,
        phone: data.phone,
        company: data.company,
        message: data.message,
        locale: data.locale,
        siteName: SITE.name
      })
    });

    if (result.error) {
      console.error('Resend error:', result.error);
      return NextResponse.json({ error: 'Failed to send' }, { status: 500 });
    }

    return NextResponse.json({ ok: true, id: result.data?.id });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: 'Validation failed', issues: error.issues }, { status: 400 });
    }
    console.error('Contact form error:', error);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
