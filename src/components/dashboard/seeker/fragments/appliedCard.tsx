import { Button } from '@/components/ui/button'
import { utils } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { IoArrowForwardCircleOutline } from 'react-icons/io5'

type Props = {
    job: {
        id: string;
        status: string;
        dateApplied: string;
        job: {
            id:string,
            title: string;
            location: string;
            type: string;
            postedBy: {
                companyName: string;
                logo: string;
            };
        };
    };
};

const AppliedCard: React.FC<Props> = ({ job }) => {
    const { title, location, postedBy } = job.job;
    const { companyName, logo } = postedBy;

    return (
        <Link
            href={`/dashboard/seeker/jobs/details/${job?.job?.id}`}
            className={`border-b-8 border-gray-5 bg-gray-7 text-gray-1 rounded my-2 flex justify-between items-center p-4`}
        >
            <div className="flex space-x-3">
                <Image src={logo || "/images/default-logo.png"} height={35} width={35} className='rounded-lg' alt='company logo' />
                <div className="space-y-1">
                    <div className="flex space-x-2 items-center">
                        <h4 className='text-sm font-medium'>{title}</h4>
                        <div className="h-1 w-1 bg-gray-3 rounded-full"></div>
                        <h4 className='text-sm font-medium hidden md:block'>{companyName}</h4>
                    </div>
                    <div className="flex items-center space-x-2">
                        <h6 className='font-normal text-xs'>{utils.formatText(job.job.type)}</h6>
                        <div className="flex items-center space-x-2">
                            <div className="h-1 w-1 bg-gray-3 rounded-full"></div>
                            <h6 className='font-normal text-xs hidden md:block'>{location}</h6>
                            <div className="h-1 w-1 bg-gray-3 rounded-full block md:hidden"></div>
                            <h6 className="border-none text-xs font-normal block md:hidden">{utils.formatText(job.status)}</h6>
                        </div>
                    </div>
                </div>
            </div>
            <h6 className="border-none text-xs font-normal hidden md:block">{new Date(job.dateApplied).toLocaleDateString()}</h6>
            <h6 className="border-none text-xs font-normal hidden md:block">{utils.formatText(job.status)}</h6>
            <div className="border-none text-center md:hidden">
                <span className='block lg:hidden'><IoArrowForwardCircleOutline /></span>
            </div>
            <section className='hidden md:block'>
                <Button variant={'lucentblue'} size={'sm'}>View Application</Button>
            </section>
        </Link>
    );
}

export default AppliedCard;


