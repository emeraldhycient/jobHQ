import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Footer_fragment from './module/footer_fragment'
import { footerSections } from '@/constants/data'

function Footer() {
    return (
        <footer className='px-6 md:px-24 text-white pt-6 pb-10 mt-10'>
            <div className="block lg:hidden mb-7">
                <Link href={"/"}>
                    <Image height={100} width={100} src="/logo/jobHQ_logo.svg" alt="JobHQ Logo" />
                </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-8 lg:gap-4">
                <div className="hidden lg:flex flex-col justify-center items-center">
                    <Link href={"/"}>
                        <Image height={100} width={100} src="/logo/jobHQ_logo.svg" alt="JobHQ Logo" />
                    </Link>
                </div>
                {footerSections.map((section, index) => (
                    <div key={index}>
                        <h6 className='font-normal text-base mb-5 text-gray-1'>{section.title}</h6>
                        <ul className='space-y-3 text-gray-3'>
                            {section.links.map((link, idx) => (
                                <li key={idx}>
                                    <Link href={link.href} className='font-normal text-sm'>{link.text}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
            <Footer_fragment />
        </footer>
    )
}

export default Footer
