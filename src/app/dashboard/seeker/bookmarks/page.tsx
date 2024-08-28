'use client'

import Pagination from "@/components/dashboard/seeker/fragments/pagination";
import RecommendedJobCard from "@/components/dashboard/seeker/fragments/recoJobCard";
import JobSearchComponent from "@/components/dashboard/seeker/fragments/jobSearchFilter";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import SkeletonLoader from "@/components/common/skeleton/JobSkeletonLoader";
import { IJobItem } from '@/constants/interface';
import bookmarkService from "@/services/bookmarks"

const BookmarksPage = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [filters, setFilters] = useState<Record<string, any>>({});
    const limit = 10;

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    const handleFilterChange = (filterType: string, value: string) => {
        setFilters((prevFilters) => ({
            ...prevFilters,
            [filterType]: value,
        }));
    };

    const { data, isLoading, error } = useQuery({
        queryKey: ['bookmarkedJobs', currentPage, filters],
        queryFn: () => bookmarkService.getBookmarkedJobs({ page: currentPage, limit, filters }),
        refetchOnWindowFocus: false,
    });

    return (
        <section className="flex flex-col space-y-4 bg-gray-5 rounded">
            <section className='w-full mt-8'>
                <JobSearchComponent onFilterChange={handleFilterChange} />
                {Object.keys(filters).length > 0 ? (
                    <h5 className='text-gray-1 text-sm font-normal mt-5 md:mt-0'>Filtered Jobs</h5>
                ) : (
                    <h5 className='text-gray-1 text-sm font-normal mt-5 md:mt-0'>Bookmarked Jobs</h5>
                )}
                <section className='w-full mb-4'>
                    {isLoading ? (
                        <SkeletonLoader count={5} />
                    ) : (
                        data?.bookmarks.length > 0 ? data?.bookmarks?.map((bookmark: { job: IJobItem }) => (
                            <RecommendedJobCard key={bookmark.job.id} job={bookmark.job} />
                        ))
                            :
                            <p className='text-xs text-center'>Jobs you bookmark will show here</p>

                    )}
                </section>
                {
                    data?.bookmarks.length > 0 &&
                    <Pagination
                        currentPage={currentPage}
                        totalPages={data?.pagination?.totalPages || 1}
                        onPageChange={handlePageChange}
                    />
                }
            </section>
        </section>
    );
};

export default BookmarksPage;
