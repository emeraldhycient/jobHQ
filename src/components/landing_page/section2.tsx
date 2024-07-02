import React from 'react';
import { HiOutlineSparkles, HiOutlineViewfinderCircle } from 'react-icons/hi2';
import { GiArchiveResearch } from 'react-icons/gi';
import { IoCloudUploadOutline } from 'react-icons/io5';
import { BsDatabaseDown } from 'react-icons/bs';
import { PiBuildings } from 'react-icons/pi';

const jobSeekerItems = [
    {
        title: 'Find Your Dream Job',
        icon: <GiArchiveResearch className="text-blue-primary animate-pulse" />,
        description: 'SEARCH JOBS',
    },
    {
        title: 'Submit Your Resume',
        icon: <IoCloudUploadOutline className="text-blue-primary animate-pulse" />,
        description: 'JOIN OUR DATABASE',
    },
    {
        title: 'Prepare for Interview',
        icon: <HiOutlineSparkles className="text-blue-primary animate-pulse" />,
        description: 'PREP LIKE A PRO',
    },
];

const employerItems = [
    {
        title: 'Post Your Jobs',
        icon: <BsDatabaseDown className="text-green-400 animate-pulse" />,
        description: 'PUBLISH JOB LISTINGS',
    },
    {
        title: 'Find Top Talent',
        icon: <HiOutlineViewfinderCircle className="text-green-400 animate-pulse" />,
        description: 'HIRE TOP TALENT',
    },
    {
        title: 'Build Your Dream Team',
        icon: <PiBuildings className="text-green-400 animate-pulse" />,
        description: 'ACCESS AND EVALUATE APPLICANTS',
    },
];

function Section2() {
    return (
        <section className='px-6 md:px-24'>
            <section className='text-white pt-6 mb-6'>
                <h4 className='text-xl font-semibold'>For Job Seekers</h4>
                <div className="md:w-[75%] lg:ww-[45%] my-3">
                    <h6 className='text-[14px] font-medium'>Experience AI-driven preparation with personalized guidance and proven results, ensuring you land your dream job.</h6>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4">
                    {jobSeekerItems.map((item, index) => (
                        <div key={index} className="bg-gray-2 px-4 py-6 rounded">
                            <div className="flex">
                                <h4 className='font-medium text-base mb-2'>{item.title}</h4>
                                {item.icon}
                            </div>
                            <h6 className='font-medium text-sm'>{item.description}</h6>
                        </div>
                    ))}
                </div>
            </section>
            <section className='text-white pt-6 pb-10'>
                <h4 className='text-xl font-semibold'>For Employers</h4>
                <div className="md:w-[75%] lg:ww-[45%] my-3">
                    <h6 className='text-[14px] font-medium'>Unlock top talent with AI-powered candidate preparation. Our personalized guidance and proven results ensure you hire the best, effortlessly.</h6>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4">
                    {employerItems.map((item, index) => (
                        <div key={index} className="bg-gray-2 px-4 py-6 rounded">
                            <div className="flex">
                                <h4 className='font-medium text-base mb-2'>{item.title}</h4>
                                {item.icon}
                            </div>
                            <h6 className='font-medium text-sm'>{item.description}</h6>
                        </div>
                    ))}
                </div>
            </section>
        </section>
    );
}

export default Section2;
