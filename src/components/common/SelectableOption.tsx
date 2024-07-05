import { SelectableOptionProps } from '@/constants/interface';
import React from 'react';


const SelectableOption: React.FC<SelectableOptionProps> = ({ label, selected, onSelect }) => {
    return (
        <div
            className={`flex justify-between items-center px-6 py-3 mb-3 rounded-lg cursor-pointer bg-gray-2 border ${selected ? 'border-blue-500' : 'border-gray-600'} transition-colors duration-300 ease-in-out`}
            onClick={onSelect}
        >
            <span className={`text-xs font-medium text-gray-1`}>{label}</span>
            <div
                className={`w-6 h-6 rounded-full border ${selected ? 'bg-blue-500' : 'border-gray-400'} transition-colors duration-300 ease-in-out`}
            ></div>
        </div>
    );
};

export default SelectableOption;
