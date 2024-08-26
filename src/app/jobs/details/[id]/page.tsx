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
import Header from '@/components/landing_page/header';

const Page: FC = () => {
  const { id } = useParams<{ id: string }>();

  const { data, isLoading, error } = useQuery({
    queryKey: ['jobDetails', id],
    queryFn: () => jobs.getJobPublic(id),
    refetchOnWindowFocus: false,
  });

  console.log({jobs:data})

  if (isLoading) {
    return <SkeletonLoader count={1} />;
  }

  if (error) {
    return <div>Error loading job details</div>;
  }

  if (!data) {
    return <div>No job details found.</div>;
  }

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <section>
        <Header />
        <section className='px-2 md:px-10'>
        <GoBack />
        <JobDetails job={data} />
        </section>
      </section>
    </ErrorBoundary>
  );
};

export default Page;
