import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { IoArrowForwardCircleOutline } from 'react-icons/io5'

type Props = {}

const AppliedCard = (props: Props) => {
    return (
        <Link href={"/dashboard/seeker/applied/1234"}
            className={`border-b-8 border-gray-5 bg-gray-7 text-gray-1 rounded my-2 flex justify-between items-center p-4`}
        >
            <div className="flex space-x-3">
                <Image src="/images/Image.png" height={35} width={35} className='rounded-lg' alt='company logo' />
                <div className="space-y-1">
                    <div className="flex space-x-2 items-center">
                        <h4 className='text-sm font-medium'>Product Designer</h4>
                        <div className="h-1 w-1 bg-gray-3 rounded-full"></div>
                        <h4 className='text-sm font-medium'>Twitter</h4>
                    </div>
                    <div className="flex items-center space-x-2">
                        <h6 className='font-normal text-xs'>Remote</h6>
                        <div className="flex items-center space-x-2">
                            <div className="h-1 w-1 bg-gray-3 rounded-full"></div>
                            <h6 className='font-normal text-xs'>Lagos, Nigeria</h6>
                            <div className="h-1 w-1 bg-gray-3 rounded-full block md:hidden"></div>
                            <h6 className="border-none text-xs font-normal block md:hidden">Applied</h6>
                        </div>
                    </div>
                </div>
            </div>
            <h6 className="border-none text-xs font-normal hidden md:block">July 2nd, 2024</h6>
            <h6 className="border-none text-xs font-normal hidden md:block">Applied</h6>
            <div className="border-none text-center md:hidden">
                <span className='block lg:hidden'><IoArrowForwardCircleOutline /></span>
            </div>
            <Link href={"/dashboard/seeker/applied/1234"} className='hidden md:block'>
                <Button variant={'lucentblue'} size={'sm'}>View Application</Button>
            </Link>
        </Link>
    )
}

export default AppliedCard