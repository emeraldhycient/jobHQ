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
    const isActive = (path: string) => pathname.includes(path);

    return (
        <Disclosure as="nav" className="bg-gray-2 text-gray-1">
            {({ open }) => (
                <>
                    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                        <div className="relative flex items-center justify-between h-16">
                            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                                <div className="flex-shrink-0 md:hidden">
                                    <Image
                                        src="/images/testimony.png"
                                        alt="Profile Picture"
                                        width={30}
                                        height={30}
                                        className="rounded-full h-[30px] w-[30px]"
                                    />
                                </div>
                                <div className="ml-4">
                                    <h1 className="text-base md:text-lg font-bold">Hello, Jessica 👋🏾</h1>
                                    <p className="text-xs font-normal text-gray-4">Welcome back to JobHQ dashboard</p>
                                </div>
                            </div>
                            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                <button className="text-xl">
                                    <CallIconCircle />
                                </button>
                                <button className="text-xl ml-4">
                                    <NotificationCicleIcon />
                                </button>
                                <div className="hidden md:flex items-center ml-4 space-x-3">
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
                                        <a className="text-blue-500 text-xs">My Account</a>
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
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            {sidebarItems.map((item, index) => (
                                <Disclosure.Button
                                    key={index}
                                    as="a"
                                    href={item.path}
                                    className={`block px-3 py-2 rounded-md text-base font-medium ${isActive(item.path) ? 'bg-gray-700 text-white' : 'text-gray-400 hover:text-white hover:bg-gray-700'}`}
                                >
                                    <item.icon className="h-6 w-6 inline-block mr-2" />
                                    {item.label}
                                </Disclosure.Button>
                            ))}
                            <div className="flex items-center mt-4 space-x-3 px-3 py-2 rounded-md bg-gray-900">
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
