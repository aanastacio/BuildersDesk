import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  
  // Remove trailing slashes to prevent duplicate pages
  if (url.pathname !== '/' && url.pathname.endsWith('/')) {
    url.pathname = url.pathname.slice(0, -1);
    return NextResponse.redirect(url, 301);
  }

  // Ensure lowercase URLs
  if (url.pathname !== url.pathname.toLowerCase()) {
    url.pathname = url.pathname.toLowerCase();
    return NextResponse.redirect(url, 301);
  }

  // Force HTTPS (handled by Caddy, but good to have as backup)
  if (process.env.NODE_ENV === 'production' && url.protocol === 'http:') {
    url.protocol = 'https:';
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files (public folder)
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};
