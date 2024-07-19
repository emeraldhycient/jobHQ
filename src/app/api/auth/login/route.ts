import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { loginSchema } from '@/constants/schema';

const JWT_SECRET = process.env.JWT_SECRET || 'your_secret_key';



export async function POST(req: NextRequest) {
    try {
        const data = await req.json();
        const { error } = loginSchema.validate(data);

        if (error) {
            return NextResponse.json({ message: error.details[0].message, error }, { status: 400 });
        }

        const { email, password, userType } = data;

        let user;

        if (userType === 'Employer') {
            user = await prisma.employer.findUnique({
                where: { companyEmail: email },
            });

            if (!user) {
                return NextResponse.json({ message: 'Invalid email or password' }, { status: 401 });
            }

            const isPasswordValid = await bcrypt.compare(password, user.password);
            if (!isPasswordValid) {
                return NextResponse.json({ message: 'Invalid email or password' }, { status: 401 });
            }

            const token = jwt.sign(
                { employerId: user.id, email: user.companyEmail, userType },
                JWT_SECRET,
                { expiresIn: '1h' }
            );

            return NextResponse.json({ token, userType: 'Employer', message: "login successful" }, { status: 200 });
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

            const token = jwt.sign(
                { userId: user.id, email: user.email, userType },
                JWT_SECRET,
                { expiresIn: '1h' }
            );

            return NextResponse.json({ token, userType: 'User', message: "login successful" }, { status: 200 });
        }
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: 'Internal Server Error', error }, { status: 500 });
    }
}
