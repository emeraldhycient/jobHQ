// app/api/formResponses/route.ts
import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function POST(request: Request) {
    const { formId, responses } = await request.json();

    // const response = await prisma.formResponse.create({
    //     data: {
    //         formId,
    //         responses,
    //     },
    // });

    return NextResponse.json({message:"HEHE"}, { status: 201 });
}
