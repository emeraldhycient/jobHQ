import Image from 'next/image';
import React from 'react';

interface LoadingComponentProps {
    imagePath?: string;
    message?: string;
}

const LoadingComponent: React.FC<LoadingComponentProps> = ({ imagePath = "/logo/jobHQ.svg", message = "Loading, please wait..." }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="flex flex-col items-center">
                <div className="relative">
                    <div className="loader w-20 h-20 border-t-4 border-blue-500 rounded-full animate-spin"></div>
                    <Image
                        src={imagePath}
                        alt="Logo"
                        height={100}
                        width={100}
                        className="absolute inset-0 w-10 h-10 m-auto"
                    />
                </div>
                {message && <p className="mt-4 text-white">{message}</p>}
            </div>
        </div>
    );
};

export default LoadingComponent;

