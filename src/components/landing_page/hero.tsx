import React from 'react'
import Image from 'next/image'
import { Input } from "@/components/ui/input"
import { Button } from '../ui/button'


function HeroSection() {
    return (
        <section className='text-gray-1 lg:h-[90vh] w-screens px-6 md:px-20 lg:px-32 py-16 relative'>
            <div className="w-full h-full mb-4 md:mb-0 md:flex">
                <div className="lg:px-20 md:w-[90%] lg:w-[50%] flex flex-col justify-center items-center">
                    <h4 className='font-bold text-4xl'>Explore Opportunities, Upskill for Success, and Master Interviews</h4>
                    <Image src={"/icons/line.svg"} width={100} height={100} className='w-[100px]' alt='' />
                    <h6 className='text-sm font-semibold mt-8'>The All-in-One AI-Powered Platform for Job Seekers & Employers. Discover Jobs, Upskill with AI, Prepare for Interviews, and Hire Top Talent Effortlessly.</h6>
                </div>
                <div className="hidden md:block md:w-[50%]">
                    <Image src={"/images/Image.png"} width={100} height={100} className='w-full h-full' alt='' />
                </div>
            </div>
            <section className='lg:absolute bg-white p-3 md:w-[67%] lg:w-[66%] bottom-4 right-[250px] flex flex-col md:flex-row gap-3'>
                <Input placeholder='Job Title, Skills or Company' />
                <Input placeholder='City, State or Remote' />
                <Button size={"lg"}>Search Jobs</Button>
            </section>
        </section>
    )
}

export default HeroSection
