'use client';
import { useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import { Select, SelectItem, SelectContent, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import resumeCoverLetterService from '@/services/resumeCoverLetter';
import { BsCloudDownload } from 'react-icons/bs';
import useGeneratePDF from '@/hooks/pdf/useGeneratePDF'; 

import 'react-quill/dist/quill.snow.css';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

// Define types for form values
interface FormValues {
    language: string;
    tone: string;
    name?: string;
    jobPosition?: string;
    experience?: string;
    resume: string;
    jobDescription: string;
    wordLimit: number;
    numberOfResults: number;
    creativityLevel: string;
}

export default function ContentGenerator() {
    const [isCoverLetter, setIsCoverLetter] = useState(false);
    const [formValues, setFormValues] = useState<FormValues>({
        language: '',
        tone: '',
        name: '',
        jobPosition: '',
        experience: '',
        resume: '',
        jobDescription: '',
        wordLimit: 1000,
        numberOfResults: 1,
        creativityLevel: '',
    });
    const [editorContent, setEditorContent] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const printRef = useRef<HTMLDivElement | null>(null);
    const generatePDF = useGeneratePDF(printRef);

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormValues((prev) => ({
            ...prev,
            [name]: name === 'wordLimit' || name === 'numberOfResults' ? parseInt(value) : value,
        }));
    };

    const handleGenerateContent = () => {
        setIsLoading(true);
        if (isCoverLetter) {
            const coverLetterPayload = {
                language: formValues.language,
                tone: formValues.tone,
                experienceLevel: formValues.experience || '',
                jobDescription: formValues.jobDescription,
                wordLimit: formValues.wordLimit,
                numberOfResults: formValues.numberOfResults,
                creativityLevel: formValues.creativityLevel,
                name: formValues.name || '',
                jobPosition: formValues.jobPosition || '',
                coverLetterContent: '',
            };
            createCoverLetter.mutate(coverLetterPayload);
        } else {
            const resumePayload = {
                language: formValues.language,
                tone: formValues.tone,
                experienceLevel: formValues.experience || '',
                jobDescription: formValues.jobDescription,
                wordLimit: formValues.wordLimit,
                numberOfResults: formValues.numberOfResults,
                creativityLevel: formValues.creativityLevel,
                resumeContent: formValues.resume,
            };
            createResume.mutate(resumePayload);
        }
    };

    const createResume = useMutation({
        mutationFn: resumeCoverLetterService.createResume,
        onSuccess: (data) => {
            toast.success('Resume created successfully');
            setEditorContent(data?.data?.html || '');
            setIsLoading(false);
        },
        onError: (error: any) => {
            toast.error(error.response.data.message || 'An error occurred');
            setIsLoading(false);
        },
    });

    const createCoverLetter = useMutation({
        mutationFn: resumeCoverLetterService.createCoverLetter,
        onSuccess: (data) => {
            toast.success('Cover letter created successfully');
            setEditorContent(data?.data?.letter || '');
            setIsLoading(false);
        },
        onError: (error: any) => {
            toast.error(error.response.data.message || 'An error occurred');
            setIsLoading(false);
        },
    });

    return (
        <div className="min-h-screen text-gray-1 px-2 py-3 md:p-8">
            <div className="flex flex-col md:flex-row  justify-between items-center mb-4 md:mb-8">
                <h5 className="text-base font-normal mb-6 md:mb-0">Document Builder</h5>
                <div className="flex items-center">
                    <span className="text-xs mr-2">Resume Builder</span>
                    <Switch
                        checked={isCoverLetter}
                        onCheckedChange={() => setIsCoverLetter(!isCoverLetter)}
                    />
                    <span className="text-xs ml-2">Cover Letter Generator</span>
                </div>
            </div>
            <div className="flex flex-col md:flex-row  justify-center gap-8">
                {/* Left Panel */}
                <div className="bg-gray-7 px-2 py-5 md:p-6 rounded-lg md:w-2/5 space-y-6">
                    <h2 className="text-sm font-bold mb-4">
                        {isCoverLetter ? 'Cover Letter Generator' : 'Resume Builder'}
                    </h2>

                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <Select
                                value={formValues.language}
                                onValueChange={(value) => setFormValues((prev) => ({ ...prev, language: value }))}
                            >
                                <SelectTrigger>
                                    <SelectValue placeholder="Select Language" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="English">English</SelectItem>
                                    <SelectItem value="Spanish">Spanish</SelectItem>
                                    <SelectItem value="French">French</SelectItem>
                                </SelectContent>
                            </Select>

                            <Select
                                value={formValues.tone}
                                onValueChange={(value) => setFormValues((prev) => ({ ...prev, tone: value }))}
                            >
                                <SelectTrigger>
                                    <SelectValue placeholder="Select Tone" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="Professional">Professional</SelectItem>
                                    <SelectItem value="Friendly">Friendly</SelectItem>
                                    <SelectItem value="Neutral">Neutral</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        {isCoverLetter ? (
                            <>
                                <Input
                                    name="name"
                                    value={formValues.name}
                                    onChange={handleChange}
                                    placeholder="Your full Name"
                                />
                                <Input
                                    name="jobPosition"
                                    value={formValues.jobPosition}
                                    onChange={handleChange}
                                    placeholder="Job Position Name"
                                />
                                <Select
                                    value={formValues.experience}
                                    onValueChange={(value) => setFormValues((prev) => ({ ...prev, experience: value }))}
                                >
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="Select Experience Level" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="entry level">Entry</SelectItem>
                                        <SelectItem value="intermediate level">Intermediate</SelectItem>
                                        <SelectItem value="experienced level">Experienced</SelectItem>
                                    </SelectContent>
                                </Select>
                            </>
                        ) : (
                            <>
                                <Textarea
                                    name="resume"
                                    value={formValues.resume}
                                    onChange={handleChange}
                                    placeholder="Add Resume Here"
                                />
                                <Textarea
                                    name="jobDescription"
                                    value={formValues.jobDescription}
                                    onChange={handleChange}
                                    placeholder="Add Job Description"
                                />
                            </>
                        )}

                        <Input
                            name="wordLimit"
                            type="number"
                            value={formValues.wordLimit}
                            onChange={handleChange}
                            placeholder="Maximum Word Limit"
                            className="bg-gray-700 text-gray-100"
                        />

                        <Input
                            name="numberOfResults"
                            type="number"
                            value={formValues.numberOfResults}
                            onChange={handleChange}
                            placeholder="Number Of Results"
                            className="bg-gray-700 text-gray-100"
                        />

                        {/* Creativity Level Selection */}
                        <Select
                            value={formValues.creativityLevel}
                            onValueChange={(value) => setFormValues((prev) => ({ ...prev, creativityLevel: value }))}
                        >
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select Creativity Level" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="High">High</SelectItem>
                                <SelectItem value="Medium">Medium</SelectItem>
                                <SelectItem value="Low">Low</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <Button
                        onClick={handleGenerateContent}
                        className="bg-green-600 hover:bg-green-700 text-white w-full py-2"
                    >
                        {isLoading ? 'Generating...' : `Build ${isCoverLetter ? "Cover Letter" : "Resume"}`}
                    </Button>
                </div>

                {/* Right Panel */}
                <div className="bg-gray-7 px-2 py-6 md:p-6 rounded-lg md:w-3/5">
                    <ReactQuill
                        theme="snow"
                        value={editorContent}
                        onChange={setEditorContent}
                       
                        placeholder="Untitled Document..."
                        className="h-full text-gray-1"
                    />
                    <div className="hidden" ref={printRef} dangerouslySetInnerHTML={{__html:editorContent}}></div>
                    {
                        editorContent &&
                        <div className="flex justify-end mt-4">
                                <Button onClick={generatePDF} variant={'lucentwarm'}>
                                Download PDF <BsCloudDownload />
                            </Button>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
}
