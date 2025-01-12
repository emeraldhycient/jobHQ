// components/Sidebar.tsx

'use client'
import { sidebarItems } from '@/constants/data';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FC } from 'react';

const Sidebar: FC = () => {
    const pathname = usePathname();
    const isActive = (path: string) => pathname.includes(path);

    return (
        <aside className="md:flex flex-col h-full bg-gray-2 text-gray-1 hidden">
            <div className="flex items-center p-4">
                <Link href={"/"}>
                    <Image height={100} width={100} className='h-[50px]' src="/logo/jobHQ_logo.svg" alt="JobHQ Logo" />
                </Link>
            </div>
            <nav className="flex-1">
                <ul className="space-y-2 px-4">
                    {sidebarItems.map((item, index) => (
                        <li key={index}>
                            <Link href={item.path}>
                                <span className={`flex items-center p-2 rounded ${isActive(item.path) ? 'bg-gray-700' : ''}`}>
                                    <item.icon className="h-3 w-3" />
                                    <span className="ml-3 text-xs font-normal">{item.label}</span>
                                </span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
            <footer className="p-4">
                <p className="text-xs font-normal">Want to get more info about JobHQ? <Link href="/contact" className="text-blue-500">Contact Us</Link></p>
            </footer>
        </aside>
    );
};

export default Sidebar;
