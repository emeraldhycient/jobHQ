'use client'

import React, { useState, useEffect, Suspense } from 'react';
import { useQuery } from "@tanstack/react-query";
import SkeletonLoader from "@/components/common/skeleton/JobSkeletonLoader";
import AppliedCard from "@/components/dashboard/seeker/fragments/appliedCard";
import Pagination from "@/components/dashboard/seeker/fragments/pagination";
import jobs from "@/services/jobs";
import { ErrorBoundary } from 'react-error-boundary';
import { IJobItem } from '@/constants/interface';

const AppliedJobsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchAppliedJobs = async ({ queryKey }: { queryKey: any }) => {
    const [, page] = queryKey;
    const response = await jobs.getAppliedJobs({page});
    setTotalPages(response.pagination.totalPages);
    return response;
  };

  const { data, isLoading, error } = useQuery({
    queryKey: ['recentlyAppliedJobs', currentPage],
    queryFn: fetchAppliedJobs,
    refetchOnWindowFocus: false,
  });

  console.log({data})

  useEffect(() => {
    if (error) {
      console.error('Error fetching applied jobs:', error);
    }
  }, [error]);

  console.log()

  return (
    <div className="flex flex-col space-y-4 py-8">
      <h5 className="text-sm font-normal">Applied Jobs</h5>
      <div>
        <Suspense fallback={<SkeletonLoader count={5} />}>
          {isLoading ? (
            <SkeletonLoader count={5} />
          ) : (
            data?.jobs?.map((job: IJobItem) => (
              <AppliedCard key={job.id} job={job} />
            ))
          )}
        </Suspense>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default function AppliedJobsWrapper() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <AppliedJobsPage />
    </ErrorBoundary>
  );
}

const ErrorFallback = ({ error, resetErrorBoundary }: { error: Error, resetErrorBoundary: () => void }) => {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
};
