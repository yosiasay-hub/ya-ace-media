import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text
} from '@react-email/components';

interface ContactNotificationProps {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
  locale: 'he' | 'en';
  siteName: string;
}

export function ContactNotificationEmail({
  name,
  email,
  phone,
  company,
  message,
  locale,
  siteName
}: ContactNotificationProps) {
  const isHe = locale === 'he';
  return (
    <Html lang={locale} dir={isHe ? 'rtl' : 'ltr'}>
      <Head />
      <Preview>{`New ${isHe ? 'Hebrew' : 'English'} lead from ${name}`}</Preview>
      <Body style={body}>
        <Container style={container}>
          <Heading style={h1}>New lead — {siteName}</Heading>
          <Text style={meta}>{`Source: ${isHe ? 'Hebrew site' : 'English site'}`}</Text>
          <Hr style={hr} />
          <Section>
            <Text style={label}>Name</Text>
            <Text style={value}>{name}</Text>

            <Text style={label}>Email</Text>
            <Text style={value}>
              <a href={`mailto:${email}`} style={link}>
                {email}
              </a>
            </Text>

            {phone && (
              <>
                <Text style={label}>Phone</Text>
                <Text style={value}>
                  <a href={`tel:${phone}`} style={link}>
                    {phone}
                  </a>
                </Text>
              </>
            )}

            {company && (
              <>
                <Text style={label}>Company</Text>
                <Text style={value}>{company}</Text>
              </>
            )}

            <Text style={label}>Message</Text>
            <Text style={messageStyle}>{message}</Text>
          </Section>
          <Hr style={hr} />
          <Text style={footer}>Sent from the contact form on {siteName}</Text>
        </Container>
      </Body>
    </Html>
  );
}

const body = { backgroundColor: '#f6f7fa', fontFamily: 'system-ui, -apple-system, sans-serif' };
const container = { backgroundColor: '#fff', margin: '40px auto', padding: '32px', borderRadius: '12px', maxWidth: '560px' };
const h1 = { color: '#0a0e27', fontSize: '22px', fontWeight: '700', margin: '0 0 8px' };
const meta = { color: '#6b7280', fontSize: '13px', margin: '0' };
const label = { color: '#6b7280', fontSize: '12px', textTransform: 'uppercase' as const, letterSpacing: '0.05em', margin: '16px 0 4px' };
const value = { color: '#0a0e27', fontSize: '15px', margin: '0', fontWeight: '500' };
const messageStyle = { color: '#0a0e27', fontSize: '15px', lineHeight: '1.6', margin: '0', whiteSpace: 'pre-wrap' as const };
const hr = { borderColor: '#e5e7eb', margin: '24px 0' };
const link = { color: '#0274be', textDecoration: 'none' };
const footer = { color: '#9ca3af', fontSize: '12px', textAlign: 'center' as const };
