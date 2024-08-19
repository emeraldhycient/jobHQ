'use client'
import JobItemSkeleton from "@/components/common/JobItemSkeleton";
import AppliedCard from "@/components/dashboard/seeker/fragments/appliedCard";
import Pagination from "@/components/dashboard/seeker/fragments/pagination";
import jobs from "@/services/jobs";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import React, { Suspense } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'



const AppliedJobsPage = () => {

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


  const {data,isLoading,error} = useQuery({ queryKey: ['recentlyAppliedJobs'], queryFn: jobs.getAppliedJobs })
  
  console.log({ recentlyAppliedJobsx: data})


  return (
    <div className="flex flex-col space-y-4 py-8">
      <h5 className='text-sm font-normal'>Applied Jobs</h5>
      <div className="">
        
        {
          isLoading ? 
            new Array(5).fill(5, 0, 5).map((id) => <JobItemSkeleton key={id} />)
          :
              recentlyAppliedJobs.map((course) => (
                <AppliedCard key={course.id} />
              ))
          
        }
       
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default AppliedJobsPage;
