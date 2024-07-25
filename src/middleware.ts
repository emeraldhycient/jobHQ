import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { jwtVerify, JWTPayload } from 'jose';

const JWT_SECRET = process.env.JWT_SECRET || 'your_secret_key';

interface ExtendedJWTPayload extends JWTPayload {
    userId: string;
    email: string;
    userType: 'User' | 'Employer';
}

async function verifyJWT(token: string, secret: string): Promise<ExtendedJWTPayload | null> {
    try {
        const { payload } = await jwtVerify(token, new TextEncoder().encode(secret));
        return payload as ExtendedJWTPayload;
    } catch (error) {
        console.error('JWT verification failed:', error);
        return null;
    }
}

export async function middleware(req: NextRequest) {
    const token = req.cookies.get('token')?.value;

    if (!token) {
        return NextResponse.redirect(new URL('/auth/login', req.url));
    }

    const decoded = await verifyJWT(token, JWT_SECRET);
    if (!decoded) {
        return NextResponse.redirect(new URL('/auth/login', req.url));
    }

    const { userType } = decoded;
    const currentPath = req.nextUrl.pathname;

    if (userType === 'Employer' && !currentPath.startsWith('/dashboard/employer')) {
        return NextResponse.redirect(new URL('/dashboard/employer', req.url));
    } else if (userType === 'User' && !currentPath.startsWith('/dashboard/seeker')) {
        return NextResponse.redirect(new URL('/dashboard/seeker', req.url));
    }

    return NextResponse.next({
        request: {
            headers: new Headers({
                ...Object.fromEntries(req.headers),
                'x-user-id': decoded.userId,
                'x-email': decoded.email,
                'x-user-type': userType,
            }),
        },
    });
}

export const config = {
    matcher: ['/dashboard/seeker', '/dashboard/employer'],
};



// import { NextResponse } from 'next/server';
// import type { NextRequest } from 'next/server';
// import jwt, { JwtPayload } from 'jsonwebtoken';

// const JWT_SECRET = process.env.JWT_SECRET || 'your_secret_key';

// export async function middleware(req: NextRequest) {
//     const token = req.cookies.get('token')?.value;

//     if (!token) {
//         return NextResponse.redirect(new URL('/auth/login', req.url));
//     }

//     try {
//         const decoded = jwt.verify(token, JWT_SECRET) as JwtPayload;
//         const { userType } = decoded;
//         const currentPath = req.nextUrl.pathname;

//         if (userType === 'Employer' && !currentPath.startsWith('/dashboard/employer')) {
//             return NextResponse.redirect(new URL('/dashboard/employer', req.url));
//         } else if (userType === 'User' && !currentPath.startsWith('/dashboard/seeker')) {
//             return NextResponse.redirect(new URL('/dashboard/seeker', req.url));
//         }

//         // Continue the request if everything is valid
//         return NextResponse.next({
//             request: {
//                 headers: new Headers({
//                     ...Object.fromEntries(req.headers),
//                     'x-user-id': decoded.userId,
//                     'x-email': decoded.email,
//                     'x-user-type': userType,
//                 }),
//             },
//         });
//     } catch (error) {
//         console.error('JWT verification failed:', error);
//         return NextResponse.redirect(new URL('/auth/login', req.url));
//     }
// }

// export const config = {
//     matcher: ['/dashboard/seeker', '/dashboard/employer'],
// };
