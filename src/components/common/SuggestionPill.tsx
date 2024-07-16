import React from 'react';
import CircledCancelIcon from '../icons/CircledCancelIcon';

interface SuggestionPillProps {
    title: string;
    onRemove: (title: string) => void ;
}

const SuggestionPill: React.FC<SuggestionPillProps> = ({ title, onRemove }) => {
    return (
        <div className="flex items-center bg-gray-2 text-gray-1 px-4 py-3 rounded-lg">
            <span className='text-xs font-normal'>{title}</span>
            <div className="ml-2 cursor-pointer" onClick={() => onRemove(title)}>
                <CircledCancelIcon />
            </div>
        </div>
    );
};

export default SuggestionPill;
