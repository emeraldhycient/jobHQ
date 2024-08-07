// /app/api/applications/route.ts
import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { getUserFromRequest, verifyJWT } from '@/lib/auth';
import { applicationSchema } from '@/constants/schema';

export async function POST(req: Request) {
    try {
        const payload = await getUserFromRequest("User")

        if (payload.userType !== 'User') {
            return NextResponse.json({ message: 'Unauthorized' }, { status: 403 });
        }

        const applicationData = await req.json();
        const { error } = applicationSchema.validate(applicationData);
        if (error) {
            return NextResponse.json({ message: error.details[0].message,error }, { status: 400 });
        }

        const { jobId, resumeId, status } = applicationData;

        const application = await prisma.jobApplication.create({
            data: {
                jobId,
                resumeId,
                userId: payload.userId,
                status,
            },
        });

        return NextResponse.json(application, { status: 201 });
    } catch (error) {
        console.error('Job application error:', error);
        return NextResponse.json({ message: 'Failed to apply for job', error }, { status: 500 });
    }
}
