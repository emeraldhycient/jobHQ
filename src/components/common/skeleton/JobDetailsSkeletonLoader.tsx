import React from 'react';
import { Skeleton } from '@/components/ui/skeleton';

const SkeletonLoader = ({ count = 1 }: { count?: number }) => {
    return (
        <div>
            {new Array(count).fill(0).map((_, idx) => (
                <div key={idx} className="py-8 md:px-8 space-y-6 text-gray-1">
                    <Skeleton className="h-8 w-48" />
                    <Skeleton className="h-6 w-64" />
                    <Skeleton className="h-5 w-full" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-1/2" />
                    <Skeleton className="h-5 w-1/3" />
                </div>
            ))}
        </div>
    );
};

export default SkeletonLoader;
