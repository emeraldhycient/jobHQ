import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { getUserFromRequest } from '@/lib/auth';
import { utils } from '@/lib/utils';

export async function POST(req: NextRequest) {
    try {
        const payload = await getUserFromRequest("User");
        const { jobId } = await req.json();

        const existingBookmark = await prisma.jobBookmark.findFirst({
            where: { userId: payload.userId, jobId },
        });

        if (existingBookmark) {
            return NextResponse.json({ message: 'Job already bookmarked' }, { status: 409 });
        }

        const bookmark = await prisma.jobBookmark.create({
            data: {
                userId: payload.userId,
                jobId,
            },
        });

        return NextResponse.json({ message: 'Job bookmarked successfully', bookmark }, { status: 201 });
    } catch (error:any) {
        console.error('Error bookmarking job:', error);
        return NextResponse.json({ message: error?.message ?? 'Failed to bookmark job', error }, { status: 500 });
    }
}



export async function GET(req: NextRequest) {
    try {
        const url = new URL(req.url);
        const filters = utils.buildJobFilters(url.searchParams);

        // Get pagination parameters
        const page = parseInt(url.searchParams.get('page') || '1', 10);
        const limit = parseInt(url.searchParams.get('limit') || '10', 10);

        // Calculate the offset for the query
        const offset = (page - 1) * limit;

        const payload = await getUserFromRequest('User');
        
        if (!payload) {
            return NextResponse.json({ message: 'Unauthorized' }, { status: 403 });
        }

        // Fetch paginated bookmarked jobs
        const [bookmarks, totalBookmarks] = await Promise.all([
            prisma.jobBookmark.findMany({
                where: {
                    userId: payload.userId,
                    job: filters, // Apply the job filters here
                },
                include: {
                    job: {
                        include: {
                            postedBy: true,
                        },
                    },
                },
                skip: offset,
                take: limit,
            }),
            prisma.jobBookmark.count({
                where: {
                    userId: payload.userId,
                    job: filters, // Apply the job filters here for count as well
                },
            }),
        ]);

        const totalPages = Math.ceil(totalBookmarks / limit);

        // Return jobs with pagination info
        return NextResponse.json({
            message: "Bookmarks found",
            bookmarks,
            pagination: {
                totalBookmarks,
                totalPages,
                currentPage: page,
                limit,
            },
        }, { status: 200 });
    } catch (error:any) {
        console.error('Failed to fetch bookmarks:', error);
        return NextResponse.json({ message: error?.message ?? 'Failed to fetch bookmarks', error }, { status: 500 });
    }
}
