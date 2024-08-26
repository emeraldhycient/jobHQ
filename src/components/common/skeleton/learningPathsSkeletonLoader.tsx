import React from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import PathCardSkeleton from './PathCardSkeleton';

const LearningSkeletonLoader = ({ count = 1 }: { count?: number }) => {
    return (
        <>
        {
            new Array(count).fill(0).map((_, idx) => (
                <PathCardSkeleton key={idx} />
            ))
        }
        </>
    );
};

export default LearningSkeletonLoader;
