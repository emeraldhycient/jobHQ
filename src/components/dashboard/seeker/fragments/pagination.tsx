import { FC } from 'react';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

const Pagination: FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
    const handlePrevious = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    };

    const handleNext = () => {
        if (currentPage < totalPages) {
            onPageChange(currentPage + 1);
        }
    };

    return (
        <div className="flex items-center justify-center space-x-10 text-gray-3">
            <button
                className="text-base"
                onClick={handlePrevious}
                disabled={currentPage === 1}
            >
                &lt;
            </button>
            <span className="text-xs font-normal space-x-2">
                <span>{currentPage}</span>
                <span>of</span>
                <span>{totalPages}</span>
            </span>
            <button
                className="text-base"
                onClick={handleNext}
                disabled={currentPage === totalPages}
            >
                &gt;
            </button>
        </div>
    );
};

export default Pagination;
