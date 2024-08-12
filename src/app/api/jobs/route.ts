// /app/api/jobs/route.ts
import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { getUserFromRequest } from '@/lib/auth';
import { jobSchema } from '@/constants/schema';
import { utils } from '@/lib/utils';


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
                employerId: payload.companyId,
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


