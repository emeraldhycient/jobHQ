import React from 'react';

type Props = {
    width?: number;
    height?: number;
    fill?: string;
};

const SearchIcon: React.FC<Props> = ({ width = 16, height = 17, fill = "#E0E0E0" }) => {
    return (
        <svg width={width} height={height} viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="mask0_373_5685" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="16" height="17">
                <rect y="0.573242" width="16" height="16" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_373_5685)">
                <path d="M7.66667 2.57324C5.05408 2.57324 2.66667 4.96065 2.66667 7.57324C2.66667 10.1858 5.05408 12.5732 7.66667 12.5732C9.25417 12.5732 10.6683 11.8778 11.533 10.7055L14.6667 13.8392L13.8392 14.6667L10.7055 11.533C9.73313 12.3697 8.72467 12.5732 7.66667 12.5732C4.96065 12.5732 2.66667 10.1858 2.66667 7.57324C2.66667 4.96065 4.96065 2.57324 7.66667 2.57324C10.3733 2.57324 12.6667 4.96065 12.6667 7.57324H14.3333C14.3333 4.96065 11.7074 2.57324 9.00001 2.57324H7.66667Z" fill={fill} />
            </g>
        </svg>
    );
};

export default SearchIcon;
