import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";

export async function middleware(req) {
  const session = await auth.api.getSession({
    headers: req.headers,
  });

  const isLoggedIn = !!session;

  const protectedRoutes = ["/profile"];

  if (protectedRoutes.includes(req.nextUrl.pathname)) {
    if (!isLoggedIn) {
      return NextResponse.redirect(new URL("/login", req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/profile"],
};