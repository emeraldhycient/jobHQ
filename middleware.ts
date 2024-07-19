import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import jwt, { JwtPayload } from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'your_secret_key';

export async function middleware(req: NextRequest) {
    const token:any = req.cookies.get('token');
    if (!token) {
        return NextResponse.redirect(new URL('/login', req.url));
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET) as JwtPayload;
        // req.nextUrl.searchParams.set('userId', decoded.userId); // Attach userId or any other decoded info to the request
        return NextResponse.next({
            request: {
                headers: new Headers({
                    ...Object.fromEntries(req.headers),
                    'x-user-id': decoded.userId,
                    'x-email': decoded.email,
                    'x-user-type': decoded.userType,
                }),
            },
        });
    } catch (error) {
        return NextResponse.redirect(new URL('/login', req.url));
    }
}

export const config = {
    matcher: ['/dashboard/:path*'],
};
