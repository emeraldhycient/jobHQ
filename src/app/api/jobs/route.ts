// /app/api/jobs/route.ts
import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { getUserFromRequest, verifyJWT } from '@/lib/auth';
import { jobSchema } from '@/constants/schema';

export async function POST(req: Request) {
    try {
        const payload = await getUserFromRequest("User")

        if (payload.userType !== 'Employer') {
            return NextResponse.json({ message: 'Unauthorized' }, { status: 403 });
        }

        const jobData = await req.json();
        const { error } = jobSchema.validate(jobData);
        if (error) {
            return NextResponse.json({ message: error.details[0].message ,error}, { status: 400 });
        }


        const { title, description, location, type, requirements, responsibilities, salaryRange, benefits } = await req.json();
        const job = await prisma.job.create({
            data: {
                title,
                description,
                location,
                type,
                requirements,
                responsibilities,
                salaryRange,
                benefits,
                employerId: payload.userId,
            },
        });

        return NextResponse.json(job, { status: 201 });
    } catch (error) {
        return NextResponse.json({ message: 'Failed to create job',error }, { status: 500 });
    }
}

export async function GET() {
    try {
        const jobs = await prisma.job.findMany();
        return NextResponse.json(jobs, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch jobs' }, { status: 500 });
    }
}
