'use client'
import { useState, FC, FormEvent } from 'react';
import { FieldType, FormField } from '@/constants/interface';

interface FormRendererProps {
    formId: string;
    fields: FormField[];
}

const FormRenderer: FC<FormRendererProps> = ({ formId, fields }) => {
    const [formData, setFormData] = useState<{ [key: string]: any }>({});

    const handleInputChange = (fieldId: string, value: any) => {
        setFormData(prevData => ({
            ...prevData,
            [fieldId]: value,
        }));
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        await fetch('/api/formResponses', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ formId, responses: formData }),
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            {fields.map(field => (
                <div key={field.id}>
                    <label>{field.label}</label>
                    {field.type === 'TEXT' && (
                        <input
                            type="text"
                            onChange={(e) => handleInputChange(field.id, e.target.value)}
                        />
                    )}
                    {field.type === 'CHECKBOX' && (
                        <input
                            type="checkbox"
                            onChange={(e) => handleInputChange(field.id, e.target.checked)}
                        />
                    )}
                    {field.type === 'DROPDOWN' && (
                        <select
                            onChange={(e) => handleInputChange(field.id, e.target.value)}
                        >
                            {field.options.map(option => (
                                <option key={option} value={option}>
                                    {option}
                                </option>
                            ))}
                        </select>
                    )}
                </div>
            ))}
            <button type="submit">Submit</button>
        </form>
    );
};

export default FormRenderer;
