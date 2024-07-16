import { FC } from 'react';

interface JobDescriptionProps {
    description: string;
}

const JobDescription: FC<JobDescriptionProps> = ({ description }) => {
    return (
        <div className="p-4 bg-gray-2 rounded-lg">
            <h3 className="mb-2 text-base font-semibold">Description</h3>
            <p className="text-xs">{description}</p>
        </div>
    );
};

export default JobDescription;
