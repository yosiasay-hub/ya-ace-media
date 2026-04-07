import { NextRequest, NextResponse } from 'next/server';

const HE_HOSTS = ['ya-ace-media.co.il', 'www.ya-ace-media.co.il', 'localhost:3000'];
const EN_HOSTS = ['en.ya-ace-media.co.il'];

export function middleware(request: NextRequest) {
  const host = request.headers.get('host') ?? '';
  const locale = EN_HOSTS.some((h) => host.startsWith(h)) ? 'en' : 'he';

  const response = NextResponse.next({
    request: {
      headers: new Headers(request.headers)
    }
  });
  response.headers.set('x-locale', locale);
  response.headers.set('x-host', host);
  return response;
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|llms.txt|robots.txt|sitemap.xml).*)']
};
