import React from 'react'
import Link from 'next/link'
import { Button } from '../ui/button'
import Image from 'next/image'
import Footer_fragment from './module/footer_fragment'
function Footer() {
    return (
        <footer className='px-6 md:px-24 text-white pt-6 pb-10 mt-10'>
            <div className="block lg:hidden mb-7">
                <Link href={"/"}>
                    <Image height={100} width={100} src="/logo/jobHQ_logo.svg" alt="" />
                </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-8 lg:gap-4">
                <div className="hidden lg:flex  flex-col justify-center items-center">
                    <Link href={"/"}>
                        <Image height={100} width={100} src="/logo/jobHQ_logo.svg" alt="" />
                    </Link>
                </div>
                <div className="">
                    <h6 className='font-normal text-base mb-5 text-gray-1'>Employer</h6>
                    <ul className='space-y-3 text-gray-3'>
                        <li>
                            <Link href={""} className='font-normal text-sm'>Add Jobs</Link>
                        </li>
                        <li>
                            <Link href={""} className='font-normal text-sm'>Manage Listing</Link>
                        </li>
                        <li>
                            <Link href={""} className='font-normal text-sm'>Recruitment Analytics</Link>
                        </li>
                        <li>
                            <Link href={""} className='font-normal text-sm'>Employer Dashboard</Link>
                        </li>
                    </ul>
                </div>
                <div className="">
                    <h6 className='font-normal text-base mb-5 text-gray-1'>Job Seeker</h6>
                    <ul className='space-y-3 text-gray-3'>
                        <li>
                            <Link href={""} className='font-normal text-sm'>Browse Jobs</Link>
                        </li>
                        <li>
                            <Link href={""} className='font-normal text-sm'>Browse Categories</Link>
                        </li>
                        <li>
                            <Link href={""} className='font-normal text-sm'>Resume Upload</Link>
                        </li>
                        <li>
                            <Link href={""} className='font-normal text-sm'>Candidate dashboard</Link>
                        </li>
                    </ul>
                </div>
                <div className="">
                    <h6 className='font-normal text-base mb-5 text-gray-1'>Resources</h6>
                    <ul className='space-y-3 text-gray-3'>
                        <li>
                            <Link href={""} className='font-normal text-sm'>Learning Path</Link>
                        </li>
                        <li>
                            <Link href={""} className='font-normal text-sm'>Knowledge base</Link>
                        </li>
                        <li>
                            <Link href={""} className='font-normal text-sm'>Contact Support</Link>
                        </li>
                        <li>
                            <Link href={""} className='font-normal text-sm'>Help Center</Link>
                        </li>
                    </ul>
                </div>
                <div className="">
                    <h6 className='font-normal text-base mb-5 text-gray-1'>Company</h6>
                    <ul className='space-y-3 text-gray-3'>
                        <li>
                            <Link href={""} className='font-normal text-sm'>About</Link>
                        </li>
                        <li>
                            <Link href={""} className='font-normal text-sm'>Contact</Link>
                        </li>
                        <li>
                            <Link href={""} className='font-normal text-sm'>Recruitment Analytics</Link>
                        </li>
                        <li>
                            <Link href={""} className='font-normal text-sm'>Privacy Policy</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <Footer_fragment/>
        </footer>
    )
}

export default Footer
