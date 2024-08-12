// /app/api/jobs/route.ts
import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { getUserFromRequest, verifyJWT } from '@/lib/auth';
import { jobSchema } from '@/constants/schema';
import { Prisma } from '@prisma/client';


export async function POST(req: Request) {
    try {
        const payload = await getUserFromRequest("Employer")

        if (payload.userType !== 'Employer') {
            return NextResponse.json({ message: 'Unauthorized' }, { status: 403 });
        }

        const jobData = await req.json();
        const { error } = jobSchema.validate(jobData);
        if (error) {
            return NextResponse.json({ message: error.details[0].message ,error}, { status: 400 });
        }


        const { title, description, location, type, requirements, responsibilities, salaryRange, benefits, questions } = await req.json();

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
                questions: questions
                    ? {
                        create: {
                            title: questions.title,
                            fields: {
                                create: questions.fields.map((field: any) => ({
                                    type: field.type,
                                    label: field.label,
                                    options: field.options,
                                })),
                            },
                        },
                    }
                    : undefined,
            },
        });

        return NextResponse.json(job, { status: 201 });
    } catch (error) {
        return NextResponse.json({ message: 'Failed to create job',error }, { status: 500 });
    }
}

export async function GET(req: NextRequest) {
    try {
        const url = new URL(req.url);
        const filters = buildJobFilters(url.searchParams);

        const jobs = await prisma.job.findMany({
            where: filters,
        });

        return NextResponse.json(jobs, { status: 200 });
    } catch (error) {
        console.error('Failed to fetch jobs:', error);
        return NextResponse.json({ error: 'Failed to fetch jobs' }, { status: 500 });
    }
}



export function buildJobFilters(searchParams: URLSearchParams): Prisma.JobWhereInput {
    const filters: Prisma.JobWhereInput = {};

    const title = searchParams.get('title');
    const location = searchParams.get('location');
    const type:any = searchParams.get('type');
    const requirements = searchParams.getAll('requirements');
    const responsibilities = searchParams.getAll('responsibilities');
    const salaryRange = searchParams.get('salaryRange');
    const benefits = searchParams.getAll('benefits');
    const status:any = searchParams.get('status');
    const employerId = searchParams.get('employerId');

    if (title) {
        filters.title = { contains: title, mode: 'insensitive' };
    }

    if (location) {
        filters.location = { contains: location, mode: 'insensitive' };
    }

    if (type) {
        filters.type = type;
    }

    if (requirements.length > 0) {
        filters.requirements = { hasSome: requirements };
    }

    if (responsibilities.length > 0) {
        filters.responsibilities = { hasSome: responsibilities };
    }

    if (salaryRange) {
        filters.salaryRange = { contains: salaryRange, mode: 'insensitive' };
    }

    if (benefits.length > 0) {
        filters.benefits = { hasSome: benefits };
    }

    if (status) {
        filters.status = status;
    }

    if (employerId) {
        filters.employerId = employerId;
    }

    return filters;
}
