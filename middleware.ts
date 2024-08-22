import NextAuth from "next-auth";
import { NextResponse } from 'next/server';
import authConfig from "@/auth.config";
import {
    // DEFAULT_LOGIN_REDIRECT,
    apiAuthPrefix,
    authRoutes,
    publicRoutes,
} from "@/routes";
import { useLocation } from "react-use";

const { auth } = NextAuth(authConfig);

export default auth(async (req) => {
    const { nextUrl } = req;
    const isLoggedIn = !!req.auth;

    const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
    const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
    const isAuthRoute = authRoutes.includes(nextUrl.pathname);

    const { search } = useLocation();
    const sp = new URLSearchParams(search);
    const redirect = sp.get('redirect') || '/auth/login';

    if (isApiAuthRoute) {
        return NextResponse.next();
    }

    // if (isAuthRoute) {
    //     if (isLoggedIn) {
    //         return NextResponse.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
    //     }
    //     return NextResponse.next();
    // }
    if (isAuthRoute) {
        if (isLoggedIn) {
            return NextResponse.redirect((redirect));
        }
        return NextResponse.next();
    }

    if (!isLoggedIn && !isPublicRoute) {
        let callbackUrl = nextUrl.pathname;
        if (nextUrl.search) {
            callbackUrl += nextUrl.search;
        }

        const encodedCallbackUrl = encodeURIComponent(callbackUrl);
        const loginUrl = `/auth/login?callbackUrl=${encodedCallbackUrl}`;

        return NextResponse.redirect(new URL(loginUrl, nextUrl));
    }

    return NextResponse.next();
});

// Optionally, don't invoke Middleware on some paths
export const config = {
    matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
