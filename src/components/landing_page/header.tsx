'use client';
import React from 'react';
import Link from 'next/link';
import { Button } from '../ui/button';
import Image from 'next/image';
import { Disclosure } from '@headlessui/react';
import { HiOutlineMenu, HiX } from 'react-icons/hi';

const Header: React.FC = () => {
  return (
    <Disclosure as="nav" className="">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <Link href="/">
                  <Image height={100} width={100} src="/logo/jobHQ_logo.svg" alt="JobHQ Logo" />
                </Link>
              </div>
              <div className="hidden md:flex space-x-4">
                <Link href="/resources">
                  <h6 className="text-white text-sm font-semibold">Resources</h6>
                </Link>
                <Link href="/pricing">
                  <h6 className="text-white text-sm font-semibold">Pricing</h6>
                </Link>
              </div>
              <div className="hidden md:flex items-center space-x-3">
                <Button variant="ghost" asChild>
                  <Link href="/auth/login" className="text-white text-sm font-semibold">
                    Sign In
                  </Link>
                </Button>
                <Link
                  href="/auth/create-account"
                  className="relative inline-flex h-10 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                >
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                    Get Started
                  </span>
                </Link>
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
                <h6 className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700">Sign In</h6>
              </Link>
              <Link
                href="/auth/create-account"
                className="relative inline-flex h-10 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
              >
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                  Get Started
                </span>
              </Link>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Header;
