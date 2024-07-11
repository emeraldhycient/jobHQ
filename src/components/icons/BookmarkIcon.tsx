import React from 'react';

type Props = {
    width?: number;
    height?: number;
    fill?: string;
};

const BookmarkIcon: React.FC<Props> = ({ width = 30, height = 31, fill = "#E0E0E0" }) => {
    return (
        <svg width={width} height={height} viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="mask0_373_5808" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="30" height="31">
                <rect y="0.573242" width="30" height="30" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_373_5808)">
                <path d="M4.99951 28.0737V10.5737C4.99951 9.88623 5.2443 9.29769 5.73389 8.80811C6.22347 8.31852 6.81201 8.07373 7.49951 8.07373H17.4995C18.187 8.07373 18.7756 8.31852 19.2651 8.80811C19.7547 9.29769 19.9995 9.88623 19.9995 10.5737V28.0737L12.4995 24.3237L4.99951 28.0737ZM7.49951 24.2925L12.4995 21.605L17.4995 24.2925V10.5737H7.49951V24.2925ZM22.4995 23.0737V5.57373H8.74951V3.07373H22.4995C23.187 3.07373 23.7756 3.31852 24.2651 3.80811C24.7547 4.29769 24.9995 4.88623 24.9995 5.57373V23.0737H22.4995Z" fill={fill} />
            </g>
        </svg>
    );
};

export default BookmarkIcon;
