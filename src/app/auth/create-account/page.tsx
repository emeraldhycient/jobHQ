'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { FaLinkedin } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { FaRegEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import Header from '@/components/auth/header'

function SignUp() {
    const [isSecureEntry, setIsSecureEntry] = useState(true)
    const [isSecureEntry2, setIsSecureEntry2] = useState(true)
    const toggleSecureEntry = (pos: number) => {
        switch (pos) {
            case 1:
                setIsSecureEntry(prev => !prev)
                break;

            case 2:
                setIsSecureEntry2(prev => !prev)
                break;

            default:
                break;
        }
    }

    const [accountType, setaccountType] = useState("job seeker")

    return (
        <section className='px-2 md:px-24 text-gray-1'>
            <Header />
            <div className="">

                <h4 className='text-xl font-semibold text-center px-4 md:px-0'>Ready to take the next step?</h4>
                <p className='text-sm font-normal my-3 text-center w-[90%] md:w-[70%] lg:w-[50%] text-center mx-auto'>JobHQ is a premier platform connecting top talent in business, design, and technology with leading employers. </p>
                <div className="w-[95%] md:w-[50%] mx-auto space-y-5 mt-10">

                    <div className="grid grid-cols-2 gap-6 md:px-4 mt-10">
                        <Button variant={"default"}>
                            <div className="flex items-center space-x-3">
                                <FaLinkedin />
                                <h6 className='text-sm font-normal'>LinkedIn</h6>
                            </div>
                        </Button>
                        <Button variant={"default"}>
                            <div className="flex items-center space-x-3">
                                <FcGoogle />
                                <h6 className='text-sm font-normal'>Google</h6>
                            </div>
                        </Button>
                    </div>
                    <div className="my-10 flex items-center justify-center">
                        <div className="h-[1px] w-[48%] border-[0.2px] border-gray-3"></div>
                        <div className="h-[25px] w-[25px] rounded-full border-[0.3px] border-gray-3 flex items-center justify-center">
                            <h6 className='text-xs font-normal'>OR</h6>
                        </div>
                        <div className="h-[1px] w-[48%] border-[0.2px] border-gray-3"></div>
                    </div>
                    <Select onValueChange={(value) => setaccountType(value)}>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="I&apos;m applying as ..." />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="job seeker">Job Seeker</SelectItem>
                            <SelectItem value="employer">Employer</SelectItem>
                        </SelectContent>
                    </Select>
                    {
                        accountType === "employer" ?
                            <Input placeholder='Company Name' />
                            :
                            <Input placeholder='Full Name' />

                    }
                    <Input placeholder='Email' />
                    <Select>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Country" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>North America</SelectLabel>
                                <SelectItem value="est">Eastern Standard Time (EST)</SelectItem>
                                <SelectItem value="cst">Central Standard Time (CST)</SelectItem>
                                <SelectItem value="mst">Mountain Standard Time (MST)</SelectItem>
                                <SelectItem value="pst">Pacific Standard Time (PST)</SelectItem>
                                <SelectItem value="akst">Alaska Standard Time (AKST)</SelectItem>
                                <SelectItem value="hst">Hawaii Standard Time (HST)</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                    <Input type={isSecureEntry ? "password" : "text"} placeholder='Password' onRightIconClick={() => toggleSecureEntry(1)} rightIcon={isSecureEntry ? FaRegEye : FaRegEyeSlash} />
                    <Input type={isSecureEntry2 ? "password" : "text"} placeholder='Confirm Password' onRightIconClick={() => toggleSecureEntry(2)} rightIcon={isSecureEntry2 ? FaRegEye : FaRegEyeSlash} />
                    <Button variant={'default'} size={'sm'} asChild>
                        <p className='block w-full text-left px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700'>
                            Create Account
                        </p>
                    </Button>
                </div>
            </div>
        </section>
    )
}

export default SignUp
