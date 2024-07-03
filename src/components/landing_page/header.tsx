import React from 'react'
import Link from 'next/link'
import { Button } from '../ui/button'
import Image from 'next/image'

function Header() {
  return (
    <nav className='w-screen flex justify-between items-center px-6 md:px-24 py-5'>
      <Link href={"/"}>
        <Image height={100} width={100} src="/logo/jobHQ_logo.svg" alt="" />
      </Link>
      <div className="flex gap-x-5">
        <Link href={""}>
          <h6 className='text-white text-sm font-semibold'>Resources</h6>
        </Link>
        <Link href={""}>
          <h6 className='text-white text-sm font-semibold'>Pricing</h6>
        </Link>
      </div>
      <div className="flex gap-x-3">
        <Button variant={'ghost'} asChild>
          <Link href="/login" className='text-white text-sm font-semibold'>Sign In</Link>
        </Button>
        <Button variant={'outline'} size={'sm'}>
          <Link href="/login"> Create Account</Link>
        </Button>
      </div>
    </nav>
  )
}

export default Header