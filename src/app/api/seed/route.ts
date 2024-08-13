// app/api/seed/route.ts
import { NextResponse } from 'next/server';
import { faker } from '@faker-js/faker';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    // Create Users
    const users = Array.from({ length: 15 }).map(() =>
        prisma.user.create({
            data: {
                email: faker.internet.email(),
                password: faker.internet.password(),
                name: faker.person.fullName(),
                country: faker.location.country(),
                skills: JSON.stringify([faker.hacker.noun(), faker.hacker.noun()]),
            },
        })
    );
    const createdUsers = await Promise.all(users);

    // Create Employers
    const employers = Array.from({ length: 5 }).map(() =>
        prisma.employer.create({
            data: {
                companyName: faker.company.name(),
                companyEmail: faker.internet.email(),
                industry: faker.company.buzzPhrase(),
                description: faker.company.catchPhrase(),
                logo: faker.image.url(),
                country: faker.location.country(),
            },
        })
    );
    const createdEmployers = await Promise.all(employers);

    // Create Jobs
    const jobs = Array.from({ length: 15 }).map(() =>
        prisma.job.create({
            data: {
                title: faker.person.jobTitle(),
                description: faker.lorem.paragraph(),
                location: faker.location.city(),
                type: faker.helpers.arrayElement(['FULL_TIME', 'PART_TIME', 'CONTRACT']),
                requirements: [faker.hacker.noun(), faker.hacker.noun()],
                responsibilities: [faker.hacker.phrase()],
                postedBy: {
                    connect: { id: faker.helpers.arrayElement(createdEmployers).id },
                },
            },
        })
    );
    const createdJobs = await Promise.all(jobs);

    // Create Forms
    const forms = createdJobs.map(job =>
        prisma.form.create({
            data: {
                job: {
                    connect: { id: job.id },
                },
                title: 'Application Form',
                fields: {
                    create: [
                        {
                            type: 'TEXT',
                            label: 'Full Name',
                        },
                        {
                            type: 'CHECKBOX',
                            label: 'Email Address',
                        },
                    ],
                },
            },
        })
    );
    const createdForms = await Promise.all(forms);

    // Create Job Applications
    const jobApplications = createdUsers.map(user =>
        prisma.jobApplication.create({
            data: {
                status: faker.helpers.arrayElement(['APPLIED', 'INTERVIEW_SCHEDULED', 'OFFERED']),
                user: {
                    connect: { id: user.id },
                },
                job: {
                    connect: { id: faker.helpers.arrayElement(createdJobs).id },
                },
                resume: {
                    create: {
                        basicInfo: faker.lorem.sentence(),
                        workExperience: JSON.stringify([
                            { company: faker.company.name(), role: faker.person.jobTitle(), duration: faker.date.past().toISOString() },
                        ]),
                        education: JSON.stringify([{ degree: faker.person.jobTitle() }]),
                        skills: [faker.hacker.noun()],
                        user: {
                            connect: { id: user.id },
                        },
                    },
                },
                responses: {
                    create: {
                        formId: faker.helpers.arrayElement(createdForms).id,
                        responses: JSON.stringify({
                            'Full Name': faker.person.fullName(),
                            'Email Address': faker.internet.email(),
                        }),
                    },
                },
            },
        })
    );
    const createdJobApplications = await Promise.all(jobApplications);

    return {
        users: createdUsers,
        employers: createdEmployers,
        jobs: createdJobs,
        forms: createdForms,
        jobApplications: createdJobApplications,
    };
}

export async function POST() {
    try {
        const seededData = await main();
        return NextResponse.json(seededData);
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'An error occurred during seeding' }, { status: 500 });
    } finally {
        await prisma.$disconnect();
    }
}
