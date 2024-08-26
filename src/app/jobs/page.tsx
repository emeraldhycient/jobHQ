'use client'

import Pagination from "@/components/dashboard/seeker/fragments/pagination";
import RecommendedJobCard from "@/components/dashboard/seeker/fragments/recoJobCard";
import JobSearchComponent from "@/components/dashboard/seeker/fragments/jobSearchFilter";
import { Suspense, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import jobs from "@/services/jobs";
import SkeletonLoader from "@/components/common/skeleton/JobSkeletonLoader";
import { GetJobsParams, IJobItem } from '@/constants/interface';
import { debounce } from 'lodash';
import Header from "@/components/landing_page/header";


const JobSearchPage = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [filters, setFilters] = useState<GetJobsParams>({});
    const limit = 10;

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    // Debounced filter change handler
    const handleFilterChange = debounce((filterType: string, value: string) => {
        setFilters((prevFilters) => ({
            ...prevFilters,
            [filterType]: value,
        }));
    }, 300);

    const { data, isLoading, error } = useQuery({
        queryKey: ['jobs', currentPage, filters],
        queryFn: () => jobs.getJobs({ page: currentPage, limit, ...filters }),
        refetchOnWindowFocus: false,
    });

    const filtersApplied = Object.keys(filters).length > 0;

    return (
        <section>
            <Header />
            <section className="flex flex-col space-y-4 bg-gray-5 rounded px-2 md:px-10">
                <Suspense fallback={<SkeletonLoader count={5} />}>
                    <section className='w-full mt-8'>
                        <JobSearchComponent onFilterChange={handleFilterChange} />
                        {!filtersApplied ? (
                            <h5 className='text-gray-1 text-sm font-normal mt-5 md:mt-0'>
                                Recommended Jobs
                            </h5>
                        )
                            : <h5 className='text-gray-1 text-sm font-normal mt-5 md:mt-0'>
                                Jobs found {data?.pagination?.totalJobs}
                            </h5>
                        }
                        <section className='w-full mb-4'>
                            {isLoading ? (
                                <SkeletonLoader count={5} />
                            ) : (
                                data?.jobs?.map((job: IJobItem) => (
                                    <RecommendedJobCard key={job.id} job={job} />
                                ))
                            )}
                        </section>
                        {
                            data && data?.pagination?.totalPages > currentPage ?
                                <Pagination
                                    currentPage={currentPage}
                                    totalPages={data?.pagination?.totalPages || 1}
                                    onPageChange={handlePageChange}
                                />
                                : ""
                        }
                    </section>
                </Suspense>
            </section>
        </section>
    );
};

export default JobSearchPage;
