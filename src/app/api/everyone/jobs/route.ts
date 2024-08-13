import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { utils } from '@/lib/utils';


export async function GET(req: NextRequest) {
    try {
        const url = new URL(req.url);
        const filters = utils.buildJobFilters(url.searchParams);

        // Get pagination parameters
        const page = parseInt(url.searchParams.get('page') || '1', 10);
        const limit = parseInt(url.searchParams.get('limit') || '10', 10);

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
        return NextResponse.json({ error: 'Failed to fetch jobs' }, { status: 500 });
    }
}


