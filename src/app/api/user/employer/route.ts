import { getUserFromRequest } from '@/lib/auth';
import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET(req: NextRequest) {
    try {
        const payload = await getUserFromRequest("Employer");

        // Fetch the company and the specific user tied to this company
        const company = await prisma.employer.findUnique({
            where: { id: payload.companyId },
            include: {
                users: {
                    where: { id: payload.userId },
                    omit: {
                        password: true
                    }
                },
            },
        });

        if (!company) {
            return NextResponse.json({ message: "Company not found" }, { status: 404 });
        }

        return NextResponse.json({ message: "Company found", company }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "An error occured fetching companny profile", error }, { status: 404 });
    }

}


