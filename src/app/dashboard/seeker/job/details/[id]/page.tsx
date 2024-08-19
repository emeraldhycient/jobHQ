'use client'
import GoBack from '@/components/common/goBack';
import JobDetails from '@/components/job/details/JobDetails';
import { FC } from 'react';
import { useParams } from 'next/navigation'



const Page: FC = () => {
  const params = useParams<{ id: string }>()
  
  console.log({params})

  return (
    <section>
      <GoBack />
      <JobDetails/>
</section>
  );
};

export default Page;
