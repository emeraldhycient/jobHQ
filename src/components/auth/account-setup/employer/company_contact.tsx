"use client";
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { nextStepChildProps } from '@/constants/interface';
import { FaEnvelope,FaPhone } from 'react-icons/fa';
import { FaLocationPin } from 'react-icons/fa6';
import { useRouter } from 'next/navigation'

const CompanyContactInformation: React.FC<nextStepChildProps> = ({ nextStep, index, isCurrentStep, isCompleted }) => {
    const [organizationType, setOrganizationType] = useState('');
    const [industryType, setIndustryType] = useState('');
    const [teamSize, setTeamSize] = useState('');

    const router = useRouter()

    const changePage = () => {
        nextStep()
        router.push('/account-setup/job-seeker/complete')
    }

    return (
        <div className="w-full max-w-md mx-auto mt-10 mb-10">
            <h4 className="text-lg font-medium text-center px-4 md:px-0 mb-5">Contact Information</h4>

            <div className="mb-8 space-y-4">
                <Input
                    type='text'
                    value={organizationType}
                    onChange={(e) => setOrganizationType(e.target.value)}
                    placeholder="Company Location"
                    leftIcon={FaLocationPin}
                   
                />
                <Input
                    value={industryType}
                    type='tel'
                    onChange={(e) => setIndustryType(e.target.value)}
                    placeholder="Phone Number"
                    leftIcon={FaPhone}
                    
                />
                <Input
                    value={teamSize}
                    onChange={(e) => setTeamSize(e.target.value)}
                    type='email'
                    placeholder="Email Address"
                    leftIcon={FaEnvelope}
                   
                />
            
            </div>

            <Button variant={'default'} size={'lg'} asChild onClick={changePage}>
                <p className='block w-full text-center px-3 py-2 rounded-md text-base font-medium text-white bg-blue-600 hover:bg-blue-700'>
                    Continue
                </p>
            </Button>
        </div>
    );
};

export default CompanyContactInformation;
