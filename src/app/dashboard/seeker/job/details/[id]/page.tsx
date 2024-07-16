import GoBack from '@/components/common/goBack';
import JobDetails from '@/components/job/details/JobDetails';
import { FC } from 'react';


const Page: FC = () => {
  return (
    <section>
      <GoBack />
      <JobDetails/>
</section>
  );
};

export default Page;
