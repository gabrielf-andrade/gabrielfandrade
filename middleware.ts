import { Language } from "@/types/definitions";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const locales: Language[] = ["en", "pt"];
const defaultLocale = "en";

function getLocaleFromRequestHeader(request: NextRequest): string {
  // Check Accept-Language header similar to Next.js docs approach
  const acceptLanguage = request.headers.get("accept-language");

  if (acceptLanguage) {
    // Parse languages with quality values
    const languages = acceptLanguage
      .split(",")
      .map((lang) => {
        const [code, q = "q=1"] = lang.trim().split(";");
        return {
          code: code.toLowerCase().split("-")[0], // Get base language (pt-BR -> pt)
          quality: parseFloat(q.replace("q=", "")),
        };
      })
      .sort((a, b) => b.quality - a.quality);

    // Find best matching locale
    for (const { code } of languages) {
      const matchedLocale = locales.find((locale) => locale === code);
      if (matchedLocale) return matchedLocale;
    }
  }

  return defaultLocale;
}

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if there is any supported locale in the pathname
  const pathnameHasLocale = locales.some((locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`);

  if (pathnameHasLocale) return;

  // Redirect if there is no locale
  const locale = getLocaleFromRequestHeader(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;

  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // Skip all internal paths (_next) and static files
    "/((?!_next|api|favicon.ico|.*\\..*).*)",
  ],
};
