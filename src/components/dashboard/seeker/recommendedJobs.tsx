import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { IoArrowForwardCircleOutline } from 'react-icons/io5';
import RecommendedJobCard from './fragments/recoJobCard';

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
                    <RecommendedJobCard key={index} />
                ))}
            </section>
        </section>
    );
};

export default RecommendedJobs;
