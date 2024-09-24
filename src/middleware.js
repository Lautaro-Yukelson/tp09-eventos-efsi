import { NextResponse } from "next/server";
import { getCookie } from "cookies-next";

export function middleware(request) {
	const token = getCookie("token", { req: request });
	const url = request.nextUrl.clone();

	const pathname = url.pathname;

	if (!token) {
		if (!pathname.startsWith("/login") && !pathname.startsWith("/register")) {
			return NextResponse.redirect(new URL("/login", request.url));
		}
	}

	if (token) {
		if (pathname.startsWith("/login")) {
			return NextResponse.redirect(new URL("/", request.url));
		}
		if (pathname.startsWith("/register")) {
			return NextResponse.redirect(new URL("/", request.url));
		}
	}

	return NextResponse.next();
}

export const config = {
	matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
