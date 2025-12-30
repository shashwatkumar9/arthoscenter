import { NextRequest, NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // ============ ADMIN ROUTE PROTECTION ============
  if (pathname.startsWith('/admin')) {
    // Allow /admin/login without auth
    if (pathname === '/admin/login') {
      return NextResponse.next();
    }

    // Check authentication
    const token = await getToken({
      req: request,
      secret: process.env.NEXTAUTH_SECRET
    });

    if (!token) {
      // Redirect to login
      const loginUrl = new URL('/admin/login', request.url);
      loginUrl.searchParams.set('callbackUrl', pathname);
      return NextResponse.redirect(loginUrl);
    }

    // Check role (must be ADMIN, SUPER_ADMIN, or DOCTOR)
    const allowedRoles = ['ADMIN', 'SUPER_ADMIN', 'DOCTOR'];
    if (!allowedRoles.includes(token.role as string)) {
      // Forbidden - redirect to home
      return NextResponse.redirect(new URL('/en', request.url));
    }

    // Check route-specific permissions
    if (pathname.startsWith('/admin/users') && token.role !== 'SUPER_ADMIN') {
      // Only SUPER_ADMIN can access user management
      return NextResponse.redirect(new URL('/admin', request.url));
    }

    return NextResponse.next();
  }

  // ============ EXISTING I18N LOGIC ============
  // Check if pathname is missing a locale
  const pathnameHasLocale = ['en', 'hi', 'bn', 'ne', 'as', 'or', 'mai', 'bho'].some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) {
    return NextResponse.next();
  }

  // Redirect to /en if no locale
  const locale = 'en';
  request.nextUrl.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};
