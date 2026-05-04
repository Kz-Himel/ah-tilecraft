import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";

export async function middleware(req) {
  const session = await auth.api.getSession({
    headers: req.headers,
  });

  const isLoggedIn = !!session;
  const path = req.nextUrl.pathname;

  // only protect profile and single tile pages
  const isProtected =
    path.startsWith("/profile") ||
    (path.startsWith("/alltiles/") && path !== "/alltiles");

  if (isProtected && !isLoggedIn) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/profile", "/alltiles/:path*"],
};