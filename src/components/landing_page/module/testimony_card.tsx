import React, { useState } from 'react'
import Image from "next/image"
import { FaLocationDot } from "react-icons/fa6";
import { Button } from '@/components/ui/button';
import { FaRegHeart } from "react-icons/fa";
import Link from 'next/link';

function TestimonyCard() {
    return (
        <div className="bg-black px-6 py-8 rounded">
            <div className="flex space-x-3 items-center pb-4">
                <Image src={"/images/testimony.png"} height={100} width={100} className='w-[50px] h-[50px] ' alt='company logo' />
                <div className="flex flex-col justify-center">
                    <h6 className='font-normal text-sm'>5 days ago</h6>
                    <h6 className='font-normal text-sm'>Full-time</h6>
                </div>
            </div>
            <div className="">
                <p className='font-normal text-base'>Tech Innovators Inc. is seeking a highly skilled Senior Software Engineer to join our dynamic team. You will be responsible for designing, developing, and implementing software solutions.</p>
            </div>

        </div>
    )
}

export default TestimonyCard
