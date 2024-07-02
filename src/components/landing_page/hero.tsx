import React from 'react'
import Image from 'next/image'
import { Input } from "@/components/ui/input"
import { Button } from '../ui/button'


function HeroSection() {
    return (
        <section className='text-white h-screen w-screens px-32 py-16 relative'>
            <div className="w-full h-full flex">
                <div className="px-20 w-[50%] flex flex-col justify-center items-center">
                    <h4 className='font-bold text-4xl'>Explore Opportunities, Upskill for Success, and Master Interviews</h4>
                    <Image src={"/icons/line.svg"} width={100} height={100} className='w-[100px]' alt='' />
                    <h6 className='text-sm font-semibold mt-8'>The All-in-One Platform for Job Seekers & Employers. Find Jobs, Upskill, Interview, and Hire Top Talent.</h6>
                </div>
                <div className="w-[50%]">
                    <Image src={"/images/Image.png"} width={100} height={100} className='w-full' alt='' />
                </div>
            </div>
            <section className='absolute bg-white p-3 w-[65%] bottom-4 right-[250px] flex gap-x-3'>
                <Input placeholder='Job Title, Skills or Company' />
                <Input placeholder='City, State or Remote' />
                <Button size={"lg"}>Search Jobs</Button>
            </section>
        </section>
    )
}

export default HeroSection
