import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { IResumePromptProps } from '@/constants/interface';
import prompts from '@/prompts';
import chatgptService from '@/services/gpt/chatgptService';
import { getUserFromRequest } from '@/lib/auth';

export async function POST(req: NextRequest) {
    try {
        const payload: any = await getUserFromRequest("User")
        
        const body = await req.json();
        const {
            language,
            tone,
            resumeContent,
            jobDescription,
            wordLimit,
            numberOfResults,
            creativityLevel,
            experienceLevel
        }: IResumePromptProps = body;

        const promptTemplate = prompts.resumePrompt({
            experienceLevel,
            language,
            tone,
            resume: resumeContent,
            resumeContent,
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

        let htmlContent = response.data;
        htmlContent = htmlContent.replace(/^```html/, ''); 
        htmlContent = htmlContent.replace(/```$/, ''); 



        // Save the resume in the database
        const savedResume = await prisma.resume.create({
            data: {
                metaData: { language, tone, creativityLevel, wordLimit, numberOfResults },
                experienceLevel,
                jobDescription,
                html: htmlContent,
                userId: payload?.userId
            }
        });

        return NextResponse.json({ success: true, data: savedResume });
    } catch (error: any) {
        console.log({error})
        return NextResponse.json({ success: false, error: error,message:error?.message ?? "An error occured generating resume" }, { status: 500 });
    }
}
