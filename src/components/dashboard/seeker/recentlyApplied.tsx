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
import { AppliedJobItem } from '@/constants/interface';
import { Skeleton } from "@/components/ui/skeleton";
import SkeletonLoader from '@/components/common/skeleton/JobSkeletonLoader';
import { utils } from '@/lib/utils';
import moment from 'moment';
interface Props {
    jobs: AppliedJobItem[];
    isLoading: boolean;
}

const RecentlyApplied: FC<Props> = ({ jobs, isLoading }) => {

    // const timeAgo = moment(job.createdAt).fromNow();


    return (
        <>
            {/* smaller screens */}
            <section className='block lg:hidden w-full'>
                <section className='text-gray-1 flex items-center justify-between mb-5'>
                    <h5 className='text-sm font-normal'>Recently Applied</h5>
                    <Link href={"/dashboard/seeker/applied"}>
                        <h6 className='text-xs font-normal'>View all</h6>
                    </Link>
                </section>
                <section className='w-full'>
                    {isLoading
                        ? <SkeletonLoader count={5} />
                        : jobs.map((job, index) => (
                            <Link
                                href={`/dashboard/seeker/jobs/details/${job.job.id}`}
                                key={index}
                                className={`border-b-8 border-gray-5 bg-gray-7 text-gray-1 rounded my-4 flex justify-between items-center p-4`}
                            >
                                <div className="flex space-x-3">
                                    <Image
                                        src={job.job.postedBy.logo || "/images/default-logo.png"}
                                        height={35}
                                        width={35}
                                        className="rounded-lg"
                                        alt='company logo'
                                    />
                                    <div className="space-y-1">
                                        <h4 className='text-sm font-medium'>{job.job.title}</h4>
                                        <div className="flex items-center space-x-2">
                                            <h6 className='font-normal text-xs'>{utils.formatText(job.job.type)}</h6>
                                            <div className="flex items-center space-x-2">
                                                <div className="h-1 w-1 bg-gray-3 rounded-full hidden  md:block"></div>
                                                <h6 className='font-normal text-xs hidden  md:block'>{job.job.location}</h6>
                                                <div className="h-1 w-1 bg-gray-3 rounded-full"></div>
                                                <h6 className="border-none text-xs font-normal">{utils.formatText(job.status)}</h6>
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

            {/* larger screens */}
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
                    {isLoading
                        ? new Array(5).fill(0).map((_, index) => (
                            <TableRow key={index} className="border-b-8 border-gray-5 bg-gray-7 text-gray-1 rounded-[20px] my-4">
                                <TableCell colSpan={2} className="border-none">
                                    <div className="flex space-x-3">
                                        <Skeleton className="h-[35px] w-[35px] rounded-lg" />
                                        <div className="space-y-1">
                                            <Skeleton className="h-[20px] w-[150px]" />
                                            <Skeleton className="h-[15px] w-[200px]" />
                                        </div>
                                    </div>
                                </TableCell>
                                <TableCell className="border-none">
                                    <Skeleton className="h-[15px] w-[100px]" />
                                </TableCell>
                                <TableCell className="border-none">
                                    <Skeleton className="h-[15px] w-[100px]" />
                                </TableCell>
                                <TableCell className="border-none text-center">
                                    <Skeleton className="h-[30px] w-[120px]" />
                                </TableCell>
                            </TableRow>
                        ))
                        : jobs.map((job, index) => (
                            <TableRow
                                key={index}
                                className={`border-b-8 border-gray-5 bg-gray-7 text-gray-1 rounded-[20px] my-4`}
                            >
                                <TableCell colSpan={2} className="border-none">
                                    <div className="flex space-x-3">
                                        <Image
                                            src={job.job.postedBy.logo || "/images/default-logo.png"}
                                            height={35}
                                            width={35}
                                            className='rounded-lg'
                                            alt='company logo'
                                        />
                                        <div className="space-y-1">
                                            <h4 className='text-sm font-medium'>{job.job.title}</h4>
                                            <div className="flex items-center space-x-2">
                                                <h6 className='font-normal text-xs'>{utils.formatText(job?.job?.type)}</h6>
                                                <div className="flex items-center space-x-2">
                                                    <div className="h-1 w-1 bg-gray-3 rounded-full"></div>
                                                    <h6 className='font-normal text-xs'>{job.job.location}</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </TableCell>
                                <TableCell className="border-none text-xs font-normal">
                                    {moment(job.dateApplied).fromNow()}
                                </TableCell>
                                <TableCell className="border-none text-xs font-normal">{utils.formatText(job.status)}</TableCell>
                                <TableCell className="border-none text-center">
                                    <Link href={`/dashboard/seeker/jobs/details/${job.job.id}`}>
                                        <Button variant={'lucentblue'} size={'sm'}>
                                            View Application
                                        </Button>
                                    </Link>
                                </TableCell>
                            </TableRow>
                        ))}
                </TableBody>
            </Table>
        </>
    );
}

export default RecentlyApplied;
