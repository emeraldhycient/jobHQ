// prisma/seed.ts
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
                name: faker.name.fullName(),
                country: faker.address.country(),
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
                industry: faker.company.bs(),
                description: faker.company.catchPhrase(),
                logo: faker.image.url(),
                country: faker.address.country(),
            },
        })
    );
    const createdEmployers = await Promise.all(employers);

    // Create Jobs
    const jobs = Array.from({ length: 15 }).map(() =>
        prisma.job.create({
            data: {
                title: faker.name.jobTitle(),
                description: faker.lorem.paragraph(),
                location: faker.address.city(),
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

    // Create Resumes
    const resumes = createdUsers.map(user =>
        prisma.resume.create({
            data: {
                basicInfo: faker.lorem.sentence(),
                workExperience: JSON.stringify([
                    { company: faker.company.name(), role: faker.name.jobTitle(), duration: faker.date.past().toISOString() },
                ]),
                education: JSON.stringify([{ degree: faker.name.jobTitle() }]),
                skills: [faker.hacker.noun()],
                user: {
                    connect: { id: user.id },
                },
            },
        })
    );
    const createdResumes = await Promise.all(resumes);

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
                    connect: { id: faker.helpers.arrayElement(createdResumes).id },
                },
                responses: {
                    create: {
                        formId: faker.helpers.arrayElement(createdForms).id,
                        responses: JSON.stringify({
                            'Full Name': faker.name.fullName(),
                            'Email Address': faker.internet.email(),
                        }),
                    },
                },
            },
        })
    );
    await Promise.all(jobApplications);

    console.log('Seed data inserted');
}

main()
    .catch(e => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
