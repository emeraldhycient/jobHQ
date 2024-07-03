import React from 'react'
import Image from "next/image"

function JobCard() {
    return (
        <div className="bg-gray-2 h-[420px] px-6 py-10 rounded">
            <div className="flex justify-between items-center">
                <Image src={"/images/logo.svg"} height={100} width={100} className='w-[50px] h-[50px] ' alt='company logo' />
                <div className="flex items-center space-x-2">
                    <h6 className='font-medium text-sm'>5 days ago</h6>
                    <div className="flex items-center space-x-2">
                        <div className="h-2 w-2 bg-gray-3 rounded-full"></div>
                        <h6 className='font-medium text-sm'>Full-time</h6>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JobCard
