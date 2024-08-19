import ApplicationDeadline from '@/components/job/details/ApplicationDeadline';
import Benefits from '@/components/job/details/Benefits';
import HowToApply from '@/components/job/details/HowToApply';
import JobDescription from '@/components/job/details/JobDescription';
import JobHeader from '@/components/job/details/JobHeader';
import Qualifications from '@/components/job/details/Qualifications';
import Salary from '@/components/job/details/Salary';
import { FC } from 'react';
import { IJobItem } from '@/constants/interface'; 

interface JobDetailsProps {
    job: IJobItem;
}

const JobDetails: FC<JobDetailsProps> = ({ job }) => {
    return (
        <div className="py-8 md:px-8 space-y-6 text-gray-1">
            <JobHeader
                title={job.title}
                company={job.postedBy.companyName}
                location={job.location}
                postedDate={new Date(job.createdAt).toDateString()} // formatting date
            />
            <JobDescription description={job.description} />
            <Qualifications qualifications={job.requirements} />
            <Benefits benefits={job.benefits.length ? job.benefits : ["No benefits listed"]} />
            <Salary salary={job.salaryRange ? job.salaryRange : "Salary not disclosed"} />
            <HowToApply instructions={`Submit your application to ${job.postedBy.companyEmail}`} />
            <ApplicationDeadline deadline={new Date(job.createdAt).toDateString()} />
        </div>
    );
};

export default JobDetails;
