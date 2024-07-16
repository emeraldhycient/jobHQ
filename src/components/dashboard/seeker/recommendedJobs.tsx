import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { IoArrowForwardCircleOutline } from 'react-icons/io5';

interface Job {
    id: number;
    title: string;
    company: string;
    location: string;
    type: string;
    postedDate: string;
}

interface RecommendedJobsProps {
    jobs: Job[];
}


const appliedJobs = [
    {
        id: "INV001",
        date: "July 2nd, 2024",
        status: "Applied",
        location: "Credit Card",
    },
    {
        id: "INV002",
        date: "Pending",
        status: "Applied",
        location: "PayPal",
    },
    {
        id: "INV003",
        date: "July 2nd, 2024",
        status: "Applied",
        location: "Bank Transfer",
    },
    {
        id: "INV004",
        date: "July 2nd, 2024",
        status: "Applied",
        location: "Credit Card",
    },
    {
        id: "INV005",
        date: "July 2nd, 2024",
        status: "Applied",
        location: "PayPal",
    },
    {
        id: "INV006",
        date: "July 2nd, 2024",
        status: "Applied",
        location: "Bank Transfer",
    },
    {
        id: "INV007",
        date: "UnJuly 2nd, 2024",
        status: "Applied",
        location: "Credit Card",
    },
]

const RecommendedJobs: FC<RecommendedJobsProps> = ({ jobs }) => {
    return (
        <section className='w-full mt-8'>
            <section className='text-gray-1 flex items-center justify-between mb-5'>
                <h5 className='text-sm font-normal'>Recommended Jobs</h5>
                <Link href={"/dashboard/seeker/applied"}>
                    <h6 className='text-xs font-normal'>View all</h6>
                </Link>
            </section>
            <section className='w-full'>
                {appliedJobs.map((job, index) => (
                    <Link href={"/dashboard/seeker/applied/1234"}
                        key={index}
                        className={`border-b-8 border-gray-5 bg-gray-7 text-gray-1 rounded my-2 flex justify-between items-center p-4`}
                    >
                        <div className="flex space-x-3">
                            <Image src="/images/Image.png" height={35} width={35} className='rounded-lg' alt='company logo' />
                            <div className="space-y-1">
                                <div className="flex space-x-2 items-center">
                                    <h4 className='text-sm font-medium'>Product Designer</h4>
                                    <div className="h-1 w-1 bg-gray-3 rounded-full"></div>
                                    <h4 className='text-sm font-medium'>Twitter</h4>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <h6 className='font-normal text-xs'>Remote</h6>
                                    <div className="flex items-center space-x-2">
                                        <div className="h-1 w-1 bg-gray-3 rounded-full"></div>
                                        <h6 className='font-normal text-xs'>Lagos, Nigeria</h6>
                                        <div className="h-1 w-1 bg-gray-3 rounded-full"></div>
                                        <h6 className="border-none text-xs font-normal">Posted 1 month ago</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="border-none text-center">
                            <Link href={"/dashboard/seeker/applied/1234"} className='hidden lg:block'>
                                <Button variant={'lucentblue'} size={'sm'}>Apply Now</Button>
                            </Link>
                            <span className='block lg:hidden'><IoArrowForwardCircleOutline /></span>
                        </div>
                    </Link>
                ))}
            </section>
        </section>
    );
};

export default RecommendedJobs;
