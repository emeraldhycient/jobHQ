import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET(req: Request, { params }: any) {
    try {

        // Check if the job exists and belongs to the employer
        const job = await prisma.job.findUnique({
            where: { id: params.id },
            include: {
                postedBy: true,
            }
        });

        if (!job) {
            return NextResponse.json({ message: 'Job not found' }, { status: 404 });
        }


        return NextResponse.json(job, { status: 200 });
    } catch (error) {
        console.error('Failed to fetch job:', error);
        return NextResponse.json({ message: 'Failed to fetch job', error }, { status: 500 });
    }
}
