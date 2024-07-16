import BookmarkPlusIcon from '@/components/icons/BookmarkPlusIcon';
import Image from 'next/image';
import { FC } from 'react';

interface JobHeaderProps {
    title: string;
    company: string;
    location: string;
    postedDate: string;
}

const JobHeader: FC<JobHeaderProps> = ({ title, company, location, postedDate }) => {
    return (
        <div className="flex items-center justify-between p-4 bg-gray-7 rounded-lg">
            <div className="flex items-center">
                <Image src="/images/Image.png" alt="Company Logo" width={50} height={50} className="rounded-lg" />
                <div className="ml-4">
                    <h2 className="text-base font-bold">{title} • {company} </h2>
                    <p className="text-xs ">Remote • {location} • {postedDate}</p>
                </div>
            </div>
            <div className="flex items-center space-x-4">
                <BookmarkPlusIcon size={14} />
                <button className="px-4 py-2 text-sm text-white bg-green-500 rounded">Learning Guide</button>
                <button className="px-4 py-2 text-sm text-white bg-orange-500 rounded">AI Interview Guide</button>
                <button className="px-4 py-2 text-sm text-white bg-blue-500 rounded">Apply Now</button>
            </div>
        </div>
    );
};

export default JobHeader;
