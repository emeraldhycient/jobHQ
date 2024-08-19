// /app/api/jobs/seeker/route.ts
import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { getUserFromRequest } from '@/lib/auth';
import { utils } from '@/lib/utils';

export async function GET() {
    try {
        const payload = await getUserFromRequest("User")

        if (payload.userType !== 'User') {
            return NextResponse.json({ message: 'Unauthorized' }, { status: 403 });
        }

        const jobs = await prisma.jobApplication.findMany({
            where: { userId: payload.userId },
            include: {
                job: {
                    include: {
                       postedBy :true
                   }
                }
            }
        })

        if (!jobs) return NextResponse.json({ message: "Jobs not found", jobs }, { status: 404 }) 
        
        return NextResponse.json({ message: "Jobs applied to found", jobs }, { status: 200 }) 

    } catch (error) {
       return NextResponse.json({message:"Something went wrong",error},{status:500}) 
    }
   
}