import GoBack from '@/components/common/goBack';
import JobDetails from '@/components/job/details/JobDetails';
import Header from '@/components/landing_page/header';
import { FC } from 'react';


const Page: FC = () => {
  return (
    <section>
      <Header />
      <GoBack/>
      <JobDetails/>
</section>
  );
};

export default Page;
