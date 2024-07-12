// components/TopNav.tsx

'use client';
import { FC } from 'react';
import { Disclosure } from '@headlessui/react';
import { MdMenu, MdClose, MdNotifications, MdSettings } from 'react-icons/md';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { sidebarItems } from '@/constants/data';
import CallIconCircle from '@/components/icons/CallIcon';
import NotificationCicleIcon from '@/components/icons/NotificationCicleIcon';

const TopNav: FC = () => {
    const pathname = usePathname();
    const isActive = (path: string) => pathname === (path);

    return (
        <Disclosure as="nav" className="bg-gray-2 text-gray-1">
            {({ open }) => (
                <>
                    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                        <div className="relative flex items-center justify-between h-16">
                            <div className="flex items-center space-x-3">
                                <div className="flex-shrink-0 md:hidden">
                                    <Image
                                        src="/images/testimony.png"
                                        alt="Profile Picture"
                                        width={30}
                                        height={30}
                                        className="rounded-full h-[30px] w-[30px]"
                                    />
                                </div>
                                <div>
                                    <h1 className="text-base md:text-lg font-bold">Hello, Jessica 👋🏾</h1>
                                    <p className="text-xs font-normal text-gray-4">Welcome back to JobHQ</p>
                                </div>
                            </div>
                            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 space-x-4">
                                <button className="text-xl">
                                    <CallIconCircle />
                                </button>
                                <button className="text-xl">
                                    <NotificationCicleIcon />
                                </button>
                                <div className="hidden md:flex items-center space-x-3">
                                    <div className="flex-shrink-0">
                                        <Image
                                            src="/images/testimony.png"
                                            alt="Profile Picture"
                                            width={30}
                                            height={30}
                                            className="rounded-full h-[30px] w-[30px]"
                                        />
                                    </div>
                                    <Link href="/my-account" className="flex flex-col items-left">
                                        <span className="text-xs">Jessica</span>
                                        <span className="text-blue-500 text-xs">My Account</span>
                                    </Link>
                                </div>
                                <Disclosure.Button className="inline-flex md:hidden items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <MdClose className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <MdMenu className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="pt-2 space-y-1">
                            {sidebarItems.map((item, index) => (
                                <Disclosure.Button
                                    key={index}
                                    as="a"
                                    href={item.path}
                                    className={`flex items-center space-x-2 px-5 py-2 rounded-md text-base font-medium ${isActive(item.path) ? 'bg-gray-700 text-white' : 'text-gray-400 hover:text-white hover:bg-gray-700'}`}
                                >
                                    <span className={`${isActive(item?.path) ? "animate-pulse" : ""} mr-3`}>
                                        <item.icon height={16} width={16} />
                                    </span>
                                    <span className='text-xs font-normal'>
                                        {item.label}
                                    </span>
                                </Disclosure.Button>
                            ))}
                            <div className="flex items-center space-x-3 px-5 py-5 rounded-md bg-gray-900">
                                <div className="flex-shrink-0">
                                    <Image
                                        src="/images/testimony.png"
                                        alt="Profile Picture"
                                        width={30}
                                        height={30}
                                        className="rounded-full h-[30px] w-[30px]"
                                    />
                                </div>
                                <div className="flex flex-col items-left">
                                    <span className="text-xs">Jessica</span>
                                    <Link href="/my-account" className="text-blue-500 text-xs">My Account</Link>
                                </div>
                            </div>
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    );
};

export default TopNav;
