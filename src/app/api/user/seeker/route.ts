import { getUserFromRequest } from '@/lib/auth';
import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET(req: NextRequest) {
    const payload = await getUserFromRequest("User")
    const user = await prisma.findUnique({
        where: { id: payload.userId },
        omit: {
            password: true
        }
    })

    if (!user) return NextResponse.json({ message: "User not found" }, { status: 404 })

    return NextResponse.json({ message: "User found", user }, { status: 404 })

}