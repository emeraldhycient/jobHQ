import Link from 'next/link';
import { Skeleton } from "@/components/ui/skeleton"; 

export default function JobItemSkeleton() {
    return (
        <Link
            href="#"
            className={`border-b-8 border-gray-5 bg-gray-7 text-gray-1 rounded my-2 flex justify-between items-center p-4`}
        >
            <div className="flex space-x-3">
                <Skeleton className="w-9 h-9 rounded-full" />
                <div className="space-y-1">
                    <div className="flex space-x-2 items-center">
                        <Skeleton className="w-24 h-5" />
                        <div className="h-1 w-1 bg-gray-300 rounded-full"></div>
                        <Skeleton className="w-24 h-5" />
                    </div>
                    <div className="flex items-center space-x-2">
                        <Skeleton className="w-20 h-4" />
                        <div className="flex items-center space-x-2">
                            <div className="h-1 w-1 bg-gray-300 rounded-full"></div>
                            <Skeleton className="w-28 h-4" />
                            <div className="h-1 w-1 bg-gray-300 rounded-full block md:hidden"></div>
                            <Skeleton className="w-16 h-4 block md:hidden" />
                        </div>
                    </div>
                </div>
            </div>
            <Skeleton className="w-24 h-4 hidden md:block" />
            <Skeleton className="w-20 h-4 hidden md:block" />
            <div className="border-none text-center md:hidden">
                <Skeleton className="w-6 h-6 rounded-full" />
            </div>
            <div className="hidden md:block">
                <Skeleton className="w-30 h-8" />
            </div>
        </Link>
    );
}
