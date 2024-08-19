'use client'
import GoBack from '@/components/common/goBack';
import JobDetails from '@/components/job/details/JobDetails';
import { FC } from 'react';
import { useParams } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import jobs from '@/services/jobs';
import SkeletonLoader from '@/components/common/skeleton/JobDetailsSkeletonLoader'; // Assuming you have a skeleton loader

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
    <section>
      <GoBack />
      {data ? <JobDetails job={data.job} /> : <div>No job details found.</div>}
    </section>
  );
};

export default Page;
