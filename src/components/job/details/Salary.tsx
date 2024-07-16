import { FC } from 'react';

interface SalaryProps {
    salary: string;
}

const Salary: FC<SalaryProps> = ({ salary }) => {
    return (
        <div className="p-4 bg-gray-2 rounded-lg">
            <h3 className="mb-2 text-base font-semibold">Salary</h3>
            <p className="text-xs">{salary}</p>
        </div>
    );
};

export default Salary;
