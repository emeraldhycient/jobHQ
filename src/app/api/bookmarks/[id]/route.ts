import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { getUserFromRequest } from '@/lib/auth';

export async function DELETE(req: NextRequest, { params }: any) {
    try {
        const payload = await getUserFromRequest("User");

        const bookmark = await prisma.jobBookmark.findFirst({
            where: {
                jobId: params.id,
                userId: payload.userId
            },
        });

        if (!bookmark) {
            return NextResponse.json({ message: 'Bookmark not found or unauthorized' }, { status: 404 });
        }

        // Delete the bookmark
        await prisma.jobBookmark.delete({
            where: { id: bookmark.id },
        });

        return NextResponse.json({ message: 'Bookmark removed successfully' }, { status: 200 });
    } catch (error: any) {
        console.error(error);
        return NextResponse.json({ message: error?.message ?? 'Internal Server Error', error }, { status: 500 });
    }
}
