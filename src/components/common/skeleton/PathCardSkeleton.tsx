import { Skeleton } from "@/components/ui/skeleton";
import React from 'react';

const PathCardSkeleton = () => {
    return (
        <section className='w-full bg-gray-7 px-4 py-6 rounded-2xl space-y-4'>
            <Skeleton className='w-1/2 h-5' />
            <Skeleton className='w-2/3 h-4' />
            <section className='flex justify-between items-center'>
                <Skeleton className="w-24 h-6 rounded-full" />
                <Skeleton className="w-10 h-6 rounded-full" />
            </section>
            <Skeleton className="w-full h-10 rounded-lg" />
        </section>
    );
}

export default PathCardSkeleton;
