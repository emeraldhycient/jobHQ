import BookmarkPlusIcon from '@/components/icons/BookmarkPlusIcon';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { FC, useState, useEffect } from 'react';
import { RiAiGenerate } from "react-icons/ri";
import { FaWandMagicSparkles } from "react-icons/fa6";
import { Separator } from "@/components/ui/separator";
import { utils } from '@/lib/utils';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import bookmarks from '@/services/bookmarks';

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

    const bookmarkMutation = useMutation({
        mutationFn: () => {
            if (bookmarked) {
                return bookmarks.removeBookmark(jobId);
            } else {
                return bookmarks.addBookmark(jobId);
            }
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['bookmarkedJobs'] })
            setBookmarked(!bookmarked);
        },
    });

    const handleBookmarkClick = () => {
        bookmarkMutation.mutate();
    };

    return (
        <div className="md:flex items-center justify-between p-4 bg-gray-7 rounded-3xl border border-gray-9 space-y-4">
            <div className="flex flex-col md:flex-row items-center pt-3 md:pt-0">
                <Image src={logo ?? "/images/Image.png"} alt="Company Logo" width={50} height={50} className="rounded-lg" />
                <h2 className="md:hidden text-base font-bold text-center pt-3">{title} • {company} </h2>
                <Separator className='md:hidden mt-3 mb-4' />
                <div className="md:ml-4 flex flex-col text-center md:text-left">
                    <h2 className="text-base font-bold hidden md:block">{title} • {company} </h2>
                    <div className="flex flex-col md:flex-row gap-2">
                        <p className="text-xs ">{utils.formatText(type)} • {location} •</p>
                        <p className="text-xs">{postedDate}</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row items-center space-x-4 space-y-3 md:space-y-0">
                <div className="flex items-center space-x-5">
                    <button className={bookmarked ? 'text-blue-1' : ''} onClick={handleBookmarkClick}>
                        <BookmarkPlusIcon size={14}/>
                    </button>
                    <Button variant={'lucentwarm'}>
                        <div className="flex flex-row space-x-2">
                            <FaWandMagicSparkles />
                            <h6 className='text-xs'>AI Interview Guide</h6>
                        </div>
                    </Button>
                </div>
                <div className="flex items-center space-x-5">
                    <Button variant={'lucentgreen'}>
                        <div className="flex flex-row space-x-2">
                            <RiAiGenerate />
                            <h6 className='text-xs'>Learning Guide</h6>
                        </div>
                    </Button>
                    <Button>Apply Now</Button>
                </div>
            </div>
        </div>
    );
};

export default JobHeader;
