'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { FaLinkedin } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";


function SignUp() {

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
            <h4 className='text-xl font-semibold text-center px-4 md:px-0'>Ready to take the next step?</h4>
            <p className='text-[14px] font-medium my-3 text-center w-[90%] md:w-[70%] lg:w-[50%] text-center mx-auto'>JobHQ is a premier platform connecting top talent in business, design, and technology with leading employers. </p>
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
                <Input placeholder='Email' />
                <Input placeholder='Password' />
                <Button variant={'default'} size={'sm'} asChild>
                    <p className='block w-full text-left px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700'>
                        Sign In
                    </p>
                </Button>
            </div>
        </section>
    )
}

export default SignUp
