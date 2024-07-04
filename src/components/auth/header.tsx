'use client'
import Image from 'next/image'
import Link from 'next/link'
import { IoIosArrowBack } from 'react-icons/io'; 
import { useRouter } from 'next/navigation'

function Header() {
    const router = useRouter(); 

    // Function to handle going back
    const handleGoBack = () => {
        router.back(); // Navigate to the previous page in the history
    };

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
            <div className="flex items-center justify-between h-16">
                <div className="flex items-center">
                    <Link href={"/"}>
                            <Image height={100} width={100} src="/logo/jobHQ_logo.svg" alt="JobHQ Logo" priority />
                    </Link>
                </div>
                <div>
                    <button onClick={handleGoBack} className="flex items-center text-gray-600 hover:text-blue-primary">
                        <IoIosArrowBack className="text-2xl" />
                        <span className="ml-2">Back</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Header
