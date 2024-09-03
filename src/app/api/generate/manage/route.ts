import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET(req: NextRequest) {
    try {
        const resumes = await prisma.resume.findMany();
        const coverLetters = await prisma.coverLetter.findMany();

        return NextResponse.json({ success: true, data: { resumes, coverLetters } });
    } catch (error: any) {
        return NextResponse.json({ success: false, error: error, message:error?.message ?? "An error occured fetching resumes"}, { status: 500 });
    }
}

export async function DELETE(req: NextRequest) {
    try {
        const { searchParams } = new URL(req.url);
        const id = searchParams.get('id');
        const type = searchParams.get('type'); // 'resume' or 'coverLetter'

        if (!id || !type) {
            return NextResponse.json({ success: false, error: 'ID and type are required' }, { status: 400 });
        }

        if (type === 'resume') {
            await prisma.resume.delete({ where: { id } });
        } else if (type === 'coverLetter') {
            await prisma.coverLetter.delete({ where: { id } });
        } else {
            return NextResponse.json({ success: false, error: 'Invalid document type' }, { status: 400 });
        }

        return NextResponse.json({ success: true, message: `${type} deleted successfully` });
    } catch (error: any) {
        return NextResponse.json({ success: false, error: error,message:error?.message ?? "An error occured deleting document" }, { status: 500 });
    }
}
