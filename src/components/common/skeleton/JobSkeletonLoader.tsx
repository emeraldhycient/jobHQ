'use client'
import React from "react";
import JobItemSkeleton from "./JobItemSkeleton"

const SkeletonLoader = ({ count }: { count: number }) => (
    <>
        {Array.from({ length: count }, (_, index) => (
            <JobItemSkeleton key={index} />
        ))}
    </>
);


export default SkeletonLoader