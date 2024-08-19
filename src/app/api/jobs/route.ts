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


        const { title, description, location, type, requirements, responsibilities, salaryRange, benefits, questions,experience } = await req.json();

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
                experience,
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

        // Get pagination parameters
        const page = parseInt(url.searchParams.get('page') || '1', 10);
        const limit = parseInt(url.searchParams.get('limit') || '10', 10);

        // Calculate the offset for the query
        const offset = (page - 1) * limit;

        const [jobs, totalJobs] = await Promise.all([
            prisma.job.findMany({
                where: filters,
                include: {
                    postedBy: true,
                },
                skip: offset,
                take: limit,
            }),
            prisma.job.count({ where: filters }), // Get total count for pagination
        ]);

        const totalPages = Math.ceil(totalJobs / limit);

        return NextResponse.json({
            message: "Jobs found",
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
        return NextResponse.json({ message: 'Failed to fetch jobs', error }, { status: 500 });
    }
}

