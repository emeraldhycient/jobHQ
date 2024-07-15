import { Button } from '@/components/ui/button';
import { FC } from 'react';
import PathCard from './fragments/pathCard';
import Link from 'next/link';

interface Course {
    id: number;
    title: string;
    modulesCompleted: number;
    totalModules: number;
    category: string;
}

interface LearningProgressProps {
    courses: Course[];
}

const LearningProgress: FC<LearningProgressProps> = ({ courses }) => {
    return (
        <section className="rounded">
            <section className='text-gray-1 flex items-center justify-between mb-5'>
                <h5 className='text-sm font-normal'>Learning Progress</h5>
                <Link href={"/dashboard/seeker/applied"}>
                    <h6 className='text-xs font-normal'>View all</h6>
                </Link>
            </section>
            <section className='space-y-4'>
                {courses.map((course) => (
                    <PathCard title={course.title}  key={course.id}/>
                ))}
            </section>
        </section>
    );
};

export default LearningProgress;
