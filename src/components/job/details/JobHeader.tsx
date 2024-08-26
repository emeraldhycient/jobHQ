'use client'
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { FC, useState, useEffect } from 'react';
import { RiAiGenerate } from "react-icons/ri";
import { FaWandMagicSparkles } from "react-icons/fa6";
import { Separator } from "@/components/ui/separator";
import { utils } from '@/lib/utils';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import bookmarks from '@/services/bookmarks';
import { MdOutlineBookmarkAdd, MdOutlineBookmarkAdded } from "react-icons/md";
import toast from 'react-hot-toast'
import LoadingComponent from '@/components/common/LoadingComponent';
import Spinner from "@/components/common/spinner"
import { ICreateLearningPath } from '@/constants/interface';
import learningPath from '@/services/learning-path';

interface JobHeaderProps {
    title: string;
    company: string;
    location: string;
    type: string;
    logo: string;
    postedDate: string;
    jobId: string;
    isBookmarked: boolean;
}

const JobHeader: FC<JobHeaderProps> = ({ title, company, location, postedDate, type, logo, jobId, isBookmarked }) => {
    const [bookmarked, setBookmarked] = useState(isBookmarked);
    const queryClient = useQueryClient()


    const [isMarking, setisMarking] = useState(false)

    const bookmarkMutation = useMutation({
        mutationFn: () => {
            if (bookmarked) {
                return bookmarks.removeBookmark(jobId);
            } else {
                return bookmarks.addBookmark(jobId);
            }
        },
        onSuccess: (data) => {
            queryClient.invalidateQueries({ queryKey: ['bookmarkedJobs', 'jobDetails'] })
            setBookmarked(!bookmarked);
            setisMarking(false)
        },
        onError: (error: any) => {
            setisMarking(false)
            toast.error(error?.response?.data?.message || "An Error Occured!!");
        },

    });

    const handleBookmarkClick = () => {
        bookmarkMutation.mutate();
    };


    const [isGenerating, setIsGenerating] = useState(false);

    const generateLearningPath = useMutation({
        mutationFn: (data: ICreateLearningPath) => learningPath.create({ title: data?.title }),
        onSuccess: (data) => {
            console.log({ generateLearningPath: data });
            setIsGenerating(false);
            toast.success("Learning path generated successfully");
        },
        onError: (error: any) => {
            setIsGenerating(false);
            toast.error(error?.response?.data?.message || "An Error Occurred!!");
        },
    });

    const handleGenerateLearningPath = () => {
        setIsGenerating(true);
        generateLearningPath.mutate({ title });
    };

    return (
        <div className="md:flex items-center justify-between p-4 bg-gray-7 rounded-3xl border border-gray-9 space-y-4">
            <div className="flex flex-col md:flex-row items-center pt-3 md:pt-0">
                <Image src={logo ?? "/images/Image.png"} alt="Company Logo" width={50} height={50} className="rounded-lg" />
                <h2 className="md:hidden text-sm font-bold text-center pt-3">{title} • {company} </h2>
                <Separator className='md:hidden mt-3 mb-4' />
                <div className="md:ml-4 flex flex-col text-center md:text-left">
                    <h2 className="text-sm font-bold hidden md:block">{title} • {company} </h2>
                    <div className="flex flex-col md:flex-row gap-2">
                        <p className="text-xs ">{utils.formatText(type)} • {location} •</p>
                        <p className="text-xs">{postedDate}</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row items-center space-x-4 space-y-3 md:space-y-0">
                <div className="flex items-center space-x-5">
                    <button onClick={() => {
                        handleBookmarkClick()
                        setisMarking(true)
                    }}>
                        {
                            isMarking ? <Spinner /> :
                                !isBookmarked ?
                                    <MdOutlineBookmarkAdd size={20} />
                                    :
                                    <MdOutlineBookmarkAdded size={20} className={bookmarked ? 'text-warm-primary' : ''} />
                        }
                    </button>
                    <Button variant={'lucentwarm'}>
                        <div className="flex flex-row space-x-2">
                            <FaWandMagicSparkles />
                            <h6 className='text-xs'>AI Interview Guide</h6>
                        </div>
                    </Button>
                </div>
                <div className="flex items-center space-x-5">
                    <Button onClick={handleGenerateLearningPath} variant={'lucentgreen'} disabled={isGenerating}>
                        <div className="flex items-center flex-row space-x-2">
                            <RiAiGenerate />
                            {
                                isGenerating ?
                                    <Spinner />
                                    :
                                    <h6 className='text-xs'>Learning Guide</h6>
                            }
                        </div>
                    </Button>
                    <Button>Apply Now</Button>
                </div>
            </div>
        </div>
    );
};

export default JobHeader;
