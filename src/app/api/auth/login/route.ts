import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import bcrypt from 'bcryptjs';
import { SignJWT } from 'jose';
import { loginSchema } from '@/constants/schema';

const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET || 'your_secret_key');

export async function POST(req: NextRequest) {
    try {
        const data = await req.json();
        const { error } = loginSchema.validate(data);

        if (error) {
            return NextResponse.json({ message: error.details[0].message, error }, { status: 400 });
        }

        const { email, password, userType } = data;
        let user;
        let employer;

        if (userType === 'Employer') {
            user = await prisma.employerUser.findUnique({
                where: { email },
                include: {
                    employer: true,
                },
            });

            if (!user) {
                return NextResponse.json({ message: 'Invalid email or password' }, { status: 401 });
            }

            const isPasswordValid = await bcrypt.compare(password, user.password);
            if (!isPasswordValid) {
                return NextResponse.json({ message: 'Invalid email or password' }, { status: 401 });
            }

            employer = user.employer;

            const token = await new SignJWT({
                userId: user.id,
                email: user.email,
                userType,
                companyId: employer.id,
                companyName: employer.companyName,
                companyEmail: employer.companyEmail,
            })
                .setProtectedHeader({ alg: 'HS256' })
                .setExpirationTime('1h')
                .sign(JWT_SECRET);

            const response = NextResponse.json({ token, userType: 'Employer', user, employer, message: "Login successful" }, { status: 200 });
            response.cookies.set('token', token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                maxAge: 3600,
                path: '/',
            });

            return response;
        } else {
            user = await prisma.user.findUnique({
                where: { email },
            });

            if (!user) {
                return NextResponse.json({ message: 'Invalid email or password' }, { status: 401 });
            }

            const isPasswordValid = await bcrypt.compare(password, user.password);
            if (!isPasswordValid) {
                return NextResponse.json({ message: 'Invalid email or password' }, { status: 401 });
            }

            const token = await new SignJWT({ userId: user.id, email: user.email, userType })
                .setProtectedHeader({ alg: 'HS256' })
                .setExpirationTime('1h')
                .sign(JWT_SECRET);

            const response = NextResponse.json({ token, userType: 'User', user, message: "Login successful" }, { status: 200 });
            response.cookies.set('token', token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                maxAge: 3600,
                path: '/',
            });

            return response;
        }
    } catch (error: any) {
        console.error(error);
        return NextResponse.json({ message: error?.message ?? 'Internal Server Error', error }, { status: 500 });
    }
}
