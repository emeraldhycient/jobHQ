import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { IoArrowForwardCircleOutline } from 'react-icons/io5'

type Props = {}

const jobCard = (props: Props) => {
  return (
      <Link href={"/dashboard/seeker/applied/1234"}
          key={1}
          className={`border-b-8 border-gray-5 bg-gray-7 text-gray-1 rounded my-4 flex justify-between items-center p-4`}
      >
          <div className="flex space-x-3">
              <Image src="/images/Image.png" height={35} width={35} className='rounded-lg' alt='company logo' />
              <div className="space-y-1">
                  <h4 className='text-sm font-medium'>Product Designer</h4>
                  <div className="flex items-center space-x-2">
                      <h6 className='font-normal text-xs'>Remote</h6>
                      <div className="flex items-center space-x-2">
                          <div className="h-1 w-1 bg-gray-3 rounded-full"></div>
                          <h6 className='font-normal text-xs'>Lagos, Nigeria</h6>
                          <div className="h-1 w-1 bg-gray-3 rounded-full"></div>
                          <h6 className="border-none text-xs font-normal">Posted 1 month ago</h6>
                      </div>
                  </div>
              </div>
          </div>
          <div className="border-none text-center">
              <Link href={"/dashboard/seeker/applied/1234"} className='hidden lg:block'>
                  <Button variant={'lucentblue'} size={'sm'}>Apply Now</Button>
              </Link>
              <span className='block lg:hidden'><IoArrowForwardCircleOutline /></span>
          </div>
      </Link>
  )
}

export default jobCard