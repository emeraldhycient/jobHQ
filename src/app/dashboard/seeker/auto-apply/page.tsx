'use client'
import Pagination from "@/components/dashboard/seeker/fragments/pagination";
import RecommendedJobCard from "@/components/dashboard/seeker/fragments/recoJobCard";
import JobSearchComponent from "@/components/dashboard/seeker/fragments/jobSearchFilter";
import { useState } from "react";
import { HiOutlineSparkles } from "react-icons/hi2";

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

    const handleAutoApplyToggle = () => {
        // Logic to enable or disable the auto-apply feature
        alert("Auto Apply feature toggled!");
    };

    return (
        <section className="flex flex-col space-y-4 bg-gray-5 rounded">
            <section className='w-full mt-8'>
                <JobSearchComponent />
                <div className='flex justify-between items-center mt-5 md:mt-0'>
                    <h5 className='text-gray-1 text-sm font-normal'>Jobs</h5>
                    <button
                        className="relative inline-flex h-10 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                    >
                        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                            Auto Apply
                            <HiOutlineSparkles size={20} className="animate-pulse pl-2"/>
                        </span>
                    </button>
                </div>
                <section className='w-full mb-4'>
                    {recentlyAppliedJobs.map((job, index) => (
                        <RecommendedJobCard key={index}  />
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
