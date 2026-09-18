import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Custom-domain hosts that serve this Worker directly at "/" — each one
// should redirect to the equivalent path under its apex domain's /dating
// route, since the app itself only knows how to run under basePath /dating.
const SUBDOMAIN_TO_APEX: Record<string, string> = {
  'dating.ek21.com.tw': 'ek21.com.tw',
  'dating.ek21.com': 'ek21.com',
  'dating.ek21.tw': 'ek21.tw',
};

export function middleware(request: NextRequest) {
  const host = request.headers.get('host') ?? '';
  const apex = SUBDOMAIN_TO_APEX[host];

  if (apex) {
    const url = new URL(request.url);
    url.protocol = 'https:';
    url.hostname = apex;
    url.port = '';
    url.pathname = `/dating${request.nextUrl.pathname === '/' ? '' : request.nextUrl.pathname}`;
    return NextResponse.redirect(url, 308);
  }

  return NextResponse.next();
}
