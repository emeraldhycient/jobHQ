import React from 'react'
import JobCard from './module/Job_card'

function FeaturedJobs() {
    return (
        <section className='px-6 md:px-24 text-white pt-6 pb-10 mt-10'>
            <div className="flex flex-col items-center justify-center">
                <h4 className='text-xl font-semibold'>Explore Featured Jobs</h4>
                <h6 className='text-[14px] font-medium my-3 text-center'>Explore available jobs and find your perfect and suitable job</h6>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-2 gap-y-4 md:gap-x-4 md:gap-y-6 mt-6">
                <JobCard/>
                <JobCard/>
                <JobCard/>
                <JobCard/>
                <JobCard/>
                <JobCard/>
            </div>
        </section>
    )
}

export default FeaturedJobs
