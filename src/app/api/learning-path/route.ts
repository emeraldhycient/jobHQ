import { getUserFromRequest } from '@/lib/auth';
import prompts from '@/prompts';
import chatgptService from '@/services/gpt/chatgptService';
import { NextApiRequest, NextApiResponse } from 'next';
import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function POST(req: Request) {

    try {
        const data = await req.json();
        const { variables, additionalData } = data;
        
        const payload = await getUserFromRequest("User")


        if (!variables || !variables.topic) {
            return NextResponse.json({ message: 'Missing required fields:variables, or topic' }, { status: 400 });
        }

        const result = await chatgptService.generateContent({ promptTemplate: prompts.learningPath, variables, additionalData });

        const query = await prisma.learningPath.create({
            data: {
                title: result?.data?.title,
                banner: result?.data?.banner,
                description: result?.data?.description,
                roadmap: result?.data?.roadmap,
                userId: payload?.userId,
                projectIdeas: result?.data?.projectIdeas,
                overallEstimatedCompletionTime: result?.data?.overallEstimatedCompletionTime,
            }
        })

        return NextResponse.json({ data: query,message:"Learning path created successfully" }, { status: 200 });
    } catch (error) {
        console.error('Error generating content:', error);
        return NextResponse.json({ message: 'Error generating content', error }, { status: 500 });
    }
}



export async function GET(req: NextRequest) {
    try {
        const payload = await getUserFromRequest("User");

        // Parse query parameters for pagination
        const url = new URL(req.url);
        const page = parseInt(url.searchParams.get('page') || '1', 10);
        const limit = parseInt(url.searchParams.get('limit') || '10', 10);

        // Calculate the offset
        const offset = (page - 1) * limit;

        // Fetch the learning paths with pagination
        const [learningPaths, totalPaths] = await Promise.all([
            prisma.learningPath.findMany({
                where: {
                    userId: payload?.userId,
                },
                skip: offset,
                take: limit,
            }),
            prisma.learningPath.count({
                where: {
                    userId: payload?.userId,
                },
            })
        ]);

        // Calculate total pages
        const totalPages = Math.ceil(totalPaths / limit);

        return NextResponse.json({
            data: learningPaths,
            pagination: {
                totalPaths,
                totalPages,
                currentPage: page,
                limit,
            },
            message: "Learning paths retrieved successfully"
        }, { status: 200 });

    } catch (error) {
        console.error('Error retrieving content:', error);
        return NextResponse.json({ message: 'Error retrieving content', error }, { status: 500 });
    }
}