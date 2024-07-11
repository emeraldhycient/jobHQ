import React from 'react';

type Props = {
    width?: number;
    height?: number;
    fill?: string;
};

const GridIcon: React.FC<Props> = ({ width = 16, height = 17, fill = "#E0E0E0" }) => {
    return (
        <svg width={width} height={height} viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="mask0_373_5685" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="16" height="17">
                <rect y="0.573242" width="16" height="16" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_373_5685)">
                <path d="M8.66667 6.57324V2.57324H14V6.57324H8.66667ZM2 9.23991V2.57324H7.33333V9.23991H2ZM8.66667 14.5732V7.90658H14V14.5732H8.66667ZM2 14.5732V10.5732H7.33333V14.5732H2Z" fill={fill} />
            </g>
        </svg>
    );
};

export default GridIcon;
