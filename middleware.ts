import { NextResponse, type NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  // For now, just pass through all requests
  // Admin authentication will be handled client-side
  return NextResponse.next();
}

export const config = {
  matcher: [
    // Only run middleware on admin routes
    "/admin/:path*",
  ],
};
