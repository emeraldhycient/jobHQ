import { Button } from '@/components/ui/button';
import { FC } from 'react';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import Image from 'next/image';
import Link from 'next/link';
import { IoArrowForwardCircleOutline } from "react-icons/io5";


interface Job {
    id: number;
    title: string;
    location: string;
    dateApplied: string;
    status: string;
}

interface RecentlyAppliedProps {
    jobs: Job[];
}

const appliedJobs = [
    {
        id: "INV001",
        date: "July 2nd, 2024",
        status: "Applied",
        location: "Credit Card",
    },
    {
        id: "INV002",
        date: "Pending",
        status: "Applied",
        location: "PayPal",
    },
    {
        id: "INV003",
        date: "July 2nd, 2024",
        status: "Applied",
        location: "Bank Transfer",
    },
    {
        id: "INV004",
        date: "July 2nd, 2024",
        status: "Applied",
        location: "Credit Card",
    },
    {
        id: "INV005",
        date: "July 2nd, 2024",
        status: "Applied",
        location: "PayPal",
    },
    {
        id: "INV006",
        date: "July 2nd, 2024",
        status: "Applied",
        location: "Bank Transfer",
    },
    {
        id: "INV007",
        date: "UnJuly 2nd, 2024",
        status: "Applied",
        location: "Credit Card",
    },
]

const RecentlyApplied: FC<RecentlyAppliedProps> = ({ jobs }) => {
    return (
        <>
            {/* smaller screens  */}

            <section className='block lg:hidden w-full'>
                <section className='text-gray-1 flex items-center justify-between mb-5'>
                    <h5 className='text-sm font-normal'>Recently Applied</h5>
                    <Link href={"/dashboard/seeker/applied"}>
                        <h6 className='text-xs font-normal'>View all</h6>
                    </Link>
                </section>
                <section className='w-full'>
                    {appliedJobs.map((job, index) => (
                        <Link href={"/dashboard/seeker/job/details/20000"}
                            key={index}
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
                                            <h6 className="border-none text-xs font-normal">{job.status}</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="border-none text-center">
                                <span className='block lg:hidden'><IoArrowForwardCircleOutline /></span>
                            </div>
                        </Link>
                    ))}
                </section>
            </section>

            {/* larger screens  */}
            <Table className="hidden lg:table border-collapse border-none">
                <TableHeader className="border-none">
                    <TableRow className="border-none w-full">
                        <TableCell colSpan={12} className="border-none px-4 py-2">
                            <section className='text-gray-1 flex items-center justify-between mb-5'>
                                <h5 className='text-sm font-normal'>Recently Applied</h5>
                                <Link href={"/dashboard/seeker/applied"}>
                                    <h6 className='text-xs font-normal'>View all</h6>
                                </Link>
                            </section>
                        </TableCell>
                    </TableRow>
                    <TableRow className="border-none">
                        <TableHead colSpan={2} className="text-xs font-normal border-none">Job</TableHead>
                        <TableHead className="text-xs font-normal border-none">Date Applied</TableHead>
                        <TableHead className="text-xs font-normal border-none">Status</TableHead>
                        <TableHead className="text-xs font-normal border-none text-center">Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody className="border-none">
                    {appliedJobs.map((job, index) => (
                        <TableRow
                            key={index}
                            className={`border-b-8 border-gray-5 bg-gray-7 text-gray-1 rounded-[20px] my-4`}
                        >
                            <TableCell colSpan={2} className="border-none">
                                <div className="flex space-x-3">
                                    <Image src="/images/Image.png" height={35} width={35} className='rounded-lg' alt='company logo' />
                                    <div className="space-y-1">
                                        <h4 className='text-sm font-medium'>Product Designer</h4>
                                        <div className="flex items-center space-x-2">
                                            <h6 className='font-normal text-xs'>Remote</h6>
                                            <div className="flex items-center space-x-2">
                                                <div className="h-1 w-1 bg-gray-3 rounded-full"></div>
                                                <h6 className='font-normal text-xs'>Lagos, Nigeria</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </TableCell>
                            <TableCell className="border-none text-xs font-normal">{job.date}</TableCell>
                            <TableCell className="border-none text-xs font-normal">{job.status}</TableCell>
                            <TableCell className="border-none text-center">
                                <Link href={"/dashboard/seeker/job/details/20000"}>
                                    <Button variant={'lucentblue'} size={'sm'}>View Application</Button>
                                </Link>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </>
    )
}

export default RecentlyApplied
