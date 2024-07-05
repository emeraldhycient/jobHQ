import Header from '@/components/auth/header'
import React from 'react'
import { Button } from '@/components/ui/button';
import { MdCheckCircle } from 'react-icons/md';
import Link from 'next/link';

function page() {
    return (
        <section className='px-2 md:px-24 text-gray-1'>
            <Header />
            <div className="w-[95%] md:w-[50%] mx-auto space-y-5 mt-10">
                <div className="flex flex-col items-center justify-center min-h-[70vh] bg-black text-white">
                    <MdCheckCircle className="text-8xl mb-6" />
                    <h4 className="text-lg font-medium mb-4 text-center">Congratulations, your profile is 100% complete!</h4>
                    <p className="text-xs font-normal text-center mb-8">
                        Welcome to JobHQ! Your account has been successfully created.
                        Start exploring job opportunities and take the first step towards
                        your dream career. Good luck!
                    </p>
                    <div className="flex space-x-4">
                        <Button variant="default" size="lg" asChild>
                            <Link href="/dashboard">
                                <p className="block w-full text-center px-4 py-2 rounded-md text-base font-medium text-black bg-gray-300 hover:bg-gray-400">
                                    View Dashboard
                                </p>
                            </Link>
                        </Button>
                        <Button variant="default" size="lg" asChild>
                            <Link href="/jobs">
                                <p className="block w-full text-center px-4 py-2 rounded-md text-base font-medium text-white bg-blue-500 hover:bg-blue-600">
                                    View Job
                                </p>
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default page
