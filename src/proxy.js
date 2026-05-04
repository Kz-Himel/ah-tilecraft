import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { auth } from "./lib/auth";

export async function proxy(request) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const { pathname } = request.nextUrl;

  const authRoutes = ["/login", "/register"];

  if (session && authRoutes.includes(pathname)) {
    return NextResponse.redirect(new URL("/profile", request.url));
  }

  const isProfilePage = pathname === "/profile";

  const isProductDetailPage =
    pathname.startsWith("/alltiles/") && pathname !== "/alltiles";

  if (!session && (isProfilePage || isProductDetailPage)) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/alltiles/:path*", "/profile", "/login", "/register"],
};