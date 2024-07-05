"use client";
import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Button } from '@/components/ui/button';
import { nextStepChildProps } from '@/constants/interface';
import CircledCancelIcon from '@/components/icons/CircledCancelIcon';
import { GoPlusCircle } from "react-icons/go";
import { Label } from '@/components/ui/label';
import DocumentIcon from '@/components/icons/DocumentIcon';
import { useRouter } from 'next/navigation'

interface Certificate {
    name: string;
    size: string;
}

const ResumeUpload: React.FC<nextStepChildProps> = ({ nextStep, index, isCurrentStep, isCompleted }) => {
    const [files, setFiles] = useState<Certificate[]>([]);

    const { getRootProps, getInputProps } = useDropzone({
        accept: {
            'application/pdf': ['.pdf'],
            'application/msword': ['.doc', '.docx'],
        },
        onDrop: acceptedFiles => {
            setFiles(prevFiles => [
                ...prevFiles,
                ...acceptedFiles.map(file => ({
                    name: file.name,
                    size: `${(file.size / 1024 / 1024).toFixed(1)} MB`
                }))
            ]);
        }
    });


    const handleRemoveFile = (name: string) => {
        setFiles(files.filter(file => file.name !== name));
    };


    const router = useRouter()


    const changePage = () => {
        nextStep()
        router.push('/account-setup/job-seeker/complete')
    }



    return (
        <div className="w-full max-w-md mx-auto mt-2 mb-10">
            <h4 className='text-lg font-medium text-center px-4 md:px-0 mb-5'>Resume</h4>
            <div className="mb-8 space-y-3">
                <Label htmlFor="resume">Add Your Skills</Label>
                <div {...getRootProps({ className: 'border-dashed border-2 border-gray-500 rounded-xl px-4 py-3 text-center cursor-pointer' })}>
                    <input id='resume' {...getInputProps()} />
                    <div className="flex items-center w-full space-x-3">
                        <GoPlusCircle size={20} className="text-gray-500" />
                        <div className="flex flex-col items-start">
                            <p className='text-sm font-medium text-gray-3'>Upload CV/Resume</p>
                            <p className="text-xs font-normal text-gray-3">Browse file or drop here.</p>
                        </div>
                    </div>

                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                    {files.map((file, index) => (
                        <div key={index} className="flex items-center bg-gray-2 text-white px-4 py-3 rounded-lg space-x-3">
                            <DocumentIcon height={"20"} width={"20"} />
                            <div className="flex flex-col">
                                <span className='text-xs font-normal text-gray-3 normal-case'>{file.name}</span>
                                <span className='text-xs font-normal text-gray-3 normal-case'>{file.size}</span>
                            </div>
                            <div className="ml-2 cursor-pointer" onClick={() => handleRemoveFile(file.name)}>
                                <CircledCancelIcon height={20} width={20} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Button variant={'default'} size={'lg'} asChild onClick={changePage}>
                <p className='block w-full text-left px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700'>
                    Save
                </p>
            </Button>
        </div>
    );
};

export default ResumeUpload;
