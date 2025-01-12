import { Button } from '@/components/ui/button';
import { utils } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';
import { IoArrowForwardCircleOutline } from 'react-icons/io5';
import { usePathname } from 'next/navigation';
import moment from 'moment';

interface RecommendedJobCardProps {
    job: {
        id: string;
        title: string;
        location: string;
        type: string;
        createdAt: string;
        postedBy: {
            companyName: string;
            logo: string;
        };
    };
}

const RecommendedJobCard: FC<RecommendedJobCardProps> = ({ job }) => {
    const pathname = usePathname();

    const nextpath = pathname === "/jobs" ? pathname : "/dashboard/seeker/jobs/" 
    const timeAgo = moment(job.createdAt).fromNow();


    return (
        <section className={`border-b-8 border-gray-5 bg-gray-7 text-gray-1 rounded my-2 flex justify-between items-center p-4`}>
            <div className="flex space-x-3">
                <Image src={job?.postedBy?.logo} height={35} width={35} className='rounded-lg' alt={`${job?.postedBy?.companyName} logo`} />
                <div className="space-y-1">
                    <div className="flex space-x-2 items-center">
                        <h4 className='text-sm font-medium'>{job?.title}</h4>
                        <div className="h-1 w-1 bg-gray-3 rounded-full hidden  md:block"></div>
                        <h4 className='text-sm font-medium hidden  md:block'>{job.postedBy.companyName}</h4>
                    </div>
                    <div className="flex items-center space-x-2">
                        <h6 className='font-normal text-xs'>{utils.formatText(job?.type)}</h6>
                        <div className="flex items-center space-x-2">
                            <div className="h-1 w-1 bg-gray-3 rounded-full"></div>
                            <h6 className='font-normal text-xs hidden  md:block'>{job?.location}</h6>
                            <div className="h-1 w-1 bg-gray-3 rounded-full"></div>
                            <h6 className="border-none text-xs font-normal">
                                Posted {timeAgo}
                            </h6>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-none text-center">
                <Link href={`${nextpath}/details/${job?.id}`} className='hidden lg:block'>
                    <Button variant={'lucentblue'} size={'sm'}>View Now</Button>
                </Link>
                <Link href={`${nextpath}/details/${job?.id}`} className='block lg:hidden'>
                    <Button variant={'lucentblue'} size={'sm'}><IoArrowForwardCircleOutline /></Button>
                </Link>
            </div>
        </section>
    );
};

export default RecommendedJobCard;
