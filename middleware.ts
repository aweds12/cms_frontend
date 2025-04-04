import { NextRequest, NextResponse } from "next/server";

const validateToken = (token: string | undefined): boolean => {
  if (!token) return false;

  try {
    const payload = JSON.parse(atob(token.split(".")[1]));
    const isExpired = payload.exp * 1000 < Date.now();
    return !isExpired;
  } catch (error) {
    return false;
  }
};

export function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value;
  const pathname = req.nextUrl.pathname;

  const studentMenu = ["/courses"];
  const teacherMenu = ["/courses", "/students"];

  const publicRoutes = ["/auth", "/auth-select"];

  if (pathname == "/auth-select" && !!validateToken(token)) {
    return NextResponse.redirect(new URL("/", req.url));
  }
  if (publicRoutes.some((route) => pathname.startsWith(route))) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  if (!validateToken(token)) {
    return NextResponse.redirect(new URL("/auth-select", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/dashboard/:path*"],
};
