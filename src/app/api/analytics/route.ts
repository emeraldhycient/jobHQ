// /app/api/analytics/route.ts
import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { verifyJWT } from '@/lib/auth';

export async function GET(req: Request) {
    try {
        const token = req.headers.get('authorization')?.split(' ')[1];
        const { payload }: any = await verifyJWT(token as any, process.env.JWT_SECRET || "");

        let analytics;
        if (payload.userType === 'Employer') {
            analytics = await prisma.employerAnalytics.findMany({
                where: { employerId: payload.userId },
            });
        } else if (payload.userType === 'User') {
            analytics = await prisma.analytics.findMany({
                where: { userId: payload.userId },
            });
        } else {
            return NextResponse.json({ message: 'Access denied' }, { status: 403 });
        }

        return NextResponse.json(analytics, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: 'Failed to fetch analytics',error }, { status: 500 });
    }
}
