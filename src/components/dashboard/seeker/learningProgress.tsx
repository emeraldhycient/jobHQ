import { Button } from '@/components/ui/button';
import { FC } from 'react';
import PathCard from './fragments/pathCard';
import Link from 'next/link';
import { ILearningPath } from '@/constants/interface';
import LearningSkeletonLoader from '@/components/common/skeleton/learningPathsSkeletonLoader';

interface LearningProgressProps {
    courses: ILearningPath[];
    isLoading: boolean
}

const LearningProgress: FC<LearningProgressProps> = ({ courses, isLoading }) => {
    return (
        <section className="rounded">
            <section className='text-gray-1 flex items-center justify-between mb-5'>
                <h5 className='text-sm font-normal'>Learning Progress</h5>
                <Link href={"/dashboard/seeker/learning-paths"}>
                    <h6 className='text-xs font-normal'>View all</h6>
                </Link>
            </section>
            <section className='space-y-4'>
                {
                    !isLoading ?
                       courses.length > 0 ? courses.map((course) => (
                            <PathCard key={course.id} title={course.title} data={course} />
                       ))
                            :
                            <p className='text-xs text-center'>Generated learning paths will appear here</p>
                        :
                        <LearningSkeletonLoader />
                }
            </section>
        </section>
    );
};

export default LearningProgress;
