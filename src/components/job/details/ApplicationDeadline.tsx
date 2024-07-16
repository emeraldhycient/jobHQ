import { FC } from 'react';

interface ApplicationDeadlineProps {
    deadline: string;
}

const ApplicationDeadline: FC<ApplicationDeadlineProps> = ({ deadline }) => {
    return (
        <div className="p-4 bg-gray-2 rounded-lg">
            <h3 className="mb-2 text-base font-semibold">Application Deadline</h3>
            <p className="text-xs">{deadline}</p>
        </div>
    );
};

export default ApplicationDeadline;
