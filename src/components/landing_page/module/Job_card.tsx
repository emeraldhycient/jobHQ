import React from 'react'
import Image from "next/image"
import { FaLocationDot } from "react-icons/fa6";


function JobCard() {
    return (
        <div className="bg-gray-2 h-[420px] px-6 py-8 rounded">
            <div className="flex justify-between items-center pb-8 border-b-[0.5px] border-gray-3">
                <Image src={"/images/logo.svg"} height={100} width={100} className='w-[50px] h-[50px] ' alt='company logo' />
                <div className="flex items-center space-x-2">
                    <h6 className='font-normal text-sm'>5 days ago</h6>
                    <div className="flex items-center space-x-2">
                        <div className="h-2 w-2 bg-gray-3 rounded-full"></div>
                        <h6 className='font-normal text-sm'>Full-time</h6>
                    </div>
                </div>
            </div>
            <div className="flex items-center space-x-2 my-8">
                <FaLocationDot className='text-blue-primary' />
                <h6 className='font-normal text-sm'>Lagos, Nigeria</h6>
            </div>
            <div className="">
                <h6 className='font-normal text-base my-6'>Senior Software Engineer</h6>
                <p className='font-normal text-base'>Tech Innovators Inc. is seeking a highly skilled Senior Software Engineer to join our dynamic team. You will be responsible for designing, developing, and implementing software solutions.</p>
            </div>
        </div>
    )
}

export default JobCard
