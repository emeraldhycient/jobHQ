import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { createAccountSchema } from '@/constants/schema';

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret_key';


export async function POST(request: NextRequest) {
    try {
        const data = await request.json();
        const { error } = createAccountSchema.validate(data);
        console.log({ validationError: error })

        if (error) {
            return NextResponse.json({ message: error.details[0].message, error }, { status: 400 });
        }

        const { email, password, name, userType, country } = data;

        // Check if the user or employer already exists
        if (userType === 'Employer') {
            const existingEmployer = await prisma.employer.findUnique({ where: { companyEmail:email } });
            if (existingEmployer) {
                return NextResponse.json({ message: 'Employer already exists' }, { status: 400 });
            }

            const hashedPassword = await bcrypt.hash(password, 10);
            const employer = await prisma.employer.create({
                data: {
                    companyName:name,
                    companyEmail:email,
                    country,
                    password: hashedPassword,
                },
            });

            const token = jwt.sign({ userId: employer.id, email: employer.companyEmail, userType: 'Employer' }, JWT_SECRET, { expiresIn: '1h' });

            return NextResponse.json({ token, userType: 'Employer', message: "Account created successful" }, { status: 201 });
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

            const token = jwt.sign({ userId: user.id, email: user.email, userType: 'User' }, JWT_SECRET, { expiresIn: '1h' });

            return NextResponse.json({ token, userType: 'User', message: "Account created successful" }, { status: 201 });
        }
    } catch (error) {
        return NextResponse.json({ message: 'Internal Server Error', error }, { status: 500 });
    }
}
