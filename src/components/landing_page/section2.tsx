import React from 'react'
import { HiOutlineSparkles, HiOutlineViewfinderCircle } from "react-icons/hi2";
import { GiArchiveResearch } from "react-icons/gi";
import { IoCloudUploadOutline } from "react-icons/io5";

import { BsDatabaseDown } from "react-icons/bs";
import { PiBuildings } from "react-icons/pi";


function Section2() {
    return (
        <section>
            <section className='px-24 text-white pt-6 mb-6'>
                <h4 className='text-xl font-semibold'>For Job Seekers</h4>
                <div className="w-[45%] my-3">
                    <h6 className='text-[14px] font-medium'>Experience AI-driven preparation with personalized guidance and proven results, ensuring you land your dream job.</h6>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="h-[100px] bg-gray-2 px-4 py-6 rounded">
                        <div className="flex">
                            <h4 className='font-medium text-base mb-2'>Find Your Dream Job</h4>
                            <GiArchiveResearch className="text-blue-primary animate-pulse" />
                        </div>
                        <h6 className='font-medium text-sm'>SEARCH JOBS</h6>
                    </div>
                    <div className="h-[100px] bg-gray-2 px-4 py-6 rounded">
                        <div className="flex">
                            <h4 className='font-medium text-base mb-2'>Submit Your Resume</h4>
                            <IoCloudUploadOutline className="text-blue-primary animate-pulse" />
                        </div>
                        <h6 className='font-medium text-sm'>JOIN OUR DATABASE</h6>
                    </div>
                    <div className="h-[100px] bg-gray-2 px-4 py-6 rounded">
                        <div className="flex">
                            <h4 className='font-medium text-base mb-2'>Prepare for Interview</h4>
                            <HiOutlineSparkles className="text-blue-primary animate-pulse" />
                        </div>
                        <h6 className='font-medium text-sm'>PREP LIKE A PRO</h6>
                    </div>
                </div>
            </section>
            <section className='px-24 text-white pt-6 pb-10'>
                <h4 className='text-xl font-semibold'>For Employers</h4>
                <div className="w-[45%] my-3">
                    <h6 className='text-[14px] font-medium'>Experience AI-driven preparation with personalized guidance and proven results, ensuring you land your dream job.</h6>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="h-[100px] bg-gray-2 px-4 py-6 rounded">
                        <div className="flex">
                            <h4 className='font-medium text-base mb-2'>Post Your Jobs</h4>
                            <BsDatabaseDown className="text-green-400 animate-pulse" />
                        </div>
                        <h6 className='font-medium text-sm'>PUBLISH JOB LISTINGS</h6>
                    </div>
                    <div className="h-[100px] bg-gray-2 px-4 py-6 rounded">
                        <div className="flex">
                            <h4 className='font-medium text-base mb-2'>Find Top Talent</h4>
                            <HiOutlineViewfinderCircle className="text-green-400 animate-pulse" />
                        </div>
                        <h6 className='font-medium text-sm'>HIRE TOP TALENT</h6>
                    </div>
                    <div className="h-[100px] bg-gray-2 px-4 py-6 rounded">
                        <div className="flex">
                            <h4 className='font-medium text-base mb-2'>Build Your Dream Team</h4>
                            <PiBuildings className="text-green-400 animate-pulse" />
                        </div>
                        <h6 className='font-medium text-sm'>ACCESS AND EVALUATE APPLICANTS</h6>
                    </div>
                </div>
            </section>
        </section>

    )
}

export default Section2
