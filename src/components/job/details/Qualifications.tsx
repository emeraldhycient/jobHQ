import { FC } from 'react';

interface QualificationsProps {
    qualifications: string[];
}

const Qualifications: FC<QualificationsProps> = ({ qualifications }) => {
    return (
        <div className="p-4 bg-gray-2 rounded-lg">
            <h3 className="mb-2 text-base font-semibold">Qualifications</h3>
            <ul className="space-y-2">
                {qualifications.map((item, index) => (
                    <li key={index} className="flex items-center text-sm text-xs font-normal">
                        <span className="mr-2 text-blue-500 text-xs font-normal">•</span>
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Qualifications;
