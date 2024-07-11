import { FC } from 'react';

interface Job {
    id: number;
    title: string;
    company: string;
    location: string;
    type: string;
    postedDate: string;
}

interface RecommendedJobsProps {
    jobs: Job[];
}

const RecommendedJobs: FC<RecommendedJobsProps> = ({ jobs }) => {
    return (
        <div className="p-4 bg-gray-700 rounded">
            <h2 className="text-xl font-bold mb-4">Recommended Jobs</h2>
            <ul>
                {jobs.map((job) => (
                    <li key={job.id} className="mb-2">
                        <div className="flex justify-between">
                            <div>
                                <h3 className="font-bold">{job.title}</h3>
                                <p>{job.company}</p>
                                <p>{job.location}</p>
                                <p>{job.type}</p>
                                <p>Posted: {job.postedDate}</p>
                            </div>
                            <button className="bg-blue-500 text-white px-4 py-2 rounded">Apply Now</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RecommendedJobs;
