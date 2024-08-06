// /app/api/analytics/route.ts
import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { getUserFromRequest, verifyJWT } from '@/lib/auth';
import { headers } from 'next/headers';
import { cookies } from 'next/headers'

export async function GET(req: Request) {
    try {
        const user = await getUserFromRequest("User")
        // let analytics;
        // if (payload.userType === 'Employer') {
        //     analytics = await prisma.employerAnalytics.findMany({
        //         where: { employerId: payload.userId },
        //     });
        // } else if (payload.userType === 'User') {
        //     analytics = await prisma.analytics.findMany({
        //         where: { userId: payload.userId },
        //     });
        // } else {
        //     return NextResponse.json({ message: 'Access denied' }, { status: 403 });
        // }

        return NextResponse.json({user}, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: 'Failed to fetch analytics',error }, { status: 500 });
    }
}
