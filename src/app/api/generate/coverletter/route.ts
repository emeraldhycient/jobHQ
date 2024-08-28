import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import prompts from '@/prompts';
import chatgptService from '@/services/gpt/chatgptService';
import { getUserFromRequest } from '@/lib/auth';
import { ICoverLetterPromptProps } from '@/constants/interface';

export async function POST(req: NextRequest) {
    try {
        const payload: any = await getUserFromRequest("User")

        const body = await req.json();

        const {
            language,
            tone,
            name,
            jobPosition,
            experience,
            jobDescription,
            wordLimit,
            numberOfResults,
            creativityLevel
        }: ICoverLetterPromptProps = body;

        const promptTemplate = prompts.coverLetterPrompt({
            language,
            tone,
            name,
            jobPosition,
            experience,
            jobDescription,
            wordLimit,
            numberOfResults,
            creativityLevel,
        });

        const response = await chatgptService.generate({
            promptTemplate,
            response_format: {
                type:"text"
            }
        });

        const coverLetterContent = response.data;

        // Save the cover letter in the database
        const savedCoverLetter = await prisma.coverLetter.create({
            data: {
                metaData:{ language, tone, creativityLevel, wordLimit, numberOfResults },
                jobPosition,
                letter: coverLetterContent,
                experienceLevel: experience,
                user: {
                    connect: { id: payload?.userId} 
                }
            }
        });

        return NextResponse.json({ success: true, data: savedCoverLetter });
    } catch (error: any) {
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}
