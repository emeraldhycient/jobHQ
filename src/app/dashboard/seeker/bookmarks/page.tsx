'use client'
import Pagination from "@/components/dashboard/seeker/fragments/pagination";
import RecommendedJobCard from "@/components/dashboard/seeker/fragments/recoJobCard";
import JobSearchComponent from "@/components/dashboard/seeker/fragments/jobSearchFilter";
import { useState } from "react";

const DashboardPage = () => {


    const recentlyAppliedJobs = [
        { id: 1, title: 'Product Designer', location: 'Remote - Lagos, Nigeria', dateApplied: 'July 2nd, 2024', status: 'Applied' },
        { id: 2, title: 'Product Designer', location: 'Remote - Lagos, Nigeria', dateApplied: 'July 2nd, 2024', status: 'Applied' },
        { id: 3, title: 'Product Designer', location: 'Remote - Lagos, Nigeria', dateApplied: 'July 2nd, 2024', status: 'Applied' },
        { id: 4, title: 'Product Designer', location: 'Remote - Lagos, Nigeria', dateApplied: 'July 2nd, 2024', status: 'Applied' },
        { id: 5, title: 'Product Designer', location: 'Remote - Lagos, Nigeria', dateApplied: 'July 2nd, 2024', status: 'Applied' },
    ];

    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 130;

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    return (
        <section className="flex flex-col space-y-4 bg-gray-5 rounded">
            <section className='w-full mt-8'>
                <JobSearchComponent />
                <h5 className='text-gray-1 text-sm font-normal mt-5 md:mt-0'>Bookmarks Jobs</h5>
                <section className='w-full mb-4'>
                    {recentlyAppliedJobs.map((job, index) => (
                        <RecommendedJobCard key={index} />
                    ))}
                </section>
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                />
            </section>
        </section>
    );
};

export default DashboardPage;
