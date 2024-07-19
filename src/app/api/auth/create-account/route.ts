import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret_key';

export async function POST(request: NextRequest) {
    try {
        const { email, password, name, userType, companyName, companyEmail } = await request.json();

        // Check if the user or employer already exists
        if (userType === 'Employer') {
            const existingEmployer = await prisma.employer.findUnique({ where: { companyEmail } });
            if (existingEmployer) {
                return NextResponse.json({ error: 'Employer already exists' }, { status: 400 });
            }

            const hashedPassword = await bcrypt.hash(password, 10);
            const employer = await prisma.employer.create({
                data: {
                    companyName,
                    companyEmail,
                    password: hashedPassword,
                },
            });

            const token = jwt.sign({ userId: employer.id, email: employer.companyEmail, userType: 'Employer' }, JWT_SECRET, { expiresIn: '1h' });

            return NextResponse.json({ token, userType: 'Employer' }, { status: 201 });
        } else {
            const existingUser = await prisma.user.findUnique({ where: { email } });
            if (existingUser) {
                return NextResponse.json({ error: 'User already exists' }, { status: 400 });
            }

            const hashedPassword = await bcrypt.hash(password, 10);
            const user = await prisma.user.create({
                data: {
                    email,
                    password: hashedPassword,
                    name,
                },
            });

            const token = jwt.sign({ userId: user.id, email: user.email, userType: 'User' }, JWT_SECRET, { expiresIn: '1h' });

            return NextResponse.json({ token, userType: 'User' }, { status: 201 });
        }
    } catch (error) {
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
