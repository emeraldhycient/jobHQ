// /app/api/jobs/[id]/route.ts
import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { getUserFromRequest } from '@/lib/auth';

export async function GET(req: Request, { params }:any) {
    try {
        const job = await prisma.job.findUnique({
            where: { id: params.id },
            include: {
                questions:true
            }
        });

        if (!job) {
            return NextResponse.json({ message: 'Job not found' }, { status: 404 });
        }

        return NextResponse.json(job, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: 'Failed to fetch job',error }, { status: 500 });
    }
}

export async function PUT(req: Request, { params }:any) {
    try {
        const payload = await getUserFromRequest("Employer")


        if (payload.userType !== 'Employer') {
            return NextResponse.json({ message: 'Unauthorized' }, { status: 403 });
        }

        const data = await req.json();
        const updatedJob = await prisma.job.update({
            where: { id: params.id },
            data,
        });

        return NextResponse.json(updatedJob, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: 'Failed to update job' ,error}, { status: 500 });
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
    } catch (error) {
        return NextResponse.json({ message: 'Failed to delete job',error }, { status: 500 });
    }
}
