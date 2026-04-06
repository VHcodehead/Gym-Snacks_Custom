import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const host = request.headers.get("host") ?? "";

  // Redirect bare domain to www
  if (host === "gymsnacksinc.com") {
    const url = request.nextUrl.clone();
    url.host = "www.gymsnacksinc.com";
    return NextResponse.redirect(url, { status: 301 });
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/(.*)",
};
