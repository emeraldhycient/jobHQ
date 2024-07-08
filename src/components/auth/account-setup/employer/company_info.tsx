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
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { IoIosInformationCircleOutline } from "react-icons/io";

interface Certificate {
    name: string;
    size: string;
}

const CompanyInfo: React.FC<nextStepChildProps> = ({ nextStep, index, isCurrentStep, isCompleted }) => {
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
        // router.push('/account-setup/job-seeker/complete')
    }



    return (
        <div className="w-full max-w-md mx-auto mt-2 mb-10">
            <h4 className='text-lg font-medium text-center px-4 md:px-0 mb-5'>Company Info</h4>
            <div className="mb-8 space-y-3">
                <Label htmlFor="resume">Company Logo</Label>
                <div {...getRootProps({ className: 'h-[120px] border-dashed border-2 border-blue-primary rounded-xl px-4 py-3 text-center cursor-pointer' })}>
                    <input id='resume' {...getInputProps()} />
                    <div className="flex justify-center items-center w-full h-full space-x-3">
                        <GoPlusCircle size={20} className="text-gray-500" />
                            <p className="text-xs font-normal text-gray-3">Browse file or drop here.</p>
                    </div>
                </div>
                <div className="flex items-center space-x-2">
                    <IoIosInformationCircleOutline className='text-blue-primary' />
                    <h6 className='text-xs font-normal'>A photo larger than a 0000pixels works best. MAx photo size 0MB</h6>
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
                <Input
                    id='company_name'
                    placeholder="Company Name"
                />
                <Textarea
                    rows={6}
                    placeholder="Write down about  your company here. Let the candidate know who you are..."
                />
              
            </div>
            <Button variant={'default'} size={'lg'} asChild onClick={changePage}>
                <p className='block w-full text-left px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700'>
                    Save
                </p>
            </Button>
        </div>
    );
};

export default CompanyInfo;
