import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';


// export async function POST(request: Request) {
//     const { title, fields } = await request.json();

//     const form = await prisma.form.create({
//         data: {
//             title,
//             fields: {
//                 create: fields.map((field: any) => ({
//                     type: field.type,
//                     label: field.label,
//                     options: field.options,
//                 })),
//             },
//         },
//     });

//     return NextResponse.json(form, { status: 201 });
// }

export async function GET() {
    const forms = await prisma.form.findMany();
    return NextResponse.json(forms);
}
