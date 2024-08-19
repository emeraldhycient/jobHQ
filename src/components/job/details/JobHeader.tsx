import BookmarkPlusIcon from '@/components/icons/BookmarkPlusIcon';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { FC } from 'react';
import { RiAiGenerate } from "react-icons/ri";
import { FaWandMagicSparkles } from "react-icons/fa6";

interface JobHeaderProps {
    title: string;
    company: string;
    location: string;
    postedDate: string;
}

const JobHeader: FC<JobHeaderProps> = ({ title, company, location, postedDate }) => {
    return (
        <div className=" md:flex items-center justify-between p-4 bg-gray-7 rounded-lg  border border-gray-9 space-y-4">
            <div className="flex flex-col md:flex-row items-center ">
                <Image src="/images/Image.png" alt="Company Logo" width={50} height={50} className="rounded-lg" />
                <h2 className="md:hidden text-base font-bold">{title} • {company} </h2>
                <div className="ml-4 flex flex-col text-center md:text-left  border-t-2 md:border-none border-gray-9 mt-3 md:mt-0 md:pt-0 pt-3 ">
                    <h2 className="text-base font-bold hidden md:block">{title} • {company} </h2>
                    <div className="flex flex-col md:flex-row gap-2">
                        <p className="text-xs ">Remote • {location} •</p>
                        <p className="text-xs">{postedDate}</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row items-center space-x-4 space-y-3 md:space-y-0">
                <div className="flex items-center space-x-5">
                    <BookmarkPlusIcon size={14} />
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
