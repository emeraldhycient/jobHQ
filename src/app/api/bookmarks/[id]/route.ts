import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { getUserFromRequest } from '@/lib/auth';

export async function DELETE(req: NextRequest, { params }: any) {
    try {
        const payload = await getUserFromRequest("User");

        const bookmark = await prisma.jobBookmark.findUnique({
            where: { id: params.id },
            include: { user: true },
        });

        if (!bookmark || bookmark.userId !== payload.userId) {
            return NextResponse.json({ message: 'Bookmark not found or unauthorized' }, { status: 404 });
        }

        await prisma.jobBookmark.delete({
            where: { id: params.id },
        });

        return NextResponse.json({ message: 'Bookmark removed successfully' }, { status: 200 });
    } catch (error) {
        console.error('Error removing bookmark:', error);
        return NextResponse.json({ message: 'Failed to remove bookmark', error }, { status: 500 });
    }
}
