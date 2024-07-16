'use client'
import AppliedCard from "@/components/dashboard/seeker/fragments/appliedCard";
import Pagination from "@/components/dashboard/seeker/fragments/pagination";
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
    <div className="flex flex-col space-y-4 py-8">
      <h5 className='text-sm font-normal'>Applied Jobs</h5>
      <div className="">
        {recentlyAppliedJobs.map((course) => (
          <AppliedCard key={course.id} />
        ))}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default DashboardPage;
