import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import bcrypt from 'bcryptjs';
import { SignJWT } from 'jose';
import { createAccountSchema } from '@/constants/schema';

const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET || 'your_jwt_secret_key');

export async function POST(request: NextRequest) {
    try {
        const data = await request.json();
        const { error } = createAccountSchema.validate(data);
        console.log({ validationError: error });

        if (error) {
            return NextResponse.json({ message: error.details[0].message, error }, { status: 400 });
        }

        const { email, password, name, userType, country } = data;

        // Check if the user or employer already exists
        if (userType === 'Employer') {
            const existingEmployer = await prisma.employer.findUnique({ where: { companyEmail: email } });
            if (existingEmployer) {
                return NextResponse.json({ message: 'Employer already exists' }, { status: 400 });
            }

            const hashedPassword = await bcrypt.hash(password, 10);
            const employer = await prisma.employer.create({
                data: {
                    companyName: name,
                    companyEmail: email,
                    country,
                    users: {
                        create: {
                            name: name,
                            email: email,
                            password: hashedPassword,
                            status: 'ACTIVE', 
                        },
                    },
                },
            });

            const token = await new SignJWT({ userId: employer.id, email: employer.companyEmail, userType: 'Employer' })
                .setProtectedHeader({ alg: 'HS256' })
                .setExpirationTime('24h')
                .sign(JWT_SECRET);

            const response = NextResponse.json({ token, userType: 'Employer', message: "Account created successfully" }, { status: 201 });
           
            return response;
        } else {
            const existingUser = await prisma.user.findUnique({ where: { email } });
            if (existingUser) {
                return NextResponse.json({ message: 'User already exists' }, { status: 400 });
            }

            const hashedPassword = await bcrypt.hash(password, 10);
            const user = await prisma.user.create({
                data: {
                    email,
                    password: hashedPassword,
                    country,
                    name,
                },
            });

            const token = await new SignJWT({ userId: user.id, email: user.email, userType: 'User' })
                .setProtectedHeader({ alg: 'HS256' })
                .setExpirationTime('24h')
                .sign(JWT_SECRET);

            const response = NextResponse.json({ token, userType: 'User', message: "Account created successfully" }, { status: 201 });

            return response;
        }
    } catch (error:any) {
        console.error(error);
        return NextResponse.json({ message: error?.message ?? 'Internal Server Error', error: error }, { status: 500 });
    }
}
