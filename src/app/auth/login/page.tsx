'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { FaLinkedin } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";


function Login() {

    const [isJobSeeker, setIsJobSeeker] = useState(true)

    const toggleIsJobSeeker = () => setIsJobSeeker(prev => !prev)

    return (
        <section className='px-2 md:px-24 text-gray-1'>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <Link href={"/"}>
                            <Image height={100} width={100} src="/logo/jobHQ_logo.svg" alt="JobHQ Logo" />
                        </Link>
                    </div>
                </div>
            </div>
            <h4 className='text-xl font-semibold md:text-center px-4 md:px-0'>Sign In</h4>
            <div className="w-[95%] md:w-[50%] mx-auto space-y-5 mt-10">
                <div className="my-10 grid grid-cols-2">
                    <div onClick={toggleIsJobSeeker} className={`${isJobSeeker ? "border-b-2 border-blue-primary" : "border-b-[0.3px] border-gray-3"} flex justify-center items-center py-3 transition-all duration-300 ease-in-out cursor-pointer`}>
                        <h6 className='text-sm font-normal'>I'm a Job Seeker</h6>
                    </div>
                    <div onClick={toggleIsJobSeeker} className={`${!isJobSeeker ? "border-b-2 border-blue-primary" : "border-b-[0.3px] border-gray-3"} flex justify-center items-center py-3 transition-all duration-300 ease-in-out cursor-pointer`}>
                        <h6 className='text-sm font-normal'>I'm an Employer</h6>
                    </div>
                </div>
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
                <Input placeholder='Email' />
                <Input placeholder='Password' />
                <Button variant={'default'} size={'sm'} asChild>
                    <Link href="/login" className='block w-full text-left px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700'>
                        Sign In
                    </Link>
                </Button>
            </div>
        </section>
    )
}

export default Login
