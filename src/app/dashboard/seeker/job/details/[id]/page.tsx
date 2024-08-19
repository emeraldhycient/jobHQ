'use client'
import GoBack from '@/components/common/goBack';
import JobDetails from '@/components/job/details/JobDetails';
import { FC } from 'react';
import { useParams } from 'next/navigation'
import { useQuery } from '@tanstack/react-query';
import jobs from '@/services/jobs';



const Page: FC = () => {
  const {id} = useParams<{ id: string }>()
  
  console.log({ id })

  const { data, isLoading, error } = useQuery({
    queryKey: ['recentlyAppliedJobs', id],
    queryFn: async ({ queryKey })=> jobs.getJob(queryKey[1]),
    refetchOnWindowFocus: false,
  });

  console.log({data})

  return (
    <section>
      <GoBack />
      <JobDetails/>
</section>
  );
};

export default Page;
