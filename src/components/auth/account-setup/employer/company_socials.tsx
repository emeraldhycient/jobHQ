"use client";
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { nextStepChildProps } from '@/constants/interface';
import CircledCancelIcon from '@/components/icons/CircledCancelIcon';
import { FaInstagram, FaLink, FaLinkedin, FaTwitter } from 'react-icons/fa';

const CompanySocialInformation: React.FC<nextStepChildProps> = ({ nextStep, index, isCurrentStep, isCompleted }) => {
    const [organizationType, setOrganizationType] = useState('');
    const [industryType, setIndustryType] = useState('');
    const [teamSize, setTeamSize] = useState('');


    return (
        <div className="w-full max-w-md mx-auto mt-10 mb-10">
            <h4 className="text-lg font-medium text-center px-4 md:px-0 mb-5">Social Media Handles</h4>

            <div className="mb-8 space-y-4">
                <Input
                    value={organizationType}
                    onChange={(e) => setOrganizationType(e.target.value)}
                    placeholder="Linkedin"
                    leftIcon={FaLinkedin}
                    rightIcon={
                        CircledCancelIcon as any
                    }
                />
                <Input
                    value={industryType}
                    onChange={(e) => setIndustryType(e.target.value)}
                    placeholder="Website"
                    leftIcon={FaLink}
                    rightIcon={
                        CircledCancelIcon as any
                    }
                />
                <Input
                    value={teamSize}
                    onChange={(e) => setTeamSize(e.target.value)}
                    placeholder="Instagram"
                    leftIcon={FaInstagram}
                    rightIcon={
                        CircledCancelIcon as any
                    }
                />
                <Input
                    value={teamSize}
                    onChange={(e) => setTeamSize(e.target.value)}
                    placeholder="Twitter"
                    leftIcon={FaTwitter}
                    rightIcon={
                        CircledCancelIcon as any
                    }
                />

            </div>

            <Button variant={'default'} size={'lg'} asChild onClick={nextStep}>
                <p className='block w-full text-center px-3 py-2 rounded-md text-base font-medium text-white bg-blue-600 hover:bg-blue-700'>
                    Continue
                </p>
            </Button>
        </div>
    );
};

export default CompanySocialInformation;
