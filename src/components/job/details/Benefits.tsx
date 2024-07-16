import { FC } from 'react';

interface BenefitsProps {
    benefits: string[];
}

const Benefits: FC<BenefitsProps> = ({ benefits }) => {
    return (
        <div className="p-4 bg-gray-2 rounded-lg">
            <h3 className="mb-2 text-base font-semibold">Benefits</h3>
            <ul className="space-y-2">
                {benefits.map((item, index) => (
                    <li key={index} className="flex items-center text-xs">
                        <span className="mr-2 text-blue-500">•</span>
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Benefits;
