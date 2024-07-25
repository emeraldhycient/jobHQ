import { NextRequest, NextResponse } from 'next/server';
import { serialize } from 'cookie';

export async function POST(req: NextRequest, res: NextResponse) {
    try {
        // Remove the JWT token cookie
        const response = NextResponse.json({ message: 'Logout successful' }, { status: 200 });
        response.cookies.set('token', '', {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            maxAge: 0, // Expire the cookie immediately
            path: '/',
        });

        return response;
    } catch (error) {
        console.error('Logout error:', error);
        return NextResponse.json({ message: 'Internal Server Error', error }, { status: 500 });
    }
}
