import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { utils } from '@/lib/utils';


export async function GET(req: NextRequest) {
    try {
        const url = new URL(req.url);
        const filters = utils.buildJobFilters(url.searchParams);

        const jobs = await prisma.job.findMany({
            where: filters,
        });

        return NextResponse.json(jobs, { status: 200 });
    } catch (error) {
        console.error('Failed to fetch jobs:', error);
        return NextResponse.json({ error: 'Failed to fetch jobs' }, { status: 500 });
    }
}


