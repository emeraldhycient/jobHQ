// /app/api/jobs/seeker/route.ts
import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { getUserFromRequest } from '@/lib/auth';
import { utils } from '@/lib/utils';

export async function GET(req: NextRequest) {
    try {
        const payload = await getUserFromRequest("User");

        if (payload.userType !== 'User') {
            return NextResponse.json({ message: 'Unauthorized' }, { status: 403 });
        }

        const url = new URL(req.url);
        const page = parseInt(url.searchParams.get('page') || '1', 10);
        const limit = parseInt(url.searchParams.get('limit') || '10', 10);
        const offset = (page - 1) * limit;

        const jobs = await prisma.jobApplication.findMany({
            where: { userId: payload.userId },
            include: {
                job: {
                    include: {
                        postedBy: true,
                    },
                },
            },
            skip: offset,
            take: limit,
        });

        const totalJobs = await prisma.jobApplication.count({
            where: { userId: payload.userId },
        });

        const totalPages = Math.ceil(totalJobs / limit);

        if (!jobs.length) {
            return NextResponse.json({ message: "No jobs found", jobs: [] }, { status: 404 });
        }

        return NextResponse.json({
            message: "Jobs applied to found",
            jobs,
            pagination: {
                currentPage: page,
                totalPages,
                totalJobs,
            },
        }, { status: 200 });

    } catch (error) {
        return NextResponse.json({ message: "Something went wrong", error }, { status: 500 });
    }
}
