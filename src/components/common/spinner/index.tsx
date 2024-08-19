import React from "react";
interface Props {
  fillColor?: string;
  strokeColor?: string;
  dimension?: string;
}

const Spinner = ({ strokeColor = "currentColor", dimension = "28" }: Props) => {
  return (
    <div className="flex justify-center items-center">
      <svg
        width={dimension}
        height={dimension}
        viewBox="0 0 41 41"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`animate-spin`}
      >
        <circle cx="20.5011" cy="20.2589" r="19.7374" fill="fill-current" />
        <path
          d="M7.42874 6.83414C9.48071 4.83642 11.9633 3.33564 14.6858 2.44708C17.4083 1.55852 20.2982 1.30584 23.1336 1.70845C25.969 2.11105 28.6743 3.15823 31.0419 4.76953C33.4094 6.38084 35.3761 8.51339 36.7908 11.0034C38.2056 13.4933 39.0307 16.2745 39.2029 19.1331C39.3751 21.9918 38.8898 24.8518 37.7842 27.4936C36.6785 30.1354 34.9821 32.4886 32.8251 34.3725C30.6681 36.2563 28.108 37.6207 25.3415 38.3607"
          stroke={strokeColor}
          strokeWidth="2"
        />
      </svg>
    </div>
  );
};

export default Spinner;