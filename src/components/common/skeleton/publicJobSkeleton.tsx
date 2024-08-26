import React from 'react';
import { FaLocationDot } from "react-icons/fa6";

function PublicJobCardSkeleton() {
    return (
        <div className="animate-pulse bg-gray-2 px-6 py-8 rounded text-gray-1">
            <div className="flex justify-between items-center pb-8 border-b-[0.5px] border-gray-3">
                <div className="bg-gray-3 h-12 w-12 rounded"></div>
                <div className="flex items-center space-x-2 text-gray-3">
                    <div className="h-4 bg-gray-3 rounded w-16"></div>
                    <div className="flex items-center space-x-2">
                        <div className="h-2 w-2 bg-gray-3 rounded-full"></div>
                        <div className="h-4 bg-gray-3 rounded w-16"></div>
                    </div>
                </div>
            </div>
            <div className="flex items-center space-x-2 my-8">
                <FaLocationDot className='text-blue-primary' />
                <div className="h-4 bg-gray-3 rounded w-24"></div>
            </div>
            <div className="">
                <div className="h-6 bg-gray-3 rounded w-3/4 my-5"></div>
                <div className="h-4 bg-gray-3 rounded w-full mb-2"></div>
                <div className="h-4 bg-gray-3 rounded w-5/6 mb-2"></div>
                <div className="h-4 bg-gray-3 rounded w-4/5 mb-2"></div>
            </div>
            <div className="flex justify-between items-center mt-8">
                <div className="flex items-center space-x-3">
                    <div className="h-4 bg-gray-3 rounded w-20"></div>
                    <div className="h-8 bg-gray-3 rounded w-16"></div>
                </div>
                <div className="bg-gray-3 h-6 w-6 rounded-full"></div>
            </div>
        </div>
    );
}

export default PublicJobCardSkeleton;
