// /app/api/jobs/[id]/route.ts
import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { getUserFromRequest } from '@/lib/auth';

export async function GET(req: Request, { params }: any) {
    try {
        const payload = await getUserFromRequest("All");

        // Fetch the job details
        const job = await prisma.job.findUnique({
            where: { id: params.id },
            include: {
                postedBy: true,
                questions: {
                    include: {
                        fields: true,
                        responses: true,
                    },
                },
            },
        });

        if (!job) {
            return NextResponse.json({ message: 'Job not found' }, { status: 404 });
        }

        // Check if the job is bookmarked by the user
        let isBookmarked = false;
        if (payload?.userType === 'User' && payload?.userId) {
            const bookmark = await prisma.jobBookmark.findFirst({
                where: {
                    userId: payload.userId,
                    jobId: job.id,
                },
            });
            isBookmarked = !!bookmark;
        }

        // Check if the employer is the creator of the job
        if (job?.employerId !== payload?.companyId) {
            return NextResponse.json({
                job: {
                    ...job,
                    isBookmarked, // Include the bookmark status
                    questions: {
                        ...job.questions,
                        responses: undefined, // Remove responses if not the owner
                    },
                },
                status: 403,
            });
        }

        return NextResponse.json({
            ...job,
            isBookmarked, // Include the bookmark status
        }, { status: 200 });
    } catch (error:any) {
        console.error('Failed to fetch job:', error);
        return NextResponse.json({ message: error?.message ?? 'Failed to fetch job', error }, { status: 500 });
    }
}


export async function PUT(req: Request, { params }:any) {
    try {
        const payload = await getUserFromRequest("Employer")


        if (payload.userType !== 'Employer') {
            return NextResponse.json({ message: 'Unauthorized' }, { status: 403 });
        }

        const data = await req.json();

        const job = await prisma.job.findUnique(params.id)

        if (!job) return NextResponse.json({ message: "Job not found" }, { status: 404 })
        if (job.employerId !== payload.companyId) return NextResponse.json({ message: "Unauthorized access" }, { status: 420 })

        const updatedJob = await prisma.job.update({
            where: { id: params.id },
            data,
        });

        return NextResponse.json(updatedJob, { status: 200 });
    } catch (error:any) {
        return NextResponse.json({ message:error?.message ?? 'Failed to update job' ,error}, { status: 500 });
    }
}

export async function DELETE(req: Request, { params }:any) {
    try {
        const payload = await getUserFromRequest("Employer")

        if (payload.userType !== 'Employer') {
            return NextResponse.json({ message: 'Unauthorized' }, { status: 403 });
        }

        const job = await prisma.job.findUnique(params.id)

        if (!job) return NextResponse.json({ message: "Job not found" },{status:404})
        if (job.employerId !== payload.companyId) return NextResponse.json({ message: "Unauthorized access" },{status:420})

        await prisma.job.delete({
            where: { id: params.id },
        });

        return NextResponse.json({ message: 'Job deleted successfully' }, { status: 200 });
    } catch (error:any) {
        return NextResponse.json({ message:error?.message ?? 'Failed to delete job',error }, { status: 500 });
    }
}
