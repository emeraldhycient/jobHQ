import { getUserFromRequest } from '@/lib/auth';
import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';


export async function GET(req: Request, { params }: any) {

    try {
        const payload = await getUserFromRequest("User")

        const query = await prisma.learningPath.findUnique({ where: { id: params.id } })

        if (!query) return NextResponse.json({ message: "learning path not found" }, { status: 404 })
        if (query.userId !== payload.userId) return NextResponse.json({ message: "Unauthorized access" }, { status: 420 })


        return NextResponse.json({ data: query, message: "Learning path retrieved successfully" }, { status: 200 });
    } catch (error) {
        console.error('Error retrieving content:', error);
        return NextResponse.json({ message: 'Error retrieving content', error }, { status: 500 });
    }
}
