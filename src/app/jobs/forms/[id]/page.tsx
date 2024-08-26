// app/forms/[id]/page.tsx
import FormRenderer from '@/components/job/form/FormRenderer';
import { FormField } from '@/constants/interface';
import { PrismaClient } from '@prisma/client';


const prisma = new PrismaClient();

export default async function FormPage({ params }: { params: { id: string } }) {
    const form = await prisma.form.findUnique({
        where: { id: params.id },
        include: { fields: true },
    });

    if (!form) {
        return <div>Form not found</div>;
    }

    const fields: FormField[] = form.fields.map((field: { id: any; type: any; label: any; options: any; }) => ({
        id: field.id,
        type: field.type,
        label: field.label,
        options: field.options,
    }));

    return (
        <div>
            <h1>{form.title}</h1>
            <FormRenderer formId={form.id} fields={fields} />
        </div>
    );
}
