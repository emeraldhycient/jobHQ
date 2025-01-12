import { Button } from '@/components/ui/button';
import { AppliedJobItem } from '@/constants/interface';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { IoArrowForwardCircleOutline } from 'react-icons/io5';

type Props = {
    job: AppliedJobItem;
};

const JobCard: React.FC<Props> = ({ job }) => {
    const { id, title, location, type, postedBy, createdAt } = job.job;
    const { companyName, logo } = postedBy;

    return (
        <Link
            href={`/dashboard/seeker/jobs/details/${id}`}
            key={id}
            className={`border-b-8 border-gray-5 bg-gray-7 text-gray-1 rounded my-4 flex justify-between items-center p-4`}
        >
            <div className="flex space-x-3">
                <Image
                    src={logo || '/images/default-logo.png'}
                    height={35}
                    width={35}
                    className="rounded-lg"
                    alt="company logo"
                />
                <div className="space-y-1">
                    <h4 className="text-sm font-medium">{title}</h4>
                    <div className="flex items-center space-x-2">
                        <h6 className="font-normal text-xs">{type}</h6>
                        <div className="flex items-center space-x-2">
                            <div className="h-1 w-1 bg-gray-3 rounded-full"></div>
                            <h6 className="font-normal text-xs">{location}</h6>
                            <div className="h-1 w-1 bg-gray-3 rounded-full"></div>
                            <h6 className="border-none text-xs font-normal">
                                {`Posted ${Math.floor(
                                    (new Date().getTime() - new Date(createdAt).getTime()) /
                                    (1000 * 60 * 60 * 24 * 30)
                                )} month(s) ago`}
                            </h6>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-none text-center">
                <section className="hidden lg:block">
                    <Button variant={'lucentblue'} size={'sm'}>
                        Apply Now
                    </Button>
                </section>
                <span className="block lg:hidden">
                    <IoArrowForwardCircleOutline />
                </span>
            </div>
        </Link>
    );
};

export default JobCard;
