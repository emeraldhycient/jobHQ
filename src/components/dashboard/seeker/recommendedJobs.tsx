
import Link from 'next/link';
import { FC } from 'react';
import RecommendedJobCard from './fragments/recoJobCard';
import { IJobItem } from '@/constants/interface';

interface RecommendedJobsProps {
    jobs?: IJobItem[];  // Marking jobs as optional
}

const RecommendedJobs: FC<RecommendedJobsProps> = ({ jobs = [] }) => {  // Providing a default value as an empty array

    console.log({ RecommendedJobs: jobs });

    return (
        <section className='w-full mt-8'>
            <section className='text-gray-1 flex items-center justify-between mb-5'>
                <h5 className='text-sm font-normal'>Recommended Jobs</h5>
                <Link href={"/dashboard/seeker/applied"}>
                    <h6 className='text-xs font-normal'>View all</h6>
                </Link>
            </section>
            <section className='w-full'>
                {jobs.length > 0 ? (
                    jobs.map((job, index) => (
                        <RecommendedJobCard job={job} key={index} />
                    ))
                ) : (
                    <p>No recommended jobs available at the moment.</p>
                )}
            </section>
        </section>
    );
};

export default RecommendedJobs;
