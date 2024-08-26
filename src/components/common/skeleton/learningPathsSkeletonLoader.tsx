import React from 'react';
import PathCardSkeleton from './PathCardSkeleton';

const LearningSkeletonLoader = ({ count = 5 }: { count?: number }) => {
    return (
        <>
            {Array.from({ length: count }, (_, index) => (
                <PathCardSkeleton key={index} />
            ))
        }
        </>
    );
};

export default LearningSkeletonLoader;
