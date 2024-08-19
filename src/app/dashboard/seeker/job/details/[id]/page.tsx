'use client'
import GoBack from '@/components/common/goBack';
import JobDetails from '@/components/job/details/JobDetails';
import { FC } from 'react';
import { useParams } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import jobs from '@/services/jobs';
import SkeletonLoader from '@/components/common/skeleton/JobDetailsSkeletonLoader'; 
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from '@/components/common/ErrorFallback';

const Page: FC = () => {
  const { id } = useParams<{ id: string }>();

  const { data, isLoading, error } = useQuery({
    queryKey: ['jobDetails', id],
    queryFn: () => jobs.getJob(id),
    refetchOnWindowFocus: false,
  });

  if (isLoading) {
    return <SkeletonLoader count={1} />;
  }

  if (error) {
    return <div>Error loading job details</div>;
  }

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <section>
        <GoBack />
        {data.job ? <JobDetails job={data?.job ?? []} /> : <div>No job details found.</div>}
      </section>
    </ErrorBoundary>
  );
};

export default Page;
