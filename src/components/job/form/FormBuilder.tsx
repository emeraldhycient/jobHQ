'use client'
import { FieldType, FormField } from '@/constants/interface';
import { useState } from 'react';

const FormBuilder = () => {
    const [fields, setFields] = useState<FormField[]>([]);

    const addField = (type: FieldType) => {
        setFields([...fields, { id: Date.now().toString(), type, label: '', options: [] }]);
    };

    const removeField = (id: string) => {
        setFields(fields.filter(field => field.id !== id));
    };

    const saveForm = async () => {
        await fetch('/api/forms', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title: 'My Form', fields }),
        });
    };

    return (
        <div>
            <button onClick={() => addField('TEXT')}>Add Text Field</button>
            <button onClick={() => addField('CHECKBOX')}>Add Checkbox</button>
            <button onClick={() => addField('DROPDOWN')}>Add Dropdown</button>
            <div>
                {fields.map(field => (
                    <div key={field.id}>
                        <input
                            type="text"
                            placeholder="Field Label"
                            value={field.label}
                            onChange={(e) => {
                                const updatedFields = fields.map(f =>
                                    f.id === field.id ? { ...f, label: e.target.value } : f
                                );
                                setFields(updatedFields);
                            }}
                        />
                        <button onClick={() => removeField(field.id)}>Remove</button>
                    </div>
                ))}
            </div>
            <button onClick={saveForm}>Save Form</button>
        </div>
    );
};

export default FormBuilder;
