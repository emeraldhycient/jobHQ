import { getUserFromRequest } from "@/lib/auth";
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(req: NextRequest) {
    try {
        const payload = await getUserFromRequest("All")

        if (payload.userType == "Employer") {
            const user = await prisma?.employerUser.findUnique({
                where: { id: payload.userId },
                omit: {
                    password: true
                },
                include: {
                    employer: true
                }
            })
            if (!user) return NextResponse.json({ message: 'User not found' }, { status: 404 });

            return NextResponse.json({ message: 'user found', user: { ...user, userType: "Employer" } }, { status: 200 });
        } else {
            const user = await prisma?.user.findUnique({
                where: { id: payload.userId },
                omit: {
                    password: true
                }
            })
            if (!user) return NextResponse.json({ message: 'User not found' }, { status: 404 });

            return NextResponse.json({message: 'user found', user: {...user,userType: "Employer"}}, { status: 200 });
        }
    } catch (error: any) {
        console.error(error);
        return NextResponse.json({ message: error?.message ?? 'Internal Server Error', error }, { status: 500 });
    }
}