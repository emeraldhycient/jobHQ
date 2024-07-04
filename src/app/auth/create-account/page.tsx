'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { FaLinkedin } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

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
                <Select>
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select a timezone" />
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
                        <SelectGroup>
                            <SelectLabel>Europe & Africa</SelectLabel>
                            <SelectItem value="gmt">Greenwich Mean Time (GMT)</SelectItem>
                            <SelectItem value="cet">Central European Time (CET)</SelectItem>
                            <SelectItem value="eet">Eastern European Time (EET)</SelectItem>
                            <SelectItem value="west">
                                Western European Summer Time (WEST)
                            </SelectItem>
                            <SelectItem value="cat">Central Africa Time (CAT)</SelectItem>
                            <SelectItem value="eat">East Africa Time (EAT)</SelectItem>
                        </SelectGroup>
                        <SelectGroup>
                            <SelectLabel>Asia</SelectLabel>
                            <SelectItem value="msk">Moscow Time (MSK)</SelectItem>
                            <SelectItem value="ist">India Standard Time (IST)</SelectItem>
                            <SelectItem value="cst_china">China Standard Time (CST)</SelectItem>
                            <SelectItem value="jst">Japan Standard Time (JST)</SelectItem>
                            <SelectItem value="kst">Korea Standard Time (KST)</SelectItem>
                            <SelectItem value="ist_indonesia">
                                Indonesia Central Standard Time (WITA)
                            </SelectItem>
                        </SelectGroup>
                        <SelectGroup>
                            <SelectLabel>Australia & Pacific</SelectLabel>
                            <SelectItem value="awst">
                                Australian Western Standard Time (AWST)
                            </SelectItem>
                            <SelectItem value="acst">
                                Australian Central Standard Time (ACST)
                            </SelectItem>
                            <SelectItem value="aest">
                                Australian Eastern Standard Time (AEST)
                            </SelectItem>
                            <SelectItem value="nzst">New Zealand Standard Time (NZST)</SelectItem>
                            <SelectItem value="fjt">Fiji Time (FJT)</SelectItem>
                        </SelectGroup>
                        <SelectGroup>
                            <SelectLabel>South America</SelectLabel>
                            <SelectItem value="art">Argentina Time (ART)</SelectItem>
                            <SelectItem value="bot">Bolivia Time (BOT)</SelectItem>
                            <SelectItem value="brt">Brasilia Time (BRT)</SelectItem>
                            <SelectItem value="clt">Chile Standard Time (CLT)</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
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
