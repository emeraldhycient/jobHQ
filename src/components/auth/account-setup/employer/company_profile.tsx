"use client";
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { nextStepChildProps } from '@/constants/interface';
import { industryTypes, organizationTypes, teamSizes } from '@/constants/data';


const CompanyProfileInformation: React.FC<nextStepChildProps> = ({ nextStep, index, isCurrentStep, isCompleted }) => {
    const [organizationType, setOrganizationType] = useState('');
    const [industryType, setIndustryType] = useState('');
    const [teamSize, setTeamSize] = useState('');
    const [yearOfEstablishment, setYearOfEstablishment] = useState('');
    const [benefits, setBenefits] = useState('');
    const [vision, setVision] = useState('');

    return (
        <div className="w-full max-w-md mx-auto mt-10 mb-10">
            <h4 className="text-lg font-medium text-center px-4 md:px-0 mb-5">Profile Information</h4>

            <div className="mb-8 space-y-4">
                <Input
                    list="organizationTypes"
                    id="organizationType"
                    value={organizationType}
                    onChange={(e) => setOrganizationType(e.target.value)}
                    placeholder="Organization Type"
                />
                <datalist id="organizationTypes">
                    {organizationTypes.map((type, index) => (
                        <option key={index} value={type} />
                    ))}
                </datalist>

                <Input
                    list="industryTypes"
                    id="industryType"
                    value={industryType}
                    onChange={(e) => setIndustryType(e.target.value)}
                    placeholder="Industry Type"
                />
                <datalist id="industryTypes">
                    {industryTypes.map((type, index) => (
                        <option key={index} value={type} />
                    ))}
                </datalist>

                <Input
                    list="teamSizes"
                    id="teamSize"
                    value={teamSize}
                    onChange={(e) => setTeamSize(e.target.value)}
                    placeholder="Team Size"
                />
                <datalist id="teamSizes">
                    {teamSizes.map((size, index) => (
                        <option key={index} value={size} />
                    ))}
                </datalist>
                <div className="mt-3 space-y-2">
                    <Label htmlFor="yearOfEstablishment">Year of Establishment</Label>
                    <Input
                        type="date"
                        id="yearOfEstablishment"
                        value={yearOfEstablishment}
                        onChange={(e) => setYearOfEstablishment(e.target.value)}
                    />
                </div>
                <Textarea
                    id="benefits"
                    value={benefits}
                    onChange={(e) => setBenefits(e.target.value)}
                    rows={6}
                    placeholder='Tell us the benefits of joining your firm...'
                />

                <Textarea
                    id="vision"
                    value={vision}
                    onChange={(e) => setVision(e.target.value)}
                    placeholder='Tell us about your company vision...'
                    rows={6}
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

export default CompanyProfileInformation;
