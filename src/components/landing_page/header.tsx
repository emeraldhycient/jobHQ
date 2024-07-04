import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '../ui/button';
import Image from 'next/image';
import { Disclosure } from '@headlessui/react';
import { HiOutlineMenu, HiX } from 'react-icons/hi';

function Header() {
  return (
    <Disclosure as="nav" className="">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <Link href={"/"}>
                  <Image height={100} width={100} src="/logo/jobHQ_logo.svg" alt="JobHQ Logo" />
                </Link>
              </div>
              <div className="hidden md:flex space-x-4">
                <Link href={""}>
                  <h6 className='text-white text-sm font-semibold'>Resources</h6>
                </Link>
                <Link href={""}>
                  <h6 className='text-white text-sm font-semibold'>Pricing</h6>
                </Link>
              </div>
              <div className="hidden md:flex items-center space-x-3">
                <Button variant={'ghost'} asChild>
                  <Link href="/auth/login" className='text-white text-sm font-semibold'>Sign In</Link>
                </Button>
                <Button variant={'outline'} size={'lg'}>
                  <Link href="/auth/create-account">Create Account</Link>
                </Button>
              </div>
              <div className="flex md:hidden">
                <Disclosure.Button className="text-gray-400 hover:text-white focus:outline-none focus:text-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? <HiX className="block h-6 w-6" aria-hidden="true" /> : <HiOutlineMenu className="block h-6 w-6" aria-hidden="true" />}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link href="/resources">
                <h6 className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700">Resources</h6>
              </Link>
              <Link href="/pricing">
                <h6 className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700">Pricing</h6>
              </Link>
            </div>
            <div className="px-2 pt-2 pb-3">
              <Link href="/auth/login">
                <h6 className='block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700'>Sign In</h6>
              </Link>
              <Link href="/auth/create-account">
                <h6 className='block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700'>Create Account</h6>
              </Link>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

export default Header;
