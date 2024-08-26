import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { utils } from '@/lib/utils';

export async function GET(req: NextRequest) {
    try {
        const filters = utils.buildJobFilters(req.nextUrl.searchParams);

        // Get pagination parameters
        const page = parseInt(req.nextUrl.searchParams.get('page') || '1', 10);
        const limit = parseInt(req.nextUrl.searchParams.get('limit') || '10', 10);

        // Calculate the offset for the query
        const offset = (page - 1) * limit;

        // Fetch paginated jobs
        const [jobs, totalJobs] = await Promise.all([
            prisma.job.findMany({
                where: filters,
                skip: offset,
                take: limit,
            }),
            prisma.job.count({ where: filters }), // Get total count for pagination
        ]);

        const totalPages = Math.ceil(totalJobs / limit);

        // Return jobs with pagination info
        return NextResponse.json({
            message: "Jobs found",
            jobs,
            pagination: {
                totalJobs,
                totalPages,
                currentPage: page,
                limit,
            },
        }, { status: 200 });
    } catch (error) {
        console.error('Failed to fetch jobs:', error);
        return NextResponse.json({ message: 'Failed to fetch jobs', error }, { status: 500 });
    }
}
