'use client'
import { useRouter } from 'next/navigation';
import React from 'react'
import { IoIosArrowBack } from 'react-icons/io';

type Props = {}

const GoBack = (props: Props) => {
    const router = useRouter();

    // Function to handle going back
    const handleGoBack = () => {
        router.back(); // Navigate to the previous page in the history
    };
  return (
      <button onClick={handleGoBack} className="flex items-center text-gray-600 hover:text-blue-primary">
          <IoIosArrowBack className="text-2xl" />
          <span className="ml-2">Back</span>
      </button>
  )
}

export default GoBack