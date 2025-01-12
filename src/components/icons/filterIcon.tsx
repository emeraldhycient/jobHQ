import React from 'react';

interface IconProps {
    width?: number;
    height?: number;
    fill?: string;
    className?: string;
}

const FilterIcon: React.FC<IconProps> = ({
    width = 18,
    height = 18,
    fill = '#E0E0E0',
    className = '',
}) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path
                d="M8 18V12H10V14H18V16H10V18H8ZM0 16V14H6V16H0ZM4 12V10H0V8H4V6H6V12H4ZM8 10V8H18V10H8ZM12 6V0H14V2H18V4H14V6H12ZM0 4V2H10V4H0Z"
                fill={fill}
            />
        </svg>
    );
};

export default FilterIcon;
